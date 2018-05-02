/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN requirepaths.js')
}

if( typeof cChoirJS_RequirePaths === 'undefined') {


    cChoirJS_RequirePaths =  {


        m_MD5:                   "lib/md5",
        m_Encoding:              "lib/encoding",
        m_DataStream:            "lib/DataStream",
        m_URI:                   "lib/URI",
        m_CSSrules:              "lib/CSSrules",


        m_ConstValues_Defaults:  "choirJS/constvalues_defaults",
        m_ConstValues:           "choirJS/constvalues",


        m_Functionx:             "choirJS/utils/functionx",
        m_Defense:               "choirJS/utils/defense",
        m_Error:                 "choirJS/utils/error",
        m_Instrument:            "choirJS/utils/instrument",
        m_LogConsumer:           "choirJS/utils/logconsumer",
        m_Log:                   "choirJS/utils/log",
        m_Trace:                 "choirJS/utils/trace",
        m_Ctxt:                  "choirJS/utils/ctxt",
        m_Identifiable:          "choirJS/utils/identifiable",
        m_Moment:                "choirJS/utils/moment",
        m_Clock:                 "choirJS/utils/clock",
        m_Geometry:              "choirJS/utils/geometry",

        m_Score:                 "choirJS/score",
        m_Composer:              "choirJS/composer",

        m_Performance:           "choirJS/performance",
        m_Performer:             "choirJS/performer",
        m_Yielder:               "choirJS/yielder",
        m_Watcher:               "choirJS/watcher",
        m_WakeUp:                "choirJS/wakeup",

        m_LoopChanges:           "choirJS/loopchanges",

        m_StoreScore:            "choirJS/storescore",

        m_Conductor:             "choirJS/conductor",

        m_Orchductors:           "choirJS/orchductors",
        m_Orchductor_Void:        "choirJS/plugorchductors/orchductor_void",
        m_Orchductor_Algorithmic: "choirJS/plugorchductors/orchductor_algorithmic",

        m_Choreography:          "choirJS/choreography",
        m_Choreographer:         "choirJS/choreographer",

        m_Chonductors:           "choirJS/chonductors",
        m_Chonductor_Void:       "choirJS/plugchonductors/chonductor_void",
        m_Chonductor_Sample:     "choirJS/plugchonductors/chonductor_sample",

        m_Builders:              "choirJS/builders",
        m_Builder_Arrays:        "choirJS/builders/builder_arrays",

        m_ChantManager:          "choirJS/chantmanager",

        m_ChantDeltas:           "choirJS/chantdeltas",
        m_DeltaBroker:           "choirJS/deltabroker",

        m_LoadPlugs:             "choirJS/loadplugs",


        m_ConstValues_Tools_Defaults: "choirJStools/constvalues_tools_defaults",
        m_ConstValues_Tools:     "choirJStools/constvalues_tools",

        m_LoadWorkers:           "choirJStools/workers/loadworkers",
        m_OpenWorker:            "choirJStools/workers/openworker",

        m_MarshalDeltas:         "choirJStools/workers/marshaldeltas",
        m_DeltaToWorker:         "choirJStools/workers/deltatoworker",
        m_DeltaToWorker_Sample01:"choirJStools/workers/deltatoworker_sample01",


        m_Zebra:                 "choirJStools/treecanvas/zebramodule",
        m_ScoreTree:             "choirJStools/treecanvas/scoretree",
        m_ChantTree:             "choirJStools/treecanvas/chanttree",


        m_ResLoader:             "choirJStools/resloader",

        m_ResConverter:          "choirJStools/resconverter",

        m_ConverterGeneral:      "choirJStools/convertergeneral",


        m_EchoAudio:             "choirJStools/sonorizer/echoaudio",
        m_SerieNotes:            "choirJStools/sonorizer/serienotes",
        m_Frequencies:           "choirJStools/sonorizer/frequencies",
        m_NoteSounds:            "choirJStools/sonorizer/notesounds",

        m_FrameScheduler:        "choirJStools/visualizer/framescheduler",

        m_DeltaVisualizer:       "choirJStools/visualizer/deltavisualizer",

        m_ChangeVisualizer:      "choirJStools/visualizer/changevisualizer/changevisualizer",
        m_ChangeGestures:        "choirJStools/visualizer/changevisualizer/changegestures",
        m_Changesture_Top:       "choirJStools/visualizer/changevisualizer/changesture_top",
        m_Changesture_Chronoview:"choirJStools/visualizer/changevisualizer/changesture_chronoview",
        m_Changesture_Scrollbar: "choirJStools/visualizer/changevisualizer/changesture_scrollbar",

        m_Model:                 "choirJStools/visualizer/changevisualizer/model",
        m_ChangeChronograph:     "choirJStools/visualizer/changevisualizer/changechronograph",
        m_ChangeNode_General:    "choirJStools/visualizer/changevisualizer/changenode_general",
        m_ChangeNode_Error:      "choirJStools/visualizer/changevisualizer/changenode_error",
        m_ChangeNode_Loop:       "choirJStools/visualizer/changevisualizer/changenode_loop",
        m_ChangeNode_Iteration:  "choirJStools/visualizer/changevisualizer/changenode_iteration",

        m_View:                  "choirJStools/visualizer/changevisualizer/view",
        m_ViewComposite:         "choirJStools/visualizer/changevisualizer/view_composite",
        m_ViewChronograph:       "choirJStools/visualizer/changevisualizer/view_chronograph",
        m_ViewError:             "choirJStools/visualizer/changevisualizer/view_error",
        m_ViewLoop:              "choirJStools/visualizer/changevisualizer/view_loop",
        m_ViewIteration:         "choirJStools/visualizer/changevisualizer/view_iteration",

        m_MotionGeneral:          "choirJStools/visualizer/motionpics/motiongeneral",
        m_MotionPics:             "choirJStools/visualizer/motionpics/motionpics",

        m_MotionFilter:           "choirJStools/visualizer/motionpics/motionfilter",

        m_ImageFilter_General:    "choirJStools/visualizer/motionpics/imagefilter_general",
        m_ImageFilter_Identical:  "choirJStools/visualizer/motionpics/imagefilter_identical",
        m_ImageFilter_Convolution:"choirJStools/visualizer/motionpics/imagefilter_convolution",

        m_Convolutions:           "choirJStools/visualizer/motionpics/convolutions",

        m_Choir_Score_Sample_01: "choirJSsamples/choir_sample_01",
        m_Choir_Score_Sample_02: "choirJSsamples/choir_sample_02",

        m_Facebook_CanvasApp_MDDslTst_Player:        "fbk/facebook-canvasapp-mddsltst-player",
        m_Facebook_CanvasApp_MDDslTst_Player_All:    "fbk/facebook-canvasapp-mddsltst-player-all",
        m_Facebook_CanvasApp_MDDslTst_Player_Brain:  "fbk/facebook-canvasapp-mddsltst-player-brain",
        m_Facebook_CanvasApp_MDDslTst_Player_Neuron: "fbk/facebook-canvasapp-mddsltst-player-neuron"
    };
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED requirepaths.js')
}

