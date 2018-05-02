/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_DeltaBroker')
}



var aM_DeltaBroker = function (m_ConstValues, m_Functionx, m_Error, m_Instrument, m_Defense, m_Trace, m_Log, m_Clock,
                               m_Ctxt, m_Watcher, m_WakeUp) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_DeltaBroker')
    }

    if(m_Log) {}


    var _privateMembers = [];
    var _publicMembers = [];

    var _displayName = 'm_DeltaBroker';

    var _doc = _displayName +' module. Functions to execute propagate Chant tree changes during Performance of a Score.';



    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cMaxDeltasToReportInInterestToWakeUp = 100;


    var _cTr = m_Trace.cTrace && m_ConstValues.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';


    var _cMaxPendingDeltas = m_ConstValues.fConst( _displayName, '_cMaxPendingDeltas', 1000);
    _doc+=('\n\n' +  JSON.stringify({_cMaxPendingDeltas: _cMaxPendingDeltas}, null, 4));
    _doc+='_cMaxPendingDeltas module constant ' +
        'When the number of Deltas pending to be delivered to interested parties reaches this threshold,' +
        'all the pending Deltas shall be delivered to interested parties, whether or not enough time has lapsed.';


    var _cIntervalMilliseconds = m_ConstValues.fConst( _displayName, '_cIntervalMilliseconds', 1000);
    _doc+=('\n\n' +  JSON.stringify({_cIntervalMilliseconds: _cIntervalMilliseconds}, null, 4));
    _doc+='_cMaxPendingDeltas module constant ' +
        'When more time has lapsed since the last time that Deltas were delivered to interested parties reaches this threshold,' +
        'all the pending Deltas shall be delivered to interested parties' ;






    _doc+=('\n\nModule functions:');





    var pRegisterInterest = (function( theCtxt, thePerformance, theInterested) {

        if ( !( thePerformance._v_InterestedParties.indexOf( theInterested) >= 0)) {
            thePerformance._v_InterestedParties.push( theInterested);
        }

        return null;

    })._sName( _displayName, 'pRegisterInterest')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',  ['Type', 'Performance']],
        [ 'theInterested',   ['function']]
    ]);
    _publicMembers.push(pRegisterInterest);
    if(m_Instrument.cDocFuncs) {
        pRegisterInterest._sDesc(
        'Express interest in receiving Deltas ' +
        'representing changes on the Chant tree during the Performance of a Score, ' +
        'supplying a function to be invoked whenever deltas must be delivered.');

        _doc+=('\n\n' + pRegisterInterest._doc);
    }









    var pPostDelta = (function( theCtxt, thePerformance, theDelta) {

        if( !thePerformance._v_LastDeltasDeliveryClock) {
            thePerformance._v_LastDeltasDeliveryClock = m_Clock.fNow();
        }

        thePerformance._v_PendingDeltas.push( theDelta);

        if( thePerformance._v_Watchers.length) {
            m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, m_Ctxt.fLastChange( theCtxt), 'PostDelta', {
                _v_Delta: theDelta
            });
        }

        _pDeliverDeltas( theCtxt, thePerformance, false);

        return null;

    })._sName( _displayName, 'pPostDelta')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',  ['Type', 'Performance']],
        [ 'theDelta',        ['Type', 'Delta']]
    ]);
    _publicMembers.push(pPostDelta);
    if(m_Instrument.cDocFuncs) {
        pPostDelta._sDesc(
        'Record a Delta representing changes on the Chant tree during the Performance of a Score, ' +
        'for delivery to interested parties.');

        _doc+=('\n\n' + pPostDelta._doc);
    }








    var _pDeliverDeltasWakeUpInterestHandler = (function( theCtxt, thePerformance) {

        _pDeliverDeltas( theCtxt, thePerformance, true);

        return null;

    })._sName( _displayName, '_pDeliverDeltasWakeUpInterestHandler')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',  ['Type', 'Performance']]
    ]);
    _privateMembers.push(_pDeliverDeltasWakeUpInterestHandler);
    if(m_Instrument.cDocFuncs) {
        _pDeliverDeltasWakeUpInterestHandler._sDesc( '');
        _doc+=('\n\n' + _pDeliverDeltasWakeUpInterestHandler._doc);
    }







    var _pDeliverDeltas = (function( theCtxt, thePerformance, theForceDelivery) {

        var anIndex;

        if ( (!thePerformance._v_PendingDeltas) || (!thePerformance._v_PendingDeltas.length)) {
            return null;
        }

        if ( (!thePerformance._v_InterestedParties) || (!thePerformance._v_InterestedParties.length)) {
            return null;
        }

        var aForceDelivery = ( theForceDelivery && true) || false;
        if( !aForceDelivery) {
            if( thePerformance._v_PendingDeltas.length >= _cMaxPendingDeltas) {

                if(_pDeliverDeltas._Trace) { m_Trace.pStep(
                    'Force Delivery of Deltas. Too many Deltas have been posted since last time Deltas were delivered.');}

                aForceDelivery = true;
            }
            else {
                if( m_Clock.fMoreTimeLapsedUntilNow( thePerformance._v_LastDeltasDeliveryClock, _cIntervalMilliseconds)) {

                    if(_pDeliverDeltas._Trace) { m_Trace.pStep(
                    'Force Delivery of Deltas. Too much time has lapsed since last time Deltas were delivered.');}

                    aForceDelivery = true;
                }
             }
        }
        if( !aForceDelivery) {
            if ( !thePerformance._v_DeltasWakeUpInterest) {

                var aWakeupHandler = (function() {
                    var aCtxtHere = theCtxt;
                    var aPerformanceHere = thePerformance;
                    return function( ) {
                        if(_pDeliverDeltas._Trace) { m_Trace.pStep(
                        'DeltaBroker Awaken to Deliver Deltas to Interested Party.');}

                        if ( aPerformanceHere._v_DeltasWakeUpInterest) {
                            aPerformanceHere._v_DeltasWakeUpInterest = null;
                        }
                        _pDeliverDeltasWakeUpInterestHandler( aCtxtHere, aPerformanceHere);
                    }
                })();
                aWakeupHandler._sName( _displayName, '_pDeliverDeltas.aWakeupHandler')._sTrace(_pDeliverDeltas._Trace);


                if(_pDeliverDeltas._Trace) { m_Trace.pStep(
                'Register WakeUp interest to deliver deltas.');}

                var aNumDeltas = thePerformance._v_PendingDeltas.length;
                var aMaxNumDeltas = Math.min( _cMaxDeltasToReportInInterestToWakeUp, aNumDeltas);
                var someDeltaKinds = [];
                for ( anIndex = 0; anIndex < aMaxNumDeltas; anIndex++) {
                    var aDelta = thePerformance._v_PendingDeltas[ anIndex];
                    if ( aDelta) {
                        var aDeltaKind = aDelta._v_DeltaKind;
                        if ( aDeltaKind) {
                            someDeltaKinds.push( aDeltaKind);
                        }
                    }
                }
                thePerformance._v_DeltasWakeUpInterest = m_WakeUp.fRegisterInterestToWakeUp(
                    theCtxt,
                    thePerformance,
                    m_Clock.fClockAfterMillis( thePerformance._v_LastDeltasDeliveryClock, _cIntervalMilliseconds),
                    aWakeupHandler,
                    'DeltaBroker',
                    {
                        _v_NumDeltas: aNumDeltas,
                        _v_SomeDeltaKinds: someDeltaKinds
                    }
                );
            }

            return null;
        }


        if ( thePerformance._v_DeltasWakeUpInterest) {
            m_WakeUp.pDropWakeUpInterest( theCtxt, thePerformance, thePerformance._v_DeltasWakeUpInterest);
            thePerformance._v_DeltasWakeUpInterest = null;
        }

        var someDeltas = thePerformance._v_PendingDeltas.slice();
        thePerformance._v_PendingDeltas = [];

        var aNumInterested = thePerformance._v_InterestedParties.length;
        for ( anIndex = 0; anIndex < aNumInterested; anIndex++) {

            var anInterested = thePerformance._v_InterestedParties[ anIndex];
            if ( anInterested) {

                if(_pDeliverDeltas._Trace) { m_Trace.pStep(
                'DeltaBroker Delivering ' + someDeltas.length + ' Deltas to Interested Party.');}

                if(_pDeliverDeltas._Trace) { m_Trace.pStep(
                'DeltaBroker Delivering ' + someDeltas.length + ' Changes to Interested Party ' +
                    'M: ' + (anInterested.hasOwnProperty( '_moduleName') ? anInterested._moduleName : '?') + ' ' +
                    'F: ' + (anInterested.hasOwnProperty( 'innerDisplayName') ? anInterested.innerDisplayName :
                    ( anInterested.hasOwnProperty( 'displayName') ? anInterested.displayName :  '?')));}

                anInterested( theCtxt, thePerformance, someDeltas.slice());
            }
        }

        thePerformance._v_LastDeltasDeliveryClock = m_Clock.fNow();

        return null;

    })._sName( _displayName, '_pDeliverDeltas')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',   ['Type',    'Performance']],
        [ 'theForceDelivery', ['boolean', 'optional']]
    ]);
    _privateMembers.push(_pDeliverDeltas);
    if(m_Instrument.cDocFuncs) {
        _pDeliverDeltas._sDesc(
        'If enough time has lapsed, or enough Deltas are pending delivery, ' +
        'then deliver to interested parties all pending Deltas ' +
        'representing changes on the Chant tree during the Performance of a Score.');

        _doc+=('\n\n' + _pDeliverDeltas._doc);
    }








    var pDeliverDeltas = (function( theCtxt, thePerformance) {

        _pDeliverDeltas( theCtxt, thePerformance, true);

        return null;

    })._sName( _displayName, 'pDeliverDeltas')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',   ['Type',    'Performance']]
    ]);
    _publicMembers.push(pDeliverDeltas);
    if(m_Instrument.cDocFuncs) {
        pDeliverDeltas._sDesc(
        'Deliver to interested parties all pending Deltas ' +
        'representing changes on the Chant tree during the Performance of a Score.');

        _doc+=('\n\n' + pDeliverDeltas._doc);
    }








    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        pPostDelta:        pPostDelta,
        pRegisterInterest: pRegisterInterest,
        pDeliverDeltas:    pDeliverDeltas
    };

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_DeltaBroker')
    }


    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_DeltaBroker')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_Functionx', 'm_Error', 'm_Instrument', 'm_Defense', 'm_Trace', 'm_Log', 'm_Clock',
        'm_Ctxt', 'm_Watcher', 'm_WakeUp'],
        function (m_ConstValues, m_Functionx, m_Error, m_Instrument, m_Defense, m_Trace, m_Log, m_Clock,
                  m_Ctxt, m_Watcher, m_WakeUp) {

            return aM_DeltaBroker(m_ConstValues, m_Functionx, m_Error, m_Instrument, m_Defense, m_Trace, m_Log, m_Clock,
                m_Ctxt, m_Watcher, m_WakeUp);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_DeltaBroker.displayName]=aM_DeltaBroker(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Clock'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Watcher'],
            gChoirJS_Modules['m_WakeUp']
        );
    }
    else {
        ChoirJS_Module_DeltaBroker= aM_DeltaBroker(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_Clock,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Watcher,
            ChoirJS_Module_WakeUp
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_DeltaBroker')
}

