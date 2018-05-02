/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ChangeNode_Iteration')
}



var aM_ChangeNode_Iteration = function (m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
                                   m_Instrument, m_Trace, m_Log, m_Clock, m_Identifiable,
                                   m_ChangeNode_General, m_ChangeNode_Error) {

    'use strict';

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ChangeNode_Iteration')
    }

    if( m_Log) {}
    if( m_Clock) {}
    if( m_Identifiable) {}


    var _displayName = 'm_ChangeNode_Iteration';

    var _doc = _displayName +' module. Prototype to represent a Performer Iteration in a visualization rendered in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues_Tools:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';






    _doc+=('\n\nPrototype and Factory for ChangeNode_Iteration:');






    var _prot_ChangeNode_Iteration = (function() {

        var aPrototype = new m_ChangeNode_General.SubProt_ChangeNode_General();

        aPrototype._v_Type = 'ChangeNode_Iteration';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];


        aPrototype._pInitNode =  (function( theCtxt, theChange, theParentNode ) {

            this._v_ParentProt_ChangeNode_Iteration._pInitNode.apply( this, [theCtxt, theParentNode]);

            this._v_Performance =  null;
            this._v_Chronograph =  null;

            this._v_Change_Begin  = null;
            this._v_Change_End    = null;
            this._v_Change_WakeUp = null;
            this._v_Change_Conduct= null;

            this._v_Changes_PostDeltas = [];

            this._v_Change_WakeUpInterest = null;
            this._v_Change_WakeUpInterestDropped = null;

            this._v_Change_NoteJustPlayed = null;
            this._v_Change_SoundNotesPlayed = null;

            this._v_Change_Yield  = null;
            this._v_Change_Yield_MessageChannel_New = null;
            this._v_Change_Yield_MessageChannel_Post = null;
            this._v_Change_Yield_MessageChannel_Fulfilled = null;

            this._v_Change_Yield_Timeout_Set = null;
            this._v_Change_Yield_Timeout_Fulfilled = null;

            this._v_Change_WaitUntilWakeUp = null;
            this._v_Change_WaitUntilWakeUp_Timeout_Set = null;
            this._v_Change_WaitUntilWakeUp_Timeout_Fulfilled = null;

            this._v_Change_WaitForWork = null;
            this._v_Change_WaitForWork_Timeout_Set = null;
            this._v_Change_WaitForWork_Timeout_Fulfilled = null;

            this._v_Change_TooManyWaitsForWork = null;

            this._v_Change_Begin = theChange;

        })._sName( aPrototype._ModuleName, 'pInitNode')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theChange',     ['Type', 'Change']],
            [ 'theParentNode', ['Type', 'ChangeNode_Loop', 'optional']]
        ]);
        aPrototype._privateMembers.push( aPrototype._pInitNode);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pInitNode._sDesc(
            'Initialize this instance of ChangeNode_Iteration');

            aPrototype._doc+=('\n\n' + aPrototype._pInitNode._doc);
        }







        aPrototype.pUpdateWithChanges = (function( theCtxt, thePerformance, theChanges) {

            var aNewErrorNode;
            
            var aNumChanges = theChanges.length;
            if( aNumChanges) {
                for ( var anIndex=0; anIndex < aNumChanges; anIndex++) {
                    var aChange = theChanges[ anIndex];
                    if ( aChange) {

                        if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                        'The Change must have a parent that shall be the Begin Change of this Iteration Node.');}

                        if ( !aChange._v_ParentChange) {
                            aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                aChange, 'NodeIteration-UpdateWith:NoParentChange');
                            if( aNewErrorNode) {
                                this._v_ErrorNodes.push( aNewErrorNode);
                                this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                            }
                            continue;
                        }




                        switch ( aChange._v_Kind) {




                            case 'PostDelta':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Updating Iteration Node with PostDelta Change.');}


                                if ( this._v_Changes_PostDeltas.indexOf( aChange) >= 0) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this,
                                        aChange, 'NodeIteration-UpdateWith:Duplicate.PostDelta');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Changes_PostDeltas.push( aChange);
                                    this.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Changes_PostDeltas');
                                }
                                continue;




                            case 'Conduct':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Updating Iteration Node with Conduct Change.');}

                                if( !( aChange._v_ParentChange === this._v_Change_Begin)) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith-Conduct:ParentNotSameAsChangeBegin');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if ( this._v_Change_Conduct) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith:Already.Conduct');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_Conduct = aChange;
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_Conduct');
                                }
                                continue;






                            case 'NoteJustPlayed':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Updating Iteration Node with NoteJustPlayed Change.');}

                                if( !this._v_Change_Conduct) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith-NoteJustPlayed:IterationNodeWithoutChangeConduct');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if( !( aChange._v_ParentChange === this._v_Change_Conduct)) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith-NoteJustPlayed:ParentNotSameAsChangeConduct');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if ( this._v_Change_NoteJustPlayed) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith:Already.NoteJustPlayed');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_NoteJustPlayed = aChange;
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_NoteJustPlayed');
                                }
                                continue;



                            case 'SoundNotesPlayed':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Updating Iteration Node with SoundNotesPlayed Change.');}

                                if( ! ((this._v_Change_Conduct && ( aChange._v_ParentChange === this._v_Change_Conduct)) ||
                                    ( this._v_Change_WakeUp && ( aChange._v_ParentChange === this._v_Change_WakeUp)))) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith-SoundNotesPlayed:ParentChangeIsNotConductOrWakeUpChange');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if ( this._v_Change_SoundNotesPlayed) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith:Already.SoundNotesPlayed');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_SoundNotesPlayed = aChange;
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_SoundNotesPlayed');
                                }
                                continue;




                            case 'WakeUpInterestRegistered':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Updating Iteration Node with WakeUpInterestRegistered Change.');}

                                if( !this._v_Change_Conduct) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith-WakeUpInterestRegistered:IterationNodeWithoutChangeConduct');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if( !( aChange._v_ParentChange === this._v_Change_Conduct)) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith-WakeUpInterestRegistered:ParentNotSameAsChangeConduct');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if ( this._v_Change_WakeUpInterest) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith:Already.WakeUpInterestRegistered');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_WakeUpInterest = aChange;
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_WakeUpInterest');
                                }
                                continue;



                            case 'WakeUpInterestDropped':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Updating Iteration Node with WakeUpInterestDropped Change.');}

                                if( !( aChange._v_ParentChange &&
                                    (( aChange._v_ParentChange === this._v_Change_Conduct) ||
                                    ( aChange._v_ParentChange === this._v_Change_Begin)))) {

                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith-WakeUpInterestDropped:ParentNotSameAsChangeConductOrWakeUp');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if ( this._v_Change_WakeUpInterestDropped) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith:Already.WakeUpInterestDropped');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_WakeUpInterestDropped = aChange;
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_WakeUpInterestDropped');
                                }
                                continue;





                            case 'WakeUp':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Updating Iteration Node with WakeUp Change.');}

                                if( !( aChange._v_ParentChange === this._v_Change_Begin)) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith-WakeUp:ParentNotSameAsChangeBegin');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if ( this._v_Change_WakeUp) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith:Already.WakeUp');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_WakeUp = aChange;
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_WakeUp');
                                }
                                continue;




                            case 'WaitUntilWakeUp':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                    'Updating Iteration Node with WaitUntilWakeUp Change.');}

                                if( !( aChange._v_ParentChange === this._v_Change_Begin)) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith-WaitUntilWakeUp:ParentNotSameAsChangeBegin');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if ( this._v_Change_WaitUntilWakeUp) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-Already.WaitUntilWakeUp');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_WaitUntilWakeUp = aChange;
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_WaitUntilWakeUp');
                                }
                                continue;




                            case 'WaitUntilWakeUp.Timeout.Set':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Updating Iteration Node with WaitUntilWakeUp.Timeout.Set Change.');}


                                if( !( aChange._v_ParentChange === this._v_Change_WaitUntilWakeUp)) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith-WaitUntilWakeUp.Timeout.Set:ParentNotSameAsWaitUntilWakeUp');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if ( this._v_Change_WaitUntilWakeUp_Timeout_Set) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-Already.WaitUntilWakeUp.Timeout.Set');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_WaitUntilWakeUp_Timeout_Set = aChange;
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_WaitUntilWakeUp_Timeout_Set');
                                }
                                continue;




                            case 'Yield.TooManyIterations':
                            case 'Yield.TooMuchTime':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Updating Iteration Node with Yield.TooManyIterations or Yield.TooMuchTime Change.');}

                                if( !( aChange._v_ParentChange === this._v_Change_Begin)) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith-WaitUntilWakeUp:ParentNotSameAsChangeBegin');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if ( this._v_Change_Yield) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-Already.Yield');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_Yield = aChange;
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_Yield');
                                }
                                continue;




                            case 'Yield.MessageChannel.New':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Updating Iteration Node with Yield.MessageChannel.New Change.');}

                                if( !( aChange._v_ParentChange === this._v_Change_Yield)) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith:ParentNotSameAsYield');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if ( this._v_Change_Yield_MessageChannel_New) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-Already.Yield.MessageChannel.New');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_Yield_MessageChannel_New = aChange;
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_Yield_MessageChannel_New');
                                }
                                continue;




                            case 'Yield.MessageChannel.Post':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Updating Iteration Node with Yield.MessageChannel.Post Change.');}

                                if( !( aChange._v_ParentChange === this._v_Change_Yield)) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith-Yield.MessageChannel.Post:ParentNotSameAsYield');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if ( this._v_Change_Yield_MessageChannel_Post) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-Already.Yield.MessageChannel.Post');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_Yield_MessageChannel_Post = aChange;
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_Yield_MessageChannel_Post');
                                }
                                continue;




                            case 'Yield.Timeout.Set':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Updating Iteration Node with Yield.Timeout.Set Change.');}

                                if( !( aChange._v_ParentChange === this._v_Change_Yield)) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith-Yield.Timeout.Set.Post:ParentNotSameAsYield');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if ( this._v_Change_Yield_Timeout_Set) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-Already.Yield.Timeout.Set');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_Yield_Timeout_Set = aChange;
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_Yield_Timeout_Set');
                                }
                                continue;




                            case 'WaitForWork':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Updating Iteration Node with WaitForWork Change.');}

                                if( !( aChange._v_ParentChange === this._v_Change_Begin)) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith-WaitForWork:ParentNotSameAsChangeBegin');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if ( this._v_Change_WaitForWork) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-Already.WaitForWork');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_WaitForWork = aChange;
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_WaitForWork');
                                }
                                continue;




                            case 'WaitForWork.Timeout.Set':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Updating Iteration Node with WaitForWork.Timeout.Set Change.');}

                                if( !( aChange._v_ParentChange === this._v_Change_WaitForWork)) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith-WaitForWork.Timeout.Set:ParentNotSameAsChangeWaitForWork');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if ( this._v_Change_WaitForWork_Timeout_Set) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-Already.WaitForWork.Timeout.Set');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_WaitForWork_Timeout_Set = aChange;
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_WaitForWork_Timeout_Set');
                                }
                                continue;




                            case 'Iteration.End':
                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                'Updating Iteration Node with Iteration.End Change.');}

                                if( !( aChange._v_ParentChange === this._v_Change_Begin)) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith-Iteration.End:ParentNotSameAsChangeBegin');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if ( this._v_Change_End) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-Already.Iteration.End');
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




                            case 'TooManyWaitsForWork':

                                if( aPrototype.pUpdateWithChanges._Trace) { m_Trace.pStep(
                                    'Updating Iteration Node with TooManyWaitsForWork Change.');}

                                if( !( aChange._v_ParentChange === this._v_Change_WaitForWork)) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith-Conduct:ParentNotSameAsChange_v_Change_WaitForWork');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                    continue;
                                }

                                if ( this._v_Change_TooManyWaitsForWork) {
                                    aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                        aChange, 'NodeIteration-UpdateWith:Already.TooManyWaitsForWork');
                                    if( aNewErrorNode) {
                                        this._v_ErrorNodes.push( aNewErrorNode);
                                        this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_ErrorNodes', ['+', aNewErrorNode]);
                                    }
                                }
                                else {
                                    this._v_Change_TooManyWaitsForWork = aChange;
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, this, aChange);
                                    this.pPropagate( theCtxt, this._v_Performance, '_v_Change_TooManyWaitsForWork');
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









        aPrototype.pUpdateWithFulfillingChanges = (function( theCtxt, thePerformance, theChanges) {

            var aNewErrorNode;

            var aNumChanges = theChanges.length;
            if( aNumChanges) {
                for ( var anIndex=0; anIndex < aNumChanges; anIndex++) {
                    var aChange = theChanges[ anIndex];
                    if ( aChange) {

                        switch ( aChange._v_Kind) {

                            case 'WaitUntilWakeUp.Timeout.Handled':

                                if( aPrototype.pUpdateWithFulfillingChanges._Trace) { m_Trace.pStep(
                                'Bind the Node for the reactivation change to this node, ' +
                                'which should be the parent change representing the WaitUntilWakeUp.Timeout.Set.');}

                                if ( aChange._v_ParentChange) {

                                    if( !( aChange._v_ParentChange === this._v_Change_WaitUntilWakeUp_Timeout_Set)) {
                                        aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                            aChange, 'NotSchedulerOf.WaitUntilWakeUp.Timeout.Handled');
                                        if( aNewErrorNode) {
                                            this._v_ErrorNodes.push( aNewErrorNode);
                                            this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        }
                                    }

                                    if ( this._v_Change_WaitUntilWakeUp_Timeout_Fulfilled) {
                                        aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                            aChange, 'Already.WaitUntilWakeUp.Timeout.Fulfilled');
                                        if( aNewErrorNode) {
                                            this._v_ErrorNodes.push( aNewErrorNode);
                                            this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        }
                                    }
                                    else {
                                        this._v_Change_WaitUntilWakeUp_Timeout_Fulfilled = aChange;
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_Change_WaitUntilWakeUp_Timeout_Fulfilled');
                                    }
                                }
                                continue;




                            case 'Yield.MessageChannel.Handled':

                                if( aPrototype.pUpdateWithFulfillingChanges._Trace) { m_Trace.pStep(
                                'Bind the Node for the reactivation change to this node, ' +
                                'which should be the parent change representing the Yield.MessageChannel.Post.');}

                                if ( aChange._v_ParentChange) {

                                    if( !( aChange._v_ParentChange === this._v_Change_Yield_MessageChannel_Post)) {
                                        aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                            aChange, 'NotSchedulerOf.Yield.MessageChannel.Handled');
                                        if( aNewErrorNode) {
                                            this._v_ErrorNodes.push( aNewErrorNode);
                                            this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        }
                                    }

                                    if ( aChange._v_ParentChange._v_Change_Yield_MessageChannel_Fulfilled) {
                                        aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                            aChange, 'Already.Yield.MessageChannel.Fulfilled');
                                        if( aNewErrorNode) {
                                            this._v_ErrorNodes.push( aNewErrorNode);
                                            this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        }
                                    }
                                    else {
                                        this._v_Change_Yield_MessageChannel_Fulfilled = aChange;
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_Change_Yield_MessageChannel_Fulfilled');
                                    }
                                }
                                continue;




                            case 'Yield.Timeout.Handled':

                                if( aPrototype.pUpdateWithFulfillingChanges._Trace) { m_Trace.pStep(
                                'Bind the Node for the reactivation change to this node, ' +
                                'which should be the parent change representing the Yield.Timeout.Set.');}

                                if ( aChange._v_ParentChange) {

                                    if( !( aChange._v_ParentChange === this._v_Change_Yield_Timeout_Set)) {
                                        aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                            aChange, 'NotSchedulerOf.Yield.Timeout.Handled');
                                        if( aNewErrorNode) {
                                            this._v_ErrorNodes.push( aNewErrorNode);
                                            this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        }
                                    }

                                    if ( this._v_Change_Yield_Timeout_Fulfilled) {
                                        aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                            aChange, 'Already.WaitUntilWakeUp.Timeout.Fulfilled');
                                        if( aNewErrorNode) {
                                            this._v_ErrorNodes.push( aNewErrorNode);
                                            this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        }
                                    }
                                    else {
                                        this._v_Change_Yield_Timeout_Fulfilled = aChange;
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_Change_Yield_Timeout_Fulfilled');
                                    }
                                }
                                continue;




                            case 'WaitForWork.Timeout.Handled':

                                if( aPrototype.pUpdateWithFulfillingChanges._Trace) { m_Trace.pStep(
                                'Bind the Node for the reactivation change to this node, ' +
                                'which should be the parent change representing the WaitForWork.Timeout.Set.');}

                                if ( aChange._v_ParentChange) {

                                    if( !( aChange._v_ParentChange === this._v_Change_WaitForWork_Timeout_Set)) {
                                        aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                            aChange, 'NotSchedulerOf.WaitForWork.Timeout.Handled');
                                        if( aNewErrorNode) {
                                            this._v_ErrorNodes.push( aNewErrorNode);
                                            this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        }
                                    }

                                    if ( this._v_Change_WaitForWork_Timeout_Fulfilled) {
                                        aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                            aChange, 'Already.WaitUntilWakeUp.Timeout.Fulfilled');
                                        if( aNewErrorNode) {
                                            this._v_ErrorNodes.push( aNewErrorNode);
                                            this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                        }
                                    }
                                    else {
                                        this._v_Change_WaitForWork_Timeout_Fulfilled = aChange;
                                        this.pPropagate( theCtxt, this._v_Performance, '_v_Change_WaitForTimeout_Timeout_Fulfilled');
                                    }
                                }
                                continue;




                            default:
                                aNewErrorNode = new m_ChangeNode_Error.f_Constructor_ChangeNode_Error( theCtxt, thePerformance, this._v_Chronograph,
                                    aChange, 'CanNotUpdateWithFulfillingChange');
                                if( aNewErrorNode) {
                                    this._v_ErrorNodes.push( aNewErrorNode);
                                    this._v_Chronograph.pRegisterNodeForChange( theCtxt, aNewErrorNode, aChange);
                                }

                        }
                    }
                }
            }

            return null;

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









        aPrototype.fDuration =  (function( theCtxt) {
            if( theCtxt) {} /* CQT */

            if( this._v_ChangeNode_Iteration._v_Change_Begin &&
                !(this._v_ChangeNode_Iteration._v_Change_Begin._v_StartMillis === null) &&
                this._v_ChangeNode_Iteration._v_Change_End &&
                !(this._v_ChangeNode_Iteration._v_Change_End._v_StartMillis === null)) {

                return Math.max( 0, this._v_ChangeNode_Iteration._v_Change_End._v_StartMillis -
                    this._v_ChangeNode_Iteration._v_Change_Begin._v_StartMillis);
            }

            return 0;

        })._sName( aPrototype._ModuleName, 'fDuration')._sTrace(false)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fDuration._sDesc(
            'Return the duration of this ChangeNode_Iteration.');

            aPrototype._doc+=('\n\n' + aPrototype.fDuration._doc);
        }










        return aPrototype;

    })();
    if(m_Instrument.cDocFuncs) {
        _prot_ChangeNode_Iteration.displayName='Prototype _prot_ChangeNode_Iteration';
        _privateMembers.push(_prot_ChangeNode_Iteration);
        _doc+=('\n\n' + _prot_ChangeNode_Iteration._doc);
    }






    var f_Constructor_ChangeNode_Iteration = (function( theCtxt, thePerformance, theParentNode, theChange) {

        this._v_Prot_ChangeNode_Iteration       = _prot_ChangeNode_Iteration;
        this._v_Prot                            = this._v_Prot_ChangeNode_Iteration;
        this._v_ParentProt_ChangeNode_Iteration = _prot_ChangeNode_Iteration._v_Prot;

        this._v_Performance =  null;
        this._v_Chronograph =  null;

        this._v_Change_Begin  = null;
        this._v_Change_End    = null;
        this._v_Change_WakeUp = null;
        this._v_Change_Conduct= null;

        this._v_Change_Yield  = null;
        this._v_Change_Yield_MessageChannel_New = null;
        this._v_Change_Yield_MessageChannel_Post = null;
        this._v_Change_Yield_MessageChannel_Fulfilled = null;

        this._v_Change_Yield_Timeout_Set = null;
        this._v_Change_Yield_Timeout_Fulfilled = null;

        this._v_Change_WaitUntilWakeUp = null;
        this._v_Change_WaitUntilWakeUp_Timeout_Set = null;
        this._v_Change_WaitUntilWakeUp_Timeout_Fulfilled = null;

        this._v_Change_WaitForWork = null;
        this._v_Change_WaitForWork_Timeout_Set = null;
        this._v_Change_WaitForWork_Timeout_Fulfilled = null;

        this._v_Change_TooManyWaitsForWork = null;


        this._pInitNode( theCtxt, theChange, theParentNode);

        this._v_Performance =  thePerformance;
        this._v_Chronograph =  theParentNode._v_Chronograph;

    })._sName( _displayName, 'f_Constructor_ChangeNode_Iteration')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance', ['Type', 'Performance']],
        [ 'theParentNode',  ['Type', 'ChangeNode_Loop', 'optional']],
        [ 'theChange',      ['Type', 'Change']]
    ]);
    f_Constructor_ChangeNode_Iteration.prototype = _prot_ChangeNode_Iteration;
    _publicMembers.push(f_Constructor_ChangeNode_Iteration);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_ChangeNode_Iteration._sDesc(
        'Factory to create new instances of ChangeNode_Iteration.');

        _doc+=('\n\n' + f_Constructor_ChangeNode_Iteration._doc);
    }









    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        f_Constructor_ChangeNode_Iteration:  f_Constructor_ChangeNode_Iteration
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ChangeNode_Iteration')
}





if( typeof define === 'function') {

    define(['m_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_Clock', 'm_Identifiable',
        'm_ChangeNode_General', 'm_ChangeNode_Error'], function (
        m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_Clock, m_Identifiable,
        m_ChangeNode_General, m_ChangeNode_Error) {

        return aM_ChangeNode_Iteration(m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
            m_Trace, m_Log, m_Clock, m_Identifiable,
            m_ChangeNode_General, m_ChangeNode_Error);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ChangeNode_Iteration.displayName]=aM_ChangeNode_Iteration(
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
            gChoirJS_Modules['m_ChangeNode_Error']
        );
    }
    else {
        ChoirJS_Module_ChangeNode_Iteration= aM_ChangeNode_Iteration(
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
            ChoirJS_Module_ChangeNode_Error
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ChangeNode_Iteration')
}

