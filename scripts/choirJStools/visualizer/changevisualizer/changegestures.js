/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ChangeGestures')
}



var aM_ChangeGestures = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
                                    m_Instrument, m_Trace, m_Log, m_Geometry,
                                    m_Changesture_Top) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ChangeGestures')
    }

    if( m_Log) {}


    var _displayName = 'm_ChangeGestures';

    var _doc = _displayName +' module. Functions to handle user gestures on Changes represented in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';



    _doc+=('\n\nPrototype and Constructor for ChangeGestures:');


    var _prot_ChangeGestures = (function() {

        var aPrototype = {};

        aPrototype._v_Type = 'ChangeGestures';
        aPrototype._v_InstancesType = 'ChangeGestures';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;





        aPrototype._pHandleGestures =  (function( theCtxt, theChronograph, theView, theCanvas, the2DContext,
                                                  theChronographViewRect, theScrollbarRect, theArrowHeight) {

            this._v_Chronograph = theChronograph;
            this._v_View = theView;

            this._v_Canvas = theCanvas;

            this._v_ChronographViewRect = theChronographViewRect;
            this._v_ScrollbarRect       = theScrollbarRect;
            this._v_ArrowHeight         = theArrowHeight;


            if (document.defaultView && document.defaultView.getComputedStyle) {
                this._v_StylePaddingLeft = parseInt(document.defaultView.getComputedStyle(this._v_Canvas, null)['paddingLeft'], 10)      || 0;
                this._v_StylePaddingTop  = parseInt(document.defaultView.getComputedStyle(this._v_Canvas, null)['paddingTop'], 10)       || 0;
                this._v_StyleBorderLeft  = parseInt(document.defaultView.getComputedStyle(this._v_Canvas, null)['borderLeftWidth'], 10)  || 0;
                this._v_StyleBorderTop   = parseInt(document.defaultView.getComputedStyle(this._v_Canvas, null)['borderTopWidth'], 10)   || 0;
            }
            else {
                this._v_StylePaddingLeft = 0;
                this._v_StylePaddingTop  = 0;
                this._v_StyleBorderLeft  = 0;
                this._v_StyleBorderTop   = 0;
            }


            this._v_Changestures_Top = new m_Changesture_Top.f_Constructor_Changesture_Top( theCtxt, this._v_Performance,
                this);

            return null;

        })._sName( aPrototype._ModuleName, '_pHandleGestures')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theChronograph',         ['Type', 'ChangeChronograph']],
            [ 'theView',                ['Type', 'ChronographView']],
            [ 'theCanvas',              ['object']],
            [ 'the2DContext',           ['object']],
            [ 'theChronographViewRect', ['Type', 'Rect']],
            [ 'theScrollbarRect',       ['Type', 'Rect']],
            [ 'theArrowHeight',         ['number']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pHandleGestures._sDesc('Handle gestures on  a Canvas.');
        }









        aPrototype.pRelease =  (function( theCtxt) {

            if( theCtxt) {}

            if( this._v_Changestures_Top) {
                this._v_Changestures_Top.pRelease( theCtxt);
            }

            this._v_Chronograph = null;
            this._v_View = null;

            this._v_Canvas = null;

            this._v_ChronographViewRect = null;
            this._v_ScrollbarRect       = null;

            return null;

        })._sName( aPrototype._ModuleName, 'pRelease')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pRelease._sDesc('Handle gestures on  a Canvas.');
        }









        aPrototype.fGetMouseCoordinates = (function ( theCtxt, theEvent) {

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

        })._sName( aPrototype._ModuleName, 'fGetMouseCoordinates')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theEvent', ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fGetMouseCoordinates._sDesc( 'Return mouse coordinates from a mouse event on the controlled Canvas, ' +
                'corrected to reflect any canvas padding.');

            _doc+=('\n\n' + aPrototype.fGetMouseCoordinates._doc);
        }






        return aPrototype;
    })();
    _privateMembers.push(_prot_ChangeGestures);
    if(m_Instrument.cDocFuncs) {
        _doc+=('\n\n' + _prot_ChangeGestures._doc);
    }






    var f_Constructor_ChangeGestures = (function( theCtxt, thePerformance,
                                                  theChronograph, theView, theCanvas, the2DContext,
                                                  theChronographViewRect, theScrollbarRect, theArrowHeight) {

        this._v_Type = 'ChangeGestures';

        this._v_Performance =     thePerformance;

        this._v_Chronograph =           null;
        this._v_View=             null;

        this._v_ChronographViewRect = null;
        this._v_ScrollbarRect = null;


        this._v_Canvas =          null;
        this._v_2DContext =       null;

        this._v_StylePaddingLeft = 0;
        this._v_StylePaddingTop  = 0;
        this._v_StyleBorderLeft  = 0;
        this._v_StyleBorderTop   = 0;

        this._pHandleGestures( theCtxt, theChronograph, theView, theCanvas, the2DContext,
            theChronographViewRect, theScrollbarRect, theArrowHeight);

    })._sName( _displayName, 'f_Constructor_ChangeGestures')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',         ['Type', 'Performance']],
        [ 'theChronograph',         ['Type', 'ChangeChronograph']],
        [ 'theView',                ['Type', 'ChronographView']],
        [ 'theCanvas',              ['object']],
        [ 'the2DContext',           ['object']],
        [ 'theChronographViewRect', ['Type', 'Rect']],
        [ 'theScrollbarRect',       ['Type', 'Rect']],
        [ 'theArrowHeight',         ['number']]
    ]);
    f_Constructor_ChangeGestures.prototype = _prot_ChangeGestures;
    _publicMembers.push( f_Constructor_ChangeGestures);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_ChangeGestures._sDesc('Constructor to create new instances of ChangeGestures.');

        _doc+=('\n\n' + f_Constructor_ChangeGestures._doc);
    }










    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        f_Constructor_ChangeGestures:  f_Constructor_ChangeGestures
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ChangeGestures')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_Geometry', 'm_Changesture_Top'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_Geometry, m_Changesture_Top) {

        return aM_ChangeGestures(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
            m_Trace, m_Log, m_Geometry, m_Changesture_Top);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ChangeGestures.displayName]=aM_ChangeGestures(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Geometry'],
            gChoirJS_Modules['m_Changesture_Top']

        );
    }
    else {
        ChoirJS_Module_ChangeGestures= aM_ChangeGestures(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_Geometry,
            ChoirJS_Module_Changesture_Top
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ChangeGestures')
}

