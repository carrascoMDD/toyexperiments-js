/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ImageFilter_Convolution')
}



var aM_ImageFilter_Convolution = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
                                m_Identifiable, m_Instrument, m_Trace, m_Log, m_ImageFilter_General, m_Convolutions) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ImageFilter_Convolution')
    }

    if( m_Log) {}


    var _displayName = 'm_ImageFilter_Convolution';

    var _doc = _displayName +' module. Functions to filter image, in this case with convolution algorithm.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';







    _doc+=('\n\nPrototype and Factory for ImageFilter:');


    var _prot_ImageFilter = (function() {

        var aPrototype = new m_ImageFilter_General.Subprot_ImageFilter_General();

        aPrototype._v_Type = 'ImageFilter_Convolution';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];





        aPrototype._pOpenImageFilter =  (function( theCtxt, theConversionKind,
                                                   theConversionSuccessHandler, theConversionFailureHandler,
                                                   theConversionConfiguration) {

            this._v_ParentProt_ImageFilter_Convolution._pOpenImageFilter.apply( this, [ theCtxt, theConversionKind,
                theConversionSuccessHandler, theConversionFailureHandler, theConversionConfiguration]
            );

            this._v_Type = 'ImageFilter_Convolution';

            this._v_Convolutions = new m_Convolutions.f_Constructor_Convolutions( theCtxt, this);

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

            if( this._v_Convolutions) {

                var anImageData = null;
                switch( theConversionRequest._v_ConversionKind) {

                    case 'convolution.grayscale':
                        anImageData = this._v_Convolutions.fRun_Grayscale( theCtxt,
                            theConversionRequest._v_Resource, theConversionRequest._v_ConversionArgs);
                        break;

                    case 'convolution.brightness':
                        anImageData = this._v_Convolutions.fRun_Brightness( theCtxt, 
                            theConversionRequest._v_Resource, theConversionRequest._v_ConversionArgs);
                        break;

                    case 'convolution.threshold':
                        anImageData = this._v_Convolutions.fRun_Threshold( theCtxt, 
                            theConversionRequest._v_Resource, theConversionRequest._v_ConversionArgs);
                        break;

                    case 'convolution.sharpen':
                        anImageData = this._v_Convolutions.fRun_Sharpen( theCtxt, 
                            theConversionRequest._v_Resource, theConversionRequest._v_ConversionArgs);
                        break;

                    case 'convolution.blur':
                        anImageData = this._v_Convolutions.fRun_Blur( theCtxt, 
                            theConversionRequest._v_Resource, theConversionRequest._v_ConversionArgs);
                        break;

                    case 'convolution.sobel':
                        anImageData = this._v_Convolutions.fRun_Sobel( theCtxt, 
                            theConversionRequest._v_Resource, theConversionRequest._v_ConversionArgs);
                        break;

                    case 'convolution.custom':
                        anImageData = this._v_Convolutions.fRun_Custom( theCtxt, 
                            theConversionRequest._v_Resource, theConversionRequest._v_ConversionArgs);
                        break;

                    default:
                        anImageData = theConversionRequest._v_Resource;

                }
            }

            theConversionRequest._v_ResultResource = anImageData;

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
        _prot_ImageFilter.displayName='Prototype _prot_ImageFilter';
        _privateMembers.push(_prot_ImageFilter);
        _doc+=('\n\n' + _prot_ImageFilter._doc);
    }






    var f_Constructor_ImageFilter = (function( theCtxt, theConversionKind,
                                               theConversionSuccessHandler, theConversionFailureHandler,
                                               theConversionConfiguration) {

        this._v_Prot_ImageFilter_Convolution = _prot_ImageFilter;
        this._v_Prot = this._v_Prot_ImageFilter_Convolution;
        this._v_ParentProt_ImageFilter_Convolution = this._v_Prot_ImageFilter_Convolution._v_Prot_ImageFilter_General;

        this._v_Type = 'ImageFilter_Convolution';

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
    f_Constructor_ImageFilter.prototype = _prot_ImageFilter;
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
    fChoirJS_LogModuleLoads('REGISTER m_ImageFilter_Convolution')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error',
        'm_Identifiable', 'm_Instrument', 'm_Trace', 'm_Log', 'm_ImageFilter_General', 'm_Convolutions'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
        m_Identifiable, m_Instrument, m_Trace, m_Log, m_ImageFilter_General, m_Convolutions) {

        return aM_ImageFilter_Convolution(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
            m_Identifiable, m_Instrument, m_Trace, m_Log, m_ImageFilter_General, m_Convolutions);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ImageFilter.displayName]=aM_ImageFilter_Convolution(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_ImageFilter_General'],
            gChoirJS_Modules['m_Convolutions']
        );
    }
    else {
        ChoirJS_Module_ImageFilter_Convolution= aM_ImageFilter_Convolution(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_ImageFilter_General,
            ChoirJS_Module_Convolutions
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ImageFilter_Convolution')
}

