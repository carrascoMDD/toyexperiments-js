/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Watcher')
}



var aM_Watcher = function (m_ConstValues, m_Functionx, m_Defense, m_Error, m_Instrument, m_Trace, m_Identifiable,
                           m_Clock, m_Ctxt) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Watcher')
    }

    var _displayName = 'm_Watcher';

    var _doc = _displayName +' module. Functions to record and propagate changes during the Performer loop.';

    var _privateMembers = [];
    var _publicMembers = [];



    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';




    var _cMaxPendingChanges = m_ConstValues.fConst( _displayName, '_cMaxPendingChanges', 1000);
    _doc+=('\n\n' +  JSON.stringify({_cMaxPendingChanges: _cMaxPendingChanges}, null, 4));
    _doc+='_cMaxPendingChanges module constant ' +
        'When the number of Changes pending to be delivered to interested parties reaches this threshold,' +
        'all the pending Changes shall be delivered to interested parties, whether or not enough time has lapsed.';



    var _cIntervalMilliseconds = m_ConstValues.fConst( _displayName, '_cIntervalMilliseconds', 1000);
    _doc+=('\n\n' +  JSON.stringify({_cIntervalMilliseconds: _cIntervalMilliseconds}, null, 4));
    _doc+='_cIntervalMilliseconds module constant ' +
        'When more time has lapsed since the last time that Changes were delivered to interested parties reaches this threshold,' +
        'all the pending Changes shall be delivered to interested parties' ;





    _doc+=('\n\nModule functions:');




    var pRegisterWatch = (function( theCtxt, thePerformance, theWatchHandler) {

        if ( !(thePerformance._v_Watchers.indexOf( theWatchHandler) >= 0)) {
            thePerformance._v_Watchers.push( theWatchHandler);
        }

        return null;

    })._sName( _displayName, 'pRegisterWatch')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',     ['Type',   'Performance']],
        [ 'theWatchHandler',    ['function']]
    ]);
    _publicMembers.push(pRegisterWatch);
    if(m_Instrument.cDocFuncs) {
        pRegisterWatch._sDesc( 'Express interest in receiving Changes.');
        _doc+=('\n\n' + pRegisterWatch._doc);
    }





    var _fNewVoidChange = (function( ) {

        var aChange = m_Identifiable.fNewIdentifiable();

        aChange._v_Type = 'Change';
        aChange._v_ParentChange = null;
        aChange._v_Performance_UID ='';
        aChange._v_Kind = '';
        aChange._v_Level = 0;

        aChange._v_Clock = null;
        aChange._v_StartMillis = null;

        aChange._v_Children = [];

        return aChange;

    })._sName( _displayName, '_fNewVoidChange')._sTrace(false);
    _privateMembers.push(_fNewVoidChange);
    if(m_Instrument.cDocFuncs) {
        _fNewVoidChange._sDesc( '');
        _doc+=('\n\n' + _fNewVoidChange._doc);
    }






    var fChange = (function( theCtxt, thePerformance, theParentChange, theKind, theChangeData) {

        var aChange = _fNewVoidChange();

        if( theParentChange) {
            aChange._v_ParentChange = theParentChange;
            aChange._v_Level = theParentChange._v_Level + 1;
            theParentChange._v_Children.push( aChange);
        }

        aChange._v_Clock = m_Clock.fNow();
        if ( thePerformance._v_StartClock) {
            aChange._v_StartMillis = m_Clock.fMillisLapsed( thePerformance._v_StartClock, aChange._v_Clock);
        }
        aChange._v_Performance_UID = ( thePerformance._UID ? thePerformance._UID : '');
        aChange._v_Kind = theKind;

        if( theChangeData) {
            if (typeof theChangeData === 'object') {
                aChange._v_Data = {};
                for( var aChangeProperty in theChangeData) {
                    if ( theChangeData.hasOwnProperty( aChangeProperty)) {
                        aChange._v_Data[ aChangeProperty] = theChangeData[ aChangeProperty];
                    }
                }
            }
        }

        thePerformance._v_PendingChanges.push( aChange);

        return aChange;

    })._sName( _displayName, 'fChange')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',     ['Type',   'Performance']],
        [ 'theParentChange', ['Type', 'Change', 'optional']],
        [ 'theKind',         ['string']],
        [ 'theChangeData',   ['object', 'optional']]
    ]);
    _publicMembers.push(fChange);
    if(m_Instrument.cDocFuncs) {
        fChange._sDesc('');
        _doc+=('\n\n' + fChange._doc);
    }







    var fDeliverChanges = (function( theCtxt, thePerformance) {

        if( !thePerformance._v_LastChangesDeliveryClock) {
            thePerformance._v_LastChangesDeliveryClock = m_Clock.fNow();
        }

        var aChangeToReturn = null;

        if( arguments.length > 1) {
            var aNumArguments = arguments.length;
            for (var anIndex = 1; anIndex < aNumArguments; anIndex++) {  /* ACV OJO TODO This should start in index 2 Change and test after stabilization of other refactorings just made*/
                var anArgument= aNumArguments[anIndex];
                if ( anArgument) {
                    if( ( typeof anArgument === 'object') && ( anArgument._v_Type === 'Change')) {
                        if ( thePerformance._v_PendingChanges.indexOf( anArgument) < 0) {
                            thePerformance._v_PendingChanges.push( anArgument);
                        }
                        aChangeToReturn = anArgument;
                    }
                }
            }
        }

        _pDeliverChanges( theCtxt, thePerformance, false);

        return aChangeToReturn;

    })._sName( _displayName, 'fDeliverChanges')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',     ['Type',   'Performance']]  /* ACV OJO TODO the imperative defense cheched the variable parameters to be of type Change but the action code also does it, so it is not needed */
    ]);
    _publicMembers.push(fDeliverChanges);
    if(m_Instrument.cDocFuncs) {
        fDeliverChanges._sDesc('');
        _doc+=('\n\n' + fDeliverChanges._doc);
    }








    var fChangeAndDeliver = (function( theCtxt, thePerformance, theParentChange, theKind, theChangeData) {

        var aChange = fChange( theCtxt, thePerformance, theParentChange, theKind, theChangeData);

        fDeliverChanges( theCtxt, thePerformance);

        return aChange;

    })._sName( _displayName, 'fChangeAndDeliver')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',     ['Type',   'Performance']],
        [ 'theParentChange', ['Type', 'Change', 'optional']],
        [ 'theKind',         ['string']],
        [ 'theChangeData',   ['object', 'optional']]
    ]);
    _publicMembers.push(fChangeAndDeliver);
    if(m_Instrument.cDocFuncs) {
        fChangeAndDeliver._sDesc('');
        _doc+=('\n\n' + fChangeAndDeliver._doc);
    }




    /* ACV OJO TODO UNUSED, that's why defense errors did not raise out of the inconsistent declaration */
    var fChangeAndDeliverWhile = (function( theCtxt, thePerformance, theParentChange, theKind, theChangeData, theFunction) {

        var aChange = fChange( theCtxt, thePerformance, theParentChange, theKind, theChangeData); /* ACV OJO INCONSISTENT! and UNUSED TODO was passing theFunction, which is not used by called method */

        fDeliverChanges( theCtxt, thePerformance);

        m_Ctxt.fWithChange( theCtxt, aChange, theFunction);

        return aChange;

    })._sName( _displayName, 'fChangeAndDeliverWhile')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',  ['Type',   'Performance']],
        [ 'theParentChange', ['Type', 'Change', 'optional']],
        [ 'theKind',         ['string']],
        [ 'theChangeData',   ['object', 'optional']],
        [ 'theFunction',     ['function']]          /* ACV OJO Defense INCONSISTENT! and UNUSED TODO named as function, but checked as string */
    ]);
    _publicMembers.push(fChangeAndDeliverWhile);
    if(m_Instrument.cDocFuncs) {
        fChangeAndDeliverWhile._sDesc('');
        _doc+=('\n\n' + fChangeAndDeliverWhile._doc);
    }









    var _pDeliverChangesWakeUpInterestHandler = (function( thePerformance) {

        _pDeliverChanges( m_Ctxt.fNewCtxt(), thePerformance, true);

        return null;

    })._sName( _displayName, '_pDeliverChangesWakeUpInterestHandler')._sTrace(_cTr)._DefendWith([
        [ 'thePerformance',  ['Type',   'Performance']]
    ]);
    _privateMembers.push(_pDeliverChangesWakeUpInterestHandler);
    if(m_Instrument.cDocFuncs) {
        _pDeliverChangesWakeUpInterestHandler._sDesc( '');
        _doc+=('\n\n' + _pDeliverChangesWakeUpInterestHandler._doc);
    }








    var pForceDeliverChanges = (function( theCtxt, thePerformance) {

        _pDeliverChanges( theCtxt, thePerformance, true);

        return null;

    })._sName( _displayName, 'pForceDeliverChanges')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',  ['Type',   'Performance']]
    ]);
    _privateMembers.push(pForceDeliverChanges);
    if(m_Instrument.cDocFuncs) {
        pForceDeliverChanges._sDesc( '');
        _doc+=('\n\n' + pForceDeliverChanges._doc);
    }







    var _pDeliverChanges = (function( theCtxt, thePerformance, theForceDelivery) {

        if ( (!thePerformance._v_PendingChanges) || (!thePerformance._v_PendingChanges.length)) {
            return null;
        }

        if( (!thePerformance._v_Watchers) || (!thePerformance._v_Watchers.length)) {
            return null;
        }



        var aForceDelivery = ( theForceDelivery && true) || false;
        if( !aForceDelivery) {
            if( thePerformance._v_PendingChanges.length >= _cMaxPendingChanges) {

                if(_pDeliverChanges._Trace) { m_Trace.pStep(
                'Force Delivery of Changes. Too many Changes have been posted since last time Changes were delivered.');}

                aForceDelivery = true;
            }
            else {
                if( m_Clock.fMoreTimeLapsedUntilNow( thePerformance._v_LastChangesDeliveryClock, _cIntervalMilliseconds)) {

                    if(_pDeliverChanges._Trace) { m_Trace.pStep(
                    'Force Delivery of Changes. Too much time has lapsed since last time Changes were delivered.');}

                    aForceDelivery = true;
                }
            }
        }



        if( !aForceDelivery) {
            if ( !thePerformance._v_DeliverChangesTimeout) {

                var aWakeupHandler = (function() {
                    var aPerformanceHere = thePerformance;
                    return function() {
                        if(_pDeliverChanges._Trace) { m_Trace.pStep(
                        'Watcher Awaken by Timeout to Deliver Changes to Interested Party.');}

                        if ( aPerformanceHere._v_DeliverChangesTimeout) {
                            clearTimeout( thePerformance._v_DeliverChangesTimeout);
                            aPerformanceHere._v_DeliverChangesTimeout = null;
                        }
                        _pDeliverChangesWakeUpInterestHandler( aPerformanceHere);
                    }
                })();


                if(_pDeliverChanges._Trace) { m_Trace.pStep(
                'Set timeout to deliver Changes.');}

                thePerformance._v_DeliverChangesTimeout = setTimeout(
                    aWakeupHandler,
                    m_Clock.fMillisFromClock( m_Clock.fClockAfterMillis( thePerformance._v_LastChangesDeliveryClock, _cIntervalMilliseconds))
                );
            }

            return null;
        }


        if ( thePerformance._v_DeliverChangesTimeout) {
            if(_pDeliverChanges._Trace) { m_Trace.pStep(
            'Clear timeout to deliver Changes.');}

            clearTimeout( thePerformance._v_DeliverChangesTimeout);

            thePerformance._v_DeliverChangesTimeout = null;
        }



        var someChanges = thePerformance._v_PendingChanges;
        thePerformance._v_PendingChanges = [];

        if( thePerformance._v_Watchers) {

            var aNumWatchers= thePerformance._v_Watchers.length;
            for ( var anIndex = 0; anIndex < aNumWatchers; anIndex++) {

                var aWatcher = thePerformance._v_Watchers[anIndex];
                if( aWatcher) {

                    if(_pDeliverChanges._Trace) { m_Trace.pStep(
                    'ChangeBroker Delivering ' + someChanges.length + ' Changes to Interested Party ' +
                    'M: ' + (aWatcher.hasOwnProperty( '_moduleName') ? aWatcher._moduleName : '?') + ' ' +
                    'F: ' + (aWatcher.hasOwnProperty( 'innerDisplayName') ? aWatcher.innerDisplayName :
                        ( aWatcher.hasOwnProperty( 'displayName') ? aWatcher.displayName :  '?')));}

                    aWatcher( theCtxt, thePerformance, someChanges.slice());
                }
            }
        }

        thePerformance._v_LastChangesDeliveryClock = m_Clock.fNow();

        return null;

    })._sName( _displayName, '_pDeliverChanges')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',   ['Type',   'Performance']],
        [ 'theForceDelivery',  ['boolean', 'optional']]
    ]);
    _privateMembers.push(_pDeliverChanges);
    if(m_Instrument.cDocFuncs) {
        _pDeliverChanges._sDesc(
        'If enough time has lapsed, or enough Changes are pending delivery, ' +
        'then deliver to interested parties all pending Changes ' +
        'representing changes on the Chant tree during the Performance of a Score.');

        _doc+=('\n\n' + _pDeliverChanges._doc);
    }










    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        pRegisterWatch:    pRegisterWatch,
        fChange:           fChange,
        fChangeAndDeliver: fChangeAndDeliver,
        fDeliverChanges:   fDeliverChanges,
        pForceDeliverChanges: pForceDeliverChanges
    };

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Watcher')
    }


    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Watcher')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_Functionx', 'm_Defense', 'm_Error', 'm_Instrument', 'm_Trace', 'm_Identifiable',
        'm_Clock', 'm_Ctxt'],
        function (m_ConstValues, m_Functionx, m_Defense, m_Error, m_Instrument, m_Trace, m_Identifiable,
                  m_Clock, m_Ctxt) {

            return aM_Watcher(m_ConstValues, m_Functionx, m_Defense, m_Error, m_Instrument, m_Trace, m_Identifiable,
                m_Clock, m_Ctxt);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Watcher.displayName]=aM_Watcher(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_Clock'],
            gChoirJS_Modules['m_Ctxt']
        );
    }
    else {
        ChoirJS_Module_Watcher= aM_Watcher(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_Clock,
            ChoirJS_Module_Ctxt
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Watcher')
}

