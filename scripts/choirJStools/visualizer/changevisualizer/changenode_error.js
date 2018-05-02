/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ChangeNode_Error')
}



var aM_ChangeNode_Error = function (m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
    m_Instrument, m_Trace, m_Log, m_Clock, m_Identifiable,
    m_ChangeNode_General) {

    'use strict';

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ChangeNode_Error')
    }

    if( m_Log) {}
    if( m_Clock) {}
    if( m_Identifiable) {}


    var _displayName = 'm_ChangeNode_Error';

    var _doc = _displayName +' module. Prototype to represent an error in a graph visualization of a Performer loop rendered in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues_Tools:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';






    _doc+=('\n\nPrototype and Factory for ChangeNode_Error:');




    var _prot_ChangeNode_Error = (function() {

        var aPrototype = new m_ChangeNode_General.SubProt_ChangeNode_General();

        aPrototype._v_Type = 'ChangeNode_Error';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];





        aPrototype._pInitNode =  (function( theCtxt, theChange, theErrorKind, theErrorValues) {

            this._v_ParentProt._pInitNode.apply( this, [theCtxt]);

            this._v_Change      = theChange;
            this._v_ErrorKind   = theErrorKind;
            this._v_ErrorValues = theErrorValues;

            if( this._v_Change) {}
            if( this._v_ErrorKind) {}
            if( this._v_ErrorValues) {}

            return null;

        })._sName( aPrototype._ModuleName, '_pInitNode')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theChange',    ['Type', 'Change']],
            [ 'theErrorKind', ['string']],
            [ 'theErrorValues', ['object', 'optional']]
        ]);
        aPrototype._privateMembers.push( aPrototype._pInitNode);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pInitNode._sDesc(
            'Initialize this instance of ChangeNode_Error');

            aPrototype._doc+=('\n\n' + aPrototype._pInitNode._doc);
        }










        aPrototype.pUpdateWithChanges = (function( theCtxt, thePerformance, theChanges) {
            if( theCtxt) {}
            if( thePerformance) {}
            if( theChanges) {}

            throw new m_Error.Error('NotImplementedError', {module: aPrototype._ModuleName, function: aPrototype.pUpdateWithChanges});

        })._sName( aPrototype._ModuleName, 'pUpdateWithChanges')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance', ['Type', 'Performance']],
            [ 'theChanges',     ['object']]  /* ACV OJO Defend TODO add constraint array for object.length > 0 */
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pUpdateWithChanges._sDesc(
            'Update Display Nodes List according to the supplied Changes.');

            aPrototype._doc+=('\n\n' + aPrototype.pUpdateWithChanges._doc);
        }






        aPrototype.pRenderInCanvas = (function( theCtxt, thePerformance, theCanvas, the2DContext) {

            this._v_ParentProt.pRenderInCanvas.apply( this, [theCtxt, thePerformance, theCanvas, the2DContext]);

            return null;

        })._sName( aPrototype._ModuleName, 'pRenderInCanvas')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance', ['Type', 'Performance']],
            [ 'theCanvas',     ['object']],
            [ 'the2DContext',     ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pRenderInCanvas._sDesc(
            'Render Display Nodes List in the supplied Canvas and 2D context.');

            aPrototype._doc+=('\n\n' + aPrototype.pRenderInCanvas._doc);
        }







        return aPrototype;

    })();
    if(m_Instrument.cDocFuncs) {
        _prot_ChangeNode_Error.displayName='Prototype _prot_ChangeNode_Error';
        _privateMembers.push(_prot_ChangeNode_Error);
        _doc+=('\n\n' + _prot_ChangeNode_Error._doc);
    }









    var f_Constructor_ChangeNode_Error = (function( theCtxt, thePerformance, theChronograph, theChange, theErrorKind, theErrorValues) {

        this._v_Prot = _prot_ChangeNode_Error;
        this._v_ParentProt = _prot_ChangeNode_Error._v_Prot;

        this._v_Performance =  null;
        this._v_Chronograph =  null;

        this._v_Change      = null;
        this._v_ErrorKind   = null;
        this._v_ErrorValues = null;

        this._pInitNode( theCtxt, theChange, theErrorKind, theErrorValues);

        this._v_Performance =  thePerformance;
        this._v_Chronograph =  theChronograph;

    })._sName( _displayName, 'f_Constructor_ChangeNode_Error')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance', ['Type', 'Performance']],
        [ 'theChronograph', ['Type', 'ChangeChronograph']],
        [ 'theChange',      ['Type', 'Change']],
        [ 'theErrorKind',   ['string']],
        [ 'theErrorValues', ['object', 'optional']]
    ]);
    f_Constructor_ChangeNode_Error.prototype = _prot_ChangeNode_Error;
    _publicMembers.push(f_Constructor_ChangeNode_Error);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_ChangeNode_Error._sDesc('Factory to create new instances of ChangeNode_Error.');
        _doc+=('\n\n' + f_Constructor_ChangeNode_Error._doc);
    }








    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        f_Constructor_ChangeNode_Error:  f_Constructor_ChangeNode_Error
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ChangeNode_Error')
}





if( typeof define === 'function') {

    define(['m_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_Clock', 'm_Identifiable',
        'm_ChangeNode_General'], function (
        m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_Clock, m_Identifiable,
        m_ChangeNode_General) {

            return aM_ChangeNode_Error(m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
                m_Trace, m_Log, m_Clock, m_Identifiable,
                m_ChangeNode_General);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ChangeNode_Error.displayName]=aM_ChangeNode_Error(
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Clock'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_ChangeNode_General']
        );
    }
    else {
        ChoirJS_Module_ChangeNode_Error= aM_ChangeNode_Error(
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_Clock,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_ChangeNode_General
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ChangeNode_Error')
}

