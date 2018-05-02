/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_MotionFilter')
}



var aM_MotionFilter = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
                              m_Identifiable, m_Instrument, m_Trace, m_Log, m_Watcher, m_Geometry,
                              m_FrameScheduler, m_ResConverter, m_MotionGeneral,
                              m_ImageFilter_Identical, m_ImageFilter_Convolution) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_MotionFilter')
    }

    if( m_Log) {}


    var _displayName = 'm_MotionFilter';

    var _doc = _displayName +' module. Functions to visualize received Changes in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';


    var _c_ConversionKind = m_ConstValues_Tools.fConst( _displayName, '_c_ConversionKind', 'xx');
    _doc+=('\n\n' +  JSON.stringify({_c_ConversionKind: _c_ConversionKind}, null, 4));
    _doc+='The conversion filter to apply to MotionFilter image resources.';








    _doc+=('\n\nPrototype and Factory for MotionFilter:');


    var _prot_MotionFilter = (function() {

        var aPrototype = new m_MotionGeneral.Subprot_MotionGeneral();

        aPrototype._v_Type = 'MotionFilter';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];







        aPrototype._pOpenMotionFilter =  (function( theCtxt, theMotionPics, theConversionKind, theConversionArgs,
                                                  theCanvasOrId, theWidth, theHeight, theLoadJustFirst) {

            this._v_ParentProt_MotionFilter._pOpenMotionGeneral.apply( this,
                [theCtxt, theCanvasOrId, theWidth, theHeight, theLoadJustFirst]);

            this._v_Type = 'MotionFilter';


            this._v_MotionPics  = theMotionPics;

            this._v_ConversionKind = theConversionKind ? theConversionKind : _c_ConversionKind;
            this._v_ConversionArgs = theConversionArgs;


            this._v_LoadImagesQueue = null;
            this._v_NumImagesToLoad = 0;
            this._v_ImagesLoadCompleted = false;

            this._v_ImagesConversionsPending  = [ ];
            this._v_ImagesConversionsReceived = [ ];


            var aMotionFilter = this;

            this._v_LoadImagesQueue = m_ResConverter.fOpenConvertQueue( theCtxt,

                (function() {
                    var aMotionFilter_here = aMotionFilter;
                    return (function( theCtxt_arg, theConversionKind_arg) {
                        return aMotionFilter_here._fOpenConverterOfKind.apply( aMotionFilter_here, [ theCtxt_arg, theConversionKind_arg]);
                    });
                })(),
                false /* true for initially inactive ConvertQueue */
            );
            this._v_LoadImagesQueue._v_Comment = 'LoadImage from MotionPics from ' +
                ( theMotionPics._v_LoadImagesListQueue ? ( theMotionPics._v_LoadImagesListQueue._v_Comment || '') : '');




            var aNumImages = theMotionPics._v_Images.length;
            for (var anImageIdx = 0; anImageIdx < aNumImages; anImageIdx++) {
                var anImage = theMotionPics._v_Images[ anImageIdx];
                if ( anImage) {

                    var aDeactivateAfter = this._v_LoadJustFirst && ( anImageIdx === 0);

                    var aConvertRequest = this._v_LoadImagesQueue.fRequestConversion( theCtxt, anImage, aDeactivateAfter);
                    if( aConvertRequest) {

                        aConvertRequest._v_ImageIndex = anImageIdx;

                        this._v_ImagesConversionsPending.push( aConvertRequest);

                        this._v_NumImagesToLoad += 1;
                    }
                }
            }

            this._v_AdditionalImagesInterest = theMotionPics.fRegisterAdditionalImagesInterest( theCtxt,
                (function() {
                    var aMotionFilter_here = aMotionFilter;
                    return (function( theCtxt_arg, theMotionPics_arg, theImage_arg) {
                        aPrototype._pHandleAdditionalImages.apply( aMotionFilter_here,
                            [ theCtxt_arg, theMotionPics_arg, theImage_arg]);
                    });
                })()
            );
            if( this._v_AdditionalImagesInterest) {} /* CQT */

            return null;

        })._sName( aPrototype._ModuleName, '_pOpenMotionFilter')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theMotionPics',     ['Type', 'MotionPics']],
            [ 'theConversionKind', ['string', 'optional']],
            [ 'theConversionArgs', ['object', 'optional']],
            [ 'theCanvasOrId',     ['typeof', 'object', 'string', 'optional']],
            [ 'theWidth',          ['number', 'optional']],
            [ 'theHeight',         ['number', 'optional']],
            [ 'theLoadJustFirst',  ['boolean', 'optional']]
        ]);
        aPrototype._privateMembers.push( aPrototype._pOpenMotionFilter);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pOpenMotionFilter._sDesc(
            'Open a Canvas and 2D context for rendering with this MotionFilter, and register interest in receiving Changes.');

            aPrototype._doc+=('\n\n' + aPrototype._pOpenMotionFilter._doc);
        }









        aPrototype._pHandleAdditionalImages = (function( theCtxt, theMotionPics, theImage)  {
            if( !theImage) {
                return null;
            }

            var aDeactivateAfter = this._v_LoadJustFirst && !this._v_NumImagesToLoad; /* ACV OJO TODO remove to avoid stopping */

            var aConvertRequest = this._v_LoadImagesQueue.fNewConversion( theCtxt,
                theImage, this._v_ConversionKind, this._v_ConversionArgs, aDeactivateAfter);

            aConvertRequest._v_MotionFilter = this;

            if( aConvertRequest) {

                aConvertRequest._v_ImageIndex = this._v_NumImagesToLoad;
                this._v_NumImagesToLoad += 1;
                this._v_ImagesConversionsPending.push( aConvertRequest);

                this._pActivateQueueIfNeeded( theCtxt);
                this._v_LoadImagesQueue.pRequestConversion( theCtxt, aConvertRequest);


                m_ResConverter.pProcessNextConversionRequest( theCtxt);

                /*
                 if( this._v_ImagesConversionsPending.length === 1) {
                     this._pActivateQueueIfNeeded( theCtxt);
                 }

                this._pActivateQueueIfNeeded( theCtxt);
                 */
            }


            return null;

        })._sName( aPrototype._ModuleName, '_pHandleAdditionalImages')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt'],
                [ 'theMotionPics', ['Type', 'MotionPics']],
                [ 'theImage',      ['object']]
            ]);
        aPrototype._privateMembers.push( aPrototype._pHandleAdditionalImages);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pHandleAdditionalImages._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype._pHandleAdditionalImages._doc);
        }












        aPrototype._fOpenConverterOfKind = (function( theCtxt, theConversionKind)  {
            if( !theConversionKind) {
                return null;
            }

            var aConstructor = null;
            if ( theConversionKind === 'identical') {
                aConstructor = m_ImageFilter_Identical.f_Constructor_ImageFilter;
            }
            else {
                if ( theConversionKind.indexOf( 'convolution.') === 0) {
                    aConstructor = m_ImageFilter_Convolution.f_Constructor_ImageFilter;
                }
            }

            if ( !aConstructor) {
                aConstructor = m_ImageFilter_Identical.f_Constructor_ImageFilter;
            }


            return new aConstructor( theCtxt,
                theConversionKind,
                (function() {
                    return (function( theCtxt_arg, theConvertRequest_arg) {
                        theConvertRequest_arg._v_MotionFilter._fHandler_ImageConversionReceived.apply(
                            theConvertRequest_arg._v_MotionFilter, [ theCtxt_arg, theConvertRequest_arg]);
                    });
                })(),
                (function() {
                    return (function( theCtxt_arg, theConvertRequest_arg) {
                        theConvertRequest_arg._v_MotionFilter._fHandler_ImageConversionFailed.apply(
                            theConvertRequest_arg._v_MotionFilter, [ theCtxt_arg, theConvertRequest_arg]);
                    });
                })(),
                { filters: [ theConversionKind]}
            );

        })._sName( aPrototype._ModuleName, '_fOpenConverterOfKind')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theConversionKind', ['string']]
        ]);
        aPrototype._privateMembers.push( aPrototype._fOpenConverterOfKind);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fOpenConverterOfKind._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype._fOpenConverterOfKind._doc);
        }















        aPrototype._fHandler_ImageConversionReceived = (function( theCtxt, theConvertRequest)  {

            if ( ! (theConvertRequest._v_MotionFilter === this)) {
                var x = 1; if(x) {}
            }

            this._pImageResponseReceived( theCtxt, theConvertRequest);

            if( !theConvertRequest._v_ResultResource) {
                return null;
            }

            theConvertRequest._v_Converted = true;
            theConvertRequest._v_ImageLoaded = true;
            theConvertRequest._v_ResultResource._v_Index = theConvertRequest._v_ImageIndex;

            this._v_Images.push( theConvertRequest._v_ResultResource);

            this._pSortImages( theCtxt);

            this._v_ButtonsChanged = true;
            this._v_ForceDisplayBar = true;

            if( theConvertRequest._v_DeactivateAfter) {
                this._v_PauseAfterNextFrame = true;
            }

            theConvertRequest.pSucessfulResponse( theCtxt);

            return null;

        })._sName( aPrototype._ModuleName, '_fHandler_ImageConversionReceived')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt'],
                [ 'theConvertRequest', ['Type', 'ServerRequest']]
            ]);
        aPrototype._privateMembers.push( aPrototype._fHandler_ImageConversionReceived);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fHandler_ImageConversionReceived._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype._fHandler_ImageConversionReceived._doc);
        }









        aPrototype._pSortImages = (function( theCtxt)  {
            if( theCtxt) {} /* CQT */

            if( this._v_Images.length < 2) {
                return null;
            }
            this._v_Images.sort( function( theImageOne, theImageTwo) {
                if( theImageOne._v_Index === theImageTwo._v_Index) {
                    return 0;
                }

                if( theImageOne._v_Index < theImageTwo._v_Index) {
                    return -1;
                }

                return 1;
            });

            return null;

        })._sName( aPrototype._ModuleName, '_pSortImages')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt']
            ]);
        aPrototype._privateMembers.push( aPrototype._pSortImages);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pSortImages._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype._pSortImages._doc);
        }










        aPrototype._fHandler_ImageConversionFailed = (function( theCtxt, theConvertRequest)  {

            theConvertRequest.pFailureResponse( theCtxt);

            this._pImageResponseReceived( theCtxt, theConvertRequest);

        })._sName( aPrototype._ModuleName, '_fHandler_ImageConversionFailed')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theConvertRequest', ['Type', 'ServerRequest']]
        ]);
        aPrototype._privateMembers.push( aPrototype._fHandler_ImageConversionFailed);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fHandler_ImageConversionFailed._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype._fHandler_ImageConversionFailed._doc);
        }









        aPrototype._pImageResponseReceived = (function( theCtxt, theConvertRequest)  {

            var aServerRequestIndex = this._v_ImagesConversionsPending.indexOf( theConvertRequest);
            if ( aServerRequestIndex < 0) {
                return null;
            }

            this._v_ImagesConversionsPending = this._v_ImagesConversionsPending.slice( 0, aServerRequestIndex).
                concat( this._v_ImagesConversionsPending.slice( aServerRequestIndex + 1));

            if( !this._v_ImagesConversionsPending.length) {
                /* this._v_ImagesLoadCompleted = true;
                 this._v_LoadImagesQueue.pDeactivate( theCtxt); */
            }

            this._v_ImagesConversionsReceived.push( theConvertRequest);

            return null;

        })._sName( aPrototype._ModuleName, '_pImageResponseReceived')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt'],
                [ 'theConvertRequest', ['Type', 'ServerRequest']]
            ]);
        aPrototype._privateMembers.push( aPrototype._pImageResponseReceived);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pImageResponseReceived._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype._pImageResponseReceived._doc);
        }






        aPrototype._pActivateQueueIfNeeded = (function ( theCtxt) {

            if( this._v_LoadImagesQueue.fNeedsReactivation( theCtxt)) {
                this._v_LoadImagesQueue.pActivate( theCtxt);
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pActivateQueueIfNeeded')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt']
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pActivateQueueIfNeeded._sDesc( '');

            aPrototype._doc+=('\n\n' + aPrototype._pActivateQueueIfNeeded._doc);
        }








        return aPrototype;
    })();
    if(m_Instrument.cDocFuncs) {
        _prot_MotionFilter.displayName='Prototype _prot_MotionFilter';
        _privateMembers.push(_prot_MotionFilter);
        _doc+=('\n\n' + _prot_MotionFilter._doc);
    }







    var f_Constructor_MotionFilter = (function( theCtxt, theMotionPics, theConversionKind, theConversionArgs,
                                              theCanvasOrId, theWidth, theHeight, theLoadJustFirst) {

        this._v_Prot_MotionFilter = _prot_MotionFilter;
        this._v_Prot = this._v_Prot_MotionFilter;
        this._v_ParentProt_MotionFilter = this._v_Prot_MotionFilter._v_Prot_MotionGeneral;



        this._v_Type = 'MotionFilter';

        this._v_UID = null;

        this._v_ConversionKind = null;

        this._v_LoadJustFirst = null;
        this._v_PauseAfterNextFrame = false;

        this._v_Canvas =          null;
        this._v_2DContext =       null;

        this._v_Images = [];


        this._v_Width = null;
        this._v_Height = null;
        this._v_PictsBounds = null;
        this._v_StatusBarBounds = null;
        this._v_ButtonsBounds = null;
        this._v_StatusInfoBounds = null;
        this._v_ButtonBounds_Slower  = null;
        this._v_ButtonBounds_Faster  = null;
        this._v_ButtonBounds_Previous  = null;
        this._v_ButtonBounds_PlayPause = null;
        this._v_ButtonBounds_Next      = null;
        this._v_ButtonClickBounds_Slower  = null;
        this._v_ButtonClickBounds_Faster   = null;
        this._v_ButtonClickBounds_Previous  = null;
        this._v_ButtonClickBounds_PlayPause = null;
        this._v_ButtonClickBounds_Next = null;

        this._v_ButtonsChanged = null;

        this._v_LastPaintedImageIndex = null;
        this._v_ForwardDirection = null;

        this._v_LastPaintedImage = null;

        this._v_NumFramesToSkip = null;
        this._v_SkippedFrames = null;

        this._v_LastPaintStatusBarMillis = null;

        this._v_LastScale = null;

        this._v_StylePaddingLeft= 0;
        this._v_StylePaddingTop= 0;
        this._v_StyleBorderLeft= 0;
        this._v_StyleBorderTop= 0;


        this._v_LoadImagesQueue = null;
        this._v_NumImagesToLoad = null;
        this._v_ImagesLoadCompleted = null;


        this._v_MotionPics  = null;
        if( this._v_MotionPics) {} /* CQT */

        this._v_ImagesConversionsPending  = null;
        this._v_ImagesConversionsReceived = null;
        this._v_LoadImagesQueue              = null;

        this._v_AdditionalImagesInterest = null;

        this._pOpenMotionFilter( theCtxt, theMotionPics, theConversionKind, theConversionArgs,
            theCanvasOrId, theWidth, theHeight, theLoadJustFirst);

    })._sName( _displayName, 'f_Constructor_MotionFilter')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theMotionPics',     ['MotionPics']],
            [ 'theConversionKind', ['string', 'optional']],
            [ 'theConversionArgs', ['object', 'optional']],
            [ 'theCanvasOrId',     ['typeof', 'object', 'string', 'optional']],
            [ 'theWidth',          ['number', 'optional']],
            [ 'theHeight',         ['number', 'optional']],
            [ 'theLoadJustFirst',  ['boolean', 'optional']]
        ]);
    f_Constructor_MotionFilter.prototype = _prot_MotionFilter;
    _publicMembers.push(f_Constructor_MotionFilter);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_MotionFilter._sDesc('Factory to create new instances of MotionFilter.');

        _doc+=('\n\n' + f_Constructor_MotionFilter._doc);
    }








    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        f_Constructor_MotionFilter:  f_Constructor_MotionFilter
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_MotionFilter')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error',
        'm_Identifiable', 'm_Instrument', 'm_Trace', 'm_Log', 'm_Watcher', 'm_Geometry',
        'm_FrameScheduler', 'm_ResConverter', 'm_MotionGeneral',
        'm_ImageFilter_Identical', 'm_ImageFilter_Convolution'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
        m_Identifiable, m_Instrument, m_Trace, m_Log, m_Watcher, m_Geometry,
        m_FrameScheduler, m_ResConverter, m_MotionGeneral,
        m_ImageFilter_Identical, m_ImageFilter_Convolution) {

        return aM_MotionFilter(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
            m_Identifiable, m_Instrument, m_Trace, m_Log, m_Watcher, m_Geometry,
            m_FrameScheduler, m_ResConverter, m_MotionGeneral,
            m_ImageFilter_Identical, m_ImageFilter_Convolution);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_MotionFilter.displayName]=aM_MotionFilter(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Watcher'],
            gChoirJS_Modules['m_Geometry'],
            gChoirJS_Modules['m_FrameScheduler'],
            gChoirJS_Modules['m_ResConverter'],
            gChoirJS_Modules['m_MotionGeneral'],
            gChoirJS_Modules['m_ImageFilter_Identical'],
            gChoirJS_Modules['m_ImageFilter_Convolution']
        );
    }
    else {
        ChoirJS_Module_MotionFilter= aM_MotionFilter(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_Watcher,
            ChoirJS_Module_Geometry,
            ChoirJS_Module_Framescheduler,
            ChoirJS_Module_ResConverter,
            ChoirJS_Module_MotionGeneral,
            ChoirJS_Module_ImageFilter_Identical,
            ChoirJS_Module_ImageFilter_Convolution
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_MotionFilter')
}

