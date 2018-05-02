/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Changesture_Scrollbar')
}



var aChangesture_Scrollbar = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
                                        m_Instrument, m_Trace, m_Log, m_Geometry) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Changesture_Scrollbar')
    }

    if( m_Log) {}


    var _displayName = 'm_Changesture_Scrollbar';

    var _doc = _displayName +' module. Functions to handle user gestures on Changes represented in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';


    var _cMinMoveMillisToScroll = m_ConstValues_Tools.fConst( _displayName, '_cMinMoveMillisToScroll', Math.floor(1000 / 30));
    _doc+=('\n\n' +  JSON.stringify({_cMinMoveMillisToScroll: _cMinMoveMillisToScroll}, null, 4));


    var _cMinMoveXToScroll = m_ConstValues_Tools.fConst( _displayName, '_cMinMoveXToScroll', 5);
    _doc+=('\n\n' +  JSON.stringify({_cMinMoveXToScroll: _cMinMoveXToScroll}, null, 4));


    var _cMinMoveYToScroll = m_ConstValues_Tools.fConst( _displayName, '_cMinMoveYToScroll', 5);
    _doc+=('\n\n' +  JSON.stringify({_cMinMoveYToScroll: _cMinMoveYToScroll}, null, 4));



    _doc+=('\n\nPrototype and Constructor for m_Changesture_Scrollbar:');


    var _prot_Changesture_Scrollbar = (function() {

        var aPrototype = {};

        aPrototype._v_Type = 'Changesture_Scrollbar';
        aPrototype._v_InstancesType = 'Changesture_Scrollbar';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;


        aPrototype._privateMembers = [];





        aPrototype._pHandleGestures =  (function( theCtxt, theChangesture_Top, theBounds, theArrowHeight, theMousePoint) {

            this._v_Changesture_Top = theChangesture_Top;
            this._v_Bounds          = theBounds;
            this._v_ArrowHeight     = theArrowHeight;
            this._v_FirstMousePoint = theMousePoint;
            if( this._v_FirstMousePoint) {} /* CQT */
            this._v_LastMousePoint  = theMousePoint;

            this._v_LastMoveMillis    = null;

            this._v_HasMoved          = false;
            if( this._v_HasMoved) {} /* CQT */

            this._pHookListeners( theCtxt);

            return null;

        })._sName( aPrototype._ModuleName, '_pHandleGestures')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theChangesture_Top', ['Type', 'Changesture_Top']],
            [ 'theBounds',          ['Type', 'Rect']],
            [ 'theArrowHeight',     ['number']],
            [ 'theMousePoint',      ['Type', 'Point']]
        ]);
        aPrototype._privateMembers.push( aPrototype._pHandleGestures);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pHandleGestures._sDesc('Handle gestures on  a Canvas.');

            aPrototype._doc+=('\n\n' + aPrototype._pHandleGestures._doc);
        }







        aPrototype._pHookListeners =  (function( theCtxt) {

            if( theCtxt) {}

            if( !this._v_Changesture_Top || !this._v_Changesture_Top._v_ChangeGestures ||
                !this._v_Changesture_Top._v_ChangeGestures._v_Canvas) {
                return null;
            }
            var aChangesture_Scrollbar = this;


            this._v_Changesture_Top._v_ChangeGestures._v_Canvas.onmouseup = (function() {
                var aChangesture_Scrollbar_here = aChangesture_Scrollbar;
                return function( theEvent_arg) {
                    aChangesture_Scrollbar_here._fHandleMouseUp.apply( aChangesture_Scrollbar,[ m_Ctxt.fNewCtxt(), theEvent_arg]);
                }
            })();

            this._v_Changesture_Top._v_ChangeGestures._v_Canvas.onmousemove = (function() {
                var aChangesture_Scrollbar_here = aChangesture_Scrollbar;
                return function( theEvent_arg) {
                    aChangesture_Scrollbar_here._fHandleMouseMove.apply( aChangesture_Scrollbar,[ m_Ctxt.fNewCtxt(), theEvent_arg]);
                }
            })();

            this._v_Changesture_Top._v_ChangeGestures._v_Canvas.onmouseout = (function() {
                var aChangesture_Scrollbar_here = aChangesture_Scrollbar;
                return function( theEvent_arg) {
                    aChangesture_Scrollbar_here._fHandleMouseOut.apply( aChangesture_Scrollbar,[ m_Ctxt.fNewCtxt(), theEvent_arg]);
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

            if( !this._v_Changesture_Top || !this._v_Changesture_Top._v_ChangeGestures ||
                !this._v_Changesture_Top._v_ChangeGestures._v_Canvas) {
                return null;
            }

            this._v_Changesture_Top._v_ChangeGestures._v_Canvas.onmouseup = null;
            this._v_Changesture_Top._v_ChangeGestures._v_Canvas.onmousemove = null;
            this._v_Changesture_Top._v_ChangeGestures._v_Canvas.onmouseout = null;

            return null;

        })._sName( aPrototype._ModuleName, '_pHookListeners')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt']
            ]);
        aPrototype._privateMembers.push( aPrototype._pUnhookListeners);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pUnhookListeners._sDesc('Do not listen any more to events in the Canvas.');

            aPrototype._doc+=('\n\n' + aPrototype._pUnhookListeners._doc);
        }







        aPrototype._pDeactivate =  (function( theCtxt) {

            this._pUnhookListeners( theCtxt);

            if( this._v_Changesture_Top) {
                this._v_Changesture_Top.pDectivateChangesture( theCtxt, this);
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pDeactivate')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt']
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pDeactivate._sDesc('Deactivate this Changestures.');

            aPrototype._doc+=('\n\n' + aPrototype._pDeactivate._doc);
        }





        aPrototype.pRelease =  (function( theCtxt) {

            if( theCtxt) {}

            this._pUnhookListeners( theCtxt);

            this._v_Changesture_Top._v_ChangeGestures = null;

            return null;

        })._sName( aPrototype._ModuleName, 'pRelease')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt']
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pRelease._sDesc('Release listeners and resources set by this Changesture.');

            aPrototype._doc+=('\n\n' + aPrototype.pRelease._doc);
        }







        aPrototype._fHandleMouseUp =  (function( theCtxt, theEvent) {

            try {
                if( this._v_Changesture_Top._v_ChangeGestures) {

                    this._pUnhookListeners( theCtxt);

                    var aMousePoint = this._fGetMouseCoordinates( theCtxt, theEvent);

                    var aTopArrowBounds = m_Geometry.fRectExtent(
                        this._v_Bounds._v_OriginX,
                        this._v_Bounds._v_OriginY,
                        this._v_Bounds._v_Width,
                        this._v_ArrowHeight
                    );

                    if( aTopArrowBounds.fPointInRect( aMousePoint)) {
                        if( this._v_Changesture_Top && this._v_Changesture_Top._v_ChangeGestures &&
                            this._v_Changesture_Top._v_ChangeGestures._v_View) {

                            this._v_Changesture_Top._v_ChangeGestures._v_View.pScrollTop( theCtxt, this._v_Performance);

                            this._v_Changesture_Top._v_ChangeGestures._v_View.pRender( theCtxt, this._v_Performance);
                        }
                        return null;
                    }


                    var aBottomArrowBounds = m_Geometry.fRectExtent(
                        this._v_Bounds._v_OriginX,
                        this._v_Bounds._v_CornerY - this._v_ArrowHeight,
                        this._v_Bounds._v_Width,
                        this._v_ArrowHeight
                    );

                    if( aBottomArrowBounds.fPointInRect( aMousePoint)) {
                        if( this._v_Changesture_Top && this._v_Changesture_Top._v_ChangeGestures &&
                            this._v_Changesture_Top._v_ChangeGestures._v_View) {

                            this._v_Changesture_Top._v_ChangeGestures._v_View.pScrollBottom( theCtxt, this._v_Performance);

                            this._v_Changesture_Top._v_ChangeGestures._v_View.pRender( theCtxt, this._v_Performance);
                        }
                        return null;
                    }


                    if( !this._v_Bounds.fPointInRect( aMousePoint)) {
                        return null;
                    }

                    var aFraction =  ( aMousePoint._v_Y - this._v_Bounds._v_OriginY) /  this._v_Bounds._v_Height;

                    if( this._v_Changesture_Top && this._v_Changesture_Top._v_ChangeGestures &&
                        this._v_Changesture_Top._v_ChangeGestures._v_View) {

                        this._v_Changesture_Top._v_ChangeGestures._v_View.pScrollFraction( theCtxt,
                            this._v_Performance, aFraction);

                        this._v_Changesture_Top._v_ChangeGestures._v_View.pRender( theCtxt, this._v_Performance);
                    }

                    return null;

                }
            }
            finally {
                this._pDeactivate( theCtxt);
            }

            return null;

        })._sName( aPrototype._ModuleName, '_fHandleMouseUp')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt'],
                [ 'theEvent', ['object']]
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fHandleMouseUp._sDesc('Handle a mousedown event on the controlled Canvas.');

            aPrototype._doc+=('\n\n' + aPrototype._fHandleMouseUp._doc);
        }









        aPrototype._fHandleMouseMove =  (function( theCtxt, theEvent) {

            if( this._v_Changesture_Top._v_ChangeGestures) {


                this._pUnhookListeners( theCtxt);
                try {


                    var aMousePoint = this._fGetMouseCoordinates( theCtxt, theEvent);

                    var aMoveY = aMousePoint._v_Y - this._v_LastMousePoint._v_Y;

                    if(  Math.abs( aMoveY) >=_cMinMoveYToScroll) {

                        this._v_HasMoved = true;

                        var aNowMillis = new Date().getTime();

                        if( this._v_LastMoveMillis && (( aNowMillis - this._v_LastMoveMillis) < _cMinMoveMillisToScroll)) {

                            this._pHookListeners( theCtxt);
                            return null;
                        }

                        if( !this._v_LastMoveMillis) {
                            this._v_LastMoveMillis = aNowMillis;
                        }

                        var aFraction =  ( aMousePoint._v_Y - this._v_Bounds._v_OriginY) /  this._v_Bounds._v_Height;

                        if( this._v_Changesture_Top && this._v_Changesture_Top._v_ChangeGestures &&
                            this._v_Changesture_Top._v_ChangeGestures._v_View) {

                            this._v_Changesture_Top._v_ChangeGestures._v_View.pScrollFraction( theCtxt,
                                this._v_Performance, aFraction);

                            this._v_Changesture_Top._v_ChangeGestures._v_View.pRender( theCtxt, this._v_Performance);
                        }
                    }
                }
                finally {
                    this._pHookListeners( theCtxt);
                }
            }

            return null;

        })._sName( aPrototype._ModuleName, '_fHandleMouseMove')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt'],
                [ 'theEvent', ['object']]
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fHandleMouseMove._sDesc('Handle a mousemove event on the controlled Canvas.');

            aPrototype._doc+=('\n\n' + aPrototype._fHandleMouseMove._doc);
        }








        aPrototype._fHandleMouseOut =  (function( theCtxt, theEvent) {

            if( theEvent) {}

            try {
                if( this._v_Changesture_Top._v_ChangeGestures) {

                    this._pUnhookListeners( theCtxt);

                }
            }
            finally {
                this._pDeactivate( theCtxt);
            }

            return null;

        })._sName( aPrototype._ModuleName, '_fHandleMouseOut')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt'],
                [ 'theEvent', ['object']]
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fHandleMouseOut._sDesc('Handle a mouseout event on the controlled Canvas.');

            aPrototype._doc+=('\n\n' + aPrototype._fHandleMouseOut._doc);
        }







        aPrototype._fGetMouseCoordinates = (function ( theCtxt, theEvent) {
            if( !this._v_Changesture_Top._v_ChangeGestures) {
                return null;
            }

            return this._v_Changesture_Top._v_ChangeGestures.fGetMouseCoordinates( theCtxt, theEvent);

        })._sName( aPrototype._ModuleName, '_fGetMouseCoordinates')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt'],
                [ 'theEvent', ['object']]
            ]);
        aPrototype._privateMembers.push( aPrototype._fGetMouseCoordinates);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fGetMouseCoordinates._sDesc( 'Return mouse coordinates from a mouse event on the controlled Canvas, ' +
                'corrected to reflect any canvas padding.');

            aPrototype._doc+=('\n\n' + aPrototype._fGetMouseCoordinates._doc);
        }







        return aPrototype;
    })();
    _privateMembers.push(_prot_Changesture_Scrollbar);
    if(m_Instrument.cDocFuncs) {
        _doc+=('\n\n' + _prot_Changesture_Scrollbar._doc);
    }







    var f_Constructor_Changesture_Scrollbar = (function( theCtxt, thePerformance, theChangesture_Top,
                                                          theBounds, theArrowHeight, theMousePoint) {

        this._v_Type = 'Changesture_Scrollbar';

        this._v_Performance =     thePerformance;

        this._v_Changesture_Top= null;
        this._v_Bounds            = null;
        this._v_FirstMousePoint   = null;
        this._v_LastMousePoint    = null;

        this._v_LastMoveMillis    = null;
        this._v_ArrowHeight       = null;
        this._v_HasMoved          = null;

        this._pHandleGestures( theCtxt, theChangesture_Top, theBounds, theArrowHeight, theMousePoint);

    })._sName( _displayName, 'f_Constructor_Changesture_Scrollbar')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',    ['Type', 'Performance']],
            [ 'theChangesture_Top',['Type', 'Changesture_Top']],
            [ 'theBounds',         ['Type', 'Rect']],
            [ 'theArrowHeight',    ['number']],
            [ 'theMousePoint',     ['Type', 'Point']]
        ]);
    f_Constructor_Changesture_Scrollbar.prototype = _prot_Changesture_Scrollbar;
    _publicMembers.push( f_Constructor_Changesture_Scrollbar);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_Changesture_Scrollbar._sDesc('Constructor to create new instances of Changesture_Scrollbar.');

        _doc+=('\n\n' + f_Constructor_Changesture_Scrollbar._doc);
    }









    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        f_Constructor_Changesture_Scrollbar:  f_Constructor_Changesture_Scrollbar
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Changesture_Scrollbar')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_Geometry'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_Geometry) {

        return aChangesture_Scrollbar(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
            m_Trace, m_Log, m_Geometry);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aChangesture_Scrollbar.displayName]=aChangesture_Scrollbar(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Geometry']

        );
    }
    else {
        ChoirJS_Module_Changesture_Scrollbar= aChangesture_Scrollbar(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_Geometry

        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Changesture_Scrollbar')
}

