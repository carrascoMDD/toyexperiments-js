/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ConstValues_Tools_Defaults')
}



var aM_ConstValues_Tools_Defaults = function( ) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ConstValues_Tools_Defaults')
    }


    var _displayName = 'm_ConstValues_Tools_Defaults';

    var _doc=_displayName +' module. Values for constants defined in specific modules of choirJS.';


    var aPlaySource = '';
    if( !( typeof cChoirJS_EchoAudio_PlaySource === 'undefined')) {
        aPlaySource = cChoirJS_EchoAudio_PlaySource;
    }



    var _cConstantValues = {
        m_SerieNotes: {
            _cTr:            true,
            _cSerieNotesFactoryName: 'OctavesScale', /* 'SimpleScale'; */
            _cLowestOctave:                     3,
            _cHighestOctave:                    7
        },
        m_EchoAudio: {
            _cTr:                               true,
            _cPlaySchedule:                     'Timed', /* 'Timed' 'Immediate'; */
            _cUseDate:                          false,

            _cLogPlayAudio:                     false,
            _cLogPlayAudioEnvelope:             false,
            _cPlaySource:                       aPlaySource ? aPlaySource : 'Oscillator', /* 'Oscillator' */  /* 'Buffer' */
            _cMaxRealDurationMilliseconds:      5000,
            _cPlayDurationMilliseconds:         100,
            _cKeepBusyPreFeedMilliseconds:      500,
            _cMinLapseToRequestWakeUpMilliseconds: 20,

            _cSecondsAfterSoundEndsToDropAudioComponents: 1.0,

            _cBufferDefaultOctave:              5,
            _cCutBufferNotesAtDuration:         true,
            _cBufferDurationFactor:             1.01,

            _cOscillatorType:                   'sine',  /* square sawtooth triangle custom */
            _cOscillatorDurationFactor:         1.01,
            _cOscillatorDefaultOctave:          5,
            _cOscillatorWaveForm:      [ [ 0.1,0.5], [ 0.9, 0.4] ]

        },
        m_DeltaToWorker: {
            _cTr:            true
        },
        m_DeltaVisualizer: {
            _cTr:            true,
            _c_CanvasWidth:  512,
            _c_CanvasHeight: 384
        },
        m_FrameScheduler: {
            _cTr:            true,
            _c_UseAnimationContext: true,
            _c_NumFramesForAverages: 120
        },
        m_ResLoader: {
            _cTr:            true,
            _c_MaxServerRequests: 4
        },
        m_ResConverter: {
            _cTr:            true
        },
        m_ConverterGeneral: {
            _cTr:            true
        },
        m_MotionGeneral: {
            _cTr:            true,

            _c_CanvasWidth:     640 + 12 + 12,
            _c_CanvasHeight:    480 + 16 + 12,
            _c_PicsInsetLeft:   12,
            _c_PicsInsetTop:    16,
            _c_PicsInsetRight:  12,
            _c_PicsInsetBottom: 12,
            _cHeightMeasurementText: 'e',
            _cHeightMeasurementFactor:   2,
            _cButtonWidth:     12 ,
            _cButtonSep:        8,
            _cButtonHeight:     12,
            _cMinRefreshStatusBarMillis: 1000
        },
        m_MotionPics: {
            _cTr:            true
        },
        m_MotionFilter: {
            _cTr:            true,
            _c_ConversionKind: 'convolution.grayscale' /*  identical convolution.grayscale brightness threshold sharpen blur sobel custom */
        },
        m_ImageFilter_General: {
            _cTr:            true
        },
        m_ImageFilter_Identical: {
            _cTr:            true
        },
        m_ImageFilter_Convolution: {
            _cTr:            true
        },
        m_Convolutions: {
            _cTr:            true
        },
        m_ChangeVisualizer: {
            _cTr:            true,

            _c_SchedulePaints:      false,
            _c_UseAnimationContext: false,
            _c_FrameTimeoutIfNoAnimationContext: 40,

            _c_CanvasWidth:  768,
            _c_CanvasHeight: 576,
            _c_ChronographViewInsetLeft: 48,
            _c_ChronographViewInsetTop: 16,
            _c_ChronographViewInsetRight: 32,
            _c_ChronographViewInsetBottom: 8,
            _c_ArrowHeight:                 16
        },
        m_View: {
            _cTr:            true,
            _cHeightMeasurementText: 'e',
            _cHeightMeasurementFactor: 2
        },
        m_ViewComposite: {
            _cTr:            true
        },
        m_ViewError: {
            _cTr:            true
        },
        m_ViewChronograph: {
            _cTr:            true,
            _c_ComputeRenderFrequencyMilliseconds: 1000
        },
        m_ViewLoop: {
            _cTr:            true
        },
        m_ViewIteration: {
            _cTr:            true
        },
        m_ChangeChronograph: {
            _cTr:            true
        },
        m_ChangeGestures: {
            _cTr:            true
        },
        m_Changesture_Top: {
            _cTr:            true
        },
        m_Changesture_Chronoview: {
            _cTr:            true,
            _cMinMoveMillisToRender:  Math.floor(1000 / 30),
            _cMinMoveXToRender:  1,
            _cMinMoveYToRender:  1
        },
        m_Changesture_Scrollbar: {
            _cTr:            true,
            _cMinMoveMillisToScroll:  Math.floor(1000 / 30),
            _cMinMoveXToScroll:  5,
            _cMinMoveYToScroll:  5
        },
        m_ScoreTree: {
            _cTr:            true,
            _cTrBuildTree:   true,
            _c_CanvasWidth:  512,
            _c_CanvasHeight: 384
        },
        m_ChantTree: {
            _cTr:            true,
            _cTrBuildTree:   true,
            _c_CanvasWidth:  512,
            _c_CanvasHeight: 384
        },
        m_Model: {
            _cTr:                    true
        },
        m_ChangeNode_General: {
            _cTr:                    true
        },
        m_ChangeNode_Iteration: {
            _cTr:                    true
        },
        m_ChangeNode_Loop: {
            _cTr:                    true
        },
        m_ChangeNode_Error: {
            _cTr:                    true
        }
    };
    _doc+=('\n\n' +  JSON.stringify({_cConstantValues: _cConstantValues}, null, 4));


    var cModuleNames = [];
    for ( var aModuleName in _cConstantValues) {
        if ( _cConstantValues.hasOwnProperty( aModuleName)) {
            cModuleNames.push( aModuleName);
        }
    }



    var fConst = function( theModuleName, theConstantName, theDefaultValue) {
        if(!( theModuleName && theConstantName)) {
            return theDefaultValue;
        }

        var aValuesForModule = _cConstantValues[theModuleName];
        if (!aValuesForModule) {
            return theDefaultValue;
        }

        if( !aValuesForModule.hasOwnProperty(theConstantName)) {
            return theDefaultValue;
        }

        return aValuesForModule[ theConstantName];
    };





    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        cModuleNames:     cModuleNames,
        _cConstantValues: _cConstantValues,

        fConst: fConst
    };
    if(aModule) {}  /* To avoid code quality tools from complaining about unused parameter */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_ConstValues_Tools_Defaults')
    }

    return aModule;
};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ConstValues_Tools_Defaults')
}



if( typeof define === 'function') {

    define( function () {
        return aM_ConstValues_Tools_Defaults();
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ConstValues_Tools_Defaults.displayName]=aM_ConstValues_Tools_Defaults();
    }
    else {
        ChoirJS_Module_ConstValues_Tools_Defaults = aM_ConstValues_Tools_Defaults();
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ConstValues_Tools_Defaults')
}
