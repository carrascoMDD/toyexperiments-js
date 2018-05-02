/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Error')
}


var aM_Error = function(m_Functionx) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Error')
    }


    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */

    var _displayName = 'm_Error';

    var _doc=_displayName +' module. Factory for error instances of known structure, able to represent themselves as string.';


    var cErrorNamesAndDescriptions_Recommended = {
        'ParameterNullError': 'ParameterNullError',
        'ParameterTypeError': 'ParameterTypeError',
        'ParameterRootError': 'ParameterRootError',
        'ParameterStateError': 'ParameterStateError',
        'ParameterNotObjectError': 'ParameterNotObjectError',
        'ParameterEmptyStringError': 'ParameterEmptyStringError',
        'PropertyEnumValueError':  'PropertyEnumValueError'


    };
    _doc+=('\n\n' +  JSON.stringify({cErrorNamesAndDescriptions_Recommended: cErrorNamesAndDescriptions_Recommended}, null, 4));



    var _fError_toString = function() {
        return 'ChoirJS-Error ' + this.name + ' ' + this.message;
    };
    _fError_toString._sDoc('_fError_toString', 'Pretty prints an error object as a string.');
    _doc+=('\n\n' + _fError_toString._doc);


    var tpErrorPrototype = {
        displayName: 'ErrorPrototype',
        _doc: 'Prototype for error instances of known structure, able to represent themselves as string.',

        toString: _fError_toString
    };



    var Error = function(theName, theMessage) {
        /* var _doc = ''; */

        /* _doc+='Sanitize error parameters.'; */

        var aName = theName;
        if (!aName) {
            aName = '?';
        }

        var aMessage = theMessage;
        if( typeof aMessage === 'object') {


            var aModuleOrName =  aMessage.module;
            if (aModuleOrName) {
                if ( typeof aModuleOrName === 'object') {
                    var aModuleName = aModuleOrName.displayName;
                    if (aModuleName) {
                        aMessage.module = aModuleName;
                    }
                    else {
                        aMessage.module = '?';
                    }
                }
            }


            var aFunctionOrName =  aMessage.function;
            if (aFunctionOrName) {
                if ( typeof aFunctionOrName === 'function') {
                    var aFunctionName = aFunctionOrName.displayName;
                    if (aFunctionName) {
                        aMessage.function = aFunctionName;
                    }
                    else {
                        aMessage.function = '?';
                    }
                }
            }


            var someWiths = aMessage.with;
            if(someWiths) {
                var aNumWiths = someWiths.length;
                for( var anIndex = 0; anIndex < aNumWiths; anIndex++) {
                    var aWith = someWiths[ anIndex];
                    if( aWith) {
                        if( typeof aWith === 'object') {
                            if( aWith._v_Type) {
                                someWiths[anIndex] = { _Type:  aWith._v_Type, _UID: (aWith._v_UID ? aWith._v_UID  : '')};
                            }
                            else {
                                someWiths[anIndex]=null;
                            }
                        }
                        else {
                            if( !(['boolean', 'number', 'string'].indexOf( typeof aWith))) {
                                someWiths[anIndex]=null;
                            }
                        }
                    }
                }
            }

            aMessage = JSON.stringify(aMessage, null, 4);
        }
        else {
            if( !typeof aMessage === 'string') {
                aMessage = '?';
            }
        }

        this.name= aName;
        this.message = aMessage;
        this.displayName = Error.displayName;
        this._doc = Error._doc;
    };
    Error._sDoc('Error', 'Factory for ChoirJS error instance of known structure, able to represent itself as string..');
    _doc+=('\n\n' + Error._doc);

    Error.prototype = tpErrorPrototype;






    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        cErrorNamesAndDescriptions_Recommended: cErrorNamesAndDescriptions_Recommended,

        Error: Error
    };
    if(aModule) {}  /* To avoid code quality tools from complaining about unused parameter */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Error')
    }

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Error')
}


if( typeof define === 'function') {

    define(['m_Functionx'], function (m_Functionx) {
        return aM_Error(m_Functionx);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Error.displayName]=aM_Log(gChoirJS_Modules['m_Functionx']);
    }
    else {
        ChoirJS_Module_Error = aM_Error(ChoirJS_Module_Functionx);
    }
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Error')
}
