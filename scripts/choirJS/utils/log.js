/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Log')
}


var aM_Log = function( m_ConstValues, m_Functionx, m_LogConsumer) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Log')
    }


    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */

    var _displayName = 'm_Log';

    var _doc=_displayName +' module. Functions to write log entries to the console.';



    _doc+=('\n\nConfigurable module constants:');


    var cLogAllowed   = m_ConstValues.fConst( _displayName, 'cLogAllowed', false);
    _doc+=('\n\n' +  JSON.stringify({cLogAllowed: cLogAllowed}, null, 4));
    _doc+='Whether to log to console messages posted to this module.';





    _doc+=('\n\nModule functions:');


    var pLog = function(theMessage) {
        if( cLogAllowed) {
            m_LogConsumer.log( theMessage);
        }
    };
    pLog._sDoc('pLog', 'Logs supplied argument to the log consumer, which is usually the window console, ' +
        'or a specialized object for workers.');
    _doc+=('\n\n' + pLog._doc);




    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        cLogAllowed: cLogAllowed,
        pLog: pLog
    };
    if(aModule) {}  /* To avoid code quality tools from complaining about unused parameter */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Log')
    }

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Log')
}




if( typeof define === 'function') {

    define(['m_ConstValues', 'm_Functionx', 'm_LogConsumer'],
        function ( m_ConstValues, m_Functionx, m_LogConsumer) {

            return aM_Log( m_ConstValues, m_Functionx, m_LogConsumer);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[ aM_Log.displayName]=aM_Log(
            gChoirJS_Modules[ 'm_ConstValues'],
            gChoirJS_Modules[ 'm_Functionx'],
            gChoirJS_Modules[ 'm_LogConsumer']
        )
    }
    else {
        ChoirJS_Module_Log = aM_Log(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_LogConsumer
        );
    }
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Log')
}

