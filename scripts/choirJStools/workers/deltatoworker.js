/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_DeltaToWorker')
}



var aM_DeltaToWorker = function (m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Error, m_Instrument, m_Trace, m_Log, m_Defense, m_MarshalDeltas) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_DeltaToWorker')
    }

    if( m_Log) {}


    var _displayName = 'm_DeltaToWorker';

    var _doc = _displayName +' module. Functions to forward received Deltas to a WebWorker.';

    var _privateMembers = [];
    var _publicMembers = [];



    _doc+=('\n\nConfigurable module constants copied from m_ConstValues_Tools:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';




    _doc+=('\n\nModule functions:');






    var pForwardDeltas = (function( theCtxt, thePerformance, theDeltas, theWorkerInfo) {

        var aMarshaledDeltas = m_MarshalDeltas.fMarshalDeltas( theDeltas);
        if( !(aMarshaledDeltas && aMarshaledDeltas.byteLength)) {
            throw new m_Error.Error('MarshallDeltasError', {module: _displayName, function: pForwardDeltas, with: [theDeltas]});
        }

        if(pForwardDeltas._Trace) { m_Trace.pStep(
            '\n\n\Sending to worker ' + (theWorkerInfo._v_URL ? theWorkerInfo._v_URL : '?') +  ' deltas with byteLength=' + aMarshaledDeltas.byteLength + '\n\n\n'); }

        theWorkerInfo._v_Worker.postMessage( aMarshaledDeltas);

        return null;

    })._sName( _displayName, 'pForwardDeltas')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance', ['Type', 'Performance']],
        [ 'theDeltas',      ['object']],  /* ACV OJO Defense TODO shall be array of Delta */
        [ 'theWorkerInfo',  ['Type', 'Worker']]
    ]);
    _publicMembers.push(pForwardDeltas);
    if(m_Instrument.cDocFuncs) {
        pForwardDeltas._sDesc(
            'Forward marshaled deltas to an opened WebWorker.');
        _doc+=('\n\n' + pForwardDeltas._doc);
    }








    
    
    var pReceiveMessageFromWorker = (function(  theCtxt, theWorkerInfo, theEvent) {

        var aMessage = 'Received from ' + (theWorkerInfo._v_URL ? theWorkerInfo._v_URL : '?') +  ' message ' + JSON.stringify(theEvent.data);

        if(pReceiveMessageFromWorker._Trace) { m_Trace.pStep(
        '\n\n\n' + aMessage + '\n\n\n'); }

        return null;

    })._sName( _displayName, 'pReceiveMessageFromWorker')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],                                 /* ACV OJO Defense TODO theCtxt was not in the arguments list of the defended function. No wonder this stopped working */
        [ 'theWorkerInfo',  ['Type', 'Worker']],
        [ 'theEvent',       ['object']]
    ]);
    _publicMembers.push(pReceiveMessageFromWorker);
    if(m_Instrument.cDocFuncs) {
        pReceiveMessageFromWorker._sDesc(
        'Handle a message received from an opened WebWorker.');

        _doc+=('\n\n' + pReceiveMessageFromWorker._doc);
    }







    var pReceiveErrorFromWorker = (function(  theCtxt, theWorkerInfo, theEvent) {

        var aMessage = 'Error from ' + (theWorkerInfo._v_URL ? theWorkerInfo._v_URL : '?') +  ' message ' + JSON.stringify(theEvent.message);

        if(pReceiveErrorFromWorker._Trace) { m_Trace.pStep(
            '\n\n!!!!!\n' + aMessage + '\n!!!!!\n\n'); }

        return null;

    })._sName( _displayName, 'pReceiveErrorFromWorker')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],                                 /* ACV OJO Defense TODO theCtxt was not in the arguments list of the defended function. No wonder this stopped working */
        [ 'theWorkerInfo',  ['Type', 'Worker']],
        [ 'theEvent',       ['object']]
    ]);
    _publicMembers.push(pReceiveErrorFromWorker);
    if(m_Instrument.cDocFuncs) {
        pReceiveErrorFromWorker._sDesc(
            'Handle an error occurred in a Worker.');
        _doc+=('\n\n' + pReceiveErrorFromWorker._doc);
    }






    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        pForwardDeltas:            pForwardDeltas,

        pReceiveMessageFromWorker: pReceiveMessageFromWorker,
        pReceiveErrorFromWorker:   pReceiveErrorFromWorker
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_DeltaToWorker')
}





if( typeof define === 'function') {

    define(['m_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Error', 'm_Instrument', 'm_Trace', 'm_Log', 'm_Defense', 'm_MarshalDeltas'],
        function (m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Error, m_Instrument, m_Trace, m_Log, m_Defense, m_MarshalDeltas) {

            return aM_DeltaToWorker(m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Error, m_Instrument, m_Trace, m_Log, m_Defense, m_MarshalDeltas);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_DeltaToWorker.displayName]=aM_DeltaToWorker(
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_MarshalDeltas']
        );
    }
    else {
        ChoirJS_Module_DeltaToWorker= aM_DeltaToWorker(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_Defense,
            ChoirJS_Module_MarshalDeltas
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_DeltaToWorker')
}

