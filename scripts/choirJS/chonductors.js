/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Chonductors')
}


var aM_Chonductors = function (m_Functionx, m_Instrument, m_Error, m_Defense, m_Chonductor_Void) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Chonductors')
    }

    if(m_Functionx) {}
    if(m_Error) {}


    var _displayName = 'm_Chonductors';

    var _doc = _displayName + ' module. Functions to produce Choreography Conductor instances appropriate for specific Choreography Kinds.';


    var _g_ChonductorsByKind = {};
    _doc += '\nRegistry of choreography conductors by choreography kind. A chonductor may be registered for multiple choreography kinds.';


    _doc+='\nACV OJO This may create a references cycle between modules, ' +
        'because this chonductors registry refers to chonductor modules or objects, ' +
        'which may themselves still hold the reference to this chonductors used to access it to register themselves.';



    var pCleanUp = function() {

        /* var _doc = ''; */

        _g_ChonductorsByKind = {};

        return null;
    };
    if( m_Instrument.cDocFuncs) {
        pCleanUp._sDoc('pCleanUp', 'Remove all references to registerd choreography conductors.');
        _doc+=('\n\n' + pCleanUp._doc);
    }







    var pRegisterChonductorForKinds = function(theChonductor, theChoreographyKinds) {

        /* var _doc = ''; */


        /* _doc+='Refuse to conduct if parameters do no abide by the contract.'; */
        if(m_Defense.cAllowDefense) {
            if(!theChonductor) {
                throw new m_Error.Error('ParameterNullError', {module: _displayName, function: fRegisterChonductorForKinds.displayName, parameter: 'theChonductor'});
            }
        }

        if(!_g_ChonductorsByKind) {
            throw new m_Error.Error('ModuleVariableInitializationError', {module: _displayName, function: fRegisterChonductorForKinds, variable: '_g_ChonductorsByKind'});
        }

        if( theChoreographyKinds) {
            var aNumChoreographyKinds = theChoreographyKinds.length;
            for ( var anIndex = 0; anIndex < aNumChoreographyKinds; anIndex++) {
                var aChoreographyKind = theChoreographyKinds[ anIndex];
                if ( aChoreographyKind) {
                    _g_ChonductorsByKind[ aChoreographyKind] = theChonductor;
                }
            }
        }

        return null;
    };
    if( m_Instrument.cDocFuncs) {
        pRegisterChonductorForKinds._sDoc('pRegisterChonductorForKinds', 'Register a choreography conductor for a number of choreography kinds');
        _doc+=('\n\n' + pRegisterChonductorForKinds._doc);
    }








    var pUnregisterChonductorForKinds = function(theChonductor, theChoreographyKinds) {

        /* var _doc = ''; */


        /* _doc+='Refuse to conduct if parameters do no abide by the contract.'; */
        if(m_Defense.cAllowDefense) {
            if(!theChonductor) {
                throw new m_Error.Error('ParameterNullError', {module: _displayName, function: fUnregisterChonductorForKinds.displayName, parameter: 'theChonductor'});
            }
        }

        if(!_g_ChonductorsByKind) {
            throw new m_Error.Error('ModuleVariableInitializationError', {module: _displayName, function: fUnregisterChonductorForKinds, variable: '_g_ChonductorsByKind'});
        }

        var someChoreographyKinds = theChoreographyKinds;

        if( !( someChoreographyKinds && someChoreographyKinds.length)) {
            someChoreographyKinds = [];
            for(var aKey in _g_ChonductorsByKind) {
                if(Object.prototype.hasOwnProperty.call( _g_ChonductorsByKind, aKey)) {
                    someChoreographyKinds.push( aKey);
                }
            }
        }

        var aNumChoreographyKinds = someChoreographyKinds.length;
        for ( var anIndex = 0; anIndex < aNumChoreographyKinds; anIndex++) {
            var aChoreographyKind = someChoreographyKinds[ anIndex];
            if ( aChoreographyKind) {
                var aRegisteredChonductor = _g_ChonductorsByKind[ aChoreographyKind];
                if (aRegisteredChonductor) {
                    if (aRegisteredChonductor === theChonductor) {
                        _g_ChonductorsByKind[ aChoreographyKind] = null;
                    }
                }
            }
        }

        return null;
    };
    if( m_Instrument.cDocFuncs) {
        pUnregisterChonductorForKinds._sDoc('pUnregisterChonductorForKinds',
            'Unregister a choreography conductor for the supplied choreography kinds, or if no choreography kinds are supplied, unregister the chonductor from any and all choreography kinds .');
        _doc+=('\n\n' + pUnregisterChonductorForKinds._doc);
    }







    var fChonductorForKind = function(theChoreographyKind) {

        /* var _doc = ''; */


        /* _doc+='Refuse to conduct if parameters do no abide by the contract.'; */
        if(m_Defense.cAllowDefense) {
            if(!theChoreographyKind) {
                throw new m_Error.Error('ParameterNullError', {module: _displayName, function: fConductorForKind.displayName, parameter: 'theChoreographyKind'});
            }
        }

        if(!c) {
            throw new m_Error.Error('ModuleVariableInitializationError', {module: _displayName, function: fConductorForKind, variable: '_g_ChonductorsByKind'});
        }

        var aChonductor = fConductorForKind[ theChoreographyKind];
        if( aChonductor) {
            return aChonductor;
        }

        return m_Chonductor_Void;
    };
    if( m_Instrument.cDocFuncs) {
        fChonductorForKind._sDoc('fChonductorForKind',
            'Resolve an instance of Choreography Conductor appropriate to conduct a CShoreoraphy of the supplied kind. ' +
                'Momentarily, this also returns just a void conductor, not specific for any choreography kind, for kinds for which no chonductor is registered.');
        _doc+=('\n\n' + fChonductorForKind._doc);
    }







    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        pCleanUp:                      pCleanUp,
        pRegisterChonductorForKinds:   pRegisterChonductorForKinds,
        pUnregisterChonductorForKinds: pUnregisterChonductorForKinds,
        fChonductorForKind:            fChonductorForKind
    };
    if(aModule) {}

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Chonductors')
    }

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Chonductors')
}


if( typeof define === 'function') {

    define(['m_Functionx', 'm_Instrument', 'm_Error', 'm_Defense', 'm_Chonductor_Void'],
        function (m_Functionx, m_Instrument, m_Error, m_Defense, m_Chonductor_Void) {
        return aM_Chonductors(m_Functionx, m_Instrument, m_Error, m_Defense, m_Chonductor_Void);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Chonductors.displayName]=aM_Chonductors(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Chonductor_Void']
         );
    }
    else {
        ChoirJS_Module_Chonductors = aM_Chonductors(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Error,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Chonductor_Void
        );
    }
}

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Chonductors')
}
