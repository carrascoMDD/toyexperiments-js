/*
 * Copyright 2013 Antonio Carrasco Valero
 */
ACVOJO_Performance = null;

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Main')
}


require(['m_ConstValues', 'm_ConstValues_Tools', 'm_Choir_Score_Sample_01', 'm_DeltaToWorker_Sample01', 'm_DeltaVisualizer', 'm_ChangeVisualizer',
    'm_Clock', 'm_Ctxt',
    'm_Performer', 'm_ScoreTree', 'm_ChantTree', 'm_EchoAudio', 'm_DeltaBroker', 'm_OpenWorker', 'm_StoreScore' ],
    function(m_ConstValues, m_ConstValues_Tools, m_Choir_Score_Sample_01, m_DeltaToWorker_Sample01, m_DeltaVisualizer, m_ChangeVisualizer,
             m_Clock, m_Ctxt,
             m_Performer, m_ScoreTree, m_ChantTree, m_EchoAudio, m_DeltaBroker, m_OpenWorker, m_StoreScore) {
    //This function is called when scripts/main.js is loaded.
    //If specs_sample_01.js calls define(), then this function is not fired until
    //specs_sample_01's dependencies have loaded, and the util argument will hold
    //the module value for 'specs_sample_01'.



    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Main')
    }

    if( m_OpenWorker) {}

    /*
    var aWorkerInfo = m_OpenWorker.fWorkerInfoWithURL( m_DeltaToWorker_Sample01.cWorkerURL);
    if (!aWorkerInfo) {
        console.log('No WorkerInfo exists with URL ' + m_DeltaToWorker_Sample01.cWorkerURL)
    }
    else {
        if (!aWorkerInfo._v_Worker) {
            console.log('No Worker in WorkerInfo with URL ' + m_DeltaToWorker_Sample01.cWorkerURL)
        }
        else {
            var aCanvasElement = document.getElementById( 'ChoirJS_canvas_01');
            if( !aCanvasElement) {
                console.log('Canvas does not exists with id ' + 'ChoirJS_canvas_01');
            }
            var aCanvasProxy = aCanvasElement.transferControlToProxy();
            aWorker.postMessage( aCanvasProxy);
        }
    }
    */

    /*
    var aNow = m_Clock.fNow();
    m_Clock.pWasteTime( 10);
    var aNow2 = m_Clock.fNow();
   */

    try {
        var aScoreSample_01   =m_Choir_Score_Sample_01.ScoreSample_01;
        // var aScoreSample_01_FromFunction=m_Choir_Sample_01.fScoreSample_01();
    }
    catch (anException) {
        var xxx= 1;
    }

    /*
    try {
        var aScoreSample_02=m_Choir_Score_Sample_01.fScoreSample_01();
        var xx= 1;
    }
    catch (anException) {
        var xxx= 1;
        throw anException;
    }
    */


    /*
    var aCanvas_ScoreTree = m_ScoreTree.fNewScoreTree(aScoreSample_01);


    var aStoreScoreResult = m_StoreScore.fStoreScore( 'Score_Sample_01', aScoreSample_01);

    var aLoadedScore = m_StoreScore.fLoadScore( 'Score_Sample_01', false); // if true, it shall maintain the original UIDs
    */



        var aTimeout = setTimeout(
        function() {
            if(aScoreSample_01) {

                var aCtxt = m_Ctxt.fNewCtxt();

                var aPerformance      = m_Performer.fOpenPerformance( aCtxt, aScoreSample_01);

                /*
                var aWorker = m_DeltaToWorker_Sample01.pOpenWorker( aCtxt, aPerformance);


                var aDeltaVisualizer  = m_DeltaVisualizer.fOpenVisualizer( aCtxt, aPerformance);
                */
                var aChangeVisualizer = new m_ChangeVisualizer.f_Constructor_ChangeVisualizer( aCtxt, aPerformance, true ,
                    null, 800, 600); /* true for reverse presentation order */

                var anEchoAudio = new m_EchoAudio.f_Constructor_EchoAudio( aCtxt, aPerformance);

                document.body.appendChild( document.createElement("br"));

                var aCanvas_ScoreTree = m_ScoreTree.fNewScoreTree( aScoreSample_01, 400, 800);

                m_Performer.pStartPerformance( aCtxt, aPerformance, function() {

                    if (aPerformance) {
                        var aTopChant = aPerformance._v_Chant;
                        if (aTopChant) {
                            var aCanvas_ChantTree = m_ChantTree.fNewChantTree(aTopChant, 400, 800);
                            document.body.appendChild( document.createElement("br"));

                        }
                    }

                    /*
                    var aDeltaVisualizer_here = aDeltaVisualizer;
                    var aChangeVisualizer_here = aChangeVisualizer;


                    if (aPerformance) {
                        var aTopChant = aPerformance._v_Chant;
                        if (aTopChant) {
                            var aCanvas_ChantTree = m_ChantTree.fNewChantTree(aTopChant);
                        }
                    }
                    */

                    ACVOJO_Performance = aPerformance;

                    var anX = 1;

                    /*
                    console.log('\n\nNOW to TWO!!!\n\n');


                    var aCanvas_LoadedScoreTree = m_ScoreTree.fNewScoreTree(aLoadedScore);

                    var aSavedAndLoadedStore = [ aScoreSample_01, aLoadedScore];


                    var aPerformance2 = m_Performer.fOpenPerformance( aCtxt, aLoadedScore);
                    var aDeltaVisualizer2 = m_DeltaVisualizer.fOpenVisualizer(aPerformance2);
                    var aChangeVisualizer2 = m_ChangeVisualizer.fOpenVisualizer( aCtxt, aPerformance2);

                    m_Performer.pStartPerformance( aCtxt, aPerformance2, function() {

                         if (aPerformance2) {
                            var aTopChant2 = aPerformance2._v_Chant;
                            if (aTopChant2) {
                                var aCanvas_ChantTree2 = m_ChantTree.fNewChantTree(aTopChant2);
                            }
                         }
                    });
                    */
                });

            }
        },
        m_ConstValues_Tools.fConst( 'm_EchoAudio', '_cPlaySource', '') === 'Buffer' ? 2000: m_ConstValues.fConst('m_Main', '_cDelayToStart', 10)
    );


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Main')
    }


    var x=1;

});


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Main')
}
