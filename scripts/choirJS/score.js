/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Score')
}


var aM_Score = function (m_Functionx, m_Instrument, m_Identifiable) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Score')
    }

    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */

    var _displayName='m_Score';

    var _doc=_displayName +' module.';




    var cTypeNames = [
        'Choir',
        'Score',
        'Section',
        'Voice',
        'Phrase',
        'Note'
    ];
    _doc+=('\n\n' +  JSON.stringify({cTypeNames: cTypeNames}, null, 4));




    var cScoreContentTypeNames = [
        'Section',
        'Voice',
        'Phrase',
        'Note'
    ];
    _doc+=('\n\n' +  JSON.stringify({cScoreContentTypeNames: cScoreContentTypeNames}, null, 4));




    var cScoredTypeNames = [
        'Score'
    ].concat(cScoreContentTypeNames);
    _doc+=('\n\n' +  JSON.stringify({cScoredTypeNames: cScoredTypeNames}, null, 4));





    var cChantableTypeNames = [
        'Voice',
        'Phrase',
        'Note'
    ];
    _doc+=('\n\n' +  JSON.stringify({cChantableTypeNames: cChantableTypeNames}, null, 4));



    var cOrchestrableTypeNames = [
        'Voice',
        'Phrase'
    ];
    _doc+=('\n\n' +  JSON.stringify({cOrchestrableTypeNames: cOrchestrableTypeNames}, null, 4));





    var cChoreographiableTypeNames = [
        'Voice',
        'Phrase',
        'Note'
    ];
    _doc+=('\n\n' +  JSON.stringify({cChoreographiableTypeNames: cChoreographiableTypeNames}, null, 4));



    var cWithSectionsOrVoicesTypeNames = [
        'Score',
        'Section'
    ];
    _doc+=('\n\n' +  JSON.stringify({cWithSectionsOrVoicesTypeNames: cWithSectionsOrVoicesTypeNames}, null, 4));




    var cWithPhrasesOrNotesTypeNames = [
        'Voice',
        'Phrase'
    ];
    _doc+=('\n\n' +  JSON.stringify({cWithPhrasesOrNotesTypeNames: cWithPhrasesOrNotesTypeNames}, null, 4));




    var cOrchestrationKinds_Algorithmic = [
        'Sequence',
        'Simultaneous',
        'Wait',
        'IfThenElse',
        'While',
        'Until',
        'Loop',
        'For',
        'In',
        'GoTo'
    ];
    _doc+=('\n\n' +  JSON.stringify({cOrchestrationKinds_Algorithmic: cOrchestrationKinds_Algorithmic}, null, 4));




    var cOrchestrationKinds_Asynchronous = [
        'LoadPage',
        'UI',
        'Timeout',
        'Interval',
        'Ajax',
        'Worker'
    ];
    _doc+=('\n\n' +  JSON.stringify({cOrchestrationKinds_Asynchronous: cOrchestrationKinds_Asynchronous}, null, 4));




    var cOrchestrationKinds = cOrchestrationKinds_Algorithmic.concat(cOrchestrationKinds_Asynchronous);
    _doc+=('\n\n' +  JSON.stringify({cOrchestrationKinds: cOrchestrationKinds}, null, 4));



    _doc+='\n\n\\* ********************************************************\n' +
        'Initialization functions for objects with properties for choirJS assemblies.';


    var pChoir_Properties_Into = function(theObject) {

        if( !((typeof theObject === 'undefined') || theObject === null)) {
            theObject._v_Type =           'Choir';
            theObject._v_Name =           '';

            theObject._v_Performance =    null;
            theObject._v_History =        [];
        }
    };
    if(m_Instrument.cDocFuncs) {
        pChoir_Properties_Into._sDoc('pChoir_Properties_Into','Structure of fields for object representing a Choir.');
        _doc+=('\n\n' +  pChoir_Properties_Into._doc);
    }







    var pScore_Properties_Into = function(theObject) {

        if( !((typeof theObject === 'undefined') || theObject === null)) {
            theObject._v_Type =              'Score';
            theObject._v_Name =         '';

            theObject._v_SectionsOrVoices =  [];
            theObject._v_Starts           =  [];
        }
    };
    if(m_Instrument.cDocFuncs) {
        pScore_Properties_Into._sDoc('pScore_Properties_Into', 'Structure of fields for object representing a Score.');
        _doc+=('\n\n' + pScore_Properties_Into._doc);
    }






    var pSection_Properties_Into = function(theObject) {

        if( !((typeof theObject === 'undefined') || theObject === null)) {
            theObject._v_Type =                  'Section';
            theObject._v_Name =           '';
            theObject._v_Parent = null;

            theObject._v_SectionsOrVoices =      [];
        }
    };
    if(m_Instrument.cDocFuncs) {
        pSection_Properties_Into._sDoc('pSection_Properties_Into', 'Structure of fields for object representing a Section.');
        _doc+=('\n\n' + pSection_Properties_Into._doc);
    }







    var pVoice_Properties_Into = function(theObject) {

        if( !((typeof theObject === 'undefined') || theObject === null)) {
            theObject._v_Type =           'Voice';
            theObject._v_Name =      '';
            theObject._v_Parent =         null;

            theObject._v_OrchestrationKind = '';
            theObject._v_PhrasesOrNotes = [];
        }
    };
    if(m_Instrument.cDocFuncs) {
        pVoice_Properties_Into._sDoc('pVoice_Properties_Into', 'Structure of fields for object representing a Voice.');
        _doc+=('\n\n' + pSection_Properties_Into._doc);
    }






    var pPhrase_Properties_Into = function(theObject) {

        if( !((typeof theObject === 'undefined') || theObject === null)) {
            theObject._v_Type =           'Phrase';
            theObject._v_Name =     '';
            theObject._v_Parent =         null;

            theObject._v_OrchestrationKind = '';
            theObject._v_PhrasesOrNotes = [];
        }
    };
    if(m_Instrument.cDocFuncs) {
        pPhrase_Properties_Into._sDoc('pPhrase_Properties_Into', 'Structure of fields for object representing a Phrase.');
        _doc+=('\n\n' + pSection_Properties_Into._doc);
    }







    var pNote_Properties_Into = function(theObject) {

        if( !((typeof theObject === 'undefined') || theObject === null)) {
            theObject._v_Type =             'Note';
            theObject._v_Name =             '';
            theObject._v_Parent =           null;

            theObject._v_NoteHandler =      null;
            theObject._v_NoteHandler_UUID = null;
            theObject._v_NoteHandler_Digest = null;
        }
    };
    if(m_Instrument.cDocFuncs) {
        pNote_Properties_Into._sDoc('pNote_Properties_Into', 'Structure of fields for object representing a Note.');
        _doc+=('\n\n' + pSection_Properties_Into._doc);
    }







    var pProperties_Into = function(theType, theObject) {
        if(theType) {
            if( cTypeNames.indexOf(theType) >= 0) {

                switch (theType) {
                    case 'Choir':   pChoir_Properties_Into(theObject);
                        break;

                    case 'Score':   pScore_Properties_Into(theObject);
                        break;

                    case 'Section': pSection_Properties_Into(theObject);
                        break;

                    case 'Voice':   pVoice_Properties_Into(theObject);
                        break;

                    case 'Phrase':  pPhrase_Properties_Into(theObject);
                        break;

                    case 'Note':    pNote_Properties_Into(theObject);
                        break;

                    default: break;
                }
            }
        }
        return null;
    };
    if(m_Instrument.cDocFuncs) {
        pProperties_Into._sDoc('pProperties_Into', 'Initialize the supplied object with properties according to the supplied type.');
        _doc+=('\n\n' + pProperties_Into._doc);
    }










    _doc+='\n\n\\* ********************************************************\n' +
        'Utility functions to clone choirJS objects.';





    var fClone_Choir = function(theObject) {

        if( (!theObject) || !( typeof theObject === 'object') || !(theObject._v_Type === 'Choir')) {
            return null;
        }

        var aClone = m_Identifiable.fNewIdentifiable();
        pChoir_Properties_Into( aClone);

        aClone._v_Name = theObject._v_Name;
        aClone._v_Performance = theObject._v_Performance;

        return aClone;

    };
    if(m_Instrument.cDocFuncs) {
        fClone_Choir._sDoc('fClone_Choir','Create a new instance of Choir copying recursively from the supplied Choir.');
        _doc+=('\n\n' +  fClone_Choir._doc);
    }




    var fClone_Score = function(theObject) {

        if( (!theObject) || !( typeof theObject === 'object') || !(theObject._v_Type === 'Score')) {
            return null;
        }

        var aClone = m_Identifiable.fNewIdentifiable();
        pScore_Properties_Into( aClone);

        aClone._v_Name = theObject._v_Name;

        _pClone_SectionsOrVoices( theObject, aClone);

        return aClone;

    };
    if(m_Instrument.cDocFuncs) {
        fClone_Score._sDoc('fClone_Score','Create a new instance of Score copying recursively from the supplied Score.');
        _doc+=('\n\n' +  fClone_Score._doc);
    }







    var fClone_Section = function(theObject) {

        if( (!theObject) || !( typeof theObject === 'object') || !(theObject._v_Type === 'Section')) {
            return null;
        }

        var aClone = m_Identifiable.fNewIdentifiable();
        pSection_Properties_Into( aClone);

        aClone._v_Name = theObject._v_Name;

        _pClone_SectionsOrVoices( theObject, aClone);

        return aClone;

    };
    if(m_Instrument.cDocFuncs) {
        fClone_Section._sDoc('fClone_Section','Create a new instance of Section copying recursively from the supplied Section.');
        _doc+=('\n\n' +  fClone_Section._doc);
    }








    var _pClone_SectionsOrVoices = function( theObject, theClone) {

        if( ( !theObject) || !( typeof theObject === 'object') || !( [ 'Score', 'Section'].indexOf( theClone._v_Type) >= 0)) {
            return null;
        }
        if( ( !theClone) || !( typeof theClone === 'object') || !( [ 'Score', 'Section'].indexOf( theClone._v_Type) >= 0)) {
            return null;
        }

        if( theObject._v_SectionsOrVoices) {
            var aNumSectionsOrVoices = theObject._v_SectionsOrVoices.length;
            for ( var anIndex = 0 ; anIndex < aNumSectionsOrVoices; anIndex++) {
                var aSubObject = theObject._v_SectionsOrVoices[anIndex];
                var aClonedSubObject = null;

                if( aSubObject) {
                    aClonedSubObject = null;
                    if( aSubObject._v_Type === 'Section') {
                        aClonedSubObject = fClone_Section( aSubObject);
                    }
                    else {
                        if( aSubObject._v_Type === 'Voice') {
                            aClonedSubObject = fClone_Voice( aSubObject);
                        }
                    }
                    if (aClonedSubObject) {
                        aClonedSubObject._v_Parent = theClone;
                        theClone._v_SectionsOrVoices.push(aClonedSubObject);
                    }
                }
            }
        }

        return aClone;

    };
    if(m_Instrument.cDocFuncs) {
        fClone_Section._sDoc('_pClone_SectionsOrVoices','Populate the _v_SectionsOrVoices property of a cloned Score or Section copying recursively from the supplied original.');
        _doc+=('\n\n' +  fClone_Section._doc);
    }







    var fClone_Voice = function( theObject) {

        if( (!theObject) || !( typeof theObject === 'object') || !(theObject._v_Type === 'Voice')) {
            return null;
        }

        var aClone = m_Identifiable.fNewIdentifiable();
        pVoice_Properties_Into( aClone);

        aClone._v_Name = theObject._v_Name;
        aClone._v_OrchestrationKind = theObject._v_OrchestrationKind;

        _pClone_PhrasesOrNotes( theObject, aClone);

        return aClone;

    };
    if(m_Instrument.cDocFuncs) {
        fClone_Voice._sDoc('fClone_Voice','Create a new instance of Voice copying recursively from the supplied Voice.');
        _doc+=('\n\n' +  fClone_Voice._doc);
    }






    var fClone_Phrase = function( theObject) {

        if( (!theObject) || !( typeof theObject === 'object') || !(theObject._v_Type === 'Phrase')) {
            return null;
        }

        var aClone = m_Identifiable.fNewIdentifiable();
        pPhrase_Properties_Into( aClone);

        aClone._v_Name = theObject._v_Name;
        aClone._v_OrchestrationKind = theObject._v_OrchestrationKind;

        _pClone_PhrasesOrNotes( theObject, aClone);

        return aClone;

    };
    if(m_Instrument.cDocFuncs) {
        fClone_Phrase._sDoc('fClone_Phrase','Create a new instance of Phrase copying recursively from the supplied Phrase.');
        _doc+=('\n\n' +  fClone_Phrase._doc);
    }








    var _pClone_PhrasesOrNotes = function( theObject, theClone) {

        if( ( !theObject) || !( typeof theObject === 'object') || !( [ 'Voice', 'Phrase'].indexOf( theObject._v_Type) >= 0)) {
            return null;
        }
        if( ( !theClone) || !( typeof theClone === 'object') || !( [ 'Voice', 'Phrase'].indexOf( theClone._v_Type) >= 0)) {
            return null;
        }

        if( theObject._v_PhrasesOrNotes) {
            var aNumSectionsOrVoices = theObject._v_PhrasesOrNotes.length;
            for ( var anIndex = 0 ; anIndex < aNumSectionsOrVoices; anIndex++) {
                var aSubObject = theObject._v_PhrasesOrNotes[anIndex];
                var aClonedSubObject = null;

                if( aSubObject) {
                    aClonedSubObject = null;
                    if( aSubObject._v_Type === 'Phrase') {
                        aClonedSubObject = fClone_Phrase( aSubObject);
                    }
                    else {
                        if( aSubObject._v_Type === 'Note') {
                            aClonedSubObject = fClone_Note( aSubObject);
                        }
                    }
                    if (aClonedSubObject) {
                        aClonedSubObject._v_Parent = theClone;
                        theClone._v_PhrasesOrNotes.push(aClonedSubObject);
                    }
                }
            }
        }

        return null;

    };
    if(m_Instrument.cDocFuncs) {
        fClone_Section._sDoc('_pClone_PhrasesOrNotes','Populate the _v_PhrasesOrNotes property of a cloned instance of Voice or Phrase copying recursively from the supplied original.');
        _doc+=('\n\n' +  fClone_Section._doc);
    }





    var fClone_Note = function(theObject) {

        if( (!theObject) || !( typeof theObject === 'object') || !(theObject._v_Type === 'Note')) {
            return null;
        }

        var aClone = m_Identifiable.fNewIdentifiable();
        pNote_Properties_Into( aClone);

        aClone._v_Name = theObject._v_Name;
        aClone._v_NoteHandler = theObject._v_NoteHandler;
        aClone._v_NoteHandler_UUID = theObject._v_NoteHandler_UUID;
        aClone._v_NoteHandler_Digest = theObject._v_NoteHandler_Digest;

        return aClone;

    };
    if(m_Instrument.cDocFuncs) {
        fClone_Note._sDoc('fClone_Note','Create a new instance of Note copying recursively from the supplied Note.');
        _doc+=('\n\n' +  fClone_Note._doc);
    }







    var fClone = function(theObject) { /* ACV OJO no impact change included unused parameter theAllowedTypes */

        if( (!theObject) || !( typeof theObject === 'object') || !( cTypeNames.indexOf( theObject._v_Type) >=0)) {
            return null;
        }

         switch ( theObject._v_Type) {
            case 'Choir':   return fClone_Choir(theObject);

            case 'Score':   return fClone_Score(theObject);

            case 'Section': return fClone_Section(theObject);

            case 'Voice':   return fClone_Voice(theObject);

            case 'Phrase':  return fClone_Phrase(theObject);

            case 'Note':    return fClone_Note(theObject);

            default:
        }

        return null;

    };
    if(m_Instrument.cDocFuncs) {
        fClone._sDoc('fClone','Create a new instance of choirJS object copying recursively from the supplied object.');
        _doc+=('\n\n' +  fClone._doc);
    }











    _doc+='\n\n\\* ********************************************************\n' +
        'Utility functions for traversal of objects with properties for choirJS assemblies.';


    var fCommonParent = function() {

        var aNumObjects = arguments.length;
        if (!aNumObjects) {
            return null;
        }

        var aFirstObject=arguments[0];

        if (aNumObjects === 1) {
            return aFirstObject;
        }

        var anObject;
        var anIndex;

        var anAllSame=true;
        for(anIndex= 1; anIndex < aNumObjects; anIndex++) {
            anObject=arguments[ anIndex];
            if (anObject && !(anObject === aFirstObject)) {
                anAllSame=false;
                break;
            }
        }
        if (anAllSame) {
            return aFirstObject;
        }

        var someCommonParents=fAllParents(aFirstObject);
        if (!someCommonParents.length) {
            return null;
        }
        for(anIndex= 1; anIndex < aNumObjects; anIndex++) {
            anObject=arguments[ anIndex];
            if (anObject) {
                someCommonParents=_fCommonParents(anObject, someCommonParents);
                if (!someCommonParents.length) {
                    return null;
                }
            }
        }
        if (!someCommonParents.length) {
            return null;
        }

        return someCommonParents[0];

    };
    if(m_Instrument.cDocFuncs) {
        fCommonParent._sDoc('fCommonParent', 'Traverse supplied arguments to find the deepest common parents.');
        _doc+=('\n\n' + fCommonParent._doc);
    }







    var fAllParents = function(theObject) {
        if(((typeof theObject === 'undefined') || theObject === null)) {
            return [];
        }
        var someParents=[theObject];

        _fAllParents_Into(theObject, someParents);

        return someParents;

    };
    if(m_Instrument.cDocFuncs) {
        fAllParents._sDoc('fAllParents', 'Traverse supplied argument collecting all parents.');
        _doc+=('\n\n' + fAllParents._doc);
    }






    var _fAllParents_Into = function(theObject, theParents) {
        if( !(((typeof theObject === 'undefined') || theObject === null) || ((typeof theParents === 'undefined') || theParents === null))) {

            var aParent = theObject._v_Parent;

            if( aParent) {
                if ( theParents.indexOf(aParent) < 0) {

                    theParents.push(aParent);

                     _fAllParents_Into(aParent, theParents);
                }
            }
        }

    };
    if(m_Instrument.cDocFuncs) {
        _fAllParents_Into._sDoc('_fAllParents_Into', 'Recurse supplied argument collecting all parents.');
        _doc+=('\n\n' + _fAllParents_Into._doc);
    }







    var _fCommonParents = function(theObject, theParents) {
        if( !(((typeof theObject === 'undefined') || theObject === null) || ((typeof theParents === 'undefined') || theParents === null))) {

            var aParent = theObject._v_Parent;

            if( aParent) {
                var aParentIndex =  theParents.indexOf(aParent);
                if ( aParentIndex >= 0) {
                    return theParents.slice(aParentIndex);
                }
                else  {
                    return _fCommonParents(aParent, theParents);
                }
            }
        }

        return null;

    };
    if(m_Instrument.cDocFuncs) {
        _fCommonParents._sDoc('_fCommonParents', 'Recurse supplied argument until a parent is one of the supplied parents.');
        _doc+=('\n\n' + _fCommonParents._doc);
    }







    var fScore = function(theObject) {

        if(((typeof theObject === 'undefined') || theObject === null)) {
            return null;
        }

        if (theObject._v_Type === 'Score') {
            return theObject;
        }

        if ( !( cScoreContentTypeNames.indexOf(theObject._v_Type) >=0)) {
            return null;
        }

        var aParent = theObject._v_Parent;
        if ( !aParent) {
            return null;
        }

        return fScore(aParent);

    };
    if(m_Instrument.cDocFuncs) {
        fScore._sDoc('fScore', 'Traverse supplied argument of a choirJS type through parent link until returning a Score, or null.');
        _doc+=('\n\n' + fScore._doc);
    }







    var fInnerChantables = function(theObject) {
        if(((typeof theObject === 'undefined') || theObject === null)) {
            return [];
        }
        else {
            if (theObject._v_Type === 'Voice') {
                return theObject._v_PhrasesOrNotes;
            }
            else {
                if (theObject._v_Type === 'Phrase') {
                    return theObject._v_PhrasesOrNotes;
                }
            }
        }

        return null;

    };
    if(m_Instrument.cDocFuncs) {
        fInnerChantables._sDoc('fInnerChantables', 'Traverse supplied composite chantable (voice, phrase) through containment of chantables.');
        _doc+=('\n\n' + fInnerChantables._doc);
    }









    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        cTypeNames:                cTypeNames,
        cScoreContentTypeNames:    cScoreContentTypeNames,
        cScoredTypeNames:          cScoredTypeNames,
        cChantableTypeNames:       cChantableTypeNames,
        cOrchestrableTypeNames:    cOrchestrableTypeNames,
        cChoreographiableTypeNames:    cChoreographiableTypeNames,
        cWithSectionsOrVoicesTypeNames: cWithSectionsOrVoicesTypeNames,
        cWithPhrasesOrNotesTypeNames: cWithPhrasesOrNotesTypeNames,

        cOrchestrationKinds_Algorithmic:  cOrchestrationKinds_Algorithmic,
        cOrchestrationKinds_Asynchronous: cOrchestrationKinds_Asynchronous,
        cOrchestrationKinds:       cOrchestrationKinds,

        pProperties_Into:          pProperties_Into,
        pChoir_Properties_Into:    pChoir_Properties_Into,
        pScore_Properties_Into:    pScore_Properties_Into,
        pSection_Properties_Into:  pSection_Properties_Into,
        pVoice_Properties_Into:    pVoice_Properties_Into,
        pPhrase_Properties_Into:   pPhrase_Properties_Into,
        pNote_Properties_Into:     pNote_Properties_Into,

        fClone:                    fClone,
        fClone_Choir:              fClone_Choir,
        fClone_Section:            fClone_Section,
        fClone_Voice:              fClone_Voice,
        fClone_Phrase:             fClone_Phrase,
        fClone_Note:               fClone_Note,


        fScore:                    fScore,
        fCommonParent:             fCommonParent,
        fInnerChantables:          fInnerChantables
    };
    if(aModule) {} /* Added to avoid code quality tools complaining about redundant variable */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Score')
    }

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Score')
}



if( typeof define === 'function') {

    define(['m_Functionx', 'm_Instrument', 'm_Identifiable'],
        function (m_Functionx, m_Instrument, m_Identifiable) {

            return aM_Score(m_Functionx, m_Instrument, m_Identifiable);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Score.displayName]=aM_Score(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Identifiable']
        );
    }
    else {
        ChoirJS_Module_Score = aM_Score(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Identifiable
        );
    }
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Score')
}
