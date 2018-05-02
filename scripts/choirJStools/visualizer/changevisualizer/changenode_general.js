/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ChangeNode_General')
}



var aM_ChangeNode_General = function (m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
    m_Instrument, m_Trace, m_Log, m_Clock, m_Identifiable, m_Model) {

    'use strict';

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ChangeNode_General')
    }

    if( m_Log) {}
    if( m_Clock) {}
    if( m_Identifiable) {}


    var _displayName = 'm_ChangeNode_General';

    var _doc = _displayName +' module. Prototype to represent an abstract general node in a Performer loop visualization rendered in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues_Tools:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';






    _doc+=('\n\nPrototype and Factory for ChangeNode_General:');




    var _prot_ChangeNode_General = (function() {

        var aPrototype = new m_Model.SubProt_Model();

        aPrototype._v_Type = 'ChangeNode_General';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];






        aPrototype._pInitNode =  (function( theCtxt, theParentNode ) {

            this._v_ParentProt_ChangeNode_General._pInitModel.apply( this, [theCtxt]);

            this._v_Type = this['_v_Type'];
            this._v_UID = m_Identifiable.fNewUID();

            if ( theParentNode) {
                this._v_ParentNode = theParentNode;
            }
            else {
                this._v_ParentNode = null;
            }
            if( this._v_ParentNode) {} /* CQT */

            this._v_IndexInParent = null;

            this._v_ErrorNodes = [];

            return null;

        })._sName( aPrototype._ModuleName, '_pInitNode')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theParentNode',  ['object', 'optional']] /* ACV OJO Defense TODO Add constraint for Node being one of the possible types */
        ]);
        aPrototype._privateMembers.push( aPrototype._pInitNode);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pInitNode._sDesc(
            'Initialize this instance of ChangeNode_General');

            aPrototype._doc+=('\n\n' + aPrototype._pInitNode._doc);
        }








        aPrototype.pUpdateWithChanges = (function( theCtxt, thePerformance, theChanges) {

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
            'Update Nodes according to the supplied Changes.');

            aPrototype._doc+=('\n\n' + aPrototype.pUpdateWithChanges._doc);
        }






        aPrototype.pUpdateWithFulfillingChanges = (function( theCtxt, thePerformance, theChanges) {

            if( thePerformance) {}
            if( theChanges) {}

            throw new m_Error.Error('NotImplementedError', {module: aPrototype._ModuleName, function: aPrototype.pUpdateWithFulfillingChanges});

        })._sName( aPrototype._ModuleName, 'pUpdateWithFulfillingChanges')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance', ['Type', 'Performance']],
            [ 'theChanges',     ['object']]  /* ACV OJO Defend TODO add constraint array for object.length > 0 */
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pUpdateWithFulfillingChanges._sDesc(
            'Update Nodes with the supplied Changes representing fullfilling actions ' +
            'of this promise after Yield, WaitUntilWakeUp or WaitForWork.');

            aPrototype._doc+=('\n\n' + aPrototype.pUpdateWithFulfillingChanges._doc);
        }







        return aPrototype;

    })();
    if(m_Instrument.cDocFuncs) {
        _prot_ChangeNode_General.displayName='Prototype _prot_ChangeNode_General';
        _privateMembers.push(_prot_ChangeNode_General);
        _doc+=('\n\n' + _prot_ChangeNode_General._doc);
        }





    var SubProt_ChangeNode_General = (function() {

        this._v_Prot_ChangeNode_General      = _prot_ChangeNode_General;
        this._v_Prot                          = this._v_Prot_ChangeNode_General;
        this._v_ParentProt_ChangeNode_General = this._v_Prot_ChangeNode_General._v_Prot;

    })._sName( _displayName, 'SubProt_ChangeNode_General')._sTrace(_cTr);
    SubProt_ChangeNode_General.prototype = _prot_ChangeNode_General;
    _publicMembers.push(SubProt_ChangeNode_General);
    if(m_Instrument.cDocFuncs) {
        SubProt_ChangeNode_General._sDesc(
        'Factory to create new instances of ChangeNode_General to serve as prototype for more specific types of ChangeNode.');

        _doc+=('\n\n' + SubProt_ChangeNode_General._doc);
    }






    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        SubProt_ChangeNode_General:  SubProt_ChangeNode_General
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ChangeNode_General')
}





if( typeof define === 'function') {

    define(['m_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_Clock', 'm_Identifiable', 'm_Model'], function (
        m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_Clock, m_Identifiable, m_Model) {

            return aM_ChangeNode_General(m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
                m_Trace, m_Log, m_Clock, m_Identifiable, m_Model);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ChangeNode_General.displayName]=aM_ChangeNode_General(
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
            gChoirJS_Modules['m_Model']
        );
    }
    else {
        ChoirJS_Module_ChangeNode_General= aM_ChangeNode_General(
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
            ChoirJS_Module_Model
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ChangeNode_General')
}

