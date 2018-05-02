/*
 * Copyright 2013 Antonio Carrasco Valero
 */



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Functionx')
}


var aM_Functionx = function ( m_ConstValues, m_MD5) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Functionx')
    }

    var _displayName = 'm_Functionx';

    var _doc = _displayName +' Module. Extends Function.prototype and define developer utility functions.';


    _doc+='\n\nModule constants with values defined in requirepaths.js.';


    var _c_ForceReuseFunctions = m_ConstValues.fConst( _displayName, '_c_ForceReuseFunctions',false);
    var _c_AllowFunctionReplacementByUUID = m_ConstValues.fConst( _displayName, '_c_AllowFunctionReplacementByUUID', (!_c_ForceReuseFunctions) && true);
    var _c_LogFunctionUUIDCollisions = m_ConstValues.fConst( _displayName, '_c_LogFunctionUUIDCollisions', true);
    var _c_AllowFunctionReplacementByDigest = m_ConstValues.fConst( _displayName, '_c_AllowFunctionReplacementByDigest', (!_c_ForceReuseFunctions) && true);
    var _c_LogFunctionDigestCollisions = m_ConstValues.fConst( _displayName, '_c_LogFunctionDigestCollisions', true);


    var _cFunctionParameters_argumentsRegExp = /\(([\s\S]*?)\)/;
    var _cFunctionParameters_replaceRegExp = /[ ,\n\r\t]+/;


    var _cDefaultMD5BecauseOfUnableToObtainFunctionSource = 'DefaultMD5BecauseOfUnableToObtainFunctionSource';
    var _cDefaultMD5BecauseComputeMD5Error = 'DefaultMD5BecauseComputeMD5Error';

    _doc+='\n\nModule variables.';


    var _g_FunctionsByUUID = {};

    var _g_FunctionsByDigest = {};




    _doc+='\n\nFunctions added to Function.prototype.';




    if(typeof Function.prototype._sDoc === 'undefined') {

        var _sDoc = function(theName, theDescription) {

            this.displayName=theName;
            this.innerDisplayName=this.displayName;

            var aModuleName = '';
            if ( this._moduleName) {
                aModuleName = this._moduleName;
            }

            var aDocObject = {
                displayName: theName,
                moduleName:  aModuleName,
                Description: theDescription,
                Parameters:  _cFunctionParameters_argumentsRegExp.exec(this)[1].trim().split(_cFunctionParameters_replaceRegExp)
                /* Source:     this.toString() */
            };

            this._info = aDocObject;
            if( this._info) {} /* To avoid code quality tools complaining about unused property. */
            if (! (typeof this._sUUID === 'undefined')) {
                aDocObject['UUID'] = this._UUID;
            }
            var aDocString=JSON.stringify(aDocObject, null, 4);
            if(!this._doc) {
                this._doc=aDocString;
            }
            else {
                this._doc+=('\n\n' + aDocString);
            }
            return this;
        };

        Function.prototype._sDoc = _sDoc;

        _sDoc._sDoc('_sDoc', 'Add to Function.prototype the function _sDoc to set displayName and _doc of the function from supplied arguments and function introspection.');
        _doc+=('\n\n' + _sDoc._doc);
    }






    if(typeof Function.prototype._sName === 'undefined') {

        var _sName = function() {

            if (arguments.length > 0) {
                if (arguments.length > 1) {
                    this._moduleName=arguments[0];
                    this.displayName=arguments[1];
                    this.innerDisplayName=this.displayName;

                }
                else {
                    this.displayName=arguments[0];
                    this.innerDisplayName=this.displayName;

                }

                if (this._info) {
                    this._sDoc( this.displayName,  this._info.Description);
                }
                else {
                    this._sDoc( this.displayName, '' );
                }
            }
            return this;
        };

        Function.prototype._sName = _sName;

        _sName._sDoc('_sName', 'Add to Function.prototype the function _sName to set displayName from supplied arguments.');
        _doc+=('\n\n' + _sName._doc);
    }




    if(typeof Function.prototype._sDesc === 'undefined') {

        var _sDesc = function(theDescription) {

            if (theDescription && theDescription.length) {
                this._sDoc( this.displayName, theDescription);
            }
            return this;
        };

        Function.prototype._sDesc = _sDesc;

        _sDesc._sDoc('_sName', 'Add to Function.prototype the function _sName to set displayName from supplied arguments.');
        _doc+=('\n\n' + _sDesc._doc);
    }



    if(typeof Function.prototype._sModule === 'undefined') {

        var _sModule = function( theModuleName) {

            this._moduleName=theModuleName;
            return this;
        };

        Function.prototype._sModule = _sModule;

        _sModule._sDoc('_sName', 'Add to Function.prototype the function _sName to set displayName from supplied arguments.');
        _doc+=('\n\n' + _sModule._doc);
    }






    if(typeof Function.prototype._gDoc === 'undefined') {

        var _gDoc = function() {

            var aDocObject={};
            if(this._doc) {
                try {
                    aDocObject=JSON.parse(this._doc);
                }
                catch(anException) {}
            }
            if(this.displayName && !aDocObject['displayName']) {
                aDocObject['displayName']=this.displayName;
            }
            return aDocObject;
        };
        _gDoc._sDoc('_gDoc', 'Add to Function.prototype the function _gDoc to return the displayName and _doc of the function as an object.');
        _doc+=('\n\n' + _gDoc._doc);

        Function.prototype._gDoc = _gDoc
    }








    if(typeof Function.prototype._sUUID === 'undefined') {
        var _sUUID = function(theUUID) {

            if(!theUUID) {
                return this;
            }

            var aRegisteredFunction = _g_FunctionsByUUID[ theUUID];
            if (aRegisteredFunction && (typeof aRegisteredFunction === 'function')) {
                if(_c_ForceReuseFunctions) {
                    if(_c_LogFunctionUUIDCollisions) {
                        var aMessage = 'ForceReuseFunction:' + theUUID + (this.displayName ? ' ' + this.displayName: '');
                        if ( console) {
                            console.log( aMessage);
                        }
                        else {
                            postMessage( aMessage);
                        }
                    }
                    this._UUID=theUUID;
                    this._UUID_Observations = 'ForcedReuseWith:' + theUUID + (this.displayName ? ' ' + this.displayName: ' function_wo_displayName');
                    if( this._UUID_Observations) {} /* To avoid code quality tools complaining about unused property. */
                    return aRegisteredFunction;
                }
                else {
                    if(!_c_AllowFunctionReplacementByUUID) {
                        if(_c_LogFunctionUUIDCollisions) {
                            console.log('!AllowFunctionReplacement:' + theUUID+ (this.displayName ? ' ' + this.displayName: ''));
                        }
                        throw 'choirJS:FunctionAlreadyRegisteredWithUUID ' + theUUID + (this.displayName ? ' ' + this.displayName: '');
                    }
                    else {
                        if(_c_LogFunctionUUIDCollisions) {
                            console.log('AllowFunctionReplacement:' + theUUID + (this.displayName ? ' ' + this.displayName: ''));
                        }
                    }
                }
             }

            this._UUID = theUUID;
            _g_FunctionsByUUID[theUUID] = this;

            return this;
        };
        _sUUID._sDoc('_sUUID', 'Set UUID of the function to the supplied argument. ' +
            'Register the function by its UUID');
        _doc+=('\n\n' + _sUUID._doc);

        Function.prototype._sUUID = _sUUID;
    }










    if(typeof Function.prototype._sDigest === 'undefined') {
        var _sDigest = function() {

            var aDigest = this._MD5;
            if(!aDigest) {
                aDigest = this._fMD5();
            }
            if(!aDigest) {
                return this;
            }

            var aMessage;

            var aRegisteredFunction = _g_FunctionsByDigest[ aDigest];
            if (aRegisteredFunction && (typeof aRegisteredFunction === 'function')) {
                if(_c_ForceReuseFunctions) {
                    if(_c_LogFunctionDigestCollisions) {
                        aMessage = 'ForceReuseFunction:' + theDigest + (this.displayName ? ' ' + this.displayName: '');
                        if ( console) {
                            console.log( aMessage);
                        }
                        else {
                            postMessage( aMessage);
                        }
                    }
                    this._Digest=aDigest;
                    if( this._Digest) /* To aovid code quality tools complaining about unused property. */
                    this._Digest_Observations = 'ForcedReuseWith:' + aDigest + (this.displayName ? ' ' + this.displayName: ' function_wo_displayName');
                    if( this._Digest_Observations) {} /* To avoid code quality tools complaining about unused property. */
                    return aRegisteredFunction;
                }
                else {
                    if(!_c_AllowFunctionReplacementByDigest) {
                        if(_c_LogFunctionDigestCollisions) {
                            aMessage = '!AllowFunctionReplacement:' + aDigest + (this.displayName ? ' ' + this.displayName: '');
                            if ( console) {
                                console.log( aMessage);
                            }
                            else {
                                    postMessage( aMessage);
                            }
                        }
                        throw 'choirJS:FunctionAlreadyRegisteredWithDigest ' + aDigest + (this.displayName ? ' ' + this.displayName: '');
                    }
                    else {
                        if(_c_LogFunctionDigestCollisions) {
                            aMessage = 'AllowFunctionReplacement:' + theDigest + (this.displayName ? ' ' + this.displayName: '');
                            if ( console) {
                                console.log( aMessage);
                            }
                            else {
                                postMessage( aMessage);
                            }
                        }
                    }
                }
            }

            this._Digest = aDigest;
            _g_FunctionsByDigest[ aDigest] = this;

            return this;
        };
        _sDigest._sDoc('_sDigest',
            'Set Digest of the function to a cryptographic hash computed on the function source code. ' +
            'Register the function by its digest.');
        _doc+=('\n\n' + _sDigest._doc);

        Function.prototype._sDigest = _sDigest;
    }






    if(typeof Function.prototype._fMD5 === 'undefined') {
        var _fMD5 = function() {

            if ( this._MD5) {
               return this._MD5;
            }

            var aFunctionSource = this.toString();
            if ( !aFunctionSource) {
                this._MD5=_cDefaultMD5BecauseOfUnableToObtainFunctionSource;
            }
            else {
                var anMD5 = null;
                try {
                    anMD5 = m_MD5.md5( );
                }
                catch( anException) {}
                if (!anMD5) {
                    this._MD5=_cDefaultMD5BecauseComputeMD5Error;
                }
                this._MD5 = anMD5
            }

            return this._MD5;
        };
        _fMD5._sDoc('_fMD5', 'Retrieve or compute an MD5 cryptographic hash on the function source code.');
        _doc+=('\n\n' + _fMD5._doc);

        Function.prototype._fMD5 = _fMD5;
    }




















    _doc+='\n\nUtility Functions.';



    var fNewUUID = function () {
        var aUUID = "";

        for (var anIndex = 0; anIndex < 32; anIndex++) {

            var aRandom = Math.floor(Math.random() * 16);

            if ([8,12,16,20].indexOf(anIndex) >= 0) {
                aUUID += '-';
            }
            aUUID += (anIndex == 12 ? 4 : (anIndex == 16 ? (aRandom & 3 | 8) : aRandom)).toString(16);
        }
        return aUUID;
    };
    fNewUUID._sDoc('fNewUUID', 'Produce a random RFC4122 compliant UUID v4.');
    _doc+=('\n\n' + fNewUUID._doc);






    var fFunctionParameters = function (theFunction) {
        if (!theFunction) {
            return [];
        }

        var fnArguments = _cFunctionParameters_argumentsRegExp.exec(theFunction)[1].trim();
        return fnArguments.split(_cFunctionParameters_replaceRegExp);

    };
    fFunctionParameters._sDoc('fFunctionParameters', 'Return the parameters of the supplied function.');
    _doc+=('\n\n' + fFunctionParameters._doc);






    var fFunctionWithUUID = function (theUUID) {
        if (!theUUID) {
            return null;
        }

        if (!_g_FunctionsByUUID) {
            return null;
        }

        var aFunction = _g_FunctionsByUUID[theUUID];
        if (!aFunction) {
            return null;
        }

        if ( !( aFunction._UUID === theUUID)) {
            return null;
        }

        return aFunction;

    };
    fFunctionWithUUID._sDoc('fFunctionWithUUID', 'Return the function with the supplied UUID.');
    _doc+=('\n\n' + fFunctionWithUUID._doc);







    var fFunctionWithDigest = function (theDigest) {
        if (!theDigest) {
            return null;
        }

        if (!_g_FunctionsByDigest) {
            return null;
        }

        var aFunction = _g_FunctionsByDigest[theDigest];
        if (!aFunction) {
            return null;
        }

        return aFunction;

    };
    fFunctionWithDigest._sDoc('fFunctionWithDigest', 'Return the function with the supplied source code MD5 digest.');
    _doc+=('\n\n' + fFunctionWithDigest._doc);







    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        fNewUUID: fNewUUID,

        fFunctionParameters: fFunctionParameters,

        fFunctionWithUUID: fFunctionWithUUID,
        fFunctionWithDigest: fFunctionWithDigest

    };
    if(aModule) {} /* Added to avoid code quality tools complaining about redundant variable */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Functionx')
    }

    return aModule;

};

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Functionx')
}


if( typeof define === 'function') {

    define( [ 'm_ConstValues', 'm_MD5'], function (m_ConstValues, m_MD5) {

        return aM_Functionx(m_ConstValues, m_MD5);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Functionx.displayName]=aM_Functionx(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_MD5']
        );
    }
    else {
        ChoirJS_Module_Functionx = aM_Functionx(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_MD5
    );
    }
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Functionx')
}


