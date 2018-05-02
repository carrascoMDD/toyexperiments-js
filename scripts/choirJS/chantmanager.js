/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ChantManager')
}



var aM_ChantManager = function (m_ConstValues, m_Functionx, m_Error, m_Instrument, m_Trace, m_Identifiable, m_Score, m_Performance, m_ChantDeltas, m_DeltaBroker) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ChantManager')
    }


    var _displayName = 'm_ChantManager';

    var _doc = _displayName +' module. Functions to manage the Chant data structures, and propagate deltas with changes.';

    var _privateMembers = [];
    var _publicMembers = [];


    _doc+=('\n\nConfigurable module constants:');


    var _cTr = m_Trace.cTrace && m_ConstValues.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';





    var fPerformance_Create = (function( theCtxt, theScore) {

        var aPerformance = m_Identifiable.fNewIdentifiable();

        m_Performance.pPerformance_Properties_Into( aPerformance);
        if( theScore) {
            aPerformance._v_Score = theScore;
        }

        return aPerformance;

    })._sName( _displayName, 'fPerformance_Create')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theScore', ['Type', 'Score']]
    ]);
    _publicMembers.push(fPerformance_Create);
    if(m_Instrument.cDocFuncs) {
        fPerformance_Create._sDesc(
            'Create, initialize and link an instance of Performance to keep state about the performance of the Score.');
        _doc+=('\n\n' + fPerformance_Create._doc);
    }







    var pPostDelta_Performance_Create = (function( theCtxt, thePerformance) {

        var aDelta=m_ChantDeltas.fNewDelta( theCtxt, 'Performance_Create');
        if(!aDelta) {
            throw new m_Error.Error('CreateObjectError', {module: _displayName, function: fPerformance_Create, factoryModule: m_ChantDeltas.displayName, factory: 'fNewDelta'});
        }
        aDelta._v_Performance_UID =  thePerformance._v_UID;
        if( thePerformance._v_Name) {
            aDelta._v_Performance_Name = thePerformance._v_Name;
        }
        if( thePerformance._v_Score) {
            aDelta. _v_Score_UID =  thePerformance._v_Score._v_UID;
        }
        m_DeltaBroker.pPostDelta( theCtxt, thePerformance, aDelta);

        return null;

    })._sName( _displayName, 'pPostDelta_Performance_Create')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance', ['Type', 'Performance']]
    ]);
    _publicMembers.push(pPostDelta_Performance_Create);
    if(m_Instrument.cDocFuncs) {
        pPostDelta_Performance_Create._sDesc(
        'Notify a Chant Delta representing the creation of a new instance of Performance ' +
        'Shall be invoked upon first starting execution of the Performance, ' +
        'avoiding to invoke this function, if it has already been invoked for the Performance. ' +
        'Originally done within the function fPerformance_Create, ' +
        'can not be done in the invocation when creating the performance, ' +
        'because parties that shall be interested in notifiactions about execution Changes, ' +
        'and more specifically the Change on PostDelta of the first Delta which shall be of kind PerformanceCreate.');
        _doc+=('\n\n' + pPostDelta_Performance_Create._doc);
    }









    var fChantRoot_Create = (function( theCtxt, thePerformance) {

        var aChantRoot=m_Identifiable.fNewIdentifiable();
        m_Performance.pChant_Properties_Into( aChantRoot);
        aChantRoot._v_Parent = thePerformance;
        thePerformance._v_Chant = aChantRoot;


        var aDelta=m_ChantDeltas.fNewDelta( theCtxt, 'ChantRoot_Create');
        if(!aDelta) {
            throw new m_Error.Error('CreateObjectError', {module: _displayName, function: fChantRoot_Create, factoryModule: m_ChantDeltas.displayName, factory: 'fNewDelta'});
        }
        aDelta._v_Performance_UID = thePerformance._v_UID;
        aDelta._v_Chant_UID =       aChantRoot._v_UID;
        if( aChantRoot._v_Name) {
            aDelta._v_Chant_Name =  aChantRoot._v_Name;
        }
        m_DeltaBroker.pPostDelta( theCtxt, thePerformance, aDelta);

        return aChantRoot;

    })._sName( _displayName, 'fChantRoot_Create')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance', ['Type', 'Performance']]
    ]);
    _publicMembers.push(fChantRoot_Create);
    if(m_Instrument.cDocFuncs) {
        fChantRoot_Create._sDesc(
            'Create, initialize and link an instance of Chant as the root of the supplied Performance.');
        _doc+=('\n\n' + fChantRoot_Create._doc);
    }







    var fChant_Create = (function( theCtxt, thePerformance, theParentChant, theChantable) {

        var aChant=m_Identifiable.fNewIdentifiable();
        m_Performance.pChant_Properties_Into( aChant);
        aChant._v_Chantable = theChantable;
        aChant._v_Parent = theParentChant;
        theParentChant._v_Chants.push( aChant);


        var aDelta=m_ChantDeltas.fNewDelta( theCtxt, 'Chant_Create');
        if(!aDelta) {
            throw new m_Error.Error('CreateObjectError', {module: _displayName, function: fChant_Create, factoryModule: m_ChantDeltas.displayName, factory: 'fNewDelta'});
        }
        aDelta._v_Performance_UID = thePerformance._v_UID;
        aDelta._v_ParentChant_UID = theParentChant._v_UID;
        aDelta._v_Chant_UID =       aChant._v_UID;
        if( aChant._v_Name) {
            aDelta._v_Chant_Name =  aChant._v_Name;
        }
        aDelta._v_Chantable_UID =   aChant._v_Chantable._v_UID;
        m_DeltaBroker.pPostDelta( theCtxt, thePerformance, aDelta);


        return aChant;

    })._sName( _displayName, 'fChant_Create')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance', ['Type', 'Performance']],
        [ 'theParentChant', ['Type', 'Chant']],
        [ 'theChantable',   ['Type'].concat(  m_Score.cChantableTypeNames)]
    ]);
    _publicMembers.push(fChant_Create);
    if(m_Instrument.cDocFuncs) {
        fChant_Create._sDesc(
            'Create, initialize and link an instance of Chant as a sub-Chant of the supplied Chant.');
        _doc+=('\n\n' + fChant_Create._doc);
    }








    var pChant_ActionsDone_Append = (function( theCtxt, thePerformance, theChant, theActionDone) {

        var aDelta=m_ChantDeltas.fNewDelta( theCtxt, 'Chant_ActionsDone_Append');
        if(!aDelta) {
            throw new m_Error.Error('CreateObjectError', {module: _displayName, function: pChant_ActionsDone_Append, factoryModule: m_ChantDeltas.displayName, factory: 'fNewDelta'});
        }
        aDelta._v_Performance_UID = thePerformance._v_UID;
        aDelta._v_Chant_UID =   theChant._v_UID;
        aDelta._v_ActionDone = theActionDone;
        m_DeltaBroker.pPostDelta( theCtxt, thePerformance, aDelta);

        return null;

    })._sName( _displayName, 'pChant_ActionsDone_Append')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance', ['Type', 'Performance']],
        [ 'theChant',       ['Type', 'Chant']],
        [ 'theActionDone',  ['string']] /* 'notempty' ACV OJO Defend */
    ]);
    _publicMembers.push(pChant_ActionsDone_Append);
    if(m_Instrument.cDocFuncs) {
        pChant_ActionsDone_Append._sDesc(
        'Create, initialize and link an instance of Chant as a sub-Chant of the supplied Chant.');
        _doc+=('\n\n' + pChant_ActionsDone_Append._doc);
    }









    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,


        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        fPerformance_Create:           fPerformance_Create,
        pPostDelta_Performance_Create: pPostDelta_Performance_Create,
        fChantRoot_Create:             fChantRoot_Create,
        fChant_Create:                 fChant_Create,
        pChant_ActionsDone_Append:     pChant_ActionsDone_Append

    };


    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_ChantManager')
    }


    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ChantManager')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_Functionx', 'm_Error', 'm_Instrument', 'm_Trace', 'm_Identifiable',
        'm_Score', 'm_Performance', 'm_ChantDeltas', 'm_DeltaBroker'],
        function (m_ConstValues, m_Functionx, m_Error, m_Instrument, m_Trace, m_Identifiable,
            m_Score, m_Performance, m_ChantDeltas, m_DeltaBroker) {

        return aM_ChantManager(m_ConstValues, m_Functionx, m_Error, m_Instrument, m_Trace, m_Identifiable,
            m_Score, m_Performance, m_ChantDeltas, m_DeltaBroker);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ChantManager.displayName]=aM_ChantManager(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_Score'],
            gChoirJS_Modules['m_Performance'],
            gChoirJS_Modules['m_ChantDeltas'],
            gChoirJS_Modules['m_DeltaBroker']
        );
    }
    else {
        ChoirJS_Module_ChantManager= aM_ChantManager(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_Score,
            ChoirJS_Module_Performance,
            ChoirJS_Module_ChantDeltas,
            ChoirJS_Module_DeltaBroker
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ChantManager')
}

