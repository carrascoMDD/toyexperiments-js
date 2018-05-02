/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Instrument')
}



var aM_Instrument = function(m_Functionx) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Instrument')
    }


    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */

    var _displayName = 'm_Instrument';

    var _doc=_displayName +' module. Constants to control the execution or bypass of some programming techniques, like defensive programming, ... .';



    var cDocFuncs = false;
    _doc+='cDocFuncs is now ' + cDocFuncs + '\n. If cDocFuncs is true then functions shall store documentation strings.';



    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        cDocFuncs: cDocFuncs
    };
    if(aModule) {}  /* To avoid code quality tools from complaining about unused parameter */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Instrument')
    }

    return aModule;
};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Instrument')
}



if( typeof define === 'function') {

    define(['m_Functionx'], function (m_Functionx) {
        return aM_Instrument(m_Functionx);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Instrument.displayName]=aM_Instrument(gChoirJS_Modules['m_Functionx']);
    }
    else {
        ChoirJS_Module_Instrument = aM_Instrument(ChoirJS_Module_Functionx);
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Instrument')
}
