/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Experiment_MotionThumbnails01')
}


require(['m_ConstValues', 'm_ConstValues_Tools', 'm_Clock', 'm_Ctxt', 'm_MotionPics' ],
    function(m_ConstValues, m_ConstValues_Tools, m_Clock, m_Ctxt, m_MotionPics) {


        if( typeof fChoirJS_LogModuleLoads === 'function') {
            fChoirJS_LogModuleLoads('BEGIN m_Experiment_MotionThumbnails01')
        }


        var aCurrentCenterStage = null;
        var someMotionPics = [ ];
        var somePlaceHolders = [ ];

        setTimeout(
            function() {

                var aCtxt = m_Ctxt.fNewCtxt();

                var aMaxMotionPics = 29;
                var aMaxActiveMotionPics = 0;

                var aThumbnailsHolder = document.getElementById('MDD-ThumbnailsHolder');

                for (var anIndex = 1; anIndex <= aMaxMotionPics; anIndex++) {

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
                        'images/Pollination-' + ( '00' + anIndex).substr(-2),
                        'imageslist.txt', aCanvas, 0, 0, (anIndex > aMaxActiveMotionPics) /* load just first */
                        /* null, 512, 384 */);

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

        })._sName( 'm_Experiment_MotionThumbnails01', 'pBackgroundClicked')._sTrace( false)._DefendWith([
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

        })._sName( 'm_Experiment_MotionThumbnails01', 'fMotionPicsClicked')._sTrace( false)._DefendWith([
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

        })._sName( 'm_Experiment_MotionThumbnails01', 'fMotionPicsClicked')._sTrace( false)._DefendWith([
                [ 'theCtxt'],
                [ 'theMotionPics', ['Type', 'MotionPics']],
                [ 'theEvent',       ['object']]
            ]);










        var pBackToThumbnail = (function( theCtxt, theMotionPics) {

            var aPlaceHolderIndex = someMotionPics.indexOf( theMotionPics);
            if ( aPlaceHolderIndex >= 0) {
                var aPlaceHolder = somePlaceHolders[ aPlaceHolderIndex];
                if ( aPlaceHolder) {
                    pRemoveClass( theCtxt, aPlaceHolder, 'MDDcss3Style-Placeholder-Shown');
                    pAddClass(    theCtxt, aPlaceHolder, 'MDDcss3Style-Placeholder-Hidden');
                }
            }

            pRemoveClass( theCtxt, theMotionPics._v_Canvas, 'MDDcss3Style-canvas-CenterStage');
            pAddClass(    theCtxt, theMotionPics._v_Canvas, 'MDDcss3Style-canvas-Thumbnail');

            return null;

        })._sName( 'm_Experiment_MotionThumbnails01', 'pBackToThumbnail')._sTrace( false)._DefendWith([
                [ 'theCtxt'],
                [ 'theMotionPics', ['Type', 'MotionPics']]
            ]);






        var pToCenterStage = (function( theCtxt, theMotionPics) {

            var aPlaceHolderIndex = someMotionPics.indexOf( theMotionPics);
            if ( aPlaceHolderIndex >= 0) {
                var aPlaceHolder = somePlaceHolders[ aPlaceHolderIndex];
                if ( aPlaceHolder) {
                    pRemoveClass( theCtxt, aPlaceHolder, 'MDDcss3Style-Placeholder-Hidden');
                    pAddClass(    theCtxt, aPlaceHolder, 'MDDcss3Style-Placeholder-Shown');
                }
            }

            pRemoveClass( theCtxt, theMotionPics._v_Canvas, 'MDDcss3Style-canvas-Thumbnail');
            pAddClass(    theCtxt, theMotionPics._v_Canvas, 'MDDcss3Style-canvas-CenterStage');

            return null;

        })._sName( 'm_Experiment_MotionThumbnails01', 'pToCenterStage')._sTrace( false)._DefendWith([
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

        })._sName( 'm_Experiment_MotionThumbnails01', 'pAddClass')._sTrace( false)._DefendWith([
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

        })._sName( 'm_Experiment_MotionThumbnails01', 'pAddClass')._sTrace( false)._DefendWith([
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

        })._sName( 'm_Experiment_MotionThumbnails01', 'fHasClass')._sTrace( false)._DefendWith([
                [ 'theCtxt'],
                [ 'theElement',       ['object']],
                [ 'theClassName',       ['string']]
            ]);





        if( typeof fChoirJS_LogModuleLoads === 'function') {
            fChoirJS_LogModuleLoads('END m_Experiment_MotionThumbnails01')
        }


    }
);


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Experiment_MotionThumbnails01')
}
