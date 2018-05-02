/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Experiment_CSS3Transforms02')
}


require(['m_ConstValues', 'm_ConstValues_Tools', 'm_Clock', 'm_Ctxt', 'm_MotionPics' ],
    function(m_ConstValues, m_ConstValues_Tools, m_Clock, m_Ctxt, m_MotionPics) {


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Experiment_CSS3Transforms02')
    }



   setTimeout(
       function() {

           var aCtxt = m_Ctxt.fNewCtxt();


           var someMotionPics = [ ];

           var aMotionPics01 = new m_MotionPics.f_Constructor_MotionPics( aCtxt,
               'images/Pollination-01',
               'imageslist.txt', 'id-experiment-css3transforms-canvas01', 664, 508,   /* 640 + 12 + 12, 480 + 16 + 12 */
               false /* load just first */);

           someMotionPics.push( aMotionPics01);


           var aMotionPics02 = new m_MotionPics.f_Constructor_MotionPics( aCtxt,
               'images/Pollination-02',
               'imageslist.txt', 'id-experiment-css3transforms-canvas02', 664, 508,   /* 640 + 12 + 12, 480 + 16 + 12 */
               false /* load just first */);

           someMotionPics.push( aMotionPics02);

           var aMotionPics03 = new m_MotionPics.f_Constructor_MotionPics( aCtxt,
               'images/Pollination-03',
               'imageslist.txt', 'id-experiment-css3transforms-canvas03', 664, 508,   /* 640 + 12 + 12, 480 + 16 + 12 */
               false /* load just first */);

           someMotionPics.push( aMotionPics03);

       },
       0
    );


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Experiment_CSS3Transforms02')
    }


});


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Experiment_CSS3Transforms02')
}
