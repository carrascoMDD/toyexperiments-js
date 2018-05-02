/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_MotionPics')
}



var aM_MotionPics = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
                              m_Identifiable, m_Instrument, m_Trace, m_Log, m_Watcher, m_Geometry,
                              m_FrameScheduler, m_ResLoader, m_MotionGeneral) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_MotionPics')
    }

    if( m_Log) {}


    var _displayName = 'm_MotionPics';

    var _doc = _displayName +' module. Functions to visualize received Changes in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';







    _doc+=('\n\nPrototype and Factory for MotionPics:');


    var _prot_MotionPics = (function() {

        var aPrototype = new m_MotionGeneral.Subprot_MotionGeneral();

        aPrototype._v_Type = 'MotionPics';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];


        aPrototype._pOpenMotionPics =  (function( theCtxt, theImagesBaseURL, theImagesListPath,
                                                  theCanvasOrId, theWidth, theHeight,
                                                  theLoadJustFirst, theNumFramesToSkip, theIndexesToLoad) {

            this._v_ImagesBaseURL  = theImagesBaseURL;
            this._v_ImagesListPath = theImagesListPath;
            if( theIndexesToLoad && theIndexesToLoad.length) {
                this._v_IndexesToLoad  = theIndexesToLoad;
            }

            this._v_ParentProt_MotionPics._pOpenMotionGeneral.apply( this,
                [theCtxt, theCanvasOrId, theWidth, theHeight, theLoadJustFirst, theNumFramesToSkip]);

            this._v_Type = 'MotionPics';


            this._v_LoadImagesQueue = null;
            this._v_NumImagesToLoad = 0;
            this._v_ImagesLoadCompleted = false;

            this._v_AdditionalImagesHandlers = [ ];


            this._v_ImagesListServerRequest      = null;
            this._v_ImagesListResponseReceived   = false;
            this._v_ImagesListResponseSuccess    = false;
            if( this._v_ImagesListServerRequest) {} /* CQT */
            if( this._v_ImagesListResponseReceived) {} /* CQT */
            if( this._v_ImagesListResponseSuccess) {} /* CQT */

            this._v_ImagesServerRequestsPending  = [ ];
            this._v_ImagesServerRequestsReceived = [ ];


            var aMotionPics = this;
            this._v_LoadImagesListQueue = m_ResLoader.fOpenLoadQueue( theCtxt,
                (function() {
                    var aMotionPics_here = aMotionPics;
                    return (function( theCtxt_arg, theServerRequest_arg) {
                        aPrototype._fHandler_ImagesListResponseReceived.apply( aMotionPics_here, [ theCtxt_arg, theServerRequest_arg]);
                    });
                })(),
                (function() {
                    var aMotionPics_here = aMotionPics;
                    return (function( theCtxt_arg, theServerRequest_arg) {
                        aPrototype._fHandler_ImagesListRequestFailed.apply( aMotionPics_here, [ theCtxt_arg, theServerRequest_arg]);
                    });
                })(),
                false /* true for initially inactive LoadQueue */
            );
            this._v_LoadImagesListQueue._v_Comment = 'LoadImagesList from ' + this._v_ImagesBaseURL + '/' + this._v_ImagesListPath;


            this._v_LoadImagesQueue = m_ResLoader.fOpenLoadQueue( theCtxt,
                (function() {
                    var aMotionPics_here = aMotionPics;
                    return (function( theCtxt_arg, theServerRequest_arg) {
                        aPrototype._fHandler_ImageResponseReceived.apply( aMotionPics_here, [ theCtxt_arg, theServerRequest_arg]);
                    });
                })(),
                (function() {
                    var aMotionPics_here = aMotionPics;
                    return (function( theCtxt_arg, theServerRequest_arg) {
                        aPrototype._fHandler_ImageRequestFailed.apply( aMotionPics_here, [ theCtxt_arg, theServerRequest_arg]);
                    });
                })(),
                false /* true for initially inactive LoadQueue */
            );
            this._v_LoadImagesQueue._v_Comment = 'LoadImage from ' + this._v_ImagesBaseURL + '/' + this._v_ImagesListPath;



            this._v_ImagesListServerRequest = this._v_LoadImagesListQueue.fRequestURL( theCtxt,
                this._v_ImagesBaseURL + '/' + this._v_ImagesListPath);


            return null;

        })._sName( aPrototype._ModuleName, '_pOpenMotionPics')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theImagesBaseURL',    ['string']],
            [ 'theImagesListPath',   ['string']],
            [ 'theCanvasOrId',       ['typeof', 'object', 'string', 'optional']],
            [ 'theWidth',            ['number', 'optional']],
            [ 'theHeight',           ['number', 'optional']],
            [ 'theLoadJustFirst',    ['boolean', 'optional']],
            [ 'theNumFramesToSkip',  ['number',  'optional']],
            [ 'theIndexesToLoad',    ['object',  'optional']]
        ]);
        aPrototype._privateMembers.push( aPrototype._pOpenMotionPics);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pOpenMotionPics._sDesc(
            'Open a Canvas and 2D context for rendering with this MotionPics, and register interest in receiving Changes.');

            aPrototype._doc+=('\n\n' + aPrototype._pOpenMotionPics._doc);
        }





        aPrototype._fHandler_ImagesListResponseReceived = (function( theCtxt, theServerRequest)  {

            this._v_LoadImagesListQueue.pDeactivate( theCtxt);

            this._v_ImagesListResponseReceived = true;
            this._v_ImagesListResponseSuccess  = true;

            var anImagesListText = theServerRequest._v_Response;
            if( !anImagesListText) {
                return null;
            }

            var allImageNames = anImagesListText.split( '\n');
            var aNumAllImageNames = allImageNames.length;
            if( !aNumAllImageNames) {
                return null;
            }
            var someImageNames = [ ];
            for (var aImageNameIdx = 0; aImageNameIdx < aNumAllImageNames; aImageNameIdx++) {
                var aImageName = allImageNames[ aImageNameIdx];
                if (aImageName && aImageName.length) {
                    someImageNames.push( aImageName);
                }

            }
            var aNumImageNames = someImageNames.length;
            if( !aNumImageNames) {
                return null;
            }


            var someItemIndexes = [ ];
            if( this._v_IndexesToLoad && this._v_IndexesToLoad.length) {
                var aNumItemIndexes = this._v_IndexesToLoad.length;
                for (var anItemIdx = 0; anItemIdx < aNumItemIndexes; anItemIdx++) {
                    var anItemIdxToLoad = this._v_IndexesToLoad[ anItemIdx];
                    if( ( anItemIdxToLoad >= 0) && ( anItemIdxToLoad < aNumImageNames)) {
                        someItemIndexes.push( anItemIdxToLoad);
                    }
                }
            }

            var anImageNameIdx;

            if( !someItemIndexes.length) {
                for ( anImageNameIdx = 0; anImageNameIdx < aNumImageNames; anImageNameIdx++) {
                    someItemIndexes.push( anImageNameIdx);
                }
            }


            var aNumIdxs = someItemIndexes.length;
            if( !aNumIdxs) {
                return null;
            }

            var anAnyImageRequested = false;

            for (var anIdx = 0; anIdx < aNumIdxs; anIdx++) {
                anImageNameIdx = someItemIndexes[ anIdx];
                if( (anImageNameIdx >= 0) && ( anImageNameIdx < aNumImageNames)) {
                    var anImageName = someImageNames[ anImageNameIdx];
                    if (anImageName) {

                        var aDeactivateAfter = this._v_LoadJustFirst && !anAnyImageRequested;

                        anAnyImageRequested = true;

                        var aServerRqst = this._v_LoadImagesQueue.fRequestURL( theCtxt,
                            this._v_ImagesBaseURL + '/' + anImageName, aDeactivateAfter);

                        aServerRqst._v_ImageIndex = anImageNameIdx;

                        if( aServerRqst) {
                            this._v_ImagesServerRequestsPending.push( aServerRqst);

                            this._v_NumImagesToLoad += 1;
                        }
                    }
                }
             }
            
            return null;

        })._sName( aPrototype._ModuleName, '_fHandler_ImagesListResponseReceived')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theServerRequest', ['Type', 'ServerRequest']]
        ]);
        aPrototype._privateMembers.push( aPrototype._fHandler_ImagesListResponseReceived);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fHandler_ImagesListResponseReceived._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype._fHandler_ImagesListResponseReceived._doc);
        }








        aPrototype._fHandler_ImagesListRequestFailed = (function( theCtxt, theServerRequest)  {
            if( theCtxt) {} /* CQT */
            if( theServerRequest) {} /* CQT */

            this._v_LoadImagesListQueue.pDeactivate( theCtxt);

            this._v_ImagesListResponseReceived = true;
            this._v_ImagesListResponseSuccess  = false;

        })._sName( aPrototype._ModuleName, '_fHandler_ImagesListResponseReceived')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theServerRequest', ['Type', 'ServerRequest']]
        ]);
        aPrototype._privateMembers.push( aPrototype._fHandler_ImagesListRequestFailed);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fHandler_ImagesListRequestFailed._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype._fHandler_ImagesListRequestFailed._doc);
        }














        aPrototype._fHandler_ImageResponseReceived = (function( theCtxt, theServerRequest)  {

            this._pImageResponseReceived( theCtxt, theServerRequest);

            if( !( theServerRequest._v_Response && theServerRequest._v_Response && theServerRequest._v_Response.length)) {
                return null;
            }

            theServerRequest._v_ImageLoaded = false;
            theServerRequest._v_Image = new Image();

            var aMotionPics = this;

            theServerRequest._v_Image.onload = (function() {
                var aMotionPics_here = aMotionPics;
                var aServerRequest_here = theServerRequest;
                return (function() {
                    return aMotionPics_here._fHandler_ImageLoaded( aServerRequest_here);
                });
            })();

            theServerRequest._v_Image.src = 'data:resource/jpg;base64,' + theServerRequest._v_Response;

            return null;

        })._sName( aPrototype._ModuleName, '_fHandler_ImageResponseReceived')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theServerRequest', ['Type', 'ServerRequest']]
        ]);
        aPrototype._privateMembers.push( aPrototype._fHandler_ImageResponseReceived);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fHandler_ImageResponseReceived._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype._fHandler_ImageResponseReceived._doc);
        }










        aPrototype._fHandler_ImageLoaded = (function( theServerRequest)  {

            var aCtxt = m_Ctxt.fNewCtxt();

            theServerRequest._v_ImageLoaded = true;
            theServerRequest._v_Image._v_Index = theServerRequest._v_ImageIndex;
            this._v_Images.push( theServerRequest._v_Image);

            this._pSortImages( aCtxt);

            this._v_ButtonsChanged = true;
            this._v_ForceDisplayBar = true;

            if( theServerRequest._v_DeactivateAfter) {
                this._v_PauseAfterNextFrame = true;
            }

            if( this._v_AdditionalImagesHandlers.length) {
                var aNumAdditionalImagesHandlers = this._v_AdditionalImagesHandlers.length;
                for (var aAdditionalImagesHandlerIdx = 0; aAdditionalImagesHandlerIdx < aNumAdditionalImagesHandlers; aAdditionalImagesHandlerIdx++) {
                    var aAdditionalImagesHandler = this._v_AdditionalImagesHandlers[ aAdditionalImagesHandlerIdx];
                    if ( aAdditionalImagesHandler) {
                        aAdditionalImagesHandler( aCtxt, this, theServerRequest._v_Image);
                    }
                }
            }

            return null;

        })._sName( aPrototype._ModuleName, '_fHandler_ImageLoaded')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theServerRequest', ['Type', 'ServerRequest']]
        ]);
        aPrototype._privateMembers.push( aPrototype._fHandler_ImageLoaded);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fHandler_ImageLoaded._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype._fHandler_ImageLoaded._doc);
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










        aPrototype._fHandler_ImageRequestFailed = (function( theCtxt, theServerRequest)  {

            this._pImageResponseReceived( theCtxt, theServerRequest);

        })._sName( aPrototype._ModuleName, '_fHandler_ImageRequestFailed')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theServerRequest', ['Type', 'ServerRequest']]
        ]);
        aPrototype._privateMembers.push( aPrototype._fHandler_ImageRequestFailed);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fHandler_ImageRequestFailed._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype._fHandler_ImageRequestFailed._doc);
        }









        aPrototype._pImageResponseReceived = (function( theCtxt, theServerRequest)  {

            var aServerRequestIndex = this._v_ImagesServerRequestsPending.indexOf( theServerRequest);
            if ( aServerRequestIndex < 0) {
                return null;
            }

            this._v_ImagesServerRequestsPending = this._v_ImagesServerRequestsPending.slice( 0, aServerRequestIndex).
                concat( this._v_ImagesServerRequestsPending.slice( aServerRequestIndex + 1));

            if( !this._v_ImagesServerRequestsPending.length) {
                this._v_ImagesLoadCompleted = true;
                this._v_LoadImagesQueue.pDeactivate( theCtxt);
            }

            this._v_ImagesServerRequestsReceived.push( theServerRequest);

            return null;

        })._sName( aPrototype._ModuleName, '_pImageResponseReceived')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theServerRequest', ['Type', 'ServerRequest']]
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








        aPrototype.fRegisterAdditionalImagesInterest = (function ( theCtxt, theAdditionalImagesHandler) {
            if (!theAdditionalImagesHandler) {
                return null;
            }

            if( this._v_AdditionalImagesHandlers.indexOf( theAdditionalImagesHandler) >= 0) {
                return theAdditionalImagesHandler;
            }

            this._v_AdditionalImagesHandlers.push( theAdditionalImagesHandler);

            return theAdditionalImagesHandler;

        })._sName( aPrototype._ModuleName, 'fRegisterAdditionalImagesInterest')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theAdditionalImagesHandler', 'function']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fRegisterAdditionalImagesInterest._sDesc( '');

            aPrototype._doc+=('\n\n' + aPrototype.fRegisterAdditionalImagesInterest._doc);
        }





        return aPrototype;
    })();
    if(m_Instrument.cDocFuncs) {
        _prot_MotionPics.displayName='Prototype _prot_MotionPics';
        _privateMembers.push(_prot_MotionPics);
       _doc+=('\n\n' + _prot_MotionPics._doc);
    }




    var f_Constructor_MotionPics = (function( theCtxt, theImagesBaseURL, theImagesListPath,
                                              theCanvasOrId, theWidth, theHeight,
                                              theLoadJustFirst, theNumFramesToSkip, theIndexesToLoad) {

        this._v_Prot_MotionPics = _prot_MotionPics;
        this._v_Prot = this._v_Prot_MotionPics;
        this._v_ParentProt_MotionPics = this._v_Prot_MotionPics._v_Prot_MotionGeneral;



        this._v_Type = 'MotionPics';

        this._v_UID = null;

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

        this._v_IndexesToLoad = null;

        this._v_ImagesBaseURL  = null;
        this._v_ImagesListPath = null;

        this._v_ImagesListServerRequest    = null;
        this._v_ImagesListResponseReceived = null;
        this._v_ImagesListResponseSuccess  = null;

        this._v_ImagesServerRequestsPending  = null;
        this._v_ImagesServerRequestsReceived = null;
        this._v_LoadImagesListQueue          = null;

        this._v_AdditionalImagesHandlers = null;

        this._pOpenMotionPics( theCtxt, theImagesBaseURL, theImagesListPath, theCanvasOrId, theWidth, theHeight,
            theLoadJustFirst, theNumFramesToSkip, theIndexesToLoad);

    })._sName( _displayName, 'f_Constructor_MotionPics')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theImagesBaseURL',   ['string']],
        [ 'theImagesListPath',  ['string']],
        [ 'theCanvasOrId',      ['typeof',  'object', 'string', 'optional']],
        [ 'theWidth',           ['number',  'optional']],
        [ 'theHeight',          ['number',  'optional']],
        [ 'theLoadJustFirst',   ['boolean', 'optional']],
        [ 'theNumFramesToSkip', ['number',  'optional']],
        [ 'theIndexesToLoad',   ['object',  'optional']]
    ]);
    f_Constructor_MotionPics.prototype = _prot_MotionPics;
    _publicMembers.push(f_Constructor_MotionPics);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_MotionPics._sDesc('Factory to create new instances of MotionPics.');

        _doc+=('\n\n' + f_Constructor_MotionPics._doc);
    }








    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        f_Constructor_MotionPics:  f_Constructor_MotionPics
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_MotionPics')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error',
        'm_Identifiable', 'm_Instrument', 'm_Trace', 'm_Log', 'm_Watcher', 'm_Geometry',
        'm_FrameScheduler', 'm_ResLoader', 'm_MotionGeneral'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
        m_Identifiable, m_Instrument, m_Trace, m_Log, m_Watcher, m_Geometry,
        m_FrameScheduler, m_ResLoader, m_MotionGeneral) {

            return aM_MotionPics(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
                m_Identifiable, m_Instrument, m_Trace, m_Log, m_Watcher, m_Geometry,
                m_FrameScheduler, m_ResLoader, m_MotionGeneral);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_MotionPics.displayName]=aM_MotionPics(
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
            gChoirJS_Modules['m_ResLoader'],
            gChoirJS_Modules['m_MotionGeneral']
        );
    }
    else {
        ChoirJS_Module_MotionPics= aM_MotionPics(
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
            ChoirJS_Module_ResLoader,
            ChoirJS_Module_MotionGeneral
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_MotionPics')
}

