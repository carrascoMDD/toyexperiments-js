/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Experiment_PerformanceVisualizer02')
}


require(['m_ConstValues', 'm_ConstValues_Tools', 'm_Choir_Score_Sample_01', 'm_ChangeVisualizer',
    'm_Clock', 'm_Ctxt', 'm_Geometry', 'm_Performer', 'm_EchoAudio', 'm_ScoreTree', 'm_ChantTree' ],
    function(m_ConstValues, m_ConstValues_Tools, m_Choir_Score_Sample_01,  m_ChangeVisualizer,
             m_Clock, m_Ctxt, m_Geometry, m_Performer,m_EchoAudio, m_ScoreTree, m_ChantTree) {


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Experiment_PerformanceVisualizer02')
    }


    var aScoreSample_01   =m_Choir_Score_Sample_01.ScoreSample_01;

    setTimeout(

        function() {

            var aCtxt = m_Ctxt.fNewCtxt();

            var aPerformance      = m_Performer.fOpenPerformance( aCtxt, aScoreSample_01);


            var aChangeVisualizer = new m_ChangeVisualizer.f_Constructor_ChangeVisualizer( aCtxt, aPerformance, true ,
                null, 800, 600); /* true for reverse presentation order */

            document.body.appendChild( document.createElement("br"));

            var aCanvas_ScoreTree = m_ScoreTree.fNewScoreTree( aScoreSample_01, 400, 800);

            var anEchoAudio = new m_EchoAudio.f_Constructor_EchoAudio( aCtxt, aPerformance);


            m_Performer.pStartPerformance( aCtxt, aPerformance, function() {

                var aCanvas_ChantTree = m_ChantTree.fNewChantTree( aPerformance._v_Chant, 400, 800);

                document.body.appendChild( document.createElement("br"));

                var aScrollDelta = 4;

                var anInterval = setInterval(
                    (function() {
                        var aScrollY = 0;
                        return (function() {
                            var aCtxt = m_Ctxt.fNewCtxt();
                            aScrollY += aScrollDelta;
                            if(  aScrollY >  (aChangeVisualizer._v_ChronographViewBounds._v_CornerY / 2)) {
                                clearInterval( anInterval);
                                aChangeVisualizer._v_View.pScrollTop( aCtxt, aPerformance);
                            }
                            else {
                                aChangeVisualizer._v_View.pScrollDelta( aCtxt, aPerformance, m_Geometry.fPoint(0, aScrollDelta));
                            }
                        });
                    })(),
                    1000 / 30
                );



            });

        },
        0
    );













    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Experiment_PerformanceVisualizer02')
    }


});


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Experiment_PerformanceVisualizer02')
}
