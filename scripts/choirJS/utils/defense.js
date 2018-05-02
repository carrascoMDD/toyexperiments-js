/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Defense')
}


var aM_Defense = function(m_ConstValues, m_Functionx, m_Instrument, m_Log, m_Error) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Defense')
    }


    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */
    if( m_Instrument) {}
    if( m_Log) {}


    var _displayName = 'm_Defense';

    var _doc=_displayName +' module. Functions to guard the execution of functions, by previously executing another function with the same arguments.';



    _doc+=('\n\nConfigurable module constants.');


    var cErrorOnCheckFailure = true;
    var cLogOnCheckFailure   = true;

    var cErrorOnConstraintSyntaxFailure = true;
    var cLogOnConstraintSyntaxFailure   = true;

    var cErrorOnUnconstrainedParameters   = false;
    var cLogUnconstrainedParameters       = true;


    _doc+=('\n\nConfigurable module constants with values copied from constvalues.js:');




    var cAllowDefense                             = m_ConstValues.fConst( _displayName, 'cAllowDefense', true);
    var _c_AllowRuntimeDefenseSwitch              = m_ConstValues.fConst( _displayName, '_c_AllowRuntimeDefenseSwitch', true);


    var cErrorOnCtxtNotFirst                      = m_ConstValues.fConst( _displayName, 'cErrorOnCtxtNotFirst', true);
    var cLogCtxtNotFirst                          = m_ConstValues.fConst( _displayName, 'cLogCtxtNotFirst', true);

    var cErrorOnDuplicatedConstraintNames         = m_ConstValues.fConst( _displayName, 'cErrorOnDuplicatedConstraintNames', true);
    var cLogDuplicatedConstraintNames             = m_ConstValues.fConst( _displayName, 'cLogDuplicatedConstraintNames', true);

    var cErrorOnDuplicatedParameterNames          = m_ConstValues.fConst( _displayName, 'cErrorOnDuplicatedParameterNames', true);
    var cLogDuplicatedParameterNames              = m_ConstValues.fConst( _displayName, 'cLogDuplicatedParameterNames', true);

    var cErrorOnConstrainedAnonymousParameters = m_ConstValues.fConst( _displayName, 'cErrorOnConstrainedAnonymousParameters', true);
    var cLogConstrainedAnonymousParameters     = m_ConstValues.fConst( _displayName, 'cLogConstrainedAnonymousParameters', true);










    _doc+='\n\nFunctions added to Function.prototype.';






    if(typeof Function.prototype._DefendWith === 'undefined') {


        (function() {


            var _cPrerequisitesByPredicateKind = {
                'NotUndefined': [],
                'NotNull':      [ 'NotUndefined'],
                'boolean':      [ 'NotNull'],
                'number':       [ 'NotNull'],
                'string':       [ 'NotNull'],
                'object':       [ 'NotNull'],
                'function':     [ 'NotNull'],
                'typeOf':       [ 'NotNull'],
                'Type':         [ 'object']

            };


            var _cPredicatesSortOrder = {
                'NotUndefined': 0,
                'NotNull':      10,
                'typeOf':       100,
                'boolean':      110,
                'number':       120,
                'string':       130,
                'object':       140,
                'function':     150,
                'Type':         200

            };


            var _cPrerequisiteKinds = [];
            for (var aPrq in _cPredicatesSortOrder) {
                if( _cPredicatesSortOrder.hasOwnProperty(aPrq)) {
                    _cPrerequisiteKinds.push( aPrq);
                }
            }



            var _fCheckFactory_NotUndefined = function( theDefendedFunction, theParameterName, theArgumentIndex,
                                                        thePredicate) {

                if( !theDefendedFunction) {
                    return null;
                }
                if( !theParameterName || !theParameterName.length) {
                    return null;
                }
                if( theArgumentIndex < 0) {
                    return null;
                }
                if( !thePredicate || !thePredicate.length) {
                    return null;
                }



                return (function() {
                    var aDefendedFunction_here = theDefendedFunction;
                    var aParameterName_here    = theParameterName;
                    var anArgumentIndex_here   = theArgumentIndex;
                    var someModifiers_here     = thePredicate.slice( 1);

                    return function( ShallBeTheArgumentsOfFunctionToBeDefended) {


                        var aMustFail = anArgumentIndex_here >= arguments.length;

                        var anArgumentValue;

                        if (!aMustFail) {
                            anArgumentValue = arguments[ anArgumentIndex_here];
                            aMustFail = typeof anArgumentValue === 'undefined';
                        }

                        if( aMustFail) {
                            if( someModifiers_here.indexOf( 'optional') >= 0) {
                                return true;
                            }
                            var anError = new m_Error.Error('ParameterUndefinedError', {
                                module: (aDefendedFunction_here.hasOwnProperty('_moduleName') ? aDefendedFunction_here._moduleName : ''),
                                function: aDefendedFunction_here, parameter: aParameterName_here, with: [aParameterName_here]
                            });
                            if( cErrorOnCheckFailure) {
                                throw anError;
                            }
                            if( cLogOnCheckFailure) {
                                m_Log.pLog(  anError.toString());
                            }
                            return false;
                        }

                        return null;
                    }
                })();
            };






            var _fCheckFactory_NotNull = function( theDefendedFunction, theParameterName, theArgumentIndex,
                                                   thePredicate) {
                if( !theDefendedFunction) {
                    return null;
                }
                if( !theParameterName || !theParameterName.length) {
                    return null;
                }
                if( theArgumentIndex < 0) {
                    return null;
                }

                if( thePredicate) {}

                return (function() {
                    var aDefendedFunction_here = theDefendedFunction;
                    var aParameterName_here    = theParameterName;
                    var anArgumentIndex_here   = theArgumentIndex;
                    var someModifiers_here     = thePredicate.slice( 1);

                    return function( ShallBeTheArgumentsOfFunctionToBeDefended) {

                        var aMustFail = anArgumentIndex_here >= arguments.length;

                        var anArgumentValue;

                        if (!aMustFail) {
                            anArgumentValue = arguments[ anArgumentIndex_here];
                            aMustFail = typeof anArgumentValue === 'undefined';
                        }

                        if (!aMustFail) {
                            aMustFail = anArgumentValue === null;
                        }

                        if( aMustFail && (someModifiers_here.indexOf( 'optional') >= 0)) {
                            return true;
                        }

                        if( aMustFail) {
                            var anError = new m_Error.Error('ParameterNullError', {
                                module: (aDefendedFunction_here.hasOwnProperty('_moduleName') ? aDefendedFunction_here._moduleName : ''),
                                function: aDefendedFunction_here, parameter: aParameterName_here, with: [anArgumentValue]
                            });
                            if( cErrorOnCheckFailure) {
                                throw anError;
                            }
                            if( cLogOnCheckFailure) {
                                m_Log.pLog(  anError.toString());
                            }
                            return false;
                        }

                        return null;
                    }
                })();
            };









            var _fCheckFactory_TypeOf = function( theDefendedFunction, theParameterName, theArgumentIndex,
                                                  thePredicate, theTypeOfOrTypesOf) {
                if( !theDefendedFunction) {
                    return null;
                }
                if( !theParameterName || !theParameterName.length) {
                    return null;
                }
                if( !theTypeOfOrTypesOf || !theTypeOfOrTypesOf.length) {
                    return null;
                }
                if( theArgumentIndex < 0) {
                    return null;
                }

                if( thePredicate) {}

                return (function() {
                    var aDefendedFunction_here = theDefendedFunction;
                    var aParameterName_here    = theParameterName;
                    var anArgumentIndex_here   = theArgumentIndex;
                    var someModifiers_here     = thePredicate.slice( 1);
                    var someTypesOf_here       = theTypeOfOrTypesOf;
                    if( typeof theTypeOfOrTypesOf === 'string') {
                        someTypesOf_here = [ theTypeOfOrTypesOf];
                    }

                    return function( ShallBeTheArgumentsOfFunctionToBeDefended) {

                        var aMustFail = anArgumentIndex_here >= arguments.length;

                        var anArgumentValue;

                        if (!aMustFail) {
                            anArgumentValue = arguments[ anArgumentIndex_here];
                            aMustFail = typeof anArgumentValue === 'undefined';
                        }

                        if (!aMustFail) {
                            aMustFail = anArgumentValue === null;
                        }

                        /*
                        if (!aMustFail && (someModifiers_here.indexOf( 'notempty') >= 0)) {
                            aMustFail = anArgumentValue.length < 1;
                        }
                        */
                        if( aMustFail && (someModifiers_here.indexOf( 'optional') >= 0)) {
                            return true;
                        }

                        var anArgumentTypeOf;

                        if (!aMustFail) {
                            anArgumentTypeOf = typeof anArgumentValue;
                            aMustFail = someTypesOf_here.indexOf( anArgumentTypeOf) < 0;
                        }

                        if( aMustFail) {
                            var anError = new m_Error.Error('ParameterTypeOfError', {
                                module: (aDefendedFunction_here.hasOwnProperty('_moduleName') ? aDefendedFunction_here._moduleName : ''),
                                function: aDefendedFunction_here, parameter: aParameterName_here,
                                typesOf: someTypesOf_here, typeOf: anArgumentTypeOf, with: [anArgumentValue]
                            });
                            if( cErrorOnCheckFailure) {
                                throw anError;
                            }
                            if( cLogOnCheckFailure) {
                                m_Log.pLog(  anError.toString());
                            }
                            return false;
                        }

                        return true;
                    }
                })();
            };












            var _fCheckFactory_Type = function( theDefendedFunction, theParameterName, theArgumentIndex,
                                                thePredicate, theTypeOrTypes) {

                if( !theDefendedFunction) {
                    return null;
                }
                if( !theParameterName || !theParameterName.length) {
                    return null;
                }
                if( !theTypeOrTypes || !theTypeOrTypes.length) {
                    return null;
                }
                if( theArgumentIndex < 0) {
                    return null;
                }

                if( thePredicate) {}


                return (function() {
                    var aDefendedFunction_here = theDefendedFunction;
                    var aParameterName_here    = theParameterName;
                    var anArgumentIndex_here    = theArgumentIndex;
                    var someModifiers_here     = thePredicate.slice( 1);
                    var someTypes_here    = theTypeOrTypes;
                    if( typeof theTypeOrTypes === 'string') {
                        someTypes_here = [ theTypeOrTypes];
                    }

                    return function( ShallBeTheArgumentsOfFunctionToBeDefended) {

                        var aMustFail = anArgumentIndex_here >= arguments.length;

                        var anArgumentValue;

                        if (!aMustFail) {
                            anArgumentValue = arguments[ anArgumentIndex_here];
                            aMustFail = typeof anArgumentValue === 'undefined';
                        }

                        if (!aMustFail) {
                            aMustFail = anArgumentValue === null;
                        }

                        if( aMustFail && (someModifiers_here.indexOf( 'optional') >= 0)) {
                            return true;
                        }

                        if (!aMustFail) {
                            aMustFail = !( typeof anArgumentValue === 'object');
                        }

                        var anArgumentType;

                        if (!aMustFail) {
                            anArgumentType = anArgumentValue._v_Type;
                            aMustFail = typeof anArgumentType === 'undefined';
                        }

                        if (!aMustFail) {
                            aMustFail = someTypes_here.indexOf( anArgumentType) < 0;
                        }

                        if( aMustFail) {
                            var anError = new m_Error.Error('ParameterTypeError', {
                                module: (aDefendedFunction_here.hasOwnProperty('_moduleName') ? aDefendedFunction_here._moduleName : ''),
                                function: aDefendedFunction_here, parameter: aParameterName_here,
                                types: someTypes_here, type: anArgumentType, with: [anArgumentValue]
                            });
                            if( cErrorOnCheckFailure) {
                                throw anError;
                            }
                            if( cLogOnCheckFailure) {
                                m_Log.pLog(  anError.toString());
                            }
                            return false;
                        }

                        return null;
                    }
                })();
            };








            var _pCollectPredicatesInto = function( thePredicates, theCollectedPredicates, theCollectedPredicateKinds) {

                if( !thePredicates || !thePredicates.length) {
                    return null;
                }

                var aNumPreds = thePredicates.length;
                for (var aPredIdx = 0; aPredIdx < aNumPreds; aPredIdx++) {

                    var aPred = thePredicates[ aPredIdx];
                    if ( aPred && aPred.length) {

                        if( typeof aPred === 'string') {
                            aPred = [ aPred];
                        }
                        var aPredKind = aPred[ 0];


                        var somePrerequisites = _cPrerequisitesByPredicateKind[ aPredKind];
                        if( somePrerequisites) {

                            var aNumPrereqs = somePrerequisites.length;
                            for (var aPrereqIdx = 0; aPrereqIdx < aNumPrereqs; aPrereqIdx++) {

                                var aPrereq = somePrerequisites[ aPrereqIdx];
                                if (aPrereq) {

                                    if( theCollectedPredicateKinds.indexOf( aPrereq) < 0) {

                                        _pCollectPredicatesInto(  [ [aPrereq]], theCollectedPredicates, theCollectedPredicateKinds);
                                    }
                                }
                            }
                        }

                        if( theCollectedPredicateKinds.indexOf( aPredKind) < 0) {
                            theCollectedPredicates.push( aPred);
                            theCollectedPredicateKinds.push( aPredKind);
                        }

                    }
                }

                return null;
            };












            var _fSortPredicates = function( thePredicates) {

                if( !thePredicates) {
                    return [];
                }
                var somePredicatesToSort = thePredicates.map( function( aPred) { return [ _cPredicatesSortOrder[aPred[0]], aPred];});
                var someSortedPredicatesToSort = somePredicatesToSort.sort( function( anA, aB) { return anA[0] - aB[0] });

                return someSortedPredicatesToSort.map( function( aPred) { return aPred[1];});
            };










            var _fAllPredicates = function( thePredicates) {
                if( !thePredicates || !thePredicates.length) {
                    return [];
                }

                var someCollectedPredicates     = [];
                var someCollectedPredicateKinds = [];

                _pCollectPredicatesInto( thePredicates, someCollectedPredicates, someCollectedPredicateKinds);

                var someSortedPredicates =  _fSortPredicates( someCollectedPredicates);

                /* If any Predicate has an 'optional' predicate modifier
                   then propagate the 'optional' predicate to all predecessor predicates */

                var aHasOptional = false;

                var aNumPredicates = someSortedPredicates.length;
                for (var aPredicateIdx = aNumPredicates -1; aPredicateIdx >= 0; aPredicateIdx--) {
                    var aPredicate = someSortedPredicates[ aPredicateIdx];
                    if (aPredicate) {
                        if (aHasOptional) {
                            if(  aPredicate.indexOf( 'optional') < 0) {
                                aPredicate = aPredicate.slice();
                                aPredicate.push( 'optional');
                                someSortedPredicates[ aPredicateIdx] = aPredicate;
                            }
                        }
                        else {
                            if ( aPredicate.length > 1) {
                                if ( aPredicate.indexOf( 'optional') >= 1) {
                                    aHasOptional = true;
                                }
                            }
                        }
                    }
                }

                return someSortedPredicates;
            };
















            var _pCheckConstraintInto =  function( theDefendedFunction, theConstraintIndex, theCheckFunctions,
                                                   theParameterName, thePredicates) {

                if( !theParameterName || !theParameterName.length) {
                    return null;
                }


                var aCheck;
                var aPredicate;
                var aQualifier;
                var anError;


                if( !thePredicates || !thePredicates.length) {

                    aCheck = _fCheckFactory_NotUndefined( theDefendedFunction,
                        theParameterName, theConstraintIndex, null);

                    if( aCheck) {
                        theCheckFunctions.push( aCheck);
                    }
                    return null;
                }


                var somePredicates = _fAllPredicates( thePredicates);

                var aNumPredicates = somePredicates.length;


                for (var aPredicateIdx = 0; aPredicateIdx < aNumPredicates; aPredicateIdx++) {

                    aPredicate = somePredicates[ aPredicateIdx];

                    if ( aPredicate && aPredicate.length) {

                        var aPredicateKind =  aPredicate[ 0];

                        if( aPredicateKind) {

                            switch( aPredicateKind) {

                                case 'NotUndefined':
                                    aCheck = _fCheckFactory_NotUndefined( theDefendedFunction,
                                        theParameterName, theConstraintIndex, aPredicate);

                                    if( aCheck) {
                                        theCheckFunctions.push( aCheck);
                                    }
                                    break;


                                case 'NotNull':
                                    aCheck = _fCheckFactory_NotNull( theDefendedFunction,
                                        theParameterName, theConstraintIndex, aPredicate);
                                    if( aCheck) {
                                        theCheckFunctions.push( aCheck);
                                    }
                                    break;


                                case 'object':
                                    aCheck = _fCheckFactory_TypeOf( theDefendedFunction,
                                        theParameterName, theConstraintIndex, aPredicate, 'object');
                                    if( aCheck) {
                                        theCheckFunctions.push( aCheck);
                                    }
                                    break;


                                case 'string':
                                    aCheck = _fCheckFactory_TypeOf( theDefendedFunction,
                                        theParameterName, theConstraintIndex, aPredicate, 'string');
                                    if( aCheck) {
                                        theCheckFunctions.push( aCheck);
                                    }
                                    break;


                                case 'number':
                                    aCheck = _fCheckFactory_TypeOf( theDefendedFunction,
                                        theParameterName, theConstraintIndex, aPredicate, 'number');
                                    if( aCheck) {
                                        theCheckFunctions.push( aCheck);
                                    }
                                    break;


                                case 'function':
                                    aCheck = _fCheckFactory_TypeOf( theDefendedFunction,
                                        theParameterName, theConstraintIndex, aPredicate, 'function');
                                    if( aCheck) {
                                        theCheckFunctions.push( aCheck);
                                    }
                                    break;


                                case 'typeOf':
                                    if( aPredicate.length < 2) {
                                        anError = new m_Error.Error('ParameterConstraintError', {
                                            module: _displayName, function: _pCheckConstraintInto,
                                            constraintKind: 'typeOf', constraintError: 'MissingTypeOf',
                                            with: [theConstraint, aPredicateIndex]
                                        });
                                        if( cErrorOnConstraintSyntaxFailure) {
                                            throw anError;
                                        }
                                        if( cLogOnConstraintSyntaxFailure) {
                                            m_Log.pLog(  anError.toString());
                                        }
                                    }
                                    else {
                                        aQualifier = aPredicate[ 1];

                                        aCheck = _fCheckFactory_TypeOf( theDefendedFunction,
                                            theParameterName, theConstraintIndex, aPredicate, aQualifier);
                                        if( aCheck) {
                                            theCheckFunctions.push( aCheck);
                                        }
                                    }
                                    break;


                                case 'Type':
                                    if( aPredicate.length < 2) {
                                        anError = new m_Error.Error('ParameterConstraintError', {
                                            module: _displayName, function: _pCheckConstraintInto,
                                            constraintKind: 'Type', constraintError: 'MissingType',
                                            with: [theConstraint, aPredicateIndex]
                                        });
                                        if( cErrorOnConstraintSyntaxFailure) {
                                            throw anError;
                                        }
                                        if( cLogOnConstraintSyntaxFailure) {
                                            m_Log.pLog(  anError.toString());
                                        }
                                    }
                                    else {
                                        aQualifier = aPredicate[ 1];

                                        aCheck = _fCheckFactory_Type( theDefendedFunction,
                                            theParameterName, theConstraintIndex, aPredicate, aQualifier);
                                        if( aCheck) {
                                            theCheckFunctions.push( aCheck);
                                        }
                                    }
                                    break;

                                default:

                            }
                        }

                    }
                }

                return null;
            };









            var _fDefenseForConstraints = function( theDefendedFunction, theConstraints) {
                if( !theConstraints) {
                    return null;
                }

                if( !theConstraints.length) {
                    return null;
                }

                var someCheckFunctions = [];






                var aDefenseFunction = (function() {
                    var someCheckFunctions_here = someCheckFunctions;
                    return function( Note_ArgumentsOfFunctionToBeDefended) {

                        /* Same args as defended function. */
                        var someArguments = Array.prototype.slice.call( arguments);

                        var aNumCheckFunctions = someCheckFunctions_here.length;
                        for ( var aCheckFunctionIndex = 0; aCheckFunctionIndex < aNumCheckFunctions; aCheckFunctionIndex++) {
                            if( someCheckFunctions_here[ aCheckFunctionIndex].apply( this,  someArguments) === true) {
                                return null;
                            }
                        }
                        return null;
                    }
                })();





                var aTrueDefendedFunction = theDefendedFunction;
                if( theDefendedFunction._IsWrapper) {
                    if( theDefendedFunction._WrappedFunction) {
                        aTrueDefendedFunction = theDefendedFunction._WrappedFunction;
                    }
                }

                var someParameters = m_Functionx.fFunctionParameters( aTrueDefendedFunction);




                var anError;

                var someAlreadyCheckedParameterNames = [];

                var aNumConstraints = theConstraints.length;
                for (var aConstraintIndex = 0; aConstraintIndex < aNumConstraints; aConstraintIndex++) {

                    var aConstraint = theConstraints[ aConstraintIndex];
                    if ( aConstraint && aConstraint.length) {

                        var aConstraintParameterName = aConstraint[ 0];

                        if( aConstraintParameterName) {

                            if( aConstraintParameterName === 'theCtxt') {

                                if( !(aConstraintIndex === 0)) {
                                    if( cErrorOnCtxtNotFirst || cLogCtxtNotFirst) {
                                        anError = new m_Error.Error('CtxtParameterNotFirstError', {
                                            module: (theDefendedFunction.hasOwnProperty('_moduleName') ? theDefendedFunction._moduleName : ''),
                                            function: theDefendedFunction, with: [aConstraintParameterName]
                                        });
                                        if( cErrorOnCtxtNotFirst) {
                                            throw anError;
                                        }
                                        if( cLogCtxtNotFirst) {
                                            m_Log.pLog(  anError.toString());
                                        }
                                    }
                                    continue;
                                }

                                _pCheckConstraintInto( theDefendedFunction, aConstraintIndex, someCheckFunctions,
                                    aConstraintParameterName, [['Type', 'Ctxt']]);

                                someAlreadyCheckedParameterNames.push( aConstraintParameterName);

                                continue;
                            }



                            if( someAlreadyCheckedParameterNames.indexOf( aConstraintParameterName) >= 0) {

                                if( cErrorOnDuplicatedConstraintNames || cLogDuplicatedConstraintNames) {

                                    anError = new m_Error.Error('DuplicateParameterNameError', {
                                        module: (theDefendedFunction.hasOwnProperty('_moduleName') ? theDefendedFunction._moduleName : ''),
                                        function: theDefendedFunction, with: [aConstraintParameterName]
                                        });
                                    if( cErrorOnDuplicatedConstraintNames) {
                                        throw anError;
                                    }
                                    if( cLogDuplicatedConstraintNames) {
                                        m_Log.pLog(  anError.toString());
                                    }
                                }

                                continue;
                            }


                            someAlreadyCheckedParameterNames.push( aConstraintParameterName);


                            if( someParameters.indexOf( aConstraintParameterName) < 0) {

                                if( cErrorOnConstrainedAnonymousParameters || cLogConstrainedAnonymousParameters) {

                                    anError = new m_Error.Error('ConstrainedAnonymousParameter', {
                                        module: (theDefendedFunction.hasOwnProperty('_moduleName') ? theDefendedFunction._moduleName : ''),
                                        function: theDefendedFunction, with: [aConstraintParameterName]
                                    });
                                    if( cErrorOnConstrainedAnonymousParameters) {
                                        throw anError;
                                    }
                                    if( cLogConstrainedAnonymousParameters) {
                                        m_Log.pLog(  anError.toString());
                                    }
                                }
                                continue;
                            }




                            var aCheckParameter = _pCheckConstraintInto( theDefendedFunction, aConstraintIndex,
                                someCheckFunctions, aConstraintParameterName, aConstraint.slice(1));

                            if( aCheckParameter) {
                                someCheckFunctions.push( aCheckCtxt);
                            }

                        }
                    }
                }






                var aNumParameters = someParameters.length;
                for (var aParameterIdx = 0; aParameterIdx < aNumParameters; aParameterIdx++) {

                    var aParameter = someParameters[ aParameterIdx];
                    if ( aParameter) {

                        if(  someAlreadyCheckedParameterNames.indexOf( aParameter) < 0) {

                            if( cErrorOnUnconstrainedParameters || cLogUnconstrainedParameters) {

                                anError = new m_Error.Error('UnconstrainedParameterNameError', {
                                    module: (theDefendedFunction.hasOwnProperty('_moduleName') ? theDefendedFunction._moduleName : ''),
                                    function: theDefendedFunction, with: [aParameter]
                                });
                                if( cErrorOnUnconstrainedParameters) {
                                    throw anError;
                                }
                                if( cLogUnconstrainedParameters) {
                                    m_Log.pLog(  anError.toString());
                                }
                            }
                        }

                        if( !( someParameters.indexOf( aParameter) === aParameterIdx)) {

                            if( cErrorOnDuplicatedParameterNames || cLogDuplicatedParameterNames) {

                                anError = new m_Error.Error('DuplicateParameterNameError', {
                                    module: (theDefendedFunction.hasOwnProperty('_moduleName') ? theDefendedFunction._moduleName : ''),
                                    function: theDefendedFunction, with: [aConstraintParameterName]
                                });
                                if( cErrorOnDuplicatedParameterNames) {
                                    throw anError;
                                }
                                if( cLogOnDuplicatedParameterNames) {
                                    m_Log.pLog(  anError.toString());
                                }
                            }
                        }

                    }
                }



                return aDefenseFunction;
            };






            var _fWrapper_RuntimeSwitch = function( theDefenseFunction, theDefendedFunction) {

                return (function() {
                    var aHereDefenseFunction  = theDefenseFunction;
                    var aHereDefendedFunction = theDefendedFunction;

                    return function() {
                        if( aHereDefendedFunction._Defend) {
                            aHereDefenseFunction.apply( this, Array.prototype.slice.call(arguments));
                            return aHereDefendedFunction.apply( this, Array.prototype.slice.call(arguments));
                        }
                        else {
                            return aHereDefendedFunction.apply( this, Array.prototype.slice.call(arguments));
                        }
                    }
                })();
            };








            var _fWrapper_AlwaysDefended = function( theDefenseFunction, theDefendedFunction) {

                return (function() {
                    var aHereDefenseFunction  = theDefenseFunction;
                    var aHereDefendedFunction = theDefendedFunction;

                    return function() {
                        aHereDefenseFunction.apply( this, Array.prototype.slice.call(arguments));
                        return aHereDefendedFunction.apply( this, Array.prototype.slice.call(arguments));
                    }
                })();
            };










            var _DefendWith = function( theFunctionDefense_or_ObjectConstraints) {

                var aDefendedFunction = this;
                if( !cAllowDefense) {
                    return aDefendedFunction;
                }

                if ( !( [ 'function', 'object'].indexOf( typeof theFunctionDefense_or_ObjectConstraints))) {
                    return aDefendedFunction;
                }


                var aDefenseFunction = null;
                if ( typeof theFunctionDefense_or_ObjectConstraints === 'function') {
                    aDefenseFunction =  theFunctionDefense_or_ObjectConstraints;
                }
                else {
                    if ( typeof theFunctionDefense_or_ObjectConstraints === 'object') {
                        aDefenseFunction =  _fDefenseForConstraints( this, theFunctionDefense_or_ObjectConstraints);
                    }
                    aDefendedFunction._v_ArgumentConstraints = theFunctionDefense_or_ObjectConstraints;
                    if( aDefendedFunction._doc) {
                        aDefendedFunction._doc += ('/n/nArgument Constraints:\n' +
                            JSON.stringify( aDefendedFunction._v_ArgumentConstraints));
                    }
                }

                if( !aDefenseFunction) {
                    return aDefendedFunction;
                }

                aDefenseFunction._DefendedFunction = aDefendedFunction;

                aDefendedFunction._IsWrapped= true;
                aDefendedFunction._IsWrappedDefense = true;
                aDefendedFunction._Defend = true;
                aDefendedFunction._DefenseFunction = aDefenseFunction;

                var aWrapperFunction;

                if ( _c_AllowRuntimeDefenseSwitch) {
                    aWrapperFunction = _fWrapper_RuntimeSwitch(  aDefenseFunction, aDefendedFunction);
                }
                else {
                    aWrapperFunction = _fWrapper_AlwaysDefended( aDefenseFunction, aDefendedFunction);
                }

                aWrapperFunction.displayName = 'WapperDefense_on_' + ( aDefendedFunction.hasOwnProperty('displayName') ? aDefendedFunction.displayName : '?');
                aWrapperFunction.innerDisplayName = ( aDefendedFunction.hasOwnProperty('innerDisplayName') ? aDefendedFunction.innerDisplayName : '?');
                aWrapperFunction._moduleName = (aDefendedFunction.hasOwnProperty('_moduleName') ? aDefendedFunction._moduleName : '');

                aWrapperFunction._IsWrapper = true;
                aWrapperFunction._IsWrapperDefense = true;
                aWrapperFunction._WrappedFunction = aDefendedFunction;
                aWrapperFunction._DefenseFunction  = aDefenseFunction;
                aWrapperFunction._DefendedFunction = aDefendedFunction;
                aWrapperFunction._doc = 'WrapperDoc on:\n' + (aDefendedFunction._doc || '');

                aDefenseFunction._WrapperFunction = aWrapperFunction;
                aDefenseFunction._doc = 'WrapperDoc on:\n' + (aDefendedFunction._doc || '');

                aDefendedFunction._WrapperFunction = aWrapperFunction;

                return aWrapperFunction;
            };
            _DefendWith._sDoc('_DefendWith',
            'Wrap the function to defend its execution from being attempted' +
            'when supplied runtime arguments break the declared parameteres contract.');

            _doc+=('\n\n' + _DefendWith._doc);

            Function.prototype._DefendWith = _DefendWith;

        })();
    }










    /* Obsolete: way too imposing


    if(typeof Function.prototype._sDefend === 'undefined') {

        (function() {

            var _sDefend = function(theMustDefendOrDefendedFunction, theDefendedFunctionIfNoArgumentMustDefend) {
                if ( arguments.length < 1) {
                    return this;
                }

                var aMustDefend = cAllowDefense;
                var aDefendedFunction;

                if( arguments.length < 2) {
                    aDefendedFunction = arguments[0];
                }
                else {
                    aMustDefend = aMustDefend && arguments[ 0];
                    aDefendedFunction = arguments[1];
                }

                var aDefenseFunction = this;

                if ( (!_c_AllowRuntimeDefenseSwitch) && (!aMustDefend)) {
                    return aDefendedFunction;
                }


                aDefenseFunction._DefendedFunction = aDefendedFunction;

                aDefendedFunction._IsWrapped= true;
                aDefendedFunction._IsWrappedDefense = true;
                aDefendedFunction._Defend = aMustDefend;
                aDefendedFunction._DefenseFunction = aDefenseFunction;

                var aWrapperFunction;

                if ( !_c_AllowRuntimeDefenseSwitch) {
                    aWrapperFunction = (function() {
                        var aHereDefenseFunction = aDefenseFunction;
                        var aHereDefendedFunction = aDefendedFunction;
                        return function() {
                            var aDefenseResult = aHereDefenseFunction.apply( this, Array.prototype.slice.call(arguments));
                            if (aDefenseResult) {}
                            return aHereDefendedFunction.apply( this, Array.prototype.slice.call(arguments));
                        }
                    })();
                }
                else {
                    aWrapperFunction = (function() {
                        var aHereDefenseFunction = aDefenseFunction;
                        var aHereDefendedFunction = aDefendedFunction;
                        return function() {
                            if( aHereDefendedFunction._Defend) {
                                var aDefenseResult = aHereDefenseFunction.apply( this, Array.prototype.slice.call(arguments));
                                if (aDefenseResult) {}
                            }
                            return aHereDefendedFunction.apply( this, Array.prototype.slice.call(arguments));
                        }
                    })();
                }

                aWrapperFunction.displayName = 'DefenseWapper_on' + ( aDefendedFunction.hasOwnProperty('displayName') ? aDefendedFunction.displayName : '?');
                aWrapperFunction.innerDisplayName = ( aDefendedFunction.hasOwnProperty('innerDisplayName') ? aDefendedFunction.innerDisplayName : '?');
                aWrapperFunction._moduleName = (aDefendedFunction.hasOwnProperty('_moduleName') ? aDefendedFunction._moduleName : '');

                aWrapperFunction._IsWrapper = true;
                aWrapperFunction._IsWrapperDefense = true;
                aWrapperFunction._DefenseFunction  = aDefenseFunction;
                aWrapperFunction._DefendedFunction = aDefendedFunction;
                aWrapperFunction._doc = 'WrapperDoc on:\n' + (aDefendedFunction._doc || '');

                aDefenseFunction._WrappedFunction = aDefendedFunction;
                aDefenseFunction._doc = 'WrapperDoc on:\n' + (aDefendedFunction._doc || '');

                return aWrapperFunction;
            };
            _sDefend._sDoc('_sDefend', 'Wrap the function to check at runtime the supplied arguments against declared parameter constraints.');
            _doc+=('\n\n' + _sDefend._doc);

            Function.prototype._sDefend = _sDefend;

        })();

    }

    */






    _doc+='\n\nModule Functions.';






    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc

    };
    if(aModule) {}  /* To avoid code quality tools from complaining about unused parameter */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Defense')
    }

    return aModule;
};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Defense')
}



if( typeof define === 'function') {

    define(['m_ConstValues', 'm_Functionx', 'm_Instrument', 'm_Log', 'm_Error'],
        function (m_ConstValues, m_Functionx, m_Instrument, m_Log, m_Error) {

            return aM_Defense(m_ConstValues, m_Functionx, m_Instrument, m_Log, m_Error);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Defense.displayName]=aM_Defense(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Error']
        );
    }
    else {
        ChoirJS_Module_Defense = aM_Defense(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Log,
            ChoirJS_Module_Error
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Defense')
}
