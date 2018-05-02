/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Chonductor_Sample')
}


var aM_Chonductor_Sample = function (m_Functionx, m_Error, m_Instrument, m_Chonductors) {

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Chonductor_Sample')
    }

    if(m_Functionx) {}
    if(m_Error) {}


    var _displayName = 'm_Chonductor_Sample';

    var _doc = _displayName + ' module. With void Functions to choreograph the performance of voices, phrases and notes as chants.';



    _doc+='\nACV OJO This may create a references cycle between modules, ' +
        'because the chonductors registry refers to this chonductor module, ' +
        'and this chonductor holds the reference to the chonductors module holding the registry.';



    var c_ChoreographyKinds = ['Sample'];
    _doc+=('\n\n' +  JSON.stringify({c_ChoreographyKinds: c_ChoreographyKinds}, null, 4));






    var fBeforeChantingRole = function( theCtxt, theChant, thePerformedRole) {
        if(!theChant) {}
        if(!thePerformedRole) {}

        return true;
    };
    if(m_Instrument.cDocFuncs) {
        fBeforeChantingRole._sDoc('fBeforeChantingRole',
            'Sample function.');
        _doc+=('\n\n' + fBeforeChantingRole._doc);
    }







    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        c_ChoreographyKinds:  c_ChoreographyKinds,
        fBeforeChantingRole:  fBeforeChantingRole
    };
    if(aModule) {}


    /* ACV OJO This may create a references cycle between modules */
    m_Chonductors.pRegisterChonductorForKinds(aModule, aModule.c_ChoreographyKinds);


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Chonductor_Sample')
    }

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Chonductor_Sample')
}



if( typeof define === 'function') {

    define(['m_Functionx', 'm_Error', 'm_Instrument', 'm_Chonductors'], function (m_Functionx, m_Instrument,  m_Error, m_Chonductors) {
        return aM_Chonductor_Sample(m_Functionx, m_Instrument, m_Error, m_Chonductors);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Chonductor_Sample.displayName]=aM_Chonductor_Sample(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Chonductors']
         );
    }
    else {
        ChoirJS_Module_Chonductor_Sample = aM_Chonductor_Sample(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Error,
            ChoirJS_Module_Chonductors
        );
    }
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Chonductor_Sample')
}
