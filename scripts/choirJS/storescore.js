/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ScoreStore')
}


var aM_ScoreStore = function (m_ConstValues, m_Functionx, m_Error, m_Instrument, m_Trace, m_Log, m_Defense,
                              m_Identifiable, m_Score) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ScoreStore')
    }

    if(m_Log) {}


    var _privateMembers = [];
    var _publicMembers = [];


    var _displayName = 'm_ScoreStore';

    var _doc = _displayName +' module. Functions to store Score object networks into localStorage.';



    _doc+=('\n\nConfigurable module constants:');

    var _cTr = m_Trace.cTrace && false;
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';





    _doc+=('\n\nModule functions:');





    var fStoreScore = function( theKey, theScore) {

        var aTC =fStoreScore._Trace && m_Trace.fBegin( _displayName, fStoreScore);
        try {
            if (m_Defense.cAllowDefense) {
                if(aTC) { m_Trace.pTr( aTC, 'Defensive.');}
                if( !theKey) {
                    throw new m_Error.Error('ParameterNullError', {module: _displayName, function: fStoreScore, parameter: 'theKey'});
                }
                if( ! (typeof theKey === 'string')) {
                    throw new m_Error.Error('ParameterTypeError', {module: _displayName, function: fStoreScore, parameter: 'theKey', type: 'string', with: [theKey]});
                }
                if( !theScore) {
                    throw new m_Error.Error('ParameterNullError', {module: _displayName, function: fStoreScore, parameter: 'theScore'});
                }
                if( ! (typeof theScore === 'object')) {
                    throw new m_Error.Error('ParameterNotObjectError', {module: _displayName, function: fStoreScore, parameter: 'theScore' , with: [theScore]});
                }
                if( !( theScore._v_Type === 'Score')) {
                    throw new m_Error.Error('ParameterTypeError', {module: _displayName, function: fStoreScore, parameter: 'theScore', type: 'Score', with: [theScore]});
                }
            }

            var aSerializedScore = _fSerializeScore( theScore);
            if( !aSerializedScore) {
                return null;
            }

            try {
                localStorage.setItem( theKey, aSerializedScore);
            }
            catch( anException) {
                throw new m_Error.Error('LocalStorageSetItemError', {module: _displayName, function: fStoreScore, with: [ ( anException ? anException.toString() : 'unknown_exception'), theKey, theScore]});
            }

            return theKey;
        }
        finally {
            if(aTC) { m_Trace.pEnd( aTC);}
        }
    };
    if(m_Instrument.cDocFuncs) {
        fStoreScore._pTrace(_cTr)._sDoc('fStoreScore', 'Saves supplied Score on local storage with the supplied item key.');
        _publicMembers.push(fStoreScore);
        _doc+=('\n\n' + fStoreScore._doc);
        _doc+=('\n\nUninstrumented pseudocode\n:' +
            'localStorage.setItem( theKey, _fSerializeScore( theScore));\n' +
            'return _fJSONify( theScore, "Score");\n');
    }







    var _fSerializeScore = function( theScore) {

        var aTC =_fSerializeScore._Trace && m_Trace.fBegin( _displayName, _fSerializeScore);
        try {
            if (m_Defense.cAllowDefense) {
                if(aTC) { m_Trace.pTr( aTC, 'Defensive.');}
                if( !theScore) {
                    throw new m_Error.Error('ParameterNullError', {module: _displayName, function: _fSerializeScore, parameter: 'theScore'});
                }
                if( ! (typeof theScore === 'object')) {
                    throw new m_Error.Error('ParameterNotObjectError', {module: _displayName, function: _fSerializeScore, parameter: 'theScore' , with: [theScore]});
                }
                if( !( theScore._v_Type === 'Score')) {
                    throw new m_Error.Error('ParameterTypeError', {module: _displayName, function: _fSerializeScore, parameter: 'theScore', type: 'Score', with: [theScore]});
                }
            }

            var aSerializableScore = _fJSONifyScore( theScore);
            if( !( theScore._v_Type === 'Score')) {
                throw new m_Error.Error('SerializationError', {module: _displayName, function: _fSerializeScore, parameter: 'theScore', type: 'Score', with: [theScore]});
            }
            var aSerializedScore = null;
            try {
                aSerializedScore = JSON.stringify( aSerializableScore);
            }
            catch( anException) {
                throw new m_Error.Error('JSONStringifyError', {module: _displayName, function: _fSerializeScore, with: [ ( anException ? anException.toString() : 'unknown_exception'), theScore]});
            }
            return aSerializedScore;
        }
        finally {
            if(aTC) { m_Trace.pEnd( aTC);}
        }
    };
    if(m_Instrument.cDocFuncs) {
        _fSerializeScore._pTrace(_cTr)._sDoc('_fSerializeScore', 'Returns a representation of theScore as a string, suitable to be stored in localStorage, and later retrieved and assembled.');
        _publicMembers.push(_fSerializeScore);
        _doc+=('\n\n' + _fSerializeScore._doc);
        _doc+=('\n\nUninstrumented pseudocode\n:' +
            'return JSON.stringify( _fJSONifyScore( theScore));\n');
    }









    var _fJSONifyScore = function(theScore) {

        var aTC =_fJSONifyScore._Trace && m_Trace.fBegin( _displayName, _fJSONifyScore);
        try {
            if (m_Defense.cAllowDefense) {
                if(aTC) { m_Trace.pTr( aTC, 'Defensive.');}
                if( !theScore) {
                    throw new m_Error.Error('ParameterNullError', {module: _displayName, function: _fJSONifyScore, parameter: 'theScore'});
                }
                if( ! (typeof theScore === 'object')) {
                    throw new m_Error.Error('ParameterNotObjectError', {module: _displayName, function: _fJSONifyScore, parameter: 'theScore' , with: [theScore]});
                }
                if( !( theScore._v_Type === 'Score')) {
                    throw new m_Error.Error('ParameterTypeError', {module: _displayName, function: _fJSONifyScore, parameter: 'theScore', type: 'Score', with: [theScore]});
                }
            }


            var aSerializable = _fJSONify( theScore, 'Score');
            if( aSerializable) {}
            return aSerializable;
        }
        finally {
            if(aTC) { m_Trace.pEnd( aTC);}
        }
    };
    if(m_Instrument.cDocFuncs) {
        _fJSONifyScore._pTrace(_cTr)._sDoc('_fJSONifyScore','Create a new instance of Score copying recursively from the supplied object, ' +
            'but avoiding containment loops and substituting references to functions with their UUID,  or MD5 digest.');
        _doc+=('\n\n' +  _fJSONifyScore._doc);
        _doc+=('\n\nUninstrumented pseudocode\n:' +
            'return _fJSONify( theScore, "Score");\n');
    }








    var _fJSONify = function(theObject, theAllowedTypes) {

        if(!theObject) {
            return null;
        }


        /* Check JS type and choirJS score type of the object to clone. */
       if(!(typeof theObject === 'object')) {
            return null;
        }

        if(!theObject._v_Type) {
            return null;
        }

        if (m_Score.cTypeNames.indexOf(theObject._v_Type) < 0) {
            return null;
        }

        if (theAllowedTypes) {
            if(typeof theAllowedTypes === 'string') {
                if( !(theObject._v_Type === theAllowedTypes)) {
                    return null;
                }
            }
            else {
                if (theAllowedTypes.length) {
                    if (theAllowedTypes.indexOf(theObject._v_Type) < 0) {
                        return null;
                    }
                }
            }
        }



        /* Create new instance for the clone object. */

        var aClone = {};
        m_Score.pProperties_Into(theObject._v_Type, aClone);

        var aPropertyName;
        var aPropertyValue;
        /* Copy from the source to the target the properties for the type, known because they have been initialized with m_Score.pProperties_Into. */
        for ( aPropertyName in aClone) {
            if ( aClone.hasOwnProperty( aPropertyName)) {
                aPropertyValue = theObject[ aPropertyName];
                if ( (!(typeof aPropertyValue === 'undefined')) && (! (aPropertyValue === null))) {
                    aClone[ aPropertyName] = aPropertyValue;
                }
            }
        }

        /* Shall not stringify null properties, so remove them from the cloned objext. */
        for ( aPropertyName in aClone) {
            if ( aClone.hasOwnProperty( aPropertyName)) {
                aPropertyValue = theObject[ aPropertyName];
                if ( aPropertyValue === null) {
                    delete aClone[ aPropertyName];
                }
            }
        }


        /* Set same UID property value as original. */
        aClone._v_UID = theObject._v_UID;

        /* Remove the circular reference to parent. */
        aClone._v_Parent = null;




        /* Copy into clone the properties which are objects relevant for the type. */

        var anIndex = 0;



        if ( theObject._v_Type === 'Score') {

            aClone._v_Starts = [];

            if(theObject._v_Starts) {
                var aNumStarts = theObject._v_Starts.length;
                for (anIndex = 0 ; anIndex < aNumStarts; anIndex++) {
                    var aStart = theObject._v_Starts[anIndex];
                    if(aStart) {
                        if (aStart._v_UID) {
                            aClone._v_Starts.push(aStart._v_UID);
                        }
                    }
                }
            }
        }


        if ( ['Score', 'Section'].indexOf(theObject._v_Type) >= 0) {

            aClone._v_SectionsOrVoices = [];

            if(theObject._v_SectionsOrVoices) {
                var aNumSectionsOrVoices = theObject._v_SectionsOrVoices.length;
                for (anIndex = 0 ; anIndex < aNumSectionsOrVoices; anIndex++) {
                    var aSectionOrVoice = theObject._v_SectionsOrVoices[anIndex];
                    if(aSectionOrVoice) {
                        var aClonedSectionOrVoice = _fJSONify(aSectionOrVoice, [ 'Section', 'Voice']);
                        if (aClonedSectionOrVoice) {
                            aClonedSectionOrVoice._v_Parent = null;
                            aClone._v_SectionsOrVoices.push(aClonedSectionOrVoice);
                        }
                    }
                }
            }
        }



        if ( ['Voice', 'Phrase'].indexOf(theObject._v_Type) >= 0) {

            aClone._v_PhrasesOrNotes = [];

            if(theObject._v_PhrasesOrNotes) {
                var aNumPhrasesOrNotes = theObject._v_PhrasesOrNotes.length;
                for (anIndex = 0 ; anIndex < aNumPhrasesOrNotes; anIndex++) {
                    var aPhraseOrNote = theObject._v_PhrasesOrNotes[anIndex];
                    if(aPhraseOrNote) {
                        var aClonedPhraseOrNote = _fJSONify(aPhraseOrNote, [ 'Phrase', 'Note']);
                        if (aClonedPhraseOrNote) {
                            aClonedPhraseOrNote._v_Parent = null;
                            aClone._v_PhrasesOrNotes.push(aClonedPhraseOrNote);
                        }
                    }
                }
            }
        }



        if (theObject._v_Type === 'Note') {

            /* Substitute Note function handler with its UUID or MD5 digest over the source code of the function */
            var aNoteHandler = theObject._v_NoteHandler;
            if ( aNoteHandler) {
                if ( typeof aNoteHandler === 'function') {
                    aClone._v_NoteHandler = null;

                    if ( aNoteHandler._UUID) {
                        aClone._v_NoteHandler_UUID = aNoteHandler._UUID;
                    }
                    else {
                        var aDigest = null;
                        try {
                            aDigest = aNoteHandler._fMD5();
                        }
                        catch( anException) {}
                        if ( !aDigest) {
                            throw new m_Error.Error('NoDigestForNoteFunction', {module: _displayName, function: _fJSONify, with: [theObject, aNoteHandler]});
                        }
                        else {
                            aClone._v_NoteHandler_Digest = aDigest;
                        }
                    }
                }
            }
        }

        return aClone;

    };
    if(m_Instrument.cDocFuncs) {
        _fJSONify._sDoc('_fJSONify','Create a new instance of Score copying recursively from the supplied object, ' +
            'but avoiding containment loops and substituting references to functions with their UUID,  or MD5 digest.');
        _doc+=('\n\n' +  _fJSONify._doc);
    }













    var fLoadScore = function( theKey, theKeepOriginalUIDs) {

        var aTC =fLoadScore._Trace && m_Trace.fBegin( _displayName, fLoadScore);
        try {
            if (m_Defense.cAllowDefense) {
                if(aTC) { m_Trace.pTr( aTC, 'Defensive.');}
                if( !theKey) {
                    throw new m_Error.Error('ParameterNullError', {module: _displayName, function: fLoadScore, parameter: 'theKey'});
                }
                if( ! (typeof theKey === 'string')) {
                    throw new m_Error.Error('ParameterTypeError', {module: _displayName, function: fLoadScore, parameter: 'theKey', type: 'string', with: [theKey]});
                }
            }

            var aSerializedScore = null;
            try {
                aSerializedScore = localStorage.getItem( theKey);
            }
            catch( anException) {
                throw new m_Error.Error('LocalStorageGetItemError', {module: _displayName, function: fLoadScore, with: [ ( anException ? anException.toString() : 'unknown_exception'), theKey]});
            }

            var aScore = _fDeSerializeScore( aSerializedScore, theKeepOriginalUIDs);
            if( !aScore) {
                return null;
            }

            if ( !theKeepOriginalUIDs) {
                var aNewToInitialUIDsMap = _fReplaceWithNewUIDs( aScore);
                if ( aNewToInitialUIDsMap) {}
            }

            return aScore;
        }
        finally {
            if(aTC) { m_Trace.pEnd( aTC);}
        }
    };
    if(m_Instrument.cDocFuncs) {
        fLoadScore._pTrace(_cTr)._sDoc('fLoadScore', 'Loads Score from local storage with the supplied item key.');
        _publicMembers.push(fLoadScore);
        _doc+=('\n\n' + fLoadScore._doc);
        _doc+=('\n\nUninstrumented pseudocode\n:' +
            'return _fDeSerializeScore( localStorage.getItem( theKey), theKeepOriginalUIDs);\n');
    }







    var _fDeSerializeScore = function( theSerializedScore, theKeepOriginalUIDs) {

        var aTC =_fDeSerializeScore._Trace && m_Trace.fBegin( _displayName, _fDeSerializeScore);
        try {
            if (m_Defense.cAllowDefense) {
                if(aTC) { m_Trace.pTr( aTC, 'Defensive.');}
                if( !theSerializedScore) {
                    throw new m_Error.Error('ParameterNullError', {module: _displayName, function: _fDeSerializeScore, parameter: 'theSerializedScore'});
                }
                if( ! (typeof theSerializedScore === 'string')) {
                    throw new m_Error.Error('ParameterNotObjectError', {module: _displayName, function: _fDeSerializeScore, parameter: 'theSerializedScore' , with: [theSerializedScore]});
                }
            }

            var aJSONifiedScore = _fJSONifySerializedScore( theSerializedScore);
            if( !aJSONifiedScore) {
                return null;
            }

            var aScore = _fScoreFromJSONified( aJSONifiedScore, theKeepOriginalUIDs);
            if( !aScore) {
                return null;
            }

            return aScore;
        }
        finally {
            if(aTC) { m_Trace.pEnd( aTC);}
        }
    };
    if(m_Instrument.cDocFuncs) {
        _fDeSerializeScore._pTrace(_cTr)._sDoc('_fDeSerializeScore', 'Returns an instance of Score from a string representation retrieved from localStorage.');
        _publicMembers.push(_fDeSerializeScore);
        _doc+=('\n\n' + _fDeSerializeScore._doc);
        _doc+=('\n\nUninstrumented pseudocode\n:' +
            'return _fScoreFromJSONified( _fJSONifySerializedScore( theSerializedScore), theKeepOriginalUIDs);\n');
    }








    var _fJSONifySerializedScore = function( theSerializedScore) {

        var aTC =_fJSONifySerializedScore._Trace && m_Trace.fBegin( _displayName, _fJSONifySerializedScore);
        try {
            if (m_Defense.cAllowDefense) {
                if(aTC) { m_Trace.pTr( aTC, 'Defensive.');}
                if( !theSerializedScore) {
                    throw new m_Error.Error('ParameterNullError', {module: _displayName, function: _fJSONifySerializedScore, parameter: 'theSerializedScore'});
                }
                if( ! (typeof theSerializedScore === 'string')) {
                    throw new m_Error.Error('ParameterTypeError', {module: _displayName, function: _fJSONifySerializedScore, parameter: 'theSerializedScore', type: 'string',  with: [theSerializedScore]});
                }
            }
            var aJSONifiedScore = null;
            try {
                aJSONifiedScore = JSON.parse( theSerializedScore);
            }
            catch( anException) {
                throw new m_Error.Error('JSONparseERROR', {module: _displayName, function: _fJSONifySerializedScore, with: [ ( anException ? anException.toString() : 'unknown_exception'), theSerializedScore]});
            }
            return aJSONifiedScore;

        }
        finally {
            if(aTC) { m_Trace.pEnd( aTC);}
        }
    };
    if(m_Instrument.cDocFuncs) {
        _fJSONifySerializedScore._pTrace(_cTr)._sDoc('_fJSONifySerializedScore','Produce a JSON structure from the supplied string');
        _doc+=('\n\n' +  _fJSONifySerializedScore._doc);
        _doc+=('\n\nUninstrumented pseudocode\n:' +
            'returnJSON.parse( theSerializedScore);\n');
    }






    var _fScoreFromJSONified = function( theJSONifiedScore) {

        var aTC =_fScoreFromJSONified._Trace && m_Trace.fBegin( _displayName, _fScoreFromJSONified);
        try {
            if (m_Defense.cAllowDefense) {
                if(aTC) { m_Trace.pTr( aTC, 'Defensive.');}
                if( !theJSONifiedScore) {
                    throw new m_Error.Error('ParameterNullError', {module: _displayName, function: _fScoreFromJSONified, parameter: 'theJSONifiedScore'});
                }
                if( ! (typeof theJSONifiedScore === 'object')) {
                    throw new m_Error.Error('ParameterTypeError', {module: _displayName, function: _fScoreFromJSONified, parameter: 'theJSONifiedScore', type: 'object',  with: [theJSONifiedScore]});
                }
            }


            var aClonesByUID = {};

            var aScore = _fFromJSONified( theJSONifiedScore, 'Score', aClonesByUID);
            if( !aScore) {
                throw new m_Error.Error('ScoreFromJSONifiedError', {module: _displayName, function: _fScoreFromJSONified, with: [ ( anException ? anException.toString() : 'unknown_exception'), theJSONifiedScore]});
            }


            _pResolveReferencesByUID( aScore, aClonesByUID);

            return aScore;

        }
        finally {
            if(aTC) { m_Trace.pEnd( aTC);}
        }
    };
    if(m_Instrument.cDocFuncs) {
        _fJSONifySerializedScore._pTrace(_cTr)._sDoc('_fJSONifySerializedScore','Produce a JSON structure from the supplied string');
        _doc+=('\n\n' +  _fJSONifySerializedScore._doc);
        _doc+=('\n\nUninstrumented pseudocode\n:' +
            'var aClonesByUID = {};\n' +
            'var aScore _fFromJSONified( theJSONifiedScore, "Score", aClonesByUID);\n' +
            '_pResolveReferencesByUID( aScore, aClonesByUID);\n' +
            'return aScore;\n');
    }








    var _fFromJSONified = function(theObject, theAllowedTypes, theClonesByUID) {

        if(!theObject) {
            return null;
        }


        /* Check JS type and choirJS score type of the object to clone. */
        if(!(typeof theObject === 'object')) {
            return null;
        }

        if(!theObject._v_Type) {
            return null;
        }

        if (m_Score.cTypeNames.indexOf(theObject._v_Type) < 0) {
            return null;
        }

        if (theAllowedTypes) {
            if(typeof theAllowedTypes === 'string') {
                if( !(theObject._v_Type === theAllowedTypes)) {
                    return null;
                }
            }
            else {
                if (theAllowedTypes.length) {
                    if (theAllowedTypes.indexOf(theObject._v_Type) < 0) {
                        return null;
                    }
                }
            }
        }


        /* Create new instance for the clone object. */
        var aClone = m_Identifiable.fNewIdentifiable();
        m_Score.pProperties_Into(theObject._v_Type, aClone);

        /* Copy from the source to the target the properties for the type, known because they have been initialized with m_Score.pProperties_Into. */
        for ( var aPropertyName in aClone) {
            if ( aClone.hasOwnProperty( aPropertyName)) {
                var aPropertyValue = theObject[ aPropertyName];
                if ( (!(typeof aPropertyValue === 'undefined')) && (! (aPropertyValue === null))) {
                    aClone[ aPropertyName] = aPropertyValue;
                }
            }
        }

        if( theClonesByUID) {
            theClonesByUID[ aClone._v_UID] = aClone;
        }



        /* Copy into clone the properties relevant for the type. */

        var anIndex = 0;


        if ( ['Score', 'Section'].indexOf(theObject._v_Type) >= 0) {

            aClone._v_SectionsOrVoices = [];

            if(theObject._v_SectionsOrVoices) {
                var aNumSectionsOrVoices = theObject._v_SectionsOrVoices.length;
                for (anIndex = 0 ; anIndex < aNumSectionsOrVoices; anIndex++) {
                    var aSectionOrVoice = theObject._v_SectionsOrVoices[anIndex];
                    if(aSectionOrVoice) {
                        var aClonedSectionOrVoice = _fFromJSONified(aSectionOrVoice, [ 'Section', 'Voice'], theClonesByUID);
                        if (aClonedSectionOrVoice) {
                            aClonedSectionOrVoice._v_Parent = aClone;
                            aClone._v_SectionsOrVoices.push(aClonedSectionOrVoice);
                        }
                    }
                }
            }
        }



        if ( ['Voice', 'Phrase'].indexOf(theObject._v_Type) >= 0) {

            if(theObject._v_OrchestrationKind) {
                aClone._v_OrchestrationKind = theObject._v_OrchestrationKind;
            }

            aClone._v_PhrasesOrNotes = [];
            if(theObject._v_PhrasesOrNotes) {
                var aNumPhrasesOrNotes = theObject._v_PhrasesOrNotes.length;
                for (anIndex = 0 ; anIndex < aNumPhrasesOrNotes; anIndex++) {
                    var aPhraseOrNote = theObject._v_PhrasesOrNotes[anIndex];
                    if(aPhraseOrNote) {
                        var aClonedPhraseOrNote = _fFromJSONified( aPhraseOrNote, [ 'Phrase', 'Note'], theClonesByUID);
                        if (aClonedPhraseOrNote) {
                            aClonedPhraseOrNote._v_Parent = aClone;
                            aClone._v_PhrasesOrNotes.push( aClonedPhraseOrNote);
                        }
                    }
                }
            }
        }



        if (theObject._v_Type === 'Note') {
            var aFunction;
            /* Substitute Note function UUID or MD5 digest with a registered function, if such exists. */
            if( aClone._v_NoteHandler_UUID) {
                aFunction = m_Functionx.fFunctionWithUUID( aClone._v_NoteHandler_UUID);
                if( !aFunction) {
                    throw new m_Error.Error('NoFunctionWithUUID', {module: _displayName, function: _fFromJSONified, with: [aClone, aClone._v_NoteHandler_UUID]});
                }
                else {
                    aClone._v_NoteHandler = aFunction;
                }
            }
            else {
                if( aClone._v_NoteHandler_Digest) {
                    aFunction = m_Functionx.fFunctionWithDigest( aClone._v_NoteHandler_Digest);
                    if( !aFunction) {
                        throw new m_Error.Error('NoFunctionWithDigest', {module: _displayName, function: _fFromJSONified, with: [aClone, aClone._v_NoteHandler_UUID]});
                    }
                    else {
                        aClone._v_NoteHandler = aFunction;
                    }
                }
            }
        }

        return aClone;

    };
    if(m_Instrument.cDocFuncs) {
        _fFromJSONified._sDoc('_fFromJSONified',
            'Create a new instance of choirJS object, recursively restoring data from the supplied de-serialized copy.');
        _doc+=('\n\n' +  _fFromJSONified._doc);
    }







    var _pResolveReferencesByUID = function( theScore, theClonesByUID) {

        var aTC =_pResolveReferencesByUID._Trace && m_Trace.fBegin( _displayName, _pResolveReferencesByUID);
        try {
            if (m_Defense.cAllowDefense) {
                if(aTC) { m_Trace.pTr( aTC, 'Defensive.');}
                if( !theScore) {
                    throw new m_Error.Error('ParameterNullError', {module: _displayName, function: _pResolveReferencesByUID, parameter: 'theScore'});
                }
                if( ! (typeof theScore === 'object')) {
                    throw new m_Error.Error('ParameterTypeError', {module: _displayName, function: _pResolveReferencesByUID, parameter: 'theScore', type: 'object',  with: [theScore]});
                }
                if( !( theScore._v_Type === 'Score')) {
                    throw new m_Error.Error('ParameterTypeError', {module: _displayName, function: _pResolveReferencesByUID, parameter: 'theScore', type: 'Score', with: [theScore]});
                }
                if( !theClonesByUID) {
                    throw new m_Error.Error('ParameterNullError', {module: _displayName, function: _pResolveReferencesByUID, parameter: 'theClonesByUID'});
                }
                if( ! (typeof theClonesByUID === 'object')) {
                    throw new m_Error.Error('ParameterTypeError', {module: _displayName, function: _pResolveReferencesByUID, parameter: 'theClonesByUID', type: 'object',  with: [theClonesByUID]});
                }
            }

            _pResolveReferencesByUID_recursive( theScore, theClonesByUID);

        }
        finally {
            if(aTC) { m_Trace.pEnd( aTC);}
        }
    };
    if(m_Instrument.cDocFuncs) {
        _pResolveReferencesByUID._pTrace(_cTr)._sDoc('_pResolveReferencesByUID','Replace UIDs with object references in the supplied Score and contents acording to the supplied theClonesByUID and theOriginalToCloneUIDsMap.');
        _doc+=('\n\n' +  _pResolveReferencesByUID._doc);
        _doc+=('\n\nUninstrumented pseudocode\n:' +
            '_pResolveReferencesByUID_recursive( theScore, theClonesByUID);\n');
    }








    var _pResolveReferencesByUID_recursive = function(theObject, theClonesByUID) {

        if(!theObject) {
            return null;
        }

        /* Check JS type and choirJS score type of the object to clone. */
        if(!(typeof theObject === 'object')) {
            return null;
        }

        if(!theObject._v_Type) {
            return null;
        }

        if (m_Score.cTypeNames.indexOf(theObject._v_Type) < 0) {
            return null;
        }


        var anIndex = 0;


        if ( theObject._v_Type === 'Score') {

            if(theObject._v_Starts) {
                var someStarts = theObject._v_Starts.slice();

                theObject._v_Starts = [];

                var aNumStarts = someStarts.length;
                for (anIndex = 0 ; anIndex < aNumStarts; anIndex++) {
                    var aStartUID = someStarts[anIndex];
                    if( aStartUID) {

                       var aClone = theClonesByUID[ aStartUID];
                        if (!aClone) {
                            throw new m_Error.Error('NoCloneByUID', {module: _displayName, function: _pResolveReferencesByUID_recursive, property: '_v_Starts', with: [theObject, aStartUID]});
                        }
                        else {
                            theObject._v_Starts.push( aClone);
                        }
                    }
                }
            }
        }



        if ( ['Score', 'Section'].indexOf(theObject._v_Type) >= 0) {

            if(theObject._v_SectionsOrVoices) {
                var aNumSectionsOrVoices = theObject._v_SectionsOrVoices.length;
                for (anIndex = 0 ; anIndex < aNumSectionsOrVoices; anIndex++) {
                    var aSectionOrVoice = theObject._v_SectionsOrVoices[anIndex];
                    if(aSectionOrVoice) {
                        _pResolveReferencesByUID_recursive(aSectionOrVoice, [ 'Section', 'Voice'], theClonesByUID);
                    }
                }
            }
        }


        if ( ['Voice', 'Phrase'].indexOf(theObject._v_Type) >= 0) {

            if(theObject._v_PhrasesOrNotes) {
                var aNumPhrasesOrNotes = theObject._v_PhrasesOrNotes.length;
                for (anIndex = 0 ; anIndex < aNumPhrasesOrNotes; anIndex++) {
                    var aPhraseOrNote = theObject._v_PhrasesOrNotes[anIndex];
                    if(aPhraseOrNote) {
                        _pResolveReferencesByUID_recursive(aPhraseOrNote, [ 'Phrase', 'Note'], theClonesByUID);
                    }
                }
            }
        }



        if (theObject._v_Type === 'Note') {
        }

        return null;

    };
    if(m_Instrument.cDocFuncs) {
        _pResolveReferencesByUID_recursive._sDoc('_pResolveReferencesByUID_recursive',
            'Substitute string UID values or reference properties with references to elements found by their UID.');
        _doc+=('\n\n' +  _pResolveReferencesByUID_recursive._doc);
    }








    var _fReplaceWithNewUIDs = function( theScore) {

        var aTC =_fReplaceWithNewUIDs._Trace && m_Trace.fBegin( _displayName, _fReplaceWithNewUIDs);
        try {
            if (m_Defense.cAllowDefense) {
                if(aTC) { m_Trace.pTr( aTC, 'Defensive.');}
                if( !theScore) {
                    throw new m_Error.Error('ParameterNullError', {module: _displayName, function: _pReplaceUIDs, parameter: 'theJSONifiedScore'});
                }
                if( ! (typeof theScore === 'object')) {
                    throw new m_Error.Error('ParameterTypeError', {module: _displayName, function: _pReplaceUIDs, parameter: 'theJSONifiedScore', type: 'object',  with: [theScore]});
                }
                if( !( theScore._v_Type === 'Score')) {
                    throw new m_Error.Error('ParameterTypeError', {module: _displayName, function: _pReplaceUIDs, parameter: 'theScore', type: 'Score', with: [theScore]});
                }
             }

            var aNewToInitialUIDsMap = {};
            _pReplaceWithNewUIDs( theScore, aNewToInitialUIDsMap);

            return aNewToInitialUIDsMap;

        }
        finally {
            if(aTC) { m_Trace.pEnd( aTC);}
        }
    };
    if(m_Instrument.cDocFuncs) {
        _fReplaceWithNewUIDs._pTrace(_cTr)._sDoc('_fReplaceWithNewUIDs','Replace UIDs in the supplied Score and contents, returning a map of the initial UIDs to the final UIDs.');
        _doc+=('\n\n' +  _fReplaceWithNewUIDs._doc);
        _doc+=('\n\nUninstrumented pseudocode\n:' +
            'var aNewToInitialUIDsMap = {};\n' +
            '_pReplaceWithNewUIDs( theScore, aNewToInitialUIDsMap);' +
            'return aNewToInitialUIDsMap;\n');
    }






    var _pReplaceWithNewUIDs = function(theObject, theNewToInitialUIDsMap) {

        if(!theObject) {
            return null;
        }

        /* Check JS type and choirJS score type of the object to clone. */
        if(!(typeof theObject === 'object')) {
            return null;
        }

        if(!theObject._v_Type) {
            return null;
        }

        if (m_Score.cTypeNames.indexOf(theObject._v_Type) < 0) {
            return null;
        }

        var anInitialUID = theObject._v_UID;
        if ( !anInitialUID) {
            throw new m_Error.Error('NoUID', {module: _displayName, function: _pReplaceWithNewUIDs, with: [theObject]});
        }

        var aNewUID = m_Identifiable.fNewUID();
        if ( !aNewUID) {
            throw new m_Error.Error('NoNewUID', {module: _displayName, function: _pReplaceWithNewUIDs, with: [theObject]});
        }

        theObject._v_UID = aNewUID;

        theNewToInitialUIDsMap[ aNewUID] = anInitialUID;



        var anIndex = 0;

        if ( ['Score', 'Section'].indexOf(theObject._v_Type) >= 0) {

            if(theObject._v_SectionsOrVoices) {
                var aNumSectionsOrVoices = theObject._v_SectionsOrVoices.length;
                for (anIndex = 0 ; anIndex < aNumSectionsOrVoices; anIndex++) {
                    var aSectionOrVoice = theObject._v_SectionsOrVoices[anIndex];
                    if(aSectionOrVoice) {
                        _pReplaceWithNewUIDs( aSectionOrVoice, theNewToInitialUIDsMap);
                    }
                }
            }
        }


        if ( ['Voice', 'Phrase'].indexOf(theObject._v_Type) >= 0) {

            if(theObject._v_PhrasesOrNotes) {
                var aNumPhrasesOrNotes = theObject._v_PhrasesOrNotes.length;
                for (anIndex = 0 ; anIndex < aNumPhrasesOrNotes; anIndex++) {
                    var aPhraseOrNote = theObject._v_PhrasesOrNotes[anIndex];
                    if(aPhraseOrNote) {
                        _pReplaceWithNewUIDs( aPhraseOrNote, theNewToInitialUIDsMap);
                    }
                }
            }
        }



        if (theObject._v_Type === 'Note') {
        }

        return null;

    };
    if(m_Instrument.cDocFuncs) {
        _pReplaceWithNewUIDs._sDoc('_pReplaceWithNewUIDs',
            'Replace UIDs in the supplied Score and contents, recording in a map the substitutions of initial UIDs with final UIDs');
        _doc+=('\n\n' +  _pReplaceWithNewUIDs._doc);
    }






    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        fStoreScore: fStoreScore,
        fLoadScore:  fLoadScore
    };


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_ScoreStore')
    }


    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ScoreStore')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_Functionx', 'm_Error', 'm_Instrument', 'm_Trace', 'm_Log', 'm_Defense',
        'm_Identifiable', 'm_Score'],
        function (m_ConstValues, m_Functionx, m_Error, m_Instrument, m_Trace, m_Log, m_Defense,
                  m_Identifiable, m_Score) {

            return aM_ScoreStore(m_ConstValues, m_Functionx, m_Error, m_Instrument, m_Trace, m_Log, m_Defense,
                m_Identifiable, m_Score);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ScoreStore.displayName]=aM_ScoreStore(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_Score']
        );
    }
    else {
        ChoirJS_Module_ScoreStore= aM_ScoreStore(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_Score
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ScoreStore')
}

