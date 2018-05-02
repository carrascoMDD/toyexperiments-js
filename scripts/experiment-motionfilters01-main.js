/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Experiment_MotionFilters01')
}


require(['m_ConstValues', 'm_ConstValues_Tools', 'm_Clock', 'm_Ctxt', 'm_MotionPics', 'm_MotionFilter' ],
    function(m_ConstValues, m_ConstValues_Tools, m_Clock, m_Ctxt, m_MotionPics, m_MotionFilter) {


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Experiment_MotionFilters01')
    }







    setTimeout(
        function() {

            var aCtxt = m_Ctxt.fNewCtxt();

            var aMaxMotionPics = 1;
            var aMaxActiveMotionPics = 1;    /* (anIndex > aMaxActiveMotionPics)  load just first */

            var someMotionPics    = [ ];
            var someMotionFilters = [ ];

            for (var anIndex = 1; anIndex <= aMaxMotionPics; anIndex++) {

                var aMotionPics = new m_MotionPics.f_Constructor_MotionPics( aCtxt,
                    'images/Pollination-' + ( '00' + anIndex).substr(-2),
                    'imageslist.txt', null, 0, 0, (anIndex > aMaxActiveMotionPics) /* load just first */);

                someMotionPics.push( aMotionPics);

                /* grayscale,  brightness n,  threshold n,   sharpen ,  blur ,  sobel, custom matrix [ 1, 1, 1, 1, 0.7, -1 , -1, -1, -1] */

                var aMotionFilter = new m_MotionFilter.f_Constructor_MotionFilter( aCtxt,
                    aMotionPics, 'convolution.sharpen', null,
                    null, 0, 0, false);


                /*
                 var aMotionFilter = new m_MotionFilter.f_Constructor_MotionFilter( aCtxt,
                 aMotionPics, 'convolution.sobel', null,
                 null, 0, 0, false );

                 var aMotionFilter = new m_MotionFilter.f_Constructor_MotionFilter( aCtxt,
                 aMotionPics, 'convolution.grayscale', null,
                 null, 0, 0, false);

                 var aMotionFilter = new m_MotionFilter.f_Constructor_MotionFilter( aCtxt,
                 aMotionPics, 'convolution.sharpen', null,
                 null, 0, 0, false);


                 var aMotionFilter = new m_MotionFilter.f_Constructor_MotionFilter( aCtxt,
                 aMotionPics, 'convolution.custom', [ 1, 1, 1, 1, 0.7, -1 , -1, -1, -1],
                 null, 0, 0, false);

                 var aMotionFilter = new m_MotionFilter.f_Constructor_MotionFilter( aCtxt,
                 aMotionPics, 'convolution.sobel', null,
                 null, 0, 0, false);

                 var aMotionFilter = new m_MotionFilter.f_Constructor_MotionFilter( aCtxt,
                 aMotionPics, 'convolution.sharpen', null,
                 null, 0, 0, false);

                 var aMotionFilter = new m_MotionFilter.f_Constructor_MotionFilter( aCtxt,
                 aMotionPics, 'convolution.blur', null,
                 null, 0, 0, false);

                 var aMotionFilter = new m_MotionFilter.f_Constructor_MotionFilter( aCtxt,
                 aMotionPics, 'convolution.brightness', [ 96],
                 null, 0, 0, false);

                 var aMotionFilter = new m_MotionFilter.f_Constructor_MotionFilter( aCtxt,
                 aMotionPics, 'convolution.threshold', [ 128],
                 null, 0, 0, false);
                 */




                someMotionFilters.push( aMotionFilter);


                if ( aMaxActiveMotionPics > 4) {
                    aMotionPics._pPause( aCtxt);
                    aMotionFilter._pPause( aCtxt);
                }
            }
        },
        0
    );


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Experiment_MotionFilters01')
    }


});


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Experiment_MotionFilters01')
}
