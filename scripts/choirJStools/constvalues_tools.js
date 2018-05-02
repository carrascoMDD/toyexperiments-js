/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ConstValues_Tools')
}



var aM_ConstValues_Tools = function( m_ConstValues_Tools_Defaults) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ConstValues_Tools')
    }


    var _displayName = 'm_ConstValues_Tools';

    var _doc=_displayName +' module. Values for constants defined in specific modules of choirJS.';


    var aPlaySource = '';
    if( !( typeof cChoirJS_EchoAudio_PlaySource === 'undefined')) {
        aPlaySource = cChoirJS_EchoAudio_PlaySource;
    }


    var _cConstantValueOverrides = {

        m_EchoAudio: {
            _cUseDate:                             false,

            _cLogPlayAudio:                        false,
            _cPlaySource:                          aPlaySource ? aPlaySource : 'Oscillator', /* 'Oscillator' */  /* 'Buffer' */
            _cPlayDurationMilliseconds:            100,
            _cKeepBusyPreFeedMilliseconds:         500,
            _cMinLapseToRequestWakeUpMilliseconds: 20
        },
        m_ChangeVisualizer: {
            _cTr:            true,

            _c_SchedulePaints:      true,
            _c_UseAnimationContext: true,
            _c_FrameTimeoutIfNoAnimationContext: 20,

            _c_CanvasWidth:  756,
            _c_CanvasHeight: 576

        },
        m_ViewChronograph: {
            _cTr:            true,
            _c_ComputeRenderFrequencyMilliseconds: 1000
        },
        m_MotionFilter: {
            _cTr:            true,
            _c_ConversionKind: 'convolution.grayscale' /*  identical convolution.grayscale brightness threshold sharpen blur sobel custom */
        }
    };
    _doc+=('\n\n' +  JSON.stringify({_cConstantValueOverrides: _cConstantValueOverrides}, null, 4));





    var _cTraceOnly = [];



    if ( !(typeof _cTraceOnly === 'undefined')) {
        var aNumModuleNames = m_ConstValues_Tools_Defaults.cModuleNames.length;
        for (var anIndex = 0; anIndex < aNumModuleNames; anIndex++) {
            var aModuleName = m_ConstValues_Tools_Defaults.cModuleNames[anIndex];
            var aDoTrace = _cTraceOnly.indexOf( aModuleName) >= 0;
            if( _cConstantValueOverrides[aModuleName]) {
                _cConstantValueOverrides[aModuleName]['_cTr'] = aDoTrace;
            }
            else {
                _cConstantValueOverrides[aModuleName] = { _cTr: aDoTrace};
            }
        }
    }






    var fConst = function( theModuleName, theConstantName, theDefaultValue) {
        if(!( theModuleName && theConstantName)) {
            return theDefaultValue;
        }

        var aValuesForModule = _cConstantValueOverrides[theModuleName];
        if (!aValuesForModule) {
            return m_ConstValues_Tools_Defaults.fConst(theModuleName, theConstantName, theDefaultValue);
        }

        if( !aValuesForModule.hasOwnProperty(theConstantName)) {
            return m_ConstValues_Tools_Defaults.fConst(theModuleName, theConstantName, theDefaultValue);
        }

        return aValuesForModule[ theConstantName];
    };




    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _cConstantValueOverrides: _cConstantValueOverrides,

        fConst: fConst
    };
    if(aModule) {}  /* To avoid code quality tools from complaining about unused parameter */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_ConstValues_Tools')
    }

    return aModule;
};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ConstValues_Tools')
}



if( typeof define === 'function') {

    define(['m_ConstValues_Tools_Defaults'], function (m_ConstValues_Tools_Defaults) {
        return aM_ConstValues_Tools(m_ConstValues_Tools_Defaults);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ConstValues_Tools.displayName]=aM_ConstValues_Tools(
            gChoirJS_Modules['m_ConstValues_Tools_Defaults']
        );
    }
    else {
        ChoirJS_Module_ConstValues_Tools = aM_ConstValues_Tools(
            ChoirJS_Module_ConstValues_Tools_Defaults
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ConstValues_Tools')
}
