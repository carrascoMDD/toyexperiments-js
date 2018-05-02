/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Conductor')
}


var aM_Conductor = function (m_ConstValues, m_Functionx, m_Error, m_Instrument, m_Trace, m_Identifiable, m_Score, m_Performance, m_Orchductors, m_Chonductors) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Conductor')
    }

    if(m_Functionx) {}
    if(m_Score) {}
    if(m_Performance) {}


    var _displayName = 'm_Conductor';

    var _doc = _displayName +' module. Functions to orchestrate and choreograph the performance of voices, phrases and notes as chants.' +
        'Delegates on modules for orchestration conductor and choreography conductor.';

     _doc+= '\n\nImplementation attempt, by Delegation on modules for orchestration conductor (orchductor) and choreography conductor (chonductor).';


    var _privateMembers = [];
    var _publicMembers = [];





    _doc+=('\n\nConfigurable module constants:');

    var _cTr = m_Trace.cTrace && m_ConstValues.fConst( _displayName, '_cTr', m_Trace.cTrace && false);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';


    var _cUseProcessor = m_ConstValues.fConst( _displayName, '_cUseProcessor', 0); /* 300 */
    _doc+=('\n\n' +  JSON.stringify({_cUseProcessor: _cUseProcessor}, null, 4));
    _doc+= '\n\nConfigurable module constant cUseProcessor module variable If non zero, it shall waste the specified number of milliseconds in a loop, ' +
        'to artificially occupy processor time, and spend more time as if it were choirJS or developer supplied code, ' +
        'to exercise use case flows that depend on chant processing taken longer than the blazing-fast usual processing, ' +
        'for example the grouping and submission of note audio sounds.';



    var _cRandomizeUseProcessor = m_ConstValues.fConst( _displayName, '_cRandomizeUseProcessor', 0); /*  7.0 / 8.0; */
    _doc+=('\n\n' +  JSON.stringify({_cRandomizeUseProcessor: _cRandomizeUseProcessor}, null, 4));
    _doc+= '\n\nConfigurable module constant _cRandomizeUseProcessor';






    _doc+=('\n\nModule functions:');



    var _fUseProcessor = (function( theMillis) {

        var aDelay =  0;
        if ( _cRandomizeUseProcessor) {
            aDelay = Math.floor( ( theMillis * ( 1 - _cRandomizeUseProcessor)) +  (Math.random() * theMillis * _cRandomizeUseProcessor));
        }
        else {
            aDelay = theMillis;
        }

        if(_fUseProcessor._Trace) { m_Trace.pStep(
        '_fUseProcessor aDelay=' + aDelay)}

        var aCurrentMillis = new Date().getTime();
        var aFinalMillis   = aCurrentMillis + aDelay;
        while (aCurrentMillis   < aFinalMillis){
            aCurrentMillis = new Date().getTime();
        }
        return null;

    })._sName( _displayName, '_fUseProcessor')._sTrace(_cTr);
    _privateMembers.push(_fUseProcessor);
    if(m_Instrument.cDocFuncs) {
        _fUseProcessor._sDesc(
            'Shall waste the specified number of milliseconds in a loop, ' +
            'to artificially occupy processor time, and spend more time as if it were choirJS or developer supplied code, ' +
            'to exercise use case flows that depend on chant processing taken longer than the blazing-fast usual processing, ' +
            'for example the grouping and submission of note audio soundst.');
        _doc+=('\n\n' + _fUseProcessor._doc);
    }






    var fConduct = (function( theCtxt, theChant) {

        var aMayBegin = _fChoreographyConductors_BeforeChanting( theCtxt, theChant);

        if( aMayBegin) {
            _pOrchestrationConductor_BeginChanting( theCtxt, theChant);
        }

        return true;

    })._sName( _displayName, 'fConduct')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theChant',       ['Type', 'Chant']]
    ]);
    _publicMembers.push(fConduct);
    if(m_Instrument.cDocFuncs) {
        fConduct._sDesc(
        'The conductor of the outer chant has concluded that this chant (which is orchestrated to play by the outer chant) ' +
        'may begin being played, and it notifies so to the conductor of this chant, ' +
        'such that the conductor of this chant may further check whether this chant can be played immediately, ' +
        'according to this chant choreography constraints, ' +
        'or must wait for any of its choreography constraints to be fulfilled by a corresponding chant.');
        _doc+=('\n\n' + fConduct._doc);
    }







    var _fChoreographyConductors_BeforeChanting = (function( theCtxt, theChant) {

        /* _doc+='This functionality can be applied to the Chant only once.'; */
        if ( theChant._v_ActionsDone.indexOf(_fChoreographyConductors_BeforeChanting.displayName) >= 0) {
            throw new m_Error.Error('ParameterStateError', {module: _displayName, function: _fChoreographyConductors_BeforeChanting.displayName, parameter: 'theChant', condition: 'theChant._v_ActionsDone.indexOf(_fChoreographyConductors_BeforeChanting.displayName) >= 0', with: [theChant]});
        }

        /* _doc+='No need to process if Chantable participates in no Role in any Choreography.'; */
        if(!theChant._v_Chantable._v_PerformedRoles) {
            return true;
        }

        var aNumPerformedRoles = theChant._v_Chantable._v_PerformedRoles.length;
        if(!aNumPerformedRoles) {
            return true;
        }


        var aMayBegin = true;

        /* _doc+='Iterate over Chant Chantable performed Roles. Delegate on a Choreography Conductor for the type of Choreography of each Role.'; */

        for( var aPerformedRoleIndex = 0; aPerformedRoleIndex < aNumPerformedRoles; aPerformedRoleIndex++) {

            var aPerformedRole = theChant._v_Chantable._v_PerformedRoles[aPerformedRoleIndex];
            if(aPerformedRole) {

                var aChoreography = aPerformedRole._v_Parent;
                if (!aChoreography) {
                    throw new m_Error.Error('StructureError', {module: _displayName, function: _fChoreographyConductors_BeforeChanting.displayName, condition: '!aChoreography', with: [ theChant, aPerformedRole]});
                }

                if(!aChoreography._v_ChoreographyKind) {
                    throw new m_Error.Error('StructureError', {module: _displayName, function: _fChoreographyConductors_BeforeChanting.displayName, condition: '!aChoreography._v_ChoreographyKind', with: [ theChant, aPerformedRole, aChoreography]});
                }

                var aChoreographyConductor = m_Chonductors.fChonductorForKind(aChoreography._v_ChoreographyKind);
                if (!aChoreographyConductor) {
                    throw new m_Error.Error('ConductorError', {module: _displayName, function: _fChoreographyConductors_BeforeChanting.displayName, condition: '!aChoreographyConductor', with: [ theChant, aPerformedRole, aChoreography]});
                }

                var otherMayBegin = aChoreographyConductor.fBeforeChantingRole( theCtxt, theChant, aPerformedRole);
                aMayBegin = aMayBegin && otherMayBegin;
            }
        }

        theChant._v_ActionsDone.push(_fChoreographyConductors_BeforeChanting.displayName);

        return aMayBegin;

    })._sName( _displayName, '_fChoreographyConductors_BeforeChanting')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theChant',       ['Type', 'Chant']]
    ]);
    _privateMembers.push(_fChoreographyConductors_BeforeChanting);
    if(m_Instrument.cDocFuncs) {
        _fChoreographyConductors_BeforeChanting._sDesc(
            'Delegate into choreography conductors for each choreography where the Chantable plays a role, ' +
            'to apply any Choreography constraints, before delegating to a Orchestration Conductor to play the Chantable.');
        _doc+=('\n\n' + _fChoreographyConductors_BeforeChanting._doc);
    }







    var _pOrchestrationConductor_BeginChanting = (function( theCtxt, theChant) {

        /* _doc+='This functionality can be applied to the Chant only once.'; */
        if ( theChant._v_ActionsDone.indexOf(_pOrchestrationConductor_BeginChanting.displayName) >= 0) {
            throw new m_Error.Error('ParameterHistoryFieldError', {module: _displayName, function: _pOrchestrationConductor_BeginChanting, parameter: 'theChant', field: '_v_ActionsDone', avoidAgain: _pOrchestrationConductor_BeginChanting.displayName, with: [ theChant]});
        }


        /* _doc+='Refuse to begin chanting without Chantable.'; */
        if(!theChant._v_Chantable) {
            throw new m_Error.Error('ParameterFieldNullError', {module: _displayName, function: _pOrchestrationConductor_BeginChanting,  parameter: 'theChant', field: '_v_Chantable', with: [ theChant]});
        }



        if(theChant._v_Chantable._v_Type === 'Note') {
            _pChant_Note( theCtxt, theChant);
            return null;
        }


        var anOrchestrationConductor = m_Orchductors.fOrchductorForKind( theCtxt, theChant._v_Chantable._v_OrchestrationKind);
        if (!anOrchestrationConductor) {
            throw new m_Error.Error('ConductorError', {module: _displayName, function: _pOrchestrationConductor_BeginChanting, condition: '!anOrchestrationConductor', with: [ theChant]});
        }

        var aRes = anOrchestrationConductor.fBeginChanting( theCtxt, theChant);
        if(aRes) {}
        if( theChant._v_Sung) {

        }

        theChant._v_ActionsDone.push(_pOrchestrationConductor_BeginChanting.displayName);

        return null;

    })._sName( _displayName, '_pOrchestrationConductor_BeginChanting')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theChant',       ['Type', 'Chant']]
    ]);
    _privateMembers.push(_pOrchestrationConductor_BeginChanting);
    if(m_Instrument.cDocFuncs) {
        _pOrchestrationConductor_BeginChanting._sDesc(
            'Delegate into the orchestration conductor to play the Chant.');
        _doc+=('\n\n' + _pOrchestrationConductor_BeginChanting._doc);
    }







    var _pChant_Note = (function(theCtxt, theChant) {

        /* _doc+='Actually execute the function supplied by the programmer.'; */
        if( theChant._v_Chantable._v_NoteHandler) {

            if( !( typeof theChant._v_Chantable._v_NoteHandler === 'function')) {
                throw new m_Error.Error('ParameterFieldFieldNotAFunctionError', {module: _displayName, function: _pChant_Note, parameter: 'theChant', field: '_v_Chantable', field2: '_v_NoteHandler', with: [theChant,  theChant._v_Chantable]});
            }

            /* Invoke programmers supplied function with the Chantable as this and theChant as the sole argument.'; */
            theChant._v_Chantable._v_NoteHandler.apply(theChant._v_Chantable, [theChant]);
        }


        theChant._v_ActionsDone.push(_pChant_Note.displayName);
        theChant._v_Sung = true;

        if(_cUseProcessor) {
            _fUseProcessor( _cUseProcessor);
        }

        if( theChant._v_Chantable._v_NoteHandler) {
            _pNotifyInterestedParties_PlayChant( theCtxt, theChant)
        }

        return true;

    })._sName( _displayName, '_pChant_Note')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theChant',       ['Type', 'Chant']]
    ]);
    _privateMembers.push(_pChant_Note);
    if(m_Instrument.cDocFuncs) {
        _pChant_Note._sDesc( '');
        _doc+=('\n\n' + _pChant_Note._doc);
    }





    var pRegisterInterest_PlayChant = (function( theCtxt, thePerformance, theInterestedParty) {

        if ( !theInterestedParty) {
            return null;
        }
        if( thePerformance._v_InterestedParties_PlayChant.indexOf( theInterestedParty) >= 0) {
            return null;
        }
        thePerformance._v_InterestedParties_PlayChant.push( theInterestedParty);

        return null;

    })._sName( _displayName, 'pRegisterInterest_PlayChant')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',       ['Type', 'Performance']],
        [ 'theInterestedParty',   ['object']]
    ]);
    _publicMembers.push(pRegisterInterest_PlayChant);
    if(m_Instrument.cDocFuncs) {
        pRegisterInterest_PlayChant._sDesc(
            'Registers a party interested in being notified of chants being played, ' +
            'by invocation of the registered party function pNoteHasJustBeenPlayed  with the played chant as argument. ' +
            'This creates a references cycle between the modules m_Conductor and m_EchoAudio.');
        _doc+=('\n\n' + pRegisterInterest_PlayChant._doc);
    }






    var _pNotifyInterestedParties_PlayChant = (function( theCtxt, theChant) {

        var aPerformance = m_Performance.fPerformanceOf( theChant);
        if (!aPerformance) {
            throw new m_Error.Error( 'Chant without root Performance.');
        }

        if ( !aPerformance._v_InterestedParties_PlayChant) {
            return null;
        }
        var aNumInterestedParties = aPerformance._v_InterestedParties_PlayChant.length;
        for ( var anIndex = 0; anIndex < aNumInterestedParties; anIndex++) {
            var anInterestedParty = aPerformance._v_InterestedParties_PlayChant[ anIndex];
            if( anInterestedParty) {
                var aNotificationHandler = anInterestedParty['pNoteHasJustBeenPlayed'];
                if(aNotificationHandler) {
                    aNotificationHandler.apply( anInterestedParty, [theCtxt, theChant]);
                }
            }
        }

        return null;
    })._sName( _displayName, '_pNotifyInterestedParties_PlayChant')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theChant',       ['Type', 'Chant']]
    ]);
    _publicMembers.push(_pNotifyInterestedParties_PlayChant);
    if(m_Instrument.cDocFuncs) {
        _pNotifyInterestedParties_PlayChant._sDesc(
            'Notifies interested parties of a Chant being played.');
        _doc+=('\n\n' + _pNotifyInterestedParties_PlayChant._doc);
    }







    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        fConduct: fConduct,
        pRegisterInterest_PlayChant: pRegisterInterest_PlayChant

    };
    if(aModule) {}

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Conductor')
    }


    return aModule;
};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Conductor')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_Functionx', 'm_Error', 'm_Instrument', 'm_Trace', 'm_Identifiable', 'm_Score', 'm_Performance', 'm_Orchductors', 'm_Chonductors'],
        function (m_ConstValues, m_Functionx, m_Error, m_Instrument, m_Trace, m_Identifiable, m_Score, m_Performance, m_Orchductors, m_Chonductors) {
        return aM_Conductor(m_ConstValues, m_Functionx, m_Error, m_Instrument, m_Trace, m_Identifiable, m_Score, m_Performance, m_Orchductors, m_Chonductors);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Conductor.displayName]=aM_Conductor(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_Score'],
            gChoirJS_Modules['m_Performance'],
            gChoirJS_Modules['m_Orchductors'],
            gChoirJS_Modules['m_Chonductors']
         );
    }
    else {
        ChoirJS_Module_Conductor = aM_Conductor(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_Score,
            ChoirJS_Module_Performance,
            ChoirJS_Module_Orchductors,
            ChoirJS_Module_Chonductors
        );
    }
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Conductor')
}


