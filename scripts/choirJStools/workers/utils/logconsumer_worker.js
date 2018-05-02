/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_LogConsumer_Worker')
}


var aM_WorkerLogConsumer = function(m_Functionx, m_Instrument) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_LogConsumer_Worker')
    }


    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */

    var _displayName = 'm_LogConsumer_Worker';

    var _doc=_displayName +' module. Functions to write log entries by posting a message to the owner of this worker.';


    var _privateMembers = [];
    var _publicMembers = [];



    var log = function(theMessage) {
        postMessage( theMessage);
    };
    if(m_Instrument.cDocFuncs) {
        log._sDoc('log', 'Post message to the owner of this worker.');
        _publicMembers.push(log);
        _doc+=('\n\n' + log._doc);
    }




    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        log: log
    };
    if(aModule) {}  /* To avoid code quality tools from complaining about unused parameter */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_LogConsumer_Worker')
    }

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_LogConsumer_Worker')
}




if( typeof define === 'function') {

    define(['m_Functionx', 'm_Instrument'], function (m_Functionx, m_Instrument) {
        return aM_WorkerLogConsumer(m_Functionx, m_Instrument);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[ aM_WorkerLogConsumer.displayName]=aM_WorkerLogConsumer(
            gChoirJS_Modules[ 'm_Functionx'],
            gChoirJS_Modules[ 'm_Instrument']
        )
    }
    else {
        ChoirJS_Module_Log = aM_WorkerLogConsumer(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument
        );
    }
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_LogConsumer_Worker')
}

