/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Ctxt')
}



var aM_Ctxt = function (m_ConstValues, m_Functionx, m_Error, m_Instrument, m_Trace, m_Identifiable, m_Clock) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Ctxt')
    }

    var _displayName = 'm_Ctxt';

    var _doc = _displayName +' module. Functions to record and propagate changes during the Performer loop.';

    var _privateMembers = [];
    var _publicMembers = [];



    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';


    var cCheckCtxt   = m_ConstValues.fConst( _displayName, 'cCheckCtxt', true);


    _doc+=('\n\nModule variables:');


    var _g_CtxtHistory = [];

    var _g_CurrentCtxt = null;


    var _g_RootCtxts = [];






    _doc+='\n\nFunctions added to Function.prototype.';





    /* Obsolete
    if(typeof Function.prototype._WithCtxt === 'undefined') {
        var _WithCtxt = function() {

            var aWrappedFunction = this;
            var anInnerWrappedFunction = aWrappedFunction;
            if ( aWrappedFunction._IsWrapperDefense === true) {
                anInnerWrappedFunction = aWrappedFunction._DefendedFunction;
                if( !anInnerWrappedFunction) {
                    throw new m_Error.Error('DefenseWrapperError', {
                        module: (aWrappedFunction.hasOwnProperty('_moduleName') ? aWrappedFunction._moduleName : ''),
                        function: aWrappedFunction
                    });
                }
            }

            var someParameters = _cFunctionParameters_argumentsRegExp.exec(anInnerWrappedFunction)[1].trim().split(_cFunctionParameters_replaceRegExp);
            if ( (!someParameters) || ( !(someParameters.indexOf( 'theCtxt') >=0))) {
                throw new m_Error.Error('MissingCtxtParameterError', {
                    module: (aWrappedFunction.hasOwnProperty('_moduleName') ? aWrappedFunction._moduleName : ''),
                    function: aWrappedFunction, with: [someParameters]
                });
            }

            if( !cCheckCtxt) {
                return aWrappedFunction;
            }

            var aWrapperFunction = (function() {
                var aHereWrappedFunction = aWrappedFunction;
                return function() {
                    if( cCheckCtxt) {
                        if( !arguments.length) {
                            throw new m_Error.Error('NullCtxtError', {
                                module: (aWrappedFunction.hasOwnProperty('_moduleName') ? aWrappedFunction._moduleName : ''),
                                function: aHereWrappedFunction
                            });
                        }
                        if( !(typeof arguments[0] === 'object')) {
                            throw new m_Error.Error('CtxtNotObjectError', {
                                module: (aWrappedFunction.hasOwnProperty('_moduleName') ? aWrappedFunction._moduleName : ''),
                                function: aHereWrappedFunction, with: [arguments[0]]
                            });
                        }
                        if( !( arguments[0]._v_Type === 'Ctxt')) {
                            throw new m_Error.Error('CtxtTypeError', {
                                module: (aWrappedFunction.hasOwnProperty('_moduleName') ? aWrappedFunction._moduleName : ''),
                                function: aHereWrappedFunction, with: [arguments[0]]
                            });
                        }
                    }

                    try {
                        return aHereWrappedFunction.apply( this, Array.prototype.slice.call(arguments));
                    }
                    finally {
                    }
                }
            })();

            aWrappedFunction._WithCtxt = true;
            aWrappedFunction._CtxtFunction = aWrapperFunction;

            aWrapperFunction._IsWrapper = true;
            aWrapperFunction._IsWrapperCtxt = true;
            aWrapperFunction.displayName = 'WrapperCtxt_on ' + (aWrappedFunction.hasOwnProperty('displayName') ? aWrappedFunction.displayName : '?');
            aWrapperFunction._moduleName = (aWrappedFunction.hasOwnProperty('_moduleName') ? aWrappedFunction._moduleName : '');

            aWrapperFunction.innerDisplayName = ( aWrappedFunction.hasOwnProperty('innerDisplayName') ? aWrappedFunction.innerDisplayName : '?');

            return aWrapperFunction;

        };
        _WithCtxt._sDoc('_WithCtxt', 'Wrap the function to check its execution context argument at invocation time.');
        _doc+=('\n\n' + _WithCtxt._doc);

        Function.prototype._WithCtxt = _WithCtxt;
    }
    */






    _doc+=('\n\nModule functions:');





    var _fNewVoidCtxt = function() {

        var aChange = m_Identifiable.fNewIdentifiable();

        aChange._v_Type = 'Ctxt';
        aChange._v_Clock = m_Clock.fNow();
        aChange._v_Status =     '';
        aChange._v_Level =      0;
        aChange._v_ParentCtxt = null;
        aChange._v_Data =       {};
        aChange._v_Children =   [];
        aChange._v_ChangesStack =   [];


        return aChange

    };
    if(m_Instrument.cDocFuncs) {
        _fNewVoidCtxt._sDoc('_fNewVoidCtxt', 'Creates and object to hold the information about an execution context.');
        _doc+=('\n\n' + _fNewVoidCtxt._doc);
    }





    var fNewCtxt = function () {

        var aCtxt = _fNewVoidCtxt();

        if ( !_g_CurrentCtxt) {
                _g_CurrentCtxt =  aCtxt;
                _g_RootCtxts.push( aCtxt);
        }
        else {
            aCtxt._v_Level = _g_CurrentCtxt._v_Level + 1;
            aCtxt._v_ParentCtxt = _g_CurrentCtxt;
            _g_CurrentCtxt._v_Children.push( aCtxt);
            _g_CurrentCtxt = aCtxt;
            aCtxt._v_ParentCtxt._v_Status = 'ChildRunning';
        }

        _g_CtxtHistory.push( aCtxt);

        if( arguments.length) {
            var aCtxtData = arguments[0];
            if ( typeof aCtxtData === 'object') {
                for( var aPropertyName in aCtxtData) {
                    if ( aCtxtData.hasOwnProperty( aPropertyName)) {
                        aCtxt._v_Data[ aPropertyName] = aCtxtData[ aPropertyName];
                    }
                }
            }
        }

        return aCtxt;

    };
    if(m_Instrument.cDocFuncs) {
        fNewCtxt._sDoc('fNewCtxt', 'Informs the trace machinery of beginning of execution of a function, and returns a handle to be passed to the tracer when the function execution ends.');
        _doc+=('\n\n' + fNewCtxt._doc);
    }







    var fWithChange = function ( theCtxt, theChange, theFunction) {

        if( !theFunction) {
            return null;
        }

        if( !theCtxt) {
            return theFunction();
        }

        var aCurrentStack = theCtxt._v_ChangesStack;

        if( theChange) {
            aCurrentStack = theCtxt._v_ChangesStack.slice();
            theCtxt._v_ChangesStack.push( theChange);
        }
        try {
            return theFunction();
        }
        finally {
            theCtxt._v_ChangesStack = aCurrentStack;
        }

    };
    if(m_Instrument.cDocFuncs) {
        fWithChange._sDoc('fWithChange', 'Pushes supplied Change into stack, executes the supplied function, and pop the Change after.');
        _doc+=('\n\n' + fWithChange._doc);
    }







    var fLastChange = function ( theCtxt) {

        if( !theCtxt) {
            return null;
        }

        if( !theCtxt._v_ChangesStack) {
            return null;
        }

        if( !theCtxt._v_ChangesStack.length) {
            return null;
        }

        return theCtxt._v_ChangesStack[ theCtxt._v_ChangesStack.length - 1];

    };
    if(m_Instrument.cDocFuncs) {
        fLastChange._sDoc('fLastChange', 'Return that Change that was last pushed into the stack.');
        _doc+=('\n\n' + fLastChange._doc);
    }









    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        fNewCtxt:     fNewCtxt,
        fWithChange:  fWithChange,
        fLastChange:  fLastChange
    };

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Ctxt')
    }


    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Ctxt')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_Functionx', 'm_Error', 'm_Instrument', 'm_Trace', 'm_Identifiable',
        'm_Clock'],
        function (m_ConstValues, m_Functionx, m_Error, m_Instrument, m_Trace, m_Identifiable,
                  m_Clock) {

            return aM_Ctxt(m_ConstValues, m_Functionx, m_Error, m_Instrument, m_Trace, m_Identifiable,
                m_Clock);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Ctxt.displayName]=aM_Ctxt(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Clock']
        );
    }
    else {
        ChoirJS_Module_Ctxt= aM_Ctxt(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Clock
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Ctxt')
}

