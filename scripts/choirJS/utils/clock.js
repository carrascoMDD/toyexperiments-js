/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Clock')
}


var aM_Clock = function(m_ConstValues, m_Functionx, m_Instrument, m_Error, m_Defense) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Clock')
    }


    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */
    if(m_Defense) {}   /* To avoid code quality tools from complaining about unused parameter */


    var _displayName = 'm_Clock';

    var _doc=_displayName +' module. Functions to obtain the current time, and compute relative times.\n' +
        'May use the integer millisecond timeout mechanism of Javascript, ' +
        'or the finer float second timing of an AudioContext.currentTime';


    var _privateMembers = [];
    var _publicMembers = [];



    _doc+=('\n\nConfigurable module constants with values copied from constvalues.js .');


    var _c_LogClockComputations= m_ConstValues.fConst( _displayName, '_c_LogClockComputations', false);
    _doc+=('\n\n' +  JSON.stringify({_c_LogClockComputations: _c_LogClockComputations}, null, 4));



    var _c_UseAudioContext= m_ConstValues.fConst( _displayName, '_c_UseAudioContext', true);
    _doc+=('\n\n' +  JSON.stringify({_c_UseAudioContext: _c_UseAudioContext}, null, 4));

    var _cOnePointZero = 1.0;



    _doc+=('\n\nModule variables:');


    var _g_AudioContextInitializationAttempted = false;
    _doc+=('\n\nModule variable _g_AudioContextInitializationAttempted ' +
        'If true, an attempt has been made to initialize an AudioContext to supply timing, but failed. ' +
        'All future timing requests shall be served from Javascript Date.');

    var _g_AudioContext  = null;
    _doc+=('\n\nModule variable _g_AudioContextInitializationAttempted ' +
        'Holds an instance of AudioContext to supply timing.');

    var _g_MillisAtAudioContextStart = null;
    _doc+=('\n\nModule variable _g_MillisAtAudioContextStart ' +
        'The Javascript Date milliseconds when AudioContext was initialized.');




    _doc+='\n\nModule Functions.';



    var fNow = (function() {

        if ( _c_UseAudioContext) {
            return _fNow_fromAudioContext();
        }

        return _fNow_fromDate();

    })._sName( _displayName, 'fNow');
    _publicMembers.push(fNow);
    if(m_Instrument.cDocFuncs) {
        fNow._sDesc('Obtain the current time. ' +
            'May use the integer millisecond timeout mechanism of Javascript, ' +
            'or the finer float second timing of an AudioContext.currentTime');
        _doc+=('\n\n' + fNow._doc);
    }






    var fClockFromTime = (function( theTime) {

        if ( _c_UseAudioContext) {
            return _fClockFromTime_AudioContext( theTime);
        }

        return _fClockFromTime_Date( theTime);

    })._sName( _displayName, 'fClockFromTime');
    _publicMembers.push(fClockFromTime);
    if(m_Instrument.cDocFuncs) {
        fClockFromTime._sDesc( 'Create a new Clock with the supplied time.');
        _doc+=('\n\n' + fClockFromTime._doc);
    }






    var fClockFromSeconds = (function( theTime) {

       return _fClockFromTime_AudioContext( theTime);

    })._sName( _displayName, 'fClockFromSeconds');
    _publicMembers.push(fClockFromSeconds);
    if(m_Instrument.cDocFuncs) {
        fClockFromSeconds._sDesc( 'Create a new Clock with the supplied time as a float of seconds.');
        _doc+=('\n\n' + fClockFromSeconds._doc);
    }




    var _fClockFromTime_AudioContext = (function( theTime) {

        return {
            _v_Type: 'Clock',
            _v_Mode: 'Date',
            _v_Time:  theTime
        };

    })._sName( _displayName, '_fClockFromTime_AudioContext');
    _privateMembers.push(_fClockFromTime_AudioContext);
    if(m_Instrument.cDocFuncs) {
        _fClockFromTime_AudioContext._sDesc( 'Create a new Clock with the supplied time.');
        _doc+=('\n\n' + _fClockFromTime_AudioContext._doc);
    }


    var _fClockFromTime_Date = (function( theTime) {

        return {
            _v_Type: 'Clock',
            _v_Mode: 'Date',
            _v_Time:  theTime
        };

    })._sName( _displayName, '_fClockFromTime_Date');
    _privateMembers.push(_fClockFromTime_Date);
    if(m_Instrument.cDocFuncs) {
        _fClockFromTime_Date._sDesc( 'Create a new Clock with the supplied time.');
        _doc+=('\n\n' + _fClockFromTime_Date._doc);
    }






    var _fNow_fromDate = (function() {

        return {
            _v_Type: 'Clock',
            _v_Mode: 'Date',
            _v_Time:  new Date().getTime()
        };

    })._sName( _displayName, '_fNow_fromDate');
    _privateMembers.push(_fNow_fromDate);
    if(m_Instrument.cDocFuncs) {
        _fNow_fromDate._sDesc( 'Obtain the current time from Javascript Date, with lower resolution and accuracy than AudioContext.');
        _doc+=('\n\n' + _fNow_fromDate._doc);
    }







    var _fNow_fromAudioContext = (function() {

        if(!_g_AudioContext) {
            if ( _g_AudioContextInitializationAttempted) {
                return _fNow_fromDate();
            }
            else {
                _pOpenAudioContext();
                if(!_g_AudioContext) {
                    return _fNow_fromDate();
                }
            }
        }

        return {
            _v_Type: 'Clock',
            _v_Mode: 'AudioContext',
            _v_Time:  _g_AudioContext.currentTime
        };

    })._sName( _displayName, '_fNow_fromAudioContext');
    _privateMembers.push(_fNow_fromAudioContext);
    if(m_Instrument.cDocFuncs) {
        _fNow_fromAudioContext._sDesc( 'Obtain the current time from the finer float second timing of an AudioContext.currentTime');
        _doc+=('\n\n' + _fNow_fromAudioContext._doc);
    }







    var _pOpenAudioContext = (function() {

        _g_AudioContextInitializationAttempted = true;

        var anAudioContextFactory = window.AudioContext || window.webkitAudioContext;
        if ( !anAudioContextFactory) {
            return null;
        }
        _g_AudioContext = new anAudioContextFactory();

        var anOscillator = _g_AudioContext.createOscillator();
        anOscillator.frequency.type = 'sine';
        anOscillator.frequency.value = 1760.00;
        var anEnvelope = _g_AudioContext.createGainNode();
        anEnvelope.gain.setValueAtTime( 0, 0 );
        anEnvelope.gain.linearRampToValueAtTime( 0.0, 0.1);
        anOscillator.connect( anEnvelope);
        anEnvelope.connect( _g_AudioContext.destination);
        anOscillator.start(0.0);

        _g_MillisAtAudioContextStart = new Date().getTime();

        return null;

    })._sName( _displayName, '_pOpenAudioContext');
    _privateMembers.push(_pOpenAudioContext);
    if(m_Instrument.cDocFuncs) {
        _pOpenAudioContext._sDesc('Attempt to open an AudioContext, if the platform supports it.');
        _doc+=('\n\n' + _pOpenAudioContext._doc);
    }






    var pWasteTime = (function( theMillis) {
        if( !theMillis) {
            return null;
        }
        var aCurrentMillis = new Date().getTime();
        var aFinalMillis   = aCurrentMillis + theMillis;
        while (aCurrentMillis   < aFinalMillis){
            aCurrentMillis = new Date().getTime();
        }
        return null;
    })._sName( _displayName, 'pWasteTime');
    _publicMembers.push(pWasteTime);
    if(m_Instrument.cDocFuncs) {
        pWasteTime._sDesc('Shall waste the specified number of milliseconds in a loop.');
        _doc+=('\n\n' + pWasteTime._doc);
    }








    var fMoreTimeLapsedUntilNow = (function( theClock, theMillisLapse) {

        var aClockNow = fNow();
        var aMoreTimeLapsedUntilNow = !fWithinLapse( theClock, aClockNow, theMillisLapse);

        if( _c_LogClockComputations) {
            console.log( 'fMoreTimeLapsedUntilNow theClock = '  + JSON.stringify( theClock));
            console.log( 'fMoreTimeLapsedUntilNow theMillisLapse = '  + JSON.stringify( theMillisLapse));
            console.log( 'fMoreTimeLapsedUntilNow aClockNow = ' + JSON.stringify( aClockNow));
            console.log( 'fMoreTimeLapsedUntilNow aMoreTimeLapsedUntilNow = ' + JSON.stringify( aMoreTimeLapsedUntilNow));
        }

        return aMoreTimeLapsedUntilNow;

    })._sName( _displayName, 'fMoreTimeLapsedUntilNow')._DefendWith([
        [ 'theClock',        ['Type', 'Clock']],
        [ 'theMillisLapse',  ['number']] /* ACV OJO TODO defend was unconstrained by imperative defense */
    ]);
    _publicMembers.push(fMoreTimeLapsedUntilNow);
    if(m_Instrument.cDocFuncs) {
        fMoreTimeLapsedUntilNow._sDesc(
        'Returns true if time lapsed from theClock until now is longer than theLapse.');

        _doc+=('\n\n' + fMoreTimeLapsedUntilNow._doc);
    }




    var fWithinLapse = (function( theOlderClock, theNewerClock, theMillisLapse) {

        var aMillisLapsed = fMillisLapsed( theOlderClock, theNewerClock);
        var aWithinLapse = aMillisLapsed < theMillisLapse;

        if( _c_LogClockComputations) {
            console.log( 'fWithinLapse theOlderClock = '  + JSON.stringify( theOlderClock));
            console.log( 'fWithinLapse theNewerClock = ' + JSON.stringify( theNewerClock));
            console.log( 'fWithinLapse theMillisLapse = '  + JSON.stringify( theMillisLapse));
            console.log( 'fWithinLapse aWithinLapse  = ' + JSON.stringify( aWithinLapse));
        }

        return aWithinLapse;

    })._sName( _displayName, 'fWithinLapse')._DefendWith([
        [ 'theOlderClock',   ['Type', 'Clock']],
        [ 'theNewerClock',   ['Type', 'Clock']],
        [ 'theMillisLapse',  ['number']]
    ]);
    _publicMembers.push(fWithinLapse);
    if(m_Instrument.cDocFuncs) {
        fWithinLapse._sDesc(
        'Return true if time lapsed from theOlderClock until theNewerClock is longer than theLapse.');

        _doc+=('\n\n' + fWithinLapse._doc);
    }





    var fIsEarlierThan = (function( theOlderClock, theNewerClock) {

        var anOlderMillis = fMillisFromClock( theOlderClock);
        var aNewerMillis  = fMillisFromClock( theNewerClock);

        if( _c_LogClockComputations) {
            console.log( 'fMillisLapsed theOlderClock = '  + JSON.stringify( theOlderClock));
            console.log( 'fMillisLapsed theNewerClock = ' + JSON.stringify( theNewerClock));
            console.log( 'fMillisLapsed anOlderMillis = '  + JSON.stringify( anOlderMillis));
            console.log( 'fMillisLapsed aNewerMillis = '  + JSON.stringify( aNewerMillis));
        }

        return anOlderMillis < aNewerMillis;

    })._sName( _displayName, 'fIsEarlierThan')._DefendWith([
        [ 'theOlderClock',   ['Type', 'Clock']],
        [ 'theNewerClock',   ['Type', 'Clock']]
    ]);
    _publicMembers.push(fIsEarlierThan);
    if(m_Instrument.cDocFuncs) {
        fIsEarlierThan._sDesc(
        'Returns true if theOlderClock is earlier than theNewerClock.');

        _doc+=('\n\n' + fIsEarlierThan._doc);
    }





    var fMillisLapsed = (function( theOlderClock, theNewerClock) {

        var anOlderMillis = fMillisFromClock( theOlderClock);
        var aNewerMillis  = fMillisFromClock( theNewerClock);

        var aMillisLapsed = Math.floor( Math.max( 0, aNewerMillis - anOlderMillis));

        if( _c_LogClockComputations) {
            console.log( 'fMillisLapsed theOlderClock = '  + JSON.stringify( theOlderClock));
            console.log( 'fMillisLapsed theNewerClock = ' + JSON.stringify( theNewerClock));
            console.log( 'fMillisLapsed anOlderMillis = '  + JSON.stringify( anOlderMillis));
            console.log( 'fMillisLapsed aNewerMillis = '  + JSON.stringify( aNewerMillis));
            console.log( 'fMillisLapsed aMillisLapsed = ' + JSON.stringify( aMillisLapsed));
        }

        return aMillisLapsed;

    })._sName( _displayName, 'fMillisLapsed')._DefendWith([
        [ 'theOlderClock',   ['Type', 'Clock']],
        [ 'theNewerClock',   ['Type', 'Clock']]
    ]);
    _publicMembers.push(fMillisLapsed);
    if(m_Instrument.cDocFuncs) {
        fMillisLapsed._sDesc('Return the number of milliseconds lapsed from theOlderClock until theNewerClock.');
        _doc+=('\n\n' + fMillisLapsed._doc);
    }








    var fClockReachedNow = (function( theAlarmClock) {

        var aNowClock = fNow();
        var aMillisNow = fMillisFromClock( aNowClock);
        var anAlarmMillis = fMillisFromClock( theAlarmClock);

        var aReached = aMillisNow >= anAlarmMillis;

        if( _c_LogClockComputations) {
            console.log( 'fMillisLapsed theAlarmClock = '  + JSON.stringify( theAlarmClock));
            console.log( 'fMillisLapsed aNowClock = ' + JSON.stringify( aNowClock));
            console.log( 'fMillisLapsed aReached = '  + JSON.stringify( aReached));
        }

        return aReached;

    })._sName( _displayName, 'fClockReachedNow')._DefendWith([
        [ 'theAlarmClock',   ['Type', 'Clock']]
    ]);
    _publicMembers.push(fMillisLapsed);
    if(m_Instrument.cDocFuncs) {
        fClockReachedNow._sDesc(
        'Returns true if the specified time has been reached.');

        _doc+=('\n\n' + fClockReachedNow._doc);
    }








    var fMillisFromClock = (function( theClock) {

        if( theClock._v_Mode === 'Date') {
            return theClock._v_Time ? theClock._v_Time : 0;
        }

        if( theClock._v_Mode === 'AudioContext') {
            return theClock._v_Time ? Math.floor( theClock._v_Time * 1000) : 0;
        }

        return 0;

    })._sName( _displayName, 'fMillisFromClock')._DefendWith([
        [ 'theClock',   ['Type', 'Clock']]
    ]);
    _publicMembers.push(fMillisFromClock);
    if(m_Instrument.cDocFuncs) {
        fMillisFromClock._sDesc(
        'Returns the number of milliseconds in theClock.');

        _doc+=('\n\n' + fMillisFromClock._doc);
    }




    var fMillisUntil = (function( theClock) {

        var aNowMillis = fMillisFromClock( fNow());
        var aMillis    = fMillisFromClock( theClock);

        var aMillisUntil = aMillis - aNowMillis;

        if( _c_LogClockComputations) {
            console.log( 'fMillisUntil theClock = '  + JSON.stringify( theClock));
            console.log( 'fMillisUntil aNowMillis = ' + JSON.stringify( aNowMillis));
            console.log( 'fMillisLapsed aMillis = '  + JSON.stringify( aMillis));
            console.log( 'fMillisLapsed aMillisUntil = '  + JSON.stringify( aMillisUntil));
        }

        return aMillisUntil;

    })._sName( _displayName, 'fMillisUntil')._DefendWith([
        [ 'theClock',   ['Type', 'Clock']]
    ]);
    _publicMembers.push(fMillisUntil);
    if(m_Instrument.cDocFuncs) {
        fMillisUntil._sDesc(
        'Returns the number of milliseconds until the supplied Clock.');

        _doc+=('\n\n' + fMillisUntil._doc);
    }





    var fClockAfterMillis = (function( theClock, theMillis) {

        var aClock = null;

        if( theClock._v_Mode === 'Date') {
            aClock = {
                _v_Type: 'Clock',
                _v_Mode: 'Date',
                _v_Time: theClock._v_Time + theMillis
            };
        }

        if( theClock._v_Mode === 'AudioContext') {
            aClock = {
                _v_Type: 'Clock',
                _v_Mode: 'AudioContext',
                _v_Time:  theClock._v_Time + (( _cOnePointZero * theMillis) / 1000)
            };
        }

        if( _c_LogClockComputations) {
            console.log( 'fClockAfterMillis theClock = '  + JSON.stringify( theClock));
            console.log( 'fClockAfterMillis theMillis = ' + JSON.stringify( theMillis));
            console.log( 'fClockAfterMillis aClock = '  + JSON.stringify( aClock));
        }

        return aClock;

    })._sName( _displayName, 'fClockAfterMillis')._DefendWith([
        [ 'theClock',   ['Type', 'Clock']],
        [ 'theMillis',   ['number']]
    ]);
    _publicMembers.push(fClockAfterMillis);
    if(m_Instrument.cDocFuncs) {
        fClockAfterMillis._sDesc(
        'Returns a Clock theMillis in the future after the supplied theClock.');

        _doc+=('\n\n' + fClockAfterMillis._doc);
    }






    var fAfterNowPlusMillis = (function( theMillis) {

        var aClockNow = fNow();
        var aNowAfterMillis= fClockAfterMillis( aClockNow, theMillis);

        if( _c_LogClockComputations) {
            console.log( 'fAfterNowPlusMillis theMillis = ' + JSON.stringify( theMillis));
            console.log( 'fAfterNowPlusMillis aClockNow = '  + JSON.stringify( aClockNow));
            console.log( 'fAfterNowPlusMillis aNowAfterMillis = '  + JSON.stringify( aNowAfterMillis));
        }

        return aNowAfterMillis;

    })._sName( _displayName, 'fAfterNowPlusMillis')._DefendWith([
        [ 'theMillis',   ['number']]
    ]);
    _publicMembers.push(fAfterNowPlusMillis);
    if(m_Instrument.cDocFuncs) {
        fAfterNowPlusMillis._sDesc(
        'Returns a Clock theMillis in the future after the supplied theClock.');

        _doc+=('\n\n' + fAfterNowPlusMillis._doc);
    }




    var fString = (function( theClock) {

        var aMillis = fMillisFromClock( theClock);
        var aDate = new Date( aMillis);

        return ('0' + aDate.getHours()).substr(-2) +
            ':' + ('0' + aDate.getMinutes()).substr(-2) +
            ':' + ('0' + aDate.getSeconds()).substr(-2) +
            '.' + ('000' + (aMillis % 1000)).substr(-3);

    })._sName( _displayName, 'fString');
    _publicMembers.push(fString);
    if(m_Instrument.cDocFuncs) {
        fString._sDesc(
        'Return a clock date and time as a string. ' +
        'Object supplied as Clock is not an object with any prototype more specialized than object, ' +
        'so this is not delegating into a toString() method of the object supplied as Clock.');

        _doc+=('\n\n' + fString._doc);
    }





    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,


        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        fNow:                    fNow,
        fClockFromTime:          fClockFromTime,
        pWasteTime:              pWasteTime,
        fMoreTimeLapsedUntilNow: fMoreTimeLapsedUntilNow,
        fWithinLapse:            fWithinLapse,
        fIsEarlierThan:          fIsEarlierThan,
        fClockReachedNow:        fClockReachedNow,
        fMillisLapsed:           fMillisLapsed,
        fMillisFromClock:        fMillisFromClock,
        fMillisUntil:            fMillisUntil,
        fClockFromSeconds:       fClockFromSeconds,
        fClockAfterMillis:       fClockAfterMillis,
        fAfterNowPlusMillis:     fAfterNowPlusMillis,
        fString:                 fString

    };
    if(aModule) {}  /* To avoid code quality tools from complaining about unused parameter */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Clock')
    }

    return aModule;
};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Clock')
}



if( typeof define === 'function') {

    define(['m_ConstValues', 'm_Functionx', 'm_Instrument', 'm_Error', 'm_Defense'],
        function (m_ConstValues,m_Functionx, m_Instrument, m_Error, m_Defense) {

            return aM_Clock(m_ConstValues, m_Functionx, m_Instrument, m_Error, m_Defense);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Clock.displayName]=aM_Clock(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Defense']
        );
    }
    else {
        ChoirJS_Module_Clock = aM_Clock(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Error,
            ChoirJS_Module_Defense
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Clock')
}
