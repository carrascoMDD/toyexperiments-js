/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Facebook_CanvasApp_MDDslTst_Player_All')
}




var aM_Facebook_CanvasApp_MDDslTst_Player_All = function (
    m_ConstValues, m_ConstValues_Tools, m_Ctxt, m_Trace, m_Defense,
    m_MotionPics, m_Facebook_CanvasApp_MDDslTst_Player) {


    "use strict";


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Facebook_CanvasApp_MDDslTst_Player_All')
    }


    var _displayName = 'm_Facebook_CanvasApp_MDDslTst_Player_All';

    var _doc = _displayName +' module. Functions to visualize received Changes in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];

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
            var anItemIndex = null;
            try {
                anItemIndex = parseInt( someParsedArgs[ 'item']);
            }
            catch( anException) {}
            if ( ! (anItemIndex === null)) {
                if ( anItemIndex > 0) {
                    someItemsToLoad = [ anItemIndex - 1]; /* supplied and displayed base 1; internally base zero */
                    aNumFramesToSkip = 60;
                }
            }
        }




        var aMaxMotionPics = 29;

        if (!someMotionCollections.length) {

            for (var anIndex = 1; anIndex <= aMaxMotionPics; anIndex++) {
                someMotionCollections.push( 'Pollination-' + ( '00' + anIndex).substr(-2));
            }
        }



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
                    m_Facebook_CanvasApp_MDDslTst_Player.somePlaceHolders.push( aPlaceHolderImg);


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

                    m_Facebook_CanvasApp_MDDslTst_Player.someMotionPics.push( aMotionPics);

                    aMotionPics.pAddExtraMouseListener( aCtxt,
                        (function() {
                            return function( theCtxt, theMotionPics, theEvent) {
                                return m_Facebook_CanvasApp_MDDslTst_Player.fMotionPicsClicked( theCtxt, theMotionPics, theEvent);
                            }
                        })()
                    );


                    aPlaceHolderImg.onmouseup = (function() {
                        var aMotionPics_here = aMotionPics;
                        var aCtxt = m_Ctxt.fNewCtxt();
                        return function( theEvent) {
                            m_Facebook_CanvasApp_MDDslTst_Player.pPlaceHolderClicked( aCtxt, aMotionPics_here, theEvent);
                        }
                    })();

                    if( aNumMotionCollections === 1)  {

                        m_Facebook_CanvasApp_MDDslTst_Player.fMotionPicsClicked( aCtxt, aMotionPics);

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
                        m_Facebook_CanvasApp_MDDslTst_Player.pBackgroundClicked( aCtxt, theEvent);
                    }
                })();

            },
            0
        );








    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers: _publicMembers,
        _privateMembers: _privateMembers

    };
    if (aModule) {
    }

    return aModule;
};


if (typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Facebook_CanvasApp_MDDslTst_Player_All')
}


if (typeof define === 'function') {


    define(['m_ConstValues', 'm_ConstValues_Tools','m_Ctxt', 'm_Trace', 'm_Defense',
        'm_MotionPics', 'm_Facebook_CanvasApp_MDDslTst_Player'],
        function (m_ConstValues, m_ConstValues_Tools, m_Ctxt, m_Trace, m_Defense,
                  m_MotionPics, m_Facebook_CanvasApp_MDDslTst_Player) {

            return aM_Facebook_CanvasApp_MDDslTst_Player_All(
                m_ConstValues, m_ConstValues_Tools, m_Ctxt, m_Trace, m_Defense,
                m_MotionPics, m_Facebook_CanvasApp_MDDslTst_Player);
        });
}
else {

    if (typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Facebook_CanvasApp_MDDslTst_Player_All.displayName] = aM_Facebook_CanvasApp_MDDslTst_Player_All(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_MotionPics'],
            gChoirJS_Modules['m_Facebook_CanvasApp_MDDslTst_Player']
        );
    }
    else {
        ChoirJS_Module_Facebook_CanvasApp_MDDslTst_Player_All = aM_Facebook_CanvasApp_MDDslTst_Player_All(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Defense,
            ChoirJS_Module_MotionPics,
            ChoirJS_Module_Facebook_CanvasApp_MDDslTst_Player
        );
    }
}


if (typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Facebook_CanvasApp_MDDslTst_Player_All')
}












