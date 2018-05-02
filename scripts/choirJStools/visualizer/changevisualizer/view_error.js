/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ViewError')
}



var aM_ErrorView = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
    m_Instrument, m_Trace, m_Log, m_ViewComposite) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ViewError')
    }

    if( m_Log) {}


    var _displayName = 'm_ViewError';

    var _doc = _displayName +' module. Functions to visualize received Changes in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';






    _doc+=('\n\nPrototype and Factory for ErrorView:');





    var _prot_ErrorView = (function() {

        var aPrototype = new m_ViewComposite.SubProt_CompositeView();

        aPrototype._v_Type = 'ErrorView';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;




        aPrototype._pOpenView =  (function( theCtxt, theParentView, theChangeNode_Error) {

            this._v_ParentProt_ErrorView._pOpenView.apply( this, [theCtxt]);

            if(aPrototype._pOpenView._Trace) { m_Trace.sThis(this);}


            this._v_ParentView = theParentView;
            if( this._v_ParentView) {} /* CQT */

            /* theParentView._v_ChildrenViews.push( this); */
            theParentView.pAddChildView( theCtxt, this._v_Performance, this);

            this._v_ChangeNode_Error = theChangeNode_Error;

            return null;

        })._sName( aPrototype._ModuleName, '_pOpenView')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theParentView',       ['Type'].concat(['ChronographView', 'LoopView', 'IterationView'])], /* ACV OJO Defense TODO make sure this works */
            [ 'theChangeNode_Error', ['Type', 'ChangeNode_Error']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pOpenView._sDesc(
            'Open a View to present changes on a Error. ' +
            'No changes are expected on a Error after it has been posted.');

            aPrototype._doc+=('\n\n' + aPrototype._pOpenView._doc);
        }








        aPrototype._pComposeDisplayList = (function( theCtxt, thePerformance, the2DContext) {

            if(aPrototype._pComposeDisplayList._Trace) { m_Trace.sThis(this);}


            if( thePerformance) {}
            if( the2DContext) {}


            if (!this._v_DisplayList) {

                var aChangeNode_UID = '';
                if( this._v_ChangeNode_Error) {
                    aChangeNode_UID = this._v_ChangeNode_Error._v_UID;
                }

                this._v_DisplayList = [
                    {
                        _v_2DContext_Properties: [
                            [ 'font',      '10px Arial'],
                            [ 'fillStyle', '#FFFFFF']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillText', [ 'Err ' + this._v_UID + ' ' + this._v_ChangeNode_Error._v_ErrorKind + ' ' + JSON.stringify(this._v_ChangeNode_Error._v_ErrorValues) + ' Node ' + aChangeNode_UID, 0, 0]]
                        ]
                    }
                ];
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pComposeDisplayList')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',  ['Type', 'Performance'], ['sameas', '_v_Performance']],
            [ 'the2DContext',    ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pComposeDisplayList._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype._pOpenView._doc);
        }








        return aPrototype;
    })();
    if(m_Instrument.cDocFuncs) {
        _prot_ErrorView.displayName='Prototype _prot_ErrorView';
        _privateMembers.push(_prot_ErrorView);
        _doc+=_prot_ErrorView._doc;
    }







    var f_Constructor_ErrorView = (function( theCtxt, thePerformance, theParentView, theChangeNode_Error) {

        this._v_Prot_ErrorView       = _prot_ErrorView;
        this._v_Prot                 =  this._v_Prot_ErrorView;
        this._v_ParentProt_ErrorView = _prot_ErrorView._v_Prot;

        this._v_Type = 'ErrorView';

        this._v_Performance =     thePerformance;

        this._v_ChangeNode_Error =  null;

        this._pOpenView( theCtxt, theParentView, theChangeNode_Error);


    })._sName( _displayName, 'f_Constructor_ErrorView')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',      ['Type', 'Performance']],
        [ 'theParentView',       ['Type'].concat(['ChronographView', 'LoopView', 'IterationView'])], /* ACV OJO Defense TODO make sure this works */
        [ 'theChangeNode_Error', ['Type', 'ChangeNode_Error']]
    ]);
    f_Constructor_ErrorView.prototype = _prot_ErrorView;
    _publicMembers.push(f_Constructor_ErrorView);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_ErrorView._sDesc('Factory to create new instances of ErrorView.');
        _doc+=('\n\n' + f_Constructor_ErrorView._doc);
    }







    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        f_Constructor_ErrorView:  f_Constructor_ErrorView
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ViewError')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_ViewComposite'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_ViewComposite) {

            return aM_ErrorView(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
                m_Trace, m_Log, m_ViewComposite);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ErrorView.displayName]=aM_ErrorView(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_ViewComposite']
        );
    }
    else {
        ChoirJS_Module_ErrorView= aM_ErrorView(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_CompositeView
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ViewError')
}

