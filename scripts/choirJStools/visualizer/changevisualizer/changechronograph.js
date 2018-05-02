/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ChangeChronograph')
}



var aM_ChangeChronograph = function (m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
    m_Instrument, m_Trace, m_Log, m_Clock, m_Identifiable, m_Model,
    m_ChangeNode_Error, m_ChangeNode_Loop) {

    'use strict';

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ChangeChronograph')
    }

    if( m_Log) {}


    var _displayName = 'm_ChangeChronograph';

    var _doc = _displayName +' module. Prototype to represent a  Performer loop as a graph visualization rendered in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues_Tools:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';






    _doc+=('\n\nPrototype and Factory for ChangeChronograph:');


    var _prot_ChangeChronograph = (function() {

        var aPrototype = new m_Model.SubProt_Model();

        aPrototype._v_Type = 'ChangeChronograph';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];




        aPrototype._pInitChronograph =  (function( theCtxt ) {

            this._v_ParentProt_ChangeChronograph._pInitModel.apply( this, [theCtxt]);

            this._v_Type = this['_v_Type'];
            this._v_UID = m_Identifiable.fNewUID();

            this._v_RootNodes = [];
            this._v_Change_StartPerformance = null;
            this._v_Change_StopPerformance  = null;
            this._v_Changes_PostDeltas = [];

        })._sName( aPrototype._ModuleName, '_pInitChronograph')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pInitChronograph._sDesc(
            'Initialize this instance of ChangeChronograph');

            aPrototype._doc+=('\n\n' + aPrototype._pOpenMotionPics._doc);
        }










        aPrototype.pUpdateWithChanges = (function( theCtxt, thePerformance, theChanges) {

            var aNode;
            var aFulfilledNode;
            var aFulfilledNodeForFactory = null;


            var aNumChanges = theChanges.length;
            if( aNumChanges) {
                for ( var anIndex=0; anIndex < aNumChanges; anIndex++) {
                    var aChange = theChanges[ anIndex];
                    if ( aChange) {

                        var aNewNode;

                        switch ( aChange._v_Kind) {

                            case 'StartPerformance':
                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Updating Chronograph with StartPerformance Change.');}


                                if ( this._v_Change_StartPerformance) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this,
                                        aChange, 'Chronograph-UpdateWith:Already.StartPerformance');
                                    if( aNewErrorNode) {
                                        this._v_RootNodes.push( aNewErrorNode);
                                        this.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_RootNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_StartPerformance = aChange;
                                    this.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_WakeUpInterest');
                                }
                                continue;




                            case 'Start':
                            case 'CalledBack':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Create Loop Node and register as Root for change representing a Top activation ' +
                                'from a Start or CalledBack.');}

                                aNewNode = new m_ChangeNode_Loop.f_Constructor_ChangeNode_Loop( theCtxt, thePerformance, this,
                                    aChange);
                                if( aNewNode) {
                                    this._v_RootNodes.push( aNewNode);
                                    this.pRegisterNodeForChange( theCtxt, aNewNode, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_RootNodes', ['+', aNewNode]);
                                }
                                continue;





                            case 'WaitUntilWakeUp.Timeout.Handled':
                            case 'Yield.Timeout.Handled':
                            case 'Yield.MessageChannel.Handled':
                            case 'WaitForWork.Timeout.Handled':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Create Loop Node and register as Root for change representing a Top activation ' +
                                'by handling a WaitUntilWakeUp Timeout , Yield Message, Yield Timetout or WaitForWork Timeout. ' +
                                'If the Change has a parent Change, ' +
                                'then find the Node corresponding the parent change, which shall be an Iteration Node, ' +
                                'and Bind as Fullfilling to the Node representing the parent Change of this Change. ' +
                                'Supply the Fulfilled node to the Factory, such that the new ChangeNode_Loop ' +
                                'is initialized with a reference to the NodeFulfilled and corresponding ChangeFulfilled.');}

                                aFulfilledNode = this._fNodeFromParentChange( theCtxt, thePerformance, null, aChange, true);
                                aFulfilledNodeForFactory = null;
                                if( aFulfilledNode) {
                                    if ( aFulfilledNode._v_Type === 'ChangeNode_Iteration') {
                                        aFulfilledNodeForFactory = aFulfilledNode;
                                    }
                                }
                                aNewNode = new m_ChangeNode_Loop.f_Constructor_ChangeNode_Loop( theCtxt, thePerformance, this,
                                    aChange, aFulfilledNodeForFactory);
                                if( aNewNode) {
                                    this._v_RootNodes.push( aNewNode);
                                    this.pRegisterNodeForChange( theCtxt, aNewNode, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_RootNodes', ['+', aNewNode]);
                                }

                                if( aFulfilledNode) {
                                    if ( !( aFulfilledNode._v_Type === 'ChangeNode_Iteration')) {
                                        aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this,
                                            aChange, 'ExpectedNodeOfTypeIteration', [ aFulfilledNode]);
                                        if( aNewErrorNode) {
                                            this._v_RootNodes.push( aNewErrorNode);
                                            this.pPropagate( theCtxt, this._v_Performance, '_v_RootNodes', ['+', aNewErrorNode]);
                                        }
                                    }
                                    else {
                                        aFulfilledNode.pUpdateWithFulfillingChanges( theCtxt, thePerformance, [ aChange]);
                                    }
                                }
                                continue;



                            case 'Loop.Begin':
                            case 'Loop.End':
                            case 'Iteration.Begin':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Dispatch a Change representing the beginning or end of the Performer loop. ' +
                                'to the Loop Node for the parent change of the Change. ' +
                                'Record an ErrorNode if a Loop Node is not found for the Parent Change.');}

                                aNode = this._fNodeFromParentChange( theCtxt, thePerformance, null, aChange);
                                if( aNode) {

                                    if ( !( aNode._v_Type === 'ChangeNode_Loop')) {
                                        aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this,
                                            aChange, 'ExpectedNodeOfTypeLoop', [ aNode]);
                                        if( aNewErrorNode) {
                                            this._v_RootNodes.push( aNewErrorNode);
                                            this.pPropagate( theCtxt, this._v_Performance, '_v_RootNodes', ['+', aNewNode]);
                                        }
                                    }
                                    else {
                                        aNode.pUpdateWithChanges( theCtxt, thePerformance, [ aChange]);
                                    }
                                }
                                continue;





                            case 'WakeUpInterestRegistered':

                                if( aChange._v_ParentChange._v_Kind === 'StartPerformance') {
                                    if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                    'Updating Chronograph with WakeUpInterestRegistered Change.');}

                                    if ( this._v_Change_WakeUpInterest) {
                                        aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this,
                                            aChange, 'Chronograph-UpdateWith:Already.WakeUpInterestRegistered');
                                        if( aNewErrorNode) {
                                            this._v_RootNodes.push( aNewErrorNode);
                                            this.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                            this.pPropagate( theCtxt, this._v_Performance, '_v_RootNodes', ['+', aNewErrorNode]);
                                        }
                                    }
                                    else {
                                        this._v_Change_WakeUpInterest = aChange;
                                        this.pRegisterNodeForChange( theCtxt, this, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_Change_WakeUpInterest');
                                    }
                                    continue;
                                }
                                else {
                                    var xxyy = 1; if (xxyy) {}
                                    /* Handle case as with cases below */
                                }


                            case 'WakeUpInterestDropped':
                                /* To allow case above to continue with case below, skipping this one.  */
                                if( aChange._v_Kind === 'WakeUpInterestDropped') {

                                    if( aChange._v_ParentChange._v_Kind === 'StartPerformance') {
                                        if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                        'Updating Chronograph with WakeUpInterestDropped Change.');}

                                        if ( this._v_Change_WakeUpInterestDropped) {
                                            aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this,
                                                aChange, 'Chronograph-UpdateWith:Already.WakeUpInterestDropped');
                                            if( aNewErrorNode) {
                                                this._v_RootNodes.push( aNewErrorNode);
                                                this.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                                this.pPropagate( theCtxt, this._v_Performance, '_v_RootNodes', ['+', aNewErrorNode]);
                                            }
                                        }
                                        else {
                                            this._v_Change_WakeUpInterestDropped = aChange;
                                            this.pRegisterNodeForChange( theCtxt, this, aChange);
                                            this.pPropagate( theCtxt, this._v_Performance, '_v_Change_WakeUpInterestDropped');
                                        }
                                        continue;
                                    }
                                    else {
                                        var xxyyzzu = 1; if (xxyyzzu) {}
                                        /* Handle case as with cases below */
                                    }
                                }






                            case 'PostDelta':
                                /* To allow case above to continue with case below, skipping this one.  */
                                if( aChange._v_Kind === 'PostDelta') {

                                    if( aChange._v_ParentChange._v_Kind === 'StartPerformance') {
                                        if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                        'Updating Chronograph with PostDelta Change.');}


                                        if ( this._v_Changes_PostDeltas.indexOf( aChange) >= 0) {
                                            aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this,
                                                aChange, 'Chronograph-UpdateWith:Duplicate.PostDelta');
                                            if( aNewErrorNode) {
                                                this._v_RootNodes.push( aNewErrorNode);
                                                this.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                                this.pPropagate( theCtxt, this._v_Performance, '_v_RootNodes', ['+', aNewErrorNode]);
                                            }
                                        }
                                        else {
                                            this._v_Changes_PostDeltas.push( aChange);
                                            this.pRegisterNodeForChange( theCtxt, this, aChange);
                                            this.pPropagate( theCtxt, this._v_Performance, '_v_Changes_PostDeltas');
                                        }
                                        continue;
                                    }
                                    else {
                                        var xxyyzz = 1; if (xxyyzz) {}
                                        /* Handle case as with cases below */
                                    }
                                }




                            case 'WakeUp':
                            case 'Conduct':
                            case 'NoteJustPlayed':
                            case 'SoundNotesPlayed':
                            case 'Yield.TooManyIterations':
                            case 'Yield.TooMuchTime':
                            case 'Yield.MessageChannel.New':
                            case 'Yield.MessageChannel.Post':
                            case 'Yield.Timeout.Set':
                            case 'WaitUntilWakeUp':
                            case 'WaitUntilWakeUp.Timeout.Set':
                            case 'WaitForWork':
                            case 'WaitForWork.Timeout.Set':
                            case 'Iteration.End':
                            case 'TooManyWaitsForWork':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Dispatch a Change representing an action during the Performer loop. ' +
                                'to the Iteration Node for the parent change of the Change. ' +
                                'Record an ErrorNode if an Iteration Node is not found for the Parent Change.');}

                                aNode = this._fNodeFromParentChange( theCtxt, thePerformance, null, aChange);
                                if( aNode) {

                                    if ( !( aNode._v_Type === 'ChangeNode_Iteration')) {
                                        aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this,
                                            aChange, 'ExpectedNodeOfTypeIteration', [ aNode]);
                                        if( aNewErrorNode) {
                                            this._v_RootNodes.push( aNewErrorNode);
                                            this.pPropagate( theCtxt, this._v_Performance, '_v_RootNodes', ['+', aNewNode]);
                                        }
                                    }
                                    else {
                                        aNode.pUpdateWithChanges( theCtxt, thePerformance, [ aChange]);
                                    }
                                }
                                continue;



                            default:
                                var aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this,
                                    aChange, 'CanNotDispatchUpdateWithChange');
                                if( aNewErrorNode) {
                                    this._v_RootNodes.push( aNewErrorNode);
                                    this.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_RootNodes', ['+', aNewNode]);
                                }

                        }
                    }
                }
            }

            return null;

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







        aPrototype.pRegisterNodeForChange = (function( theCtxt, theChronographOrNode, theChange) {

            if( theChange._v_UID) {
                var someNodes = this._v_NodesByChangeUID[ theChange._v_UID];
                if ( !someNodes) {
                    this._v_NodesByChangeUID[ theChange._v_UID] = [theChronographOrNode];
                }
                else {
                    someNodes.push( theChronographOrNode);
                }
            }

            return null;

        })._sName( aPrototype._ModuleName, 'pRegisterNodeForChange')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theChronographOrNode',  ['object']], /* ACV OJO Defense TODO imperative defense included assertion ! ( theChronographOrNode === this) && !( theChronographOrNode._v_Type.indexOf( 'ChangeNode_') === 0)
                                                        implement defense with SuperType, or Type starting with - which may be used elsewhere - */
            [ 'theChange',             ['Type', 'Change']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pRegisterNodeForChange._sDesc(
            'Register the Node with the Change UID.');

            aPrototype._doc+=('\n\n' + aPrototype.pRegisterNodeForChange._doc);
        }









        aPrototype._fNodeFromParentChange = (function( theCtxt, thePerformance, theAskingNode, theChange, theAvoidError) {

            var aNewErrorNode;

            if( !theChange._v_ParentChange) {
                if( theAvoidError) {
                    return null;
                }
                aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this,
                    theChange, 'NoParentChange');
                if( aNewErrorNode) {
                    if( theAskingNode) {
                        theAskingNode._v_ErrorNodes.push( aNewErrorNode);
                    }
                    else {
                        this._v_RootNodes.push( aNewErrorNode);
                    }
                    this.pRegisterNodeForChange( theCtxt, aNewErrorNode, theChange);
                }
                return null;
            }


            var someNodes = this._v_NodesByChangeUID[ theChange._v_ParentChange._v_UID];
            if( ! (someNodes && someNodes.length && someNodes[0])) {
                if( theAvoidError) {
                    return null;
                }
                aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this,
                    theChange, 'NoNodeForParentChangeUID', [ theChange._v_ParentChange._v_UID]);
                if( aNewErrorNode) {
                    if( theAskingNode) {
                        theAskingNode._v_ErrorNodes.push( aNewErrorNode);
                    }
                    else {
                        this._v_RootNodes.push( aNewErrorNode);
                    }
                    this.pRegisterNodeForChange( theCtxt, aNewErrorNode, theChange);
                }
                return null;
            }


            var anErrorNode = null;
            var aNumNodes = someNodes.length;
            for (var anIndex = 0; anIndex < aNumNodes; anIndex++) {
                var aNode = someNodes[ anIndex];
                if ( aNode ) {
                    if ( (!theAskingNode) || (!( aNode === theAskingNode))) {
                        /* DO not return error node unless no other node registered for the Change. */
                        if ( !( aNode._v_Type === 'ChangeNode_Error')) {
                            return aNode;
                        }
                        else {
                            if ( anErrorNode === null) {
                                anErrorNode = aNode;
                            }
                        }
                    }
                }
            }
            /* Return error node if no other node registered for the Change.
            if ( anErrorNode) {
                return anErrorNode;
            }
            */
            return null;


        })._sName( aPrototype._ModuleName, '_fNodeFromParentChange')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',  ['Type', 'Performance']],
            [ 'theAskingNode',   ['object']], /* ACV OJO Defense TODO imperative defense included assertion !( theAskingNode._v_Type.indexOf( 'ChangeNode_') === 0)
                 implement defense with SuperType, or Type starting with - which may be used elsewhere - */

            [ 'theChange',       ['Type', 'Change']],
            [ 'theAvoidError',   ['boolean', 'optional']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fNodeFromParentChange._sDesc(
            'Obtain the parent node , or record an error node.');

            aPrototype._doc+=('\n\n' + aPrototype._fNodeFromParentChange._doc);
        }







        aPrototype.fPredecessorNode =  (function( theCtxt, theChangeNode_Loop) {

            if( theCtxt) {}

            if( theChangeNode_Loop._v_IndexInParent === null) {
                theChangeNode_Loop._v_IndexInParent = this._v_RootNodes.indexOf( theChangeNode_Loop);
            }

            if ( theChangeNode_Loop._v_IndexInParent <= 0) {
                return null;
            }
            if( theChangeNode_Loop._v_IndexInParent > this._v_RootNodes.length) {
                return null;
            }

            return this._v_RootNodes[ theChangeNode_Loop._v_IndexInParent - 1];

        })._sName( aPrototype._ModuleName, 'fPredecessorNode')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theChangeNode_Loop',  ['Type', 'ChangeNode_Loop']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fPredecessorNode._sDesc(
            'Obtain the ChangeNode_Loop previous to the supplied one.');

            aPrototype._doc+=('\n\n' + aPrototype.fPredecessorNode._doc);
        }





        return aPrototype;

    })();
    if(m_Instrument.cDocFuncs) {
        _prot_ChangeChronograph.displayName='Prototype _prot_ChangeChronograph';
        _privateMembers.push(_prot_ChangeChronograph);
        _doc+=('\n\n' + _prot_ChangeChronograph._doc);
    }






    var f_Constructor_ChangeChronograph = (function( theCtxt, thePerformance) {

        this._v_Prot_ChangeChronograph      = _prot_ChangeChronograph;
        this._v_Prot                         = this._v_Prot_ChangeChronograph;
        this._v_ParentProt_ChangeChronograph = _prot_ChangeChronograph._v_Prot;

        this._v_Performance =     thePerformance;

        this._v_RootNodes = [];
        this._v_NodesByChangeUID = {};

        this._pInitChronograph( theCtxt);

    })._sName( _displayName, 'f_Constructor_ChangeChronograph')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance', ['Type', 'Performance']]
    ]);
    f_Constructor_ChangeChronograph.prototype = _prot_ChangeChronograph;
    _publicMembers.push(f_Constructor_ChangeChronograph);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_ChangeChronograph._sDesc('Factory to create new instances of ChangeChronograph.');
        _doc+=('\n\n' + f_Constructor_ChangeChronograph._doc);
    }










    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        f_Constructor_ChangeChronograph:  f_Constructor_ChangeChronograph
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ChangeChronograph')
}





if( typeof define === 'function') {

    define(['m_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_Clock', 'm_Identifiable', 'm_Model',
        'm_ChangeNode_Error', 'm_ChangeNode_Loop'], function (
        m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_Clock, m_Identifiable, m_Model,
        m_ChangeNode_Error, m_ChangeNode_Loop) {

            return aM_ChangeChronograph(m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
                m_Trace, m_Log, m_Clock, m_Identifiable, m_Model,
                m_ChangeNode_Error, m_ChangeNode_Loop);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ChangeChronograph.displayName]=aM_ChangeChronograph(
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
            gChoirJS_Modules['m_Model'],
            gChoirJS_Modules['m_ChangeNode_Error'],
            gChoirJS_Modules['m_ChangeNode_Loop']
        );
    }
    else {
        ChoirJS_Module_ChangeChronograph= aM_ChangeChronograph(
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
            ChoirJS_Module_Model,
            ChoirJS_Module_ChangeNode_Error,
            ChoirJS_Module_ChangeNode_Loop
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ChangeChronograph')
}

