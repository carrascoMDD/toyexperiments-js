/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Trace')
}


var aM_Trace = function(m_ConstValues, m_Functionx, m_Instrument, m_Log, m_Error) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Trace')
    }


    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */

    var _displayName = 'm_Trace';

    var _doc=_displayName +' module. Functions to trace the execution of choirJS framework functions (i.e., not choirJS reuser programmer functions) .';




    _doc+=('\n\nConfigurable module constants with values copied from constvalues.js or constvalues_tools.js.');


    var _c_Timestamp= m_ConstValues.fConst( _displayName, '_c_Timestamp', true);
    _doc+=('\n\n' +  JSON.stringify({_c_Timestamp: _c_Timestamp}, null, 4));

    var _c_LogTraces= m_ConstValues.fConst( _displayName, '_c_LogTraces', m_Log.cLogAllowed && true);
    _doc+=('\n\n' +  JSON.stringify({_c_LogTraces: _c_LogTraces}, null, 4));



    _doc+=('\n\nNew style trace control constants.');

    var _c_AllowTrace = m_ConstValues.fConst( _displayName, '_c_AllowTrace', true);
    _doc+=('\n\n' +  JSON.stringify({_c_AllowTrace: _c_AllowTrace}, null, 4));

    var _c_AllowRuntimeTraceSwitch = m_ConstValues.fConst( _displayName, '_c_AllowRuntimeTraceSwitch', true);
    _doc+=('\n\n' +  JSON.stringify({_c_AllowRuntimeTraceSwitch: _c_AllowRuntimeTraceSwitch}, null, 4));




    _doc+=('\n\nOld style trace control constants.');

    var cTrace= m_ConstValues.fConst( _displayName, '_c_AllowTrace', true);
    _doc+=('\n\n' +  JSON.stringify({cTrace: cTrace}, null, 4));

    var cTraceBegin= m_ConstValues.fConst( _displayName, '_c_AllowTrace', cTrace && true);
    _doc+=('\n\n' +  JSON.stringify({cTraceBegin: cTraceBegin}, null, 4));

    var cTraceSteps= m_ConstValues.fConst( _displayName, '_c_AllowTrace', cTrace && true);
    _doc+=('\n\n' +  JSON.stringify({cTraceSteps: cTraceSteps}, null, 4));

    var cTraceEnd=  m_ConstValues.fConst( _displayName, '_c_AllowTrace', cTrace && true);
    _doc+=('\n\n' +  JSON.stringify({cTraceEnd: cTraceEnd}, null, 4));

    var cKeepTraces= m_ConstValues.fConst( _displayName, '_c_AllowTrace', cTrace && true);
    _doc+=('\n\n' +  JSON.stringify({cTraceEnd: cTraceEnd}, null, 4));





    _doc+=('\n\nModule variables:');


    var g_TracesHistory = [];

    var _g_CurrentTrace = null;


    var _g_RootTraces = [];




    _doc+='\n\nFunctions added to Function.prototype.';




    if(typeof Function.prototype._pTrace === 'undefined') {
        var _pTrace = function(theTraceOrConcerns) {

            if ( typeof theTraceOrConcerns === 'undefined') {
                this._Trace = true;
                return this;
            }

            if ( typeof theTraceOrConcerns === 'string') {
                this._Trace = true;
                return this;
            }

            if ( (typeof theTraceOrConcerns === 'object') && theTraceOrConcerns.length) {
                this._Trace = theTraceOrConcerns;
                return this;
            }
            this._Trace = (theTraceOrConcerns && true) || false;

            return this;
        };
        _pTrace._sDoc('_pTrace', 'Set a property in the function indicating whether the function shall be traced.');
        _doc+=('\n\n' + _pTrace._doc);

        Function.prototype._pTrace = _pTrace;
    }







    if(typeof Function.prototype._sTrace === 'undefined') {
        var _sTrace = function(theTraceOrConcerns) {

            this._pTrace(theTraceOrConcerns);

            if ( !_c_AllowTrace) {
                return this;
            }

            var aWrappedFunction = this;


            if ( ( !_c_AllowRuntimeTraceSwitch) && ( !this._Trace)) {
                return aWrappedFunction;
            }

            var aWrapperFunction;
            if ( !_c_AllowRuntimeTraceSwitch) {
                aWrapperFunction = (function() {
                    var aHereWrappedFunction = aWrappedFunction;
                    return function() {
                        var aTC =_fBeginFunction( aHereWrappedFunction._moduleName, aHereWrappedFunction);
                        try {
                            return aHereWrappedFunction.apply( this, Array.prototype.slice.call(arguments));
                        }
                        finally {
                            _pEndFunction( aTC);
                        }
                    }
                })();
            }
            else {
                aWrapperFunction = (function() {
                    var aHereWrappedFunction = aWrappedFunction;
                    return function() {

                        var aTC =aHereWrappedFunction._Trace && _fBeginFunction( aHereWrappedFunction);
                        try {
                            return aHereWrappedFunction.apply( this, Array.prototype.slice.call(arguments));
                        }
                        finally {
                            if(aTC) { _pEndFunction( aTC);}
                        }
                    }
                })();
            }


            aWrappedFunction._IsTraced = true;
            aWrappedFunction._TraceFunction = aWrapperFunction;


            aWrapperFunction.displayName = 'DefenseWapper_on' + ( aWrappedFunction.hasOwnProperty('displayName') ? aWrappedFunction.displayName : '?');
            aWrapperFunction.innerDisplayName = ( aWrappedFunction.hasOwnProperty('innerDisplayName') ? aWrappedFunction.innerDisplayName : '?');
            aWrapperFunction._moduleName = (aWrappedFunction.hasOwnProperty('_moduleName') ? aWrappedFunction._moduleName : '');

            aWrapperFunction._IsWrapper = true;
            aWrapperFunction._IsWrapperTrace = true;
            aWrapperFunction._TracedFunction = aWrappedFunction;
            aWrapperFunction._WrappedFunction = aWrappedFunction;
            aWrapperFunction.displayName = 'WrapperTrace_on ' + (aWrappedFunction.hasOwnProperty('displayName') ? aWrappedFunction.displayName : '?');
            aWrapperFunction._moduleName = (aWrappedFunction.hasOwnProperty('_moduleName') ? aWrappedFunction._moduleName : '');
            aWrapperFunction._pTrace(theTraceOrConcerns);

            return aWrapperFunction;

        };
        _sTrace._sDoc('_sTrace', 'Wrap the function to trace its execution.');
        _doc+=('\n\n' + _sTrace._doc);

        Function.prototype._sTrace = _sTrace;
    }








    _doc+='\n\nModule Functions.';






    _doc+='\n\nModule Functions for new style trace.';



    var _fNewVoidTraceFrame = function() {
          return {
              _v_Type:           'Frame',
              _v_Level:          0,
              _v_Header:         '',
              _v_Status:         '',
              _v_ParentFrame:    null,
              _v_Function:       null,
              _v_ModuleName:     '',
              _v_FunctionName:   '',
              _v_BeginTime:      null,
              _v_EndTime:        null,
              _v_Observations:   [],
              _v_Children: []
           }
    };
    if(m_Instrument.cDocFuncs) {
        _fNewVoidTraceFrame._sDoc('_fNewVoidTraceFrame', 'Creates and object to hold the information about tracing the execution of a function call.');
        _doc+=('\n\n' + _fNewVoidTraceFrame._doc);
    }




    var _fNewVoidTraceStep = function() {
        return {
            _v_Type:           'Step',
            _v_Level:          0,
            _v_Header:         '',
            _v_ParentFrame:    null,
            _v_Time:           null,
            _v_Observations:   []
        }
    };
    if(m_Instrument.cDocFuncs) {
        _fNewVoidTraceStep._sDoc('_fNewVoidTraceStep', 'Creates and object to hold the information about one step during tracing the execution of a function call.');
        _doc+=('\n\n' + _fNewVoidTraceStep._doc);
    }




    var _fBeginFunction = function ( theFunction) {
        if( _c_AllowTrace) {

            var aTraceFrame = _fNewVoidTraceFrame();

            aTraceFrame._v_Status = 'Running';

            var aMessage;
            if( !theFunction) {
                aTraceFrame._v_Observations.push('NoFunction');
                aMessage = 'NoFunction';
            }
            else {
                 if( !( typeof theFunction === 'function')) {
                    aTraceFrame._v_Observations.push('Not_a_Function');
                    aMessage = 'Not_a_Function';
                }
                else {
                     aTraceFrame._v_Function = theFunction;

                     if (theFunction.hasOwnProperty('_moduleName')) {
                        aTraceFrame._v_ModuleName = theFunction._moduleName;
                        aMessage = 'M:' + theFunction._moduleName;
                    }
                    else {
                        aTraceFrame._v_Observations.push('NoModuleName');
                        aTraceFrame._v_ModuleName = '?';
                        aMessage = 'M:?';
                    }

                     if (theFunction.hasOwnProperty('innerDisplayName')) {
                         aTraceFrame._v_FunctionName = theFunction.innerDisplayName;
                         aMessage += '  F:' + theFunction.innerDisplayName;
                     }
                     else {
                         if (theFunction.hasOwnProperty('displayName')) {
                             aTraceFrame._v_FunctionName = theFunction.displayName;
                             aMessage += '  F:' + theFunction.displayName;
                         }
                         else {
                             aTraceFrame._v_Observations.push('NoFunctionName');
                             aTraceFrame._v_FunctionName = '?';
                             aMessage += '  F:?';
                         }
                     }

                }
            }
            aTraceFrame._v_Header = aMessage;


            if ( !_g_CurrentTrace) {
                _g_CurrentTrace =  aTraceFrame;
                _g_RootTraces.push( aTraceFrame);
            }
            else {
                aTraceFrame._v_Level = _g_CurrentTrace._v_Level + 1;
                aTraceFrame._v_ParentFrame = _g_CurrentTrace;
                _g_CurrentTrace._v_Children.push( aTraceFrame);
                _g_CurrentTrace = aTraceFrame;
                aTraceFrame._v_ParentFrame._v_Status = 'ChildRunning';
            }


            var aFullMessage = '';
            if( _c_Timestamp) {
                var aTimestamp = new Date().getTime().toString();
                aTraceFrame._v_BeginTime = aTimestamp;
                aFullMessage += aTimestamp.substr( aTimestamp.length - 6);
            }
            aFullMessage += '[' + aTraceFrame._v_Level + ']';
            aFullMessage += ' BEGIN ' + aMessage;
            if( cKeepTraces) {
                g_TracesHistory.push( aFullMessage);
            }


            if( _c_LogTraces && m_Log.cLogAllowed) {
                m_Log.pLog( aFullMessage);
            }
            return aTraceFrame;
        }
        return null;
    };
    if(m_Instrument.cDocFuncs) {
        _fBeginFunction._sDoc('_fBeginFunction', 'Informs the trace machinery of beginning of execution of a function, and returns a handle to be passed to the tracer when the function execution ends.');
        _doc+=('\n\n' + _fBeginFunction._doc);
    }








    var _pEndFunction = function ( theTraceFrame) {
        if( _c_AllowTrace) {

            if( !theTraceFrame) {
                throw new m_Error.Error('NoTraceFrameError', {module: _displayName, function: _pEndFunction});
            }
            if( !( typeof theTraceFrame === 'object')) {
                throw new m_Error.Error('TraceFrameNotObjectError', {module: _displayName, function: _pEndFunction, with: [theTraceFrame]});
            }
            if( !( theTraceFrame._v_Type === 'Frame')) {
                throw new m_Error.Error('TraceFrameTypeError', {module: _displayName, function: _pEndFunction, type: 'Frame', with: [theTraceFrame]});
            }
            if( !( theTraceFrame._v_Status === 'Running')) {
                throw new m_Error.Error('TraceFrameNotRunningError', {module: _displayName, function: _pEndFunction, with: [theTraceFrame]});
            }
            if ( !_g_CurrentTrace) {
                throw new m_Error.Error('NoCurrentTrace', {module: _displayName, function: _pEndFunction, with: [theTraceFrame]});
            }
            if ( !( theTraceFrame ===_g_CurrentTrace)) {
                throw new m_Error.Error('EndingTraceIsNotCurrentTrace', {module: _displayName, function: _pEndFunction, with: [ 'ending', theTraceFrame, 'current', _g_CurrentTrace]});
            }


            var aTimestamp='';

            var aFullMessage = '';
            if( _c_Timestamp) {
                aTimestamp = new Date().getTime().toString();
                theTraceFrame._v_EndTime = aTimestamp;
                aFullMessage += aTimestamp.substr( aTimestamp.length - 6);
            }
            aFullMessage += '[' + theTraceFrame._v_Level + ']';
            aFullMessage += ' END   ' + ( theTraceFrame._v_Header ? theTraceFrame._v_Header : '?');


            if( cKeepTraces) {
                g_TracesHistory.push( aFullMessage);
            }

            if( theTraceFrame._v_ParentFrame) {
               _g_CurrentTrace = theTraceFrame._v_ParentFrame;
                theTraceFrame._v_ParentFrame._v_Status = 'Running';
            }
            else {
                _g_CurrentTrace = null;
            }

            theTraceFrame._v_Status = 'Completed';


            var aContinueParentMessage = '';
            if (_g_CurrentTrace) {
                if( _c_Timestamp) {
                    aContinueParentMessage += aTimestamp.substr( aTimestamp.length - 6);
                }
                aContinueParentMessage += '[' + _g_CurrentTrace._v_Level + ']';
                aContinueParentMessage += ' CONT  ' + ( _g_CurrentTrace._v_Header ? _g_CurrentTrace._v_Header : '?');
                if( cKeepTraces) {
                    g_TracesHistory.push( aFullMessage);
                }
            }

            if( _c_LogTraces && m_Log.cLogAllowed) {
                m_Log.pLog( aFullMessage);
                if( aContinueParentMessage) {
                    m_Log.pLog( aContinueParentMessage);
                }
            }
            return null;
        }
        return null;
    };
    if(m_Instrument.cDocFuncs) {
        _pEndFunction._sDoc('_pEndFunction', 'Informs the trace machinery of end of execution of a function as traced with the supplied trace frame object.');
        _doc+=('\n\n' + _pEndFunction._doc);
    }







    var sThis = function ( theThis) {
        if ( !theThis) {
            return null;
        }

        if( _c_AllowTrace) {

            if ( !_g_CurrentTrace) {
                throw new m_Error.Error('NoCurrentTrace', {module: _displayName, function: sThis});
            }

            _g_CurrentTrace._v_This = theThis;

            var aMessage = '';
            if (typeof theThis === 'object') {
                if ( theThis._v_Type) {
                    aMessage = '{' + theThis._v_Type + (theThis._v_UID ? ' ' + theThis._v_UID : '')  + '}';
                    if( _g_CurrentTrace._v_Header) {
                        _g_CurrentTrace._v_Header += (' ' + aMessage);
                    }
                    else {
                        _g_CurrentTrace._v_Header = aMessage;
                    }
                }
            }

            var aFullMessage ='';
            if( _c_Timestamp) {
                var aTimestamp = new Date().getTime().toString();
                aFullMessage += aTimestamp.substr( aTimestamp.length - 6);
            }
            aFullMessage += '[' + _g_CurrentTrace._v_Level + ']';
            aFullMessage += ' THIS  ' + ( _g_CurrentTrace._v_Header ? _g_CurrentTrace._v_Header : '?');

            if( cKeepTraces) {
                g_TracesHistory.push( aFullMessage);
            }

            if( _c_LogTraces && m_Log.cLogAllowed) {
                m_Log.pLog( aFullMessage);
            }
            return null;
        }
        return null;
    };
    if(m_Instrument.cDocFuncs) {
        sThis._sDoc('sThis', 'Sets the supplied object as the one known as this in the traced function.');
        _doc+=('\n\n' + sThis._doc);
    }







    var pStep = function ( theMessage) {
        if( _c_AllowTrace) {

            if ( !_g_CurrentTrace) {
                throw new m_Error.Error('NoCurrentTrace', {module: _displayName, function: pStep});
            }

            var aMessage = theMessage;
            if ( !aMessage) {
                aMessage = '';
            }

            var aTraceStep = _fNewVoidTraceStep();
            aTraceStep._v_Header = aMessage;
            aTraceStep._v_Level = _g_CurrentTrace._v_Level + 1;

            var aFullMessage ='';
            if( _c_Timestamp) {
                var aTimestamp = new Date().getTime().toString();
                aTraceStep._v_Time = aTimestamp;
                aFullMessage += aTimestamp.substr( aTimestamp.length - 6);
            }
            aFullMessage += '[' + aTraceStep._v_Level + ']';
            aFullMessage += ' STEP  ' + ( _g_CurrentTrace._v_Header ? _g_CurrentTrace._v_Header : '?') + '  ' + aMessage;

            if( cKeepTraces) {
                g_TracesHistory.push( aFullMessage);
            }

            _g_CurrentTrace._v_Children.push( aTraceStep);

            if( _c_LogTraces && m_Log.cLogAllowed) {
                m_Log.pLog( aFullMessage);
            }
            return null;
        }
        return null;
    };
    if(m_Instrument.cDocFuncs) {
        pStep._sDoc('pStep', 'Informs the trace machinery of an step during the execution of a function as traced with the supplied trace frame object.');
        _doc+=('\n\n' + pStep._doc);
    }
















    _doc+='\n\nModule Functions for old style trace.';



    var fBegin = function (theModuleName, theFunction) {
        if( cTraceBegin) {
            var aMessage = '';
            if (theModuleName) {
                aMessage += 'M:' + theModuleName;
            }
            else {
                aMessage += 'M:?';
            }
            if (theFunction) {
                if( typeof theFunction === 'function') {
                    aMessage += '  F:' + (theFunction.displayName ? theFunction.displayName : '?');
                }
                else {
                    if( typeof theFunction === 'string') {
                        aMessage += '  F:' + theFunction;
                    }
                }
            }
            var aFullMessage = '';
            if( _c_Timestamp) {
                aFullMessage += _fTimestamp();
            }
            aFullMessage += ' BEGIN ' + aMessage;
            if( cKeepTraces) {
                g_TracesHistory.push( aFullMessage);
            }
            if( m_Log.cLogAllowed) {
                m_Log.pLog( aFullMessage);
            }
            return aMessage;
        }
        return null;
    };
    if(m_Instrument.cDocFuncs) {
        fBegin._sDoc('fBegin', 'Informs the trace machinery of beginning of execution of a function, and returns a handle to be passed to the tracer when the function execution ends.');
        _doc+=('\n\n' + fBegin._doc);
    }






    var pTr = function (theTraceHandle, theMessage) {
        if( cTraceSteps && theTraceHandle) {
            var aFullMessage = '';
            if( _c_Timestamp) {
                aFullMessage += _fTimestamp();
            }
            aFullMessage += '       ' + theTraceHandle + ' ' + theMessage;
            if( cKeepTraces) {
                g_TracesHistory.push( aFullMessage);
            }
            if( m_Log.cLogAllowed) {
                m_Log.pLog( aFullMessage);
            }
        }
        return null;
    };
    if(m_Instrument.cDocFuncs) {
        pTr._sDoc('pTr', 'Informs the trace machinery of execution of an intermediate step of a function given the handle returned by the tracer when the function execution begun.');
        _doc+=('\n\n' + pTr._doc);
    }





    var pEnd = function (theTraceHandle, theMessage) {
        if( cTraceEnd && theTraceHandle) {
            var aFullMessage = '';
            if( _c_Timestamp) {
                aFullMessage += _fTimestamp();
            }
            aFullMessage += ' END   ' + theTraceHandle;
            if( theMessage) {
                aFullMessage += ' ' + theMessage;
            }
            if( cKeepTraces) {
                g_TracesHistory.push( aFullMessage);
            }
            if( m_Log.cLogAllowed) {
                m_Log.pLog( aFullMessage);
            }
        }
        return null;
    };
    if(m_Instrument.cDocFuncs) {
        pEnd._sDoc('pEnd', 'Informs the trace machinery of the end of execution of a function given the handle returned by the tracer when the function execution begun.');
        _doc+=('\n\n' + pEnd._doc);
    }




    var _fTimestamp = function () {
        if(!_c_Timestamp) {
            return '';
        }
        var aCurrentMillis = new Date().getTime().toString();
        return aCurrentMillis.substr( aCurrentMillis.length - 6)
    };
    if(m_Instrument.cDocFuncs) {
        pEnd._sDoc('_fTimestamp', '');
        _doc+=('\n\n' + _fTimestamp._doc);
    }





    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        cTrace:      cTrace,
        cTraceBegin: cTraceBegin,
        cTraceSteps: cTraceSteps,
        cTraceEnd:   cTraceEnd,

        g_TracesHistory: g_TracesHistory,

        sThis:  sThis,
        pStep:  pStep,

        fBegin: fBegin,
        pTr:    pTr,
        pEnd:   pEnd
    };
    if(aModule) {}  /* To avoid code quality tools from complaining about unused parameter */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Trace')
    }

    return aModule;
};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Trace')
}



if( typeof define === 'function') {

    define(['m_ConstValues', 'm_Functionx', 'm_Instrument', 'm_Log', 'm_Error'],
        function (m_ConstValues,m_Functionx, m_Instrument, m_Log, m_Error) {

            return aM_Trace(m_ConstValues, m_Functionx, m_Instrument, m_Log, m_Error);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Trace.displayName]=aM_Trace(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Error']
        );
    }
    else {
        ChoirJS_Module_Trace = aM_Trace(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Log,
            ChoirJS_Module_Error
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Trace')
}
