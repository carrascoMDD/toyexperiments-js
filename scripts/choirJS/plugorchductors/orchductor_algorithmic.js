/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Orchductor_Algorithmic')
}


var aM_Orchductor_Algorithmic = function (m_ConstValues, m_Functionx, m_Ctxt, m_Defense, m_Identifiable, m_Instrument, m_Error, m_Trace,
    m_Score, m_Performance, m_Performer, m_Orchductors) {
    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Orchductor_Algorithmic')
    }

    if(m_Functionx) {}

    var _privateMembers = [];
    var _publicMembers = [];


    var _displayName = 'm_Orchductor_Algorithmic';

    var _doc = _displayName + ' module. With void Functions to orchestrate the performance of voices, phrases and notes as chants.';

    _doc+='\nACV OJO This may create a references cycle between modules, ' +
        'because the orchductors registry refers to this chonductor module, ' +
        'and this orchductor holds the reference to the orchductors module holding the registry.';




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');


    var _cTr = m_Trace.cTrace && m_ConstValues.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';



    var c_OrchestrationKinds = ['Algoritmic'].concat( m_Score.cOrchestrationKinds_Algorithmic);
    _doc+=('\n\n' +  JSON.stringify({c_OrchestrationKinds: c_OrchestrationKinds}, null, 4));






    _doc+=('\n\nModule functions:');




    var fBeginChanting = (function( theCtxt, theChant) {

        var aChantable = theChant._v_Chantable;
        if (!aChantable) {
            theChant._v_ActionsDone.push(fBeginChanting.displayName);
            _pChantingComplete( theChant);
        }

        if (m_Defense.cAllowDefense) {
            if( !( m_Score.cChantableTypeNames.indexOf(aChantable._v_Type) >= 0)) {
                throw new m_Error.Error('ParameterFieldTypeError', {module: _displayName, function: fBeginChanting, parameter: 'theChant', field: '_v_Chantable', types: m_Score.cChantableTypeNames, with: [aChantable]});
            }
        }


        var aDone = false;
        var aResult = null;

        if( aChantable._v_Type === 'Note') {

            aResult = _fBeginChanting_Note( theCtxt, theChant, aChantable);
            aDone = true;
        }
        else {
            if ( m_Score.cOrchestrableTypeNames.indexOf(aChantable._v_Type) >= 0) {

                aResult = _fBeginChanting_Orchestrated( theCtxt, theChant, aChantable);
                aDone = true;
            }
        }

        if( aDone) {
            theChant._v_ActionsDone.push(fBeginChanting.displayName);
        }

        return aResult;

    })._sName( _displayName, 'fBeginChanting')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theChant', ['Type', 'Chant']]
    ]);
    _publicMembers.push(fBeginChanting);
    if(m_Instrument.cDocFuncs) {
        fBeginChanting._sDesc('');
        _doc+=('\n\n' + fBeginChanting._doc);
    }







    var _fBeginChanting_Note = (function( theCtxt, theChant, theNote) {

        /* _doc+='Actually execute the function supplied by the programmer.'; */
        if( theNote._v_NoteHandler) {
            theNote._v_NoteHandler({chant: theChant, note: theNote});
        }


        theChant._v_ActionsDone.push(_fBeginChanting_Note.displayName);

        _pChantingComplete( theChant);

        return true;

    })._sName( _displayName, '_fBeginChanting_Note')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theChant', ['Type', 'Chant']],
        [ 'theNote',  ['Type', 'Note']]
    ]);
    _privateMembers.push(_fBeginChanting_Note);
    if(m_Instrument.cDocFuncs) {
        _fBeginChanting_Note._sDesc('');
        _doc+=('\n\n' + _fBeginChanting_Note._doc);
    }









    var _fBeginChanting_Orchestrated = (function( theCtxt, theChant, theOrchestrable) {

        var aDone = false;
        var aResult = null;

        switch( theOrchestrable._v_OrchestrationKind) {

            case 'Sequence':
                aResult = _fBeginChanting_Sequence( theCtxt, theChant, theOrchestrable);
                aDone = true;
                break;
            /*
            case 'Simultaneous':
                aResult = _fBeginChanting_Simultaneous(theChant, theOrchestrable);
                aDone = true;
                break;

            case 'Wait':
                aResult = _fBeginChanting_Wait(theChant, theOrchestrable);
                aDone = true;
                break;

            case 'IfThenElse':
                aResult = _fBeginChanting_IfThenElse(theChant, theOrchestrable);
                aDone = true;
                break;

            case 'While':
                aResult = _fBeginChanting_While(theChant, theOrchestrable);
                aDone = true;
                break;

            case 'Until':
                aResult = _fBeginChanting_Until(theChant, theOrchestrable);
                aDone = true;
                break;

            case 'Loop':
                aResult = _fBeginChanting_Loop(theChant, theOrchestrable);
                aDone = true;
                break;

            case 'For':
                aResult = _fBeginChanting_For(theChant, theOrchestrable);
                aDone = true;
                break;

            case 'In':
                aResult = _fBeginChanting_In(theChant, theOrchestrable);
                aDone = true;
                break;

            case 'GoTo':
                aResult = _fBeginChanting_GoTo(theChant, theOrchestrable);
                aDone = true;
                break;
            */
            default:
                break;
        }

        if( aDone) {
            theChant._v_ActionsDone.push(_fBeginChanting_Orchestrated.displayName);
        }

        return aResult;

    })._sName( _displayName, '_fBeginChanting_Note')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theChant',        ['Type', 'Chant']],
        [ 'theOrchestrable', ['Type'].concat(  m_Score.cOrchestrableTypeNames)] /* ACV OJO Defend TODO check this works */
    ]);
    _privateMembers.push(_fBeginChanting_Note);
    if(m_Instrument.cDocFuncs) {
        _fBeginChanting_Note._sDesc('');
        _doc+=('\n\n' + _fBeginChanting_Note._doc);
    }









    var _fBeginChanting_Sequence = (function( theCtxt, theChant, theSequence) {

        if(!( theSequence._v_OrchestrationKind === 'Sequence')) {
            return false;
        }

        if ( !( theSequence._v_PhrasesOrNotes && theSequence._v_PhrasesOrNotes.length)) {
            theChant._v_ActionsDone.push(_fBeginChanting_Sequence.displayName);
            _pChantingComplete( theCtxt, theChant);
            return true;
        }

        var someToRecommend = [ ];

        var aNumPhrasesOrNotes = theSequence._v_PhrasesOrNotes.length;
        for ( var anIndex = 0; anIndex < aNumPhrasesOrNotes; anIndex++) {
            var aPhraseOrNote = theSequence._v_PhrasesOrNotes[ anIndex];
            if ( aPhraseOrNote) {
                /* _doc+='Create, initialize and link an instance of Chant to keep state about the performance of the Chantable.'; */
                var aChant = m_Identifiable.fNewIdentifiable();
                m_Performance.pChant_Properties_Into(aChant);

                aChant._v_Chantable = aPhraseOrNote;

                aChant._v_Parent = theChant;
                theChant._v_Chants.push( aChant);

                someToRecommend.push( aChant);
            }
        }

        if( someToRecommend.length) {
            var aPerformance = m_Performance.fPerformanceOf( theChant);
            if (!aPerformance) {
                throw new m_Error.Error('ParameterNullRootError', {module: _displayName, function: _fBeginChanting_Sequence, parameter: 'theChant', root: 'Performance', with: [theChant]});
            }
            m_Performer.pRecommendChants_Immediate( theCtxt, aPerformance, someToRecommend)
        }

        return true;

    })._sName( _displayName, '_fBeginChanting_Sequence')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theChant',        ['Type', 'Chant']],
        [ 'theSequence',     ['Type'].concat(  m_Score.cOrchestrableTypeNames)] /* ACV OJO Defend TODO check this works
             there was additional imperative defense theSequence._v_OrchestrationKind, now enforced by logic returning false,
             whose results are not used (in conductor.js)  at the time of this refactoring */
    ]);
    _privateMembers.push(_fBeginChanting_Sequence);
    if(m_Instrument.cDocFuncs) {
        _fBeginChanting_Sequence._sDesc('');
        _doc+=('\n\n' + _fBeginChanting_Sequence._doc);
    }







    var _pChantingComplete = (function( theCtxt, theChant) {

        theChant._v_ActionsDone.push(_pChantingComplete.displayName);
        theChant._v_Sung = true;

        return true;

    })._sName( _displayName, '_pChantingComplete')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theChant',        ['Type', 'Chant']]
    ]);
    _privateMembers.push(_pChantingComplete);
    if(m_Instrument.cDocFuncs) {
        _pChantingComplete._sDesc('');
        _doc+=('\n\n' + _pChantingComplete._doc);
    }






    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,


        c_OrchestrationKinds: c_OrchestrationKinds,
        fBeginChanting:  fBeginChanting
    };
    if(aModule) {}


    /* ACV OJO This may create a references cycle between modules */
    m_Orchductors.pRegisterOrchductorForKinds(aModule, aModule.c_OrchestrationKinds);

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Orchductor_Algorithmic')
    }


    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Orchductor_Algorithmic')
}


if( typeof define === 'function') {

    define(['m_ConstValues', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Identifiable', 'm_Instrument', 'm_Error', 'm_Trace',
        'm_Score', 'm_Performance', 'm_Performer', 'm_Orchductors'],
        function ( m_ConstValues, m_Functionx, m_Ctxt, m_Defense, m_Identifiable, m_Instrument, m_Error, m_Trace,
            m_Score, m_Performance, m_Performer, m_Orchductors) {
        return aM_Orchductor_Algorithmic(m_ConstValues, m_Functionx, m_Ctxt, m_Defense, m_Identifiable, m_Instrument, m_Error, m_Trace,
            m_Score, m_Performance, m_Performer, m_Orchductors);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Orchductor_Algorithmic.displayName]=aM_Orchductor_Algorithmic(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Score'],
            gChoirJS_Modules['m_Performance'],
            gChoirJS_Modules['m_Performer'],
            gChoirJS_Modules['m_Orchductors']
        );
    }
    else {
        ChoirJS_Module_Orchductor_Algorithmic = aM_Orchductor_Algorithmic(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Error,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Score,
            ChoirJS_Module_Performance,
            ChoirJS_Module_Performer,
            ChoirJS_Module_Orchductors
        );
    }
}

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Orchductor_Algorithmic')
}
