/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_TextSize')
}


var aM_TextSize = function (m_Functionx, m_Instrument, m_Error) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_TextSize')
    }


    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */
    if( m_Instrument) {} /* CQT */
    if( m_Error) {} /* CQT */

    var _displayName = 'm_TextSize';

    var _doc=_displayName +' module. Functions to compute text measurements.';






/* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        fIsEmptyRectsIntersection: fIsEmptyRectsIntersection
    };
    if(aModule) {}  /* To avoid code quality tools from complaining about unused parameter */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_TextSize')
    }

    return aModule;
};




if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_TextSize')
}




if( typeof define === 'function') {

    define(['m_Functionx', 'm_Error'], function (m_Functionx, m_Instrument, m_Error) {
        return aM_TextSize(m_Functionx, m_Instrument, m_Error);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_TextSize.displayName]=aM_TextSize(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Error']
        );
    }
    else {
        ChoirJS_Module_TextSize = aM_TextSize(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Error
        );
    }
}

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_TextSize')
}

