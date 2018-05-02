/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_LoadWorkers')
}


var aM_LoadWorkers = function (m_Functionx, m_Instrument, m_Error, m_Trace, m_Log, m_DeltaToWorker_Sample01) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_LoadWorkers')
    }

    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */

    var _displayName = 'm_LoadWorkers';

    var _doc=_displayName + ' module. Cause the various DeltaToWorker modules to load. Each module shall register for its own interests.';



    _doc+='\nACV OJO This may create a references cycle between modules,.';



    if( m_DeltaToWorker_Sample01) {}  /* To avoid code quality tools complaining about unused arguments */







    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        pCleanUp:  pCleanUp

    };

    if(aModule) {}

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_LoadWorkers')
    }

    return aModule;


};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_LoadWorkers')
}


if( typeof define === 'function') {
    define(['m_Functionx', 'm_Instrument', 'm_Error',m_Trace, m_Log, m_DeltaToWorker_Sample01], function (m_Functionx, m_Instrument, m_Error, m_Trace, m_Log, m_DeltaToWorker_Sample01) {

        return aM_LoadWorkers(m_Functionx, m_Instrument, m_Error, m_Trace, m_Log, m_DeltaToWorker_Sample01);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_LoadWorkers.displayName]=aM_LoadWorkers(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_DeltaToWorker_Sample01']
        );
    }
    else {
        ChoirJS_Module_LoadWorkers = aM_LoadWorkers(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Error,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_DeltaToWorker_Sample01
        );
    }
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_LoadWorkers')
}
