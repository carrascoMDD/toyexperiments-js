/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN s_LoadSounds')
}


var aS_LoadSounds = function () {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN s_LoadSounds')
    }


    var _displayName = 's_LoadSounds';

    var _doc = _displayName +' module. Functions to load sounds to reflect the activity of chanting a score.';



    _doc+=('\n\nConfigurable module constants:');




    var _cLoadSoundsURLHost = 'http://127.0.0.1:8080';
    _doc+=('\n\n' +  JSON.stringify({_cLoadSoundsURLHost: _cLoadSoundsURLHost}, null, 4));

    var cAllNoteFilesBasePath = '/lib/notesamples';
    _doc+=('\n\n' +  JSON.stringify({cAllNoteFilesBasePath: cAllNoteFilesBasePath}, null, 4));


    var cNoteFilesInstrumentDirName = 'pianosamples';
    _doc+=('\n\n' +  JSON.stringify({cNoteFilesInstrumentDirName: cNoteFilesInstrumentDirName}, null, 4));

    var cNoteFilesBasePath = cAllNoteFilesBasePath + '/' + cNoteFilesInstrumentDirName + '/';
    _doc+=('\n\n' +  JSON.stringify({cNoteFilesBasePath: cNoteFilesBasePath}, null, 4));




    var _cDefaultOctave = 5;
    _doc+=('\n\n' +  JSON.stringify({_cDefaultOctave: _cDefaultOctave}, null, 4));

    var _cMinOctave = 2;
    _doc+=('\n\n' +  JSON.stringify({_cMinOctave: _cMinOctave}, null, 4));

    var _cMaxOctave = 7;
    _doc+=('\n\n' +  JSON.stringify({_cMaxOctave: _cMaxOctave}, null, 4));



    var cFromSharpsToBemols = {
        'A':   'A',
        'A#':  'Bb',
        'B':   'B',
        'C':   'C',
        'C#':  'Db',
        'D':   'D',
        'D#':  'Eb',
        'E':   'E',
        'F':   'F',
        'F#':  'Gb',
        'G':   'G',
        'G#':  'Ab'
    };
    _doc+=('\n\n' +  JSON.stringify({cFromSharpsToBemols: cFromSharpsToBemols}, null, 4));







    _doc+=('\n\nConfigurable module variables:');


    var gLoadedNoteSounds = {};
    _doc+=('\n\nModule variable gLoadedNoteSounds');

    var gLoadedOctaves = {};
    _doc+=('\n\nModule variable gLoadedOctaves');






    _doc+=('\n\nModule functions:');
    if( _doc)

    var fFileNameForNote = function (theNoteName, theOctave) {
        var anOctave = theOctave;
        if ( anOctave === null) {
            anOctave = _cDefaultOctave;
        }
        else {
            if( typeof anOctave === 'string') {
                anOctave = -1;
                try {
                    anOctave = parseInt( anOctave);
                }
                catch(anException) {}
            }
            if (anOctave < _cMinOctave) {
                anOctave = _cMinOctave;
            }
            else {
                if (anOctave > _cMaxOctave) {
                    anOctave = _cMaxOctave;
                }
            }
        }

        var aConvertedNote = cFromSharpsToBemols[theNoteName];
        if (!aConvertedNote) {
            return null;
        }

        var aFilename = cNoteFilesBasePath + escape(aConvertedNote + anOctave + '.mp3');
        if(aFilename) {}
        return aFilename;
    };





    var fLoadedSoundForNote = function(theNoteName, theOctave) {
        var anOctave = theOctave;
        if ( anOctave === null) {
            anOctave = _cDefaultOctave;
        }
        else {
            if( typeof anOctave === 'string') {
                anOctave = -1;
                try {
                    anOctave = parseInt( anOctave);
                }
                catch(anException) {}
            }
            if (anOctave < _cMinOctave) {
                anOctave = _cMinOctave;
            }
            else {
                if (anOctave > _cMaxOctave) {
                    anOctave = _cMaxOctave;
                }
            }
        }

        var someOctaveSounds = gLoadedOctaves[ anOctave];
        if (!someOctaveSounds) {
            return null;
        }
        return someOctaveSounds[theNoteName];
    };






    var _pLoadOctavesSounds = function( theAudioContext) {

        if( !theAudioContext) {
            throw "No theAudioContext";
        }

        for( var anOctaveNumber = _cMinOctave; anOctaveNumber <= _cMaxOctave; anOctaveNumber++) {
            _pLoadNoteSounds( theAudioContext, anOctaveNumber);
        }
    };



    var _pLoadNoteSounds = function( theAudioContext, theOctaveNumber) {

        if( !theAudioContext) {
            throw "No theAudioContext";
        }

        var anOctaveNumber = theOctaveNumber;
        if ( (typeof theOctaveNumber === 'undefined') || (theOctaveNumber === null)) {
            anOctaveNumber = _cDefaultOctave;
        }
        if( anOctaveNumber < _cMinOctave) {
            anOctaveNumber = _cMinOctave;
        }
        else {
            if( anOctaveNumber > _cMaxOctave) {
                anOctaveNumber = _cMaxOctave;
            }
        }
        if( !gLoadedOctaves[ anOctaveNumber]) {
            gLoadedOctaves[ anOctaveNumber] = {};
        }

        for( var aNoteName in cFromSharpsToBemols) {

            if ( cFromSharpsToBemols.hasOwnProperty( aNoteName)) {

                var aFileName = fFileNameForNote( aNoteName, anOctaveNumber);
                if (aFileName) {

                    (function() {
                        var aRequest = new XMLHttpRequest();
                        aRequest.open('GET', _cLoadSoundsURLHost + aFileName, true);
                        aRequest.responseType = 'arraybuffer';

                        var innerNoteName = aNoteName;
                        var innerFileName = aFileName;
                        // Decode asynchronously
                        aRequest.onload = function() {
                            theAudioContext.decodeAudioData( aRequest.response,
                                function( theBuffer) {
                                    if(theBuffer) {
                                        if( anOctaveNumber === _cDefaultOctave) {
                                            gLoadedNoteSounds[ innerNoteName] = theBuffer;
                                        }
                                        gLoadedOctaves[ anOctaveNumber][ innerNoteName] = theBuffer;
                                    }
                                },
                                function() {
                                    if( anOctaveNumber === _cDefaultOctave) {
                                        gLoadedNoteSounds[ innerNoteName] = innerFileName;
                                    }
                                    gLoadedOctaves[ anOctaveNumber][ innerNoteName] = innerFileName;
                                }
                            );
                        };
                        aRequest.send();
                    })();
                }
            }
        }
    };



    if( ( typeof cChoirJS_EchoAudio_PlaySource === 'undefined') || ( cChoirJS_EchoAudio_PlaySource === 'Oscillator')) {

        window.addEventListener('load',
            function init() {
                var anAudioContextFactory = null;
                var anAudioContext = null;
                try {
                    // Fix up for prefixing
                    anAudioContextFactory = window.AudioContext || window.webkitAudioContext;
                    anAudioContext = new anAudioContextFactory();
                }
                catch( anException) {
                    alert('Web Audio API is not supported in this browser');
                }
                if( anAudioContext) {
                    _pLoadOctavesSounds(anAudioContext);
                }
            },
            false
        );
    }



    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END s_LoadSounds')
    }


    var aModule = {
        _v_Type: 'Module',

        displayName:        _displayName,
        _doc:                _doc,

        fFileNameForNote:    fFileNameForNote,
        fLoadedSoundForNote: fLoadedSoundForNote,
        gLoadedNoteSounds:   gLoadedNoteSounds
    };
    if(aModule) {}

    return aModule;

};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER s_LoadSounds')
}



ChoirJS_Script_LoadSounds = aS_LoadSounds();



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED s_LoadSounds: ChoirJS_Script_LoadSounds')
}

