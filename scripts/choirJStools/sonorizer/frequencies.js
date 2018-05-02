/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Frequencies')
}



var aM_Frequencies = function (m_Functionx, m_Error, m_Instrument, m_Trace) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Frequencies')
    }


    if( m_Functionx) {}
    if( m_Error) {}
    if( m_Instrument) {}
    if( m_Trace) {}


    var _displayName = 'm_Frequencies';

    var _doc = _displayName +' module. Frequencies of notes to configure Oscillators.';



    _doc+=('\n\nConfigurable module constants:');

    var _cTr = false;
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';


    var cNoteFrequencies = {
        9: {
            'B':   15804.264,
            'A#':  14917.24,
            'A':   14080,
            'G#':  13289.752,
            'G':   12543.856,
            'F#':  11839.82,
            'F':   11175.304,
            'E':   10548.084,
            'D#':  9956.064,
            'D':   9397.272,
            'C#':  8869.844,
            'C':   8372.018
        },
        8: {
            'B':   7902.132,
            'A#':  7902.132,
            'A':   7040,
            'G#':  6644.876,
            'G':   6271.928,
            'F#':  5919.91,
            'F':   5587.652,
            'E':   5274.042,
            'D#':  4978.032,
            'D':   4698.636,
            'C#':  4434.922,
            'C':   4186.009
        },
        7: {
            'B':   3951.07,
            'A#':  3729.31,
            'A':   3520.00,
            'G#':  3322.44,
            'G':   3135.96,
            'F#':  2959.96,
            'F':   2793.83,
            'E':   2637.02,
            'D#':  2489.02,
            'D':   2349.32,
            'C#':  2217.46,
            'C':   2093.00
        },
        6: {
            'B':   1975.53,
            'A#':  1864.66,
            'A':   1760.00,
            'G#':  1661.22,
            'G':   1567.98,
            'F#':  1479.98,
            'F':   1396.91,
            'E':   1318.51,
            'D#':  1244.51,
            'D':   1174.66,
            'C#':  1108.73,
            'C':   1046.50
        },
        5: {
            'B':   987.767,
            'A#':  932.328,
            'A':   880.000,
            'G#':  830.609,
            'G':   783.991,
            'F#':  739.989,
            'F':   698.456,
            'E':   659.255,
            'D#':  622.254,
            'D':   587.330,
            'C#':  554.365,
            'C':   523.251
        },
        4: {
            'B':   493.883,
            'A#':  466.164,
            'A':   440.000,
            'G#':  415.305,
            'G':   391.995,
            'F#':  369.994,
            'F':   349.228,
            'E':   329.628,
            'D#':  311.127,
            'D':   293.665,
            'C#':  277.183,
            'C':   261.626
        },
        3: {
            'B':   246.942,
            'A#':  233.082,
            'A':   220.000,
            'G#':  207.652,
            'G':   195.998,
            'F#':  184.997,
            'F':   174.614,
            'E':   164.814,
            'D#':  155.563,
            'D':   146.832,
            'C#':  138.591,
            'C':   130.813
        },
        2: {
            'B':   123.471,
            'A#':  116.541,
            'A':   110.000,
            'G#':  103.826,
            'G':   97.9989,
            'F#':  92.4986,
            'F':   87.3071,
            'E':   82.4069,
            'D#':  77.7817,
            'D':   73.4162,
            'C#':  69.2957,
            'C':   65.4064
        },
        1: {
            'B':   61.7354,
            'A#':  58.2705,
            'A':   55.0000,
            'G#':  51.9131,
            'G':   48.9994,
            'F#':  46.2493,
            'F':   43.6535,
            'E':   41.2034,
            'D#':  38.8909,
            'D':   36.7081,
            'C#':  34.6478,
            'C':   32.7032
        },
        0: {
            'B':   30.8677,
            'A#':  29.1352,
            'A':   27.5000
        }
    };
    _doc+=('\n\n' +  JSON.stringify({cNoteFrequencies: cNoteFrequencies}, null, 4));





    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,


        cNoteFrequencies: cNoteFrequencies
    };

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Frequencies')
    }


    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Frequencies')
}





if( typeof define === 'function') {

    define(['m_Functionx', 'm_Error', 'm_Instrument', 'm_Trace'], function (m_Functionx, m_Error, m_Instrument, m_Trace) {

            return aM_Frequencies(m_Functionx, m_Error, m_Instrument, m_Trace);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Frequencies.displayName]=aM_Frequencies(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace']
        );
    }
    else {
        ChoirJS_Module_Frequencies= aM_Frequencies(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Frequencies')
}

