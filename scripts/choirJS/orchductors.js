/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Orchductors')
}

var aM_Orchductors = function (m_Functionx, m_Instrument, m_Error, m_Defense, m_Orchductor_Void) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Orchductors')
    }

    if(m_Functionx) {}
    if(m_Error) {}


    var _displayName = 'm_Orchductors';

    var _doc = _displayName + ' module. Functions to produce Orchestration Conductor instances appropriate for specific Orchestration Kinds.';


    var _g_OrchductorsByKind = {};
    _doc += '\nRegistry of choreography conductors by choreography kind. A orchductor may be registered for multiple choreography kinds.';


    _doc+='\nACV OJO This may create a references cycle between modules, ' +
        'because this orchductors registry refers to orchductor modules or objects, ' +
        'which may themselves still hold the reference to this orchductors used to access it to register themselves.';



    var pCleanUp = function() {

        /* var _doc = ''; */

        _g_OrchductorsByKind = {};

        return null;
    };
    if( m_Instrument.cDocFuncs) {
        pCleanUp._sDoc('pCleanUp', 'Remove all references to registerd choreography conductors.');
        _doc+=('\n\n' + pCleanUp._doc);
    }







    var pRegisterOrchductorForKinds = function(theOrchductor, theOrchestrationKinds) {

        /* var _doc = ''; */


        /* _doc+='Refuse to conduct if parameters do no abide by the contract.'; */
        if(m_Defense.cAllowDefense) {
            if(!theOrchductor) {
                throw new m_Error.Error('ParameterNullError', {module: _displayName, function: pRegisterOrchductorForKinds.displayName, parameter: 'theOrchductor'});
            }
        }

        if(!_g_OrchductorsByKind) {
            throw new m_Error.Error('ModuleVariableInitializationError', {module: _displayName, function: pRegisterOrchductorForKinds, variable: '_g_OrchductorsByKind'});
        }

        if( theOrchestrationKinds) {
            var aNumOrchestrationKinds = theOrchestrationKinds.length;
            for ( var anIndex = 0; anIndex < aNumOrchestrationKinds; anIndex++) {
                var aOrchestrationKind = theOrchestrationKinds[ anIndex];
                if ( aOrchestrationKind) {
                    _g_OrchductorsByKind[ aOrchestrationKind] = theOrchductor;
                }
            }
        }

        return null;
    };
    if( m_Instrument.cDocFuncs) {
        pRegisterOrchductorForKinds._sDoc('pRegisterOrchductorForKinds', 'Register a choreography conductor for a number of choreography kinds');
        _doc+=('\n\n' + pRegisterOrchductorForKinds._doc);
    }








    var pUnregisterOrchductorForKinds = function(theOrchductor, theOrchestrationKinds) {

        /* var _doc = ''; */


        /* _doc+='Refuse to conduct if parameters do no abide by the contract.'; */
        if(m_Defense.cAllowDefense) {
            if(!theOrchductor) {
                throw new m_Error.Error('ParameterNullError', {module: _displayName, function: pUnregisterOrchductorForKinds.displayName, parameter: 'theOrchductor'});
            }
        }

        if(!_g_OrchductorsByKind) {
            throw new m_Error.Error('ModuleVariableInitializationError', {module: _displayName, function: pUnregisterOrchductorForKinds, variable: '_g_OrchductorsByKind'});
        }

        var someOrchestrationKinds = theOrchestrationKinds;

        if( !( someOrchestrationKinds && someOrchestrationKinds.length)) {
            someOrchestrationKinds = [];
            for(var aKey in _g_OrchductorsByKind) {
                if(Object.prototype.hasOwnProperty.call( _g_OrchductorsByKind, aKey)) {
                    someOrchestrationKinds.push( aKey);
                }
            }
        }

        var aNumOrchestrationKinds = someOrchestrationKinds.length;
        for ( var anIndex = 0; anIndex < aNumOrchestrationKinds; anIndex++) {
            var aOrchestrationKind = someOrchestrationKinds[ anIndex];
            if ( aOrchestrationKind) {
                var aRegisteredOrchductor = _g_OrchductorsByKind[ aOrchestrationKind];
                if (aRegisteredOrchductor) {
                    if (aRegisteredOrchductor === theOrchductor) {
                        _g_OrchductorsByKind[ aOrchestrationKind] = null;
                    }
                }
            }
        }

        return null;
    };
    if( m_Instrument.cDocFuncs) {
        pUnregisterOrchductorForKinds._sDoc('pUnregisterOrchductorForKinds',
            'Unregister a choreography conductor for the supplied choreography kinds, or if no choreography kinds are supplied, unregister the orchductor from any and all choreography kinds .');
        _doc+=('\n\n' + pUnregisterOrchductorForKinds._doc);
    }







    var fOrchductorForKind = function( theCtxt, theOrchestrationKind) {

        /* var _doc = ''; */


        /* _doc+='Refuse to conduct if parameters do no abide by the contract.'; */
        if(m_Defense.cAllowDefense) {
            if(!theOrchestrationKind) {
                throw new m_Error.Error('ParameterNullError', {module: _displayName, function: fOrchductorForKind.displayName, parameter: 'theOrchestrationKind'});
            }
        }

        if(!_g_OrchductorsByKind) {
            throw new m_Error.Error('ModuleVariableInitializationError', {module: _displayName, function: fOrchductorForKind, variable: '_g_OrchductorsByKind'});
        }

        var aOrchductor = _g_OrchductorsByKind[ theOrchestrationKind];
        if( aOrchductor) {
            return aOrchductor;
        }

        return m_Orchductor_Void;
    };
    if( m_Instrument.cDocFuncs) {
        fOrchductorForKind._sDoc('fOrchductorForKind',
            'Resolve an instance of Orchestration Conductor appropriate to conduct a CShoreoraphy of the supplied kind. ' +
                'Momentarily, this also returns just a void conductor, not specific for any choreography kind, for kinds for which no orchductor is registered.');
        _doc+=('\n\n' + fOrchductorForKind._doc);
    }







    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        pCleanUp:                      pCleanUp,
        pRegisterOrchductorForKinds:   pRegisterOrchductorForKinds,
        pUnregisterOrchductorForKinds: pUnregisterOrchductorForKinds,
        fOrchductorForKind:            fOrchductorForKind
    };
    if(aModule) {}

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Orchductors')
    }

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Orchductors')
}

if( typeof define === 'function') {

    define(['m_Functionx', 'm_Instrument', 'm_Error', 'm_Defense', 'm_Orchductor_Void'],
        function (m_Functionx, m_Instrument, m_Error, m_Defense, m_Orchductor_Void) {
        return aM_Orchductors(m_Functionx, m_Instrument, m_Error, m_Defense, m_Orchductor_Void);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Orchductors.displayName]=aM_Orchductors(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Orchductor_Void']
        );
    }
    else {
        ChoirJS_Module_Orchductors = aM_Orchductors(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Error,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Orchductor_Void
        );
    }
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Orchductors')
}