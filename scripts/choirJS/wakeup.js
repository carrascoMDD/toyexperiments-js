/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_WakeUp')
}



var aM_WakeUp = function (m_ConstValues, m_Ctxt, m_Functionx, m_Defense, m_Error, m_Instrument, m_Trace, m_Clock,
                          m_Identifiable, m_Watcher) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_WakeUp')
    }


    var _displayName = 'm_WakeUp';

    var _doc = _displayName +' module. Functions to register interests in being executed in the future.';

    var _privateMembers = [];
    var _publicMembers = [];



    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';



    _doc+=('\n\nModule variables:');

    var _g_WakeUpInterests = [];
    _doc+='Module variable _g_WakeUpInterests ' +
        'Holds the interests that have been registered, and not revoked, to be executed at a specified clock time.';






    _doc+=('\n\nModule functions:');





    var _fNewVoidWakeUpInterest = (function( ) {

        var anObject = m_Identifiable.fNewIdentifiable();

        anObject._v_Type = 'WakeUp';
        anObject._v_Dropped =           false;
        anObject._v_InterestKind =      '';
        anObject._v_Interested =        null;
        anObject._v_WakeUpScheduleClock =       null;
        anObject._v_RegistrationClock = null;

        return anObject;

    })._sName( _displayName, '_fNewVoidWakeUpInterest');
    _privateMembers.push(_fNewVoidWakeUpInterest);
    if(m_Instrument.cDocFuncs) {
        _fNewVoidWakeUpInterest._sDesc('');
        _doc+=('\n\n' + _fNewVoidWakeUpInterest._doc);
    }






    var fRegisterInterestToWakeUp = (function( theCtxt, thePerformance, theClock, theInterested, theInterestKind, theData) {

        var aWakeUpInterest = _fNewVoidWakeUpInterest();
        aWakeUpInterest._v_InterestKind =      theInterestKind;
        aWakeUpInterest._v_Interested =        theInterested;
        aWakeUpInterest._v_WakeUpScheduleClock =       theClock;
        aWakeUpInterest._v_RegistrationClock   = m_Clock.fNow();
        aWakeUpInterest._v_Data = {};
        if( theData) {
            aWakeUpInterest._v_Data = theData;
        }

        _pRegisterInterestToWakeUp( theCtxt, thePerformance, aWakeUpInterest);

        if( thePerformance._v_Watchers.length) {
            m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, m_Ctxt.fLastChange( theCtxt), 'WakeUpInterestRegistered', {
                _v_Interest: aWakeUpInterest
            });
        }

        return aWakeUpInterest;

        })._sName( _displayName, 'fRegisterInterestToWakeUp')._sTrace(_cTr) ._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',   ['Type',   'Performance']],
        [ 'theClock',         ['Type',   'Clock']],
        [ 'theInterested',    ['function']],    /* ACV OJO Defense TODO this was fuzzyly a string or function Make sure it works with strict function typeof */
        [ 'theInterestKind',  ['string', 'optional']],
        [ 'theData',          ['object', 'optional']]
    ]);
    _publicMembers.push(fRegisterInterestToWakeUp);
    if(m_Instrument.cDocFuncs) {
        fRegisterInterestToWakeUp._sDesc('');
        _doc+=('\n\n' + fRegisterInterestToWakeUp._doc);
    }








    var _pRegisterInterestToWakeUp = (function( theCtxt, thePerformance, theWakeUpInterest) {

        var aNumRegisteredInterests = thePerformance._v_WakeUpInterests.length;
        for (var anIndex = 0; anIndex < aNumRegisteredInterests; anIndex++) {
            var aWakeUpInterest = thePerformance._v_WakeUpInterests[anIndex];
            if( aWakeUpInterest) {

                if( aWakeUpInterest._v_WakeUpScheduleClock) {

                    if( m_Clock.fIsEarlierThan( theWakeUpInterest._v_WakeUpScheduleClock, aWakeUpInterest._v_WakeUpScheduleClock)) {

                        var aNewWakeUpInterests = thePerformance._v_WakeUpInterests.slice(0, anIndex -1);
                        aNewWakeUpInterests.push( theWakeUpInterest);
                        aNewWakeUpInterests = aNewWakeUpInterests.concat( thePerformance._v_WakeUpInterests.slice(anIndex));
                        thePerformance._v_WakeUpInterests = aNewWakeUpInterests;

                        return null;
                    }
                }
            }
        }
        thePerformance._v_WakeUpInterests.push( theWakeUpInterest);

        return null;

    })._sName( _displayName, '_pRegisterInterestToWakeUp')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',     ['Type',   'Performance']],
        [ 'theWakeUpInterest', ['Type',   'WakeUp']]
    ]);
    _publicMembers.push(_pRegisterInterestToWakeUp);
    if(m_Instrument.cDocFuncs) {
        _pRegisterInterestToWakeUp._sDesc('');
        _doc+=('\n\n' + _pRegisterInterestToWakeUp._doc);
    }








    var pDropWakeUpInterest = (function( theCtxt, thePerformance, theWakeUpInterest) {

        _pDropWakeUpInterest( theCtxt, thePerformance, theWakeUpInterest);

        if( thePerformance._v_Watchers.length) {
            if ( !( m_Ctxt.fLastChange( theCtxt)._v_Kind === 'Conduct')) {
                var xyz = 1; if( xyz) {}
            }
            m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, m_Ctxt.fLastChange( theCtxt), 'WakeUpInterestDropped', {
                _v_Interest: theWakeUpInterest
            });
        }

        return null;

    })._sName( _displayName, 'pDropWakeUpInterest')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',     ['Type',   'Performance']],
        [ 'theWakeUpInterest', ['Type',   'WakeUp']]
    ]);
    _publicMembers.push(pDropWakeUpInterest);
    if(m_Instrument.cDocFuncs) {
        pDropWakeUpInterest._sDesc(
        'Please note that this method delegates on a method with almost the same name (but prefixed with _).');
        _doc+=('\n\n' + pDropWakeUpInterest._doc);
    }






    var _pDropWakeUpInterest = (function( theCtxt, thePerformance, theWakeUpInterest) {


        var anInitialLen = thePerformance._v_WakeUpInterests.length;

        var aWakeUpInterestIndex = thePerformance._v_WakeUpInterests.indexOf( theWakeUpInterest);
        if ( aWakeUpInterestIndex < 0) {
            throw new m_Error.Error('DropWakeUpInterestUnknownError', {module: _displayName, function: _pDropWakeUpInterest, with: [theWakeUpInterest]});
        }

        var aNewWakeUpInterests = thePerformance._v_WakeUpInterests.slice(0, aWakeUpInterestIndex);
        aNewWakeUpInterests = aNewWakeUpInterests.concat( thePerformance._v_WakeUpInterests.slice( aWakeUpInterestIndex + 1, thePerformance._v_WakeUpInterests.length));
        thePerformance._v_WakeUpInterests = aNewWakeUpInterests;

        theWakeUpInterest._v_Dropped = true;

        var aFinalLen = thePerformance._v_WakeUpInterests.length;

        if( ! ( aFinalLen === ( anInitialLen - 1))) {
            console.log( 'ERROR in _pDropWakeUpInterest:  ! ( aFinalLen === ( anInitialLen - 1))');
        }

        if( thePerformance._v_WakeUpInterests.indexOf( theWakeUpInterest) >= 0) {
            console.log( 'ERROR in _pDropWakeUpInterest:  WakeUp Interest not removed');
        }
        return null;

    })._sName( _displayName, '_pDropWakeUpInterest')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',     ['Type',   'Performance']],
        [ 'theWakeUpInterest', ['Type',   'WakeUp']]
    ]);
    _publicMembers.push(_pDropWakeUpInterest);
    if(m_Instrument.cDocFuncs) {
        _pDropWakeUpInterest._sDesc(
        'Please note that another method exists with almost the same name (but without the _ prefix).');

        _doc+=('\n\n' + _pDropWakeUpInterest._doc);
    }








    var pRescheduleWakeUpInterest = (function( theCtxt, thePerformance, theWakeUpInterest) {

        /* ACV OJO TODO submit Change about a WakeUp Interest being re-scheduled
        * Implementation similar to Change submission in  pDropWakeUpInterest above
        */

        var aWakeUpInterestIndex = thePerformance._v_WakeUpInterests.indexOf( theWakeUpInterest);
        if ( aWakeUpInterestIndex < 0) {
            throw new m_Error.Error('DropWakeUpInterestUnknownError', {module: _displayName, function: pRescheduleWakeUpInterest, with: [theWakeUpInterest]});
        }

        _pDropWakeUpInterest( theCtxt, thePerformance, theWakeUpInterest);

        _pRegisterInterestToWakeUp( theCtxt, thePerformance, theWakeUpInterest);

        return null;

    })._sName( _displayName, 'pRescheduleWakeUpInterest')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',     ['Type',   'Performance']],
        [ 'theWakeUpInterest', ['Type',   'WakeUp']]
    ]);
    _publicMembers.push(pRescheduleWakeUpInterest);
    if(m_Instrument.cDocFuncs) {
        pRescheduleWakeUpInterest._sDesc('');
        _doc+=('\n\n' + pDropWakeUpInterest._doc);
    }









    var fWakeUpInterestsDueNow = (function( theCtxt, thePerformance) {

        if ( !thePerformance._v_WakeUpInterests) {
            return null;
        }

        var aNumWakeUpInterests = thePerformance._v_WakeUpInterests.length;
        if ( !aNumWakeUpInterests) {
            return [];
        }

        var someWakeUpInterestsDueNow = [];

        for (var anIndex = 0; anIndex < aNumWakeUpInterests; anIndex++) {
            var aWakeUpInterest = thePerformance._v_WakeUpInterests[anIndex];
            if ( aWakeUpInterest && ( !aWakeUpInterest._v_Dropped)) {
                if ( m_Clock.fClockReachedNow( aWakeUpInterest._v_WakeUpScheduleClock)) {
                    someWakeUpInterestsDueNow.push( aWakeUpInterest);
                }
            }
        }

        return someWakeUpInterestsDueNow;

    })._sName( _displayName, 'fWakeUpInterestsDueNow')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',     ['Type',   'Performance']]
    ]);
    _publicMembers.push(fWakeUpInterestsDueNow);
    if(m_Instrument.cDocFuncs) {
        fWakeUpInterestsDueNow._sDesc('');
        _doc+=('\n\n' + fWakeUpInterestsDueNow._doc);
    }









    var fEarliestWakeUpInterestDueNow = (function( theCtxt, thePerformance) {

        if ( !thePerformance._v_WakeUpInterests) {
            return null;
        }

        var aNumWakeUpInterests = thePerformance._v_WakeUpInterests.length;
        if ( !aNumWakeUpInterests) {
            return null;
        }

        for (var anIndex = 0; anIndex < aNumWakeUpInterests; anIndex++) {
            var aWakeUpInterest = thePerformance._v_WakeUpInterests[anIndex];
            if ( aWakeUpInterest  && ( !aWakeUpInterest._v_Dropped)) {
                var aReached = m_Clock.fClockReachedNow( aWakeUpInterest._v_WakeUpScheduleClock);
                if ( aReached ) {

                    if(fEarliestWakeUpInterestDueNow._Trace) { m_Trace.pStep(
                    'EarliestWakeUpInterestDueNow ' + aWakeUpInterest._v_UID + ' ' + aWakeUpInterest._v_InterestKind);}

                    return aWakeUpInterest;
                }
            }
        }

        return null;

    })._sName( _displayName, 'fEarliestWakeUpInterestDueNow')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',     ['Type',   'Performance']]
    ]);
    _publicMembers.push(fEarliestWakeUpInterestDueNow);
    if(m_Instrument.cDocFuncs) {
        fEarliestWakeUpInterestDueNow._sDesc('');
        _doc+=('\n\n' + fEarliestWakeUpInterestDueNow._doc);
    }









    var fExistsAnyWakeUpInterest = (function( theCtxt, thePerformance) {

        if ( !thePerformance._v_WakeUpInterests) {
            return false;
        }

        var aNumWakeUpInterests = thePerformance._v_WakeUpInterests.length;
        if ( !aNumWakeUpInterests) {
            return false;
        }

        for (var anIndex = 0; anIndex < aNumWakeUpInterests; anIndex++) {
            var aWakeUpInterest = thePerformance._v_WakeUpInterests[anIndex];
            if ( aWakeUpInterest  && ( !aWakeUpInterest._v_Dropped)) {
                return true;
            }
        }

        return false;

    })._sName( _displayName, 'fExistsAnyWakeUpInterest')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',     ['Type',   'Performance']]
    ]);
    _publicMembers.push(fExistsAnyWakeUpInterest);
    if(m_Instrument.cDocFuncs) {
        fExistsAnyWakeUpInterest._sDesc('');
        _doc+=('\n\n' + fExistsAnyWakeUpInterest._doc);
    }








    var fEarliestWakeUpInterest = (function( theCtxt, thePerformance) {

        if ( !thePerformance._v_WakeUpInterests) {
            return null;
        }

        var aNumWakeUpInterests = thePerformance._v_WakeUpInterests.length;
        if ( !aNumWakeUpInterests) {
            return null;
        }

        for (var anIndex = 0; anIndex < aNumWakeUpInterests; anIndex++) {
            var aWakeUpInterest = thePerformance._v_WakeUpInterests[anIndex];
            if ( aWakeUpInterest  && (!aWakeUpInterest._v_Dropped)) {
                return aWakeUpInterest;
            }
        }

        return null;

    })._sName( _displayName, 'fEarliestWakeUpInterest')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',     ['Type',   'Performance']]
    ]);
    _publicMembers.push(fEarliestWakeUpInterest);
    if(m_Instrument.cDocFuncs) {
        fEarliestWakeUpInterest._sDesc('');
        _doc+=('\n\n' + fEarliestWakeUpInterest._doc);
    }





    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,


        fRegisterInterestToWakeUp:     fRegisterInterestToWakeUp,
        pDropWakeUpInterest:           pDropWakeUpInterest,
        pRescheduleWakeUpInterest:     pRescheduleWakeUpInterest,

        fEarliestWakeUpInterest:       fEarliestWakeUpInterest,
        fEarliestWakeUpInterestDueNow: fEarliestWakeUpInterestDueNow,
        fWakeUpInterestsDueNow:        fWakeUpInterestsDueNow,
        fExistsAnyWakeUpInterest:      fExistsAnyWakeUpInterest

    };

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_WakeUp')
    }


    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_WakeUp')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_Ctxt', 'm_Functionx', 'm_Defense', 'm_Error', 'm_Instrument', 'm_Trace', 'm_Clock',
        'm_Identifiable', 'm_Watcher'],
        function (m_ConstValues, m_Ctxt, m_Functionx, m_Defense, m_Error, m_Instrument, m_Trace, m_Clock,
                  m_Identifiable, m_Watcher) {

            return aM_WakeUp(m_ConstValues, m_Ctxt, m_Functionx, m_Defense, m_Error, m_Instrument, m_Trace, m_Clock,
                m_Identifiable, m_Watcher);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_WakeUp.displayName]=aM_WakeUp(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Clock'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_Watcher']
        );
    }
    else {
        ChoirJS_Module_WakeUp= aM_WakeUp(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Clock,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_Watcher
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_WakeUp')
}

