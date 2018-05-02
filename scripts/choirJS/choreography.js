/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Choreography')
}


var aM_Choreography = function(m_Functionx, m_Instrument) {

    "use strict";


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Choreography')
    }

    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */

    var _displayName='m_Choreography';


    var _doc=_displayName +' module. Factory functions for objects with properties for choreography assemblies of choirJS.';




    var pChoreographyOwner_Properties_Into = function(theObject) {

        if( !( (typeof theObject === 'undefined') || theObject === null)) {

            if(typeof theObject._v_Mixins === 'undefined' || theObject._v_Mixins === null) {
                theObject._v_Mixins=[];
            }
            if( !('ChoreographyOwner' in theObject._v_Mixins)) {
                theObject._v_Mixins.push('ChoreographyOwner');
                theObject._v_Choreographies =       [];
            }
        }
    };
    if(m_Instrument.cDocFuncs) {
        pChoreographyOwner_Properties_Into._sDoc('pChoreographyOwner_Properties_Into', 'Structure of fields for object that may be contain choreographied elements (like Voice, Phrase or Note): applicable to Score, Voice, Phrase, Note.');
        _doc+=('\n\n' + pChoreographyOwner_Properties_Into._doc);
    }







    var pChoreographed_Properties_Into = function(theObject) {

        if( !((typeof theObject === 'undefined') || theObject === null)) {

            if(typeof theObject._v_Mixins === 'undefined' || theObject._v_Mixins === null) {
                theObject._v_Mixins=[];
            }
            if( !('Choreographed' in theObject._v_Mixins)) {
                theObject._v_Mixins.push('Choreographed');
                theObject._v_PerformedRoles =       [];
            }
        }
    };
    if(m_Instrument.cDocFuncs) {
        pChoreographed_Properties_Into._sDoc('_pChoreographed_Properties_Into', 'Structure of fields for object that may be choreographed: applicable to a Voice, Phrase or Note.');
        _doc+=('\n\n' + pChoreographed_Properties_Into._doc);
    }






    var pChoreography_Properties_Into = function(theObject) {

        if( !((typeof theObject === 'undefined') || theObject === null)) {
            theObject._v_Type =                  'Choreography';
            theObject._v_Name =                  '';
            theObject._v_Parent =                 null;

            theObject._v_ChoreographyKind =   '';
            theObject._v_ChoreographyConductor =       '';
            theObject._v_ChoreographyParameters = null;
            theObject._v_Roles =                  [];
        }
    };
    if(m_Instrument.cDocFuncs) {
        pChoreography_Properties_Into._sDoc('pChoreography_Properties_Into', 'Structure of fields for object representing a Choreoraphy.');
        _doc+=('\n\n' + pChoreographed_Properties_Into._doc);
    }






    var pRole_Properties_Into = function(theObject) {

        if( !((typeof theObject === 'undefined') || theObject === null)) {
            theObject._v_Type =           'Role';
            theObject._v_Name =           '';
            theObject._v_Parent =         null;

            theObject._v_RoleParameters = null;
            theObject._v_Choreographeds = [];
        }
    };
    if(m_Instrument.cDocFuncs) {
        pRole_Properties_Into._sDoc('pRole_Properties_Into', 'Structure of fields for object representing a Choreoraphy.');
        _doc+=('\n\n' + pChoreographed_Properties_Into._doc);
    }






    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        pChoreographed_Properties_Into: pChoreographed_Properties_Into,
        pChoreographyOwner_Properties_Into: pChoreographyOwner_Properties_Into,
        pChoreography_Properties_Into:  pChoreography_Properties_Into,
        pRole_Properties_Into:          pRole_Properties_Into
    };
    if(aModule) {} /* Added to avoid code quality tools complaining about redundant variable */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Choreography')
    }

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Choreography')
}



if( typeof define === 'function') {

    define(['m_Functionx', 'm_Instrument'], function (m_Functionx, m_Instrument) {
        return aM_Choreography(m_Functionx, m_Instrument);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Choreography.displayName]=aM_Choreography(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Instrument']
        );
    }
    else {
        ChoirJS_Module_Choreography = aM_Choreography(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument
        );
    }
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Choreography')
}


