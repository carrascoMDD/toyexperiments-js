/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Performance')
}



var aM_Performance = function (m_Functionx, m_Instrument, m_Defense) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Performance')
    }


    if(m_Functionx) {}

    var _displayName = 'm_Performance';

    var _doc = _displayName +' module. Factory functions for objects to support the performance of Scores by a Choir.';


    var cChant_States = [
        'Initial',
        'Candidate',
        'Ready',
        'Waiting',
        'Chanting',
        'Sung',
        'Canceled',
        'Failed'
    ];
    _doc+=('\n\n' +  JSON.stringify({cChant_States: cChant_States}, null, 4));




    var _meta_Performance = {
        _v_MessageChannel:  'Used by m_Yielder. If the Browser supports MessageChannel, references a MessageChannel instance.',
        _v_Timeout:  'Used by m_Yielder. If the Browser does not supportMessageChannel, references a Timeout instance.',
        _v_WaitsForWork: 'Used by m_Yielder. The number of consecutive re-animations of the performer, ' +
            'after the performer did not find anything else to run.',
        _v_Stopped: 'Used by m_Yielder. When true, the Performance has ceased to be executed ' +
            'after Performer not finding nothing else to do, and too many reanimations.'
    };
    var pPerformance_Properties_Into = function(theObject) {

        if( !(theObject === null || (typeof theObject === 'undefined'))) {
            theObject._v_Type =     'Performance';
            theObject._v_Name =     '';
            theObject._v_Score =    null;

            theObject._v_StartClock         = null;

            theObject._v_Chant              = null;

            theObject._v_Chants_Ready       = [];
            theObject._v_Chants_Recommended = [];

            /* Used by m_Performer */
            theObject._v_InLoop             = false;
            theObject._v_LoopBeginClock     = null;
            theObject._v_LoopEndClock       = null;
            theObject._v_NumConsecutiveWakeUps = 0;

            /* Used by m_Conductor */
            theObject._v_InterestedParties_PlayChant = [];


            /* Used by m_Yielder */
            theObject._v_YieldTimeout       = null;  /* Shall be canceled upon Performance End. */
            theObject._v_WaitForWorkTimeout = null;  /* Shall be canceled upon Performance End. */
            theObject._v_MessageChannel     = null;  /* Shall be closed upon Performance End. */
            theObject._v_NumWaitsForWork    = null;
            theObject._v_Stopped            = false;
            theObject._v_After              = null; /* Callback to chain additional behavior after the performance has completed */

            /* Used by m_DeltaBroker */
            theObject._v_InterestedParties   = [];
            theObject._v_PendingDeltas       = [];
            theObject._v_DeltasWakeUpInterest= null; /* For cleanness: Shall be dropped upon Performance End. */
            theObject._v_LastDeltasDeliveryClock = null;


            /* Used by m_Watcher */
            theObject._v_Watchers = [];
            theObject._v_PendingChanges = [];
            theObject._v_DeliverChangesTimeout = null;
            theObject._v_LastChangesDeliveryClock = null;

            /* Used by m_WakeUp */
            theObject._v_WakeUpInterests = [];

            /* Used by m_ChangeVisualizer */
            theObject._v_SchedulePaints = false;

            /* Used by m_View_Composite for debug and diagnostics only. */
            theObject._v_ACVOJO_NumSaveDisplays = 0;


        }
    };
    if(m_Instrument.cDocFuncs) {
        pPerformance_Properties_Into._sDoc('pPerformance_Properties_Into',
            'Structure of fields for object representing a Performance.\n' +
            JSON.stringify({_meta_Performance: _meta_Performance}, null, 4));
        _doc+=('\n\n' +  pPerformance_Properties_Into._doc);
    }




    var pChant_Properties_Into = function(theObject) {

        if( !(theObject === null || (typeof theObject === 'undefined'))) {
            theObject._v_Type =       'Chant';
            theObject._v_Name =       '';
            theObject._v_Parent =     null;

            theObject._v_Chantable   = null;
            theObject._v_Chants      = [];

            theObject._v_ActionsDone = [];
            theObject._v_MayBegin    = false;
            theObject._v_Sung        = false
        }
    };
    if(m_Instrument.cDocFuncs) {
        pChant_Properties_Into._sDoc('pChant_Properties_Into', 'Structure of fields for object representing a Chant.');
        _doc+=('\n\n' +  pChant_Properties_Into._doc);
    }







    var fPerformanceOf = function(theChant) {

        if( m_Defense.cAllowDefense) {
            if(!theChant) {
                return null;
            }
            if(!(theChant._v_Type === 'Chant')) {
                return null;
            }
        }

        if(!theChant._v_Parent) {
            return null;
        }
        if(theChant._v_Parent._v_Type === 'Performance') {
            return theChant._v_Parent;
        }
        return fPerformanceOf(theChant._v_Parent);
    };
    if(m_Instrument.cDocFuncs) {
        fPerformanceOf._sDoc('fPerformanceOf', 'Returns the Performance owning the supplied Chant by traversing through Chant parents until reasing a Performance, or null.');
        _doc+=('\n\n' +  fPerformanceOf._doc);
    }





    var fThreadRootChant = function(theChant) {

        if( m_Defense.cAllowDefense) {
            if(!theChant) {
                return null;
            }
            if(!(theChant._v_Type === 'Chant')) {
                return null;
            }
        }

        if( !theChant._v_Parent) {
            return theChant;
        }

        if( theChant._v_Parent._v_Type === 'Performance') {
            return theChant;
        }

        if( !theChant._v_Parent._v_Chantable) {
            return theChant;
        }

        if( theChant._v_Parent._v_Chantable._v_OrchestrationKind === 'Simultaneus') {
            return theChant;
        }

        return fThreadRootChant(theChant._v_Parent);
    };
    if(m_Instrument.cDocFuncs) {
        fThreadRootChant._sDoc('fThreadRootChant', 'Returns the closest parent chant which is the top chant of a non-simultaneous thread, or null.');
        _doc+=('\n\n' +  fThreadRootChant._doc);
    }



    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        pPerformance_Properties_Into: pPerformance_Properties_Into,
        pChant_Properties_Into:       pChant_Properties_Into,

        fPerformanceOf:               fPerformanceOf,
        fThreadRootChant:             fThreadRootChant
    };

    if(aModule) {} /* Added to avoid code quality tools complaining about redundant variable */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Performance')
    }


    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Performance')
}



if( typeof define === 'function') {

    define(['m_Functionx', 'm_Instrument', 'm_Defense'], function (m_Functionx, m_Instrument, m_Defense) {
        return aM_Performance(m_Functionx, m_Instrument, m_Defense);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Performance.displayName]=aM_Performance(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Defense']
        );
    }
    else {
        ChoirJS_Module_Performance = aM_Performance(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Defense
        );
    }
}

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Performance')
}



