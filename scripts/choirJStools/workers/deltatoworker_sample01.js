/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_DeltaToWorker_Sample01')
}



var aM_DeltaToWorker_Sample01 = function ( m_Ctxt, m_Defense, m_Functionx, m_Error, m_Instrument, m_Trace, m_Log, m_OpenBroker, m_DeltaToWorker, m_DeltaBroker) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_DeltaToWorker_Sample01')
    }

    if( m_Log) {}

    var _displayName = 'm_DeltaToWorker_Sample01';

    var _doc = _displayName +' module. Functions to forward received Deltas to a WebWorker.';

    var _privateMembers = [];
    var _publicMembers = [];


    _doc+=('\n\nConfigurable module constants:');


    var _cTr = m_Trace.cTrace;
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';



    var cWorkerURL = '/scripts/choirJStools/workers/worker_sample01.js';
    _doc+=('\n\n' +  JSON.stringify({cWorkerURL: cWorkerURL}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';






    var pOpenWorker = (function( theCtxt, thePerformance) {

        var aWorkerInfo = m_OpenBroker.fOpenWorker(
            cWorkerURL,
            function() {
                var aPerformance_here = thePerformance;
                return function( theWorkerInfo, theEvent) {
                    m_DeltaToWorker.pReceiveMessageFromWorker( m_Ctxt.fNewCtxt(), aPerformance_here, theWorkerInfo, theEvent);
                };
            },
            function() {
                var aPerformance_here = thePerformance;
                return function( theWorkerInfo, theEvent) {
                    m_DeltaToWorker.pReceiveErrorFromWorker( m_Ctxt.fNewCtxt(), aPerformance_here, theWorkerInfo, theEvent);
                };
            }
        );
        if( !aWorkerInfo) {
            throw new m_Error.Error('OpenDeltaWorkerError', {module: _displayName});
        }


        var aDeltaBrokerInterest = (function() {
            var aNewWorkerInfo = aWorkerInfo;
            return function( theCtxt_arg, thePerformance_arg, theDeltas) {
                m_DeltaToWorker.pForwardDeltas( theCtxt_arg, thePerformance_arg, theDeltas, aNewWorkerInfo);
            }
        })();


        m_DeltaBroker.pRegisterInterest( theCtxt, thePerformance, aDeltaBrokerInterest);

        return null;
    })._sName( _displayName, 'pOpenWorker')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance', ['Type', 'Performance']]
    ]);
    _publicMembers.push(pOpenWorker);
    if(m_Instrument.cDocFuncs) {
        pOpenWorker._sDesc( '');
        _doc+=('\n\n' + pOpenWorker._doc);
    }




    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        cWorkerURL:  cWorkerURL,
        pOpenWorker: pOpenWorker


    };
    if( aModule) {}

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_DeltaToWorker_Sample01')
    }

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_DeltaToWorker_Sample01')
}





if( typeof define === 'function') {

    define([ 'm_Ctxt', 'm_Defense', 'm_Functionx', 'm_Error', 'm_Instrument', 'm_Trace', 'm_Log',
        'm_OpenWorker', 'm_DeltaToWorker', 'm_DeltaBroker'],

        function (m_Ctxt,m_Defense,  m_Functionx, m_Error, m_Instrument, m_Trace, m_Log,
                  m_OpenWorker, m_DeltaToWorker, m_DeltaBroker) {

            return aM_DeltaToWorker_Sample01( m_Ctxt, m_Defense, m_Functionx, m_Error, m_Instrument, m_Trace,
                m_Log, m_OpenWorker, m_DeltaToWorker, m_DeltaBroker);
        }
    );
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_DeltaToWorker_Sample01.displayName]=aM_DeltaToWorker_Sample01(
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_OpenWorker'],
            gChoirJS_Modules['m_DeltaToWorker'],
            gChoirJS_Modules['m_DeltaBroker']
        );
    }
    else {
        ChoirJS_Module_DeltaToWorker_Sample01= aM_DeltaToWorker_Sample01(
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_Log,
            ChoirJS_Module_OpenWorker,
            ChoirJS_Module_DeltaToWorker,
            ChoirJS_Module_DeltaBroker
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_DeltaToWorker_Sample01')
}

