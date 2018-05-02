/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Yielder')
}


var aM_Yielder = function (m_ConstValues, m_Functionx, m_Ctxt, m_Instrument, m_Error, m_Trace, m_Clock, m_Watcher, m_WakeUp) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Yielder')
    }


    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */

    var _displayName = 'm_Yielder';

    var _doc=_displayName +' module. Handler functions to schedule asynchronous continuation on a supplied Performance, ' +
        'and releasing control of the processor, allowing other asynchronous events to be procesed. \n' +
        'Execution of the performer loop may be discontinued after too many iterations or too much time lapsed, ' +
        'and may be continued, by any callback that has been registered, and then re-enter the loop through pLoop_Calledback function.\n' +
        'Just in case no callback re-enters the loop, setup a reanimation timer or  MessageChannel.\n' +
        'If too many WaitsForWork, do not re-enter the loop any more, and throw and exception or exit silently.';



    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';




    var cWaitForWorkMillis = m_ConstValues.fConst( _displayName, 'cWaitForWorkMillis', 10);
    _doc+=('\n\n' +  JSON.stringify({cWaitForWorkMillis: cWaitForWorkMillis}, null, 4));
    _doc+='cWaitForWorkMillis Configurable module constant The minimum duration to set the timeout ' +
        'to reanimate performance re-entering the loop, when the performer does not find anything else to run.';


    var cMaxWaitsForWork = m_ConstValues.fConst( _displayName, 'cMaxWaitsForWork', 2);
    _doc+=('\n\n' +  JSON.stringify({cMaxWaitsForWork: cMaxWaitsForWork}, null, 4));
    _doc+='cMaxWaitsForWork Configurable module constant Maximum number of consecutive WaitsForWork of the performer, after the performer did not find anything else to run.';


    var cThrowErrorAfterMaxWaitsForWork  = m_ConstValues.fConst( _displayName, 'cThrowErrorAfterMaxWaitsForWork', false);
    _doc+=('\n\n' +  JSON.stringify({cThrowErrorAfterMaxWaitsForWork: cThrowErrorAfterMaxWaitsForWork}, null, 4));
    _doc+='cThrowErrorAfterMaxWaitsForWork Configurable module constant If true, an exception shall be thrown, after exceeding ' +
        'the maximum number of consecutive WaitsForWork of the performer, after the performer did not find anything else to run.';

    var cWaitForEarliestWakeUpMillis = m_ConstValues.fConst( _displayName, 'cWaitForEarliestWakeUpMillis', 10);
    _doc+=('\n\n' +  JSON.stringify({cWaitForEarliestWakeUpMillis: cWaitForEarliestWakeUpMillis}, null, 4));
    _doc+='cWaitForEarliestWakeUpMillis Configurable module constant The minimum duration to set the timeout ' +
        'to reanimate performance re-entering the loop, when the performer does not find anything else to run, ' +
        'but had WakeUp interests waiting.';






    _doc+=('\n\nCross-Module references:');


    var m_Performer = null;
    _doc+='m_Performer module variable shall be initialized with the m_Performer module when the m_Performer module initializes.\n' +
        'This creates a references cycle, which may avoid garbage collection of the modules.\n' +
        'It has been implemented this way to avoid a loop in the dependencies of modules m_Yielded and m_Performer.';






    _doc+=('\n\nInter-Module dependency functions:');




    var pRegisterModuleDependencyCycle = (function( thePerformerModule) {

            m_Performer = thePerformerModule;

            return null;

        })._sName( _displayName, 'pRegisterModuleDependencyCycle')._sTrace(_cTr);
    _publicMembers.push(pRegisterModuleDependencyCycle);
    if(m_Instrument.cDocFuncs) {
        pRegisterModuleDependencyCycle._sDesc('');
        _doc+=('\n\n' + pRegisterModuleDependencyCycle._doc);
    }







    var pBreakModuleDependencyCycle = (function() {

            m_Performer = null;

            return null;

        })._sName( _displayName, 'pBreakModuleDependencyCycle')._sTrace(_cTr);
    _publicMembers.push(pBreakModuleDependencyCycle);
    if(m_Instrument.cDocFuncs) {
        pBreakModuleDependencyCycle._sDesc('');
        _doc+=('\n\n' + pBreakModuleDependencyCycle._doc);
    }







    _doc+=('\n\nModule functions:');





    var _pAfterYieldMessageHandler = (function( thePerformance, theWaitChange, theEvent) {

        if(theEvent) {}

        if(_pAfterYieldMessageHandler._Trace) { m_Trace.pStep(
        'Continue the performance by re-entering the loop. ' +
        'This invocation may take very long to complete.');}

        var aCtxt =  m_Ctxt.fNewCtxt();

        var aChange = null;
        if( thePerformance._v_Watchers.length) {
            aChange = m_Watcher.fChangeAndDeliver( aCtxt, thePerformance, theWaitChange, 'Yield.MessageChannel.Handled');
            if( theWaitChange) {
                aChange._v_Fulfills          = theWaitChange;
                theWaitChange._v_FulfilledBy = aChange;
            }
        }

        m_Ctxt.fWithChange( aCtxt, aChange, (function() {
            var aCtxt_Here = aCtxt;
            var thePerformance_Here = thePerformance;
            return function() {
                m_Performer.pLoop_Continued( aCtxt_Here, thePerformance_Here);
            };
        })());



        return null;
    })._sName( _displayName, '_pAfterYieldMessageHandler')._sTrace(_cTr)._DefendWith([
        [ 'thePerformance',   ['Type',   'Performance']],
        [ 'theWaitChange',    ['Type',   'Change', 'optional']],
        [ 'theEvent',         ['object']],
    ]);
    _privateMembers.push(_pAfterYieldMessageHandler);
    if(m_Instrument.cDocFuncs) {
        _pAfterYieldMessageHandler._sDesc(
        'Shall be executed asynchronously by receiving the message in the message channel port, ' +
        'registered after the performer voluntarily yielded processor control after too many cycles tending to choirCS chants or WakeUp interests.' +
        'A message to the same channel is sent immediately after this sentence, ' +
        'such that the handler is called as soon as other outstanding asynchronous events have been processed.');

        _doc+=('\n\n' + _pAfterYieldMessageHandler._doc);
    }









    var _pAfterYieldTimeoutHandler = (function( thePerformance, theWaitChange) {

        if(_pAfterYieldTimeoutHandler._Trace) { m_Trace.pStep(
        'Continue the performance by re-entering the loop. ' +
        'This invocation may take very long to complete.');}

        var aCtxt =  m_Ctxt.fNewCtxt();


        var aChange = null;
        if( thePerformance._v_Watchers.length) {
            aChange = m_Watcher.fChangeAndDeliver( aCtxt, thePerformance, theWaitChange, 'Yield.Timeout.Handled');
            if( theWaitChange) {
                aChange._v_Fulfills          = theWaitChange;
                theWaitChange._v_FulfilledBy = aChange;
            }
        }

        m_Ctxt.fWithChange( aCtxt, aChange, (function() {
            var aCtxt_Here = aCtxt;
            var thePerformance_Here = thePerformance;
            return function() {
                m_Performer.pLoop_Continued( aCtxt_Here, thePerformance_Here);
            };
        })());

        return null;
    })._sName( _displayName, '_pAfterYieldTimeoutHandler')._sTrace(_cTr)._DefendWith([
        [ 'thePerformance',   ['Type',   'Performance']],
        [ 'theWaitChange',    ['Type',   'Change', 'optional']]
    ]);
    _privateMembers.push(_pAfterYieldTimeoutHandler);
    if(m_Instrument.cDocFuncs) {
        _pAfterYieldTimeoutHandler._sDesc(
        'Shall be executed asynchronously by a timer of zero duration ' +
        'registered after the performer voluntarily yielded processor control after too many cycles tending to choirCS chants  or WakeUp interests.');

        _doc+=('\n\n' + _pAfterYieldTimeoutHandler._doc);
    }












    var pYieldToOthers = (function ( theCtxt, thePerformance) {

        var aMessageChannel;
        var aWaitMessageChange;
        var anAfterYieldMessageHandler;

        if ( thePerformance._v_MessageChannel) {

            if(pYieldToOthers._Trace) { m_Trace.pStep(
            'MessageChannel already setup for the Performance.');}

            thePerformance._v_YieldedToOthers = true;

            if(pYieldToOthers._Trace) { m_Trace.pStep(
            'Schedule the Performance to be continued asynchronously ASAP by signaling port in the MessageChannel.');}

            aWaitMessageChange = null;
            if( thePerformance._v_Watchers.length) {
                aWaitMessageChange = m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, m_Ctxt.fLastChange( theCtxt), 'Yield.MessageChannel.Post');
            }

            anAfterYieldMessageHandler = (function() {
                var aPerformanceHere = thePerformance;
                var aWaitMessageChange_Here = aWaitMessageChange;
                return function( theEvent) {
                    _pAfterYieldMessageHandler( aPerformanceHere, aWaitMessageChange_Here, theEvent);
                };
            })();
            if(anAfterYieldMessageHandler) {} /* To avoid code quality tools complaining that the variable could be avoided */
            thePerformance._v_MessageChannel.port1.onmessage = anAfterYieldMessageHandler;

            thePerformance._v_MessageChannel.port2.postMessage('ReEnter_pLoop_FromYielder');

            if( thePerformance._v_Watchers.length) {
                m_Watcher.pForceDeliverChanges( theCtxt, thePerformance);
            }

            return null;
        }


        if(pYieldToOthers._Trace) { m_Trace.pStep(
        'Attempt to create a MessageChannel, if the browser supports them.');}

        if ( !( typeof MessageChannel === 'undefined')) {
            aMessageChannel = new MessageChannel();
            if ( !(typeof aMessageChannel === 'undefined')) {

                if(pYieldToOthers._Trace) { m_Trace.pStep(
                'Register the new MessageChannel at the same array index as the registered Performance.');}

                thePerformance._v_MessageChannel = aMessageChannel;


                if(pYieldToOthers._Trace) { m_Trace.pStep(
                'Register the handler to continue playing the Performance on one of the ports of the new MessageChannel.');}

                if( thePerformance._v_Watchers.length) {
                    m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, m_Ctxt.fLastChange( theCtxt), 'Yield.MessageChannel.New');
                }

                aWaitMessageChange = null;
                if( thePerformance._v_Watchers.length) {
                    aWaitMessageChange = m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, m_Ctxt.fLastChange( theCtxt), 'Yield.MessageChannel.Post');
                }

                anAfterYieldMessageHandler = (function() {
                    var aPerformanceHere = thePerformance;
                    var aWaitMessageChange_Here = aWaitMessageChange;
                    return function( theEvent) {
                        _pAfterYieldMessageHandler( aPerformanceHere, aWaitMessageChange_Here, theEvent);
                    };
                })();
                if(anAfterYieldMessageHandler) {} /* To avoid code quality tools complaining that the variable could be avoided */
                thePerformance._v_MessageChannel.port1.onmessage = anAfterYieldMessageHandler;

                thePerformance._v_YieldedToOthers = true;

                if(pYieldToOthers._Trace) { m_Trace.pStep(
                'Signal port on the new MessageChannel to trigger asynchronous continuation.');}


                thePerformance._v_MessageChannel.port2.postMessage('postMessage->pYieldToOthers-message_handler(thePerformance._v_UID=' + thePerformance._v_UID + ')');

                if( thePerformance._v_Watchers.length) {
                    m_Watcher.pForceDeliverChanges( theCtxt, thePerformance);
                }

                return null;
            }
        }



        if(pYieldToOthers._Trace) { m_Trace.pStep(
        'Browser does not support MessageChannel. Use a zero duration timeout instead.');}

        thePerformance._v_YieldedToOthers = true;

        if(pYieldToOthers._Trace) { m_Trace.pStep(
            'Register the handler to continue playing the Performance after a minimal duration timeout expires.');}

        var aWaitChange = null;
        if( thePerformance._v_Watchers.length) {
            aWaitChange = m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, m_Ctxt.fLastChange( theCtxt), 'Yield.Timeout.Set');
        }

        var anAfterYieldTimeoutHandler = (function() {
            var aPerformanceHere = thePerformance;
            var aWaitChange_Here = aWaitChange;
            return function( theEvent) {
                if( theEvent) {}
                aPerformanceHere._v_YieldTimeout = null;
                _pAfterYieldTimeoutHandler( aPerformanceHere, aWaitChange_Here);
            };
        })();

        thePerformance._v_YieldTimeout = setTimeout(anAfterYieldTimeoutHandler, 0);

        if( thePerformance._v_Watchers.length) {
            m_Watcher.pForceDeliverChanges( theCtxt, thePerformance);
        }

        return null;

    })._sName( _displayName, 'pYieldToOthers')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',   ['Type',   'Performance']]
    ]);
    _publicMembers.push(pYieldToOthers);
    if(m_Instrument.cDocFuncs) {
        pYieldToOthers._sDesc(
        'Register for continuation before giving up control of the processor. ' +
        'The supplied Performance has no more Chants nor WakeUp interests available for immediate play, ' +
        'and yields control of the processor, giving a chance to execute to other asynchronous event handlers, ' +
        'requesting re-entry and continuation of playing the Performance.\n' +
        'Re-entry is requested to happen ASAP, through an asynchronous handler on a MessageChannel, ' +
        'or a zero duration timeout.');

        _doc+=('\n\n' + pYieldToOthers._doc);
    }









    var pTheEnd = (function ( theCtxt, thePerformance) {

        if( thePerformance._v_Watchers.length) {
            m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, m_Ctxt.fLastChange( theCtxt), 'PerformanceEnded');
        }

        if ( thePerformance._v_MessageChannel) {
            if(pTheEnd._Trace) { m_Trace.pStep(
            'Release message channel for continuation of the Performance, and cleanup associated message entry.');}

            try {
                thePerformance._v_MessageChannel.port1.close();
            }
            catch(anException) {
                if(anException) {}
            }
            try {
                thePerformance._v_MessageChannel.port2.close();
            }
            catch(anException) {
                if(anException) {}
            }
            thePerformance._v_MessageChannel = null;
        }


        if ( thePerformance._v_YieldTimeout) {

            if(pTheEnd._Trace) { m_Trace.pStep(
            'Cancel and release a timeout on the Performance to continue after Yield.');}

            clearTimeout( thePerformance._v_YieldTimeout);
            thePerformance._v_YieldTimeout = null;
        }


        if ( thePerformance._v_WaitForWorkTimeout) {

            if(pTheEnd._Trace) { m_Trace.pStep(
            'Cancel and release a timeout on the Performance to continue after WaitForWork.');}

            clearTimeout( thePerformance._v_WaitForWorkTimeout);
            thePerformance._v_WaitForWorkTimeout = null;
        }


        if ( thePerformance._v_DeltasWakeUpInterest) {

            if ( !thePerformance._v_DeltasWakeUpInterest._v_Dropped) {
                if(pTheEnd._Trace) { m_Trace.pStep(
                'Drop interest in WakeUp to deliver Deltas.');}

                m_WakeUp.pDropWakeUpInterest( theCtxt, thePerformance, thePerformance._v_DeltasWakeUpInterest);
            }
            thePerformance._v_DeltasWakeUpInterest = null;
        }





        if(pTheEnd._Trace) { m_Trace.pStep(
        'Cleanup the counter of consecutive WaitsForWork for the Performance.');}

        thePerformance._v_NumWaitsForWork = null;



        if ( thePerformance._v_After) {

            if(pTheEnd._Trace) { m_Trace.pStep(
            'Run AFTER Performance End.');}

            if( thePerformance._v_Watchers.length) {
                m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, m_Ctxt.fLastChange( theCtxt), 'RunAfterPerformance');
            }

            if( thePerformance._v_Watchers.length) {
                m_Watcher.pForceDeliverChanges( theCtxt, thePerformance);
            }

            thePerformance._v_After();

        }

        return null;

    })._sName( _displayName, 'pTheEnd')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',   ['Type',   'Performance']]
    ]);
    _publicMembers.push(pTheEnd);
    if(m_Instrument.cDocFuncs) {
        pTheEnd._sDesc(
        'The supplied Performance will not be played any longer, so any resources reserved for it shall be released.');

        _doc+=('\n\n' + pTheEnd._doc);
    }









    var _pWaitForWorkTimeoutHandler = (function( thePerformance, theWaitChange) {

        if(_pWaitForWorkTimeoutHandler._Trace) { m_Trace.pStep(
        'Continue the performance by re-entering the loop. ' +
        'This invocation may take very long to complete.');}

        var aCtxt =  m_Ctxt.fNewCtxt();

        var aChange = null;
        if( thePerformance._v_Watchers.length) {
            aChange = m_Watcher.fChangeAndDeliver( aCtxt, thePerformance, theWaitChange, 'WaitForWork.Timeout.Handled');
            if( theWaitChange) {
                aChange._v_Fulfills          = theWaitChange;
                theWaitChange._v_FulfilledBy = aChange;
            }
        }

        m_Ctxt.fWithChange( aCtxt, aChange, (function() {
            var aCtxt_Here = aCtxt;
            var thePerformance_Here = thePerformance;
            return function() {
                m_Performer.pLoop_AfterWaitForWork( aCtxt_Here, thePerformance_Here);
            };
        })());

        return null;

    })._sName( _displayName, '_pWaitForWorkTimeoutHandler')._sTrace(_cTr)._DefendWith([
        [ 'thePerformance',   ['Type',   'Performance']],
        [ 'theWaitChange',    ['Type',   'Change', 'optional']]
    ]);
    _privateMembers.push(_pWaitForWorkTimeoutHandler);
    if(m_Instrument.cDocFuncs) {
        _pWaitForWorkTimeoutHandler._sDesc(
        'Shall be executed asynchronously by a timer of duration cWaitForWorkMillis ' + cWaitForWorkMillis + ' milliseconds, ' +
        'registered after the performer voluntarily yielded processor control after not finding anything else to do.');

        _doc+=('\n\n' + _pWaitForWorkTimeoutHandler._doc);
    }









    var pWaitForWork = (function ( theCtxt, thePerformance) {

        var anEarliestWakeUpInterest = m_WakeUp.fEarliestWakeUpInterest( theCtxt, thePerformance);

        if( !anEarliestWakeUpInterest) {
            if ( thePerformance._v_NumWaitsForWork) {

                if ( thePerformance._v_NumWaitsForWork >= cMaxWaitsForWork) {

                    if( thePerformance._v_Watchers.length) {
                        m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, m_Ctxt.fLastChange( theCtxt), 'TooManyWaitsForWork');
                    }

                    if(pWaitForWork._Trace) { m_Trace.pStep(
                    'Excessive number of consecutive WaitsForWork. Do not reanimate any more. ' +
                    'Throw an exception, or do nothing. ' +
                    'Calling performer shall also return immediately after the invocation of this pWaitForWork.');}

                    thePerformance._v_Stopped = true;

                    if ( thePerformance._v_MessageChannel) {

                        if(pWaitForWork._Trace) { m_Trace.pStep(
                        'Release message channel for continuation of the Performance, if such exists, and cleanup associated message entry.');}

                        try {
                            thePerformance._v_MessageChannel.port1.close();
                        }
                        catch(anException) {
                            if(anException) {}
                        }
                        try {
                            thePerformance._v_MessageChannel.port2.close();
                        }
                        catch(anException) {
                            if(anException) {}
                        }
                        thePerformance._v_MessageChannel = null;
                    }


                    if ( thePerformance._v_YieldTimeout) {

                        if(pWaitForWork._Trace) { m_Trace.pStep(
                        'Cancel and release a timeout on the Performance to continue after Yield.');}

                        clearTimeout( thePerformance._v_YieldTimeout);
                        thePerformance._v_YieldTimeout = null;
                    }

                    if( thePerformance._v_Watchers.length) {
                        m_Watcher.pForceDeliverChanges( theCtxt, thePerformance);
                    }

                    if ( thePerformance._v_After) {

                        if(pWaitForWork._Trace) { m_Trace.pStep(
                        'Run AFTER Performance TooManyWaitsForWork.');}

                        thePerformance._v_After();
                    }



                    if( cThrowErrorAfterMaxWaitsForWork) {
                        throw new m_Error.Error('TooManyWaitsForWork', {module: _displayName, function: pWaitForWork, with: [ thePerformance, cMaxWaitsForWork, aConsecutiveWaitsForWork]});
                    }
                    else {
                        if(pWaitForWork._Trace) { m_Trace.pStep(
                        'TooManyWaitsForWork. STOPPED.');}
                    }

                    return null;
                }
                else {
                    thePerformance._v_NumWaitsForWork += 1;
                }
            }
            else {
                thePerformance._v_NumWaitsForWork = 1;
            }
        }
        else {
            var x = 1;
            if( x) {}
        }



        if(pWaitForWork._Trace) { m_Trace.pStep(
        'Do not wait longer than the earlier WakeUp interest.');}

        var aWaitForWorkMillis = cWaitForWorkMillis;
        if ( anEarliestWakeUpInterest) {
            var anEarliestWakeUpClock = anEarliestWakeUpInterest._v_WakeUpScheduleClock;
            if ( anEarliestWakeUpClock) {
                aWaitForWorkMillis = m_Clock.fMillisUntil( anEarliestWakeUpClock);
            }
        }
        if( aWaitForWorkMillis < 0) {
            aWaitForWorkMillis = 0;
        }


        if(pWaitForWork._Trace) { m_Trace.pStep(
        'Register the handler to continue playing the Performance after a timeout expires.');}

        var aWaitChange = null;
        if( thePerformance._v_Watchers.length) {
            aWaitChange = m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, m_Ctxt.fLastChange( theCtxt), 'WaitForWork.Timeout.Set');
        }

        var aWaitForWorkTimeoutHandler = (function() {
            var aPerformanceHere = thePerformance;
            var aWaitChange_Here = aWaitChange;
            return function() {
                aPerformanceHere._v_WaitForWorkTimeout = null;
                _pWaitForWorkTimeoutHandler( aPerformanceHere, aWaitChange_Here);
            };
        })();

        thePerformance._v_WaitForWorkTimeout = setTimeout( aWaitForWorkTimeoutHandler, aWaitForWorkMillis);

        if( thePerformance._v_Watchers.length) {
            m_Watcher.pForceDeliverChanges( theCtxt, thePerformance);
        }

        return null;

    })._sName( _displayName, 'pWaitForWork')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',   ['Type',   'Performance']]
    ]);
    _publicMembers.push(pWaitForWork);
    if(m_Instrument.cDocFuncs) {
        pWaitForWork._sDesc(
        'The supplied Performance has no more Chants available for immediate play, ' +
        'and yields control of the processor, giving a chance to execute to other asynchronous event handlers, ' +
        'requesting re-entry and continuation of playing the Performance.');

        _doc+=('\n\n' + pWaitForWork._doc);
    }









    var pResetNumConsecutiveWaitsForWork = (function (thePerformance) {

        thePerformance._v_NumWaitsForWork = null;

        return null;

    })._sName( _displayName, 'pResetNumConsecutiveWaitsForWork')._sTrace(_cTr)._DefendWith([
        [ 'thePerformance',   ['Type',   'Performance']]
    ]);
    _publicMembers.push(pResetNumConsecutiveWaitsForWork);
    if(m_Instrument.cDocFuncs) {
        pResetNumConsecutiveWaitsForWork._sDesc(
        'The Performer informs the yielder that the performer now got something to do, ' +
        'such that the yielder may clean up the counter of consecutive WaitsForWork.');

        _doc+=('\n\n' + pResetNumConsecutiveWaitsForWork._doc);
    }










    var _pWaitForEarliestWakeUpTimeoutHandler = (function( thePerformance, theWaitChange) {

        if(_pWaitForEarliestWakeUpTimeoutHandler._Trace) { m_Trace.pStep(
        'Continue the performance by re-entering the loop. ' +
        'This invocation may take very long to complete.');}

        var aCtxt =  m_Ctxt.fNewCtxt();

        var aChange = null;
        if( thePerformance._v_Watchers.length) {
            aChange = m_Watcher.fChangeAndDeliver( aCtxt, thePerformance, m_Ctxt.fLastChange( aCtxt), 'WaitUntilWakeUp.Timeout.Handled');
            if( theWaitChange) {
                aChange._v_Fulfills          = theWaitChange;
                theWaitChange._v_FulfilledBy = aChange;
            }
          }

        m_Ctxt.fWithChange( aCtxt, aChange, (function() {
            var aCtxt_Here = aCtxt;
            var thePerformance_Here = thePerformance;
            return function() {
                m_Performer.pLoop_AfterWaitForEarliestWakeUp( aCtxt_Here, thePerformance_Here);
            };
        })());


        return null;

    })._sName( _displayName, '_pWaitForEarliestWakeUpTimeoutHandler')._sTrace(_cTr)._DefendWith([
        [ 'thePerformance',   ['Type',   'Performance']],
        [ 'theWaitChange',    ['Type',   'Change', 'optional']]
    ]);
    _privateMembers.push(_pWaitForEarliestWakeUpTimeoutHandler);
    if(m_Instrument.cDocFuncs) {
        _pWaitForEarliestWakeUpTimeoutHandler._sDesc(
        'Shall be executed asynchronously by a timer of duration cWaitForWorkMillis ' + cWaitForWorkMillis + ' milliseconds, ' +
        'registered after the performer voluntarily yielded processor control after not finding anything else to do, but had WakeUp interests waiting.');

        _doc+=('\n\n' + _pWaitForEarliestWakeUpTimeoutHandler._doc);
    }









    var pWaitForEarliestWakeUp = (function ( theCtxt, thePerformance) {

        var anEarliestWakeUpInterest = m_WakeUp.fEarliestWakeUpInterest( theCtxt, thePerformance);

        if( !anEarliestWakeUpInterest) {
            return pWaitForWork( theCtxt, thePerformance);
         }

        if(pWaitForEarliestWakeUp._Trace) { m_Trace.pStep(
        'Do not wait longer than the earlier WakeUp interest.');}

        var aWaitForEarliestWakeUpMillis = cWaitForEarliestWakeUpMillis;
        var anEarliestWakeUpClock = anEarliestWakeUpInterest._v_WakeUpScheduleClock;
        if ( anEarliestWakeUpClock) {
            aWaitForEarliestWakeUpMillis = m_Clock.fMillisUntil( anEarliestWakeUpClock);
        }
        if( aWaitForEarliestWakeUpMillis < 0) {
            aWaitForEarliestWakeUpMillis = 0;
        }

        if( thePerformance._v_WaitForWorkTimeout) {
            if(pWaitForEarliestWakeUp._Trace) { m_Trace.pStep(
            'A wait for work timer already exists. Cancel it.');}

            clearTimeout( thePerformance._v_WaitForWorkTimeout);
            thePerformance._v_WaitForWorkTimeout = null;
        }


        if(pWaitForEarliestWakeUp._Trace) { m_Trace.pStep(
        'Register the handler to continue playing the Performance after a timeout expires, in time for the earliest WakeUp.');}

        var aWaitChange = null;
        if( thePerformance._v_Watchers.length) {
            aWaitChange = m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, m_Ctxt.fLastChange( theCtxt), 'WaitUntilWakeUp.Timeout.Set');
        }

        var aWaitForEarliestWakeUpTimeoutHandler = (function() {
            var aPerformanceHere = thePerformance;
            var aWaitChange_Here = aWaitChange;
            return function() {

                aPerformanceHere._v_WaitForWorkTimeout = null;
                _pWaitForEarliestWakeUpTimeoutHandler( aPerformanceHere, aWaitChange_Here);

            };
        })();

        thePerformance._v_WaitForWorkTimeout = setTimeout( aWaitForEarliestWakeUpTimeoutHandler, aWaitForEarliestWakeUpMillis);

        if( thePerformance._v_Watchers.length) {
            m_Watcher.pForceDeliverChanges( theCtxt, thePerformance);
        }

        return null;

    })._sName( _displayName, 'pWaitForEarliestWakeUp')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',   ['Type',   'Performance']]
    ]);
    _publicMembers.push(pWaitForEarliestWakeUp);
    if(m_Instrument.cDocFuncs) {
        pWaitForEarliestWakeUp._sDesc(
        'The supplied Performance has no more Chants available for immediate play, but has wome WakeUp interests waiting, ' +
        'and yields control of the processor, giving a chance to execute to other asynchronous event handlers, ' +
        'requesting re-entry and continuation of playing the Performance in time for the earliest WakeUp interest.');

        _doc+=('\n\n' + pWaitForEarliestWakeUp._doc);
    }





    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        cWaitForWorkMillis:   cWaitForWorkMillis,
        cMaxWaitsForWork:              cMaxWaitsForWork,
        cThrowErrorAfterMaxWaitsForWork: cThrowErrorAfterMaxWaitsForWork,

        pRegisterModuleDependencyCycle: pRegisterModuleDependencyCycle,
        pBreakModuleDependencyCycle: pBreakModuleDependencyCycle,

        pYieldToOthers:         pYieldToOthers,
        pWaitForWork:           pWaitForWork,
        pWaitForEarliestWakeUp: pWaitForEarliestWakeUp,

        pResetNumConsecutiveWaitsForWork:     pResetNumConsecutiveWaitsForWork,

        pTheEnd:         pTheEnd
    };
    if(aModule) {}  /* To avoid code quality tools from complaining about unused parameter */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Yielder')
    }

    return aModule;
};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Yielder')
}




if( typeof define === 'function') {

    define(['m_ConstValues', 'm_Functionx', 'm_Ctxt', 'm_Instrument', 'm_Error', 'm_Trace', 'm_Clock', 'm_Watcher', 'm_WakeUp'],
        function (m_ConstValues, m_Functionx, m_Ctxt, m_Instrument, m_Error, m_Trace, m_Clock, m_Watcher, m_WakeUp) {
        return aM_Yielder(m_ConstValues, m_Functionx, m_Ctxt, m_Instrument, m_Error, m_Trace, m_Clock, m_Watcher, m_WakeUp);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Yielder.displayName]=aM_Yielder(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Clock'],
            gChoirJS_Modules['m_Watcher'],
            gChoirJS_Modules['m_WakeUp']
        );
    }
    else {
        ChoirJS_Module_Yielder = aM_Yielder(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Error,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Clock,
            ChoirJS_Module_Watcher,
            ChoirJS_Module_WakeUp
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Yielder')
}
