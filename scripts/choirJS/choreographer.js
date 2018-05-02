/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Choreographer')
}


var aM_Choreographer = function (m_Functionx, m_Error, m_Instrument, m_Identifiable, m_Defense,
                                 m_Score, m_Choreography) {

    "use strict";


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Choreographer')
    }


    if(m_Functionx) {}

    var _displayName = 'm_Choreographer';

    var _doc=_displayName +' module. Functions to create choreography assemblies in choirJS .';




    var fNewChoreography = function() {
        /* var _doc = ''; */

        var aChoreography=m_Identifiable.fNewIdentifiable();

        m_Choreography.pChoreography_Properties_Into(aChoreography);

        return aChoreography;
    };
    if(m_Instrument.cDocFuncs) {
        fNewChoreography._sDoc('fNewChoreography', '');
        _doc+=('\n\n' + fNewChoreography._doc);
    }





    var fAddStarts = function(theScore) {
        /* var _doc = ''; */

        if (m_Defense.cAllowDefense) {
            /* _doc+='Defensive.'; */
            if( !theScore) {
                throw new m_Error.Error('ParameterNullError', {module: _displayName, function: fAddStarts, parameter: 'theScore'});
            }

            if( !( theScore._v_Type === 'Score')) {
                throw new m_Error.Error('ParameterTypeError', {module: _displayName, function: fAddStarts, parameter: 'theScore', type: 'Score', with: [theScore]});
            }
        }

        if(arguments.length < 1) {
            return null;
        }
        var someStarts = Array.prototype.slice.call(arguments, 1);
        var aNumStarts = someStarts.length;

        for (var anIndex = 0; anIndex < aNumStarts; anIndex++) {
            var aStart = someStarts[anIndex];
            if (aStart) {
                if(m_Score.fScore(aStart) === theScore) {
                    theScore._v_Starts.push(aStart);
                }
                else {
                    throw new m_Error.Error('ParameterRootError', {module: _displayName, function: fAddStarts, parameter: 'aStart', condition: 'Different Score', with: [theScore, aStart, anIndex]});
                }
            }
        }
        return null;
    };
    if(m_Instrument.cDocFuncs) {
        fAddStarts._sDoc('fAddStarts',
            'Register what to play first when performing the supplied Score. Usually some Chantables of the supplied Score, supplied as variable arguments.');
        _doc+=('\n\n' + fAddStarts._doc);
    }





    /*
    var fNewDuet = function(theInitiator, theResponder) {
        if ( (typeof theInitiator === 'undefined') || theInitiator === null || ((typeof theResponder === 'undefined') || theResponder === null)) {
            return null;
        }

        var aChoreography=fNewChoreography();
        m_Choreography.pChoreography_Properties_Into(aChoreography);

        var anInitiatorRole=m_Identifiable.fNewIdentifiable();
        m_Choreography.pRole_Properties_Into(anInitiatorRole);
        anInitiatorRole._v_Name='Initiator';
        anInitiatorRole._v_Choreographeds.push(theInitiator);
        anInitiatorRole._v_Parent= aChoreography;

        aChoreography._v_Roles.push(anInitiatorRole);

        m_Choreography.pChoreographed_Properties_Into(theInitiator);
        theInitiator._v_PerformedRoles.push(anInitiatorRole);


        var anResponderRole=m_Identifiable.fNewIdentifiable();
        m_Choreography.pRole_Properties_Into(anResponderRole);
        anResponderRole._v_Name='Responder';
        anResponderRole._v_Choreographeds.push(theResponder);
        anResponderRole._v_Parent= aChoreography;

        aChoreography._v_Roles.push(anResponderRole);

        m_Choreography.pChoreographed_Properties_Into(theResponder);
        theResponder._v_PerformedRoles.push(anResponderRole);


        var aChoreographyOwner=m_Score.fCommonParent(theInitiator, theResponder);
        if(aChoreographyOwner) {
            aChoreography._v_Parent = aChoreographyOwner;
            m_Choreography.pChoreographyOwner_Properties_Into(aChoreographyOwner);
            aChoreographyOwner._v_Choreographies.push(aChoreography);
        }

        return aChoreography;
    };
    fNewChoreography._doc='';
    fNewChoreography.displayName='fNewChoreography';





    var fAddChord = function() {

        return {};
    };
    fAddChord._doc='Parallel performance.';
    fAddChord.displayName='fAddChord';

    */




    /*
    var _gChoreographyConductorResolvers = [];

    var _gChoreographyConductorsByName = {};


    var pRegisterChoreographyConductorResolver = function(theChoreographyConductorResolver) {
        if (!theChoreographyConductorResolver) {
            return null;
        }

        _gChoreographyConductorsByName= {};
        _gChoreographyConductorResolvers.push(theChoreographyConductorResolver);

        return null;
    };
    pRegisterChoreographyConductorResolver._doc='';
    pRegisterChoreographyConductorResolver.displayName='fNewChoreography';
    _doc+='\n\n' + pRegisterChoreographyConductorResolver.displayName + '\n' + pRegisterChoreographyConductorResolver._doc;




    var fChoreographyConductorForName = function(theChoreographyKind) {
        if(!theChoreographyKind) {
            return null;
        }
        var aChoreographyConductor = _gChoreographyConductorsByName[theChoreographyKind];
        if(aChoreographyConductor) {
            return aChoreographyConductor;
        }

        if( aChoreographyConductor == null) {
            return aChoreographyConductor;
        }

        var aNumResolvers = _gChoreographyConductorResolvers.length;
        for (var aResolverIndex=0; aResolverIndex < aNumResolvers; aResolverIndex++) {
            var aResolver = _gChoreographyConductorResolvers[aResolverIndex];
            if (aResolver) {
                aChoreographyConductor=aResolver[theChoreographyKind];
                if(aChoreographyConductor) {
                    _gChoreographyConductorsByName[theChoreographyKind] = aChoreographyConductor;
                    return aChoreographyConductor;
                }
            }
        }
        _gChoreographyConductorsByName[theChoreographyKind] = null;

        return null;
    };
    fChoreographyConductorForName._doc='.';
    fChoreographyConductorForName.displayName='fChoreographyConductorForName';
    _doc+='\n\n' + fChoreographyConductorForName.displayName + '\n' + fChoreographyConductorForName._doc;





    _doc+='Register basic chreography type resolver supplied with the choirJS product.';
    pRegisterChoreographyConductorResolver(m_BasicChoreographyConductors.gChoreographyConductorResolver);


    */


    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        fNewChoreography:     fNewChoreography,
        fAddStarts:           fAddStarts

        /*
        fNewDuet:             fNewDuet,
        fAddChord:            fAddChord,
        pRegisterChoreographyConductorResolver: pRegisterChoreographyConductorResolver,
        fChoreographyForType: fChoreographyForType
        */
    };

    if(aModule) {}

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Choreographer')
    }

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Choreographer')
}



if( typeof define === 'function') {
    define(['m_Functionx', 'm_Error', 'm_Instrument', 'm_Identifiable', 'm_Defense',
        'm_Score', 'm_Choreography'],
        function (m_Functionx, m_Error, m_Instrument, m_Identifiable, m_Defense,
                  m_Score, m_Choreography) {

        return aM_Choreographer(m_Functionx, m_Error, m_Instrument, m_Identifiable, m_Defense,
            m_Score, m_Choreography);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Choreographer.displayName]=aM_Choreographer(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Score'],
            gChoirJS_Modules['m_Choreography']
        );
    }
    else {
        ChoirJS_Module_Choreographer = aM_Choreographer(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Error,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Score,
            ChoirJS_Module_Choreography
        );
    }
}

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Choreographer')
}


