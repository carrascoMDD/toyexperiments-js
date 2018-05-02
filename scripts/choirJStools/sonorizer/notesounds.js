/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_NoteSounds')
}



var aM_NoteSounds = function (m_Functionx, m_Error, m_Instrument, m_Trace) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_NoteSounds')
    }


    if( m_Functionx) {}
    if( m_Error) {}
    if( m_Instrument) {}
    if( m_Trace) {}


    var _displayName = 'm_NoteSounds';

    var _doc = _displayName +' module. Functions to retrieve sounds for sound note names, ' +
        'wrapping the global initialized asynchronously from requests sent from a window.onload event handler in loadsounds.js .';


    var a_fFileNameForNote = null;
    var a_fLoadedSoundForNote = null;
    var a_gLoadedNoteSounds = null;
    if ( !( typeof ChoirJS_Script_LoadSounds === 'undefined')) {
        a_fFileNameForNote    = ChoirJS_Script_LoadSounds.fFileNameForNote;
        a_fLoadedSoundForNote = ChoirJS_Script_LoadSounds.fLoadedSoundForNote;
        a_gLoadedNoteSounds   = ChoirJS_Script_LoadSounds.gLoadedNoteSounds;
    }


    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        fFileNameForNote:     a_fFileNameForNote,
        fLoadedSoundForNote:  a_fLoadedSoundForNote,
        gLoadedNoteSounds:    a_gLoadedNoteSounds
    };


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_NoteSounds')
    }

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_NoteSounds')
}


if( typeof define === 'function') {

    define(['m_Functionx', 'm_Error', 'm_Instrument', 'm_Trace'], function (m_Functionx, m_Error, m_Instrument, m_Trace) {

            return aM_NoteSounds(m_Functionx, m_Error, m_Instrument, m_Trace);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_NoteSounds.displayName]=aM_NoteSounds(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace']
        );
    }
    else {
        ChoirJS_Module_NoteSounds= aM_NoteSounds(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_NoteSounds')
}

