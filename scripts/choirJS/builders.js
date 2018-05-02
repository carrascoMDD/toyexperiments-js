/*
 * Copyright 2013 Antonio Carrasco Valero
 */


var aM_Builders = function (m_Functionx, m_Identifiable, m_Composer, m_Error, m_Defense) {

    "use strict";

    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */

    var _displayName = 'm_Builders';

    var _doc=_displayName + ' module. Functions to maintain and use a registry of Builders by their name, able create choirJS assemblies from other structured specifications.';


    var _g_BuildersByName = {};
    _doc += '\nRegistry of Builders by their name, able create choirJS assemblies from other structured specifications.';


    _doc+='\nACV OJO This may create a references cycle between modules, ' +
        'because this builders registry refers to builder modules or objects, ' +
        'which may themselves still hold the reference to this builders used to access it to register themselves.';









    var pCleanUp = function() {

        /* var _doc = ''; */

        _g_BuildersByName = {};

        return null;
    };
    if( m_Instrument.cDocFuncs) {
        pCleanUp._sDoc('pCleanUp', 'Remove all references to registerd choreography conductors.');
        _doc+=('\n\n' + pCleanUp._doc);
    }







    var pRegisterBuilderByName = function(theBuilder, theBuilderName) {

        /* var _doc = ''; */


        /* _doc+='Refuse to conduct if parameters do no abide by the contract.'; */
        if(m_Defense.cAllowDefense) {
            if(!theBuilder) {
                throw new m_Error.Error('ParameterNullError', {module: _displayName, function: pRegisterBuilderByName.displayName, parameter: 'theBuilder'});
            }
        }

        if(!_g_BuildersByName) {
            throw new m_Error.Error('ModuleVariableInitializationError', {module: _displayName, function: pRegisterBuilderByName, variable: '_g_BuildersByName'});
        }

        if( theBuilderName) {
             _g_BuildersByName[ theBuilderName] = theBuilder;
        }

        return null;
    };
    if( m_Instrument.cDocFuncs) {
        pRegisterBuilderByName._sDoc('pRegisterBuilderByName', 'Register a builder, able create choirJS assemblies from other structured specifications.');
        _doc+=('\n\n' + pRegisterBuilderByName._doc);
    }








    var pUnregisterBuilderByName = function(theBuilder, theBuilderName) {

        /* var _doc = ''; */


        /* _doc+='Refuse to conduct if parameters do no abide by the contract.'; */
        if(m_Defense.cAllowDefense) {
            if(!theBuilder) {
                throw new m_Error.Error('ParameterNullError', {module: _displayName, function: pUnregisterBuilderByName.displayName, parameter: 'theBuilder'});
            }
            if(!theBuilderName) {
                throw new m_Error.Error('ParameterNullError', {module: _displayName, function: pUnregisterBuilderByName.displayName, parameter: 'theBuilderName'});
            }
        }


        if(!_g_BuildersByName) {
            throw new m_Error.Error('ModuleVariableInitializationError', {module: _displayName, function: pUnregisterBuilderByName, variable: '_g_BuildersByName'});
        }

        _g_BuildersByName[ theBuilderName] = null;

        return null;
    };
    if( m_Instrument.cDocFuncs) {
        pUnregisterBuilderByName._sDoc('pUnregisterBuilderByName', 'Unregister a builder that was registered with the supplied name.');
        _doc+=('\n\n' + pUnregisterBuilderByName._doc);
    }







    var fBuilderNamed = function(theBuilderName) {

        /* var _doc = ''; */


        /* _doc+='Refuse to conduct if parameters do no abide by the contract.'; */
        if(m_Defense.cAllowDefense) {
            if(!theOrchestrationKind) {
                throw new m_Error.Error('ParameterNullError', {module: _displayName, function: fConductorForKind.displayName, parameter: 'theOrchestrationKind'});
            }
        }

        if(!_g_BuildersByName) {
            throw new m_Error.Error('ModuleVariableInitializationError', {module: _displayName, function: fConductorForKind, variable: '_g_BuildersByName'});
        }

        var aBuilder = _g_BuildersByName[ theBuilderName];
        if( aBuilder) {
            return aBuilder;
        }

        return null;
    };
    if( m_Instrument.cDocFuncs) {
        fBuilderNamed._sDoc('fBuilderNamed', 'Return the builder registered with the supplied name');
        _doc+=('\n\n' + fBuilderNamed._doc);
    }





    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        pCleanUp: pCleanUp,
        pRegisterBuilderByName: pRegisterBuilderByName,
        pUnregisterBuilderByName: pUnregisterBuilderByName,
        fBuilderNamed:  fBuilderNamed

    };

    if(aModule) {}
    return aModule;


};



if( typeof define === 'function') {
    define(['m_Functionx', 'm_Identifiable', 'm_Score', 'm_Error'], function (m_Functionx, m_Identifiable, m_Score, m_Error, m_Defense) {

        return aM_Builders(m_Functionx, m_Identifiable, m_Score, m_Error, m_Defense);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Builders.displayName]=aM_Builders(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_Score'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Defense']
        );
    }
    else {
        ChoirJS_Module_Builders = aM_Builders(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_Score,
            ChoirJS_Module_Error,
            ChoirJS_Module_Defense
        );
    }
}

