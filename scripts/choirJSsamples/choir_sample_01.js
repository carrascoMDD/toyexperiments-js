/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Choir_Score_Sample_02')
}

var aM_ScoreSample = function(m_Functionx, m_Composer, m_Choreographer,  m_Log, m_Identifiable, m_LoadPlugs) {

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Choir_Score_Sample_02')
    }


    var _displayName ='m_Choir_Score_Sample_02';

    var _doc = _displayName + ' module.';


    if(m_LoadPlugs) {}
    _doc+='\nm_LoadPlugs is required here to force loading of plugins for this example. May be also forced to load at some other point of the example, like main.js';


    var cLogNoteMessages = false;


    var fScoreSample_01 = function() {

        var aScore=m_Composer.fNewScore();

        var anEntryVoice=m_Composer.fAddVoice(aScore, (function(theChant) {
            if(theChant) {}
            if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase at START DONE');
            
        })._sUUID('9e0df8c9-a18b-445b-9eee-34fad4437d3d'));
        if(anEntryVoice) {} /* Added to avoid code quality tools to complain about unused variable */



        var aVoice=m_Composer.fAddVoice(aScore, (function (theChant) {
            if(theChant) {}
            if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aFirstPhrase DONE')
        })._sUUID('e2e02b71-29cb-43e1-af08-35e891375daa'));



        var aSecondPhrase=m_Composer.fAddPhrase(aVoice, 'Sequence',
            (function (theChant) {
                if(theChant) {}
                if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aSecondPhrase sequence - theFirst - DONE with chant ' + theChant._v_UID);
            })._sUUID('e032e977-4283-465c-9181-5d73ba2ee5d8'),
            (function(theChant) {
                if(theChant) {}
                if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aSecondPhrase sequence - theSecond - DONE with chant ' + theChant._v_UID);
            })._sUUID('8c011fbc-23db-4408-a8cc-d8e1e6e2dced')
        );



        var aThirdPhrase=m_Composer.fAddPhrase(aVoice, 'Sequence',
            m_Composer.fNewPhrase( 'Sequence',
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aThirdPhrase sequence - sub-sequence First - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('50a365a6-bebc-4fa1-97cb-7b3fcbbe0bcf'),
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aThirdPhrase sequence - sub-sequence First - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('4f0005af-0b03-4502-851a-5e94e75bf537')
            ),
            m_Composer.fNewPhrase( 'Sequence',
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aThirdPhrase sequence - sub-sequence Second - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('3535ce7e-01ec-4872-bfde-128ba1908c79'),
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aThirdPhrase sequence - sub-sequence Second - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('a8696ba3-bcce-4b1d-bc13-94f24e37ca0b')
            ),
            m_Composer.fNewPhrase( 'Sequence',
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aThirdPhrase sequence  - sub-sequence Third - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('884740fe-04da-4f23-9290-883f2c956f77'),
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aThirdPhrase sequence  - sub-sequence Third - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('56b978f0-24ea-46df-93f7-4c409fddf1db')
            )
        );



        var aFourthPhrase=m_Composer.fAddPhrase(aVoice, 'Sequence', /* 'IfThenElse',*/
            m_Composer.fNewPhrase( 'Sequence',
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aFourthPhrase sequence - sub-sequence First - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('d872e1d0-9d56-42cf-a512-b541e103a493'),
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aFourthPhrase sequence - sub-sequence First - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('dc23c6c0-6099-4336-b1cc-3538a1952092')
            ),
            m_Composer.fNewPhrase( 'Sequence',
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aFourthPhrase sequence - sub-sequence Second - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('24b19a5e-8dac-4f14-839f-3562322b24df'),
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aFourthPhrase sequence - sub-sequence Second - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('4ddcc222-3128-41fa-964d-9066607224a5')
            ),
            m_Composer.fNewPhrase( 'Sequence',
                (function (theChant) {
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aFourthPhrase sequence  - sub-sequence Third - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('f02da415-7fb9-403b-aaac-d02219dab0c8'),
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aFourthPhrase sequence  - sub-sequence Third - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('02c6e1fc-d9d8-41fd-b079-1ae3a876ffd4')
            )
        );



        var aFifthPhrase=m_Composer.fAddPhrase(aVoice, 'Sequence', /* 'While', */
            m_Composer.fNewPhrase( 'Sequence',
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aFifthPhrase sequence - sub-sequence First - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('a16e4cb8-d6c6-40de-841f-9d7c9e5a69ea'),
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aFifthPhrase sequence - sub-sequence First - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('57eefd43-c2e1-451d-b3de-ecbd9397b317')
            ),
            m_Composer.fNewPhrase( 'Sequence',
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aFifthPhrase sequence - sub-sequence Second - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('76943275-e32d-43a3-8e16-8733464c4e90'),
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aFifthPhrase sequence - sub-sequence Second - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('80e75fef-3ab0-4121-8eea-7c86f496cc4c')
            )
        );



        var aSixthPhrase=m_Composer.fAddPhrase(aVoice, 'Sequence', /* 'Until', */
            m_Composer.fNewPhrase( 'Sequence',
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aSixthPhrase sequence - sub-sequence First - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('fe3716c8-8957-463e-8fc9-35b11ec6739d'),
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aSixthPhrase sequence - sub-sequence First - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('ccf2e11e-406e-48b0-9ed9-be7cc1ebb993')
            ),
            m_Composer.fNewPhrase( 'Sequence',
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aSixthPhrase sequence - sub-sequence Second - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('bca3f533-15c7-4204-8eb8-0dbb2f5a826b'),
                (function (theChant) {
                    if(theChant) {}
                    if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Phrase aSixthPhrase sequence - sub-sequence Second - theFirst - DONE with chant ' + theChant._v_UID);
                })._sUUID('97b2e081-989f-4daa-b94d-835e750591fa')
            )
        );


        var otherVoice=m_Composer.fAddVoice(aScore, 'Sequence',
            (function (theChant) {
                if(theChant) {}
                if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Voice otherVoice sequence theFirst DONE with chant ' + theChant._v_UID);
            })._sUUID('ccb3dbae-b938-4282-b04b-84e303f5d3d2'),
            (function (theChant) {
                if(theChant) {}
                if( cLogNoteMessages) m_Log.pLog('###### ' + this._v_NoteHandler._UUID + ' Voice otherVoice sequence theSecond DONE with chant ' + theChant._v_UID);
            })._sUUID('a7d8a3e8-12d0-489a-ae85-c5f9723e96bd')
        );



        var anotherVoice=m_Composer.fAddVoice(aScore, 'Sequence',
            aSecondPhrase,
            aThirdPhrase,
            aFourthPhrase,
            aFifthPhrase,
            aSixthPhrase
        );


        var aLongVoice=m_Composer.fAddVoice(aScore, 'Sequence',
            aSecondPhrase,
            aThirdPhrase,
            aFourthPhrase,
            aFifthPhrase,
            aSixthPhrase,
            aSecondPhrase,
            aThirdPhrase,
            aFourthPhrase,
            aFifthPhrase,
            aSixthPhrase,
            aSecondPhrase,
            aThirdPhrase,
            aFourthPhrase,
            aFifthPhrase,
            aSixthPhrase,
            aSecondPhrase,
            aThirdPhrase,
            aFourthPhrase,
            aFifthPhrase,
            aSixthPhrase,
            aSecondPhrase,
            aThirdPhrase,
            aFourthPhrase,
            aFifthPhrase,
            aSixthPhrase,
            aSecondPhrase,
            aThirdPhrase,
            aFourthPhrase,
            aFifthPhrase,
            aSixthPhrase,
            aSecondPhrase,
            aThirdPhrase,
            aFourthPhrase,
            aFifthPhrase,
            aSixthPhrase,
            aSecondPhrase,
            aThirdPhrase,
            aFourthPhrase,
            aFifthPhrase,
            aSixthPhrase

        );



        m_Choreographer.fAddStarts(aScore, anEntryVoice, aVoice, otherVoice, anotherVoice, aLongVoice);

        return aScore;
    };
    fScoreSample_01._sDoc('fScoreSample_01', 'Create an instance of Score to be used in tests.')._sUUID('c97f5aa0-3c54-48fe-8c1c-23bc0c105afd');
    _doc+=('\n\n' +  fScoreSample_01._doc);



    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        fScoreSample_01: fScoreSample_01,
        ScoreSample_01:  fScoreSample_01()
    };
    if(aModule) {}

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Choir_Score_Sample_02')
    }

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Choir_Score_Sample_02')
}


if( typeof define === 'function') {
    define(['m_Functionx', 'm_Composer', 'm_Choreographer', 'm_Log', 'm_Identifiable', 'm_LoadPlugs'],
        function(m_Functionx, m_Composer, m_Choreographer,  m_Log, m_Identifiable, m_LoadPlugs) {

        return aM_ScoreSample(m_Functionx, m_Composer, m_Choreographer, m_Log, m_Identifiable, m_LoadPlugs);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ScoreSample.displayName]=aM_ScoreSample(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Composer'],
            gChoirJS_Modules['m_Choreographer'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_LoadPlugs']
        );
    }
    else {
        ChoirJS_Module_Samples_Score_Sample_01 = aM_ScoreSample(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Composer,
            ChoirJS_Module_Choreographer,
            ChoirJS_Module_Log,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_LoadPlugs
        );
    }
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Choir_Score_Sample_02')
}
