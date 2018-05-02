/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Choreography')
}


var aM_Composer = function (m_ConstValues, m_Functionx, m_Instrument, m_Identifiable, m_Score, m_Error, m_Trace) {

    "use strict";


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Composer')
    }


    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */

    var _displayName = 'm_Composer';

    var _doc=_displayName +' module. Functions to create choirJS assemblies.';



    _doc+=('\n\nConfigurable module constants:');

    var _cTr = m_Trace.cTrace && m_ConstValues.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';


    var cThrowCompositionExceptions=true;
    _doc+=('\n\n' +  JSON.stringify({cThrowCompositionExceptions: cThrowCompositionExceptions}, null, 4));
    _doc+='Whether to throw exceptions upon erroneus conditions found while composing scores.';




    _doc+='\n\n\\* ********************************************************\n' +
        'Factory functions to assemble networks of choirJS objects.';






    var fNewChoir = function() {
        var aChoir=m_Identifiable.fNewIdentifiable();

        m_Score.pChoir_Properties_Into(aChoir);

        return aChoir;
    };
    if(m_Instrument.cDocFuncs) {
        fNewChoir._sDoc('fNewChoir','Create a new instance of Choir - a root element for ChoirJS.');
        _doc+=('\n\n' +  fNewChoir._doc);
    }





    var fNewScore = function() {
        var aScore=m_Identifiable.fNewIdentifiable();

        m_Score.pScore_Properties_Into(aScore);

        return aScore;
    };
    if(m_Instrument.cDocFuncs) {
        fNewScore._pTrace(_cTr)._sDoc('fNewScore','Create a new instance of Score - a root element for specifications to perform with ChoirJS.');
        _doc+=('\n\n' +  fNewScore._doc);
    }






    var fAddVoice = function(theVoiceContainer, theDynamicArguments) {
        var aTC =fAddVoice._Trace && m_Trace.fBegin( _displayName, fAddVoice);
        try {

            if(!theVoiceContainer) {

                if(!cThrowCompositionExceptions) { return null; }
                else {
                    throw new m_Error.Error( 'ComposerError', {module: _displayName, function: fAddVoice,  condition: '!theVoiceContainer'});
                }
            }

            if(!(typeof theVoiceContainer === 'object')) {

                if(!cThrowCompositionExceptions) { return null; }
                else {
                    throw new m_Error.Error( 'ComposerError', {module: _displayName, function: fAddVoice, condition: '!(typeof theVoiceContainer === "object")'});
                }
            }

            if(!theVoiceContainer._v_Type) {
                if(!cThrowCompositionExceptions) { return null; }
                else {
                    throw new m_Error.Error( 'ComposerError', {module: _displayName, function: fAddVoice, condition: '!theVoiceContainer._v_Type'});
                }
            }

            var anErrWith = [ theVoiceContainer];

            if(['Score', 'Section'].indexOf(theVoiceContainer._v_Type) < 0) {
                if(!cThrowCompositionExceptions) { return null; }
                else {
                    throw new m_Error.Error( 'ComposerError', {module: _displayName, function: fAddVoice, condition: '["Score", "Section"].indexOf(theVoiceContainer) < 0', with: anErrWith});
                }
            }

            var aVoice = null;

            if ( arguments.length > 1) {
                var aPossibleVoice = arguments[ 1];

                if( aPossibleVoice) {

                    if( typeof aPossibleVoice === 'object') {

                        if( aPossibleVoice._v_Type === 'Voice') {

                            if(aTC) { m_Trace.pTr( aTC, 'Because just a Voice has been supplied, just add the Voice to the supplied Score or Section parent.');}

                            aVoice = aPossibleVoice;
                            if (aVoice._v_Parent) {
                                aVoice = _fClone_Voice(aVoice);
                            }

                            aVoice._v_Parent = theVoiceContainer;
                            theVoiceContainer._v_SectionsOrVoices.push(aVoice);

                            return aVoice;
                        }
                    }
                }
            }


            if(aTC) { m_Trace.pTr( aTC, 'Create a new Voice with the supplied variable arguments.');}
            var someArguments = Array.prototype.slice.call(arguments, 1);
            aVoice=fNewVoice.apply(this, someArguments);
            if(!aVoice) {
                if(!cThrowCompositionExceptions) { return null; }
                else {
                    throw new m_Error.Error( 'ComposerError', {module: _displayName, function: fAddVoice, condition: '!fNewVoice', with: anErrWith});
                }
            }

            if(aTC) { m_Trace.pTr( aTC, 'Add the new Voice to the supplied container Score or Section.');}
            aVoice._v_Parent = theVoiceContainer;
            theVoiceContainer._v_SectionsOrVoices.push(aVoice);

            return aVoice;
        }
        finally {
            if(aTC) { m_Trace.pEnd( aTC);}
        }
    };
    if(m_Instrument.cDocFuncs) {
        fAddVoice._pTrace(_cTr)._sDoc('fAddVoice','Create a new Voice object, and add it to the supplied Score or Section.\n' +
            'Dynamic parameters:\n' +
            'Voice\n' +
            '|\n' +
            '(\n' +
            '    0..1 OrchestrationKind\n' +
            '    0..n Phrase | Note | NoteHandler\n' +
            ')');
        _doc+=('\n\n' +  fAddVoice._doc);
    }










    var _fNewVoiceHelper = function(theDynamicArguments) {

        /* var _doc=''; _doc*/

        /* _doc+='If more than one one Phrase or Note then create a Phrase to contain all of them,' +
         ' and add this Phrase to the new Voice. If just one Phrase or Note then just add it to the new Voice.'; _doc*/

        var somePhrasesOrNotes = _fNewVoiceOrPhraseHelper.apply( this, Array.prototype.slice.call(arguments));
        if( !somePhrasesOrNotes) {
            return null;
        }

        var aNumPhrasesOrNotes = somePhrasesOrNotes.length;
        if( !aNumPhrasesOrNotes) {
            return null;
        }


        if( aNumPhrasesOrNotes === 1) {
            return somePhrasesOrNotes[0];
        }

        var aGroupingPhrase=m_Identifiable.fNewIdentifiable();

        m_Score.pPhrase_Properties_Into(aGroupingPhrase);

        aGroupingPhrase._v_OrchestrationKind = 'Sequence';

        for ( var anIndex=0; anIndex < aNumPhrasesOrNotes; anIndex++) {
            var otherPhraseOrNote = somePhrasesOrNotes[anIndex];
            if (otherPhraseOrNote) {
                aGroupingPhrase._v_PhrasesOrNotes.push(otherPhraseOrNote);
                otherPhraseOrNote._v_Parent = aGroupingPhrase;
            }
        }
        return aGroupingPhrase;

    };
    if(m_Instrument.cDocFuncs) {
        _fNewVoiceHelper._pTrace(_cTr)._sDoc('_fNewVoiceHelper','Delegate on _fNewVoiceOrPhraseHelper to process variable arguments.\n' +
        'If more than one result then it shall create a top Phrase, to contain the supplied arguments.\n' +
        'Dynamic parameters:\n' +
        '0..n Phrase | Note | NoteHandler.');
        _doc+=('\n\n' +  _fNewVoiceHelper._doc);
    }






    var _fNewPhraseHelper = function( theDynamicArguments) {

        /* var _doc=''; _doc*/

        /* _doc+='If more than one one Phrase or Note then create a Phrase to contain all of them,' +
         ' and add this Phrase to the new Voice. If just one Phrase or Note then just add it to the new Voice.'; _doc*/

        var somePhrasesOrNotes = _fNewVoiceOrPhraseHelper.apply( this, Array.prototype.slice.call(arguments));
        if( !somePhrasesOrNotes) {
            return null;
        }
        return somePhrasesOrNotes;

    };
    if(m_Instrument.cDocFuncs) {
        _fNewPhraseHelper._pTrace(_cTr)._sDoc('_fNewPhraseHelper','Delegate on _fNewPhraseHelper to process variable arguments.\n' +
            'Dynamic parameters:\n' +
            '0..n Phrase | Note | NoteHandler.');
        _doc+=('\n\n' +  _fNewPhraseHelper._doc);
    }






    var _fNewVoiceOrPhraseHelper = function( theDynamicArguments) {

        /* var _doc=''; _doc*/

        /* _doc+='Process all remaining parameters, treating them as potential Phrases, Notes or NoteHandlers to add to the new Voice.'; _doc*/


        /* _doc+='Collect all Phrases, Notes, and build Notes for supplied NoteHandlers, to be later added to the new Voice.'; _doc*/
        var anIndex;
        var somePhrasesOrNotes = [];

        var aNumPhrasesOrNotesOrNoteHandlers = arguments.length;
        if ( aNumPhrasesOrNotesOrNoteHandlers < 1) {
            return null;
        }
        for( anIndex = 0; anIndex < aNumPhrasesOrNotesOrNoteHandlers; anIndex++) {

            var aPhraseOrNoteOrNoteHandler = arguments[anIndex];



            if( typeof aPhraseOrNoteOrNoteHandler === 'function') {
                var aNote=m_Identifiable.fNewIdentifiable();
                m_Score.pNote_Properties_Into(aNote);

                aNote._v_NoteHandler=aPhraseOrNoteOrNoteHandler;
                somePhrasesOrNotes.push(aNote);
            }
            else {
                if(typeof aPhraseOrNoteOrNoteHandler === 'object') {

                    var anErrWith = [ aPhraseOrNoteOrNoteHandler];

                    if(aPhraseOrNoteOrNoteHandler._v_Type) {

                        if( ['Phrase', 'Note'].indexOf(aPhraseOrNoteOrNoteHandler._v_Type) >= 0) {
                            var aPhraseOrNote = aPhraseOrNoteOrNoteHandler;
                            if(aPhraseOrNote._v_Parent) {
                                aPhraseOrNote=m_Score.fClone(aPhraseOrNote);
                            }
                            somePhrasesOrNotes.push(aPhraseOrNote);
                        }
                        else {
                            if(!cThrowCompositionExceptions) { return null; }
                            else {
                                throw new m_Error.Error( 'ComposerError', {module: _displayName, function: _fNewVoiceOrPhraseHelper, condition: '!(["Phrase", "Note"].indexOf(aPhraseOrNoteOrNoteHandler._v_Type) >= 0)', with: anErrWith});
                            }
                        }
                    }
                    else {
                        if(!cThrowCompositionExceptions) { return null; }
                        else {
                            throw new m_Error.Error( 'ComposerError', {module: _displayName, function: _fNewVoiceOrPhraseHelper, condition: '!aPhraseOrNoteOrNoteHandler._v_Type', with: anErrWith});
                        }
                    }
                }
                else {
                    if(!cThrowCompositionExceptions) { return null; }
                    else {
                        throw new m_Error.Error( 'ComposerError', {module: _displayName, function: _fNewVoiceOrPhraseHelper, condition: '!(typeof aPhraseOrNoteOrNoteHandler === "object")'});
                    }
                }

            }
        }

        return somePhrasesOrNotes;

    };
    if(m_Instrument.cDocFuncs) {
        _fNewVoiceOrPhraseHelper._pTrace(_cTr)._sDoc('_fNewVoiceOrPhraseHelper','Process variable arguments' +
            'Any function argument is considered a NoteHandler and is first wrapped in a Note object\n' +
            'before returning (if a single argument) or adding to the top Phrase (if multiple arguments).' +
            'Dynamic parameters:\n' +
            '0..n Phrase | Note | NoteHandler.');
        _doc+=('\n\n' +  _fNewVoiceOrPhraseHelper._doc);
    }








    var fNewVoice = function(theDynamicArguments) {

        var aTC =fNewVoice._Trace &&  m_Trace.fBegin( _displayName, fNewVoice);
        try {

            if(aTC) { m_Trace.pTr( aTC, 'Instantiate and initialize new Voice object.');}
            var aVoice=m_Identifiable.fNewIdentifiable();

            m_Score.pVoice_Properties_Into(aVoice);


            if(arguments.length) {

                var somePhrasesOrNotesOrNoteHandlers = [];

                if(typeof arguments[0] === 'string') {
                    if(aTC) { m_Trace.pTr( aTC, 'Because first argument is a string then use the first parameter as the OrchestrationKind of the new Voice.');}

                    if( !(m_Score.cOrchestrationKinds.indexOf(arguments[0]) >=0)) {
                        if(!cThrowCompositionExceptions) { return null; }
                        else {
                            throw new m_Error.Error( 'ComposerError', {module: _displayName, function: fNewVoice, condition: '!(m_Score.cOrchestrationKinds.indexOf(arguments[0]) >=0', with: [arguments[0]]});
                        }
                    }
                    aVoice._v_OrchestrationKind=arguments[0];
                    somePhrasesOrNotesOrNoteHandlers = Array.prototype.slice.call(arguments, 1);
                }
                else {
                    if(aTC) { m_Trace.pTr( aTC, 'Because first argument is NOT a string then set the OrchestrationKind of the new Voice to the default Sequence.');}
                    aVoice._v_OrchestrationKind='Sequence';

                    somePhrasesOrNotesOrNoteHandlers = Array.prototype.slice.call(arguments);
                }


                if(somePhrasesOrNotesOrNoteHandlers.length) {
                    if(aTC) { m_Trace.pTr( aTC, 'Process all remaining parameters, treating them as potential Phrases, Notes or NoteHandlers to add to the new Voice.');}
                    var aTopObject = _fNewVoiceHelper.apply(this, somePhrasesOrNotesOrNoteHandlers);
                    if (aTopObject) {
                        aVoice._v_PhrasesOrNotes.push(aTopObject);
                        aTopObject._v_Parent=aVoice;
                    }
                }
            }

            return aVoice;
        }
        finally {
            if(aTC) { m_Trace.pEnd( aTC);}
        }
    };
    if(m_Instrument.cDocFuncs) {
        fNewVoice._pTrace(_cTr)._sDoc('fNewVoice','Create a new Voice object.\n' +
            'Dynamic parameters:\n' +
            '0..1 OrchestrationKind\n' +
            '0..n Phrase | Note | NoteHandler.');
        _doc+=('\n\n' +  fNewVoice._doc);
    }












    var fAddPhrase = function(thePhraseContainer, theDynamicArguments) {
        var aTC =fAddPhrase._Trace && m_Trace.fBegin( _displayName, fAddPhrase);
        try {


            if(!thePhraseContainer) {

                if(!cThrowCompositionExceptions) { return null; }
                else {
                    throw new m_Error.Error( 'ComposerError', {module: _displayName, function: fAddPhrase, condition: '!thePhraseContainer'});
                }
            }

            if(!(typeof thePhraseContainer === 'object')) {

                if(!cThrowCompositionExceptions) { return null; }
                else {
                    throw new m_Error.Error( 'ComposerError', {module: _displayName, function: fAddPhrase, condition: '!(typeof thePhraseContainer === "object")'});
                }
            }


            if(!thePhraseContainer._v_Type) {
                if(!cThrowCompositionExceptions) { return null; }
                else {
                    throw new m_Error.Error( 'ComposerError', {module: _displayName, function: fAddPhrase, condition: '!thePhraseContainer._v_Type'});
                }
            }

            var anErrWith = [ thePhraseContainer];

            if(['Voice', 'Phrase'].indexOf(thePhraseContainer._v_Type) < 0) {
                if(!cThrowCompositionExceptions) { return null; }
                else {
                    throw new m_Error.Error( 'ComposerError', {module: _displayName, function: fAddPhrase, condition: '["Voice", "Phrase"].indexOf(thePhraseContainer) < 0', with: anErrWith});
                }
            }



            var aPhrase = null;


            if ( arguments.length === 2) {
                var aPossiblePhrase = arguments[ 1];

                if( aPossiblePhrase) {

                    if( typeof aPossiblePhrase === 'object') {

                        if( aPossiblePhrase._v_Type === 'Phrase') {
                            if(aTC) { m_Trace.pTr( aTC, 'Because just two arguments have been supplied and the second one is a Phrase, just add the Phrase to the supplied Voice or Phrase container.');}

                            aPhrase = aPossiblePhrase;
                            if (aPhrase._v_Parent) {
                                aPhrase = _fClone_Voice(aVoice);
                            }

                            aPhrase._v_Parent = thePhraseContainer;
                            thePhraseContainer._v_PhrasesOrNotes.push(aPhrase);

                            return aVoice;
                        }
                    }
                }
            }



            if(aTC) { m_Trace.pTr( aTC, 'Create a new Phrase with the supplied variable arguments.');}
            aPhrase=fNewPhrase.apply(this, Array.prototype.slice.call(arguments, 1));
            if(!aPhrase) {
                if(!cThrowCompositionExceptions) { return null; }
                else {
                    throw new m_Error.Error( 'ComposerError', {module: _displayName, function: fAddPhrase, condition: '!fNewPhrase', with: anErrWith});
                }
            }

            if(aTC) { m_Trace.pTr( aTC, 'Add the new Phrase to the supplied container Voice or Phrase.');}
            aPhrase._v_Parent = thePhraseContainer;
            thePhraseContainer._v_PhrasesOrNotes.push(aPhrase);

            return aPhrase;
        }
        finally {
            if(aTC) { m_Trace.pEnd( aTC);}
        }
    };
    if(m_Instrument.cDocFuncs) {
        fAddPhrase._pTrace(_cTr)._sDoc('fAddPhrase','Create a new Phrase object, and add it to the supplied Voice of Phrase.\n' +
            'Dynamic parameters:\n' +
            'Phrase\n' +
            '|\n' +
            '(\n' +
            '    0..1 OrchestrationKind\n' +
            '    0..n Phrase | Note | NoteHandler\n' +
            '\n');
        _doc+=('\n\n' +  fAddPhrase._doc);
    }







    var fNewPhrase = function(theDynamicArguments) {

        var aTC =fNewPhrase._Trace && m_Trace.fBegin( _displayName, fNewPhrase);
        try {

            if(aTC) { m_Trace.pTr( aTC, 'Instantiate and initialize new Phrase object.');}

            var aPhrase=m_Identifiable.fNewIdentifiable();

            m_Score.pPhrase_Properties_Into(aPhrase);



            if(arguments.length) {

                var somePhrasesOrNotesOrNoteHandlers = [];


                if(typeof arguments[0] === 'string') {
                    if(aTC) { m_Trace.pTr( aTC, 'If first parameter is a string then use the first parameter as the OrchestrationKind of the new Phrase.');}

                    if( !(m_Score.cOrchestrationKinds.indexOf(arguments[0]) >=0)) {
                        if(!cThrowCompositionExceptions) { return null; }
                        else {
                            throw new m_Error.Error( 'ComposerError', {module: _displayName, function: fNewPhrase, condition: '!(m_Score.cOrchestrationKinds.indexOf(arguments[0]) >=0', with: [arguments[0]]});
                        }
                    }
                    aPhrase._v_OrchestrationKind=arguments[0];
                    somePhrasesOrNotesOrNoteHandlers = Array.prototype.slice.call(arguments, 1);
                }
                else {
                    if(aTC) { m_Trace.pTr( aTC, 'Because first parameter is NOT a string then set the OrchestrationKind of the new Phrase to the default Sequence.');}
                    aPhrase._v_OrchestrationKind='Sequence';

                    somePhrasesOrNotesOrNoteHandlers = Array.prototype.slice.call(arguments);
                }


                if (somePhrasesOrNotesOrNoteHandlers.length) {
                    if(aTC) { m_Trace.pTr( aTC, 'Process all remaining parameters, treating them as potential Phrases, Notes or NoteHandlers to add to the new Phrase.');}
                    var someObjects = _fNewPhraseHelper.apply(this, somePhrasesOrNotesOrNoteHandlers);
                    if (someObjects) {
                        var aNumObjects = someObjects.length;
                        for (var anIndex = 0; anIndex < aNumObjects; anIndex++) {
                            var anObject = someObjects[ anIndex];
                            aPhrase._v_PhrasesOrNotes.push(anObject);
                            anObject._v_Parent=aPhrase;
                        }
                    }
                }
            }

            return aPhrase;
        }
        finally {
            if(aTC) { m_Trace.pEnd( aTC);}
        }
    };
    if(m_Instrument.cDocFuncs) {
        fNewPhrase._pTrace(_cTr)._sDoc('fNewPhrase','Create a new Phrase object.\n' +
            'Dynamic parameters:\n' +
            '0..1 OrchestrationKind\n' +
            '0..n Phrase | Note | NoteHandler');
        _doc+=('\n\n' +  fNewPhrase._doc);
    }







    var fAddSequence = function( thePhraseContainer, theDynamicArguments) {
        if(!arguments.length) {
            return null;
        }
        return fAddPhrase.apply(this, [ arguments[0], 'Sequence'].concat( Array.prototype.slice.call(arguments,1)));
    };
    if(m_Instrument.cDocFuncs) {
        fAddSequence._pTrace(_cTr)._sDoc('fAddSequence','Create a new Phrase object with Sequence orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fAddSequence._doc);
    }




    var fNewSequence = function( thePhraseContainer, theDynamicArguments) {
        return fNewPhrase.apply(this,['Sequence'].concat( Array.prototype.slice.call(arguments)));
    };
    if(m_Instrument.cDocFuncs) {
        fNewSequence._pTrace(_cTr)._sDoc('fNewSequence','Create a new Phrase object with Sequence orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fNewSequence._doc);
    }






    var fAddSimultaneous = function(thePhraseContainer /* Followed by zero or many Phrase, Note or Note Handler. */) {
        if(!arguments.length) {
            return null;
        }
        return fAddPhrase.apply(this, [ arguments[0], 'Simultaneous'].concat( Array.prototype.slice.call(arguments,1)));
    };
    if(m_Instrument.cDocFuncs) {
        fAddSimultaneous._pTrace(_cTr)._sDoc('fAddSimultaneous','Create a new Phrase object with Simultaneous orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fAddSimultaneous._doc);
    }





    var fNewSimultaneous = function( thePhraseContainer, theDynamicArguments) {
        return fNewPhrase.apply(this,['Simultaneous'].concat( Array.prototype.slice.call(arguments)));
    };
    if(m_Instrument.cDocFuncs) {
        fNewSimultaneous._pTrace(_cTr)._sDoc('fNewSimultaneous','Create a new Phrase object with Simultaneous orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fNewSimultaneous._doc);
    }






    var fAddWait = function(thePhraseContainer /* Followed by zero or many Phrase, Note or Note Handler. */) {
        if(!arguments.length) {
            return null;
        }
        return fAddPhrase.apply(this, [ arguments[0], 'Wait'].concat( Array.prototype.slice.call(arguments,1)));
    };
    if(m_Instrument.cDocFuncs) {
        fAddWait._pTrace(_cTr)._sDoc('fAddWait','Create a new Phrase object with Wait orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fAddWait._doc);
    }







    var fNewWait = function( thePhraseContainer, theDynamicArguments) {
        return fNewPhrase.apply(this,['Wait'].concat( Array.prototype.slice.call(arguments)));
    };
    if(m_Instrument.cDocFuncs) {
        fNewWait._pTrace(_cTr)._sDoc('fNewWait','Create a new Phrase object with Wait orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fNewWait._doc);
    }






    var fAddIfThenElse = function(thePhraseContainer, theCondition, theThen, theElse) {
        if(!arguments.length) {
            return null;
        }
        return fAddPhrase.apply(this, [ arguments[0], 'IfThenElse'].concat( Array.prototype.slice.call(arguments,1)));
    };
    if(m_Instrument.cDocFuncs) {
        fAddIfThenElse._pTrace(_cTr)._sDoc('fAddIfThenElse','Create a new Phrase object with IfThenElse orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fAddIfThenElse._doc);
    }




    var fNewIfThenElse = function( thePhraseContainer, theDynamicArguments) {
        return fNewPhrase.apply(this,['IfThenElse'].concat( Array.prototype.slice.call(arguments)));
    };
    if(m_Instrument.cDocFuncs) {
        fNewIfThenElse._pTrace(_cTr)._sDoc('fNewIfThenElse','Create a new Phrase object with IfThenElse orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fNewIfThenElse._doc);
    }








    var fAddWhile = function(thePhraseContainer, theConditionWithOptionalBody, theOptionalBody) {
        if(!arguments.length) {
            return null;
        }
        return fAddPhrase.apply(this, [ arguments[0], 'While'].concat( Array.prototype.slice.call(arguments,1)));
    };
    if(m_Instrument.cDocFuncs) {
        fAddWhile._pTrace(_cTr)._sDoc('fAddWhile','Create a new Phrase object with While orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fAddWhile._doc);
    }




    var fNewWhile = function( thePhraseContainer, theDynamicArguments) {
        return fNewPhrase.apply(this,['While'].concat( Array.prototype.slice.call(arguments)));
    };
    if(m_Instrument.cDocFuncs) {
        fNewWhile._pTrace(_cTr)._sDoc('fNewWhile','Create a new Phrase object with While orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fNewWhile._doc);
    }








    var fAddUntil = function(thePhraseContainer, theBodyWithOptionalCondition, theOptionalCondition) {
        if(!arguments.length) {
            return null;
        }
        return fAddPhrase.apply(this, [ arguments[0], 'Until'].concat( Array.prototype.slice.call(arguments,1)));
    };
    if(m_Instrument.cDocFuncs) {
        fAddUntil._pTrace(_cTr)._sDoc('fAddUntil','Create a new Phrase object with Until orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fAddUntil._doc);
    }




    var fNewUntil = function( thePhraseContainer, theDynamicArguments) {
        return fNewPhrase.apply(this,['Until'].concat( Array.prototype.slice.call(arguments)));
    };
    if(m_Instrument.cDocFuncs) {
        fNewUntil._pTrace(_cTr)._sDoc('fNewUntil','Create a new Phrase object with Until orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fNewUntil._doc);
    }







    var fAddLoop= function(thePhraseContainer, theBody) {
        if(!arguments.length) {
            return null;
        }
        return fAddPhrase.apply(this, [ arguments[0], 'Loop'].concat( Array.prototype.slice.call(arguments,1)));
    };
    if(m_Instrument.cDocFuncs) {
        fAddLoop._pTrace(_cTr)._sDoc('fAddLoop','Create a new Phrase object with Loop orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fAddLoop._doc);
    }



    var fNewLoop = function( thePhraseContainer, theDynamicArguments) {
        return fNewPhrase.apply(this,['Loop'].concat( Array.prototype.slice.call(arguments)));
    };
    if(m_Instrument.cDocFuncs) {
        fNewLoop._pTrace(_cTr)._sDoc('fNewLoop','Create a new Phrase object with Loop orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fNewLoop._doc);
    }







    var fAddFor = function(thePhraseContainer, theCounterInitializer, theCounterCondition, theCounterIncrement, theBody) {
        if(!arguments.length) {
            return null;
        }
        return fAddPhrase.apply(this, [ arguments[0], 'For'].concat( Array.prototype.slice.call(arguments,1)));
    };
    if(m_Instrument.cDocFuncs) {
        fAddFor._pTrace(_cTr)._sDoc('fAddFor','Create a new Phrase object with For choreography, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fAddFor._doc);
    }







    var fNewFor = function( thePhraseContainer, theDynamicArguments) {
        return fNewPhrase.apply(this,['For'].concat( Array.prototype.slice.call(arguments)));
    };
    if(m_Instrument.cDocFuncs) {
        fNewFor._pTrace(_cTr)._sDoc('fNewFor','Create a new Phrase object with For orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fNewFor._doc);
    }







    var fAddIn = function(thePhraseContainer, theCollectionRetriever, theBody) {
        if(!arguments.length) {
            return null;
        }
        return fAddPhrase.apply(this, [ arguments[0], 'In'].concat( Array.prototype.slice.call(arguments,1)));
    };
    if(m_Instrument.cDocFuncs) {
        fAddIn._pTrace(_cTr)._sDoc('fAddIn','Create a new Phrase object with In orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fAddIn._doc);
    }




    var fNewIn = function( thePhraseContainer, theDynamicArguments) {
        return fNewPhrase.apply(this,['In'].concat( Array.prototype.slice.call(arguments)));
    };
    if(m_Instrument.cDocFuncs) {
        fNewIn._pTrace(_cTr)._sDoc('fNewIn','Create a new Phrase object with In orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fNewIn._doc);
    }




    var fAddGoTo = function(thePhraseContainer, theCollectionRetriever, theBody) {
        if(!arguments.length) {
            return null;
        }
        return fAddPhrase.apply(this, [ arguments[0], 'GoTo'].concat( Array.prototype.slice.call(arguments,1)));
    };
    if(m_Instrument.cDocFuncs) {
        fAddGoTo._pTrace(_cTr)._sDoc('fAddGoTo','Create a new Phrase object with GoTo orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fAddGoTo._doc);
    }




    var fNewGoTo = function( thePhraseContainer, theDynamicArguments) {
        return fNewPhrase.apply(this,['GoTo'].concat( Array.prototype.slice.call(arguments)));
    };
    if(m_Instrument.cDocFuncs) {
        fNewGoTo._pTrace(_cTr)._sDoc('fNewGoTo','Create a new Phrase object with GoTo orchestration, and add it to the supplied Voice of Phrase.');
        _doc+=('\n\n' +  fNewGoTo._doc);
    }






    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        fNewChoir:      fNewChoir,

        fNewScore:      fNewScore,

        fNewVoice:      fNewVoice,
        fNewPhrase:     fNewPhrase,

        fAddVoice:      fAddVoice,
        fAddPhrase:     fAddPhrase,


        fNewSequence:   fNewSequence,
        fNewSimultaneous:fNewSimultaneous,
        fNewIfThenElse: fNewIfThenElse,
        fNewWhile:      fNewWhile,
        fNewUntil:      fNewUntil,
        fNewLoop:       fNewLoop,
        fNewFore:       fNewFor,
        fNewIn:         fNewIn,
        fNewGoTo:       fNewGoTo,

        fAddSequence:   fAddSequence,
        fAddSimultaneous:fAddSimultaneous,
        fAddIfThenElse: fAddIfThenElse,
        fAddWhile:      fAddWhile,
        fAddUntil:      fAddUntil,
        fAddLoop:       fAddLoop,
        fAddFor:        fAddFor,
        fAddGoTo:       fAddGoTo
    };

    if(aModule) {}

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Composer')
    }

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Composer')
}



if( typeof define === 'function') {
    define([ 'm_ConstValues', 'm_Functionx', 'm_Instrument', 'm_Identifiable', 'm_Score', 'm_Error', 'm_Trace'],
        function (m_ConstValues, m_Functionx, m_Instrument, m_Identifiable, m_Score,m_Error, m_Trace) {

        return aM_Composer(m_ConstValues, m_Functionx, m_Instrument, m_Identifiable, m_Score,m_Error, m_Trace);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Composer.displayName]=aM_Composer(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_Score'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Trace']
        );
    }
    else {
        ChoirJS_Module_Composer = aM_Composer(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_Score,
            ChoirJS_Module_Error,
            ChoirJS_Module_Trace
        );
    }
}

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Composer')
}


