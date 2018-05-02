/*
 * Copyright 2013 Antonio Carrasco Valero
 */

fChoirJS_LogModuleLoads = null; /* function( theMessage) { if (false) { return null; } postMessage( 'Worker sample01 LogModuleLoad ' + theMessage);}; */


importScripts('/scripts/require.js');



importScripts('requirepaths_worker.js');
if( typeof cChoirJS_RequirePaths === 'undefined') {
    postMessage('Worker sample01 cChoirJS_RequirePaths is undefined');
}


require({ baseUrl: '/scripts', paths: cChoirJS_RequirePaths },
    ['require', 'm_Error', 'm_MarshalDeltas' ], function(require, m_Error, m_MarshalDeltas) {

    /* Can not "use_strict" because complains about the onmessage = ... being an undeclared variable */

    var _g_Context2D = null;


    onmessage = function( theEvent) {
        if( !theEvent.data) {
            postMessage('Worker received without data.')
        }
        else {
            if( !( typeof theEvent.data === 'object')) {
                postMessage('Worker received with non object data.')
            }
            else {
                if ( theEvent.data instanceof ArrayBuffer) {

                    var someDeltas = m_MarshalDeltas.fUnmarshalDeltas( theEvent.data)
                    if( !someDeltas) {
                        postMessage('Worker received data with no Deltas.');  /* CQT does not know about the postMessage available in workers, or that this code is to run in a worker */
                    }
                    else {
                        postMessage(
                            'Worker received ' + theEvent.data.byteLength + ' bytes with ' + someDeltas.length + ' Deltas:\n' +
                            JSON.stringify( someDeltas, null, 4)
                        );
                        /* CQT does not know about the postMessage available in workers, or that this code is to run in a worker */
                    }
                }
                else {
                    if ( theEvent.data.setContext && ( typeof theEvent.data.setContext === 'function')) {
                        if( _g_Context2D) {
                            throw new m_Error.Error('WorkerContext2DAlreadySet', {module: 'm_Worker_Sample01', function: fMessageHandler});
                        }
                        var aCanvasProxy = theEvent.data;
                        var aContext = new CanvasRenderingContext2D();
                        aCanvasProxy.setContext( aContext);
                        _g_Context2D = aContext;

                        setInterval(function () {
                            if( _g_Context2D) {
                                _g_Context2D.clearRect(0, 0, _g_Context2D.width, _g_Context2D.height);
                                _g_Context2D.fillText(new Date(), 0, 100);
                                _g_Context2D.commit();
                            }
                        }, 1000);

                    }
                }
            }
        }
    };


});

/*
setTimeout(function() {
    reply('alertSomething', 3, 'seconds');
    setInterval(function() { reply('alertSomething', 3, 'seconds'); }, 3000);
},
3000);


function reply () {
    postMessage('SENT FROM WORKER');
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Worker_Sample01')
}



var aM_Worker_Sample01 = function (m_Functionx, m_Error, m_Instrument, m_Trace, m_Log, m_MarshalDeltas) {

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Worker_Sample01')
    }

    if( m_Log) {}
    if( m_MarshalDeltas) {}


    var _displayName = 'm_Worker_Sample01';

    var _doc = _displayName +' module. Functions to forward received Deltas to a WebWorker.';

    var _privateMembers = [];
    var _publicMembers = [];


    _doc+=('\n\nConfigurable module constants:');

    var _cTr = m_Trace.cTrace
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';






    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers


    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Worker_Sample01')
}





if( typeof define === 'function') {

    define(['m_Functionx', 'm_Error', 'm_Instrument', 'm_Trace', 'm_Log', 'm_MarshalDeltas'], function (m_Functionx, m_Error, m_Instrument, m_Trace, m_Log, m_MarshalDeltas) {

            return aM_Worker_Sample01(m_Functionx, m_Error, m_Instrument, m_Trace, m_Identifiable, m_Log, m_MarshalDeltas);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Worker_Sample01.displayName]=aM_Worker_Sample01(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_MarshalDeltas']
        );
    }
    else {
        ChoirJS_Module_Worker_Sample01= aM_Worker_Sample01(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_Log,
            ChoirJS_Module_ChantDeltas
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Worker_Sample01')
}

*/