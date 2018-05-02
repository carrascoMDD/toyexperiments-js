/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ConstValues_Defaults')
}



var aM_ConstValues_Defaults = function() {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ConstValues_Defaults')
    }


    var _displayName = 'm_ConstValues_Defaults';

    var _doc=_displayName +' module. Values for constants defined in specific modules of choirJS.';




    var _cConstantValues = {
        m_Main: {
            _cDelayToStart:               10
        },
        m_Functionx: {
            _c_ForceReuseFunctions:              false,
            _c_AllowFunctionReplacementByUUID:   true, /* Usually (!_c_ForceReuseFunctions) && true */
            _c_LogFunctionUUIDCollisions:        true,
            _c_AllowFunctionReplacementByDigest: true, /* Usually (!_c_ForceReuseFunctions) && true */
            _c_LogFunctionDigestCollisions:      true
        },
        m_Defense: {
            cAllowDefense:                true,
            _c_AllowRuntimeDefenseSwitch: true
        },
        m_Log: {
            cLogAllowed:              true
        },
        m_Trace: {
            _cTr:                      true,
            _c_Timestamp:              true,
            _c_LogTraces:              true,
            /* New style trace control constants */
            _c_AllowTrace:              true,
            _c_AllowRuntimeTraceSwitch: true,
            /* Old style trace control constants */
            cTrace:                     true,
            cTraceBegin:                true,
            cTraceSteps:                true,
            cTraceEnd:                  true,
            cKeepTraces:                true
        },
        m_Ctxt: {
            _cTr:                      true,
            cCheckCtxt:                false
        },
        m_Watcher: {
            _cTr:                   true,
            _cMaxPendingChanges:    1000,
            _cIntervalMilliseconds: 100
        },
        m_Clock: {
            _cTr:                    true,
            _c_LogClockComputations: false,
            _c_UseAudioContext:      false
        },
        m_WakeUp: {
            _cTr:                    true
        },
        m_ChantManager: {
            _cTr:                    true
        },
        m_ChantDeltas: {
            _cTr:                    true,
            cTimestampDeltas:        true
        },
        m_Conductor: {
            _cTr:                        true,
            _cUseProcessor:               0, /* 300 */
            _cRandomizeUseProcessor:      0  /*  7.0 / 8.0; */
        },
        m_Yielder: {
            _cTr:                            true,
            cWaitForEarliestWakeUpMillis:    20,
            cWaitForWorkMillis:              20,
            cMaxWaitsForWork:                2,
            cThrowErrorAfterMaxWaitsForWork: false
        },
        m_Performer: {
            _cTr:                          true,
            cAllowYieldToOthers:            true,
            cMaxContinuousLoopIterations:   3000,
            cMaxContinuousLoopMilliseconds: 800,
            cMaxConsecutiveWakeUps:         1
        },
        m_DeltaBroker: {
            _cTr:                   true,
            _cMaxPendingDeltas:     1000,
            _cIntervalMilliseconds: 100
        },
        m_LoopChanges: {
            _cTr:                   true
        },
        m_Orchductor_Algorithmic: {
            _cTr:                    true
        },
        m_Composer: {
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

        cModuleNames: cModuleNames,

        _cConstantValues: _cConstantValues,

        fConst:          fConst

    };
    if(aModule) {}  /* To avoid code quality tools from complaining about unused parameter */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_ConstValues_Defaults')
    }

    return aModule;
};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ConstValues_Defaults')
}



if( typeof define === 'function') {

    define( function ( ) {
        return aM_ConstValues_Defaults( );
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ConstValues_Defaults.displayName]=aM_ConstValues_Defaults( );
    }
    else {
        ChoirJS_Module_ConstValues_Defaults = aM_ConstValues_Defaults();
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ConstValues_Defaults')
}
