/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_LoadPlugs')
}


var aM_LoadPlugs = function (m_Functionx, m_Instrument, m_Error, m_Orchductors, m_Orchductor_Algorithmic, m_Chonductors, m_Chonductor_Sample) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_LoadPlugs')
    }

    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */

    var _displayName = 'm_LoadPlugs';

    var _doc=_displayName + ' module. Functions to cause the loading of plugin modules, like specific orchductors, chonductors or builders.';



    _doc+='\nACV OJO This may create a references cycle between modules, ' +
        'because plugins hold a reference to the registries where they register, ' +
        'and the registries hold references to the registered plugins.';


    var _g_LoadPlugsByName = {};


    if( m_Orchductors || m_Orchductor_Algorithmic || m_Chonductors || m_Chonductor_Sample) {}  /* To avoid code quality tools complaining about unused arguments */






    var pCleanUp = function() {

        /* var _doc = ''; */

        _g_LoadPlugsByName = {};

        return null;
    };
    if( m_Instrument.cDocFuncs) {
        pCleanUp._sDoc('pCleanUp', 'Remove all references to registerd choreography conductors.');
        _doc+=('\n\n' + pCleanUp._doc);
    }







    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        pCleanUp:  pCleanUp

    };

    if(aModule) {}

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_LoadPlugs')
    }

    return aModule;


};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_LoadPlugs')
}


if( typeof define === 'function') {
    define(['m_Functionx', 'm_Instrument', 'm_Error', 'm_Orchductors', 'm_Orchductor_Algorithmic', 'm_Chonductors', 'm_Chonductor_Sample'], function (m_Functionx, m_Instrument, m_Error, m_Orchductors, m_Orchductor_Algorithmic, m_Chonductors, m_Chonductor_Sample) {

        return aM_LoadPlugs(m_Functionx, m_Instrument, m_Error, m_Orchductors, m_Orchductor_Algorithmic, m_Chonductors, m_Chonductor_Sample);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_LoadPlugs.displayName]=aM_LoadPlugs(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Orchductors'],
            gChoirJS_Modules['m_Orchductor_Algorithmic'],
            gChoirJS_Modules['m_Chonductors'],
            gChoirJS_Modules['m_Chonductor_Sample']
        );
    }
    else {
        ChoirJS_Module_LoadPlugs = aM_LoadPlugs(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Error,
            ChoirJS_Module_Orchductors,
            ChoirJS_Module_Orchductor_Algorithmic,
            ChoirJS_Module_Chonductors,
            ChoirJS_Module_Chonductor_Sample
        );
    }
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_LoadPlugs')
}
