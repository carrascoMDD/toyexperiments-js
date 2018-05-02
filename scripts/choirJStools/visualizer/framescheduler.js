/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_FrameScheduler')
}



var aM_Framescheduler = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
    m_Instrument, m_Trace, m_Log, m_Identifiable) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_FrameScheduler')
    }

    if( m_Log) {}


    var _displayName = 'm_FrameScheduler';

    var _doc = _displayName +' module. Functions to schedule repainting of frames. ' +
        'Managed as a singleton, because all clients share the same platform, ' +
        'and therefore subject to the very same frame timing limitations. ' +
        'It shall be possible to refine the scheduling with relative priorities or frame rates' +
        'for different clients.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';



    var _c_UseAnimationContext = m_ConstValues_Tools.fConst( _displayName, '_c_UseAnimationContext', true);
    _doc+=('\n\n' +  JSON.stringify({_c_UseAnimationContext: _c_UseAnimationContext}, null, 4));
    _doc+='If _c_UseAnimationContext is true then schedule View painting with an AnimationContext, and not with a Timeout.';



    var _c_NumFramesForAverages = m_ConstValues_Tools.fConst( _displayName, '_c_NumFramesForAverages', 120);
    _doc+=('\n\n' +  JSON.stringify({_c_NumFramesForAverages: _c_NumFramesForAverages}, null, 4));
    _doc+='Number of frames to collect time metrics, ' +
        'to produce timing averages like frames per second and processing time.';





    _doc+=('\n\nModule variables');


    var _g_FrameSchedulerFunction = null;
    _doc+=('\n\nModule variable _g_FrameSchedulerFunction ' +
        'Holds a function to schedule handlers for the next AnimationFrame or timeout.');


    var _g_FrameSchedulerFunctionIsTimeout = null;
    _doc+=('\n\nModule variable _g_FrameSchedulerFunction ' +
        'True if _g_FrameSchedulerFunction holds a function to schedule handlers with a timeout.');


    var _g_ScheduledTimeout = false;
    _doc+=('\n\nModule variable _g_ScheduledTimeout ' +
        'Holds a reference to the scheduled timeout  if there is a handler scheduled to be run in the future,' +
        'and it has been scheduled with a timeout, and not with an AnimationFrame.');


    var _g_SchedulerActive = false;
    _doc+=('\n\nModule variable _g_SchedulerActive ' +
        'True if there is a handler scheduled to be run in the future.');


    var _g_ActiveSchedules = [ ];
    _doc+=('\n\nModule variable _g_ActiveSchedules ' +
        'Holds the list of handlersschedules to callback at each frame.');


    var _g_PausedSchedules = [ ];
    _doc+=('\n\nModule variable _g_PausedSchedules ' +
        'Holds the list of handlers which are temporarily not to be called back at each frame.');









    _doc+=('\n\nFunctions for Framescheduler:');



    var _fFrameSchedulerFunction = (function( theCtxt) {

        if( theCtxt) {}

        if( _g_FrameSchedulerFunction) {
            return _g_FrameSchedulerFunction;
        }

        if( _c_UseAnimationContext) {

            if(_fFrameSchedulerFunction._Trace) { m_Trace.pStep(
            'Schedule callback with the platform AnimationContext, if any.');}

            _g_FrameSchedulerFunction = window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame;

            if( !_g_FrameSchedulerFunction) {
                throw new m_Error.Error('PlatformServiceUnavailableError', {module: _displayName, function: _fFrameSchedulerFunction, platformService: 'AnimationFrame'});
            }
            _g_FrameSchedulerFunctionIsTimeout = false;
            if( _g_FrameSchedulerFunctionIsTimeout) {} /* Silly CQT */

            return _g_FrameSchedulerFunction;
        }


        if(_fFrameSchedulerFunction._Trace) { m_Trace.pStep(
        'Schedule callback with a timeout.');}

        _g_FrameSchedulerFunction = function( theAnimationFrameHandler_arg) {
            setTimeout( theAnimationFrameHandler_arg, _c_FrameTimeoutIfNoAnimationContext);
        };
        _g_FrameSchedulerFunctionIsTimeout = true;

        return _g_FrameSchedulerFunction;


    })._sName( _displayName, '_fFrameSchedulerFunction')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt']
    ]);
    _privateMembers.push( _fFrameSchedulerFunction);
    if(m_Instrument.cDocFuncs) {
        _fFrameSchedulerFunction._sDesc(
        'Lazy access and initialization of the function to setup a handler to be executed asynchronously, ' +
        'scheduled with an AnimationFrame or a timeout.');

        _doc+=('\n\n' + _fFrameSchedulerFunction._doc);
    }











    var pActivateScheduler = (function( theCtxt) {

        if( _g_SchedulerActive) {
            return null;
        }

        var aFrameSchedulerFunction = _fFrameSchedulerFunction( theCtxt);
        if( !aFrameSchedulerFunction) {
            throw new m_Error.Error('PlatformServiceUnavailableError', {module: _displayName, function: _fActivateScheduler, platformService: '_fFrameSchedulerFunction'});
        }

        _g_SchedulerActive = true;

        _pScheduleNextFrame( theCtxt);

        return null;

    })._sName( _displayName, 'pActivateScheduler')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt']
    ]);
    _privateMembers.push( pActivateScheduler);
    if(m_Instrument.cDocFuncs) {
        pActivateScheduler._sDesc(
        'Render View on the Next AnimationFrame, and all AnimationFrames afterwards, until further notice. ' +
        'Shall be executed asynchronously scheduled with an AnimationFrame or a timeout.');

        _doc+=('\n\n' + pActivateScheduler._doc);
    }








    var pDeactivateScheduler = (function( theCtxt) {

        if( theCtxt) {}

        if( !_g_SchedulerActive) {
            return null;
        }

        if( _g_FrameSchedulerFunctionIsTimeout) {
            if( _g_ScheduledTimeout) {
               clearTimeout( _g_ScheduledTimeout);
                _g_ScheduledTimeout = null;
            }
        }

        _g_SchedulerActive = false;

        return null;

    })._sName( _displayName, 'pDeactivateScheduler')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
    _privateMembers.push( pDeactivateScheduler);
    if(m_Instrument.cDocFuncs) {
        pDeactivateScheduler._sDesc(
        'Pause the scheduling of frames.');

        _doc+=('\n\n' + pDeactivateScheduler._doc);
    }









    var _pScheduleNextFrame = (function( theCtxt) {

        if( !_g_SchedulerActive) {
            return null;
        }

        var aFrameSchedulerFunction = _fFrameSchedulerFunction( theCtxt);
        if( !aFrameSchedulerFunction) {
            throw new m_Error.Error('PlatformServiceUnavailableError', {module: _displayName, function: _fActivateScheduler, platformService: '_fFrameSchedulerFunction'});
        }


        if( _g_FrameSchedulerFunctionIsTimeout) {
            _g_ScheduledTimeout = aFrameSchedulerFunction( _pFrameHandler);
        }
        else {
            _g_ScheduledTimeout = null;
            aFrameSchedulerFunction( _pFrameHandler);
        }

        return null;

    })._sName( _displayName, '_pScheduleNextFrame')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt']
    ]);
    _privateMembers.push( _pScheduleNextFrame);
    if(m_Instrument.cDocFuncs) {
        _pScheduleNextFrame._sDesc(
        'Schedule the handler for the FrameScheduler to be executed asynchronously' +
        'with an AnimationFrame or a timeout.');

        _doc+=('\n\n' + _pScheduleNextFrame._doc);
    }








    var _pFrameHandler = (function() {

        var aCtxt =  m_Ctxt.fNewCtxt();

        try {

            var someSchedules =  _g_ActiveSchedules.slice();
            var aNumSchedules = someSchedules.length;
            /* console.log( aNumSchedules); */
            for (var aScheduleIdx = 0; aScheduleIdx < aNumSchedules; aScheduleIdx++) {

                var aSchedule = someSchedules[ aScheduleIdx];
                if ( aSchedule) {

                    _pComputeFramesPerSecondMetrics( aCtxt, aSchedule);

                    _pRunAndComputeProcessTimeMetrics( aCtxt, aSchedule);


                    if( !aSchedule._v_IsRescheduleAllowed) {
                        pPause( aCtxt, aSchedule);
                    }
                }
            }
        }
        finally {

            _pScheduleNextFrame( aCtxt);
        }

        return null;

    })._sName( _displayName, '_pFrameHandler')._sTrace(_cTr);
    _privateMembers.push( _pFrameHandler);
    if(m_Instrument.cDocFuncs) {
        _pFrameHandler._sDesc(
        'Shall be executed asynchronously by an AnimationFrame schedule or a timeout.');

        _doc+=('\n\n' + _pFrameHandler._doc);
    }











    var _pComputeFramesPerSecondMetrics = (function( theCtxt, theSchedule) {

        var aMillisNow = new Date().getTime();

        if( !theSchedule._v_FramesStartMillis.length) {
            theSchedule._v_FramesPerSecond    = 0;

            theSchedule._v_FramesStartMillis.push( aMillisNow);

            return null;
        }

        var anOldestMillis = theSchedule._v_FramesStartMillis[ 0];

        theSchedule._v_FramesStartMillis.push( aMillisNow);
        if( theSchedule._v_FramesStartMillis.length > _c_NumFramesForAverages) {
            theSchedule._v_FramesStartMillis = theSchedule._v_FramesStartMillis.slice( 0 - _c_NumFramesForAverages)
        }


        theSchedule._v_FramesPerSecond = theSchedule._v_FramesStartMillis.length /
            (( aMillisNow - anOldestMillis) / 1000);

        return null;

    })._sName( _displayName, '_pComputeFramesPerSecondMetrics')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theSchedule', ['Type', 'FrameSchedule']]
    ]);
    _privateMembers.push( _pComputeFramesPerSecondMetrics);
    if(m_Instrument.cDocFuncs) {
        _pComputeFramesPerSecondMetrics._sDesc( '');

        _doc+=('\n\n' + _pComputeFramesPerSecondMetrics._doc);
    }









    var _pRunAndComputeProcessTimeMetrics = (function( theCtxt, theSchedule) {

        var aMillisBefore = new Date().getTime();

        if( !theSchedule._v_FramesProcessTimes.length) {
            theSchedule._v_AverageProcessTime = 0;
            theSchedule._v_TotalProcessMillis = 0;
        }

        if( theSchedule._v_CallbackFunction && theSchedule._v_IsCallbackAllowed) {

            theSchedule._v_CallbackFunction( theCtxt);

            var aMillisAfter = new Date().getTime();
            var aProcessTime = aMillisAfter - aMillisBefore;

            theSchedule._v_TotalProcessMillis += aProcessTime;

            theSchedule._v_FramesProcessTimes.push( aProcessTime);

            var aTotalProcessTimes = 0;
            var aNumProcessTimes = theSchedule._v_FramesProcessTimes.length;
            for (var aProcessTimeIdx = 0; aProcessTimeIdx < aNumProcessTimes; aProcessTimeIdx++) {
                aTotalProcessTimes += theSchedule._v_FramesProcessTimes[ aProcessTimeIdx];
            }

            theSchedule._v_AverageProcessTime = Math.round( 10 * aTotalProcessTimes / aNumProcessTimes) / 10;

            if( theSchedule._v_FramesProcessTimes.length > _c_NumFramesForAverages) {
                theSchedule._v_FramesProcessTimes = theSchedule._v_FramesProcessTimes.slice( 0 - _c_NumFramesForAverages)
            }
        }

        return null;

    })._sName( _displayName, '_pRunAndComputeProcessTimeMetrics')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theSchedule', ['Type', 'FrameSchedule']]
        ]);
    _privateMembers.push( _pRunAndComputeProcessTimeMetrics);
    if(m_Instrument.cDocFuncs) {
        _pRunAndComputeProcessTimeMetrics._sDesc( '');

        _doc+=('\n\n' + _pRunAndComputeProcessTimeMetrics._doc);
    }











    var _fNewVoidFrameSchedule =  (function() {

        return {
            _v_Type:  'FrameSchedule',
            _v_UID:   '',

            _v_CallbackFunction:      null,
            _v_IsCallbackAllowed:     true,
            _v_IsRescheduleAllowed:   true,
            _v_Constraints:           null,

            _v_FramesStartMillis:     [ ],
            _v_FramesProcessTimes:       [ ],
            _v_FramesPerSecond:       null,
            _v_AverageProcessTime:    null,
            _v_TotalProcessMillis:    null

        };

    })._sName( _displayName, '_fNewVoidFrameSchedule')._sTrace(_cTr);
    _privateMembers.push( _fNewVoidFrameSchedule);
    if(m_Instrument.cDocFuncs) {
        _fNewVoidFrameSchedule._sDesc( '');

        _doc+=('\n\n' + _fNewVoidFrameSchedule._doc);
    }








    var fSchedule = (function( theCtxt, theFrameHandler, theAvoidCallback, theAvoidReschedule, theConstraints) {

        var aNewSchedule = _fNewVoidFrameSchedule();
        aNewSchedule._v_UID = m_Identifiable.fNewUID();

        aNewSchedule._v_CallbackFunction    = theFrameHandler;
        aNewSchedule._v_IsCallbackAllowed   = theAvoidCallback   ? false : true;
        aNewSchedule._v_IsRescheduleAllowed = theAvoidReschedule ? false : true;
        aNewSchedule._v_Constraints         = theConstraints;

        if( aNewSchedule._v_IsRescheduleAllowed) {
            _g_ActiveSchedules.push( aNewSchedule);
            pActivateScheduler( theCtxt);
        }
        else {
            _g_PausedSchedules.push( aNewSchedule);
        }

        return aNewSchedule;

    })._sName( _displayName, 'fSchedule')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theFrameHandler',    ['function']],
        [ 'theAvoidCallback',   ['boolean', 'optional']],
        [ 'theAvoidReschedule', ['boolean', 'optional']],
        [ 'theConstraints',     ['object',  'optional']]
    ]);
    _publicMembers.push( fSchedule);
    if(m_Instrument.cDocFuncs) {
        fSchedule._sDesc(
        'Schedule the supplied FrameHandler to be called back and rescheduled according to the supplied constraints.');

        _doc+=('\n\n' + fSchedule._doc);
    }








    var pPause = (function( theCtxt, theSchedule) {

        var anScheduleIndex = _g_ActiveSchedules.indexOf( theSchedule);
        if( anScheduleIndex >= 0) {

            theSchedule._v_IsRescheduleAllowed = false;

            _g_ActiveSchedules = _g_ActiveSchedules.slice( 0, anScheduleIndex).
                concat( _g_ActiveSchedules.slice( anScheduleIndex + 1));

            if( _g_PausedSchedules.indexOf( theSchedule) < 0) {
                _g_PausedSchedules.push( theSchedule);
            }

            if( !_g_ActiveSchedules.length) {
                pDeactivateScheduler( theCtxt);
            }
        }

        return null;

    })._sName( _displayName, 'pPause')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theSchedule',     ['Type', 'Schedule']]
    ]);
    _publicMembers.push(pPause);
    if(m_Instrument.cDocFuncs) {
        pPause._sDesc(
        'Do not execute the supplied registered schedule for the time being.');

        _doc+=('\n\n' + pPause._doc);
    }









    var pResume = (function( theCtxt, theSchedule) {

        var anScheduleIndex = _g_PausedSchedules.indexOf( theSchedule);
        if( anScheduleIndex >= 0) {

            theSchedule._v_IsRescheduleAllowed = true;

            _g_PausedSchedules = _g_PausedSchedules.slice( 0, anScheduleIndex).
                concat( _g_PausedSchedules.slice( anScheduleIndex + 1));

            if( _g_ActiveSchedules.indexOf( theSchedule) < 0) {
                _g_ActiveSchedules.push( theSchedule);

                if( _g_ActiveSchedules.length > 0) { /* ACV OJO TODO could be more restrictive as === 1 but activation sentinel protects from extra activations */
                    pActivateScheduler( theCtxt);
                }
            }
        }

        return null;

    })._sName( _displayName, 'pResume')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theSchedule',     ['Type', 'Schedule']]
        ]);
    _publicMembers.push(pResume);
    if(m_Instrument.cDocFuncs) {
        pResume._sDesc(
        'From now on execute the supplied registered schedule at frame rates.');

        _doc+=('\n\n' + pResume._doc);
    }









    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        pActivateScheduler:   pActivateScheduler,
        pDeactivateScheduler: pDeactivateScheduler,
        fSchedule:            fSchedule,
        pPause:               pPause,
        pResume:              pResume

    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_FrameScheduler')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_Identifiable'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_Identifiable) {

            return aM_Framescheduler(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
                m_Trace, m_Log, m_Identifiable);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Framescheduler.displayName]=aM_Framescheduler(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Identifiable']
        );
    }
    else {
        ChoirJS_Module_Framescheduler= aM_Framescheduler(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_Identifiable
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_FrameScheduler')
}

