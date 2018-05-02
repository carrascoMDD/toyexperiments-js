/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ImageFilter_Identical')
}



var aM_ImageFilter_Identical = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
                                m_Identifiable, m_Instrument, m_Trace, m_Log, m_ImageFilter_General) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ImageFilter_Identical')
    }

    if( m_Log) {}


    var _displayName = 'm_ImageFilter_Identical';

    var _doc = _displayName +' module. Functions to filter image, in this case producing exactly the same image.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';







    _doc+=('\n\nPrototype and Factory for ImageFilter:');


    var _prot_ImageFilter_Identical = (function() {

        var aPrototype = new m_ImageFilter_General.Subprot_ImageFilter_General();

        aPrototype._v_Type = 'ImageFilter_Identical';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];





        aPrototype._pOpenImageFilter =  (function( theCtxt, theConversionKind,
                                                   theConversionSuccessHandler, theConversionFailureHandler,
                                                   theConversionConfiguration) {

            this._v_ParentProt_ImageFilter_Identical._pOpenImageFilter.apply( this, [ theCtxt,
                theConversionKind,
                theConversionSuccessHandler, theConversionFailureHandler, theConversionConfiguration]
            );

            this._v_Type = 'ImageFilter_Identical';

            return null;

        })._sName( aPrototype._ModuleName, '_pOpenImageFilter')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theConversionKind',           ['string']],
            [ 'theConversionSuccessHandler', ['function']],
            [ 'theConversionFailureHandler', ['function']],
            [ 'theConversionConfiguration',     ['typeof', 'object', 'string', 'optional']]
        ]);
        aPrototype._privateMembers.push( aPrototype._pOpenImageFilter);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pOpenImageFilter._sDesc(
            'Open an Image Filter ready to receive and process ConversionRequest instances to convert an image resource.');

            aPrototype._doc+=('\n\n' + aPrototype._pOpenImageFilter._doc);
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
        _prot_ImageFilter_Identical.displayName='Prototype _prot_ImageFilter_Identical';
        _privateMembers.push(_prot_ImageFilter_Identical);
        _doc+=('\n\n' + _prot_ImageFilter_Identical._doc);
    }






    var f_Constructor_ImageFilter = (function( theCtxt, theConversionKind,
                                               theConversionSuccessHandler, theConversionFailureHandler,
                                               theConversionConfiguration) {

        this._v_Prot_ImageFilter_Identical = _prot_ImageFilter_Identical;
        this._v_Prot = this._v_Prot_ImageFilter_Identical;
        this._v_ParentProt_ImageFilter_Identical = this._v_Prot_ImageFilter_Identical._v_Prot_ImageFilter_General;

        this._v_Type = 'ImageFilter_Identical';

        this._v_UID = null;

        this._v_ConversionKind  = null;
        this._v_ConversionConfiguration  = null;
        this._v_ConversionSuccessHandler = null;
        this._v_ConversionFailureHandler = null;

        this._pOpenImageFilter( theCtxt, theConversionKind, theConversionSuccessHandler, theConversionFailureHandler,
            theConversionConfiguration);

    })._sName( _displayName, 'f_Constructor_ImageFilter')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theConversionKind',           ['string']],
        [ 'theConversionSuccessHandler', ['function']],
        [ 'theConversionFailureHandler', ['function']],
        [ 'theConversionConfiguration',  ['typeof', 'object', 'string', 'optional']]
    ]);
    f_Constructor_ImageFilter.prototype = _prot_ImageFilter_Identical;
    _publicMembers.push(f_Constructor_ImageFilter);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_ImageFilter._sDesc('Factory to create new instances of ImageFilter.');

        _doc+=('\n\n' + f_Constructor_ImageFilter._doc);
    }








    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        f_Constructor_ImageFilter:  f_Constructor_ImageFilter
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ImageFilter_Identical')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error',
        'm_Identifiable', 'm_Instrument', 'm_Trace', 'm_Log', 'm_ImageFilter_General'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
        m_Identifiable, m_Instrument, m_Trace, m_Log, m_ImageFilter_General) {

        return aM_ImageFilter_Identical(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
            m_Identifiable, m_Instrument, m_Trace, m_Log, m_ImageFilter_General);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ImageFilter.displayName]=aM_ImageFilter_Identical(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_ImageFilter_General']
        );
    }
    else {
        ChoirJS_Module_ImageFilter_Identical= aM_ImageFilter_Identical(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_ImageFilter_General
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ImageFilter_Identical')
}

