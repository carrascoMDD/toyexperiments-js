/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Orchductor_Void')
}


var aM_Orchductor_Void = function (m_Functionx, m_Error, m_Instrument) {

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Orchductor_Void')
    }

    if(m_Functionx) {}
    if(m_Error) {}


    var _displayName = 'm_Orchductor_Void';

    var _doc = _displayName + ' module. With void Functions to orchestrate the performance of voices, phrases and notes as chants.';



    var c_OrchestrationKinds = ['Void'];
    _doc+=('\n\n' +  JSON.stringify({c_OrchestrationKinds: c_OrchestrationKinds}, null, 4));







    var fBeginChanting = function(theChant) {
        if(!theChant) {}

        return true;
    };
    if(m_Instrument.cDocFuncs) {
        fBeginChanting._sDoc('fBeginChanting',
            'Void function.');
        _doc+=('\n\n' + fBeginChanting._doc);
    }







    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        c_OrchestrationKinds: c_OrchestrationKinds,
        fBeginChanting:       fBeginChanting
    };
    if(aModule) {}


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Orchductor_Void')
    }

    return aModule;
};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Orchductor_Void')
}


if( typeof define === 'function') {

    define(['m_Functionx', 'm_Error', 'm_Instrument'], function (m_Functionx, m_Error, m_Instrument) {
        return aM_Orchductor_Void(m_Functionx, m_Error, m_Instrument);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Orchductor_Void.displayName]=aM_Orchductor_Void(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Error']
        );
    }
    else {
        ChoirJS_Module_Orchductor_Void = aM_Orchductor_Void(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Error
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Orchductor_Void')
}