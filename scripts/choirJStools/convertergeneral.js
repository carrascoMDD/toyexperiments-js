/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ConverterGeneral')
}



var aM_ConverterGeneral = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
                              m_Identifiable, m_Instrument, m_Trace, m_Log) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ConverterGeneral')
    }

    if( m_Log) {}


    var _displayName = 'm_ConverterGeneral';

    var _doc = _displayName +' module. General functions to convert resources.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';






    _doc+=('\n\nPrototype singleton and Factory for ConverterGeneral:');


    var _prot_ConverterGeneral = (function() {

        var aPrototype = {};

        aPrototype._v_Type = 'ConverterGeneral';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];





        aPrototype._pOpenConverterGeneral =  (function( theCtxt, theConversionKind,
                                                        theConversionSuccessHandler, theConversionFailureHandler,
                                                        theConversionConfiguration) {

            this._v_UID = m_Identifiable.fNewUID();

            this._v_ConversionKind = theConversionKind;

            this._v_ConversionSuccessHandler = theConversionSuccessHandler;
            this._v_ConversionFailureHandler = theConversionFailureHandler;
            if( this._v_ConversionFailureHandler) {} /* CQT */
            this._v_ConversionConfiguration  = theConversionConfiguration;
            if( this._v_ConversionConfiguration) {} /* CQT */

            return null;

        })._sName( aPrototype._ModuleName, '_pOpenConverterGeneral')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theConversionKind',           ['string']],
            [ 'theConversionSuccessHandler', ['function']],
            [ 'theConversionFailureHandler', ['function']],
            [ 'theConversionConfiguration',  ['typeof', 'object', 'string', 'optional']]
        ]);
        aPrototype._privateMembers.push( aPrototype._pOpenConverterGeneral);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pOpenConverterGeneral._sDesc(
            'Open a Converter ready to receive and process ConversionRequest instances to convert a resource.');

            aPrototype._doc+=('\n\n' + aPrototype._pOpenConverterGeneral._doc);
        }








        aPrototype.pCloseConverter =  (function( theCtxt) {
            if( theCtxt) {} /* CQT */
            return null;

        })._sName( aPrototype._ModuleName, 'pCloseConverter')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pCloseConverter._sDesc(
            'Release any resources reserved for this converter');

            aPrototype._doc+=('\n\n' + aPrototype.pCloseConverter._doc);
        }





        aPrototype.pConvert =  (function( theCtxt, theConversionRequest) {
            if( theCtxt) {} /* CQT */

            theConversionRequest._v_ResultResource = theConversionRequest._v_Resource;

            if( this._v_ConversionSuccessHandler) {
                this._v_ConversionSuccessHandler( theCtxt, theConversionRequest)
            }
            return null;

        })._sName( aPrototype._ModuleName, 'pConvert')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt'],
                [ 'theConversionRequest', ['object']]
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pConvert._sDesc(
            'Perform the conversion on the resource. ' +
            'This is a void conversion that just returns the exact same resource supplied to be converted.');

            aPrototype._doc+=('\n\n' + aPrototype.pConvert._doc);
        }







        return aPrototype;
    })();
    if(m_Instrument.cDocFuncs) {
        _prot_ConverterGeneral.displayName='Prototype _prot_ConverterGeneral';
        _privateMembers.push(_prot_ConverterGeneral);
       _doc+=('\n\n' + _prot_ConverterGeneral._doc);
    }








    var Subprot_ConverterGeneral = (function() {

        this._v_Prot_ConverterGeneral = _prot_ConverterGeneral;
        this._v_Prot = this._v_Prot_ConverterGeneral;

        this._v_Type = 'ConverterGeneral';

        this._v_UID = null;

        this._v_ConversionKind  = null;
        this._v_ConversionConfiguration  = null;
        this._v_ConversionSuccessHandler = null;
        this._v_ConversionFailureHandler = null;

    })._sName( _displayName, 'Subprot_ConverterGeneral')._sTrace(_cTr);
    Subprot_ConverterGeneral.prototype = _prot_ConverterGeneral;
    _publicMembers.push(Subprot_ConverterGeneral);
    if(m_Instrument.cDocFuncs) {
        Subprot_ConverterGeneral._sDesc('Factory to create new instances of ConverterGeneral to be used as more specific prototypes.');

        _doc+=('\n\n' + Subprot_ConverterGeneral._doc);
    }








    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        Subprot_ConverterGeneral:  Subprot_ConverterGeneral
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ConverterGeneral')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error',
        'm_Identifiable', 'm_Instrument', 'm_Trace', 'm_Log'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
        m_Identifiable, m_Instrument, m_Trace, m_Log) {

            return aM_ConverterGeneral(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
                m_Identifiable, m_Instrument, m_Trace, m_Log);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ConverterGeneral.displayName]=aM_ConverterGeneral(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log']
        );
    }
    else {
        ChoirJS_Module_ConverterGeneral= aM_ConverterGeneral(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ConverterGeneral')
}

