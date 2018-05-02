/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ImageFilter_General')
}



var aM_ImageFilter_General = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
                                m_Identifiable, m_Instrument, m_Trace, m_Log, m_ConverterGeneral) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ImageFilter_General')
    }

    if( m_Log) {}


    var _displayName = 'm_ImageFilter_General';

    var _doc = _displayName +' module. General functions to convert image resources.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';







    _doc+=('\n\nPrototype and Factory for ImageFilter_General:');


    var _prot_ImageFilter_General = (function() {

        var aPrototype = new m_ConverterGeneral.Subprot_ConverterGeneral();

        aPrototype._v_Type = 'ImageFilter_General';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];





        aPrototype._pOpenImageFilter =  (function( theCtxt, theConversionKind,
                                                   theConversionSuccessHandler, theConversionFailureHandler,
                                                   theConversionConfiguration) {

            this._v_ParentProt_ImageFilter_General._pOpenConverterGeneral.apply( this, [ theCtxt, theConversionKind,
                theConversionSuccessHandler, theConversionFailureHandler, theConversionConfiguration]
            );

            this._v_Type = 'ImageFilter_General';

            return null;

        })._sName( aPrototype._ModuleName, '_pOpenImageFilter')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theConversionKind',           ['string']],
            [ 'theConversionSuccessHandler', ['function']],
            [ 'theConversionFailureHandler', ['function']],
            [ 'theConversionConfiguration',  ['typeof', 'object', 'string', 'optional']]
        ]);
        aPrototype._privateMembers.push( aPrototype._pOpenImageFilter);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pOpenImageFilter._sDesc(
            'Open an Image Filter ready to receive and process ConversionRequest instances to convert an image resource.');

            aPrototype._doc+=('\n\n' + aPrototype._pOpenImageFilter._doc);
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
            if( theConversionRequest) {} /* CQT */

            throw new m_Error.Error('NotImplementedError', {module: aPrototype._ModuleName, function: aPrototype.pConvert});

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








        aPrototype.fGetOffscreenCanvas =  (function( theWidth, theHeight) {

            var aCanvas = document.createElement('canvas');

            aCanvas.width = theWidth;
            aCanvas.height = theHeight;

            return aCanvas;

        })._sName( aPrototype._ModuleName, 'fGetOffscreenCanvas')._sTrace(_cTr)._DefendWith([
                [ 'theWidth',  ['number']],
                [ 'theHeight', ['number']]
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fGetOffscreenCanvas._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype.fGetOffscreenCanvas._doc);
        }









        aPrototype.fReleaseOffscreenCanvas =  (function( theCanvas) {
            if( theCanvas) {} /* CQT */

            return null;

        })._sName( aPrototype._ModuleName, 'fReleaseOffscreenCanvas')._sTrace(_cTr)._DefendWith([
            [ 'theCanvas',  ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fReleaseOffscreenCanvas._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype.fReleaseOffscreenCanvas._doc);
        }







        aPrototype.fGetAuxCanvas =  (function() {

            return document.createElement('canvas');

        })._sName( aPrototype._ModuleName, 'fGetAuxCanvas')._sTrace(_cTr);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fGetAuxCanvas._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype.fGetAuxCanvas._doc);
        }








        return aPrototype;
    })();
    if(m_Instrument.cDocFuncs) {
        _prot_ImageFilter_General.displayName='Prototype _prot_ImageFilter_General';
        _privateMembers.push(_prot_ImageFilter_General);
        _doc+=('\n\n' + _prot_ImageFilter_General._doc);
    }






    var Subprot_ImageFilter_General = (function() {

        this._v_Prot_ImageFilter_General = _prot_ImageFilter_General;
        this._v_Prot = this._v_Prot_ImageFilter_General;
        this._v_ParentProt_ImageFilter_General = this._v_Prot_ImageFilter_General._v_Prot_ConverterGeneral;

        this._v_Type = 'ImageFilter_General';

        this._v_UID = null;

        this._v_ConversionKind  = null;
        this._v_ConversionConfiguration  = null;
        this._v_ConversionSuccessHandler = null;
        this._v_ConversionFailureHandler = null;


    })._sName( _displayName, 'Subprot_ImageFilter_General')._sTrace(_cTr);
    Subprot_ImageFilter_General.prototype = _prot_ImageFilter_General;
    _publicMembers.push(Subprot_ImageFilter_General);
    if(m_Instrument.cDocFuncs) {
        Subprot_ImageFilter_General._sDesc('Factory to create new instances of ImageFilter.');

        _doc+=('\n\n' + Subprot_ImageFilter_General._doc);
    }








    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        Subprot_ImageFilter_General:  Subprot_ImageFilter_General
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ImageFilter_General')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error',
        'm_Identifiable', 'm_Instrument', 'm_Trace', 'm_Log', 'm_ConverterGeneral'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
        m_Identifiable, m_Instrument, m_Trace, m_Log, m_ConverterGeneral) {

        return aM_ImageFilter_General(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
            m_Identifiable, m_Instrument, m_Trace, m_Log, m_ConverterGeneral);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ImageFilter.displayName]=aM_ImageFilter_General(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_ConverterGeneral']
        );
    }
    else {
        ChoirJS_Module_ImageFilter_General= aM_ImageFilter_General(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_ConverterGeneral
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ImageFilter_General')
}

