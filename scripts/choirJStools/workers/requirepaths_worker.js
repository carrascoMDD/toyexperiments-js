/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN requirepaths_worker.js')
}



if( typeof cChoirJS_RequirePaths === 'undefined') {

    /* Confirmed intention to add a global. Therefore do not use_strict */


    cChoirJS_RequirePaths =  {

        m_ConstValues_Defaults:  "choirJS/constvalues_defaults",
        m_ConstValues:           "choirJS/constvalues",

        m_ConstValues_Tools_Defaults: "choirJStools/constvalues_tools_defaults",
        m_ConstValues_Tools:     "choirJStools/constvalues_tools",

        m_Functionx:             "choirJS/utils/functionx",
        m_Ctxt:                  "choirJS/utils/ctxt",
        m_Defense:               "choirJS/utils/defense",
        m_Error:                 "choirJS/utils/error",
        m_Instrument:            "choirJStools/workers/utils/instrument_worker",
        m_LogConsumer:           "choirJStools/workers/utils/logconsumer_worker",
        m_Log:                   "choirJS/utils/log",
        m_Trace:                 "choirJS/utils/trace",
        m_Clock:                 "choirJS/utils/clock",
        m_Identifiable:          "choirJS/utils/identifiable",

        m_ChantDeltas:           "choirJS/chantdeltas",
        m_MarshalDeltas:         "choirJStools/workers/marshaldeltas",

        m_MD5:                   "lib/md5",
        m_Encoding:              "lib/encoding",
        m_DataStream:            "lib/DataStream"
    };
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED requirepaths_worker.js')
}

