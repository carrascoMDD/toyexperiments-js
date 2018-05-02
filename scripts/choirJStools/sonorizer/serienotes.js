/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_SerieNotes')
}



var aM_SerieNotes = function (m_ConstValues_Tools,  m_Functionx, m_Error, m_Instrument, m_Log, m_Trace, m_Ctxt) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_SerieNotes')
    }

    if( m_Log) {}
    if( m_Ctxt) {}


    var _displayName = 'm_SerieNotes';

    var _doc = _displayName +' module. Prototype and Factory to produce series of note names, possibly prefixed by a scale number digit.';

    var _privateMembers = [];
    var _publicMembers = [];



    _doc+=('\n\nConfigurable module constants copied from m_ConstValues_Tools:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';




    var _cSerieNotesFactoryName = m_ConstValues_Tools.fConst( _displayName, '_cSerieNotesFactoryName', 'OctavesScale'); /* 'SimpleScale'; */
    _doc+='Module constant _cSerieNotesFactoryName The name of the Factory to use to produce series of notes names to play.';

    var _cLowestOctave =  m_ConstValues_Tools.fConst( _displayName, '_cLowestOctave', 3);
    _doc+=('\n\n' +  JSON.stringify({_cLowestOctave: _cLowestOctave}, null, 4));
    _doc+='Module constant _cLowestOctave the lowest octave to use to produce audio notes.';

    var _cHighestOctave =  m_ConstValues_Tools.fConst( _displayName, '_cHighestOctave', 7);
    _doc+=('\n\n' +  JSON.stringify({_cHighestOctave: _cHighestOctave}, null, 4));
    _doc+='Module constant _cHighestOctave the highest octave to use to produce audio notes.';







    _doc+=('\n\nPrototype and Factory for SerieNotes:');




    var _prot_SerieNotes_SimpleScale = (function() {


        var aPrototype = {};
        aPrototype._ParentModuleName = _displayName;
        aPrototype._displayName = '_prot_SerieNotes';
        aPrototype._ModuleName = aPrototype._ParentModuleName + aPrototype._displayName;

        aPrototype._v_Type = 'SerieNotes';



        aPrototype._v_NoteNames =  [ 'C', 'D', 'E', 'F', 'G', 'A', 'B'];



        aPrototype.fNextSoundNotesToPlay = (function() {

            if( this._v_LastNoteIndex < 0) {
                this._v_LastNoteIndex = -1;
            }
            this._v_LastNoteIndex += 1;
            if( this._v_LastNoteIndex >= this._v_NoteNames.length) {
                this._v_LastNoteIndex = 0;
            }
            var aNote =  this._v_NoteNames[ this._v_LastNoteIndex];
            return [aNote];

        })._sName( aPrototype._ModuleName, 'fNextSoundNotesToPlay')._sTrace(_cTr);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fNextSoundNotesToPlay._sDesc('');
        }





        return aPrototype;
    })();
    if(m_Instrument.cDocFuncs) {
        _prot_SerieNotes_SimpleScale.displayName='_prot_SerieNotes_SimpleScale';
        _privateMembers.push(_prot_SerieNotes_SimpleScale);
        _prot_SerieNotes_SimpleScale._doc='Prototype _prot_SerieNotes_SimpleScale';
        _prot_SerieNotes_SimpleScale._doc+=('\n\n' + _prot_SerieNotes_SimpleScale._doc);
        _prot_SerieNotes_SimpleScale._doc+=('\n\n' + _prot_SerieNotes_SimpleScale.fNextSoundNotesToPlay._doc);
        _doc+=('\n\n' + _prot_SerieNotes_SimpleScale._doc);
    }







    var _f_Constructor_SerieNotes_SimpleScale = (function( theCtxt) {

        if( theCtxt) {}

        this._v_LastNoteIndex = -1;

    })._sName( _displayName, '_f_Constructor_SerieNotes_SimpleScale')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt']
    ]);
    _f_Constructor_SerieNotes_SimpleScale.prototype = _prot_SerieNotes_SimpleScale;
    _privateMembers.push(_f_Constructor_SerieNotes_SimpleScale);
    if(m_Instrument.cDocFuncs) {
        _f_Constructor_SerieNotes_SimpleScale._sDesc('Factory to create new instances of SerieNotes_SimpleScale.');
        _doc+=('\n\n' + _f_Constructor_SerieNotes_SimpleScale._doc);
    }











    var _prot_SerieNotes_OctavesScale = (function() {


        var aPrototype = {};
        aPrototype._ParentModuleName = _displayName;
        aPrototype._displayName = '_prot_SerieNotes';
        aPrototype._ModuleName = aPrototype._ParentModuleName + aPrototype._displayName;

        aPrototype._v_Type = 'SerieNotes';



        aPrototype._v_NoteNames = [ 'C', 'D', 'E', 'F', 'G','A', 'B'];


        aPrototype.fNextSoundNotesToPlay = (function() {

            if( this._v_LastOctaveIndex < 0) {
                this._v_LastOctaveIndex = this._v_LowestOctave;
            }
            if( this._v_LastNoteIndex < 0) {
                this._v_LastNoteIndex = 0;
            }
            else {
                this._v_LastNoteIndex += 1;
                if( this._v_LastNoteIndex >= this._v_NoteNames.length) {
                    this._v_LastNoteIndex = 0;
                    this._v_LastOctaveIndex += 1;
                    if( this._v_LastOctaveIndex > this._v_HighestOctave) {
                        this._v_LastOctaveIndex = this._v_LowestOctave;
                    }
                }
            }
            var aNote =  this._v_LastOctaveIndex.toString() + this._v_NoteNames[ this._v_LastNoteIndex];

            return [aNote];

        })._sName( aPrototype._ModuleName, 'fNextSoundNotesToPlay')._sTrace(_cTr);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fNextSoundNotesToPlay._sDesc('');
        }





        return aPrototype;
    })();
    if(m_Instrument.cDocFuncs) {
        _prot_SerieNotes_SimpleScale.displayName='_prot_SerieNotes_OctavesScale';
        _privateMembers.push(_prot_SerieNotes_OctavesScale);
        _prot_SerieNotes_OctavesScale._doc='Prototype _prot_SerieNotes_OctavesScale';
        _prot_SerieNotes_OctavesScale._doc+=('\n\n' + _prot_SerieNotes_OctavesScale._doc);
        _prot_SerieNotes_OctavesScale._doc+=('\n\n' + _prot_SerieNotes_OctavesScale.fNextSoundNotesToPlay._doc);
        _doc+=('\n\n' + _prot_SerieNotes_OctavesScale._doc);
    }







    var _f_Constructor_SerieNotes_OctavesScale = (function( theCtxt) {

        if( theCtxt) {}

        this._v_LowestOctave  = _cLowestOctave;
        this._v_HighestOctave = _cHighestOctave;

        this._v_LastOctaveIndex = -1;
        this._v_LastNoteIndex = -1;


    })._sName( _displayName, '_f_Constructor_SerieNotes_OctavesScale')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt']
    ]);
    _f_Constructor_SerieNotes_OctavesScale.prototype = _prot_SerieNotes_OctavesScale;
    _privateMembers.push(_f_Constructor_SerieNotes_OctavesScale);
    if(m_Instrument.cDocFuncs) {
        _f_Constructor_SerieNotes_OctavesScale._sDesc('Factory to create new instances of SerieNotes_OctavesScale.');
        _doc+=('\n\n' + _f_Constructor_SerieNotes_OctavesScale._doc);
    }









    var f_Constructor_SerieNotes = (function( theCtxt) {

        if( theCtxt) {}

        if( _cSerieNotesFactoryName == 'SimpleScale') {
            return new _f_Constructor_SerieNotes_SimpleScale( theCtxt);
        }

        if( _cSerieNotesFactoryName == 'OctavesScale') {
            return new _f_Constructor_SerieNotes_OctavesScale( theCtxt);
        }

        return null;
    })._sName( _displayName, '_f_Constructor_SerieNotes_OctavesScale')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt']
    ]);
    _publicMembers.push(f_Constructor_SerieNotes);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_SerieNotes._sDesc('Factory to create new instances of SerieNotes of the configured kind.');
        _doc+=('\n\n' + f_Constructor_SerieNotes._doc);
    }









    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        f_Constructor_SerieNotes:           f_Constructor_SerieNotes

    };



    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_SerieNotes')
    }


    return aModule;
};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_SerieNotes')
}



if( typeof define === 'function') {

    define(['m_ConstValues_Tools', 'm_Functionx', 'm_Error', 'm_Instrument', 'm_Log', 'm_Trace', 'm_Ctxt'],
        function (m_ConstValues_Tools, m_Functionx, m_Error, m_Instrument, m_Log, m_Trace, m_Ctxt) {

            return aM_SerieNotes(m_ConstValues_Tools, m_Functionx, m_Error, m_Instrument, m_Log, m_Trace, m_Ctxt);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_DeltaBroker.displayName]=aM_DeltaBroker(
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Ctxt']
        );
    }
    else {
        ChoirJS_Module_SerieNotes= aM_SerieNotes(
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Log,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Ctxt
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_SerieNotes')
}


