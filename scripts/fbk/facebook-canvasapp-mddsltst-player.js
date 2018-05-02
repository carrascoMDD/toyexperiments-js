/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Facebook_CanvasApp_MDDslTst_Player')
}






var aM_Facebook_CanvasApp_MDDslTst_Player = function (
    m_ConstValues, m_ConstValues_Tools, m_Clock, m_Ctxt, m_Trace, m_Defense, m_URI, m_Geometry, m_CSSrules) {


    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Facebook_CanvasApp_MDDslTst_Player')
    }



    var _displayName = 'm_MotionPics';

    var _doc = _displayName +' module. Functions to visualize received Changes in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];

    var aCurrentCenterStage = null;


    var someMotionPics = [ ];
    var somePlaceHolders = [ ];




    var pBackgroundClicked = (function( theCtxt, theEvent) {
        if( !( theEvent.target === document.body)) {
            return null;
        }

        if( aCurrentCenterStage) {

            aCurrentCenterStage.pPause( theCtxt);

            _pBackToThumbnail( theCtxt, aCurrentCenterStage);
            aCurrentCenterStage = null;
        }

        return null;

    })._sName( 'm_Facebook_CanvasApp_MDDslTst_Player', 'pBackgroundClicked')._sTrace( false)._DefendWith([
            [ 'theCtxt'],
            [ 'theEvent',       ['object']]
        ]);








    var fMotionPicsClicked = (function( theCtxt, theMotionPics, theEvent) {
        if( theEvent) {} /* CQT */

        if( aCurrentCenterStage) {

            if( theMotionPics === aCurrentCenterStage) {
                return true;
            }

            aCurrentCenterStage.pPause( theCtxt);
            _pBackToThumbnail( theCtxt, aCurrentCenterStage);

            aCurrentCenterStage = null;
        }
        else {
            _pToCenterStage( theCtxt, theMotionPics);
            aCurrentCenterStage = theMotionPics;
            aCurrentCenterStage.pPlay( theCtxt);
        }

        return false;

    })._sName( 'm_Facebook_CanvasApp_MDDslTst_Player', 'fMotionPicsClicked')._sTrace( false)._DefendWith([
            [ 'theCtxt'],
            [ 'theMotionPics', ['Type', 'MotionPics']],
            [ 'theEvent',       ['object']]
        ]);









    var pPlaceHolderClicked = (function( theCtxt, theMotionPics, theEvent) {
        if( theEvent) {} /* CQT */

        if( aCurrentCenterStage && ( theMotionPics === aCurrentCenterStage)) {

            aCurrentCenterStage.pPause( theCtxt);

            _pBackToThumbnail( theCtxt, aCurrentCenterStage);
            aCurrentCenterStage = null;
        }

        return null;

    })._sName( 'm_Facebook_CanvasApp_MDDslTst_Player', 'fMotionPicsClicked')._sTrace( false)._DefendWith([
        [ 'theCtxt'],
        [ 'theMotionPics', ['Type', 'MotionPics']],
        [ 'theEvent',       ['object']]
    ]);





    var _pToCenterStage = (function( theCtxt, theMotionPics) {

        var aCanvasOrigin = _fCanvasPosition( theCtxt, theMotionPics);
        var aMarginLeft = '' + aCanvasOrigin._v_X + 'px';

        var aToCenterStageStyleRule = m_CSSrules.getCSSRule('.MDDcss3Style-canvas-Thumbnail-ToCenterStage');
        if( aToCenterStageStyleRule) {
            aToCenterStageStyleRule.style['margin-left']= aMarginLeft;
            aToCenterStageStyleRule.style.marginLeft= aMarginLeft; /* Firefox */
        }
        var aFromCenterStageStyleRule = m_CSSrules.getCSSRule('.MDDcss3Style-canvas-Thumbnail-FromCenterStage');
        if( aFromCenterStageStyleRule) {
            aFromCenterStageStyleRule.style['margin-left']= aMarginLeft;
            aFromCenterStageStyleRule.style.marginLeft = aMarginLeft; /* Firefox */
        }


        var aPlaceHolderIndex = someMotionPics.indexOf( theMotionPics);
        if ( aPlaceHolderIndex >= 0) {
            var aPlaceHolder = somePlaceHolders[ aPlaceHolderIndex];
            if ( aPlaceHolder) {
                _pRemoveClass( theCtxt, aPlaceHolder, 'MDDcss3Style-Placeholder-Hidden');
                _pAddClass(    theCtxt, aPlaceHolder, 'MDDcss3Style-Placeholder-Shown');
            }
        }

        _pAddClass(    theCtxt, theMotionPics._v_Canvas, 'MDDcss3Style-canvas-Thumbnail-ToCenterStage');
        _pRemoveClass( theCtxt, theMotionPics._v_Canvas, 'MDDcss3Style-canvas-Thumbnail');

        setTimeout(
            (function() {
                var aCtxt_here = theCtxt;
                var aMotionPics_here = theMotionPics;
                return function() {
                    _pAddClass(    aCtxt_here, aMotionPics_here._v_Canvas, 'MDDcss3Style-canvas-CenterStage');
                    _pRemoveClass( aCtxt_here, aMotionPics_here._v_Canvas, 'MDDcss3Style-canvas-Thumbnail-ToCenterStage');
                }
            })(),
            0
        );


        return null;

    })._sName( 'm_Facebook_CanvasApp_MDDslTst_Player', '_pToCenterStage')._sTrace( false)._DefendWith([
        [ 'theCtxt'],
        [ 'theMotionPics', ['Type', 'MotionPics']]
    ]);





    var _fCanvasPosition = (function( theCtxt, theMotionPics) {

        var anElement = theMotionPics._v_Canvas;
        var anElement2 = anElement;
        var aCurTop = 0;
        var aCurLeft = 0;
        if ( document.getElementById || document.all) {
            do  {
                aCurLeft += anElement.offsetLeft-anElement.scrollLeft;
                aCurTop += anElement.offsetTop-anElement.scrollTop;
                anElement = anElement.offsetParent;
                anElement2 = anElement2.parentNode;
                while ( anElement2 != anElement) {
                    aCurLeft -= anElement2.scrollLeft;
                    aCurTop -= anElement2.scrollTop;
                    anElement2 = anElement2.parentNode;
                }
            } while (anElement.offsetParent)
        } else if (document.layers) {
            aCurTop += anElement.y;
            aCurLeft += anElement.x;
        }
        return m_Geometry.fPoint( aCurLeft, aCurTop);

    })._sName( 'm_Facebook_CanvasApp_MDDslTst_Player', '_fCanvasPositionLeft')._sTrace( false)._DefendWith([
        [ 'theCtxt'],
        [ 'theMotionPics', ['Type', 'MotionPics']]
    ]);









    var _pBackToThumbnail = (function( theCtxt, theMotionPics) {

        _pAddClass(    theCtxt, theMotionPics._v_Canvas, 'MDDcss3Style-canvas-Thumbnail-FromCenterStage');
        _pRemoveClass( theCtxt, theMotionPics._v_Canvas, 'MDDcss3Style-canvas-CenterStage');


        var someEventNames = [ 'webkitTransitionEnd',  'transitionend',  'oTransitionEnd'];
        var aNumEventNames = someEventNames.length;

        theMotionPics._v_AfterTransitionHandler = (function() {
            var aCtxt_here = theCtxt;
            var aMotionPics_here = theMotionPics;
            return function() {

                if( aMotionPics_here._v_AfterTransitionHandler) {
                    for (var aEventNameIdx = 0; aEventNameIdx < aNumEventNames; aEventNameIdx++) {
                        var aEventName = someEventNames[ aEventNameIdx];
                        if (aEventName) {

                            aMotionPics_here._v_Canvas.removeEventListener( aEventName, aMotionPics_here._v_AfterTransitionHandler);
                        }
                    }
                    aMotionPics_here._v_AfterTransitionHandler = null;
                }

                var aPlaceHolderIndex = someMotionPics.indexOf( aMotionPics_here);
                if ( aPlaceHolderIndex >= 0) {
                    var aPlaceHolder = somePlaceHolders[ aPlaceHolderIndex];
                    if ( aPlaceHolder) {
                        _pRemoveClass( aCtxt_here, aPlaceHolder, 'MDDcss3Style-Placeholder-Shown');
                        _pAddClass(    aCtxt_here, aPlaceHolder, 'MDDcss3Style-Placeholder-Hidden');
                    }
                }

                _pRemoveClass( aCtxt_here, aMotionPics_here._v_Canvas, 'MDDcss3Style-canvas-Thumbnail-FromCenterStage');
                _pAddClass(    aCtxt_here, aMotionPics_here._v_Canvas, 'MDDcss3Style-canvas-Thumbnail');
            }
        })();

        for (var aEventNameIdx = 0; aEventNameIdx < aNumEventNames; aEventNameIdx++) {
            var aEventName = someEventNames[ aEventNameIdx];
            if (aEventName) {

                theMotionPics._v_Canvas.addEventListener( aEventName, theMotionPics._v_AfterTransitionHandler, false);
            }
        }

        return null;

    })._sName( 'm_Facebook_CanvasApp_MDDslTst_Player', '_pBackToThumbnail')._sTrace( false)._DefendWith([
        [ 'theCtxt'],
        [ 'theMotionPics', ['Type', 'MotionPics']]
    ]);







    var _pAddClass = (function( theCtxt, theElement, theClassName) {

        if( !theClassName) {
            return null;
        }

        if( !_fHasClass( theCtxt, theElement, theClassName)) {
            if (!theElement.className) {
                theElement.className = theClassName;
            }
            else {
                theElement.className += ' ' + theClassName;
            }
        }

        return null;

    })._sName( 'm_Facebook_CanvasApp_MDDslTst_Player', '_pAddClass')._sTrace( false)._DefendWith([
        [ 'theCtxt'],
        [ 'theElement',       ['object']],
        [ 'theClassName',       ['string']]
    ]);








    var _pRemoveClass = (function( theCtxt, theElement, theClassName) {

        if( !theClassName) {
            return null;
        }

        var aClassNameAttr = theElement.className;
        if ( !( aClassNameAttr && aClassNameAttr.length)) {
            return null;
        }

        var someClassNames = aClassNameAttr.split( ' ');
        var aClassNameIndex = someClassNames.indexOf( theClassName);
        if ( aClassNameIndex < 0) {
            return null;
        }
        someClassNames = someClassNames.slice( 0, aClassNameIndex).concat( someClassNames.slice( aClassNameIndex + 1));

        theElement.className = someClassNames.join( ' ');

        return null;

    })._sName( 'm_Facebook_CanvasApp_MDDslTst_Player', '_pAddClass')._sTrace( false)._DefendWith([
        [ 'theCtxt'],
        [ 'theElement',       ['object']],
        [ 'theClassName',       ['string']]
    ]);







    var _fHasClass = (function( theCtxt, theElement, theClassName) {

        if( !theClassName) {
            return false;
        }

        var aClassNameAttr = theElement.className;
        if ( !( aClassNameAttr && aClassNameAttr.length)) {
            return false;
        }

        return aClassNameAttr.split( ' ').indexOf( theClassName) >= 0;

    })._sName( 'm_Facebook_CanvasApp_MDDslTst_Player', '_fHasClass')._sTrace( false)._DefendWith([
        [ 'theCtxt'],
        [ 'theElement',       ['object']],
        [ 'theClassName',       ['string']]
    ]);






    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers: _publicMembers,
        _privateMembers: _privateMembers,

        pBackgroundClicked: pBackgroundClicked,
        fMotionPicsClicked: fMotionPicsClicked,
        pPlaceHolderClicked: pPlaceHolderClicked,
        someMotionPics:      someMotionPics,
        somePlaceHolders:    somePlaceHolders

    };
    if (aModule) {
    }

    return aModule;
};


if (typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Facebook_CanvasApp_MDDslTst_Player')
}


if (typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Clock', 'm_Ctxt', 'm_Trace', 'm_Defense', 'm_URI', 'm_Geometry', 'm_CSSrules'],
        function (m_ConstValues, m_ConstValues_Tools, m_Clock, m_Ctxt, m_Trace, m_Defense, m_URI, m_Geometry, m_CSSrules) {

    return aM_Facebook_CanvasApp_MDDslTst_Player(
        m_ConstValues, m_ConstValues_Tools, m_Clock, m_Ctxt, m_Trace, m_Defense, m_URI, m_Geometry, m_CSSrules);
    });
}
else {

    if (typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Facebook_CanvasApp_MDDslTst_Player.displayName] = aM_Facebook_CanvasApp_MDDslTst_Player(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Clock'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_URI'],
            gChoirJS_Modules['m_Geometry'],
            gChoirJS_Modules['m_CSSrules']
        );
    }
    else {
        ChoirJS_Module_Facebook_CanvasApp_MDDslTst_Player = aM_Facebook_CanvasApp_MDDslTst_Player(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Clock,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Defense,
            ChoirJS_Module_URI,
            ChoirJS_Module_Geometry,
            ChoirJS_Module_CSSrules
        );
    }
}


if (typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Facebook_CanvasApp_MDDslTst_Player')
}

