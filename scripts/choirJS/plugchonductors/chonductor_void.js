/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Chonductor_Void')
}


var aM_Chonductor_Void = function (m_Functionx, m_Error, m_Instrument) {

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Chonductor_Void')
    }

    if(m_Functionx) {}
    if(m_Error) {}


    var _displayName = 'm_Chonductor_Void';

    var _doc = _displayName + ' module. With void Functions to choreograph the performance of voices, phrases and notes as chants.';



    var c_ChoreographyKinds = ['Void'];
    _doc+=('\n\n' +  JSON.stringify({c_ChoreographyKinds: c_ChoreographyKinds}, null, 4));







    var fBeforeChantingRole = function(theChant, thePerformedRole) {
        if(!theChant) {}
        if(!thePerformedRole) {}

        return true;
    };
    if(m_Instrument.cDocFuncs) {
        fBeforeChantingRole._sDoc('fBeforeChantingRole',
            'Void function.');
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

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Chonductor_Void')
    }

    return aModule;
};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Chonductor_Void')
}


if( typeof define === 'function') {

    define(['m_Functionx', 'm_Error', 'm_Instrument'], function (m_Functionx, m_Error, m_Instrument) {
        return aM_Chonductor_Void(m_Functionx, m_Error, m_Instrument);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Chonductor_Void.displayName]=aM_Chonductor_Void(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Error']
         );
    }
    else {
        ChoirJS_Module_Chonductor_Void = aM_Chonductor_Void(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Error
        );
    }
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Chonductor_Void')
}

