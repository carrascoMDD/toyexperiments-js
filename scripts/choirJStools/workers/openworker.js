/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_OpenWorker')
}



var aM_OpenWorker = function (m_Functionx, m_Error, m_Instrument, m_Trace, m_Log, m_Defense, m_ChantDeltas) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_OpenWorker')
    }

    if( m_Log) {}
    if( m_ChantDeltas) {}


    var _displayName = 'm_OpenWorker';

    var _doc = _displayName +' module. Functions to open WebWorkers.';

    var _privateMembers = [];
    var _publicMembers = [];


    _doc+=('\n\nConfigurable module constants:');

    var _cTr = m_Trace.cTrace && false;
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';


    var cWorkerURLs = [
        '/scripts/choirJStools/workers/worker_sample01.js'
    ];
    _doc+=('\n\n' +  JSON.stringify({cWorkerURLs: cWorkerURLs}, null, 4));
    _doc+='Module constant cWorkerURLs URLs of javascript files to open WebWorkers with.';






    _doc+=('\n\nModule variables:');

    var _g_WorkerInfos = [];
    _doc+=('\n\n' +  JSON.stringify({_g_WorkerInfos: _g_WorkerInfos}, null, 4));
    _doc+='Module variable _g_Workers Holds information about opened WebWorkers.';







    _doc+=('\n\nModule functions:');




    var _fNewVoidOpenedWorkerInfo = function() {
        return {
            _v_Type:          'Worker',
            _v_URL:           '',
            _v_Worker:         null,
            _v_MessageHandler: null,
            _v_ErrorHandler:   null
        }
    };
    if(m_Instrument.cDocFuncs) {
        _fNewVoidOpenedWorkerInfo._sDoc('fOpenWorker', 'Create an object to hold information about an opened WebWorker.')._pTrace(_cTr);
        _privateMembers.push(_fNewVoidOpenedWorkerInfo);
        _doc+=('\n\n' + _fNewVoidOpenedWorkerInfo._doc);
    }






    var fOpenWorker = function( theWorkerURL, theMessageHandler, theErrorHandler) {

        var aTC =fOpenWorker._Trace && m_Trace.fBegin( _displayName, fOpenWorker);
        try {

            if (m_Defense.cAllowDefense) {
                if(aTC) { m_Trace.pTr( aTC, 'Defensive.');}
                if( !theWorkerURL) {
                    throw new m_Error.Error('ParameterNullError', {module: _displayName, function: fOpenWorker, parameter: 'theWorkerURL'});
                }
                if( !(typeof theWorkerURL === 'string')) {
                    throw new m_Error.Error('ParameterTypeError', {module: _displayName, function: fOpenWorker, parameter: 'theWorkerURL', type: 'string', with: [theWorkerURL]});
                }
                if( !theWorkerURL.length) {
                    throw new m_Error.Error('ParameterEmptyError', {module: _displayName, function: fOpenWorker, parameter: 'theScore', with: [theWorkerURL]});
                }
                if( !theMessageHandler) {
                    throw new m_Error.Error('ParameterNullError', {module: _displayName, function: fOpenWorker, parameter: 'theMessageHandler'});
                }
                if( !(typeof theMessageHandler === 'function')) {
                    throw new m_Error.Error('ParameterTypeError', {module: _displayName, function: fOpenWorker, parameter: 'theMessageHandler', type: 'function', with: [theMessageHandler]});
                }
                if( !theErrorHandler) {
                    throw new m_Error.Error('ParameterNullError', {module: _displayName, function: fOpenWorker, parameter: 'theMessageHandler'});
                }
                if( !(typeof theErrorHandler === 'function')) {
                    throw new m_Error.Error('ParameterTypeError', {module: _displayName, function: fOpenWorker, parameter: 'theErrorHandler', type: 'function', with: [theErrorHandler]});
                }
            }


            var aWorker = null;
            try {
                aWorker = new Worker( theWorkerURL);
            }
            catch ( anException) {
                throw new m_Error.Error('OpenWorkerException', {module: _displayName, function: fOpenWorker, with: [ aWorkerURL]});
            }
            if (!aWorker) {
                throw new m_Error.Error('OpenWorkerError', {module: _displayName, function: fOpenWorker, with: [ aWorkerURL]});
            }


            var aWorkerInfo = _fNewVoidOpenedWorkerInfo();
            aWorkerInfo._v_URL    = theWorkerURL;
            aWorkerInfo._v_Worker = aWorker;


            var aMessageHandler = (function() {
                var aNewWorkerInfo = aWorkerInfo;
                return function( theEvent) {
                    theMessageHandler( aNewWorkerInfo, theEvent)
                }
            })();

            var anErrorHandler = (function() {
                var aNewWorkerInfo = aWorkerInfo;
                return function( theEvent) {
                    theErrorHandler( aNewWorkerInfo, theEvent)
                }
            })();

            aWorkerInfo._v_MessageHandler = aMessageHandler;
            aWorkerInfo._v_ErrorHandler   = anErrorHandler;

            _g_WorkerInfos.push( aWorkerInfo);

            aWorker.onmessage = aMessageHandler;
            aWorker.onerror   = anErrorHandler;

            return aWorkerInfo;
        }
        finally {
            if(aTC) { m_Trace.pEnd( aTC);}
        }
    };
    if(m_Instrument.cDocFuncs) {
        fOpenWorker._sDoc('fOpenWorker', 'Open a WebWorker with supplied Javascript file URL and message and error handlers.')._pTrace(_cTr);
        _publicMembers.push(fOpenWorker);
        _doc+=('\n\n' + fOpenWorker._doc);
    }





    var fWorkerInfoWithURL = function( theWorkerURL) {

        var aTC =fWorkerInfoWithURL._Trace && m_Trace.fBegin( _displayName, fWorkerInfoWithURL);
        try {

            if (m_Defense.cAllowDefense) {
                if(aTC) { m_Trace.pTr( aTC, 'Defensive.');}
                if( !theWorkerURL) {
                    throw new m_Error.Error('ParameterNullError', {module: _displayName, function: fWorkerInfoWithURL, parameter: 'theWorkerURL'});
                }
                if( !(typeof theWorkerURL === 'string')) {
                    throw new m_Error.Error('ParameterTypeError', {module: _displayName, function: fWorkerInfoWithURL, parameter: 'theWorkerURL', type: 'string', with: [theWorkerURL]});
                }
                if( !theWorkerURL.length) {
                    throw new m_Error.Error('ParameterEmptyError', {module: _displayName, function: fWorkerInfoWithURL, parameter: 'theScore', with: [theWorkerURL]});
                }
            }

            var aFoundWorkerInfo = null;
            var aNumWorkerInfos = _g_WorkerInfos.length;
            for ( var anIndex = 0; anIndex < aNumWorkerInfos; anIndex++) {
                var aWorkerInfo = _g_WorkerInfos[ anIndex];
                if ( aWorkerInfo) {
                    if ( aWorkerInfo._v_URL === theWorkerURL) {
                        aFoundWorkerInfo = aWorkerInfo;
                        break;
                    }
                }
            }

            return aFoundWorkerInfo;
        }
        finally {
            if(aTC) { m_Trace.pEnd( aTC);}
        }
    };
    if(m_Instrument.cDocFuncs) {
        fWorkerInfoWithURL._sDoc('fWorkerInfoWithURL', 'Return the information for a Worker with the supplied URL, if exists.')._pTrace(_cTr);
        _publicMembers.push(fWorkerInfoWithURL);
        _doc+=('\n\n' + fWorkerInfoWithURL._doc);
    }






    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        fOpenWorker:        fOpenWorker,
        fWorkerInfoWithURL: fWorkerInfoWithURL
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_OpenWorker')
}





if( typeof define === 'function') {

    define(['m_Functionx', 'm_Error', 'm_Instrument', 'm_Trace', 'm_Log', 'm_Defense', 'm_ChantDeltas'],
        function (m_Functionx, m_Error, m_Instrument, m_Trace, m_Log, m_Defense,  m_ChantDeltas) {

            return aM_OpenWorker(m_Functionx, m_Error, m_Instrument, m_Trace, m_Log, m_Log, m_Defense, m_ChantDeltas);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_OpenWorker.displayName]=aM_OpenWorker(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_ChantDeltas']
        );
    }
    else {
        ChoirJS_Module_OpenWorker= aM_OpenWorker(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_Log,
            ChoirJS_Module_Defense,
            ChoirJS_Module_ChantDeltas
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_OpenWorker')
}

