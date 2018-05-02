/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Identifiable')
}


var aM_Identifiable = function (m_Functionx) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Identifiable')
    }


    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */

    var _displayName = 'm_Identifiable';

    var _doc=_displayName +' module. Factory and manager functions for identifiable objects. Maintains a counter for Unique IDentifiers.';


    var _g_UIDcounter=0;

    var _fNewVoid_Identifiable = function () {
        return {
            _v_UID: ''
        };
    };
    _fNewVoid_Identifiable._sDoc('_fNewVoid_Identifiable', '');
    _doc+=('\n\n' + _fNewVoid_Identifiable._doc);





    var fNewIdentifiable = function (theObject) {
        _g_UIDcounter++;

        var anIdentifiable=theObject;

        if(!anIdentifiable) {
            anIdentifiable = _fNewVoid_Identifiable();
        }

        anIdentifiable._v_UID=_g_UIDcounter;

        return anIdentifiable;
    };
    fNewIdentifiable._sDoc('fNewIdentifiable', 'If an object is supplied, initializes the object to be an identifiable. ' +
        'If no object is supplied, creates a new instance of identifiable object initialized with a Unique IDentifier.');
    _doc+=('\n\n' + fNewIdentifiable._doc);






    var fNewUID = function () {
        _g_UIDcounter++;

        return _g_UIDcounter;
    };
    fNewUID._sDoc('fNewUID', 'Produce a new unused UID.');
    _doc+=('\n\n' + fNewUID._doc);






    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        fNewIdentifiable: fNewIdentifiable,
        fNewUID:          fNewUID
        /* fUIDcounter: (function() { return _g_UIDcounter;})._sDoc('', 'Returns the current value of the UID counter') */
    };
    if(aModule) {}  /* To avoid code quality tools from complaining about unused parameter */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Identifiable')
    }

    return aModule;
};




if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Identifiable')
}




if( typeof define === 'function') {

    define(['m_Functionx'], function (m_Functionx) {
        return aM_Identifiable(m_Functionx);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Identifiable.displayName]=aM_Identifiable(gChoirJS_Modules['m_Functionx']);
    }
    else {
        ChoirJS_Module_Identifiable = aM_Identifiable(ChoirJS_Module_Functionx);
    }
}

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Identifiable')
}

