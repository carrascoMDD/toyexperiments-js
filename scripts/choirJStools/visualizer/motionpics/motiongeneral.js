/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_MotionGeneral')
}



var aM_MotionGeneral = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
                              m_Identifiable, m_Instrument, m_Trace, m_Log, m_Watcher, m_Geometry,
                              m_FrameScheduler) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_MotionGeneral')
    }

    if( m_Log) {}


    var _displayName = 'm_MotionGeneral';

    var _doc = _displayName +' module. Functions to visualize received Changes in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';



    var _c_CanvasWidth = m_ConstValues_Tools.fConst( _displayName, '_c_CanvasWidth', 640 + 12 + 12);
    _doc+=('\n\n' +  JSON.stringify({_c_CanvasWidth: _c_CanvasWidth}, null, 4));


    var _c_CanvasHeight = m_ConstValues_Tools.fConst( _displayName, '_c_CanvasHeight', 480 + 16 + 12);
    _doc+=('\n\n' +  JSON.stringify({_c_CanvasHeight: _c_CanvasHeight}, null, 4));



    var _c_PicsInsetLeft = m_ConstValues_Tools.fConst( _displayName, '_c_PicsInsetLeft', 12);
    _doc+=('\n\n' +  JSON.stringify({_c_PicsInsetLeft: _c_PicsInsetLeft}, null, 4));


    var _c_PicsInsetTop = m_ConstValues_Tools.fConst( _displayName, '_c_PicsInsetTop', 16);
    _doc+=('\n\n' +  JSON.stringify({_c_PicsInsetTop: _c_PicsInsetTop}, null, 4));


    var _c_PicsInsetRight = m_ConstValues_Tools.fConst( _displayName, '_c_PicsInsetRight', 12);
    _doc+=('\n\n' +  JSON.stringify({_c_PicsInsetRight: _c_PicsInsetRight}, null, 4));


    var _c_PicsInsetBottom = m_ConstValues_Tools.fConst( _displayName, '_c_PicsInsetBottom', 12);
    _doc+=('\n\n' +  JSON.stringify({_c_PicsInsetBottom: _c_PicsInsetTop}, null, 4));



    var _cButtonWidth = m_ConstValues_Tools.fConst( _displayName, '_cButtonWidth', 12);
    _doc+=('\n\n' +  JSON.stringify({_cButtonWidth: _cButtonWidth}, null, 4));

    var _cButtonSep = m_ConstValues_Tools.fConst( _displayName, '_cButtonSep', 8);
    _doc+=('\n\n' +  JSON.stringify({_cButtonSep: _cButtonSep}, null, 4));

    var _cButtonHeight = m_ConstValues_Tools.fConst( _displayName, '_cButtonHeight', 8);
    _doc+=('\n\n' +  JSON.stringify({_cButtonHeight: _cButtonHeight}, null, 4));

    var _cMinRefreshStatusBarMillis = m_ConstValues_Tools.fConst( _displayName, '_cMinRefreshStatusBarMillis', 1000);
    _doc+=('\n\n' +  JSON.stringify({_cMinRefreshStatusBarMillis: _cMinRefreshStatusBarMillis}, null, 4));





    var _cHeightMeasurementText = m_ConstValues_Tools.fConst( _displayName, '_cHeightMeasurementText', 'e');
    _doc+=('\n\n' +  JSON.stringify({_cHeightMeasurementText: _cHeightMeasurementText}, null, 4));
    _doc+='The text used to approximate the height of text rendered with the font and scaling set at the moment in the 2DContext.';


    var _cHeightMeasurementFactor = m_ConstValues_Tools.fConst( _displayName, '_cHeightMeasurementFactor', 2);
    _doc+=('\n\n' +  JSON.stringify({_cHeightMeasurementText: _cHeightMeasurementFactor}, null, 4));
    _doc+='The factor used to approximate the height of text rendered with the font and scaling set at the moment in the 2DContext,' +
        'by multiplying with this factor the width computed for the text specified by the _cHeightMeasurementFactor module constant.';







    _doc+=('\n\nPrototype and Factory for MotionGeneral:');


    var _prot_MotionGeneral = (function() {

        var aPrototype = {};

        aPrototype._v_Type = 'MotionGeneral';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];


        aPrototype._pOpenMotionGeneral =  (function( theCtxt, theCanvasOrId, theWidth, theHeight,
                                                     theLoadJustFirst, theNumFramesToSkip) {

            this._v_UID = m_Identifiable.fNewUID();

            this._v_Width = theWidth;
            this._v_Height = theHeight;

            this._v_LoadJustFirst = theLoadJustFirst ? true : false;

            this._v_NumFramesToSkip = 0;
            if( theNumFramesToSkip) {
                this._v_NumFramesToSkip = theNumFramesToSkip;
            }

            this._v_PauseAfterNextFrame = false;

            this._v_Images = [];

            this._v_PictsBounds = null;
            this._v_StatusBarBounds = null;

            this._v_ButtonsChanged = true;
            this._v_ForceDisplayBar = false;

            this._v_LoadImagesQueue = null;
            this._v_NumImagesToLoad = 0;
            this._v_ImagesLoadCompleted = false;

            this._v_LastPaintedImageIndex = null;
            this._v_ForwardDirection = true;

            this._v_LastPaintedImage = null;

            this._v_SkippedFrames = 0;
            this._v_LastPaintStatusBarMillis = null;


            this._v_StylePaddingLeft= 0;
            this._v_StylePaddingTop= 0;
            this._v_StyleBorderLeft= 0;
            this._v_StyleBorderTop= 0;


            this._v_LastScale = 1;

            this._v_ExtraMouseListeners = [ ];


            var aCanvas = null;

            if ( typeof theCanvasOrId === 'string') {
                aCanvas = document.getElementById( theCanvasOrId);
            }
            else {
                if( typeof theCanvasOrId === 'object') {
                    aCanvas = theCanvasOrId;
                }
            }

            if ( !aCanvas) {
                try {
                    aCanvas = document.createElement("canvas");
                }
                catch( anException) {}
                if( aCanvas) {
                    if ( typeof theCanvasOrId === 'string') {
                        aCanvas.id = theCanvasOrId;
                    }
                    if( theWidth) {
                        aCanvas.width = theWidth;
                    }
                    else {
                        aCanvas.width = _c_CanvasWidth;
                    }
                    if( theHeight) {
                        aCanvas.height = theHeight;
                    }
                    else {
                        aCanvas.height = _c_CanvasHeight;
                    }
                    document.body.appendChild( aCanvas);
                }
            }

            if (!aCanvas) {
                throw new m_Error.Error('CanvasCreationError', {module: aPrototype._ModuleName, function: aPrototype._pOpenMotionGeneral});
            }
            if ( theWidth && !( aCanvas.width === theWidth)) {
                aCanvas.width = theWidth;
            }
            if ( theHeight && !( aCanvas.height === theHeight)) {
                aCanvas.height = theHeight;
            }
            this._v_Canvas = aCanvas;



            var a2DContext = null;
            try {
                a2DContext = this._v_Canvas.getContext('2d');
            }
            catch( anException) {}
            if (!a2DContext) {
                 throw new m_Error.Error('CanvasContext2DCreationError', {module: aPrototype._ModuleName, function: aPrototype._pOpenMotionGeneral});
            }
            this._v_2DContext = a2DContext;





            this._v_StylePaddingLeft= 0;
            this._v_StylePaddingTop= 0;
            this._v_StyleBorderLeft= 0;
            this._v_StyleBorderTop= 0;

            if ( document.defaultView && document.defaultView.getComputedStyle) {
                var aComputedStyle = document.defaultView.getComputedStyle( this._v_Canvas, null);
                this._v_StylePaddingLeft = parseInt( aComputedStyle['paddingLeft'], 10)      || 0;
                this._v_StylePaddingTop  = parseInt( aComputedStyle['paddingTop'], 10)       || 0;
                this._v_StyleBorderLeft  = parseInt( aComputedStyle['borderLeftWidth'], 10)  || 0;
                this._v_StyleBorderTop   = parseInt( aComputedStyle['borderTopWidth'], 10)   || 0;
            }

            this._v_StatusBarBounds = m_Geometry.fRectExtent(
                _c_PicsInsetLeft,
                0,
                aCanvas.width  - _c_PicsInsetLeft - _c_PicsInsetRight,
                _c_PicsInsetTop
            );

            this._v_ButtonsBounds =  m_Geometry.fRectCorner(
                this._v_StatusBarBounds._v_CornerX - ( ( 5 * _cButtonWidth) + ( 5 * _cButtonSep)),
                this._v_StatusBarBounds._v_OriginY,
                this._v_StatusBarBounds._v_CornerX,
                this._v_StatusBarBounds._v_CornerY
            );


            this._v_StatusInfoBounds = m_Geometry.fRectCorner(
                this._v_StatusBarBounds._v_OriginX,
                this._v_StatusBarBounds._v_OriginY,
                this._v_ButtonsBounds._v_OriginX,
                this._v_ButtonsBounds._v_CornerY
            );

            var aButtonY = Math.floor( (this._v_ButtonsBounds._v_Height - _cButtonHeight) / 2);

            this._v_ButtonBounds_Slower = m_Geometry.fRectExtent( 0, aButtonY, _cButtonWidth, _cButtonHeight);
            this._v_ButtonClickBounds_Slower = m_Geometry.fRectExtent(
                this._v_ButtonBounds_Slower._v_OriginX + this._v_ButtonsBounds._v_OriginX,
                this._v_ButtonsBounds._v_OriginY + aButtonY,
                _cButtonWidth, _cButtonHeight);

            this._v_ButtonBounds_Faster =  m_Geometry.fRectExtent(
                this._v_ButtonBounds_Slower._v_CornerX + _cButtonSep, aButtonY, _cButtonWidth, _cButtonHeight);
            this._v_ButtonClickBounds_Faster = m_Geometry.fRectExtent(
                this._v_ButtonBounds_Faster._v_OriginX + this._v_ButtonsBounds._v_OriginX,
                this._v_ButtonsBounds._v_OriginY + aButtonY,
                _cButtonWidth, _cButtonHeight);

            this._v_ButtonBounds_Previous =  m_Geometry.fRectExtent(
                this._v_ButtonBounds_Faster._v_CornerX + _cButtonSep, aButtonY, _cButtonWidth, _cButtonHeight);
            this._v_ButtonClickBounds_Previous = m_Geometry.fRectExtent(
                this._v_ButtonBounds_Previous._v_OriginX + this._v_ButtonsBounds._v_OriginX,
                this._v_ButtonsBounds._v_OriginY + aButtonY,
                _cButtonWidth, _cButtonHeight);

            this._v_ButtonBounds_PlayPause =  m_Geometry.fRectExtent(
                this._v_ButtonBounds_Previous._v_CornerX + _cButtonSep, aButtonY, _cButtonWidth, _cButtonHeight);
            this._v_ButtonClickBounds_PlayPause = m_Geometry.fRectExtent(
                this._v_ButtonBounds_PlayPause._v_OriginX + this._v_ButtonsBounds._v_OriginX,
                this._v_ButtonsBounds._v_OriginY + aButtonY,
                _cButtonWidth, _cButtonHeight);

            this._v_ButtonBounds_Next =  m_Geometry.fRectExtent(
                this._v_ButtonBounds_PlayPause._v_CornerX + _cButtonSep, aButtonY, _cButtonWidth, _cButtonHeight);
            this._v_ButtonClickBounds_Next = m_Geometry.fRectExtent(
                this._v_ButtonBounds_Next._v_OriginX + this._v_ButtonsBounds._v_OriginX,
                this._v_ButtonsBounds._v_OriginY + aButtonY,
                _cButtonWidth, _cButtonHeight);



            this._v_PictsBounds = m_Geometry.fRectExtent(
                _c_PicsInsetLeft,
                _c_PicsInsetTop,
                aCanvas.width  - _c_PicsInsetLeft - _c_PicsInsetRight,
                aCanvas.height - _c_PicsInsetTop - _c_PicsInsetBottom
            );





            this._v_2DContext.fillStyle="#E0E0E0";
            this._v_2DContext.fillRect(0, 0, this._v_Canvas.width, this._v_Canvas.height);

            this._v_2DContext.fillStyle="#E0E000";
            this._v_2DContext.fillRect.apply( this._v_2DContext, this._v_StatusBarBounds.fAsArgsExtent());

            this._v_2DContext.fillStyle="#00E0E0";
            this._v_2DContext.fillRect.apply( this._v_2DContext, this._v_PictsBounds.fAsArgsExtent());


            var aMotionGeneral = this;
            var aFrameHandler = (function() {
                var aMotionGeneralHere = aMotionGeneral;
                return function( theCtxtHere ) {
                    aMotionGeneralHere.pFrameHandler( theCtxtHere);
                };
            })();

            this._v_FrameSchedule = m_FrameScheduler.fSchedule( theCtxt, aFrameHandler, false, false, null);
            if( this._v_FrameSchedule) {} /* CQT */



            this._pPaintStatusBar( theCtxt, null, true);


            this._pHookListeners( theCtxt);

            return null;

        })._sName( aPrototype._ModuleName, '_pOpenMotionGeneral')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theCanvasOrId',     ['typeof', 'object', 'string', 'optional']],
            [ 'theWidth',          ['number', 'optional']],
            [ 'theHeight',         ['number', 'optional']],
            [ 'theLoadJustFirst',  ['boolean', 'optional']],
            [ 'theNumFramesToSkip',  ['number',  'optional']]
            ]);
        aPrototype._privateMembers.push( aPrototype._pOpenMotionGeneral);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pOpenMotionGeneral._sDesc(
            'Open a Canvas and 2D context for rendering with this MotionGeneral, and register interest in receiving Changes.');

            aPrototype._doc+=('\n\n' + aPrototype._pOpenMotionGeneral._doc);
        }








        aPrototype.pFrameHandler = (function( theCtxt) {
            if( theCtxt) {} /* CQT */

            var anImageToPaint = this._fImageToPaint( theCtxt);
            if( anImageToPaint) {
                this._pPaintImage( theCtxt, anImageToPaint);
            }
            this._pPaintStatusBar( theCtxt, anImageToPaint);

            if( this._v_PauseAfterNextFrame) {
                this._v_PauseAfterNextFrame = false;
                this.pPause( theCtxt);
            }

            return null;

        })._sName( aPrototype._ModuleName, 'pFrameHandler')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pFrameHandler._sDesc(
            'Shall be executed asynchronously by an AnimationFrame schedule or a timeout.');

            aPrototype._doc+=('\n\n' + aPrototype.pFrameHandler._doc);
        }










        aPrototype._fImageToPaint = (function( theCtxt, theIgnoreSkip) {
            if( theCtxt) {} /* CQT */

            if( !this._v_Images) {
                return null;
            }


            if( !theIgnoreSkip) {
                if( this._v_NumFramesToSkip) {
                    if( this._v_SkippedFrames < this._v_NumFramesToSkip) {
                        this._v_SkippedFrames += 1;
                        return null;
                    }
                    else {
                        this._v_SkippedFrames = 0;
                    }
                }
            }


            var anImageIndex = 0;

            if( !this._v_FrameSchedule._v_IsRescheduleAllowed) {
                if( this._v_LastPaintedImageIndex === null) {
                    return this._v_Images[ 0];
                }
                else {
                    anImageIndex = this._v_LastPaintedImageIndex;
                    if( anImageIndex < 0) {
                        anImageIndex = 0;
                    }
                    else {
                        if( anImageIndex >= this._v_Images.length) {
                            anImageIndex = this._v_Images.length - 1;
                        }
                    }
                    return this._v_Images[ anImageIndex];
                }
            }


            if( this._v_Images.length > 1) {

                if( this._v_ForwardDirection) {
                    if( this._v_LastPaintedImageIndex === null) {
                        anImageIndex = 0;
                    }
                    else {
                        anImageIndex = this._v_LastPaintedImageIndex + 1;
                        if( anImageIndex >= this._v_Images.length) {
                            anImageIndex = this._v_Images.length - 1;   /* with 1 repeats frame at end of sequence, 2 does not repeat frame */
                            this._v_ForwardDirection = false;
                        }
                    }
                }
                else {
                    if( this._v_LastPaintedImageIndex === null) {
                        anImageIndex = this._v_Images.length - 1;
                    }
                    else {
                        anImageIndex = this._v_LastPaintedImageIndex - 1;
                        if( anImageIndex < 0) {
                            anImageIndex = 0;  /* with 0 repeats frame at end of sequence, 1 does not repeat frame */
                            this._v_ForwardDirection = true;
                        }
                    }
                }
            }

            this._v_LastPaintedImageIndex = anImageIndex;

            var anImage = this._v_Images[ anImageIndex];
            if( !anImage) {
                return null;
            }

            return anImage;

        })._sName( aPrototype._ModuleName, '_fImageToPaint')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theIgnoreSkip', ['boolean', 'optional']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fImageToPaint._sDesc( '');

            aPrototype._doc+=('\n\n' + aPrototype._fImageToPaint._doc);
        }











        aPrototype._pDimensionImage = (function( theCtxt, theImage) {
            if( theCtxt) {} /* CQT */


            if( theImage._v_Scale &&  theImage._v_Translation) {
                return null;
            }


            var aScaleX = 1;
            var aScaleY = 1;
            var aScale = 1;

            var anOriginX = 0;
            var anOriginY = 0;

            if( theImage.width > this._v_PictsBounds._v_Width) {
                aScaleX =  this._v_PictsBounds._v_Width / theImage.width;
            }
            else {
                if( theImage.width < this._v_PictsBounds._v_Width) {
                    anOriginX =  Math.floor(( this._v_PictsBounds._v_Width - theImage.width) / 2);
                }
            }
            if( theImage.height > this._v_PictsBounds._v_Height) {
                aScaleY =  this._v_PictsBounds._v_Height / theImage.height;
            }
            else {
                if( theImage.height < this._v_PictsBounds._v_Height) {
                    anOriginY =  Math.floor(( this._v_PictsBounds._v_Height - theImage.height) / 2);
                }
            }
            if( !( aScaleX == 1) || !( aScaleY == 1)) {
                aScale = Math.min( aScaleX, aScaleY);

                var aResultWidth = Math.floor( theImage.width * aScale);
                if( aResultWidth < this._v_PictsBounds._v_Width) {
                    anOriginX =  Math.floor(( this._v_PictsBounds._v_Width - aResultWidth) / 2)
                }

                var aResultHeight = Math.floor( theImage.height * aScale);
                if( aResultHeight < this._v_PictsBounds._v_Height) {
                    anOriginY =  Math.floor(( this._v_PictsBounds._v_Height - aResultHeight) / 2)
                }
            }
            theImage._v_Scale       = m_Geometry.fPoint( aScale, aScale);
            theImage._v_Translation = m_Geometry.fPoint( anOriginX, anOriginY);

            return null;

        })._sName( aPrototype._ModuleName, '_pDimensionImage')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt'],
                [ 'theImage', ['object']]
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pDimensionImage._sDesc( '');

            aPrototype._doc+=('\n\n' + aPrototype._pDimensionImage._doc);
        }









        aPrototype._pPaintImage = (function( theCtxt, theImage) {
            if( theCtxt) {} /* CQT */

            if( !theImage) {
                return null;
            }

            if( this._v_LastPaintedImage && ( theImage === this._v_LastPaintedImage)) {
                return null;
            }

            this._v_LastPaintedImage = theImage;

            this._pDimensionImage( theCtxt, theImage);

            this._v_2DContext.save();
            try {
                if( typeof theImage.data === 'undefined') {

                    this._v_2DContext.beginPath();
                    this._v_2DContext.rect.apply( this._v_2DContext, this._v_PictsBounds.fAsArgsExtent());
                    this._v_2DContext.clip();

                    this._v_2DContext.translate( this._v_PictsBounds._v_OriginX + theImage._v_Translation._v_X,
                        this._v_PictsBounds._v_OriginY + theImage._v_Translation._v_Y);

                    if ( !theImage._v_Scale.fIsOnePoint()) {
                        this._v_2DContext.scale.apply( this._v_2DContext, theImage._v_Scale.fAsArgs());
                    }

                    this._v_2DContext.drawImage( theImage, 0, 0);
                }
                else {
                    this._v_2DContext.putImageData( theImage,
                        this._v_PictsBounds._v_OriginX + theImage._v_Translation._v_X,
                        this._v_PictsBounds._v_OriginY + theImage._v_Translation._v_Y
                    );
                }

            }
            finally {
                this._v_2DContext.restore();
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pPaintImage')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt'],
                [ 'theImage', ['object']]
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pPaintImage._sDesc( '');

            aPrototype._doc+=('\n\n' + aPrototype._pPaintImage._doc);
        }











        aPrototype._pPaintStatusBar = (function( theCtxt, theImage, theForce) {
            if( theCtxt) {} /* CQT */


            var aMillisNow = new Date().getTime();

            var aMustPaint = theForce ? true : false;

            if( !aMustPaint) {
                if ( this._v_ForceDisplayBar) {
                    aMustPaint = true;
                }
            }

            if ( !aMustPaint) {
                if( !( this._v_LastPaintStatusBarMillis === null)) {
                    if ( ( aMillisNow - this._v_LastPaintStatusBarMillis) > _cMinRefreshStatusBarMillis) {
                        aMustPaint = true;
                    }
                }
            }

            this._v_ForceDisplayBar = false;

            var aTextHeight = this._fMeasureTextHeight( theCtxt);

            if( !aMustPaint) {

                this._v_2DContext.save();
                try {
                    this._v_2DContext.beginPath();
                    this._v_2DContext.rect.apply( this._v_2DContext, this._v_StatusInfoBounds.fAsArgsExtent());
                    this._v_2DContext.clip();

                    this._v_2DContext.translate( this._v_StatusInfoBounds._v_OriginX, this._v_StatusInfoBounds._v_OriginY);


                    this._v_2DContext.fillStyle= '#FFFFFF';

                    this._v_2DContext.fillRect( 80, 0, 10, aTextHeight + 2);


                    this._v_2DContext.fillStyle= '#000000';

                    if( this._v_ForwardDirection) {
                        this._v_2DContext.fillText( '>', 80, aTextHeight);
                    }
                    else {
                        this._v_2DContext.fillText( '<', 80, aTextHeight);
                    }
                }
                finally {
                    this._v_2DContext.restore();
                }
            }
            else {
                this._v_2DContext.save();
                try {
                    this._v_2DContext.beginPath();
                    this._v_2DContext.rect.apply( this._v_2DContext, this._v_StatusInfoBounds.fAsArgsExtent());
                    this._v_2DContext.clip();


                    this._v_2DContext.fillStyle= '#FFFFFF';
                    this._v_2DContext.fillRect.apply( this._v_2DContext, this._v_StatusInfoBounds.fAsArgsExtent());

                    this._v_2DContext.translate( this._v_StatusInfoBounds._v_OriginX, this._v_StatusInfoBounds._v_OriginY);

                    this._v_2DContext.fillStyle= '#000000';



                    if( this._v_ForwardDirection) {
                        this._v_2DContext.fillText( '>', 80, aTextHeight);
                    }
                    else {
                        this._v_2DContext.fillText( '<', 80, aTextHeight);
                    }

                    this._v_LastPaintStatusBarMillis = aMillisNow;


                    if( !this._v_ImagesLoadCompleted) {
                        this._v_2DContext.fillText( ('  ' + this._v_Images.length).substr( -2) + ' imgs of ' +
                            this._v_NumImagesToLoad,
                            8, aTextHeight);
                    }
                    else {
                        this._v_2DContext.fillText( ('  ' + this._v_Images.length).substr( -2) + ' imgs', 8, aTextHeight);
                    }


                    var aScale = this._v_LastScale;
                    if ( !aScale) {
                        aScale = 1;
                    }

                    var anImage = theImage;

                    if( !anImage) {
                        if ( this._v_Images.length && !( this._v_LastPaintedImageIndex === null)) {
                            anImage = this._v_Images[ this._v_LastPaintedImageIndex];
                        }
                    }
                    if( anImage) {
                        this._v_2DContext.fillText( ('  ' + (anImage._v_Index + 1)).substr( -2), 94, aTextHeight);

                        aScale = anImage._v_Scale._v_X;
                        this._v_LastScale = aScale;
                    }
                    if ( ! ( ( aScale === 1) || ( aScale === 1.0))) {
                        this._v_2DContext.fillText( ' ' +
                            ('  ' + Math.round( aScale * 100)).substr( -2) + '%', 110, aTextHeight);
                    }



                    if( !( this._v_FrameSchedule._v_FramesPerSecond === null)) {
                        var aFramesPerSecond = this._v_FrameSchedule._v_FramesPerSecond;
                        if( this._v_NumFramesToSkip) {
                            aFramesPerSecond = aFramesPerSecond  / ( this._v_NumFramesToSkip + 1);
                        }

                        this._v_2DContext.fillText( ('    ' +  aFramesPerSecond.toFixed( 1)).
                            substr( -4) + ' fps', 150, aTextHeight);
                    }


                    if( this._v_NumFramesToSkip) {
                        this._v_2DContext.fillText( '1/' + ( this._v_NumFramesToSkip + 1), 192, aTextHeight);
                    }

                    if( !( this._v_FrameSchedule._v_AverageProcessTime === null)) {
                        this._v_2DContext.fillText( ('   ' + this._v_FrameSchedule._v_AverageProcessTime.toFixed(1)).
                            substr( -3) + ' ms/fr', 220, aTextHeight);
                    }

                    if( !( this._v_FrameSchedule._v_TotalProcessMillis === null)) {
                        this._v_2DContext.fillText( ('      ' + this._v_FrameSchedule._v_TotalProcessMillis).
                            substr( -6) + ' total ms', 300, aTextHeight);
                    }

                }
                finally {
                    this._v_2DContext.restore();
                }
            }

            this._pPaintPlayButtons( theCtxt);

            return null;

        })._sName( aPrototype._ModuleName, '_pPaintStatusBar')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theImage', ['object', 'optional']],
            [ 'theForce', ['boolean', 'optional']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pPaintStatusBar._sDesc( '');

            aPrototype._doc+=('\n\n' + aPrototype._pPaintStatusBar._doc);
        }








        aPrototype._pPaintPlayButtons = (function( theCtxt) {
            if( theCtxt) {} /* CQT */

            if( !this._v_ButtonsChanged) {
                return null;
            }

            this._v_ButtonsChanged = false;


            this._v_2DContext.save();
            try {
                this._v_2DContext.beginPath();
                this._v_2DContext.rect.apply( this._v_2DContext, this._v_ButtonsBounds.fAsArgsExtent());
                this._v_2DContext.clip();

                this._v_2DContext.fillStyle   = '#FFFFFF';
                this._v_2DContext.fillRect.apply( this._v_2DContext, this._v_ButtonsBounds.fAsArgsExtent());

                this._v_2DContext.save();
                try {
                    this._v_2DContext.translate( this._v_ButtonsBounds._v_OriginX, this._v_ButtonsBounds._v_OriginY);

                    this._v_2DContext.fillStyle   = '#000000';
                    this._v_2DContext.strokeStyle = '#000000';



                    var aMiddleY = this._v_ButtonBounds_Faster._v_OriginY +
                        ( this._v_ButtonBounds_Faster._v_Height / 2);


                    this._v_2DContext.fillRect(
                        this._v_ButtonBounds_Slower._v_OriginX +
                            Math.floor(this._v_ButtonBounds_Slower._v_Width / 6),
                        aMiddleY -  Math.floor( this._v_ButtonBounds_Slower._v_Width / 6),
                        Math.floor( 4 * this._v_ButtonBounds_Slower._v_Width / 6),
                        Math.floor( 2 * this._v_ButtonBounds_Slower._v_Width / 6));


                    if( this._v_NumFramesToSkip) {
                        this._v_2DContext.fillRect(
                            this._v_ButtonBounds_Faster._v_OriginX +
                                Math.floor( 2 * this._v_ButtonBounds_Faster._v_Width / 6),
                            this._v_ButtonBounds_Faster._v_OriginY,
                            Math.floor( 2 * this._v_ButtonBounds_Faster._v_Width / 6),
                            this._v_ButtonBounds_Faster._v_Height);

                        this._v_2DContext.fillRect(
                            this._v_ButtonBounds_Faster._v_OriginX +
                                Math.floor(this._v_ButtonBounds_Faster._v_Width / 6),
                            aMiddleY -  Math.floor( this._v_ButtonBounds_Faster._v_Width / 6),
                            Math.floor( 4 * this._v_ButtonBounds_Faster._v_Width / 6),
                            Math.floor( 2 * this._v_ButtonBounds_Faster._v_Width / 6));
                    }
                    else {
                        this._v_2DContext.strokeRect(
                            this._v_ButtonBounds_Faster._v_OriginX +
                                Math.floor( 2 * this._v_ButtonBounds_Faster._v_Width / 6),
                            this._v_ButtonBounds_Faster._v_OriginY,
                            Math.floor( 2 * this._v_ButtonBounds_Faster._v_Width / 6),
                            this._v_ButtonBounds_Faster._v_Height);

                        this._v_2DContext.strokeRect(
                            this._v_ButtonBounds_Faster._v_OriginX +
                                Math.floor(this._v_ButtonBounds_Faster._v_Width / 6),
                            aMiddleY -  Math.floor( this._v_ButtonBounds_Faster._v_Width / 6),
                            Math.floor( 4 * this._v_ButtonBounds_Faster._v_Width / 6),
                            Math.floor( 2 * this._v_ButtonBounds_Faster._v_Width / 6));
                    }

                    this._v_2DContext.beginPath();
                    this._v_2DContext.moveTo( this._v_ButtonBounds_Previous._v_OriginX +
                        Math.floor( 3 * this._v_ButtonBounds_Previous._v_Width / 7),
                        this._v_ButtonBounds_Previous._v_OriginY);

                    this._v_2DContext.lineTo( this._v_ButtonBounds_Previous._v_OriginX +
                        Math.floor( 3 * this._v_ButtonBounds_Previous._v_Width / 7),
                        this._v_ButtonBounds_Previous._v_CornerY);

                    this._v_2DContext.lineTo( this._v_ButtonBounds_Previous._v_OriginX +
                        Math.floor( this._v_ButtonBounds_Previous._v_Width / 7),
                        this._v_ButtonBounds_Previous._v_OriginY +
                            Math.floor( this._v_ButtonBounds_Previous._v_Height / 2));

                    this._v_2DContext.closePath();
                    this._v_2DContext.fill();

                    this._v_2DContext.fillRect(
                        this._v_ButtonBounds_Previous._v_OriginX +
                            Math.floor( 4 * this._v_ButtonBounds_Previous._v_Width / 7),
                        this._v_ButtonBounds_Previous._v_OriginY,
                        Math.floor( 2 * this._v_ButtonBounds_Previous._v_Width / 7),
                        this._v_ButtonBounds_Previous._v_Height);








                    if( this._v_LoadImagesQueue &&
                        ( !this._v_LoadImagesQueue.fNeedsReactivation( theCtxt)) &&
                        this._v_FrameSchedule._v_IsRescheduleAllowed) {

                        this._v_2DContext.fillRect(
                            this._v_ButtonBounds_PlayPause._v_OriginX +
                                Math.floor( this._v_ButtonBounds_PlayPause._v_Width / 7),
                            this._v_ButtonBounds_PlayPause._v_OriginY,
                            Math.floor( 2 * this._v_ButtonBounds_PlayPause._v_Width / 7),
                            this._v_ButtonBounds_PlayPause._v_Height);

                        this._v_2DContext.fillRect(
                            this._v_ButtonBounds_PlayPause._v_OriginX +
                                Math.floor( 4 * this._v_ButtonBounds_PlayPause._v_Width / 7),
                            this._v_ButtonBounds_PlayPause._v_OriginY,
                            Math.floor( 2 * this._v_ButtonBounds_PlayPause._v_Width / 7),
                            this._v_ButtonBounds_PlayPause._v_Height);
                    }
                    else {

                        this._v_2DContext.beginPath();
                        this._v_2DContext.moveTo( this._v_ButtonBounds_PlayPause._v_OriginX +
                            Math.floor( this._v_ButtonBounds_PlayPause._v_Width / 7),
                            this._v_ButtonBounds_PlayPause._v_OriginY);

                        this._v_2DContext.lineTo( this._v_ButtonBounds_PlayPause._v_OriginX +
                            Math.floor( 6 * this._v_ButtonBounds_PlayPause._v_Width / 7),
                            this._v_ButtonBounds_PlayPause._v_OriginY +
                                Math.floor( this._v_ButtonBounds_PlayPause._v_Height / 2));

                        this._v_2DContext.lineTo( this._v_ButtonBounds_PlayPause._v_OriginX +
                            Math.floor( this._v_ButtonBounds_PlayPause._v_Width / 7),
                            this._v_ButtonBounds_PlayPause._v_CornerY);
                        this._v_2DContext.closePath();
                        this._v_2DContext.fill();

                    }



                    this._v_2DContext.fillRect(
                        this._v_ButtonBounds_Next._v_OriginX +
                            Math.floor( this._v_ButtonBounds_Next._v_Width / 7),
                        this._v_ButtonBounds_Next._v_OriginY,
                        Math.floor( 2 * this._v_ButtonBounds_Next._v_Width / 7),
                        this._v_ButtonBounds_Next._v_Height);


                    this._v_2DContext.beginPath();
                    this._v_2DContext.moveTo( this._v_ButtonBounds_Next._v_OriginX +
                        Math.floor( 4 * this._v_ButtonBounds_Next._v_Width / 7),
                        this._v_ButtonBounds_Next._v_OriginY);

                    this._v_2DContext.lineTo( this._v_ButtonBounds_Next._v_OriginX +
                        Math.floor( 6 * this._v_ButtonBounds_Next._v_Width / 7),
                        this._v_ButtonBounds_Next._v_OriginY +
                            Math.floor( this._v_ButtonBounds_Next._v_Height / 2));

                    this._v_2DContext.lineTo( this._v_ButtonBounds_Next._v_OriginX +
                        Math.floor( 4 * this._v_ButtonBounds_Next._v_Width / 7),
                        this._v_ButtonBounds_Next._v_CornerY);
                    this._v_2DContext.closePath();
                    this._v_2DContext.fill();



                }
                finally {
                    this._v_2DContext.restore();
                }
            }
            finally {
                this._v_2DContext.restore();
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pPaintPlayButtons')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pPaintPlayButtons._sDesc( '');

            aPrototype._doc+=('\n\n' + aPrototype._pPaintPlayButtons._doc);
        }








        aPrototype._fMeasureTextHeight = (function( theCtxt) {
            if( theCtxt) {} /* CQT */

            var aHeightMeasurement = this._v_2DContext.measureText( _cHeightMeasurementText);
            return Math.floor( aHeightMeasurement.width * _cHeightMeasurementFactor);

        })._sName( aPrototype._ModuleName, '_fMeasureTextHeight')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fMeasureTextHeight._sDesc( '');

            aPrototype._doc+=('\n\n' + aPrototype._fMeasureTextHeight._doc);
        }







        aPrototype._pHookListeners =  (function( theCtxt) {
            if( theCtxt) {} /* CQT */

            var aMotionGeneral = this;
            this._v_Canvas.onmouseup = (function() {
                var aMotionGeneral_here = aMotionGeneral;
                return function( theEvent_arg) {
                    aMotionGeneral_here._fHandleMouseUp.apply( aMotionGeneral_here, [ m_Ctxt.fNewCtxt(), theEvent_arg]);
                    return false;
                }
            })();

            return null;

        })._sName( aPrototype._ModuleName, '_pHookListeners')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        aPrototype._privateMembers.push( aPrototype._pHookListeners);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pHandleGestures._sDesc('Listen to events in the Canvas.');

            aPrototype._doc+=('\n\n' + aPrototype._pHookListeners._doc);
        }







        aPrototype._pUnhookListeners =  (function( theCtxt) {

            if( theCtxt) {}

            this._v_Canvas.onmouseup = null;


            return null;

        })._sName( aPrototype._ModuleName, '_pUnhookListeners')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        aPrototype._privateMembers.push( aPrototype._pUnhookListeners);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pUnhookListeners._sDesc('Do not listen any more to events in the Canvas.');

            aPrototype._doc+=('\n\n' + aPrototype._pUnhookListeners._doc);
        }







        aPrototype._fHandleMouseUp =  (function( theCtxt, theEvent) {

            this._pUnhookListeners( theCtxt);

            try {
                var aMousePoint = this._fGetMouseCoordinates( theCtxt, theEvent);

                var aScaleX = 1;
                var aScaleY = 1;
                if( !( this._v_Canvas.clientWidth === this._v_Canvas.width )) {
                    aScaleX = this._v_Canvas.clientWidth / this._v_Canvas.width;
                }
                if( !( this._v_Canvas.clientHeight === this._v_Canvas.height )) {
                    aScaleY = this._v_Canvas.clientHeight / this._v_Canvas.height;
                }


                if( this._v_PictsBounds.fScaled( aScaleX, aScaleY).fPointInRect(aMousePoint)) {

                    var aListenerResult = true;
                    try {
                        var aNumMouseListeners = this._v_ExtraMouseListeners.length;
                        for ( var aMouseListenerIdx = 0; aMouseListenerIdx < aNumMouseListeners; aMouseListenerIdx++) {
                            var aMouseListener = this._v_ExtraMouseListeners[ aMouseListenerIdx];
                            if ( aMouseListener) {
                                aListenerResult = aMouseListener( theCtxt, this, theEvent);
                            }
                        }
                    }
                    finally {
                        if( aListenerResult) {
                            this._pTooglePlayPause( theCtxt);
                        }
                    }
                    return false;
                }

                if( this._v_ButtonClickBounds_Previous.fScaled( aScaleX, aScaleY).fPointInRect( aMousePoint)) {

                    this._pPreviousImage( theCtxt);
                    return false;
                }

                if( this._v_ButtonClickBounds_PlayPause.fScaled( aScaleX, aScaleY).fPointInRect(aMousePoint)) {

                    this._pTooglePlayPause( theCtxt);
                    return false;
                }

                if( this._v_ButtonClickBounds_Next.fScaled( aScaleX, aScaleY).fPointInRect( aMousePoint)) {

                    this._pNextImage( theCtxt);
                    return false;
                }

                if( this._v_ButtonClickBounds_Slower.fScaled( aScaleX, aScaleY).fPointInRect( aMousePoint)) {

                    this._pSlower( theCtxt);
                    return false;
                }

                if( this._v_ButtonClickBounds_Faster.fScaled( aScaleX, aScaleY).fPointInRect( aMousePoint)) {

                    this._pFaster( theCtxt);
                    return false;
                }

            }
            finally {
                this._pHookListeners( theCtxt);
            }
            return false;

        })._sName( aPrototype._ModuleName, '_fHandleMouseUp')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theEvent', ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fHandleMouseUp._sDesc('Handle a mousedown event on the controlled Canvas.');

            aPrototype._doc+=('\n\n' + aPrototype._fHandleMouseUp._doc);
        }






        aPrototype._pPreviousImage = (function ( theCtxt) {

            this.pPause( theCtxt);

            if( !( this._v_Images.length > 1)) {
                return null;
            }

            if( this._v_LastPaintedImageIndex === null) {
                this._v_LastPaintedImageIndex =  0;
                return null;
            }

            this._v_LastPaintedImageIndex -= 1;

            if( this._v_LastPaintedImageIndex < 0) {
                 this._v_LastPaintedImageIndex = this._v_Images.length - 1;
            }

            var anImageToPaint = this._fImageToPaint( theCtxt, true);
            if( anImageToPaint) {
                this._pPaintImage( theCtxt, anImageToPaint);
            }
            this._pPaintStatusBar( theCtxt, anImageToPaint, true);


            return null;

        })._sName( aPrototype._ModuleName, '_pPreviousImage')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pPreviousImage._sDesc( '');

            aPrototype._doc+=('\n\n' + aPrototype._pPreviousImage._doc);
        }








        aPrototype._pNextImage = (function ( theCtxt) {

            this.pPause( theCtxt);

            if( !( this._v_Images.length > 1)) {
                return null;
            }

            if( this._v_LastPaintedImageIndex === null) {
                this._v_LastPaintedImageIndex =  0;
                return null;
            }

            this._v_LastPaintedImageIndex += 1;

            if( this._v_LastPaintedImageIndex >= this._v_Images.length) {
                this._v_LastPaintedImageIndex = 0;
            }

            var anImageToPaint = this._fImageToPaint( theCtxt, true);
            if( anImageToPaint) {
                this._pPaintImage( theCtxt, anImageToPaint);
            }
            this._pPaintStatusBar( theCtxt, anImageToPaint, true);

            return null;

        })._sName( aPrototype._ModuleName, '_pNextImage')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pNextImage._sDesc( '');

            aPrototype._doc+=('\n\n' + aPrototype._pNextImage._doc);
        }




        aPrototype._pTooglePlayPause = (function ( theCtxt) {

            this._v_ButtonsChanged = true;

            if( this._v_LoadImagesQueue &&
                (!this._v_LoadImagesQueue.fNeedsReactivation( theCtxt)) &&
                this._v_FrameSchedule._v_IsRescheduleAllowed) {

                this.pPause( theCtxt);
            }
            else {
                this.pPlay( theCtxt);
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pTooglePlayPause')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt']
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pTooglePlayPause._sDesc( '');

            aPrototype._doc+=('\n\n' + aPrototype._pTooglePlayPause._doc);
        }





        aPrototype.pPause = (function ( theCtxt) {

            /* this._pActivateQueueIfNeeded( theCtxt); */

            m_FrameScheduler.pPause( theCtxt, this._v_FrameSchedule);

            this._v_FrameSchedule._v_FramesPerSecond = 0;
            this._v_FrameSchedule._v_AverageProcessTime = 0;
            this._v_FrameSchedule._v_TotalProcessMillis = 0;

            this._v_ButtonsChanged = true;

            var anImageToPaint = this._fImageToPaint( theCtxt, true);
            if( anImageToPaint) {
                this._pPaintImage( theCtxt, anImageToPaint);
            }
            this._pPaintStatusBar( theCtxt, anImageToPaint, true);

            return null;

        })._sName( aPrototype._ModuleName, 'pPause')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pPause._sDesc( '');

            aPrototype._doc+=('\n\n' + aPrototype.pPause._doc);
        }





        aPrototype.pPlay = (function ( theCtxt) {

            this._pActivateQueueIfNeeded( theCtxt);

            m_FrameScheduler.pResume( theCtxt, this._v_FrameSchedule);

            this._v_ButtonsChanged = true;

            var anImageToPaint = this._fImageToPaint( theCtxt);
            if( anImageToPaint) {
                this._pPaintImage( theCtxt, anImageToPaint);
            }

            this._pPaintStatusBar( theCtxt, anImageToPaint, true);

            return null;

        })._sName( aPrototype._ModuleName, 'pPlay')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pPlay._sDesc( '');

            aPrototype._doc+=('\n\n' + aPrototype.pPlay._doc);
        }






        aPrototype._pSlower = (function ( theCtxt) {

            this._pActivateQueueIfNeeded( theCtxt);

            m_FrameScheduler.pResume( theCtxt, this._v_FrameSchedule);

            this._v_ButtonsChanged = true;

            if( this._v_NumFramesToSkip === null) {
                this._v_NumFramesToSkip = 1;
            }
            else {
                this._v_NumFramesToSkip += 1;
            }

            var anImageToPaint = this._fImageToPaint( theCtxt);
            if( anImageToPaint) {
                this._pPaintImage( theCtxt, anImageToPaint);
            }
            this._pPaintStatusBar( theCtxt, anImageToPaint, true);

            return null;

        })._sName( aPrototype._ModuleName, '_pSlower')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt']
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pSlower._sDesc( '');

            aPrototype._doc+=('\n\n' + aPrototype._pSlower._doc);
        }








        aPrototype._pFaster = (function ( theCtxt) {

            this._pActivateQueueIfNeeded( theCtxt);

            m_FrameScheduler.pResume( theCtxt, this._v_FrameSchedule);

            this._v_ButtonsChanged = true;

            if( this._v_NumFramesToSkip) {
                this._v_NumFramesToSkip -= 1;
            }

            var anImageToPaint = this._fImageToPaint( theCtxt);
            if( anImageToPaint) {
                this._pPaintImage( theCtxt, anImageToPaint);
            }
            this._pPaintStatusBar( theCtxt, anImageToPaint, true);

            return null;

        })._sName( aPrototype._ModuleName, '_pFaster')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt']
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pFaster._sDesc( '');

            aPrototype._doc+=('\n\n' + aPrototype._pFaster._doc);
        }
















        aPrototype._fGetMouseCoordinates = (function ( theCtxt, theEvent) {

            if (!( typeof theEvent.offsetX === 'undefined')) { /* Chrome */
                return m_Geometry.fPoint( theEvent.offsetX, theEvent.offsetY);
            }
            else {  /* Firefox */
                var anOffsetX = 0;
                var anOffsetY = 0;

                var anElement = this._v_Canvas;

                if ( anElement.offsetParent) {
                    do {
                        anOffsetX += anElement.offsetLeft;
                        anOffsetY += anElement.offsetTop;
                        anElement =  anElement.offsetParent;
                    } while (anElement);
                }
                anOffsetX += (this._v_StylePaddingLeft + this._v_StyleBorderLeft);
                anOffsetY += (this._v_StylePaddingTop + this._v_StyleBorderTop);


                if( ( theEvent.layerX ===  theEvent.pageX) && ( theEvent.layerY ===  theEvent.pageY)) {
                    var aMousePoint =  m_Geometry.fPoint(
                        theEvent.layerX - anOffsetX,
                        theEvent.layerY - anOffsetY
                    );
                    if( aMousePoint) /* CQT */
                    return aMousePoint
                }
                /* With CSS3 transforms on the canvas */
                return m_Geometry.fPoint( theEvent.layerX, theEvent.layerY);

            }
            /*     ACV OJO TODO seems that we can really do just with event offsetX  offsetY  and works ok with CSS3 transforms
            var anOffsetX = 0;
            var anOffsetY = 0;

            if( this._v_Canvas) {
                var anElement = this._v_Canvas;

                if ( anElement.offsetParent) {
                    do {
                        anOffsetX += anElement.offsetLeft;
                        anOffsetY += anElement.offsetTop;
                        anElement =  anElement.offsetParent;
                    } while (anElement);
                }

                anOffsetX += this._v_StylePaddingLeft;
                anOffsetY += this._v_StylePaddingTop;
                anOffsetX += this._v_StyleBorderLeft;
                anOffsetY += this._v_StyleBorderTop;
            }

            return m_Geometry.fPoint( theEvent.pageX - anOffsetX, theEvent.pageY - anOffsetY);
            */

        })._sName( aPrototype._ModuleName, '_fGetMouseCoordinates')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt'],
                [ 'theEvent', ['object']]
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fGetMouseCoordinates._sDesc( 'Return mouse coordinates from a mouse event on the controlled Canvas, ' +
                'corrected to reflect any canvas padding.');

            aPrototype._doc+=('\n\n' + aPrototype._fGetMouseCoordinates._doc);
        }











        aPrototype.pAddExtraMouseListener = (function ( theCtxt, theMouseListener) {

            if( this._v_ExtraMouseListeners.indexOf( theMouseListener) < 0) {

                this._v_ExtraMouseListeners.push( theMouseListener);
            }


        })._sName( aPrototype._ModuleName, 'pAddExtraMouseListener')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theMouseListener', ['function']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pAddExtraMouseListener._sDesc( '');

            aPrototype._doc+=('\n\n' + aPrototype.pAddExtraMouseListener._doc);
        }









        aPrototype._pActivateQueueIfNeeded = (function ( theCtxt) {
            if( theCtxt) {}

            throw new m_Error.Error('NotImplementedError', {module: aPrototype._ModuleName, function: aPrototype._pActivateQueueIfNeeded});

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
        _prot_MotionGeneral.displayName='Prototype _prot_MotionGeneral';
        _privateMembers.push(_prot_MotionGeneral);
       _doc+=('\n\n' + _prot_MotionGeneral._doc);
    }








    var Subprot_MotionGeneral = (function() {

        this._v_Prot_MotionGeneral = _prot_MotionGeneral;
        this._v_Prot = this._v_Prot_MotionGeneral;

        this._v_Type = 'MotionGeneral';

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

        this._v_LoadImagesQueue = null;
        this._v_NumImagesToLoad = null;
        this._v_ImagesLoadCompleted = null;

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


    })._sName( _displayName, 'f_Constructor_MotionGeneral')._sTrace(_cTr);
    Subprot_MotionGeneral.prototype = _prot_MotionGeneral;
    _publicMembers.push(Subprot_MotionGeneral);
    if(m_Instrument.cDocFuncs) {
        Subprot_MotionGeneral._sDesc('Factory to create new instances of MotionGeneral to be used as more specific prototypes.');

        _doc+=('\n\n' + Subprot_MotionGeneral._doc);
    }








    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        Subprot_MotionGeneral:  Subprot_MotionGeneral
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_MotionGeneral')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error',
        'm_Identifiable', 'm_Instrument', 'm_Trace', 'm_Log', 'm_Watcher', 'm_Geometry',
        'm_FrameScheduler', 'm_ResLoader'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
        m_Identifiable, m_Instrument, m_Trace, m_Log, m_Watcher, m_Geometry,
        m_FrameScheduler, m_ResLoader) {

            return aM_MotionGeneral(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
                m_Identifiable, m_Instrument, m_Trace, m_Log, m_Watcher, m_Geometry,
                m_FrameScheduler, m_ResLoader);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_MotionGeneral.displayName]=aM_MotionGeneral(
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
            gChoirJS_Modules['m_ResLoader']
        );
    }
    else {
        ChoirJS_Module_MotionGeneral= aM_MotionGeneral(
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
            ChoirJS_Module_ResLoader
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_MotionGeneral')
}

