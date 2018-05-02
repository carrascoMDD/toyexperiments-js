/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_MarshalDeltas')
}


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_MarshalDeltas')
}


var aM_MarshalDeltas = function (m_Functionx, m_Error, m_Instrument, m_Trace, m_Log, m_DataStream, m_ChantDeltas) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_MarshalDeltas')
    }

    if(m_Log) {}


    var _privateMembers = [];
    var _publicMembers = [];


    var _displayName = 'm_MarshalDeltas';

    var _doc = _displayName +' module. Functions to marshal and un marshal Delta objects with ArrayBuffers, used to propagate changes of the Chants during a Performance.';




    _doc+=('\n\nConstants borrowed from module m_ChantDeltas:');

    var cm_ChantDeltas_DeltaKinds =         m_ChantDeltas.cDeltaKinds;
    _doc+=('\n\n' +  JSON.stringify({cm_ChantDeltas_DeltaKinds: cm_ChantDeltas_DeltaKinds}, null, 4));

    var cm_ChantDeltas_DeltaCodes =         m_ChantDeltas.cDeltaCodes;
    _doc+=('\n\n' +  JSON.stringify({cm_ChantDeltas_DeltaCodes: cm_ChantDeltas_DeltaCodes}, null, 4));

    var cm_ChantDeltas_DeltaKindsAndCodes = m_ChantDeltas.cDeltaKindsAndCodes;
    _doc+=('\n\n' +  JSON.stringify({cm_ChantDeltas_DeltaKindsAndCodes: cm_ChantDeltas_DeltaKindsAndCodes}, null, 4));

    var cm_ChantDeltas_DeltaCodesAndKinds = m_ChantDeltas.cDeltaCodesAndKinds;
    _doc+=('\n\n' +  JSON.stringify({cm_ChantDeltas_DeltaCodesAndKinds: cm_ChantDeltas_DeltaCodesAndKinds}, null, 4));



    _doc+=('\n\nConfigurable module constants:');

    var _cTr = m_Trace.cTrace && false;
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';



    var cStruct_Sentinel = [
        '_v_DeltaKindCode',   'int8'
    ];
    _doc+=('\n\n' +  JSON.stringify({cStruct_Sentinel: cStruct_Sentinel}, null, 4));



    var cStruct_Common = [
        '_v_UID',         'int32'
    ];
    if( m_ChantDeltas.cTimestampDeltas) {
        cStruct_Common = cStruct_Common.concat( ['_v_Timestamp',   'float64']);
        /* ACV OJO TODO Add _v_Clock_v_Time cStruct_Common = cStruct_Common.concat( ['_v_Timestamp',   'float64']) */
    }
    _doc+=('\n\n' +  JSON.stringify({cStruct_Common: cStruct_Common}, null, 4));



    var cStructs_ForDeltaKinds = {
        'Performance_Create': cStruct_Common.concat([
            '_v_Performance_UID',  'int32',
            '_v_Score_UID',        'int32',
            '_v_Performance_Name', 'cstring'
        ]),
        'ChantRoot_Create':   cStruct_Common.concat([
            '_v_Performance_UID',  'int32',
            '_v_Chant_UID',        'int32',
            '_v_Chant_Name',       'cstring'
        ]),
        'Chant_Create':       cStruct_Common.concat([
            '_v_ParentChant_UID',  'int32',
            '_v_Chant_UID',        'int32',
            '_v_Chantable_UID',    'int32',
            '_v_Chant_Name',       'cstring'
        ]),
        'Chant_ActionsDone_Append' : cStruct_Common.concat([
            '_v_Chant_UID',        'int32',
            '_v_ActionDone',       'cstring'
        ])
    };
    _doc+=('\n\n' +  JSON.stringify({cStructs_ForDeltaKinds: cStructs_ForDeltaKinds}, null, 4));







    var cStructs_ForDeltaCodes = {};

    for (var otherDeltaName in cm_ChantDeltas_DeltaKindsAndCodes) {
        if( otherDeltaName  && cm_ChantDeltas_DeltaKindsAndCodes.hasOwnProperty(otherDeltaName)) {
            var otherDeltaCode = cm_ChantDeltas_DeltaKindsAndCodes[otherDeltaName];
            if( otherDeltaCode) {
                var otherStruct = cStructs_ForDeltaKinds[ otherDeltaName];
                if( otherStruct) {
                    cStructs_ForDeltaCodes[otherDeltaCode] = otherStruct;
                }
            }
        }
    }
    _doc+=('\n\n' +  JSON.stringify({cStructs_ForDeltaCodes: cStructs_ForDeltaCodes}, null, 4));







    _doc+=('\n\nModule functions:');




    var fMarshalDeltas = function( theDeltas) {

        var aTC =fMarshalDeltas._Trace && m_Trace.fBegin( _displayName, fMarshalDeltas);
        try {

            if ( ! ( theDeltas && theDeltas.length)) {
                return null;
            }

            var aStream = new m_DataStream.DataStream();
            var aNumDeltas = theDeltas.length;
            for ( var anIndex = 0; anIndex < aNumDeltas; anIndex++) {
                var aDelta = theDeltas[ anIndex];
                if ( aDelta) {

                    var aDeltaKind = aDelta._v_DeltaKind;
                    if ( !(cm_ChantDeltas_DeltaKinds.indexOf( aDeltaKind) >= 0)) {
                        throw new m_Error.Error('PropertyEnumValueError', {module: _displayName, function: fMarshalDeltas, field: '_v_DeltaKind', expected: cDeltaKinds, with: [aDelta]});
                    }

                    var aStruct = cStructs_ForDeltaKinds[ aDeltaKind];
                    if( !aStruct) {
                        throw new m_Error.Error('LookupByConstantError', {module: _displayName, function: fMarshalDeltas, lookup: aDeltaKind, map: cStructs_ForDeltaKinds, with: [aDelta]});
                    }

                    aDelta._v_DeltaKindCode = cm_ChantDeltas_DeltaKindsAndCodes[ aDeltaKind];

                    aStream.writeStruct( cStruct_Sentinel, aDelta);

                    aStream.writeStruct( aStruct, aDelta);
                }
            }


            return aStream.buffer;
        }
        finally {
            if(aTC) { m_Trace.pEnd( aTC);}
        }
    };
    if(m_Instrument.cDocFuncs) {
        fMarshalDeltas._pTrace(_cTr)._sDoc('fMarshalDeltas', 'Pack Deltas as their representation in a Transfereable ArrayBuffer.');
        _publicMembers.push(fMarshalDeltas);
        _doc+=('\n\n' + fMarshalDeltas._doc);
    }





    var fUnmarshalDeltas = function( theBuffer) {

        var aTC =fMarshalDeltas._Trace && m_Trace.fBegin( _displayName, fUnmarshalDeltas);
        try {

            if ( ! ( theBuffer && theBuffer.byteLength)) {
                return null;
            }

            var aStream = new m_DataStream.DataStream( theBuffer);
            var someDeltas = [];

            while( !aStream.isEof()) {

                var aStructSentinel = null ;

                try {
                    aStructSentinel = aStream.readStruct( cStruct_Sentinel);
                }
                catch ( anException) {
                    throw new m_Error.Error('UnmarshalExceptionError', {module: _displayName, function: fUnmarshalDeltas});
                }
                if (!aStructSentinel) {
                    break;
                }
                var aDeltaKindCode = aStructSentinel._v_DeltaKindCode;
                if ( (!aDeltaKindCode) ||  !(cm_ChantDeltas_DeltaCodes.indexOf( aDeltaKindCode) >= 0)) {
                    throw new m_Error.Error('UnmarshalSentinelError', {module: _displayName, function: fUnmarshalDeltas, with: [aStructSentinel]});
                }

                var aStruct = cStructs_ForDeltaCodes[ aDeltaKindCode];
                if( !aStruct) {
                    throw new m_Error.Error('UnmarshalUnknownSentinelError', {module: _displayName, function: fUnmarshalDeltas, with: [aStructSentinel]});
                }


                var aDeltaBody;
                try {
                    aDeltaBody = aStream.readStruct( aStruct);
                }
                catch ( anException) {
                    throw new m_Error.Error('UnmarshalExceptionError', {module: _displayName, function: fUnmarshalDeltas});
                }
                if (!aDeltaBody) {
                    throw new m_Error.Error('UnmarshalBodyError', {module: _displayName, function: fUnmarshalDeltas});
                }

                aDeltaBody._v_DeltaKindCode = aDeltaKindCode;
                aDeltaBody._v_DeltaKind = cm_ChantDeltas_DeltaCodesAndKinds[ aDeltaKindCode];

                someDeltas.push( aDeltaBody);
            }

            return someDeltas;
        }
        finally {
            if(aTC) { m_Trace.pEnd( aTC);}
        }
    };
    if(m_Instrument.cDocFuncs) {
        fUnmarshalDeltas._pTrace(_cTr)._sDoc('fUnmarshalDeltas', 'Unpack Deltas from their representation in a Transfereable ArrayBuffer.');
        _publicMembers.push(fUnmarshalDeltas);
        _doc+=('\n\n' + fUnmarshalDeltas._doc);
    }








    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        fMarshalDeltas:   fMarshalDeltas,
        fUnmarshalDeltas: fUnmarshalDeltas

    };


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_MarshalDeltas')
    }


    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_MarshalDeltas')
}





if( typeof define === 'function') {

    define(['m_Functionx', 'm_Error', 'm_Instrument', 'm_Trace', 'm_Log', 'm_DataStream', 'm_ChantDeltas'], function (m_Functionx, m_Error, m_Instrument, m_Trace, m_Log, m_DataStream, m_ChantDeltas) {

            return aM_MarshalDeltas(m_Functionx, m_Error, m_Instrument, m_Trace, m_Log, m_DataStream, m_ChantDeltas);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_MarshalDeltas.displayName]=aM_MarshalDeltas(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_DataStream'],
            gChoirJS_Modules['m_ChantDeltas']
        );
    }
    else {
        ChoirJS_Module_MarshalDeltas= aM_MarshalDeltas(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_DataStream,
            ChoirJS_Module_ChantDeltas
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_MarshalDeltas')
}

