/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Performer')
}



var aM_Performer = function (m_ConstValues, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument, m_Trace, m_Identifiable,
                             m_Performance, m_ChantManager, m_Yielder, m_Clock, m_WakeUp, m_Conductor, m_Watcher) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Performer')
    }


    var _displayName = 'm_Performer';

    var _doc = _displayName +' module. Functions to execute Note functions according to a Score.\n' +
        'Execution of the performer loop may be discontinued after too many iterations or too much time lapsed, ' +
        'and may be continued, by any callback that has been registered, and then re-enter the loop through pLoop_Calledback function.\n' +
        'Just in case no callback re-enters the loop, setup a reanimation timer or  MessageChannel.\n' +
        'If too many reanimations, do not re-enter the loop any more, and throw an exception or exit silently.';

    var _privateMembers = [];
    var _publicMembers = [];



    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cMaxDeltasToReportOnWakeUp = 100;

    var _cTr = m_Trace.cTrace && m_ConstValues.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';




    var cAllowYieldToOthers = m_ConstValues.fConst( _displayName, 'cAllowYieldToOthers', true);
    _doc+=('\n\n' +  JSON.stringify({cAllowYieldToOthers: cAllowYieldToOthers}, null, 4));
    _doc+='If true, allow to yield control of the processor after too many iterations have been running choirJS chants.';

    var cMaxContinuousLoopIterations = m_ConstValues.fConst( _displayName, 'cMaxContinuousLoopIterations', 3000);
    _doc+=('\n\n' +  JSON.stringify({cMaxContinuousLoopIterations: cMaxContinuousLoopIterations}, null, 4));
    _doc+='If cAllowYieldToOthers is true, and more than this number of iterations have been running choirJS chants, then yield control of the processor..';

    var cMaxContinuousLoopMilliseconds = m_ConstValues.fConst( _displayName, 'cMaxContinuousLoopMilliseconds', 800);
    _doc+=('\n\n' +  JSON.stringify({cMaxContinuousLoopMilliseconds: cMaxContinuousLoopMilliseconds}, null, 4));
    _doc+='If cAllowYieldToOthers is true, and more than this number of milliseconds have lapsed ' +
        'during continuous running choirJS chants, then yield control of the processor.';

    var cMaxConsecutiveWakeUps = m_ConstValues.fConst( _displayName, 'cMaxConsecutiveWakeUps', 1);
    _doc+=('\n\n' +  JSON.stringify({cMaxConsecutiveWakeUps: cMaxConsecutiveWakeUps}, null, 4));
    _doc+='.';







    _doc+=('\n\nModule functions:');







    var fOpenPerformance = (function( theCtxt, theScore) {

        if(fOpenPerformance._Trace) { m_Trace.pStep(
        'Create, initialize and link an instance of Performance to keep state about the performance of the Score.');}

        var aPerformance=m_ChantManager.fPerformance_Create( theCtxt, theScore);
        if(!aPerformance) {
            throw new m_Error.Error('CreateObjectError', {module: _displayName, function: fOpenPerformance, factoryModule: m_ChantManager.displayName, factory: 'fPerformance_Create', with: [theScore]});
        }

        aPerformance._v_Stopped = false;
        aPerformance._v_LastDeliveryMillis = new Date().getTime();


        return aPerformance;

    })._sName( _displayName, 'fOpenPerformance')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theScore',   ['Type',   'Score']]
    ]);
    _publicMembers.push(fOpenPerformance);
    if(m_Instrument.cDocFuncs) {
        fOpenPerformance._sDesc('');
        _doc+=('\n\n' + fOpenPerformance._doc);
    }







    var pStartPerformance = (function( theCtxt, thePerformance, theAfter) {

        if(pStartPerformance._Trace) { m_Trace.pStep(
        'Create, initialize and link the root instance of Chant to keep state about the performance of the Score.');}

        thePerformance._v_StartClock = m_Clock.fNow();

        var aChange = null;
        if( thePerformance._v_Watchers.length) {
            aChange = m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, null, 'StartPerformance');
        }


        return m_Ctxt.fWithChange( theCtxt, aChange, (function() {
            var aCtxt_Here = theCtxt;
            var aPerformance_Here = thePerformance;
            return function() {

                m_ChantManager.pPostDelta_Performance_Create( theCtxt, thePerformance);

                var aRootChant=m_ChantManager.fChantRoot_Create( aCtxt_Here, aPerformance_Here);
                if(!aRootChant) {
                    throw new m_Error.Error('CreateObjectError', {module: _displayName, function: pStartPerformance, factoryModule: m_ChantManager.displayName, factory: 'fChantRoot_Create', with: [aPerformance]});
                }


                if(pStartPerformance._Trace) { m_Trace.pStep(
                'Schedule Chants for starting Chantables.');}

                _pScheduleStarts( aCtxt_Here, aPerformance_Here, aRootChant);


                if(pStartPerformance._Trace) { m_Trace.pStep(
                    'Recommend to play the starting chants.');}

                pRecommendChants_Immediate( aCtxt_Here, aPerformance_Here, aRootChant._v_Chants);


                aPerformance_Here._v_Stopped = false;
                aPerformance_Here._v_LastDeliveryMillis = new Date().getTime();

                if( theAfter) {
                    aPerformance_Here._v_After = theAfter;
                }

                return  pLoop_Start( aCtxt_Here, aPerformance_Here);

            };
        })());


    })._sName( _displayName, 'pStartPerformance')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',  ['Type',   'Performance']],
        [ 'theAfter',        ['function']]
    ]);
    _publicMembers.push(pStartPerformance);
    if(m_Instrument.cDocFuncs) {
        pStartPerformance._sDesc('');
        _doc+=('\n\n' + pStartPerformance._doc);
    }







    var _pScheduleStarts = (function( theCtxt, thePerformance, theRootChant) {

        var aScore = thePerformance._v_Score;

        if (aScore._v_Starts) {

            var aNumStarts = aScore._v_Starts.length;
            if (aNumStarts) {

                for (var aStartIndex=0; aStartIndex < aNumStarts; aStartIndex++) {

                    var aChantable = aScore._v_Starts[ aStartIndex];
                    if (aChantable) {

                        var aStartChant=m_ChantManager.fChant_Create( theCtxt, thePerformance, theRootChant, aChantable);

                        if(!aStartChant) {
                            throw new m_Error.Error('CreateObjectError', {module: _displayName, function: fPerform, factoryModule: m_ChantManager.displayName, factory: 'fChant_Create', with: [theRootChant]});
                        }
                    }
                }
            }
        }

        m_ChantManager.pChant_ActionsDone_Append( theCtxt, thePerformance, theRootChant, _pScheduleStarts.displayName);

        return null;

    })._sName( _displayName, '_pScheduleStarts')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',  ['Type',   'Performance']],
        [ 'theRootChant',    ['Type',   'Chant']]
    ]);
    _publicMembers.push(_pScheduleStarts);
    if(m_Instrument.cDocFuncs) {
        _pScheduleStarts._sDesc(
        'Create Chants under the root Chant, to play the Chantables choreographed to start the performance.');

        _doc+=('\n\n' + _pScheduleStarts._doc);
    }






    var pRecommendChants_Immediate = (function( theCtxt, thePerformance, theChants) {

        var someChantsToRecommend = [];

        var aChant;
        var aNumChants = theChants.length;
        if (aNumChants) {

            var anIndex;

            for ( anIndex=0; anIndex < aNumChants; anIndex++) {
                aChant = theChants[ anIndex];
                if (aChant) {

                    if (m_Defense.cAllowDefense) {
                        if( !( aChant._v_Type === 'Chant')) {
                            throw new m_Error.Error('ParameterElementTypeError', {module: _displayName, function: pRecommendChants_Immediate, parameter: 'theChants', type: 'Chant', with: [anIndex, aChant]});
                        }
                    }

                    if( !( m_Performance.fPerformanceOf(aChant) === thePerformance)) {
                        throw new m_Error.Error('ParameterElementRootError', {module: _displayName, function: pRecommendChants_Immediate, parameter: 'theChants', with: [anIndex, aChant, thePerformance]});
                    }

                    someChantsToRecommend.push(aChant);
                }
            }
            if(someChantsToRecommend.length) {

                if(pRecommendChants_Immediate._Trace) {
                    var aNumChantsToRecommend = someChantsToRecommend.length;
                    for ( anIndex=0; anIndex < aNumChantsToRecommend; anIndex++) {
                        aChant = someChantsToRecommend[ anIndex];
                        if ( aChant) {
                            if ( (!thePerformance._v_Chants_Recommended) || ( !(thePerformance._v_Chants_Recommended.indexOf(aChant) >= 0))) {
                                m_Trace.pStep(
                                'Newly Recommended chant ' + (aChant._v_UID ? aChant._v_UID: '') + ' for immediate (ASAP) play.');
                            }
                        }
                    }
                }

                if( thePerformance._v_Chants_Recommended) {
                    var aNumCurrentChants = thePerformance._v_Chants_Recommended.length;
                    if ( aNumCurrentChants) {
                        for ( anIndex=0; anIndex < aNumCurrentChants; anIndex++) {
                            var aCurrentChant = thePerformance._v_Chants_Recommended[ anIndex];
                            if ( aCurrentChant) {
                                if ( !(someChantsToRecommend.indexOf(aCurrentChant) >= 0)) {
                                    if(pRecommendChants_Immediate._Trace) { m_Trace.pStep(
                                    'Previously Recommended chant still recommended, but after new recommendations for immediate (ASAP) play ' + (aCurrentChant._v_UID ? aCurrentChant._v_UID: ''));}

                                    someChantsToRecommend.push(aCurrentChant);
                                }
                                else {
                                    if(pRecommendChants_Immediate._Trace) { m_Trace.pStep(
                                    'Previously Recommended chant shall be recommended more immediately (closer to the top) '  + (aCurrentChant._v_UID ? aCurrentChant._v_UID: ''));}
                                }
                            }
                        }
                    }
                }


                thePerformance._v_Chants_Recommended = someChantsToRecommend;

            }
        }

        return null;

    })._sName( _displayName, 'pRecommendChants_Immediate')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',  ['Type',   'Performance']],
        [ 'theChants',       ['object']] /* ACV OJO Defend TODO add constraint array which implies that argument.length > 0 */
    ]);
    _publicMembers.push(pRecommendChants_Immediate);
    if(m_Instrument.cDocFuncs) {
        pRecommendChants_Immediate._sDesc(
        'Prepend supplied chants to the list of chants recommended to be considered for immediate play by conductors.');

        _doc+=('\n\n' + pRecommendChants_Immediate._doc);
    }





    var _fConsumeFirstRecommendedChant = (function( theCtxt, thePerformance) {

        if(thePerformance._v_Chants_Recommended) {

            var aNumChants = thePerformance._v_Chants_Recommended.length;
            for (var anIndex = 0; anIndex < aNumChants; anIndex++) {
                var aChant = thePerformance._v_Chants_Recommended[anIndex];
                if (aChant) {
                    thePerformance._v_Chants_Recommended[anIndex]=null;

                    if(_fConsumeFirstRecommendedChant._Trace) { m_Trace.pStep(
                    'FirstRecommended='  + (aChant._v_UID ? aChant._v_UID: ''));}

                    return aChant;
                }
            }
        }
        return null;

    })._sName( _displayName, '_fConsumeFirstRecommendedChant')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',  ['Type',   'Performance']]
    ]);
    _privateMembers.push(_fConsumeFirstRecommendedChant);
    if(m_Instrument.cDocFuncs) {
        _fConsumeFirstRecommendedChant._sDesc(
        'Return from the supplied Performance, the first chant from the list of chants recommended to be considered for immediate play by conductors.');

        _doc+=('\n\n' + _fConsumeFirstRecommendedChant._doc);
    }







    var _fConsumeFirstPlayableChant = (function( theCtxt, thePerformance) {

        if(!thePerformance._v_Chant) {
            return null;
        }

        return null;

    })._sName( _displayName, '_fConsumeFirstPlayableChant')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',  ['Type',   'Performance']]
    ]);
    _privateMembers.push(_fConsumeFirstPlayableChant);
    if(m_Instrument.cDocFuncs) {
        _fConsumeFirstPlayableChant._sDesc(
        'Return from the supplied Performance, the first chant to be considered for immediate play by conductors.');

        _doc+=('\n\n' + _fConsumeFirstPlayableChant._doc);
    }






    var pLoop_Start = (function( theCtxt, thePerformance) {

        var aStartChg = null;
        if( thePerformance._v_Watchers.length) {
            aStartChg = m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, m_Ctxt.fLastChange( theCtxt), 'Start');
        }

        m_Ctxt.fWithChange( theCtxt, aStartChg, (function() {
            var aCtxt_here = theCtxt;
            var aPerformance_here = thePerformance;
            return function() {

                return _pLoop( aCtxt_here, aPerformance_here);

            };
        })());

    })._sName( _displayName, 'pLoop_Start')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',  ['Type',   'Performance']]
    ]);
    _publicMembers.push(pLoop_Start);
    if(m_Instrument.cDocFuncs) {
        pLoop_Start._sDesc(
        'Enter the performer loop, at the start of the performance.');

        _doc+=('\n\n' + pLoop_Start._doc);
    }




    var pLoop_Calledback = (function( thePerformance) {

        var aCtxt = m_Ctxt.fNewCtxt();

        var aCalledBackChg = null;
        if( thePerformance._v_Watchers.length) {
            aCalledBackChg = m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, null, 'CalledBack');
        }

        m_Ctxt.fWithChange( aCtxt, aCalledBackChg, (function() {
            var aCtxt_here = aCtxt;
            var aPerformance_here = thePerformance;
            return function() {

                return _pLoop( aCtxt_here, aPerformance_here);

            };
        })());

    })._sName( _displayName, 'pLoop_Calledback')._sTrace(_cTr)._DefendWith([
        [ 'thePerformance',  ['Type',   'Performance']]
    ]);
    _publicMembers.push(pLoop_Calledback);
    if(m_Instrument.cDocFuncs) {
        pLoop_Calledback._sDesc(
        'Enter the performer loop, reactivated by a callback registered on an asynchronous event.');

        _doc+=('\n\n' + pLoop_Calledback._doc);
    }





    var pLoop_Continued = (function( theCtxt, thePerformance) {

        return _pLoop( theCtxt, thePerformance);

    })._sName( _displayName, 'pLoop_Continued')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',  ['Type',   'Performance']]
    ]);
    _publicMembers.push(pLoop_Continued);
    if(m_Instrument.cDocFuncs) {
        pLoop_Continued._sDesc(
        'Enter the performer loop, reactivated after the loop voluntarily yielded control of the processor,' +
        'usually after too many loops tending to choirJS, to give a chance to asynchronous event handlers to run.');

        _doc+=('\n\n' + pLoop_Continued._doc);
    }






    var pLoop_AfterWaitForWork = (function( theCtxt, thePerformance) {

        return _pLoop( theCtxt, thePerformance);

    })._sName( _displayName, 'pLoop_AfterWaitForWork')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',  ['Type',   'Performance']]
    ]);
    _publicMembers.push(pLoop_AfterWaitForWork);
    if(m_Instrument.cDocFuncs) {
        pLoop_AfterWaitForWork._sDesc(
        'Enter the performer loop, reactivated after the loop had nothing else to run.');

        _doc+=('\n\n' + pLoop_AfterWaitForWork._doc);
    }






    var pLoop_AfterWaitForEarliestWakeUp = (function( theCtxt, thePerformance) {

        return _pLoop( theCtxt, thePerformance);

    })._sName( _displayName, 'pLoop_AfterWaitForEarliestWakeUp')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',  ['Type',   'Performance']]
    ]);
    _publicMembers.push(pLoop_AfterWaitForEarliestWakeUp);
    if(m_Instrument.cDocFuncs) {
        pLoop_AfterWaitForEarliestWakeUp._sDesc(
            'Enter the performer loop, reactivated after the loop had nothing else to run, ' +
            'but had WakeUp interests waiting.');
        _doc+=('\n\n' + pLoop_AfterWaitForEarliestWakeUp._doc);
    }






    var _pLoop = (function( theCtxt, thePerformance) {

        if( thePerformance._v_InLoop) {
            throw new m_Error.Error('ParameterStateError', {module: _displayName, function: _pLoop, parameter: 'thePerformance', state: '_v_InLoop', with:  [thePerformance, true]});
        }


        if(_pLoop._Trace) { m_Trace.pStep(
        'Record time at the beginning of the loop, to assess later whether too much time has lapsed tending to choirJS chants, without giving a chance to run outstanding asynchronous event handlers.');}

        thePerformance._v_LoopBeginClock = m_Clock.fNow();


        thePerformance._v_InLoop = true;



        var aChant = null;
        var aNumLoops=0;


        var aLoopBeginChg = null;
        if( thePerformance._v_Watchers.length) {
            aLoopBeginChg = m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, m_Ctxt.fLastChange( theCtxt), 'Loop.Begin', {
                _v_LoopBeginClock: thePerformance._v_LoopBeginClock
            });
        }

        try {

            while( true) {

                if(_pLoop._Trace) { m_Trace.pStep(
                'BEGIN Loop iteration');}

                var anIterBeginChg = null;
                if( thePerformance._v_Watchers.length) {
                    anIterBeginChg = m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, aLoopBeginChg, 'Iteration.Begin');
                }

                try {

                    if( cAllowYieldToOthers) {

                        if( aNumLoops) {

                            if(_pLoop._Trace) { m_Trace.pStep(
                            'Check whether to Yield to others because of too may iterations run, or too much time.');}

                            var aMustYieldToOthers = false;
                            var aYieldReason = '';

                            if( cMaxContinuousLoopIterations) {
                                if ( aNumLoops >= cMaxContinuousLoopIterations) {

                                    if(_pLoop._Trace) { m_Trace.pStep(
                                    'Too many iterations run tending to choirJS chants or wake ups.');}

                                    aMustYieldToOthers = true;
                                    aYieldReason = 'TooManyIterations';
                                }
                            }


                            if( cMaxContinuousLoopMilliseconds) {
                                if( m_Clock.fMoreTimeLapsedUntilNow( thePerformance._v_LoopBeginClock, cMaxContinuousLoopMilliseconds)) {

                                    if(_pLoop._Trace) { m_Trace.pStep(
                                    'Too much time has lapsed tending to choirJS chants or wake ups.');}

                                    aMustYieldToOthers = true;
                                    aYieldReason = 'TooMuchTime';
                                }
                            }


                            if( aMustYieldToOthers) {

                                if(_pLoop._Trace) { m_Trace.pStep(
                                'About to Stop performer loop and Yield to others.');}

                                var aYieldChg = null;
                                if( thePerformance._v_Watchers.length) {
                                    aYieldChg = m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, anIterBeginChg, 'Yield.' + aYieldReason);
                                }

                                m_Ctxt.fWithChange( theCtxt, aYieldChg, (function() {
                                    var aCtxt_here = theCtxt;
                                    var aPerformance_here = thePerformance;
                                    return function() {

                                        m_Yielder.pYieldToOthers( aCtxt_here, aPerformance_here);

                                    };
                                })());

                                return null;
                            }
                        }
                    }


                    if( (!cMaxConsecutiveWakeUps) || (thePerformance._v_NumConsecutiveWakeUps < cMaxConsecutiveWakeUps)) {

                        thePerformance._v_NumConsecutiveWakeUps += 1;

                        if(_pLoop._Trace) { m_Trace.pStep(
                        'One more consecutive WakeUp =' + thePerformance._v_NumConsecutiveWakeUps);}

                        if(_pLoop._Trace) { m_Trace.pStep(
                        'Try to obtain a WakeUp interest to execute.');}

                        var aWakeUpInterestDueNow = m_WakeUp.fEarliestWakeUpInterestDueNow( theCtxt, thePerformance);
                        if( aWakeUpInterestDueNow) {

                            var aWakeUpInterest_Interested = aWakeUpInterestDueNow._v_Interested;

                            m_Ctxt.fWithChange( theCtxt, anIterBeginChg, (function() {
                                var aWakeUpInterestDueNow_Here = aWakeUpInterestDueNow;
                                var aCtxt_here = theCtxt;
                                var aPerformance_here = thePerformance;
                                return function() {

                                    m_WakeUp.pDropWakeUpInterest( aCtxt_here, aPerformance_here, aWakeUpInterestDueNow_Here);

                                };
                            })());


                            if( aWakeUpInterest_Interested) {

                                if(_pLoop._Trace) { m_Trace.pStep(
                                'Inform the Yielder that the performer is again active.');}

                                m_Yielder.pResetNumConsecutiveWaitsForWork( thePerformance);


                                if(_pLoop._Trace) { m_Trace.pStep(
                                'Increment loop counter.');}

                                aNumLoops++;


                                if(_pLoop._Trace) { m_Trace.pStep(
                                'Execute WakeUp interest now due, and continue loop. ' +
                                aWakeUpInterestDueNow._v_UID + ' ' + aWakeUpInterestDueNow._v_InterestKind);}

                                var aWakeUpChg = null;
                                if( thePerformance._v_Watchers.length) {

                                    var aNumDeltas = thePerformance._v_PendingDeltas.length;
                                    var aMaxNumDeltas = Math.min( _cMaxDeltasToReportOnWakeUp, aNumDeltas);
                                    var someDeltaKinds = [];
                                    for ( var anIndex = 0; anIndex < aMaxNumDeltas; anIndex++) {
                                        var aDelta = thePerformance._v_PendingDeltas[ anIndex];
                                        if ( aDelta) {
                                            var aDeltaKind = aDelta._v_DeltaKind;
                                            if ( aDeltaKind) {
                                                someDeltaKinds.push( aDeltaKind);
                                            }
                                        }
                                    }

                                    aWakeUpChg = m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, anIterBeginChg, 'WakeUp', {
                                        'WakeUpInterest' :   aWakeUpInterestDueNow,
                                        '_v_NumDeltas' :     aNumDeltas,
                                        '_v_SomeDeltaKinds': someDeltaKinds
                                    });
                                }

                                m_Ctxt.fWithChange( theCtxt, aWakeUpChg, (function() {
                                    var aWakeUpInterest_Interested_here = aWakeUpInterest_Interested;
                                    var aCtxt_here = theCtxt;
                                    var aPerformance_here = thePerformance;
                                    return function() {

                                        aWakeUpInterest_Interested_here( aCtxt_here, aPerformance_here);

                                    };
                                })());

                                continue;
                            }
                        }
                    }




                    if(_pLoop._Trace) { m_Trace.pStep(
                    'Try to obtain a recommended or playable Chant to execute. Reset counter of consecutive WakeUps');}

                    thePerformance._v_NumConsecutiveWakeUps = 0;

                    aChant = _fConsumeFirstRecommendedChant( theCtxt, thePerformance);
                    if (!aChant) {
                        aChant = _fConsumeFirstPlayableChant( theCtxt, thePerformance);
                    }
                    if ( aChant) {

                        if(_pLoop._Trace) { m_Trace.pStep(
                        'Inform the Yielder that the performer is again active.');}

                        m_Yielder.pResetNumConsecutiveWaitsForWork( thePerformance);

                        aNumLoops++;


                        if(_pLoop._Trace) { m_Trace.pStep(
                        'Play the chant, and continue loop. ' + aChant._v_UID);}

                        var aConductChg = null;
                        if( thePerformance._v_Watchers.length) {
                            aConductChg = m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, anIterBeginChg, 'Conduct', {
                                'Chant_UID': aChant._v_UID
                            });
                        }

                        m_Ctxt.fWithChange( theCtxt, aConductChg, (function() {
                            var aCtxt_Here = theCtxt;
                            var aChant_Here = aChant;
                            return function() {

                                m_Conductor.fConduct( aCtxt_Here, aChant_Here);

                            };
                        })());

                        continue;
                    }




                    if ( m_WakeUp.fExistsAnyWakeUpInterest( theCtxt, thePerformance)) {
                        if(_pLoop._Trace) { m_Trace.pStep(
                        'After skipping checking WakeUps found no Chants, but there are some WakeUps pending. Continue loop.');}

                        var aWaitUntilWakeUpChg = null;
                        if( thePerformance._v_Watchers.length) {
                            aWaitUntilWakeUpChg = m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, anIterBeginChg, 'WaitUntilWakeUp');
                        }

                        m_Ctxt.fWithChange( theCtxt, aWaitUntilWakeUpChg, (function() {
                            var aCtxt_here = theCtxt;
                            var aPerformance_here = thePerformance;
                            return function() {

                                m_Yielder.pWaitForEarliestWakeUp( aCtxt_here, aPerformance_here);

                            };
                        })());

                        return null;
                    }



                    if(_pLoop._Trace) { m_Trace.pStep(
                    'Has not found anything to do. Wait for work. Loop ends here.');}

                    var aWaitForWorkChg = null;
                    if( thePerformance._v_Watchers.length) {
                        aWaitForWorkChg = m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, anIterBeginChg, 'WaitForWork');
                    }
                    m_Ctxt.fWithChange( theCtxt, aWaitForWorkChg, (function() {
                        var aCtxt_here = theCtxt;
                        var aPerformance_here = thePerformance;
                        return function() {

                            m_Yielder.pWaitForWork( aCtxt_here, aPerformance_here);

                        };
                    })());

                    return null;
                }
                finally {
                        if(_pLoop._Trace) { m_Trace.pStep(
                            'END Loop iteration');}

                        if( thePerformance._v_Watchers.length) {
                            m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, anIterBeginChg, 'Iteration.End');
                        }
                    }

            }

            /* return null; Unreachable code */
        }
        finally {

            if(_pLoop._Trace) { m_Trace.pStep(
            'Record time at the end of the loop, for performance analysis.');}

            thePerformance._v_LoopEndClock = m_Clock.fNow();

            thePerformance._v_InLoop = false;

            if( thePerformance._v_Watchers.length) {
                m_Watcher.fChangeAndDeliver( theCtxt, thePerformance, aLoopBeginChg, 'Loop.End', {
                    _v_LoopEndClock: thePerformance._v_LoopBeginClock
                });
            }
        }
    })._sName( _displayName, '_pLoop'). _sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',  ['Type',   'Performance']]
    ]);
    _privateMembers.push(_pLoop);
    if(m_Instrument.cDocFuncs) {
        _pLoop._sDesc(
        'Plays recommended and playable chants delegating on the conductor, ' +
        'while there are any chants available, or until a maximum of chants have been played. ' +
        'Execution may be continued, by any callback that has been registered, ' +
        'and then re-enter the loop through pLoop_Calledback function.\n' +
        'Just in case no callback re-enters the loop, setup a reanimation timer.');

        _doc+=('\n\n' + _pLoop._doc);
    }








    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        fOpenPerformance:  fOpenPerformance,
        pStartPerformance: pStartPerformance,

        pRecommendChants_Immediate: pRecommendChants_Immediate,

        pLoop_Start:      pLoop_Start,

        pLoop_Continued:  pLoop_Continued,
        pLoop_AfterWaitForEarliestWakeUp: pLoop_AfterWaitForEarliestWakeUp,
        pLoop_AfterWaitForWork: pLoop_AfterWaitForWork,
        pLoop_Calledback: pLoop_Calledback
    };

    aModule._doc+='ACV OJO This creates a references cycle, that would avoid garbage collection of the modules.\n' +
             'Implemented this way to avoid a loop in the dependencies of modules m_Yielded and m_Performer.';
    m_Yielder.pRegisterModuleDependencyCycle( aModule);

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Performer')
    }


    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Performer')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument', 'm_Trace', 'm_Identifiable',
        'm_Performance', 'm_ChantManager', 'm_Yielder', 'm_Clock', 'm_WakeUp', 'm_Conductor', 'm_Watcher'],
        function (m_ConstValues, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument, m_Trace, m_Identifiable,
                  m_Performance, m_ChantManager, m_Yielder, m_Clock, m_WakeUp, m_Conductor, m_Watcher) {

            return aM_Performer(m_ConstValues, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument, m_Trace, m_Identifiable,
                m_Performance, m_ChantManager, m_Yielder, m_Clock, m_WakeUp, m_Conductor, m_Watcher);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Performer.displayName]=aM_Performer(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_Performance'],
            gChoirJS_Modules['m_ChantManager'],
            gChoirJS_Modules['m_Yielder'],
            gChoirJS_Modules['m_Clock'],
            gChoirJS_Modules['m_WakeUp'],
            gChoirJS_Modules['m_Conductor'],
            gChoirJS_Modules['m_Watcher']
        );
    }
    else {
        ChoirJS_Module_Performer= aM_Performer(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_Performance,
            ChoirJS_Module_ChantManager,
            ChoirJS_Module_Yielder,
            ChoirJS_Module_Clock,
            ChoirJS_Module_WakeUp,
            ChoirJS_Module_Conductor,
            ChoirJS_Module_LoopChanges
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Performer')
}

