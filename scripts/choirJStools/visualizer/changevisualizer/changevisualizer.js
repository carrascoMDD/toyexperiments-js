/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ChangeVisualizer')
}



var aM_ChangeVisualizer = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
    m_Instrument, m_Trace, m_Log, m_Watcher, m_Geometry,
    m_ChangeChronograph, m_ChangeGestures, m_ViewChronograph) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ChangeVisualizer')
    }

    if( m_Log) {}


    var _displayName = 'm_ChangeVisualizer';

    var _doc = _displayName +' module. Functions to visualize received Changes in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';



    var _c_SchedulePaints = m_ConstValues_Tools.fConst( _displayName, '_c_SchedulePaints', false);
    _doc+=('\n\n' +  JSON.stringify({_c_SchedulePaints: _c_SchedulePaints}, null, 4));
    _doc+='If true, View painting shall not be done immediately after updating with Changes, ' +
        'but rather at a future time scheduled with an AnimationContext, or a Timeout.';


    var _c_UseAnimationContext = m_ConstValues_Tools.fConst( _displayName, '_c_UseAnimationContext', false);
    _doc+=('\n\n' +  JSON.stringify({_c_UseAnimationContext: _c_UseAnimationContext}, null, 4));
    _doc+='If _c_SchedulePaints is true then schedule View painting with an AnimationContext, and not with a Timeout.';


    var _c_FrameTimeoutIfNoAnimationContext = m_ConstValues_Tools.fConst( _displayName, '_c_FrameTimeoutIfNoAnimationContext',
        Math.floor( 1000 / 30));
    _doc+=('\n\n' +  JSON.stringify({_c_FrameTimeoutIfNoAnimationContext: _c_FrameTimeoutIfNoAnimationContext}, null, 4));


    var _c_CanvasWidth = m_ConstValues_Tools.fConst( _displayName, '_c_CanvasWidth', 512);
    _doc+=('\n\n' +  JSON.stringify({_c_CanvasWidth: _c_CanvasWidth}, null, 4));


    var _c_CanvasHeight = m_ConstValues_Tools.fConst( _displayName, '_c_CanvasHeight', 384);
    _doc+=('\n\n' +  JSON.stringify({_c_CanvasHeight: _c_CanvasHeight}, null, 4));



    var _c_ChronographViewInsetLeft = m_ConstValues_Tools.fConst( _displayName, '_c_ChronographViewInsetLeft', 48);
    _doc+=('\n\n' +  JSON.stringify({_c_ChronographViewInsetLeft: _c_ChronographViewInsetLeft}, null, 4));


    var _c_ChronographViewInsetTop = m_ConstValues_Tools.fConst( _displayName, '_c_ChronographViewInsetTop', 16);
    _doc+=('\n\n' +  JSON.stringify({_c_ChronographViewInsetTop: _c_ChronographViewInsetTop}, null, 4));


    var _c_ChronographViewInsetRight = m_ConstValues_Tools.fConst( _displayName, '_c_ChronographViewInsetRight', 32);
    _doc+=('\n\n' +  JSON.stringify({_c_ChronographViewInsetRight: _c_ChronographViewInsetRight}, null, 4));


    var _c_ChronographViewInsetBottom = m_ConstValues_Tools.fConst( _displayName, '_c_ChronographViewInsetBottom', 8);
    _doc+=('\n\n' +  JSON.stringify({_c_ChronographViewInsetBottom: _c_ChronographViewInsetTop}, null, 4));


    var _c_ArrowHeight = m_ConstValues_Tools.fConst( _displayName, '_c_ArrowHeight', 16);
    _doc+=('\n\n' +  JSON.stringify({_c_ArrowHeight: _c_ArrowHeight}, null, 4));


    var _c_BarHalfWidth = m_ConstValues_Tools.fConst( _displayName, '_c_BarHalfWidth', 8);
    _doc+=('\n\n' +  JSON.stringify({_c_BarHalfWidth: _c_BarHalfWidth}, null, 4));




    _doc+=('\n\nModule variables');

    var _g_AnimationFrameScheduler = null;
    _doc+=('\n\nModule variable _g_AnimationFrameScheduler Holds a function to schedule handlers for the next AnimationFrame.');




    _doc+=('\n\nPrototype and Factory for ChangeVisualizer:');


    var _prot_ChangeVisualizer = (function() {

        var aPrototype = {};

        aPrototype._v_Type = 'ChangeVisualizer';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];




        aPrototype._pOpenVisualizer =  (function( theCtxt, theReverseOrder, theCanvasOrId, theWidth, theHeight) {

            var aChronograph = new m_ChangeChronograph.f_Constructor_ChangeChronograph( theCtxt, this._v_Performance);
            if( !aChronograph) {
                throw new m_Error.Error('CreateObjectError', {module: aPrototype._ModuleName, function: aPrototype._pOpenVisualizer,  factoryModule: m_ChangeChronograph._displayName, factoryName: 'f_Constructor_ChangeChronograph', with: [theCtxt, this._v_Performance]});
            }
            this._v_Chronograph = aChronograph;


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
                throw new m_Error.Error('CanvasCreationError', {module: aPrototype._ModuleName, function: aPrototype._pOpenVisualizer});
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
                 throw new m_Error.Error('CanvasContext2DCreationError', {module: aPrototype._ModuleName, function: aPrototype._pOpenVisualizer});
            }
            this._v_2DContext = a2DContext;


            this._v_2DContext.fillStyle="#E0E0E0";
            this._v_2DContext.fillRect(0, 0, this._v_Canvas.width, this._v_Canvas.height);



            this._v_View = new m_ViewChronograph.f_Constructor_ChronographView( theCtxt,
                this._v_Performance,
                this._v_Chronograph,
                theReverseOrder ? true : false,
                this._v_Canvas,
                this._v_2DContext,
                _c_ChronographViewInsetLeft,
                _c_ChronographViewInsetTop,
                aCanvas.width  - _c_ChronographViewInsetLeft - _c_ChronographViewInsetRight,
                aCanvas.height - _c_ChronographViewInsetTop - _c_ChronographViewInsetBottom
            );
            if ( !this._v_View) {
                throw new m_Error.Error('ViewCreationError', {module: aPrototype._ModuleName, function: aPrototype._pOpenVisualizer});
            }

            this._v_ChronographViewBounds = m_Geometry.fRectExtent(
                _c_ChronographViewInsetLeft,
                _c_ChronographViewInsetTop,
                aCanvas.width  - _c_ChronographViewInsetLeft - _c_ChronographViewInsetRight,
                aCanvas.height - _c_ChronographViewInsetTop - _c_ChronographViewInsetBottom
            );

            this._v_ScrollbarBounds = m_Geometry.fRectExtent(
                aCanvas.width - _c_ChronographViewInsetRight,
                _c_ChronographViewInsetTop,
                _c_ChronographViewInsetRight,
                aCanvas.height - _c_ChronographViewInsetTop - _c_ChronographViewInsetBottom
            );

            this._v_ChangeGestures = new m_ChangeGestures.f_Constructor_ChangeGestures( theCtxt,
                this._v_Performance,
                this._v_Chronograph,
                this._v_View,
                this._v_Canvas,
                this._v_2DContext,
                this._v_ChronographViewBounds,
                this._v_ScrollbarBounds,
                _c_ArrowHeight
            );


            var aVisualizer = this;
            var aWatchHandler = (function() {
                var aVisualizerHere = aVisualizer;
                return function( theCtxtHere, thePerformance_arg, theChanges_arg) {
                    aVisualizerHere.pVisualizeChanges( theCtxtHere, thePerformance_arg, theChanges_arg);
                };
            })();
            aWatchHandler._sName( aPrototype._ModuleName, '_pOpenVisualizer.aChangeBrokerInterest').
                _sTrace(aPrototype._pOpenVisualizer._Trace);

            m_Watcher.pRegisterWatch( theCtxt, this._v_Performance, aWatchHandler); /* ACV OJO TODO changed order of arguments make sure still works */

            this._pRenderScrollbar( theCtxt, this._v_Performance);

            this._v_View.pRender( theCtxt, this._v_Performance);

            if( _c_SchedulePaints) {
                this._v_Performance._v_SchedulePaints = true;
                this._pPaintOnNextAnimationFrame( theCtxt, this._v_Performance);
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pOpenVisualizer')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theReverseOrder',  ['boolean', 'optional']],
            [ 'theCanvasOrId',    [ 'typeof', 'object', 'string', 'optional']], /* ACV OJO Defense TODO make sure this constraint works . It is also used in motionpics */
            [ 'theWidth',         ['number', 'optional']],
            [ 'theHeight',        ['number', 'optional']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pOpenVisualizer._sDesc(
            'Open a Canvas and 2D context for rendering with this ChangeVisualizer, and register interest in receiving Changes.');

            aPrototype._doc+=('\n\n' +  aPrototype._pOpenVisualizer._doc);
        }









        aPrototype._pRenderScrollbar =   (function( theCtxt, thePerformance) {

            if( thePerformance) {}


            this._v_2DContext.fillStyle="#FFFF00";

            this._v_2DContext.fillRect(
                this._v_ScrollbarBounds._v_OriginX,
                this._v_ScrollbarBounds._v_OriginY,
                this._v_ScrollbarBounds._v_Width,
                this._v_ScrollbarBounds._v_Height
            );

            this._v_2DContext.fillStyle="#808080";

            var aCenterX = Math.floor( ( this._v_ScrollbarBounds._v_OriginX + this._v_ScrollbarBounds._v_CornerX) / 2);

            this._v_2DContext.beginPath();
            this._v_2DContext.moveTo( aCenterX,  this._v_ScrollbarBounds._v_OriginY);
            this._v_2DContext.lineTo( this._v_ScrollbarBounds._v_CornerX, this._v_ScrollbarBounds._v_OriginY + _c_ArrowHeight);

            this._v_2DContext.lineTo( aCenterX + _c_BarHalfWidth, this._v_ScrollbarBounds._v_OriginY + _c_ArrowHeight);
            this._v_2DContext.lineTo( aCenterX + _c_BarHalfWidth, this._v_ScrollbarBounds._v_CornerY - _c_ArrowHeight);

            this._v_2DContext.lineTo( this._v_ScrollbarBounds._v_CornerX, this._v_ScrollbarBounds._v_CornerY - _c_ArrowHeight);

            this._v_2DContext.lineTo( aCenterX, this._v_ScrollbarBounds._v_CornerY);

            this._v_2DContext.lineTo( this._v_ScrollbarBounds._v_OriginX, this._v_ScrollbarBounds._v_CornerY - _c_ArrowHeight);

            this._v_2DContext.lineTo( aCenterX - _c_BarHalfWidth, this._v_ScrollbarBounds._v_CornerY - _c_ArrowHeight);

            this._v_2DContext.lineTo( aCenterX - _c_BarHalfWidth, this._v_ScrollbarBounds._v_OriginY + _c_ArrowHeight);
            this._v_2DContext.lineTo( this._v_ScrollbarBounds._v_OriginX, this._v_ScrollbarBounds._v_OriginY + _c_ArrowHeight);
            this._v_2DContext.closePath();
            this._v_2DContext.fill();
            this._v_2DContext.stroke();

            return null;

        })._sName( aPrototype._ModuleName, '_pScheduleNextAnimationFrame')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',         ['Type', 'Performance'], ['sameas', '_v_Performance']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pRenderScrollbar._sDesc(
            'Render the scrollbar.');

            _doc+=('\n\n' + aPrototype._pRenderScrollbar._doc);
        }








        aPrototype._pAnimationFrameHandler = (function( thePerformance) {

            if( thePerformance) {}

            var aCtxt =  m_Ctxt.fNewCtxt();

            if ( this._v_View) {
                this._v_View.pRender( aCtxt, this._v_Performance);
            }

            if( this._v_Performance._v_SchedulePaints) {
                this._pPaintOnNextAnimationFrame( aCtxt, this._v_Performance);
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pAnimationFrameHandler')._sTrace(_cTr)._DefendWith([
            [ 'thePerformance',         ['Type', 'Performance'], ['sameas', '_v_Performance']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pAnimationFrameHandler._sDesc(
            'Shall be executed asynchronously by an AnimationFrame schedule or a timeout.');

            _doc+=('\n\n' + aPrototype._pAnimationFrameHandler._doc);
        }









        aPrototype._pScheduleNextAnimationFrame =   (function( theCtxt, thePerformance, theAnimationFrameHandler) {

            if( thePerformance) {}

            if( !this._v_Performance._v_SchedulePaints) {
                return null;
            }

            if( !_g_AnimationFrameScheduler) {

                if( _c_UseAnimationContext) {

                    _g_AnimationFrameScheduler = window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        window.msRequestAnimationFrame;

                    if( !_g_AnimationFrameScheduler) {
                        throw new m_Error.Error('PlatformServiceUnavailableError', {module: _displayName, function: aPrototype._pScheduleNextAnimationFrame, platformService: 'AnimationFrame'});
                    }
                }
                else {
                    _g_AnimationFrameScheduler = function( theAnimationFrameHandler_arg) {
                        setTimeout( theAnimationFrameHandler_arg, _c_FrameTimeoutIfNoAnimationContext);
                    };
                }
            }
            if( !_g_AnimationFrameScheduler) {
                throw new m_Error.Error('PlatformServiceUnavailableError', {module: _displayName, function: aPrototype._pScheduleNextAnimationFrame, platformService: 'AnimationFrame'});
            }

            _g_AnimationFrameScheduler( theAnimationFrameHandler);

            return null;

        })._sName( aPrototype._ModuleName, '_pScheduleNextAnimationFrame')._sTrace(_cTr)._DefendWith([
            ['theCtxt'],
            [ 'thePerformance',           ['Type', 'Performance'], ['sameas', '_v_Performance']],
            /* ACV OJO Defense TODO most methods Defense included assertions about the supplied Performance argument being the same as the value of the _v_Performance property of the target object
            make sure that the sameas constraint works*/
            [ 'theAnimationFrameHandler', ['function']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pScheduleNextAnimationFrame._sDesc(
            'Shall be executed asynchronously by an AnimationFrame schedule or a timeout.');

            _doc+=('\n\n' + aPrototype._pScheduleNextAnimationFrame._doc);
        }










        aPrototype._pPaintOnNextAnimationFrame = (function( theCtxt, thePerformance) {

            if( thePerformance) {}

            if( !this._v_Performance._v_SchedulePaints) {
                return null;
            }

            var aThisChangeVisualizer = this;
            var anAnimationFrameHandler = (function() {
                var aChangeVisualizer_here = aThisChangeVisualizer;

                return function() {
                    aChangeVisualizer_here._pAnimationFrameHandler( aChangeVisualizer_here._v_Performance);
                }

            })();

            this._pScheduleNextAnimationFrame( theCtxt, this._v_Performance, anAnimationFrameHandler);

            return null;

        })._sName( aPrototype._ModuleName, '_pPaintOnNextAnimationFrame')._sTrace(_cTr)._DefendWith([
            ['theCtxt'],
            [ 'thePerformance',           ['Type', 'Performance'], ['sameas', '_v_Performance']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pPaintOnNextAnimationFrame._sDesc(
            'Render View on the Next AnimationFrame, and all AnimationFrames afterwards, until further notice.');

            _doc+=('\n\n' + aPrototype._pPaintOnNextAnimationFrame._doc);
        }









    aPrototype.pVisualizeChanges = (function( theCtxt, thePerformance, theChanges) {

            if( thePerformance) {}

            if( theChanges.length) {

                if ( this._v_Chronograph) {

                    this._v_Chronograph.pUpdateWithChanges( theCtxt, this._v_Performance, theChanges);

                    if (!this._v_Performance._v_SchedulePaints) {
                        if ( this._v_View) {
                            this._v_View.pRender( theCtxt, this._v_Performance);
                        }
                    }
                }
            }

            return null;

        })._sName( aPrototype._ModuleName, 'pVisualizeChanges')._sTrace(_cTr)._DefendWith([
            ['theCtxt'],
            ['thePerformance', ['Type', 'Performance']],
            [ 'theChanges',    ['object']] /* ACV OJO Defense TODO shall be array of any Change subtypes */
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pVisualizeChanges._sDesc(
            'Render supplied Changes in the Canvas 2D context of this ChangesVisualizer.');

            _doc+=('\n\n' + aPrototype.pVisualizeChanges._doc);
        }







        return aPrototype;
    })();
    if(m_Instrument.cDocFuncs) {
        _prot_ChangeVisualizer.displayName='Prototype _prot_ChangeVisualizer';
        _privateMembers.push(_prot_ChangeVisualizer);
        _doc+=('\n\n' + _prot_ChangeVisualizer._doc);
    }




    var f_Constructor_ChangeVisualizer = (function( theCtxt, thePerformance, theReverseOrder, theCanvasOrId, theWidth, theHeight) {

        this._v_Prot = _prot_ChangeVisualizer;

        this._v_Type = 'ChangeVisualizer';

        this._v_Performance =     thePerformance;

        this._v_Canvas =          null;
        this._v_2DContext =       null;
        this._v_Chronograph =     null;

        this._v_View = null;

        this._v_ScrollbarBounds = null;
        this._v_ChronographViewBounds = null;
        this._v_ChangeGestures = null;

        this._pOpenVisualizer( theCtxt, (theReverseOrder ? true: false), theCanvasOrId, theWidth, theHeight);

    })._sName( _displayName, 'f_Constructor_ChangeVisualizer')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',    ['Type', 'Performance']],
        [ 'theReverseOrder',   ['boolean', 'optional']],
        [ 'theCanvasOrId',     ['typeof', 'object', 'string', 'optional']],
        [ 'theWidth',          ['number', 'optional']],
        [ 'theHeight',         ['number', 'optional']]
    ]);
    f_Constructor_ChangeVisualizer.prototype = _prot_ChangeVisualizer;
    _publicMembers.push(f_Constructor_ChangeVisualizer);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_ChangeVisualizer._sDesc('Factory to create new instances of ChangeVisualizer.');
        _doc+=('\n\n' + f_Constructor_ChangeVisualizer._doc);
    }








    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        f_Constructor_ChangeVisualizer:  f_Constructor_ChangeVisualizer
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ChangeVisualizer')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_Watcher', 'm_Geometry',
        'm_ChangeChronograph', 'm_ChangeGestures', 'm_ViewChronograph'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_Watcher, m_Geometry,
        m_ChangeChronograph, m_ChangeGestures, m_ViewChronograph) {

            return aM_ChangeVisualizer(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
                m_Trace, m_Log, m_Watcher, m_Geometry,
                m_ChangeChronograph, m_ChangeGestures, m_ViewChronograph);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ChangeVisualizer.displayName]=aM_ChangeVisualizer(
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
            gChoirJS_Modules['m_ChangeChronograph'],
            gChoirJS_Modules['m_ChangeGestures'],
            gChoirJS_Modules['m_ViewChronograph']
        );
    }
    else {
        ChoirJS_Module_ChangeVisualizer= aM_ChangeVisualizer(
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
            ChoirJS_Module_ChangeChronograph,
            ChoirJS_Module_ChangeGestures,
            ChoirJS_Module_ChronographView
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ChangeVisualizer')
}

