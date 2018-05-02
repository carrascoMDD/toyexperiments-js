/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ConstValues')
}



var aM_ConstValues = function( m_ConstValues_Defaults) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ConstValues')
    }


    var _displayName = 'm_ConstValues';

    var _doc=_displayName +' module. Values for constants defined in specific modules of choirJS.';


    var _cConstantValueOverrides = {
        m_Main: {
            _cDelayToStart:               10
        },
        m_Ctxt: {
            cCheckCtxt:              true
        },
        m_Clock: {
            _c_LogClockComputations: false,
            _c_UseAudioContext:      false
        },
        m_Log: {
            cLogAllowed:              true
        },
        m_Trace: {
            _c_AllowTrace:             false,
            _c_LogTraces:              false
        },
        m_Defense: {
            cAllowDefense:                false,
            _c_AllowRuntimeDefenseSwitch: false
        },
        m_Performer: {
            cMaxContinuousLoopIterations:   2000,
            cMaxContinuousLoopMilliseconds: 50, /* Math.floor( 1000 / 60) * 2 */
            cMaxConsecutiveWakeUps:         1
        },
        m_Yielder: {
            cMaxWaitsForWork:                10,
            cWaitForEarliestWakeUpMillis:    20,
            cWaitForWorkMillis:              20,
            cThrowErrorAfterMaxWaitsForWork: false
        },
        m_Conductor: {
            _cUseProcessor:                2 /* Math.floor( 1000 / 60 / 8) */ /* 300 */
        },
        m_DeltaBroker: {
            _cIntervalMilliseconds:      200 /* Math.floor( 1000 / 60) * 30 */
        },
        m_Watcher: {
            _cTr:                   true,
            _cMaxPendingChanges:    1000,
            _cIntervalMilliseconds: 500 /* Math.floor( 1000 / 60) * 30 */
        }
    };
    _doc+=('\n\n' +  JSON.stringify({_cConstantValueOverrides: _cConstantValueOverrides}, null, 4));




    var _cTraceOnly = [];



    if ( !(typeof _cTraceOnly === 'undefined')) {
        var aNumModuleNames = m_ConstValues_Defaults.cModuleNames.length;
        for (var anIndex = 0; anIndex < aNumModuleNames; anIndex++) {
            var aModuleName = m_ConstValues_Defaults.cModuleNames[anIndex];
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
            return m_ConstValues_Defaults.fConst(theModuleName, theConstantName, theDefaultValue);
        }

        if( !aValuesForModule.hasOwnProperty(theConstantName)) {
            return m_ConstValues_Defaults.fConst(theModuleName, theConstantName, theDefaultValue);
        }

        return aValuesForModule[ theConstantName];
    };





    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _cConstantValueOverrides: _cConstantValueOverrides,

        fConst:          fConst

    };
    if(aModule) {}  /* To avoid code quality tools from complaining about unused parameter */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_ConstValues')
    }

    return aModule;
};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ConstValues')
}



if( typeof define === 'function') {

    define( ['m_ConstValues_Defaults'], function ( m_ConstValues_Defaults) {
        return aM_ConstValues( m_ConstValues_Defaults);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ConstValues.displayName]=aM_ConstValues(
            gChoirJS_Modules['m_ConstValues_Defaults']
        );
    }
    else {
        ChoirJS_Module_ConstValues = aM_ConstValues(
            ChoirJS_Module_ConstValues_Defaults
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ConstValues')
}
