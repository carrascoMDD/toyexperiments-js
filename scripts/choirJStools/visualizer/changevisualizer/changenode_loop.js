/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ChangeNode_Loop')
}



var aM_ChangeNode_Loop = function (m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
    m_Instrument, m_Trace, m_Log, m_Clock, m_Identifiable,
    m_ChangeNode_General, m_ChangeNode_Error, m_ChangeNode_Iteration) {

    'use strict';

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ChangeNode_Loop')
    }

    if( m_Log) {}
    if( m_Clock) {}
    if( m_Identifiable) {}


    var _displayName = 'm_ChangeNode_Loop';

    var _doc = _displayName +' module. Prototype to represent a Performer Loop in a visualization rendered in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues_Tools:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';






    _doc+=('\n\nPrototype and Factory for ChangeNode_Loop:');






    var _prot_ChangeNode_Loop = (function() {

        var aPrototype = new m_ChangeNode_General.SubProt_ChangeNode_General();

        aPrototype._v_Type = 'ChangeNode_Loop';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];



        aPrototype._pInitNode =  (function( theCtxt, theChange, theChronograph, theFulfilledNode) {

            this._v_ParentProt_ChangeNode_Loop._pInitNode.apply( this, [theCtxt]);

            this._v_Chronograph =  theChronograph;

            this._v_Change_LoopLaunch = null;
            this._v_Change_Begin = null;
            this._v_Nodes_Iteration = [];
            this._v_Change_End   = null;
            if( theFulfilledNode) {
                this._v_NodeFulfilled    = theFulfilledNode;
                this._v_ChangeFulfilled  = theChange._v_ParentChange;
            }

            if (['Start',
                'CalledBack',
                'Yield.Timeout.Handled',
                'Yield.MessageChannel.Handled',
                'WaitUntilWakeUp.Timeout.Handled',
                'WaitForWork.Timeout.Handled'].indexOf( theChange._v_Kind) >= 0) {

                this._v_Change_LoopLaunch = theChange;

            }
            else {
                this._v_Change_Begin = theChange;
            }

            return null;


        })._sName( aPrototype._ModuleName, 'pInitNode')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theChange',         ['Type', 'Change']],
            [ 'theChronograph',    ['Type', 'ChangeChronograph']],
            [ 'theFulfilledNode',  ['object', 'optional']] /* ACV OJO Defense TODO Implement Subtype */
        ]);
        aPrototype._privateMembers.push( aPrototype._pInitNode);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pInitNode._sDesc(
            'Initialize this instance of ChangeNode_Loop');

            aPrototype._doc+=('\n\n' + aPrototype._pInitNode._doc);
        }






        aPrototype.pUpdateWithChanges = (function( theCtxt, thePerformance, theChanges) {

            var aNewErrorNode;
            
            var aNumChanges = theChanges.length;
            if( aNumChanges) {
                for ( var anIndex=0; anIndex < aNumChanges; anIndex++) {
                    var aChange = theChanges[ anIndex];
                    if ( aChange) {

                        switch ( aChange._v_Kind) {

                            case 'Loop.Begin':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'The Loop.Begin Change must have a parent that shall be an initiator change of this Node,' +
                                'which may have been initiated by handing a ' +
                                'Yield Message or Timeout handler, or WakeUp timeout handler, or WaitForWork timeout handler.');}

                                if ( !aChange._v_ParentChange) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeLoop-UpdateWith:Loop.Begin.NoParentChange');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }

                                if( !( ( [
                                    'Start',
                                    'Yield.MessageChannel.Handled',
                                    'Yield.Timeout.Handled',
                                    'WaitUntilWakeUp.Timeout.Handled',
                                    'WaitForWork.Timeout.Handled'].indexOf( aChange._v_ParentChange._v_Kind) >= 0 ) &&
                                    ( this._v_Change_LoopLaunch && ( aChange._v_ParentChange === this._v_Change_LoopLaunch )) ) ) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeLoop-UpdateWith:WrongPrecursorOfLoopBegin');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }

                                if ( this._v_Change_Begin) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeLoop-UpdateWith:Already.Begin');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_Begin = aChange;
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_Begin');
                                }
                                continue;



                            case 'Loop.End':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'The Loop.End Change must have a parent that shall be the Begin Change of this Node.');}

                                if ( !aChange._v_ParentChange) {
                                  aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeLoop-UpdateWith:Loop.End.NoParentChange');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }

                                if( !( aChange._v_ParentChange === this._v_Change_Begin)) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeLoop-UpdateWith:Loop.End.ParentNotSameAsChangeBegin');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }

                                if ( this._v_Change_End) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeLoop-UpdateWith:Already.End');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_End = aChange;
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_End');
                                }
                                continue;



                            case 'Iteration.Begin':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'The Loop.End Change must have a parent that shall be the Begin Change of this Node.');}

                                if ( !aChange._v_ParentChange) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeLoop-UpdateWith:Iteration.Begin.NoParentChange');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }

                                if( !( aChange._v_ParentChange === this._v_Change_Begin)) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeLoop-UpdateWith:Iteration.Begin.ParentNotSameAsChangeBegin');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }

                                var aNewIterationBeginNode = new m_ChangeNode_Iteration.f_Constructor_ChangeNode_Iteration( theCtxt, thePerformance, this,
                                    aChange);
                                if( aNewIterationBeginNode) {
                                    this._v_Nodes_Iteration.push( aNewIterationBeginNode);
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewIterationBeginNode, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Nodes_Iteration', ['+', aNewIterationBeginNode]);
                                }
                                continue;



                            default:
                                aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                    aChange, 'CanNotUpdateWithChange');
                                if( aNewErrorNode) {
                                    this._v_ErrorNodes.push( aNewErrorNode);
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
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
            'Update Node according to the supplied Changes.');

            aPrototype._doc+=('\n\n' + aPrototype.pUpdateWithChanges._doc);
        }








    aPrototype.fPredecessorNode =  (function( theCtxt) {

            if( !this._v_Chronograph) {
                return null;
            }

            return this._v_Chronograph.fPredecessorNode( theCtxt, this);

        })._sName( aPrototype._ModuleName, 'fPredecessorNode')._sTrace(false)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fPredecessorNode._sDesc(
            'Obtain the ChangeNode_Loop previous to this one in its container ChangeChronograph.');

            aPrototype._doc+=('\n\n' + aPrototype.fPredecessorNode._doc);
        }








        aPrototype.fMillisSincePredecessor =  (function( theCtxt, thePredecessor) {

            var aPredecessor_Loop = thePredecessor;
            if ( !aPredecessor_Loop) {
                aPredecessor_Loop = this.fPredecessorNode( theCtxt);
            }
            if ( !aPredecessor_Loop) {
                return 0;
            }

            if( aPredecessor_Loop._v_ChangeNode_Loop._v_Change_End &&
                !(aPredecessor_Loop._v_ChangeNode_Loop._v_Change_End._v_StartMillis === null) &&
                this._v_ChangeNode_Loop._v_Change_Begin &&
                !(this._v_ChangeNode_Loop._v_Change_Begin._v_StartMillis === null)) {

                return 0;
            }

            return Math.max(0, aPredecessor_Loop._v_ChangeNode_Loop._v_Change_End._v_StartMillis -
                this._v_ChangeNode_Loop._v_Change_Begin._v_StartMillis);

        })._sName( aPrototype._ModuleName, 'fMillisSincePredecessor')._sTrace(false)._DefendWith([
            [ 'theCtxt'],
            [ 'thePredecessor', ['Type', 'ChangeNode_Loop']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fMillisSincePredecessor._sDesc(
            'Return the number of milliseconds lapsed from the end of the predecessor ChangeNode_Loop ' +
            'in its container ChangeChronograph, ' +
            'and the beginning of this ChangeNode_Loop.');

            aPrototype._doc+=('\n\n' + aPrototype.fMillisSincePredecessor._doc);
        }









        aPrototype.fDuration =  (function( theCtxt) {

            if( theCtxt) {}

            if( this._v_ChangeNode_Loop._v_Change_Begin &&
                !(this._v_ChangeNode_Loop._v_Change_Begin._v_StartMillis === null) &&
                this._v_ChangeNode_Loop._v_Change_End &&
                !(this._v_ChangeNode_Loop._v_Change_End._v_StartMillis === null)) {

                return Math.max( 0, this._v_ChangeNode_Loop._v_Change_End._v_StartMillis -
                    this._v_ChangeNode_Loop._v_Change_Begin._v_StartMillis);
            }

            return 0;

        })._sName( aPrototype._ModuleName, 'fDuration')._sTrace(false)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fDuration._sDesc(
            'Return the duration of this ChangeNode_Loop.');

            aPrototype._doc+=('\n\n' + aPrototype.fDuration._doc);
        }








        aPrototype.fPercentSincePredecessor =  (function( theCtxt) {

            var aPredecessor_Loop = this.fPredecessorNode( theCtxt);
            if ( !aPredecessor_Loop) {
                return 0;
            }

            var aMillisFromPredecessor = this.fMillisSincePredecessor( theCtxt, aPredecessor_Loop);
            if( !aMillisFromPredecessor) {
                return 0;
            }

            var aDuration_This = this.fDuration( theCtxt);
            var aDuration_Predecessor = aPredecessor_Loop.fDuration( theCtxt);

            if( !aDuration_This && !aDuration_Predecessor) {
                return 0;
            }

            var aDuration = aDuration_This + aDuration_Predecessor;

            if( aDuration_This && aDuration_Predecessor) {
                aDuration = aDuration / 2;
            }

            return Math.floor( (aMillisFromPredecessor * 100) / aDuration );

        })._sName( aPrototype._ModuleName, 'fPercentSincePredecessor')._sTrace(false)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fPercentSincePredecessor._sDesc(
            'Return the percentage of time wasted between the end of the predecessor ChangeNode_Loop ' +
            'in its container ChangeChronograph, ' +
            'and the beginning of this ChangeNode_Loop. ' +
            'If both the predecessor and this Loop nodes have begin and end, ' +
            'then percentage shall be computed with the MillisFromPredecessor ' +
            'divided by half the sum of the duration of the predecessor and this Loop node.' +
            'If this Loop node has no end (yet), ' +
            'then the percentage shall be computed  with the MillisFromPredecessor ' +
            'divided by the duration of the predecessorLoop node.');

            aPrototype._doc+=('\n\n' + aPrototype.fPercentSincePredecessor._doc);
        }








        aPrototype.fIterationsDuration =  (function( theCtxt) {

            var aNumIterations = this._v_Nodes_Iteration.length;
            if ( !aNumIterations) {
                return 0;
            }
            var aTotalDuration = 0;

            for (var anIndex = 0; anIndex < aNumIterations; anIndex++) {
                var anIteration = this._v_Nodes_Iteration[anIndex];
                if (an) {
                    aTotalDuration += anIteration.fDuration( theCtxt);
                }
            }

            return aTotalDuration;

        })._sName( aPrototype._ModuleName, 'fIterationsDuration')._sTrace(false)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fIterationsDuration._sDesc(
            'Return the sum of the durations of all the ChangeNode_Iteration of this ChangeNode_Loop.');

            aPrototype._doc+=('\n\n' + aPrototype.fIterationsDuration._doc);
        }







        aPrototype.fIterationsOverhead =  (function( theCtxt) {

            var aDuration_This = this.fDuration( theCtxt);
            var aDuration_Iterations = this.fIterationsDuration( theCtxt);

            if( !aDuration_This && !aDuration_Iterations) {
                return 0;
            }

            return Math.max( 0, aDuration_This - aDuration_Iterations);

        })._sName( aPrototype._ModuleName, 'fIterationsOverhead')._sTrace(false)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fIterationsOverhead._sDesc(
            'Return the time spent inside the ChangeNode_Loop not actually performing iterations' +
            'computed as the percentage of:' +
            'the difference between the total duration of the Loop ' +
            'and the sum of the durations of all iterations.');

            aPrototype._doc+=('\n\n' + aPrototype.fIterationsOverhead._doc);
        }









        aPrototype.fPercentIterationsOverhead =  (function( theCtxt) {

            var aDuration = this.fDuration( theCtxt);
            var anOverhead = this.fIterationsOverhead( theCtxt);

            return Math.floor( (anOverhead * 100) / aDuration );

        })._sName( aPrototype._ModuleName, 'fPercentIterationsOverhead')._sTrace(false)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fPercentIterationsOverhead._sDesc(
            'Return the percentage of time wasted inside the ChangeNode_Loop ' +
            'computed as the percentage of:' +
            'the difference between the total duration of the Loop ' +
            'and the sum of the durations of all iterations, ' +
            'from the total duration of the Loop.');

            aPrototype._doc+=('\n\n' + aPrototype.fIterationsOverhead._doc);
        }








        return aPrototype;

    })();
    if(m_Instrument.cDocFuncs) {
        _prot_ChangeNode_Loop.displayName='Prototype _prot_ChangeNode_Loop';
        _privateMembers.push(_prot_ChangeNode_Loop);
        _doc+=('\n\n' + _prot_ChangeNode_Loop._doc);
    }






    var f_Constructor_ChangeNode_Loop = (function( theCtxt, thePerformance, theChronograph, theChange, theFulfilledNode) {

        this._v_Prot_ChangeNode_Loop       = _prot_ChangeNode_Loop;
        this._v_Prot                       = this._v_Prot_ChangeNode_Loop;
        this._v_ParentProt_ChangeNode_Loop = _prot_ChangeNode_Loop._v_Prot;

        this._v_Performance =  null;
        this._v_Chronograph =  null;

        this._v_Change_LoopLaunch = null;
        this._v_Change_Begin = null;
        this._v_Nodes_Iteration = [];
        this._v_Change_End   = null;
        this._v_ChangeFulfilled = null;
        this._v_NodeFulfilled = null;

        if( this._v_ChangeFulfilled) {} /* CQT */
        if( this._v_NodeFulfilled) {} /* CQT */

        this._v_Performance =  thePerformance;

        this._pInitNode( theCtxt, theChange, theChronograph, theFulfilledNode);

    })._sName( _displayName, 'f_Constructor_ChangeNode_Loop')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',    ['Type', 'Performance']],
        [ 'theChronograph',    ['Type', 'ChangeChronograph']],
        [ 'theChange',         ['Type', 'Change']],
        [ 'theFulfilledNode',  ['object', 'optional']] /* ACV OJO Defense TODO Implement Subtype */
    ]);
    f_Constructor_ChangeNode_Loop.prototype = _prot_ChangeNode_Loop;
    _publicMembers.push(f_Constructor_ChangeNode_Loop);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_ChangeNode_Loop._sDesc('Factory to create new instances of ChangeNode_Loop.');
        _doc+=('\n\n' + f_Constructor_ChangeNode_Loop._doc);
    }









    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        f_Constructor_ChangeNode_Loop:  f_Constructor_ChangeNode_Loop
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ChangeNode_Loop')
}





if( typeof define === 'function') {

    define(['m_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_Clock', 'm_Identifiable',
        'm_ChangeNode_General', 'm_ChangeNode_Error', 'm_ChangeNode_Iteration'], function (
        m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_Clock, m_Identifiable,
        m_ChangeNode_General, m_ChangeNode_Error, m_ChangeNode_Iteration) {

            return aM_ChangeNode_Loop(m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
                m_Trace, m_Log, m_Clock, m_Identifiable,
                m_ChangeNode_General, m_ChangeNode_Error, m_ChangeNode_Iteration);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ChangeNode_Loop.displayName]=aM_ChangeNode_Loop(
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
            gChoirJS_Modules['m_ChangeNode_General'],
            gChoirJS_Modules['m_ChangeNode_Error'],
            gChoirJS_Modules['m_ChangeNode_Iteration']
        );
    }
    else {
        ChoirJS_Module_ChangeNode_Loop= aM_ChangeNode_Loop(
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
            ChoirJS_Module_ChangeNode_General,
            ChoirJS_Module_ChangeNode_Error,
            ChoirJS_Module_ChangeNode_Iteration
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ChangeNode_Loop')
}

