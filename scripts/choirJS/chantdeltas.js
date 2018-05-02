/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ChantDeltas')
}


var aM_ChantDeltas = function (m_ConstValues, m_Functionx, m_Ctxt,  m_Error, m_Instrument, m_Trace, m_Log, m_Defense, m_Clock, m_Identifiable) {

    "use strict";


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ChantDeltas')
    }

    if(m_Log) {}


    var _privateMembers = [];
    var _publicMembers = [];


    var _displayName = 'm_ChantDeltas';

    var _doc = _displayName +' module. Functions for Chant Delta objects, used to propagate changes of the Chants during a Performance.';



    _doc+=('\n\nConfigurable module constants:');

    var _cTr = m_Trace.cTrace && m_ConstValues.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';


    var cTimestampDeltas = m_ConstValues.fConst( _displayName, 'cTimestampDeltas', true);
    _doc+=('\n\n' +  JSON.stringify({cTimestampDeltas: cTimestampDeltas}, null, 4));
    _doc+='Whether to add timestamps to Delta objects.';



    var cDeltaKindsAndCodes = {
        'Performance_Create': 1,
        'ChantRoot_Create':   2,
        'Chant_Create':       3,
        'Chant_ActionsDone_Append' : 4
    };
    _doc+=('\n\n' +  JSON.stringify({cDeltaKindsAndCodes: cDeltaKindsAndCodes}, null, 4));





    var cDeltaKinds = [];
    var cDeltaCodes = [];
    var cDeltaCodesAndKinds = [];

    for (var oneDeltaName in cDeltaKindsAndCodes) {
        if( oneDeltaName  && cDeltaKindsAndCodes.hasOwnProperty(oneDeltaName)) {
            var oneDeltaCode = cDeltaKindsAndCodes[oneDeltaName];
            if( oneDeltaCode) {
                cDeltaKinds.push( oneDeltaName);
                cDeltaCodesAndKinds[oneDeltaCode] = oneDeltaName;
                cDeltaCodes.push(oneDeltaCode);
            }
        }
    }
    _doc+=('\n\n' +  JSON.stringify({cDeltaKinds: cDeltaKinds}, null, 4));
    _doc+=('\n\n' +  JSON.stringify({cDeltaCodes: cDeltaCodes}, null, 4));
    _doc+=('\n\n' +  JSON.stringify({cDeltaCodesAndKinds: cDeltaCodesAndKinds}, null, 4));




    _doc+=('\n\nModule functions:');




    var _fNewVoid_Delta= function() {
        var aDelta = m_Identifiable.fNewIdentifiable();

        aDelta._v_Type =  'Delta';
        aDelta._v_DeltaKind = '';

        if( cTimestampDeltas) {
            aDelta._v_Clock = m_Clock.fNow();
            aDelta._v_Timestamp = m_Clock.fMillisFromClock( aDelta._v_Clock);
        }
        return aDelta;
    };





    var fNewDelta = (function( theCtxt, theDeltaKind) {

        var aDelta= _fNewVoid_Delta();
        aDelta._v_DeltaKind = theDeltaKind;

        switch( theDeltaKind) {
            case 'Performance_Create':
                _pDelta_Performance_Create_Properties_Into( aDelta);
                break;

            case 'ChantRoot_Create':
                _pDelta_ChantRoot_Create_Properties_Into( aDelta);
                break;

            case 'Chant_Create':
                _pDelta_Chant_Create_Properties_Into( aDelta);
                break;

            case 'Chant_ActionsDone_Append':
                _pDelta_Chant_ActionsDone_Append_Properties_Into( aDelta);
                break;

            default:
        }

        return aDelta;

    })._sName( _displayName, 'fNewDelta')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theDeltaKind', ['string']]
    ]);
    _publicMembers.push(fNewDelta);
    if(m_Instrument.cDocFuncs) {
        fNewDelta._sDesc(
            'Create and initialize with void values an instance of Delta describing the change of the supplied kind.');
        _doc+=('\n\n' + fNewDelta._doc);
    }







    var _pDelta_Performance_Create_Properties_Into = function(theObject) {

        if( !(theObject === null || (typeof theObject === 'undefined'))) {
            theObject._v_DeltaKind =        'Performance_Create';
            theObject._v_Performance_UID  = null;
            theObject._v_Performance_Name = '';
            theObject._v_Score_UID =        null;
        }
    };
    if(m_Instrument.cDocFuncs) {
        _pDelta_Performance_Create_Properties_Into._sDoc('_pDelta_Performance_Create_Properties_Into', 'Structure of fields for object representing a Delta to represent change Performance_Create.');
        _doc+=('\n\n' +  _pDelta_Performance_Create_Properties_Into._doc);
        _privateMembers.push(_pDelta_Performance_Create_Properties_Into);
    }








    var _pDelta_ChantRoot_Create_Properties_Into = function(theObject) {

        if( !(theObject === null || (typeof theObject === 'undefined'))) {
            theObject._v_DeltaKind =        'ChantRoot_Create';
            theObject._v_Performance_UID =  null;
            theObject._v_Chant_UID =        null;
            theObject._v_Chant_Name =       '';
        }
    };
    if(m_Instrument.cDocFuncs) {
        _pDelta_ChantRoot_Create_Properties_Into._sDoc('_pDelta_ChantRoot_Create_Properties_Into', 'Structure of fields for object representing a Delta to represent change ChantRoot_Create.');
        _doc+=('\n\n' +  _pDelta_ChantRoot_Create_Properties_Into._doc);
        _privateMembers.push(_pDelta_ChantRoot_Create_Properties_Into);
    }





    var _pDelta_Chant_Create_Properties_Into = function(theObject) {

        if( !(theObject === null || (typeof theObject === 'undefined'))) {
            theObject._v_DeltaKind =        'Chant_Create';
            theObject._v_Chant_UID =        null;
            theObject._v_Chant_Name =       '';
            theObject._v_ParentChant_UID =  null;
            theObject._v_Chantable_UID =    null;
        }
    };
    if(m_Instrument.cDocFuncs) {
        _pDelta_Chant_Create_Properties_Into._sDoc('_pDelta_Chant_Create_Properties_Into', 'Structure of fields for object representing a Delta to represent change Chant_Create.');
        _doc+=('\n\n' +  _pDelta_Chant_Create_Properties_Into._doc);
        _privateMembers.push(_pDelta_Chant_Create_Properties_Into);
    }





    var _pDelta_Chant_ActionsDone_Append_Properties_Into = function(theObject) {

        if( !(theObject === null || (typeof theObject === 'undefined'))) {
            theObject._v_DeltaKind =        'Chant_ActionsDone_Append';
            theObject._v_Chant_UID =        '';
            theObject._v_ActionDone =       '';
        }
    };
    if(m_Instrument.cDocFuncs) {
        _pDelta_Chant_ActionsDone_Append_Properties_Into._sDoc('_pDelta_Chant_ActionsDone_Append_Properties_Into', 'Structure of fields for object representing a Delta to represent change Chant_Create.');
        _doc+=('\n\n' +  _pDelta_Chant_ActionsDone_Append_Properties_Into._doc);
        _privateMembers.push(_pDelta_Chant_ActionsDone_Append_Properties_Into);
    }







    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        cTimestampDeltas:    cTimestampDeltas,

        cDeltaKinds:         cDeltaKinds,
        cDeltaCodes:         cDeltaCodes,
        cDeltaKindsAndCodes: cDeltaKindsAndCodes,
        cDeltaCodesAndKinds: cDeltaCodesAndKinds,

        fNewDelta:        fNewDelta

    };


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_ChantDeltas')
    }


    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ChantDeltas')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_Functionx', 'm_Ctxt', 'm_Error', 'm_Instrument', 'm_Trace', 'm_Log', 'm_Defense', 'm_Clock',
        'm_Identifiable'],
        function (m_ConstValues, m_Functionx, m_Ctxt, m_Error, m_Instrument, m_Trace, m_Log, m_Defense, m_Clock,
                  m_Identifiable) {

            return aM_ChantDeltas(m_ConstValues, m_Functionx, m_Ctxt, m_Error, m_Instrument, m_Trace, m_Log, m_Defense, m_Clock,
                m_Identifiable);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ChantDeltas.displayName]=aM_ChantDeltas(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Clock'],
            gChoirJS_Modules['m_Identifiable']
        );
    }
    else {
        ChoirJS_Module_ChantDeltas= aM_ChantDeltas(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Clock,
            ChoirJS_Module_Identifiable
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ChantDeltas')
}

