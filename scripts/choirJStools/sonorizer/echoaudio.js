/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_EchoAudio')
}



var aM_EchoAudio = function (m_ConstValues_Tools,  m_Functionx, m_Error, m_Instrument, m_Identifiable, m_Log, m_Clock,
    m_Trace, m_WakeUp, m_Performance, m_Frequencies, m_NoteSounds, m_Ctxt, m_Conductor, m_Watcher,
    m_SerieNotes) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_EchoAudio')
    }


    var _displayName = 'm_EchoAudio';

    var _doc = _displayName +' module. Prototype and Factory to sonorize execution of Note elements in Phrases or Voices in Scores.';

    var _privateMembers = [];
    var _publicMembers = [];

    var _cOnePointZero  = 1.0;



    var _cLogTimeAnomalies = false;



    _doc+=('\n\nConfigurable module constants copied from m_ConstValues_Tools:');


    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';

    var _cLogPlayAudio = m_Log.cLogAllowed &&  m_ConstValues_Tools.fConst( _displayName, '_cLogPlayAudio', false);
    _doc+=('\n\n' +  JSON.stringify({_cLogPlayAudio: _cLogPlayAudio}, null, 4));
    _doc+='Module constant _cLogPlayAudio Whether to log audio play functions in this module.';

    var _cLogPlayAudioEnvelope = _cLogPlayAudio && m_ConstValues_Tools.fConst( _displayName, '_cLogPlayAudioEnvelope', false);
    _doc+=('\n\n' +  JSON.stringify({_cLogPlayAudioEnvelope: _cLogPlayAudioEnvelope}, null, 4));
    _doc+='Module constant _cLogPlayAudioEnvelope Whether to log the creation of the envelope for each audio played note.';


    var _cUseDate = m_ConstValues_Tools.fConst( _displayName, '_cUseDate', false);
    _doc+=('\n\n' +  JSON.stringify({_cUseDate: _cUseDate}, null, 4));
    _doc+='Module constant _cPlaySchedule Whether compute timing with Javascript new Date().getTime() as opposed to AudioContext currentTime.';

    var _cPlaySchedule = m_ConstValues_Tools.fConst( _displayName, '_cPlaySchedule', 'Timed'); /* 'Immediate'; */
    _doc+=('\n\n' +  JSON.stringify({_cPlaySchedule: _cPlaySchedule}, null, 4));
    _doc+='Module constant _cPlaySchedule When to schedule playing audio sounds. Currently supported immediate and streamed.';


    var _cMaxRealDurationMilliseconds = m_ConstValues_Tools.fConst( _displayName, '_cMaxRealDurationMilliseconds', 5000);
    _doc+=('\n\n' +  JSON.stringify({_cMaxRealDurationMilliseconds: _cMaxRealDurationMilliseconds}, null, 4));
    _doc+='Module constant _cMaxRealDurationMilliseconds No Sound shall play for a longer duration - even if the real interval lasted longer.';

    var _cPlayDurationMilliseconds = m_ConstValues_Tools.fConst( _displayName, '_cPlayDurationMilliseconds', 100);
    _doc+=('\n\n' +  JSON.stringify({_cPlayDurationMilliseconds: _cPlayDurationMilliseconds}, null, 4));
    _doc+='Module constant _cPlaySchedule Specifies the Number of milliseconds of duration to play notes.';

    var _cKeepBusyPreFeedMilliseconds = m_ConstValues_Tools.fConst( _displayName, '_cKeepBusyPreFeedMilliseconds', 200);
    _doc+=('\n\n' +  JSON.stringify({_cKeepBusyPreFeedMilliseconds: _cKeepBusyPreFeedMilliseconds}, null, 4));
    _doc+='Module constant _cKeepBusyPreFeedMilliseconds Used to shorten the time to wake up to play notes, ' +
        'in advance to the moment of completion of the sounds already scheduled in the AudioContext.';

    var _cMinLapseToRequestWakeUpMilliseconds = m_ConstValues_Tools.fConst( _displayName, '_cMinLapseToRequestWakeUpMilliseconds', 5);
    _doc+=('\n\n' +  JSON.stringify({_cMinLapseToRequestWakeUpMilliseconds: _cMinLapseToRequestWakeUpMilliseconds}, null, 4));
    _doc+='Module constant _cMinLapseToRequestWakeUpMilliseconds If the lapse to request a WakeUp is shorter than this, ' +
        'then do not bother in setting up a WakeUp.' +
        'Shall immediately feed the sound to the AudioContext.';



    var _cMinWakeUpRescheduleMilliseconds = m_ConstValues_Tools.fConst( _displayName, '_cMinWakeUpRescheduleMilliseconds', 5);
    _doc+=('\n\n' +  JSON.stringify({_cMinWakeUpRescheduleMilliseconds: _cMinWakeUpRescheduleMilliseconds}, null, 4));
    _doc+='Module constant _cMinWakeUpRescheduleMilliseconds ' +
        'When a WakeUp is already registered to eventually feed sounds to the AudioContext. ' +
        'If the difference in reschedule times between the currently registered wakeup, ' +
        'and the time to wakeup computed for this note, ' +
        'then Reschedule the wakeup further in the future.';



    var _cSecondsAfterSoundEndsToDropAudioComponents = m_ConstValues_Tools.fConst( _displayName, '_cSecondsAfterSoundEndsToDropAudioComponents', 1.0);
    _doc+=('\n\n' +  JSON.stringify({_cSecondsAfterSoundEndsToDropAudioComponents: _cSecondsAfterSoundEndsToDropAudioComponents}, null, 4));
    _doc+='Module constant _cSecondsAfterSoundEndsToDropAudioComponents AudioComponents shall be dropped ' +
        'not earlier than the computed stop time for the sound plus this configured constant value.';




    var _cPlaySource = m_ConstValues_Tools.fConst( _displayName, '_cPlaySource', 'Buffer'); /* 'Oscillator' */  /* 'Buffer' */
    _doc+=('\n\n' +  JSON.stringify({_cPlaySource: _cPlaySource}, null, 4));
    _doc+='Module constant _cPlaySource Play Buffers or Oscillator.';


    var _cBufferDefaultOctave =  m_ConstValues_Tools.fConst( _displayName, '_cBufferDefaultOctave', 5);
    _doc+=('\n\n' +  JSON.stringify({_cBufferDefaultOctave: _cBufferDefaultOctave}, null, 4));
    _doc+='Module constant _cBufferDefaultOctave When the PlaySource is Buffer, specifies the Octave to use to play audio notes, when no octave has been supplied..';

    var _cCutBufferNotesAtDuration =  m_ConstValues_Tools.fConst( _displayName, '_cBufferDefaultOctave', true);
    _doc+=('\n\n' +  JSON.stringify({_cCutBufferNotesAtDuration: _cCutBufferNotesAtDuration}, null, 4));
    _doc+='Module constant _cCutBufferNotesAtDuration If true, then stop playing the buffer of the note after its computed duration. ' +
        'If false then play the Buffer for the duration of all its samples.';

    var _cBufferDurationFactor =  m_ConstValues_Tools.fConst( _displayName, '_cBufferDurationFactor', 1.1);
    _doc+=('\n\n' +  JSON.stringify({_cBufferDurationFactor: _cBufferDurationFactor}, null, 4));
    _doc+='Module constant _cBufferDurationFactor To change the duration of Buffer play to cause some sound overlap.';


    var _cOscillatorDefaultOctave =  m_ConstValues_Tools.fConst( _displayName, '_cOscillatorDefaultOctave', 5);
    _doc+=('\n\n' +  JSON.stringify({_cOscillatorDefaultOctave: _cOscillatorDefaultOctave}, null, 4));
    _doc+='Module constant _cBufferDefaultOctave When the PlaySource is Oscillator, specifies the Octave to use to play audio notes, when no octave has been supplied..';

    var _cOscillatorType =  m_ConstValues_Tools.fConst( _displayName, '_cOscillatorType', 'sine');  /* square sawtooth triangle custom */
    _doc+=('\n\n' +  JSON.stringify({_cOscillatorType: _cOscillatorType}, null, 4));
    _doc+='Module constant _cOscillatorType May be sine, square, ... .';

    var _cOscillatorDurationFactor =  m_ConstValues_Tools.fConst( _displayName, '_cOscillatorDurationFactor', 1.1);
    _doc+=('\n\n' +  JSON.stringify({_cOscillatorDurationFactor: _cOscillatorDurationFactor}, null, 4));
    _doc+='Module constant _cOscillatorDurationFactor To change the duration of Oscillator play to cause some sound overlap.';

    var _cOscillatorWaveForm =  m_ConstValues_Tools.fConst( _displayName, '_cOscillatorWaveForm', [ [ 0.1, 1], [ 0.9, 0.8] ]);
    _doc+=('\n\n' +  JSON.stringify({_cOscillatorWaveForm: _cOscillatorWaveForm}, null, 4));
    _doc+='Module constant _cOscillatorWaveForm Wave form of Oscillators, ' +
        'as a series of moments in time as a fraction of the note duration, and the gain level at such moments.';









    _doc+=('\n\nPrototype and Factory for EchoAudio:');


    var _prot_EchoAudio = (function() {


        var aPrototype = {};

        aPrototype._v_Type = 'EchoAudio';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;




        aPrototype._pConnectEchoAudio =  (function( theCtxt ) {

            this._v_UID = m_Identifiable.fNewUID();

            this._v_AudioSerie = new m_SerieNotes.f_Constructor_SerieNotes( theCtxt);

            this._v_AudioContext = null;
            this._v_AudioContext_StartMillis = null;
            this._v_AudioContext_AlreadyStarted = false;
            this._v_AudioContext_LastFakeMillis = null;
            this._v_AudioContext_TimeAdjustAfterFakeMillis = null;

            this._v_NotesPending = [];

            this._v_LastTimePosted          = null;
            this._v_LastAudioSoundBeginTime = null;
            this._v_LastAudioSoundEndTime   = null;

            this._v_WakeUpInterestToPlayPendingNotes    = null;
            this._v_WakeUpInterestToDropAudioComponents = null;

            this._v_AudioComponentsToDrop       = [ ];

            m_Conductor.pRegisterInterest_PlayChant( theCtxt, this._v_Performance, this);

            return null;

        })._sName( aPrototype._ModuleName, '_pConnectEchoAudio')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pConnectEchoAudio._sDesc(
            'Initialize this instance of EchoAudio, ' +
            'Registering interest in receiving notifications of notes played ' +
            'by the Conductor of the Performance of this EchoAudio.');

            aPrototype._doc+=('\n\n' + aPrototype._pConnectEchoAudio._doc);
        }





        aPrototype.pNoteHasJustBeenPlayed = (function ( theCtxt, theChant) {
            if(_cLogPlayAudio) {
                m_Log.pLog( aPrototype.pNoteHasJustBeenPlayed.displayName);
            }
            if( !theChant) {
                return null;
            }

            if(!this._v_AudioSerie) {
                return null;
            }

            var someSoundNotesToPlay = this._v_AudioSerie.fNextSoundNotesToPlay();
            if( someSoundNotesToPlay) {
                this._pPlaySoundNotes( theCtxt, someSoundNotesToPlay);
            }

            if( this._v_Performance._v_Watchers.length) {
                m_Watcher.fChangeAndDeliver( theCtxt, this._v_Performance, m_Ctxt.fLastChange( theCtxt), 'NoteJustPlayed', {
                    _v_SoundNoteNames: someSoundNotesToPlay
                });
            }

            return null;

        })._sName( aPrototype._ModuleName, 'pNoteHasJustBeenPlayed')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theChant', ['Type', 'Chant']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pNoteHasJustBeenPlayed._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype.pNoteHasJustBeenPlayed._doc);
        }









        aPrototype._pPlaySoundNotes = (function ( theCtxt, theSoundNoteNames) {

            if( !theSoundNoteNames) {
                return null;
            }

            switch(_cPlaySchedule) {
                case 'Immediate':
                    this._pPlaySoundNotes_Immediate( theCtxt, theSoundNoteNames);
                    break;

                case 'Timed':
                    this._pPlaySoundNotes_Timed( theCtxt, theSoundNoteNames);
                    break;

                default:
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pPlaySoundNotes')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theSoundNoteNames', ['object']] /* ACV OJO Defense TODO shall be array of strings */
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pPlaySoundNotes._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype._pPlaySoundNotes._doc);
        }







        aPrototype._pPlaySoundNotes_Immediate = (function ( theCtxt, theSoundNoteNames) {

            if(_cLogPlayAudio) {
                m_Log.pLog( aPrototype._pPlaySoundNotes_Immediate.displayName);
            }
            if( !theSoundNoteNames) {
                return null;
            }
            if(_cLogPlayAudio) {
                m_Log.pLog( aPrototype._pPlaySoundNotes_Immediate.displayName + '  theSoundNoteNames[=' + theSoundNoteNames.length + ']=' + JSON.stringify(theSoundNoteNames));
            }

            var anAudioContext = this._fAudioContext( theCtxt);
            if( !anAudioContext) {
                return null;
                /* throw 'M: m_EchoAudio  F: _pPlaySoundNotes_Immediate No _fAudioContext'; */
            }

            var aNumSoundNoteNames = theSoundNoteNames.length;
            for (var anIndex = 0; anIndex < aNumSoundNoteNames; anIndex++) {
                var aSoundNoteName = theSoundNoteNames[ anIndex];
                if ( aSoundNoteName) {
                    this.pPlaySoundNoteBufferStandAlone( aSoundNoteName, anAudioContext)
                }
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pPlaySoundNotes_Immediate')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theSoundNoteNames', ['object']] /* ACV OJO Defense TODO shall be array of strings */
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pPlaySoundNotes_Immediate._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype._pPlaySoundNotes_Immediate._doc);
        }










        aPrototype._pPlaySoundNotes_Timed = (function( theCtxt, theSoundNoteNames) {

            if( !theSoundNoteNames) {
                return null;
            }

            var aNumSoundNoteNames = theSoundNoteNames.length;
            if( !aNumSoundNoteNames) {
                return null;
            }

            if(_cLogPlayAudio) {
                m_Log.pLog( aPrototype._pPlaySoundNotes_Timed.displayName + '  theSoundNoteNames[=' + theSoundNoteNames.length + ']=' + JSON.stringify(theSoundNoteNames));
            }

            if(aPrototype._pPlaySoundNotes_Timed._Trace) { m_Trace.pStep(
            'Obtain and initialize an AudioContext, ' +
            'the earlier the better, as it has some latency to start the currentTime time counter.');}

            var anAudioContext = this._fAudioContext( theCtxt);
            if( !anAudioContext) {
                return null;
                /*
                throw new m_Error.Error('PlatformServiceUnavailableError', {module: _displayName, function: aPrototype._pPlaySoundNotesPending, platformService: 'AudioContext'});
                */
            }


            var aNowTime = this._fCurrentTime( theCtxt);
            if(_cLogPlayAudio) {
                m_Log.pLog( aPrototype._pPlaySoundNotes_Timed.displayName +  '  aNowTime=' + aNowTime);
            }



            if(aPrototype._pPlaySoundNotes_Timed._Trace) { m_Trace.pStep(
            'Store the current time and notes supplied for play.');}

            this._v_NotesPending.push( [ aNowTime, theSoundNoteNames[ 0]]);


            if( aNumSoundNoteNames > 1) {

                if(aPrototype._pPlaySoundNotes_Timed._Trace) { m_Trace.pStep(
                'When multiple notes supplied at the same time, ' +
                'store them with the current time advancind for each note' +
                'the constant time configured for duration of a note.');}

                var aBeginNoteTime = aNowTime;
                for ( var anIndex = 1; anIndex < aNumSoundNoteNames; anIndex++) {
                    aBeginNoteTime += _cPlayDurationMilliseconds;
                    this._v_NotesPending.push( [ aBeginNoteTime, theSoundNoteNames[ anIndex]]);
                }
            }



            if(_cLogPlayAudio) {
                m_Log.pLog( aPrototype._pPlaySoundNotes_Timed.displayName +  '  this._v_LastAudioSoundBeginTime=' + this._v_LastAudioSoundBeginTime);
            }

            if(aPrototype._pPlaySoundNotes_Timed._Trace) { m_Trace.pStep(
            'If it is not the first time playing notes' +
            'then consider if sounds shall be fed to the AudioContext now, or stored to be fed later.');}

            if ( !( this._v_LastAudioSoundEndTime === null)) {

                if(aPrototype._pPlaySoundNotes_Timed._Trace) { m_Trace.pStep(
                'If the time lapsed since the end of last sound fed to the AudioContext ' +
                'is not bigger than some pre-feed margin ' +
                '(such that audio is kept continuously busy and does not run out of sounds fed to be played) ' +
                'then it is not yet time to feed additional notes to the AudioContext.');}

                var aKeepBusyPreFeedTime     = ( _cOnePointZero *  _cKeepBusyPreFeedMilliseconds) / 1000;
                var aMinLapseToRequestWakeUpTime = ( _cOnePointZero *  _cMinLapseToRequestWakeUpMilliseconds) / 1000;

                var aLapseToWakeUp_Time =  this._v_LastAudioSoundEndTime - aNowTime - aKeepBusyPreFeedTime;

                if( this._v_WakeUpInterestToPlayPendingNotes ||
                    (aLapseToWakeUp_Time > aMinLapseToRequestWakeUpTime)) {

                    if(aPrototype._pPlaySoundNotes_Timed._Trace) { m_Trace.pStep(
                    'No sounds shall be fed to the AudioContext at this time,' +
                    'and an interest to WakeUp shall be registered, ' +
                    'so that the sounds are eventually fed to the AudioContext.');}


                    var aLapseToWakeUp_Millis = Math.floor( _cOnePointZero * aLapseToWakeUp_Time * 1000);

                    var aWakeUpClock = m_Clock.fAfterNowPlusMillis( aLapseToWakeUp_Millis);
                    if(_cLogPlayAudio) {
                        m_Log.pLog( aPrototype._pPlaySoundNotes_Timed.displayName +  '  aLapseToWakeUp_Time=' + aLapseToWakeUp_Time);
                        m_Log.pLog( aPrototype._pPlaySoundNotes_Timed.displayName +  '  aLapseToWakeUp_Millis=' + aLapseToWakeUp_Millis);
                        m_Log.pLog( aPrototype._pPlaySoundNotes_Timed.displayName +  '  aWakeUpClock._v_Time=' + aWakeUpClock._v_Time);
                    }


                    if( !this._v_WakeUpInterestToPlayPendingNotes) {

                        if(aPrototype._pPlaySoundNotes_Timed._Trace) { m_Trace.pStep(
                        'No interest to WakeUp is already registered to eventually feed sounds to the AudioContext. ' +
                        'Register interest to wakeup some time in the future from now.');}

                        var anEchoAudio = this;

                        var aWakeupHandler = (function() {
                            var anEchoAudioHere = anEchoAudio;
                            return function( theCtxt_arg) {
                                if(_cLogPlayAudio) {
                                    m_Log.pLog('Awaken to play sounds.');
                                }

                                if( anEchoAudioHere._v_WakeUpInterestToPlayPendingNotes) {
                                    anEchoAudioHere._v_WakeUpInterestToPlayPendingNotes._v_Dropped = true;
                                    anEchoAudioHere._v_WakeUpInterestToPlayPendingNotes = null;
                                }
                                anEchoAudioHere._pPlaySoundNotesPending( theCtxt_arg);
                            }
                        })();


                        if(_cLogPlayAudio) {
                            m_Log.pLog('REGISTER WakeUp interest to play sounds in aWakeUpClock._v_Time=' + aWakeUpClock._v_Time);
                        }

                        this._v_WakeUpInterestToPlayPendingNotes = m_WakeUp.fRegisterInterestToWakeUp(
                            theCtxt,
                            this._v_Performance,
                            aWakeUpClock,
                            aWakeupHandler,
                            'EchoAudio'
                        );
                    }
                    else {

                        if(aPrototype._pPlaySoundNotes_Timed._Trace) { m_Trace.pStep(
                        'A WakeUp is already registered to eventually feed sounds to the AudioContext. ' +
                        'If the difference in reschedule times between the currently registered wakeup, ' +
                        'and the time to wakeup computed for this note, ' +
                        'then Reschedule the wakeup further in the future.');}

                        var aRescheduleMillis = m_Clock.fMillisLapsed(
                            this._v_WakeUpInterestToPlayPendingNotes._v_WakeUpScheduleClock, aWakeUpClock);

                        if ( aRescheduleMillis > _cMinWakeUpRescheduleMilliseconds) {

                            if(aPrototype._pPlaySoundNotes_Timed._Trace) { m_Trace.pStep(
                           'Reschedule the already registered WakeUp further in the future.');}

                            if(_cLogPlayAudio) {
                                m_Log.pLog( aPrototype._pPlaySoundNotes_Timed.displayName +  '  RESCHEDULE WakeUp interest');
                                m_Log.pLog( aPrototype._pPlaySoundNotes_Timed.displayName +  '  aRescheduleMillis=' + aRescheduleMillis);
                                m_Log.pLog( aPrototype._pPlaySoundNotes_Timed.displayName +  '  this._v_WakeUpInterestToPlayPendingNotes._v_WakeUpScheduleClock._v_Time=' + aWakeUpClock._v_Time);
                            }

                            this._v_WakeUpInterestToPlayPendingNotes._v_WakeUpScheduleClock = aWakeUpClock;
                            m_WakeUp.pRescheduleWakeUpInterest( theCtxt, this._v_Performance,
                                this._v_WakeUpInterestToPlayPendingNotes);
                        }
                    }

                    return null;
                }
            }

            this._pPlaySoundNotesPending( theCtxt);

            return null;

        })._sName( aPrototype._ModuleName, '_pPlaySoundNotes_Timed')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theSoundNoteNames', ['object']] /* ACV OJO Defense TODO shall be array of strings */
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pPlaySoundNotes_Timed._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype._pPlaySoundNotes_Timed._doc);
        }













        aPrototype._fNewVoidNotePlayReport = (function() {
            return {
                _v_OctaveNumber: null,
                _v_NoteName: null,
                _v_StartTime: null,
                _v_Duration: null
            };
        });












        aPrototype._pPlaySoundNotesPending = (function ( theCtxt) {

            if( theCtxt) {}

            if( !this._v_NotesPending)  {
                return null;
            }

            var aNumNotesPending = this._v_NotesPending.length;
            if( !aNumNotesPending)  {
                return null;
            }

            if(_cLogPlayAudio) {
                m_Log.pLog( aPrototype._pPlaySoundNotesPending.displayName +
                    '  this._v_NotesPending=[' + this._v_NotesPending.length + ']  ' +
                    JSON.stringify( this._v_NotesPending));
            }


            var someNotesPending = this._v_NotesPending.slice();
            this._v_NotesPending = [];


            var anAudioContext = this._fAudioContext( theCtxt);
            if( !anAudioContext) {
                return null;
                /*
                throw new m_Error.Error('PlatformServiceUnavailableError', {module: _displayName, function: aPrototype._pPlaySoundNotesPending, platformService: 'AudioContext'});
                */
            }



            if( this._v_WakeUpInterestToPlayPendingNotes) {

                if(aPrototype._pPlaySoundNotesPending._Trace) { m_Trace.pStep(
                'Dropping the currently registered interest to WakeUp because this is awake now.');}

                m_WakeUp.pDropWakeUpInterest( theCtxt, this._v_Performance, this._v_WakeUpInterestToPlayPendingNotes);

                this._v_WakeUpInterestToPlayPendingNotes._v_Dropped = true;
                this._v_WakeUpInterestToPlayPendingNotes = null;
            }



            var someSoundNotePlayReports = [];


            for (var aNoteIndex = 0; aNoteIndex < aNumNotesPending; aNoteIndex++) {
                var aPendingNote = someNotesPending[aNoteIndex];
                if ( aPendingNote && ( aPendingNote.length > 1)) {

                    var aTimePosted    = aPendingNote[ 0];
                    var aSoundNoteName = aPendingNote[ 1];
                    if ( aSoundNoteName) {

                        var anOctaveNumber = -1;

                        if ( (aSoundNoteName[0] >='0') && (aSoundNoteName[0] <='9')) {
                            if( aSoundNoteName.length < 2) {
                                continue;
                            }
                            try { anOctaveNumber = parseInt( aSoundNoteName[0]); } catch(anException) {}
                            aSoundNoteName = aSoundNoteName.substr(1);
                        }



                        var aNotePlayReport = this._pPlaySoundNote( theCtxt, anAudioContext, aTimePosted, anOctaveNumber, aSoundNoteName);
                        if ( aNotePlayReport) {
                            someSoundNotePlayReports.push( aNotePlayReport);
                        }
                    }
                }
            }


            if( this._v_Performance._v_Watchers.length) {
                var aParentChange = m_Ctxt.fLastChange( theCtxt);
                if( !aParentChange) {
                    var xyz = 1; if( xyz) {}
                }
                m_Watcher.fChangeAndDeliver( theCtxt, this._v_Performance, aParentChange, 'SoundNotesPlayed', {
                    _v_SoundNotePlayReports: someSoundNotePlayReports
                });
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pPlaySoundNotesPending')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pPlaySoundNotesPending._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype._pPlaySoundNotesPending._doc);
        }








        aPrototype._fLapseSinceLastTimePosted = (function ( theCtxt, theTimePosted) {

            if( theCtxt) {}

            var aLapse = 0.0;

            if ( !( this._v_LastTimePosted === null)) {

                var aLapsedMillis =  theTimePosted - this._v_LastTimePosted;
                if( aLapsedMillis > 0) {

                    aLapse = ( _cOnePointZero *  aLapsedMillis) / 1000;
                    if(_cLogPlayAudio) {
                        m_Log.pLog( aPrototype._fComputeNextNoteDurationFromTimePosted.displayName +  '  aLapse=' + aLapse);
                    }
                }
            }

            this._v_LastTimePosted = theTimePosted;

            return aLapse;

        })._sName( aPrototype._ModuleName, '_fLapseSinceLastTimePosted')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theTimePosted', ['number']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fLapseSinceLastTimePosted._sDesc('Always Zero or Positive.');

            aPrototype._doc+=('\n\n' + aPrototype._fLapseSinceLastTimePosted._doc);
        }








        aPrototype._pPlaySoundNote = (function ( theCtxt, theAudioContext, theTimePosted, theOctaveNumber, theSoundNoteName) {

            var aMustProduceReport = _cLogPlayAudio || this._v_Performance._v_Watchers.length;


            if( !theAudioContext) {
                return null;
            }

            if( !theSoundNoteName) {
                return null;
            }

            var aPlayDurationTime    = ( _cOnePointZero *  _cPlayDurationMilliseconds) / 1000;
            var aMaxRealDurationTime = ( _cOnePointZero *  _cMaxRealDurationMilliseconds) / 1000;



            var aNowTime = this._fCurrentTime( theCtxt);


            var aLapseSinceLastTimePosted = Math.max( 0.0, this._fLapseSinceLastTimePosted( theCtxt, theTimePosted));


            var aNotePlayReport = null;
            if(aMustProduceReport) {
                aNotePlayReport = this._fNewVoidNotePlayReport();

                aNotePlayReport._v_CurrentTime =  aNowTime;
                aNotePlayReport.aLapseSinceLastTimePosted =  aLapseSinceLastTimePosted;

                aNotePlayReport._v_TimePosted =   theTimePosted;
                aNotePlayReport._v_OctaveNumber = theOctaveNumber;
                aNotePlayReport._v_NoteName =     theSoundNoteName;
                aNotePlayReport._v_LastAudioSoundBeginTime_AtStart = this._v_LastAudioSoundBeginTime;
                aNotePlayReport._v_LastAudioSoundBeginTime = null;
                aNotePlayReport._v_LastAudioSoundEndTime = null;
                aNotePlayReport._v_DurationTime = null
            }


            if ( this._v_LastAudioSoundBeginTime === null) {

                this._v_LastAudioSoundBeginTime = aNowTime;
            }
            else {

                if( aNowTime > this._v_LastAudioSoundBeginTime) {
                    this._v_LastAudioSoundBeginTime = aNowTime;
                }


                this._v_LastAudioSoundBeginTime += Math.max(
                    Math.min( aLapseSinceLastTimePosted, aMaxRealDurationTime),
                    aPlayDurationTime
                );
            }


            var aDurationTime = aPlayDurationTime * _cBufferDurationFactor;
            if( aLapseSinceLastTimePosted > aDurationTime) {
                aDurationTime = Math.min( aLapseSinceLastTimePosted, aMaxRealDurationTime);
            }

            this._v_LastAudioSoundEndTime =  this._v_LastAudioSoundBeginTime + aDurationTime;

            if(aMustProduceReport) {
                aNotePlayReport._v_LastAudioSoundBeginTime = this._v_LastAudioSoundBeginTime;
                aNotePlayReport._v_LastAudioSoundEndTime = this._v_LastAudioSoundEndTime;
                aNotePlayReport._v_DurationTime =  aDurationTime;
            }


            if ( _cPlaySource === 'Buffer') {

                this._pPlaySoundNote_Buffer( theCtxt, theAudioContext, theOctaveNumber, theSoundNoteName,
                    this._v_LastAudioSoundBeginTime, aDurationTime);
            }
            else {

                if ( _cPlaySource === 'Oscillator') {
                    this._pPlaySoundNote_Oscillator( theCtxt, theAudioContext, theOctaveNumber, theSoundNoteName,
                        this._v_LastAudioSoundBeginTime, aDurationTime);
                }
                else {

                    throw new m_Error.Error('UnsupportedModeError', {module: _displayName, function: aPrototype._pPlaySoundNote, mode: 'PlaySource', with: [ _cPlaySource]});
                }
            }


            if( _cLogPlayAudio) {
                m_Log.pLog( aPrototype._pPlaySoundNote.displayName +  '  aNotePlayReport=' + JSON.stringify( aNotePlayReport, null, 4));
            }

            return aNotePlayReport;

        })._sName( aPrototype._ModuleName, '_pPlaySoundNote')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theAudioContext',  ['object']],
            [ 'theTimePosted',    ['number']],
            [ 'theOctaveNumber',  ['number']],
            [ 'theSoundNoteName', ['string']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pPlaySoundNote._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype._pPlaySoundNote._doc);
        }








        aPrototype._pPlaySoundNote_Buffer = (function ( theCtxt, theAudioContext, theOctaveNumber, theSoundNoteName,
            theSoundBeginTime, theDurationTime) {

            if( !theAudioContext) {
                return null;
            }

            var aBuffer = m_NoteSounds.fLoadedSoundForNote(  theSoundNoteName, theOctaveNumber);
            if( !aBuffer) {
                throw new m_Error.Error('ResourceUnavailableError', {module: _displayName, function: aPrototype._pPlaySoundNote_Buffer, resourceKind: 'LoadedSoundForNote', with: [ theSoundNoteName, theOctaveNumber]});
            }


            var aMaxRealDurationTime = ( _cOnePointZero *  _cMaxRealDurationMilliseconds) / 1000;


            var aSource = theAudioContext.createBufferSource();
            aSource.buffer = aBuffer;
            aSource.connect( theAudioContext.destination);



            if ( _cCutBufferNotesAtDuration) {

                var aDurationTime =  Math.min( theDurationTime * _cBufferDurationFactor, aMaxRealDurationTime);

                aSource.start( theSoundBeginTime, 0.0, aDurationTime);
            }
            else {
                aSource.start( theSoundBeginTime);
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pPlaySoundNote_Buffer')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theAudioContext',   ['object']],
            [ 'theOctaveNumber',   ['number']],
            [ 'theSoundNoteName',  ['string']],
            [ 'theSoundBeginTime', ['number']],
            [ 'theDurationTime',   ['number']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pPlaySoundNote_Buffer._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype._pPlaySoundNote_Buffer._doc);
        }









        aPrototype._pPlaySoundNote_Oscillator = (function ( theCtxt, theAudioContext, theOctaveNumber, theSoundNoteName,
            theSoundBeginTime, theDurationTime) {

            if( !theAudioContext) {
                return null;
            }

            var aOctave = m_Frequencies.cNoteFrequencies[ theOctaveNumber];
            if (!aOctave) {
                throw new m_Error.Error('ResourceUnavailableError', {module: _displayName, function: aPrototype._pPlaySoundNote_Oscillator, resourceKind: 'OctaveFrequencies', with: [ theOctaveNumber]});
            }

            var aFrequency = aOctave[ theSoundNoteName];
            if( !aFrequency) {
                throw new m_Error.Error('ResourceUnavailableError', {module: _displayName, function: aPrototype._pPlaySoundNote_Oscillator, resourceKind: 'FrequencyInOctave', with: [ theOctaveNumber, theSoundNoteName]});
            }


            var aMaxRealDurationTime = ( _cOnePointZero *  _cMaxRealDurationMilliseconds) / 1000;


            var aDurationTime =  Math.min( theDurationTime * _cOscillatorDurationFactor, aMaxRealDurationTime);


            var anOscillator = theAudioContext.createOscillator();
            anOscillator.frequency.type = _cOscillatorType;
            anOscillator.frequency.value = aFrequency;

            var anEnvelope = theAudioContext.createGainNode();

            anEnvelope.gain.setValueAtTime( 0, theSoundBeginTime );

            var aNumEnvSteps = _cOscillatorWaveForm.length;
            for (var anEnvIndex = 0; anEnvIndex < aNumEnvSteps; anEnvIndex++) {
                var anEnvStepMoment = aDurationTime * _cOscillatorWaveForm[ anEnvIndex][0];
                var anEnvStepGain = _cOscillatorWaveForm[ anEnvIndex][1];

                anEnvelope.gain.linearRampToValueAtTime( anEnvStepGain, theSoundBeginTime + anEnvStepMoment );
            }

            var aStopTime =  theSoundBeginTime + aDurationTime;
            anEnvelope.gain.linearRampToValueAtTime( 0.0, aStopTime);

            anOscillator.connect( anEnvelope);
            anEnvelope.connect( theAudioContext.destination);

            anOscillator.start( theSoundBeginTime);
            anOscillator.stop( aStopTime);


            if(aPrototype._pPlaySoundNote_Oscillator._Trace) { m_Trace.pStep(
            'Register the oscillator and envelope to be dropped after the sound has been actually played by the hardware.');}

            var aDropTime = aStopTime + ( _cSecondsAfterSoundEndsToDropAudioComponents * _cOnePointZero);
            this._v_AudioComponentsToDrop.push( [ aDropTime, [ [ 'oscillator', anOscillator], [ 'envelope', anEnvelope]]]);


            if( this._v_AudioComponentsToDrop.length === 1) {
                if(aPrototype._pPlaySoundNote_Oscillator._Trace) { m_Trace.pStep(
                'If it is the first oscillator and envelope registered to be dropped then ' +       /* TODO */
                'register an interest to wakeup later.');}

                this._pRegisterWakeUpInterestToDropAudioComponents( theCtxt, aDropTime);
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pPlaySoundNote_Oscillator')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theAudioContext',   ['object']],
            [ 'theOctaveNumber',   ['number']],
            [ 'theSoundNoteName',  ['string']],
            [ 'theSoundBeginTime', ['number']],
            [ 'theDurationTime',   ['number']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pPlaySoundNote_Oscillator._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype._pPlaySoundNote_Oscillator._doc);
        }
















        aPrototype._pRegisterWakeUpInterestToDropAudioComponents = (function ( theCtxt, theDropSeconds) {

            if( !theDropSeconds) {
                return null;
            }

            if( !this._v_WakeUpInterestToDropAudioComponents) {

                if(aPrototype._pPlaySoundNotes_Timed._Trace) { m_Trace.pStep(
                    'No interest to WakeUp is already registered to eventually drop AudioContext components. ' +
                    'Register interest to wakeup some time in the future from now.');}

                var anEchoAudio = this;

                var aWakeupHandler = (function() {
                    var anEchoAudioHere = anEchoAudio;
                    return function( theCtxt_arg) {
                        if(_cLogPlayAudio) {
                            m_Log.pLog('Awaken to drop audio components.');
                        }

                        if( anEchoAudioHere._v_WakeUpInterestToDropAudioComponents) {
                            anEchoAudioHere._v_WakeUpInterestToDropAudioComponents._v_Dropped = true;
                            anEchoAudioHere._v_WakeUpInterestToDropAudioComponents = null;
                        }
                        anEchoAudioHere._pDropAudioComponents( theCtxt_arg);
                    }
                })();


                if(_cLogPlayAudio) {
                    m_Log.pLog('REGISTER WakeUp interest to drop audio components at aDropTime=' + theDropTime);
                }

                var aWakeUpClock = m_Clock.fClockFromSeconds( theDropSeconds);

                this._v_WakeUpInterestToDropAudioComponents = m_WakeUp.fRegisterInterestToWakeUp(
                    theCtxt,
                    this._v_Performance,
                    aWakeUpClock,
                    aWakeupHandler,
                    'EchoAudio-drop'
                );
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pRegisterWakeUpInterestToDropAudioComponents')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theDropSeconds',   ['number']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pRegisterWakeUpInterestToDropAudioComponents._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype._pRegisterWakeUpInterestToDropAudioComponents._doc);
        }







        aPrototype._pDropAudioComponents = (function( theCtxt) {

            if( theCtxt) {}

            var aNumAudioComponentsToDrop = this._v_AudioComponentsToDrop.length;
            if ( !aNumAudioComponentsToDrop) {
                return null;
            }

            var aSecondsNow = this._fCurrentTime( theCtxt);

            var aDroppedIndex = -1;

            var aDropIndex = 0;
            while( aDropIndex < aNumAudioComponentsToDrop) {
                var aDropEntry =  this._v_AudioComponentsToDrop[ aDropIndex];
                if( aDropEntry) {
                    var aDropTime = aDropEntry[ 0];
                    if ( aDropTime) {
                        if ( !( aDropTime < aSecondsNow) ) {
                            break;
                        }
                        else {
                            aDroppedIndex = aDropIndex;
                            aDropIndex += 1;
                        }
                    }
                }
            }

            if( aDroppedIndex >= 0) {

                for( var anIndexToDrop = 0; anIndexToDrop <= aDroppedIndex; anIndexToDrop++) {
                    var aComponentsToDrop =  this._v_AudioComponentsToDrop[anIndexToDrop][1];
                    if( aComponentsToDrop) {
                        var aNumComponentsToDrop = aComponentsToDrop.length;
                        for( var aComponentIndex = 0; aComponentIndex < aNumComponentsToDrop; aComponentIndex++) {
                            var aComponentAndKind = aComponentsToDrop[ aComponentIndex];
                            if( aComponentAndKind && ( aComponentAndKind.length > 1)) {
                                var aComponentKind = aComponentAndKind[ 0];
                                var aComponent     = aComponentAndKind[ 1];
                                switch( aComponentKind) {
                                    case 'envelope':
                                        if( aComponent) {

                                        }
                                        break;

                                    case 'oscillator':
                                        break;

                                    default:
                                }
                            }
                        }
                    }
                }

                if( aDroppedIndex === ( aNumAudioComponentsToDrop - 1)) {
                    this._v_AudioComponentsToDrop = [ ];
                }
                else {

                    this._v_AudioComponentsToDrop = this._v_AudioComponentsToDrop.slice( aDroppedIndex + 1);
                }
            }


            if( this._v_AudioComponentsToDrop.length) {
                var aFutureDropEntry =  this._v_AudioComponentsToDrop[ 0];
                var aFutureDropSeconds = aFutureDropEntry[ 0];
                this._pRegisterWakeUpInterestToDropAudioComponents( theCtxt, aFutureDropSeconds);
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pDropAudioComponents')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pDropAudioComponents._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype._pDropAudioComponents._doc);
        }








        aPrototype._fAudioContext = (function( theCtxt) {

            if( theCtxt) {}

            if( this._v_AudioContext) {
                return this._v_AudioContext;
            }

            var anAudioContextFactory = window.AudioContext || window.webkitAudioContext;
            if ( !anAudioContextFactory) {
                return null;
                /*
                throw new m_Error.Error('PlatformServiceUnavailableError', {module: _displayName, function: aPrototype._fAudioContext, platformService: 'AudioContext'});
                */
            }

            this._v_AudioContext = new anAudioContextFactory();
            this._v_AudioContext_StartMillis = new Date().getTime();

            return this._v_AudioContext;

        })._sName( aPrototype._ModuleName, '_fAudioContext')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fAudioContext._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype._fAudioContext._doc);
        }










        aPrototype._fCurrentTime = (function( theCtxt) {

            if( theCtxt) {}

            var aTime;

            if ( !_cUseDate) {

                var anAudioContext = this._fAudioContext( theCtxt);
                if ( anAudioContext) {

                    aTime = anAudioContext.currentTime;
                    if ( aTime) {
                        if( !this._v_AudioContext_AlreadyStarted) {

                            var aTimeFromMillis = ( _cOnePointZero * (new Date().getTime() - this._v_AudioContext_StartMillis)) / 1000;
                            this._v_AudioContext_TimeAdjustAfterFakeMillis = aTimeFromMillis - aTime;

                            this._v_AudioContext_AlreadyStarted = true;
                            if( _cLogTimeAnomalies) {
                                console.log( 'AudioTimer started at ' + this._v_AudioContext_TimeAdjustAfterFakeMillis);
                            }
                        }
                        else {
                            if( this._v_AudioContext_TimeAdjustAfterFakeMillis) {
                                aTime += this._v_AudioContext_TimeAdjustAfterFakeMillis;

                                var aJSTime = ( _cOnePointZero * (new Date().getTime() - this._v_AudioContext_StartMillis)) / 1000;
                                if( _cLogTimeAnomalies && ( Math.abs( aJSTime - aTime) > 0.1)) {
                                    console.log( 'aJSTime - aTime = ' + (aJSTime - aTime));
                                }
                            }
                        }
                        return aTime;
                    }
                }
            }

            aTime = ( _cOnePointZero * (new Date().getTime() - this._v_AudioContext_StartMillis)) / 1000;

            this._v_AudioContext_LastFakeMillis = aTime;
            if( this._v_AudioContext_LastFakeMillis) {} /* CQT */

            return aTime;

        })._sName( aPrototype._ModuleName, '_fCurrentTime')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fCurrentTime._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype._fCurrentTime._doc);
        }









        /* ACV OJO TODO Unused
        aPrototype.pPlaySoundNoteBufferStandAlone = (function ( theCtxt, theSoundNoteName, theAudioContext) {
            if(_cLogPlayAudio) {
                m_Log.pLog( aPrototype.pPlaySoundNoteBufferStandAlone.displayName);
            }
            if( !theSoundNoteName) {
                return null;
            }

            var aBuffer = m_NoteSounds.gLoadedNoteSounds[theSoundNoteName];
            if( !aBuffer) {
                throw 'M: m_EchoAudio  F: pPlaySoundNoteBufferStandAlone No Buffer for note ' + theSoundNoteName;
            }

            var anAudioContext = theAudioContext;
            if( !anAudioContext) {
                anAudioContext = this._fAudioContext( theCtxt);
            }
            if( !anAudioContext) {
                return null;

            }

            var aSource = anAudioContext.createBufferSource();
            aSource.buffer = aBuffer;
            aSource.connect(anAudioContext.destination);
            aSource.start(0);

            return null;

        })._sName( aPrototype._ModuleName, 'pPlaySoundNoteBufferStandAlone')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theSoundNoteName',  ['string']],
            [ 'theAudioContext',   ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pPlaySoundNoteBufferStandAlone._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype.pPlaySoundNoteBufferStandAlone._doc);
        }
        */




        return aPrototype;
    })();
    if(m_Instrument.cDocFuncs) {
        _privateMembers.push(_prot_EchoAudio);
        _doc+=('\n\n' + _prot_EchoAudio._doc);
    }









    var f_Constructor_EchoAudio = (function( theCtxt, thePerformance) {

        this._v_Prot_EchoAudio = _prot_EchoAudio;
        this._v_Prot           = this._v_Prot_EchoAudio;

        this._v_Performance = thePerformance;

        this._v_AudioSerie = null;

        this._v_AudioContext = null;
        this._v_AudioContext_StartMillis = null;
        this._v_AudioContext_AlreadyStarted = false;
        this._v_AudioContext_LastFakeMillis = null;
        this._v_AudioContext_TimeAdjustAfterFakeMillis = null;

        this._v_NotesPending = [];

        this._v_LastTimePosted          = null;
        this._v_LastAudioSoundBeginTime = null;
        this._v_LastAudioSoundEndTime   = null;

        this._v_WakeUpInterestToPlayPendingNotes    = null;
        this._v_WakeUpInterestToDropAudioComponents = null;

        this._v_AudioComponentsToDrop       = null;

        this._pConnectEchoAudio( theCtxt);

    })._sName( _displayName, 'f_Constructor_EchoAudio')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',       ['Type', 'Performance']]
    ]);
    f_Constructor_EchoAudio.prototype = _prot_EchoAudio;
    _publicMembers.push(f_Constructor_EchoAudio);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_EchoAudio._sDesc(
        'Factory to create new instances of EchoAudio.\n\n' +
        'this._v_AudioContext Holds a reference to the browswer Audio machinery.\n\n' +
        'this._v_AudioContext_StartMillis Holds the Date milliseconds when the AudioContext was created,\n\n' +
            'to fix the bug of late lazy initialization of the Audio hardware\n\n' +
            'that causes the AudioContext.currentTime to be === 0 for several millisecons.\n\n' +
        'this._v_AudioContext_AlreadyStarted\n\n' +
        'this._v_AudioContext_LastFakeMillis\n\n' +
        'this._v_AudioContext_TimeAdjustAfterFakeMillis\n\n' +
        'this._v_AudioSeriesForThreadRoots Module variable this._v_AudioSeriesForThreadRoots Holds the generators of notes for each thread of chants with a common root\n\n' +
        'this._v_LastAudioSoundBeginTime Module variable this._v_LastAudioSoundBeginTime Time in milliseconds ' +
            'of the moment when all the audio already enqueued to the audio machinery shall complete playing.\n\n' +
        'this._v_NotesPending Module variable this._v_NotesPending Names of the notes thar have not been enqueued to the audio machinery.\n\n' +
        'this._v_WakeUpInterestToPlayPendingNotes\n\n' +
        'this._v_LastTimePosted');
        _doc+=('\n\n' + f_Constructor_EchoAudio._doc);
    }








    /* ACV OJO TODO Unused
    var pPlaySoundNote_WOcachedBuffer = function (theNoteName) {
        if(_cLogPlayAudio) {
            m_Log.pLog( pPlaySoundNote_WOcachedBuffer.displayName);
        }
        var aFilename = m_NoteSounds.fFileNameForNote( theNoteName);
        if( aFilename) {
            var anAudio = null;
            try {
                anAudio = new Audio( aFilename);
            }
            catch( anException) {
                throw 'M: m_EchoAudio  F: pPlayNoteAudioFromURL Audio is not available in this browser.'
            }
            if(anAudio) {
                anAudio.play();
            }
        }
        return null;
    };
    if(m_Instrument.cDocFuncs) {
        pPlaySoundNote_WOcachedBuffer._sDoc('pPlaySoundNote_WOcachedBuffer', '');
        _doc+=('\n\n' + pPlaySoundNote_WOcachedBuffer._doc);
    }

    */



    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        f_Constructor_EchoAudio:           f_Constructor_EchoAudio
    };



    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_EchoAudio')
    }


    return aModule;
};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_EchoAudio')
}



if( typeof define === 'function') {

    define(['m_ConstValues_Tools', 'm_Functionx', 'm_Error', 'm_Instrument', 'm_Identifiable',
        'm_Log', 'm_Clock', 'm_Trace', 'm_WakeUp',
        'm_Performance', 'm_Frequencies', 'm_NoteSounds', 'm_Ctxt', 'm_Conductor', 'm_Watcher', 'm_SerieNotes'],
        function (m_ConstValues_Tools, m_Functionx, m_Error, m_Instrument, m_Identifiable,
                  m_Log, m_Clock, m_Trace, m_WakeUp,
                  m_Performance, m_Frequencies, m_NoteSounds,m_Ctxt,  m_Conductor, m_Watcher, m_SerieNotes) {

            return aM_EchoAudio(m_ConstValues_Tools, m_Functionx, m_Error, m_Instrument, m_Identifiable,
                m_Log, m_Clock, m_Trace, m_WakeUp,
                m_Performance, m_Frequencies, m_NoteSounds, m_Ctxt, m_Conductor, m_Watcher, m_SerieNotes);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_DeltaBroker.displayName]=aM_DeltaBroker(
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Clock'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_WakeUp'],
            gChoirJS_Modules['m_Performance'],
            gChoirJS_Modules['m_Frequencies'],
            gChoirJS_Modules['m_NoteSounds'],
            gChoirJS_Modules['m_Conductor'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Watcher'],
            gChoirJS_Modules['m_SerieNotes']
        );
    }
    else {
        ChoirJS_Module_EchoAudio= aM_EchoAudio(
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_Log,
            ChoirJS_Module_Clock,
            ChoirJS_Module_Trace,
            ChoirJS_Module_WakeUp,
            ChoirJS_Module_Performance,
            ChoirJS_Module_Frequencies,
            ChoirJS_Module_NoteSounds,
            ChoirJS_Module_Conductor,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Watcher,
            ChoirJS_Module_SerieNotes
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_EchoAudio')
}

