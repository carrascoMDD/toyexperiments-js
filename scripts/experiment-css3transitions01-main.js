/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Experiment_CSS3Transitions01')
}


require(['m_ConstValues', 'm_ConstValues_Tools', 'm_Clock', 'm_Ctxt', 'm_MotionPics' ],
    function(m_ConstValues, m_ConstValues_Tools, m_Clock, m_Ctxt, m_MotionPics) {


        if( typeof fChoirJS_LogModuleLoads === 'function') {
            fChoirJS_LogModuleLoads('BEGIN m_Experiment_CSS3Transitions01')
        }



        setTimeout(
            function() {

                var aCtxt = m_Ctxt.fNewCtxt();


                var someMotionPics = [ ];

                var aMotionPics01 = new m_MotionPics.f_Constructor_MotionPics( aCtxt,
                    'images/Pollination-01',
                    'imageslist.txt', 'id-experiment-css3transitions-canvas01', 664, 508,   /* 640 + 12 + 12, 480 + 16 + 12 */
                    true /* load just first */);

                someMotionPics.push( aMotionPics01);


                var aMotionPics02 = new m_MotionPics.f_Constructor_MotionPics( aCtxt,
                    'images/Pollination-02',
                    'imageslist.txt', 'id-experiment-css3transitions-canvas02', 664, 508,   /* 640 + 12 + 12, 480 + 16 + 12 */
                    false /* load just first */);

                someMotionPics.push( aMotionPics02);

                var aMotionPics03 = new m_MotionPics.f_Constructor_MotionPics( aCtxt,
                    'images/Pollination-03',
                    'imageslist.txt', 'id-experiment-css3transitions-canvas03', 664, 508,   /* 640 + 12 + 12, 480 + 16 + 12 */
                    true /* load just first */);

                someMotionPics.push( aMotionPics03);

                setTimeout( function() {
                        var someEventNames = [ 'webkitTransitionEnd',  'transitionend',  'oTransitionEnd'];

                        var aNumMotionPics = someMotionPics.length;
                        var aNumEventNames = someEventNames.length;

                        for (var aMotionPicsIdx = 0; aMotionPicsIdx < aNumMotionPics; aMotionPicsIdx++) {
                            var aMotionPics = someMotionPics[ aMotionPicsIdx];
                            if (aMotionPics) {

                                for (var aEventNameIdx = 0; aEventNameIdx < aNumEventNames; aEventNameIdx++) {
                                    var aEventName = someEventNames[ aEventNameIdx];
                                    if (aEventName) {

                                        aMotionPics._v_Canvas.addEventListener(
                                            aEventName,
                                            (function() {
                                                var aMotionPics_here = aMotionPics;
                                                return (function( theEvent ) {
                                                    var aCtxt = m_Ctxt.fNewCtxt();
                                                    aMotionPics_here.pPlay( aCtxt);
                                                });
                                            })(),
                                            false
                                        );
                                    }
                                }
                            }
                        }


                        pAddClass( aCtxt, aMotionPics01._v_Canvas, 'MDDcss3Style-canvas-Left');
                        pAddClass( aCtxt, aMotionPics02._v_Canvas, 'MDDcss3Style-canvas-Top');
                        pAddClass( aCtxt, aMotionPics03._v_Canvas, 'MDDcss3Style-canvas-Front');
                    },
                    4000
                )

            },
            0
        );










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

        })._sName( 'm_Experiment_CSS3Transitions01', 'pAddClass')._sTrace( false)._DefendWith([
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

        })._sName( 'm_Experiment_CSS3Transitions01', 'pAddClass')._sTrace( false)._DefendWith([
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

        })._sName( 'm_Experiment_CSS3Transitions01', 'fHasClass')._sTrace( false)._DefendWith([
                [ 'theCtxt'],
                [ 'theElement',       ['object']],
                [ 'theClassName',       ['string']]
            ]);





        if( typeof fChoirJS_LogModuleLoads === 'function') {
            fChoirJS_LogModuleLoads('END m_Experiment_CSS3Transitions01')
        }


    });


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Experiment_CSS3Transitions01')
}
