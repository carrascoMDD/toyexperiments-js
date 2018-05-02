/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Model')
}



var aM_Model = function (m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
    m_Instrument, m_Trace, m_Log, m_Clock, m_Identifiable) {

    'use strict';

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Model')
    }

    if( m_Log) {}
    if( m_Clock) {}
    if( m_Identifiable) {}


    var _displayName = 'm_Model';

    var _doc = _displayName +' module. Prototype to represent an abstract object on which interests can be registered, ' +
        'and propagate updates to interested parties.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues_Tools:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';






    _doc+=('\n\nPrototype and Factory for Model:');




    var _prot_Model = (function() {

        var aPrototype = {};

        aPrototype._v_Type = 'Model';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];







        aPrototype._pInitModel =  (function( theCtxt ) {

            if( theCtxt) {}

            this._v_Observers = [];

            return null;

        })._sName( aPrototype._ModuleName, '_pInitModel')._sTrace(_cTr)._DefendWith([
            ['theCtxt']
        ]);
        aPrototype._privateMembers.push( aPrototype._pInitModel);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pVisualizeChanges._sDesc(
            'Initialize this instance of Model');

            _doc+=('\n\n' + aPrototype._pInitModel._doc);
        }







        aPrototype.fOnChange =  (function( theCtxt, theObserver) {

            if( theCtxt) {}

            if( ! ( this._v_Observers.indexOf( theObserver) >= 0)) {
                this._v_Observers.push( theObserver);
            }

            return theObserver;

        })._sName( aPrototype._ModuleName, '_pInitModel')._sTrace(_cTr)._DefendWith([
            ['theCtxt'],
            ['theObserver', ['typeof', 'object', 'function']]
        ]);
        aPrototype._privateMembers.push( aPrototype._pInitModel);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pInitModel._sDesc(
            'Register a party interested in changes from this model.');

            _doc+=('\n\n' + aPrototype._pInitModel._doc);
        }







        aPrototype.pDropInterest =  (function( theCtxt, theInterest) {

            if( theCtxt) {}

            var anObserverIndex =  this._v_Observers.indexOf( theInterest);
            if( anObserverIndex >= 0) {
                this._v_Observers[ anObserverIndex] = null;
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pInitModel')._sTrace(_cTr)._DefendWith([
            ['theCtxt'],
            ['theInterest', ['typeof', 'object', 'function']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pDropInterest._sDesc(
            'Forget registration of a party interested in changes from this model.');

            _doc+=('\n\n' + aPrototype.pDropInterest._doc);
        }








        aPrototype.pInvalidateView = (function( theCtxt, thePerformance) {

            self.pPropagate( theCtxt, thePerformance, 'Invalidate');

            return null;

        })._sName( aPrototype._ModuleName, 'pInvalidateView')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance', ['Type', 'Performance']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pInvalidateView._sDesc(
            'Notify the View that it is no longer current with the Node, and must be re-built upon the next rendering.');

            _doc+=('\n\n' + aPrototype.pInvalidateView._doc);
        }








        aPrototype.pPropagate = (function( theCtxt, thePerformance, theAspect, theDetails) {

            if( thePerformance) {}

            if( this._v_Observers) {
                var aNumObservers = this._v_Observers.length;
                for (var anIndex = 0; anIndex < aNumObservers; anIndex++) {
                    var anObserver = this._v_Observers[anIndex];
                    if( anObserver) {
                        if( typeof  anObserver === 'function') {
                            anObserver( theCtxt, theAspect, theDetails);
                        }
                        else {
                            anObserver.pRefresh( theCtxt, theAspect, theDetails);
                        }
                    }
                }
            }

            return null;

        })._sName( aPrototype._ModuleName, 'pPropagate')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance', ['Type', 'Performance']],
            [ 'theAspect', ['string', 'optional']],
            [ 'theDetails', ['object', 'optional']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pPropagate._sDesc(
            'Notify the observers of the aspect and details.');

            _doc+=('\n\n' + aPrototype.pPropagate._doc);
        }





        return aPrototype;

    })();
    if(m_Instrument.cDocFuncs) {
        _prot_Model.displayName='Prototype _prot_Model';
        _privateMembers.push(_prot_Model);
        _doc+=('\n\n' + _prot_Model._doc);
    }





    var SubProt_Model = (function( ) {

        this._v_Prot = _prot_Model;

    })._sName( _displayName, 'SubProt_Model')._sTrace(_cTr);
    SubProt_Model.prototype = _prot_Model;
    _publicMembers.push(SubProt_Model);
    if(m_Instrument.cDocFuncs) {
        SubProt_Model._sDesc(
        'Factory to create new instances of Model to serve as prototype for more specific types of model.');

        _doc+=('\n\n' + SubProt_Model._doc);
    }






    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        SubProt_Model:  SubProt_Model
    };
    if( aModule) {}

    return aModule;
};



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Model')
}





if( typeof define === 'function') {

    define(['m_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_Clock', 'm_Identifiable'], function (
        m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_Clock, m_Identifiable) {

            return aM_Model(m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
                m_Trace, m_Log, m_Clock, m_Identifiable);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Model.displayName]=aM_Model(
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Clock'],
            gChoirJS_Modules['m_Identifiable']
        );
    }
    else {
        ChoirJS_Module_Model= aM_Model(
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_Clock,
            ChoirJS_Module_Identifiable
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Model')
}

