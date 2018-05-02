/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Changesture_Top')
}



var aChangesture_Top = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
                                 m_Instrument, m_Trace, m_Log, m_Geometry,
                                 m_Changesture_Chronoview, m_Changesture_Scrollbar) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Changesture_Top')
    }

    if( m_Log) {}


    var _displayName = 'm_Changesture_Top';

    var _doc = _displayName +' module. Functions to handle user gestures on Changes represented in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';



    _doc+=('\n\nPrototype and Constructor for m_Changesture_Top:');


    var _prot_Changesture_Top = (function() {

        var aPrototype = {};

        aPrototype._v_Type = 'Changesture_Top';
        aPrototype._v_InstancesType = 'Changesture_Top';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;


        aPrototype._privateMembers = [];





        aPrototype._pHandleGestures =  (function( theCtxt, theChangeGestures) {

            this._v_ChangeGestures = theChangeGestures;

            this._v_ActiveChangesture = null;

            this._pHookListeners( theCtxt);

            return null;

        })._sName( aPrototype._ModuleName, '_pHandleGestures')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theChangeGestures',  ['Type', 'ChangeGestures']]
        ]);
        aPrototype._privateMembers.push( aPrototype._pHandleGestures);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pHandleGestures._sDesc('Handle gestures on  a Canvas.');

            aPrototype._doc+=('\n\n' + aPrototype._pHandleGestures._doc);
        }







        aPrototype._pHookListeners =  (function( theCtxt) {

            if( theCtxt) {}

            if( !this._v_ChangeGestures || !this._v_ChangeGestures._v_Canvas) {
                return null;
            }
            var aChangesture_Top = this;
            this._v_ChangeGestures._v_Canvas.onmousedown = (function() {
                var aChangesture_Top_here = aChangesture_Top;
                return function( theEvent_arg) {
                    aChangesture_Top_here._fHandleMouseDown.apply( aChangesture_Top,[ m_Ctxt.fNewCtxt(), theEvent_arg]);
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

            if( this._v_ChangeGestures && this._v_ChangeGestures._v_Canvas) {
                this._v_ChangeGestures._v_Canvas.onmousedown = null;
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pUnhookListeners')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        aPrototype._privateMembers.push( aPrototype._pUnhookListeners);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pUnhookListeners._sDesc('Do not listen any more to events in the Canvas.');

            aPrototype._doc+=('\n\n' + aPrototype._pUnhookListeners._doc);
        }







        aPrototype.pRelease =  (function( theCtxt) {

            if( theCtxt) {}

            this._pUnhookListeners( theCtxt);


            if( this._v_ActiveChangesture) {
                this._v_ActiveChangesture.pRelease( theCtxt);
            }

            this._v_ChangeGestures = null;

            return null;

        })._sName( aPrototype._ModuleName, 'pRelease')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pRelease._sDesc('Release listeners and resources set by this Changesture.');

            aPrototype._doc+=('\n\n' + aPrototype.pRelease._doc);
        }







        aPrototype._fHandleMouseDown =  (function( theCtxt, theEvent) {

            if( this._v_ChangeGestures) {

                var aHandled = false;

                this._pUnhookListeners( theCtxt);

                var aMousePoint = this._fGetMouseCoordinates( theCtxt, theEvent);

                if( this._v_ChangeGestures._v_ChronographViewRect &&
                    this._v_ChangeGestures._v_ChronographViewRect.fPointInRect( aMousePoint)) {

                    aHandled = true;

                    this._pActivateChangesture_Chronoview( theCtxt, aMousePoint);

                    return null;
                }

                if( this._v_ChangeGestures._v_ScrollbarRect &&
                    this._v_ChangeGestures._v_ScrollbarRect.fPointInRect( aMousePoint)) {

                    aHandled = true;

                    this._pActivateChangesture_Scrollbar( theCtxt, aMousePoint);

                    return null;
                }

                if( !aHandled) {
                    this._pHookListeners( theCtxt);
                }
            }

            return null;

        })._sName( aPrototype._ModuleName, '_fHandleMouseDown')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theEvent', ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fHandleMouseDown._sDesc('Handle a mousedown event on the controlled Canvas.');

            aPrototype._doc+=('\n\n' + aPrototype._fHandleMouseDown._doc);
        }








        aPrototype._fGetMouseCoordinates = (function ( theCtxt, theEvent) {
            if( !this._v_ChangeGestures) {
                return null;
            }

            return this._v_ChangeGestures.fGetMouseCoordinates( theCtxt, theEvent);

        })._sName( aPrototype._ModuleName, '_fGetMouseCoordinates')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theEvent', ['object']]
        ]);
        aPrototype._privateMembers.push(aPrototype._fGetMouseCoordinates);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fGetMouseCoordinates._sDesc( 'Return mouse coordinates from a mouse event on the controlled Canvas, ' +
            'corrected to reflect any canvas padding.');

            aPrototype._doc+=('\n\n' + aPrototype._fGetMouseCoordinates._doc);
        }








        aPrototype._pActivateChangesture_Chronoview =  (function( theCtxt, thePoint) {

            if( !this._v_ChangeGestures) {
                return null;
            }

            var anActivated = false;
            try {
                this._v_ActiveChangesture = new m_Changesture_Chronoview.f_Constructor_Changesture_Chronoview( theCtxt,
                    this._v_Performance, this, this._v_ChangeGestures._v_ChronographViewRect, thePoint);
                anActivated = true;
            }
            finally {
                if (!anActivated) {
                    this._pHookListeners( theCtxt);
                }
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pActivateChangesture_Chronoview')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePoint', ['Type', 'Point']]
        ]);
        aPrototype._privateMembers.push( aPrototype._pActivateChangesture_Chronoview);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pActivateChangesture_Chronoview._sDesc('Handle a mousedown event on the controlled Canvas.');

            aPrototype._doc+=('\n\n' + aPrototype._pActivateChangesture_Chronoview._doc);
        }







        aPrototype._pActivateChangesture_Scrollbar =  (function( theCtxt, thePoint) {

            var anActivated = false;
            try {
                this._v_ActiveChangesture = new m_Changesture_Scrollbar.f_Constructor_Changesture_Scrollbar( theCtxt,
                    this._v_Performance, this,
                    this._v_ChangeGestures._v_ScrollbarRect, this._v_ChangeGestures._v_ArrowHeight, thePoint);
                anActivated = true;
            }
            finally {
                if (!anActivated) {
                    this._pHookListeners( theCtxt);
                }
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pActivateChangesture_Scrollbar')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePoint', ['Type', 'Point']]
        ]);
        aPrototype._privateMembers.push( aPrototype._pActivateChangesture_Scrollbar);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pActivateChangesture_Scrollbar._sDesc('Handle a mousedown event on the controlled Canvas.');

            aPrototype._doc+=('\n\n' + aPrototype._pActivateChangesture_Scrollbar._doc);
        }







        aPrototype.pDectivateChangesture =  (function( theCtxt, theActiveChangesture) {

            if( !theActiveChangesture) {
                return null;
            }

            if( !( theActiveChangesture === this._v_ActiveChangesture)) {
                return null;
            }

            this._v_ActiveChangesture = null;

            this._pHookListeners( theCtxt);

            return null;

        })._sName( aPrototype._ModuleName, 'pDectivateChangesture')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theActiveChangesture', ['Type', 'Changesture_Chronoview', 'Changesture_Scrollbar']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pDectivateChangesture._sDesc('Deactivate the supplied Changesture if it is the active Changesture.');

            aPrototype._doc+=('\n\n' + aPrototype.pDectivateChangesture._doc);
        }





        return aPrototype;
    })();
    _privateMembers.push(_prot_Changesture_Top);
    if(m_Instrument.cDocFuncs) {
        _doc+=('\n\n' + _prot_Changesture_Top._doc);
    }






    var f_Constructor_Changesture_Top = (function( theCtxt, thePerformance, theChangeGestures) {

        this._v_Type = 'Changesture_Top';

        this._v_Performance =     thePerformance;

        this._v_ChangeGestures    = null;

        this._v_ActiveChangesture = null;

        this._pHandleGestures( theCtxt, theChangeGestures);

    })._sName( _displayName, 'f_Constructor_Changesture_Top')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',  ['Type', 'Performance']],
        [ 'theChangeGestures',  ['Type', 'ChangeGestures']]
    ]);
    f_Constructor_Changesture_Top.prototype = _prot_Changesture_Top;
    _publicMembers.push( f_Constructor_Changesture_Top);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_Changesture_Top._sDesc('Constructor to create new instances of Changesture_Top.');

        _doc+=('\n\n' + f_Constructor_Changesture_Top._doc);
    }









    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        f_Constructor_Changesture_Top:  f_Constructor_Changesture_Top
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Changesture_Top')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_Geometry',
        'm_Changesture_Chronoview', 'm_Changesture_Scrollbar'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_Geometry,
        m_Changesture_Chronoview, m_Changesture_Scrollbar) {

        return aChangesture_Top(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
            m_Trace, m_Log, m_Geometry,
            m_Changesture_Chronoview, m_Changesture_Scrollbar);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aChangesture_Top.displayName]=aChangesture_Top(
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
            gChoirJS_Modules['m_Changesture_Chronoview'],
            gChoirJS_Modules['m_Changesture_Scrollbar']

        );
    }
    else {
        ChoirJS_Module_Changesture_Top= aChangesture_Top(
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
            ChoirJS_Module_Changesture_Chronoview,
            ChoirJS_Module_Changesture_Scrollbar

        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Changesture_Top')
}

