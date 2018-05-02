/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Facebook_CanvasApp_MDDslTst01')
}


require(['m_ConstValues', 'm_ConstValues_Tools', 'm_Clock', 'm_Ctxt', 'm_URI', 'm_Geometry', 'm_CSSrules', 'm_MotionPics' ],
    function(m_ConstValues, m_ConstValues_Tools, m_Clock, m_Ctxt, m_URI, m_Geometry, m_CSSrules, m_MotionPics) {


        if( typeof fChoirJS_LogModuleLoads === 'function') {
            fChoirJS_LogModuleLoads('BEGIN m_Facebook_CanvasApp_MDDslTst01')
        }


        var someMotionCollections = [];
        var someParsedArgs = {};

        var aWindowLocation = window.location;
        if( aWindowLocation) {

            if( aWindowLocation.search) {
                var someArgs = decodeURI( aWindowLocation.search).substring(1).split('&');


                var aNumArgs = someArgs.length;
                for ( var anArgIndex=0; anArgIndex < aNumArgs; anArgIndex++) {
                    var anArg = someArgs[ anArgIndex];
                    if (anArg.indexOf('=') < 0) {
                        someParsedArgs[ anArg.trim()] = true;
                    }
                    else {
                        var aKeyAndValue = anArg.split('=');
                        someParsedArgs[ aKeyAndValue[0].trim()] = aKeyAndValue[1].trim();
                    }
                }
            }
        }



        if( someParsedArgs[ 'element']) {
            someMotionCollections.push( someParsedArgs[ 'element']);
            document.getElementById( 'MDD-ElementId_Field').value = someParsedArgs[ 'element'];
            document.getElementById( 'MDD-ElementId_Group').style.display = 'inline';
        }
        else {
            document.getElementById( 'MDD-ElementId_Field').value = '';
            document.getElementById( 'MDD-ElementId_Group').style.display = 'none';
        }

        if( someParsedArgs[ 'item']) {
            document.getElementById( 'MDD-Item_Field').value = someParsedArgs[ 'item'];
            document.getElementById( 'MDD-Item_Group').style.display = 'inline';
        }
        else {
            document.getElementById( 'MDD-Item_Field').value = '';
            document.getElementById( 'MDD-Item_Group').style.display = 'none';
        }


        var aNumFramesToSkip = 0;

        var someItemsToLoad = null;
        if ( someParsedArgs[ 'item']) {
            try {
                someItemsToLoad = [ parseInt( someParsedArgs[ 'item'])]; /* supplied and displayed base 1; internally base zero */
                aNumFramesToSkip = 60;
            }
            catch( anException) {}
        }




        var aMaxMotionPics = 29;

        if (!someMotionCollections.length) {

            for (var anIndex = 1; anIndex <= aMaxMotionPics; anIndex++) {
                someMotionCollections.push( 'Pollination-' + ( '00' + anIndex).substr(-2));
            }
        }


        var aCurrentCenterStage = null;
        var someMotionPics = [ ];
        var somePlaceHolders = [ ];

        var aNumMotionCollections = someMotionCollections.length;

        setTimeout(
            function() {

                var aCtxt = m_Ctxt.fNewCtxt();

                var aMaxActiveMotionPics = 0;

                var aThumbnailsHolder = document.getElementById('MDD-ThumbnailsHolder');

                for (var anIndex = 0; anIndex < aNumMotionCollections; anIndex++) {

                    var aPlaceHolderImg = document.createElement("img");
                    aPlaceHolderImg.className = 'MDDcss3Style-Placeholder-Hidden';
                    aThumbnailsHolder.appendChild( aPlaceHolderImg);
                    aPlaceHolderImg.src='onstage.gif';
                    somePlaceHolders.push( aPlaceHolderImg);


                    var aCanvas = document.createElement("canvas");
                    aCanvas.width = 640 + 12 + 12;
                    aCanvas.height = 480 + 16 + 12;
                    aCanvas.className = 'MDDcss3Style-canvas-Thumbnail';
                    aThumbnailsHolder.appendChild( aCanvas);


                    var aMotionPics = new m_MotionPics.f_Constructor_MotionPics( aCtxt,
                        'images/' + someMotionCollections[ anIndex],
                        'imageslist.txt', aCanvas, 0, 0,   /* null, 512, 384 */
                        (anIndex >= aMaxActiveMotionPics), /* load just first */
                        aNumFramesToSkip, /* skip 60 frames for a 1 frame per second rate */
                        someItemsToLoad /* An array. If null or empty then all items shall be loaded. */
                    );

                    someMotionPics.push( aMotionPics);

                    aMotionPics.pAddExtraMouseListener( aCtxt,
                        (function() {
                            return function( theCtxt, theMotionPics, theEvent) {
                                return fMotionPicsClicked( theCtxt, theMotionPics, theEvent);
                            }
                        })()
                    );


                    aPlaceHolderImg.onmouseup = (function() {
                        var aMotionPics_here = aMotionPics;
                        var aCtxt = m_Ctxt.fNewCtxt();
                        return function( theEvent) {
                            pPlaceHolderClicked( aCtxt, aMotionPics_here, theEvent);
                        }
                    })();

                    if( aNumMotionCollections === 1)  {

                        fMotionPicsClicked( aCtxt, aMotionPics);

                        if( ( someItemsToLoad === null) || ( someItemsToLoad.length > 1)) {
                            setTimeout(
                                (function() {
                                    var aMotionPics_here = aMotionPics;
                                    return (function() {
                                        aMotionPics_here.pPlay( aCtxt);

                                    });
                                })(),
                                1000
                            );
                        }
                        else {
                            setTimeout(
                                (function() {
                                    var aMotionPics_here = aMotionPics;
                                    return (function() {
                                        aMotionPics_here.pPause( aCtxt);

                                    });
                                })(),
                                1000
                            );
                        }
                    }

                }

                document.body.onmouseup  = (function() {
                    var aCtxt = m_Ctxt.fNewCtxt();
                    return function( theEvent) {
                        pBackgroundClicked( aCtxt, theEvent);
                    }
                })();

            },
            0
        );







        var pBackgroundClicked = (function( theCtxt, theEvent) {
            if( !( theEvent.target === document.body)) {
                return null;
            }

            if( aCurrentCenterStage) {

                aCurrentCenterStage.pPause( theCtxt);

                pBackToThumbnail( theCtxt, aCurrentCenterStage);
                aCurrentCenterStage = null;
            }

            return null;

        })._sName( 'm_Facebook_CanvasApp_MDDslTst01', 'pBackgroundClicked')._sTrace( false)._DefendWith([
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
                pBackToThumbnail( theCtxt, aCurrentCenterStage);

                aCurrentCenterStage = null;
            }
            else {
                pToCenterStage( theCtxt, theMotionPics);
                aCurrentCenterStage = theMotionPics;
                aCurrentCenterStage.pPlay( theCtxt);
            }

            return false;

        })._sName( 'm_Facebook_CanvasApp_MDDslTst01', 'fMotionPicsClicked')._sTrace( false)._DefendWith([
                [ 'theCtxt'],
                [ 'theMotionPics', ['Type', 'MotionPics']],
                [ 'theEvent',       ['object']]
            ]);









        var pPlaceHolderClicked = (function( theCtxt, theMotionPics, theEvent) {
            if( theEvent) {} /* CQT */

            if( aCurrentCenterStage && ( theMotionPics === aCurrentCenterStage)) {

                aCurrentCenterStage.pPause( theCtxt);

                pBackToThumbnail( theCtxt, aCurrentCenterStage);
                aCurrentCenterStage = null;
            }

            return null;

        })._sName( 'm_Facebook_CanvasApp_MDDslTst01', 'fMotionPicsClicked')._sTrace( false)._DefendWith([
                [ 'theCtxt'],
                [ 'theMotionPics', ['Type', 'MotionPics']],
                [ 'theEvent',       ['object']]
            ]);










        var pToCenterStage = (function( theCtxt, theMotionPics) {

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
                    pRemoveClass( theCtxt, aPlaceHolder, 'MDDcss3Style-Placeholder-Hidden');
                    pAddClass(    theCtxt, aPlaceHolder, 'MDDcss3Style-Placeholder-Shown');
                }
            }

            pAddClass(    theCtxt, theMotionPics._v_Canvas, 'MDDcss3Style-canvas-Thumbnail-ToCenterStage');
            pRemoveClass( theCtxt, theMotionPics._v_Canvas, 'MDDcss3Style-canvas-Thumbnail');

            setTimeout(
                (function() {
                    var aCtxt_here = theCtxt;
                    var aMotionPics_here = theMotionPics;
                    return function() {
                        pAddClass(    aCtxt_here, aMotionPics_here._v_Canvas, 'MDDcss3Style-canvas-CenterStage');
                        pRemoveClass( aCtxt_here, aMotionPics_here._v_Canvas, 'MDDcss3Style-canvas-Thumbnail-ToCenterStage');
                    }
                })(),
                0
            );


            return null;

        })._sName( 'm_Facebook_CanvasApp_MDDslTst01', 'pToCenterStage')._sTrace( false)._DefendWith([
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

        })._sName( 'm_Facebook_CanvasApp_MDDslTst01', '_fCanvasPositionLeft')._sTrace( false)._DefendWith([
                [ 'theCtxt'],
                [ 'theMotionPics', ['Type', 'MotionPics']]
            ]);









        var pBackToThumbnail = (function( theCtxt, theMotionPics) {

            pAddClass(    theCtxt, theMotionPics._v_Canvas, 'MDDcss3Style-canvas-Thumbnail-FromCenterStage');
            pRemoveClass( theCtxt, theMotionPics._v_Canvas, 'MDDcss3Style-canvas-CenterStage');


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
                            pRemoveClass( aCtxt_here, aPlaceHolder, 'MDDcss3Style-Placeholder-Shown');
                            pAddClass(    aCtxt_here, aPlaceHolder, 'MDDcss3Style-Placeholder-Hidden');
                        }
                    }

                    pRemoveClass( aCtxt_here, aMotionPics_here._v_Canvas, 'MDDcss3Style-canvas-Thumbnail-FromCenterStage');
                    pAddClass(    aCtxt_here, aMotionPics_here._v_Canvas, 'MDDcss3Style-canvas-Thumbnail');
                }
            })();

            for (var aEventNameIdx = 0; aEventNameIdx < aNumEventNames; aEventNameIdx++) {
                var aEventName = someEventNames[ aEventNameIdx];
                if (aEventName) {

                    theMotionPics._v_Canvas.addEventListener( aEventName, theMotionPics._v_AfterTransitionHandler, false);
                }
            }

            return null;

        })._sName( 'm_Facebook_CanvasApp_MDDslTst01', 'pBackToThumbnail')._sTrace( false)._DefendWith([
                [ 'theCtxt'],
                [ 'theMotionPics', ['Type', 'MotionPics']]
            ]);







        var pAddClass = (function( theCtxt, theElement, theClassName) {

            if( !theClassName) {
                return null;
            }

            if( !fHasClass( theCtxt, theElement, theClassName)) {
                if (!theElement.className) {
                    theElement.className = theClassName;
                }
                else {
                    theElement.className += ' ' + theClassName;
                }
            }

            return null;

        })._sName( 'm_Facebook_CanvasApp_MDDslTst01', 'pAddClass')._sTrace( false)._DefendWith([
                [ 'theCtxt'],
                [ 'theElement',       ['object']],
                [ 'theClassName',       ['string']]
            ]);








        var pRemoveClass = (function( theCtxt, theElement, theClassName) {

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

        })._sName( 'm_Facebook_CanvasApp_MDDslTst01', 'pAddClass')._sTrace( false)._DefendWith([
                [ 'theCtxt'],
                [ 'theElement',       ['object']],
                [ 'theClassName',       ['string']]
            ]);







        var fHasClass = (function( theCtxt, theElement, theClassName) {

            if( !theClassName) {
                return false;
            }

            var aClassNameAttr = theElement.className;
            if ( !( aClassNameAttr && aClassNameAttr.length)) {
                return false;
            }

            return aClassNameAttr.split( ' ').indexOf( theClassName) >= 0;

        })._sName( 'm_Facebook_CanvasApp_MDDslTst01', 'fHasClass')._sTrace( false)._DefendWith([
                [ 'theCtxt'],
                [ 'theElement',       ['object']],
                [ 'theClassName',       ['string']]
            ]);





        if( typeof fChoirJS_LogModuleLoads === 'function') {
            fChoirJS_LogModuleLoads('END m_Facebook_CanvasApp_MDDslTst01')
        }


    }
);


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Facebook_CanvasApp_MDDslTst01')
}
