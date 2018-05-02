/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Experiment_MotionPictures01')
}


require(['m_ConstValues', 'm_ConstValues_Tools', 'm_Clock', 'm_Ctxt', 'm_MotionPics' ],
    function(m_ConstValues, m_ConstValues_Tools, m_Clock, m_Ctxt, m_MotionPics) {


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Experiment_MotionPictures01')
    }



   setTimeout(
       function() {

           var aCtxt = m_Ctxt.fNewCtxt();

           var aMaxMotionPics = 29;
           var aMaxActiveMotionPics = 1;

           var someMotionPics = [ ];

           for (var anIndex = 1; anIndex <= aMaxMotionPics; anIndex++) {

               var aMotionPics = new m_MotionPics.f_Constructor_MotionPics( aCtxt,
                   'images/Pollination-' + ( '00' + anIndex).substr(-2),
                   'imageslist.txt', null, 0, 0, (anIndex > aMaxActiveMotionPics) /* load just first */
                   /* null, 512, 384 */)

               someMotionPics.push( aMotionPics);

               if ( aMaxActiveMotionPics > 4) {
                   aMotionPics._pPause( aCtxt);
               }
           }
       },
       0
    );


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Experiment_MotionPictures01')
    }


});


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Experiment_MotionPictures01')
}
