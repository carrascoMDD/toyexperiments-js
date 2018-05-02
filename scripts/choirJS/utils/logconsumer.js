/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_LogConsumer')
}


var aM_LogConsumer = function(m_Functionx, m_Instrument) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_LogConsumer')
    }


    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */

    var _displayName = 'm_LogConsumer';

    var _doc=_displayName +' module. Functions to write log entries to the console.';


    var _privateMembers = [];
    var _publicMembers = [];



    var log = function(theMessage) {
        console.log( theMessage);
    };
    if(m_Instrument.cDocFuncs) {
        log._sDoc('log', 'Write message to the console.');
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
        fChoirJS_LogModuleLoads('END m_LogConsumer')
    }

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_LogConsumer')
}




if( typeof define === 'function') {

    define(['m_Functionx', 'm_Instrument'], function (m_Functionx, m_Instrument) {
        return aM_LogConsumer(m_Functionx, m_Instrument);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[ aM_LogConsumer.displayName]=aM_LogConsumer(
            gChoirJS_Modules[ 'm_Functionx'],
            gChoirJS_Modules[ 'm_Instrument']
        )
    }
    else {
        ChoirJS_Module_LogConsumer = aM_LogConsumer(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument
        );
    }
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_LogConsumer')
}

