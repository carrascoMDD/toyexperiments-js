/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ViewIteration')
}



var aM_IterationView = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Clock,
    m_Instrument, m_Trace, m_Log, m_ViewComposite, m_ViewError) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ViewIteration')
    }

    if( m_Log) {}


    var _displayName = 'm_ViewIteration';

    var _doc = _displayName +' module. Functions to visualize received Changes in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';




    _doc+=('\n\nPrototype and Factory for IterationView:');


    var _prot_IterationView = (function() {

        var aPrototype = new m_ViewComposite.SubProt_CompositeView();


        aPrototype._v_Type = 'IterationView';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];



        aPrototype._pOpenView =  (function( theCtxt, theLoopView, theChangeNode_Iteration) {

            this._v_ParentProt_IterationView._pOpenView.apply( this, [theCtxt]);

            if(aPrototype._pOpenView._Trace) { m_Trace.sThis(this);}

            this._v_ParentView = theLoopView;

            /* this._v_ParentView._v_ChildrenViews.push( this); */
            this._v_ParentView.pAddChildView( theCtxt, this._v_Performance, this);

            this._v_ChangeNode_Iteration= theChangeNode_Iteration;


            this._pBuildMissingChildrenViews( theCtxt);

            var aView = this;
            this._v_OnChangeInterest = (function() {
                var aView_here = aView;
                return aView_here._v_ChangeNode_Iteration.fOnChange( theCtxt, function( theCtxt_arg, theAspect, theDetails) {
                    aView_here.pRefresh( theCtxt_arg, theAspect, theDetails);
                });
            })();

            return null;

        })._sName( aPrototype._ModuleName, '_pOpenView')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theLoopView',             ['Type', 'LoopView']],
            [ 'theChangeNode_Iteration', ['Type', 'ChangeNode_Iteration']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pOpenView._sDesc(
            'Open a View to present changes on a ChangeNode_Loop, and reacting to further changes in a ChangeNode_Loop.');

            aPrototype._doc+=('\n\n' + aPrototype._pOpenView._doc);
        }










        aPrototype._pBuildMissingChildrenViews = (function( theCtxt) {

            if(aPrototype._pBuildMissingChildrenViews._Trace) { m_Trace.sThis(this);}

            var anIndex;
            var aChangeNode;

            var someChildrenNodesWithView = [];

            var aNumChidrenViews = this._v_ChildrenViews.length;
            for ( anIndex = 0; anIndex < aNumChidrenViews; anIndex++) {
                aChangeNode = null;
                var aChildView = this._v_ChildrenViews[anIndex];
                if ( aChildView) {
                    if( aChildView._v_Type) {

                        switch ( aChildView._v_Type) {

                            case 'ErrorView':
                                aChangeNode = aChildView._v_ChangeNode_Error;
                                if ( aChangeNode) {
                                    someChildrenNodesWithView.push( aChangeNode);
                                }
                                continue;


                            case 'IterationView':
                                aChangeNode = aChildView._v_ChangeNode_Iteration;
                                if ( aChangeNode) {
                                    someChildrenNodesWithView.push( aChangeNode);
                                }
                                continue;

                            default:
                                continue;
                        }
                    }
                }
                var xx= 1; if( xx) {} /* CQT */
            }


            var someChildrenNodesWithoutView = [];

            var aNumErrors = this._v_ChangeNode_Iteration._v_ErrorNodes.length;
            for ( anIndex = 0; anIndex < aNumErrors; anIndex++) {
                aChangeNode = this._v_ChangeNode_Iteration._v_ErrorNodes[anIndex];
                if ( aChangeNode) {
                    if( aChangeNode._v_Type) {

                        switch ( aChangeNode._v_Type) {

                            case 'ChangeNode_Error':
                                if( someChildrenNodesWithView.indexOf( aChangeNode) < 0) {
                                    someChildrenNodesWithoutView.push( aChangeNode);
                                }
                                continue;

                            default:
                                continue;
                        }
                    }
                }
                var xxx= 1; if( xxx) {} /* CQT */
            }


            var aNewView;

            var aNumChildrenNodesWithoutView = someChildrenNodesWithoutView.length;
            for ( anIndex = 0; anIndex < aNumChildrenNodesWithoutView; anIndex++) {
                aChangeNode = someChildrenNodesWithoutView[anIndex];
                if ( aChangeNode) {
                    if( aChangeNode._v_Type) {
                        switch ( aChangeNode._v_Type) {

                            case 'ChangeNode_Error':
                                aNewView = new m_ViewError.f_Constructor_ErrorView( theCtxt, this._v_Performance, this, aChangeNode);
                                if( !aNewView) {
                                    throw new m_Error.Error();
                                }
                                continue;

                            default:
                                continue;
                        }
                    }
                }
                var xxxx= 1; if( xxxx) {} /* CQT */
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pBuildMissingChildrenViews')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pBuildMissingChildrenViews._sDesc(
            'Build missing Views for ChildrenNodes of the Node of this View, after instantiations, or model refresh.');

            aPrototype._doc+=('\n\n' + aPrototype._pBuildMissingChildrenViews._doc);
        }









        aPrototype.pRefresh = (function( theCtxt, theAspect, theDetails) {

            if(aPrototype.pRefresh._Trace) { m_Trace.sThis(this);}

            if( theDetails) {}

            if( theAspect === 'Invalidate') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_Begin') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_TooManyWaitsForWork') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_Conduct') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_NoteJustPlayed') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_SoundNotesPlayed') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_WakeUpInterest') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_WakeUpInterestDropped') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_WakeUp') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_WaitUntilWakeUp') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_WaitUntilWakeUp_Timeout_Set') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_WaitUntilWakeUp_Timeout_Fulfilled') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_Yield') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_Yield_MessageChannel_New') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_Yield_MessageChannel_Post') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_Yield_MessageChannel_Fulfilled') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_Yield_Timeout_Set') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_Yield_Timeout_Fulfilled') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_WaitForWork_Timeout_Set') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_WaitForTimeout_Timeout_Fulfilled') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_End') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( ['_v_ErrorNodes'].indexOf( theAspect) >= 0) {
                this._pBuildMissingChildrenViews( theCtxt);
                return null;
            }

            return null;

        })._sName( aPrototype._ModuleName, 'pRefresh')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theAspect',  ['string', 'optional']],
            [ 'theDetails', ['object', 'optional']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pRefresh._sDesc(
            'Refresh the View, after becoming potentially not-up-to-date with the underlying model which has notified an update.');

            aPrototype._doc+=('\n\n' + aPrototype.pRefresh._doc);
        }







        var _cTop_LiveBox  = 2;
        var _cTextTop = 0;
        var _cHei_LiveBox  = 12;
        var _cHei_Millis  = _cHei_LiveBox + 0;

        var _cCol = 4;

        var _cWid_Millis  = 32;

        var _cCol_DurationMillis = _cCol;
        var _cWid_DurationMillis = _cWid_Millis + 0 ; /* CQT */
        var _cSep_DurationMillis = 4;
        _cCol = _cCol_DurationMillis + _cWid_DurationMillis + _cSep_DurationMillis;

        var _cCol_BeginMillis = _cCol;
        var _cWid_BeginMillis = _cWid_Millis + 0 ; /* CQT */
        var _cSep_BeginMillis = 4;
        _cCol = _cCol_BeginMillis + _cWid_BeginMillis + _cSep_BeginMillis;

        var _cCol_EndMillis = _cCol;
        var _cWid_EndMillis = _cWid_Millis + 0 ; /* CQT */
        var _cSep_EndMillis = 4;
        _cCol = _cCol_EndMillis + _cWid_EndMillis + _cSep_EndMillis;

        var _cCol_LiveBox  = _cCol;
        var _cWid_LiveBox  = 6;
        var _cSep_LiveBox  = 18;
        _cCol = _cCol_LiveBox + _cWid_LiveBox + _cSep_LiveBox;


        var _cCol_FFMillis    = _cCol;
        var _cWid_FFMillis    = 32;
        var _cSep_FFMillis    = 4;
        _cCol = _cCol_FFMillis + _cWid_FFMillis + _cSep_FFMillis;


        var _cCol_Type    = _cCol;
        var _cWid_Type    = 12;
        var _cSep_Type    = 12;
        _cCol = _cCol_Type + _cWid_Type + _cSep_Type;

        var _cCol_NumErrors    = _cCol;
        var _cWid_NumErrors    = 24;
        var _cSep_NumErrors    = 12;
        _cCol = _cCol_NumErrors + _cWid_NumErrors + _cSep_NumErrors;

        var _cCol_Action    = _cCol;
        var _cWid_Action    = 12;
        var _cSep_Action    = 12;
        _cCol = _cCol_Action + _cWid_Action + _cSep_Action;

        var _cRight = _cCol;


        var _cHei_Action    = 14;
        var _cTop_Action    = _cTextTop + 0;



        var _cCol_WakeUp    = _cCol_Action + 0;
        var _cWid_WakeUp    = _cWid_Action + 0;
        var _cSep_WakeUp    = _cSep_Action + 0;
        _cCol = _cCol_WakeUp + _cWid_WakeUp + _cSep_WakeUp;
        _cRight = Math.max( _cRight, _cCol);



        var _cCol_Conduct    = _cCol_Action + 0;
        var _cWid_Conduct    = _cWid_Action + 0;
        var _cSep_Conduct    = _cSep_Action + 0;
        _cCol = _cCol_Conduct + _cWid_Conduct + _cSep_Conduct;

        var _cCol_ChantUID    = _cCol;
        var _cWid_ChantUID    = 24;
        var _cSep_ChantUID    = 12;
        _cCol = _cCol_ChantUID + _cWid_ChantUID + _cSep_ChantUID;

        var _cCol_WUpInterest    = _cCol;
        var _cWid_WUpInterest    = 14;
        var _cSep_WUpInterest    = 2;
        _cCol = _cCol_WUpInterest + _cWid_WUpInterest + _cSep_WUpInterest;

        var _cCol_WUpInterest_Millis = _cCol;
        var _cWid_WUpInterest_Millis = 24;
        var _cSep_WUpInterest_Millis = 6;
        _cCol = _cCol_WUpInterest_Millis + _cWid_WUpInterest_Millis + _cSep_WUpInterest_Millis;

        var _cCol_WUpInterest_MillisThisIter = _cCol;
        var _cWid_WUpInterest_MillisThisIter = 24;
        var _cSep_WUpInterest_MillisThisIter = 6;
        _cCol = _cCol_WUpInterest_MillisThisIter + _cWid_WUpInterest_MillisThisIter + _cSep_WUpInterest_MillisThisIter;


        var _cCol_InterestNumDeltas = _cCol;
        var _cWid_InterestNumDeltas = 32;
        var _cSep_InterestNumDeltas = 6;
        _cCol = _cCol_InterestNumDeltas + _cWid_InterestNumDeltas + _cSep_InterestNumDeltas;

        var _cCol_InterestDeltaKinds = _cCol;
        var _cWid_InterestDeltaKinds = 180;
        var _cSep_InterestDeltaKinds = 6;
        _cRight = Math.max( _cRight, _cCol_InterestDeltaKinds + _cWid_InterestDeltaKinds + _cSep_InterestDeltaKinds);

        var _cCol_WUpInterestDropped    = _cCol;
        var _cWid_WUpInterestDropped    = 14;
        var _cSep_WUpInterestDropped    = 2;
        _cCol = _cCol_WUpInterestDropped + _cWid_WUpInterestDropped + _cSep_WUpInterestDropped;

        var _cCol_WUpInterest_MillisDropped = _cCol;
        var _cWid_WUpInterest_MillisDropped = 24;
        var _cSep_WUpInterest_MillisDropped = 6;
        _cCol = _cCol_WUpInterest_MillisDropped + _cWid_WUpInterest_MillisDropped + _cSep_WUpInterest_MillisDropped;

        var _cCol_WUpInterest_MillisThisIterDropped = _cCol;
        var _cWid_WUpInterest_MillisThisIterDropped = 24;
        var _cSep_WUpInterest_MillisThisIterDropped = 6;
        _cCol = _cCol_WUpInterest_MillisThisIterDropped + _cWid_WUpInterest_MillisThisIterDropped + _cSep_WUpInterest_MillisThisIterDropped;



        var _cCol_NumDeltas = _cCol;
        var _cWid_NumDeltas = 32;
        var _cSep_NumDeltas = 6;
        _cCol = _cCol_NumDeltas + _cWid_NumDeltas + _cSep_NumDeltas;

        var _cCol_DeltaKinds = _cCol;
        var _cWid_DeltaKinds = 180;
        var _cSep_DeltaKinds = 6;
        _cRight = Math.max( _cRight, _cCol_DeltaKinds + _cWid_DeltaKinds + _cSep_DeltaKinds);

        var _cCol_NumNotesJust    = _cCol;
        var _cWid_NumNotesJust    = 12;
        var _cSep_NumNotesJust    = 4;
        _cCol = _cCol_NumNotesJust + _cWid_NumNotesJust + _cSep_NumNotesJust;

        var _cCol_NotesJust    = _cCol;
        var _cWid_NotesJust    = 24;
        var _cSep_NotesJust    = 12;
        _cCol = _cCol_NotesJust + _cWid_NotesJust + _cSep_NotesJust;

        var _cCol_NumNotes    = _cCol;
        var _cWid_NumNotes    = 24;
        var _cSep_NumNotes    = 4;
        _cCol = _cCol_NumNotes + _cWid_NumNotes + _cSep_NumNotes;

        var _cCol_Notes    = _cCol;
        var _cWid_Notes    = 160;
        /* var _cSep_Notes    = 16;
         _cCol = _cCol_Notes + _cWid_Notes + _cSep_Notes; */
        _cRight = Math.max( _cRight, _cCol);


        var _cCol_Yield    = _cCol_Action + 0;
        var _cWid_Yield    = _cWid_Action + 0;
        var _cSep_Yield    = _cSep_Action + 0;
        _cCol = _cCol_Yield + _cWid_Yield + _cSep_Yield;

        var _cCol_Yield_Mode    = _cCol;
        var _cWid_Yield_Mode    = 22;
        var _cSep_Yield_Mode    = 2;
        _cCol = _cCol_Yield_Mode + _cWid_Yield_Mode + _cSep_Yield_Mode;

        var _cCol_YieldFFMillis    = _cCol;
        var _cWid_YieldFFMillis    = 24;
        var _cSep_YieldFFMillis    = 6;
        _cCol = _cCol_YieldFFMillis + _cWid_YieldFFMillis + _cSep_YieldFFMillis;
        _cRight = Math.max( _cRight, _cCol);



        var _cCol_W4W    = _cCol_Action + 0;
        var _cWid_W4W    = _cWid_Action + 0;
        var _cSep_W4W    = _cSep_Action + 0;
        _cCol = _cCol_W4W + _cWid_W4W + _cSep_W4W;

        var _cCol_W4W_Status    = _cCol;
        var _cWid_W4W_Status    = 24;
        var _cSep_W4W_Status    = 16;
        _cCol = _cCol_W4W_Status + _cWid_W4W_Status + _cSep_W4W_Status;
        _cRight = Math.max( _cRight, _cCol);





        var _cDeltaKindsToSymbolsMap = {
            'Performance_Create':       String.fromCharCode(0x2A04), /* N-ARY UNION OPERATOR WITH PLUS */
            'ChantRoot_Create':         String.fromCharCode(0x2A01), /* N-ARY CIRCLED PLUS OPERATOR */
            'Chant_Create':             String.fromCharCode(0x229E), /* SQUARED PLUS */
            'Chant_ActionsDone_Append': String.fromCharCode(0x2945)  /* RIGHTWARDS ARROW WITH PLUS BELOW */
        };







        aPrototype._pComposeDisplayList = (function( theCtxt, thePerformance, the2DContext) {

            if( the2DContext) {}

            if(aPrototype._pComposeDisplayList._Trace) { m_Trace.sThis(this);}


            if (!this._v_DisplayList) {

                var anIndex;
                var aNoteName;
                var aDeltaKind;
                var aDeltaKindSymbol;

                var aBeginMillis = null;
                var anEndMillis = null;
                var aDurationMillis = null;
                /*
                var aChangeNode_UID = '';
                */
                var aHasBegin = false;
                var aHasEnd = false;
                var aNumErrors = null;
                var anIsWakeUp = false;
                var aWakeUpKind = '';
                var anIsConduct = false;
                var aConductChantUID = '';
                var aHasNotesJustPlayed = false;
                var aNumNotesJustPlayed = null;
                var someNotesJustPlayed = null;
                var aHasSoundNotesPlayed = false;
                var aNumNotesPlayed = null;
                var someNotesPlayed = null;
                var anIsYield = false;
                var aYieldParentKind = null;
                var aYieldReason = null;
                var aYieldFulfilledMillis = null;
                var anIsYieldMessage = false;
                var aYieldMessageFulfilled = false;
                var aYieldMessageFulfilledMillis = null;
                var anIsYieldTimeout = false;
                var aYieldTimeoutFulfilled = false;
                var aYieldTimeoutFulfilledMillis = false;
                var aYieldMode = '';
                var anIsWaitForWork = false;
                var aWaitForWorkTimeoutSet = false;
                var aWaitForWorkFulfilled = false;
                var aWaitForWorkFulfilledMillis = null;
                var aWaitForWorkStatus = '';
                var aHasWakeUpInterest = false;
                var aWakeUpInterestKind = null;
                var aWakeUpScheduleMillis = null;
                var aWakeUpScheduleFromThisIterationBeginMillis = null;
                var aNumInterestDeltas = null;
                var someInterestDeltaKinds = null;
                var someInterestDeltaKindSymbols = null;
                var aHasWakeUpInterestDropped = false;
                var aWakeUpInterestDroppedKind = null;
                var aWakeUpDroppedScheduleMillis = null;
                var aWakeUpDroppedScheduleFromThisIterationBeginMillis = null;
                var aNumDeltas = null;
                var aNumDeltaKinds = null;
                var someDeltaKinds = null;
                var someDeltaKindSymbols = null;


                if( this._v_ChangeNode_Iteration) {

                    /*
                    aChangeNode_UID = this._v_ChangeNode_Iteration._v_UID;
                    */
                    aHasBegin   = this._v_ChangeNode_Iteration._v_Change_Begin   ? true: false;
                    aHasEnd     = this._v_ChangeNode_Iteration._v_Change_End     ? true: false;

                    if( aHasBegin) {
                        if( !( this._v_ChangeNode_Iteration._v_Change_Begin._v_StartMillis === null)) {
                            aBeginMillis = this._v_ChangeNode_Iteration._v_Change_Begin._v_StartMillis;
                        }
                    }

                    if( aHasEnd) {
                        if( !( this._v_ChangeNode_Iteration._v_Change_End._v_StartMillis === null)) {
                            anEndMillis = this._v_ChangeNode_Iteration._v_Change_End._v_StartMillis;
                            if( aHasBegin) {
                                if( !( this._v_ChangeNode_Iteration._v_Change_Begin._v_StartMillis === null)) {
                                    aDurationMillis= this._v_ChangeNode_Iteration._v_Change_End._v_StartMillis -
                                        this._v_ChangeNode_Iteration._v_Change_Begin._v_StartMillis;
                                }
                            }
                        }
                    }

                    aNumErrors     = this._v_ChangeNode_Iteration._v_ErrorNodes.length;


                    anIsWakeUp   = this._v_ChangeNode_Iteration._v_Change_WakeUp  ? true: false;
                    if( anIsWakeUp) {
                        if( this._v_ChangeNode_Iteration._v_Change_WakeUp._v_Data) {
                            if( this._v_ChangeNode_Iteration._v_Change_WakeUp._v_Data.WakeUpInterest) {
                                aWakeUpKind = this._v_ChangeNode_Iteration._v_Change_WakeUp._v_Data.WakeUpInterest._v_InterestKind;
                            }
                        }
                        if (!aWakeUpKind) {
                            aWakeUpKind = '?';
                        }
                        else {
                            if (aWakeUpKind === 'DeltaBroker') {
                                aWakeUpKind = String.fromCharCode(0x0394); /* GREEK CAPITAL LETTER DELTA */

                                if ( this._v_ChangeNode_Iteration._v_Change_WakeUp &&
                                    this._v_ChangeNode_Iteration._v_Change_WakeUp._v_Data) {

                                    aNumDeltas = this._v_ChangeNode_Iteration._v_Change_WakeUp._v_Data._v_NumDeltas;
                                    someDeltaKinds = this._v_ChangeNode_Iteration._v_Change_WakeUp._v_Data._v_SomeDeltaKinds;
                                    someDeltaKindSymbols = [];

                                    aNumDeltaKinds = someDeltaKinds.length;
                                    for ( anIndex = 0; anIndex < aNumDeltaKinds; anIndex++) {
                                        aDeltaKind = someDeltaKinds[anIndex];
                                        if ( aDeltaKind) {
                                            aDeltaKindSymbol = _cDeltaKindsToSymbolsMap[aDeltaKind];
                                            if( aDeltaKindSymbol) {
                                                someDeltaKindSymbols.push( aDeltaKindSymbol);
                                            }
                                        }
                                    }
                                    if ( !someDeltaKindSymbols.length) {
                                        someDeltaKindSymbols = null;
                                    }
                                    else {
                                        someDeltaKindSymbols = someDeltaKindSymbols.join(' ');
                                    }
                                }
                            }
                            else {
                                if (aWakeUpKind === 'EchoAudio') {
                                    aWakeUpKind = String.fromCharCode(0x266B); /* BEAMED EIGHTH NOTES */
                                }
                                else {
                                    if (aWakeUpKind === 'EchoAudio-drop') {
                                        aWakeUpKind = String.fromCharCode(0x266B)  + 'x'; /* BEAMED EIGHTH NOTES */
                                    }
                                }
                            }
                        }
                        aWakeUpKind = String.fromCharCode(0x237E) /* BELL SYMBOL */ + aWakeUpKind;

                    }

                    anIsConduct   = this._v_ChangeNode_Iteration._v_Change_Conduct  ? true: false;
                    if( anIsConduct) {
                        if( this._v_ChangeNode_Iteration._v_Change_Conduct._v_Data) {
                            aConductChantUID = this._v_ChangeNode_Iteration._v_Change_Conduct._v_Data.Chant_UID;
                        }
                        if (!aConductChantUID) {
                            aConductChantUID = '?';
                        }
                    }



                    aHasNotesJustPlayed = this._v_ChangeNode_Iteration._v_Change_NoteJustPlayed  ? true: false;
                    if( aHasNotesJustPlayed) {
                        if( this._v_ChangeNode_Iteration._v_Change_NoteJustPlayed._v_Data) {
                            var someSoundNoteNames = this._v_ChangeNode_Iteration._v_Change_NoteJustPlayed._v_Data._v_SoundNoteNames;
                            if( someSoundNoteNames) {
                                aNumNotesJustPlayed = someSoundNoteNames.length;
                                someNotesJustPlayed = someSoundNoteNames.join( ' ');
                            }
                        }
                    }



                    aHasSoundNotesPlayed = this._v_ChangeNode_Iteration._v_Change_SoundNotesPlayed  ? true: false;
                    if( aHasSoundNotesPlayed) {
                        if( this._v_ChangeNode_Iteration._v_Change_SoundNotesPlayed._v_Data) {
                            var someSoundNotePlayReports = this._v_ChangeNode_Iteration._v_Change_SoundNotesPlayed._v_Data._v_SoundNotePlayReports;
                            if( someSoundNotePlayReports) {
                                aNumNotesPlayed = someSoundNotePlayReports.length;
                                var someNoteNames = [];
                                for ( anIndex = 0; anIndex < aNumNotesPlayed; anIndex++) {
                                    var aSoundNotePlayReport = someSoundNotePlayReports[anIndex];
                                    aNoteName = '';
                                    if ( aSoundNotePlayReport) {
                                        if( !( typeof aSoundNotePlayReport._v_OctaveNumber === 'undefined') && !( aSoundNotePlayReport._v_OctaveNumber === null)) {
                                            aNoteName += aSoundNotePlayReport._v_OctaveNumber;
                                        }
                                        if( !( typeof aSoundNotePlayReport._v_NoteName === 'undefined') && !( aSoundNotePlayReport._v_NoteName === null)) {
                                            aNoteName += aSoundNotePlayReport._v_NoteName;
                                        }
                                        if( aNoteName) {
                                            someNoteNames.push( aNoteName);
                                        }
                                    }

                                }
                                someNotesPlayed = someNoteNames.join( ' ');
                            }
                        }
                    }



                    anIsYield              = this._v_ChangeNode_Iteration._v_Change_Yield                          ? true: false;
                    anIsYieldMessage       = this._v_ChangeNode_Iteration._v_Change_Yield_MessageChannel_Post      ? true: false;
                    if( anIsYieldMessage) {
                        aYieldMode = String.fromCharCode(0x2326); /* ERASE TO THE RIGHT */
                        aYieldMessageFulfilled = this._v_ChangeNode_Iteration._v_Change_Yield_MessageChannel_Fulfilled  ? true: false;
                        if ( aYieldMessageFulfilled) {
                            aYieldMode += String.fromCharCode(0x2718); /* HEAVY BALLOT X */
                            aYieldMessageFulfilledMillis = this._v_ChangeNode_Iteration._v_Change_Yield_MessageChannel_Fulfilled._v_StartMillis;
                            aYieldFulfilledMillis = aYieldMessageFulfilledMillis;
                        }
                        else {
                            aYieldMode += String.fromCharCode(0x274D);  /* SHADOWED WHITE CIRCLE */
                        }

                        if( this._v_ChangeNode_Iteration._v_Change_Yield_MessageChannel_Post._v_ParentChange) {
                            aYieldParentKind = this._v_ChangeNode_Iteration._v_Change_Yield_MessageChannel_Post._v_ParentChange._v_Kind;
                            aYieldReason = (aYieldParentKind === 'Yield.TooMuchTime') ? String.fromCharCode(0x231A)    /* WATCH */ : (
                                (aYieldParentKind === 'Yield.TooManyIterations') ? String.fromCharCode(0x266F) : '?'); /* MUSIC SHARP SIGN */
                        }

                    }

                    anIsYieldTimeout       = this._v_ChangeNode_Iteration._v_Change_Yield_Timeout_Set ? true: false;
                    if( anIsYieldTimeout) {
                        aYieldMode = String.fromCharCode(0x231B); /* HOURGLASS */
                        aYieldTimeoutFulfilled = this._v_ChangeNode_Iteration._v_Change_Yield_Timeout_Fulfilled ? true: false;
                        if ( aYieldTimeoutFulfilled) {
                            aYieldMode += String.fromCharCode(0x2718); /* HEAVY BALLOT X */
                            aYieldTimeoutFulfilledMillis = this._v_ChangeNode_Iteration._v_Change_Yield_Timeout_Fulfilled._v_StartMillis;
                            aYieldFulfilledMillis = aYieldTimeoutFulfilledMillis;
                        }
                        else {
                            aYieldMode += String.fromCharCode(0x274D);  /* SHADOWED WHITE CIRCLE */
                        }

                        if( this._v_ChangeNode_Iteration._v_Change_Yield_Timeout_Set._v_ParentChange) {
                            aYieldParentKind = this._v_ChangeNode_Iteration._v_Change_Yield_Timeout_Set._v_ParentChange._v_Kind;
                            aYieldReason = (aYieldParentKind === 'Yield.TooMuchTime') ? String.fromCharCode(0x231A)    /* WATCH */ : (
                                (aYieldParentKind === 'Yield.TooManyIterations') ? String.fromCharCode(0x266F) : '?'); /* MUSIC SHARP SIGN */
                        }
                    }




                    anIsWaitForWork          = this._v_ChangeNode_Iteration._v_Change_WaitForWork                 ? true: false;
                    aWaitForWorkTimeoutSet   = this._v_ChangeNode_Iteration._v_Change_WaitForWork_Timeout_Set     ? true: false;
                    aWaitForWorkFulfilled    = this._v_ChangeNode_Iteration._v_Change_WaitForWork_Timeout_Fulfilled  ? true: false;
                    if ( aWaitForWorkFulfilled) {
                        aWaitForWorkFulfilledMillis = this._v_ChangeNode_Iteration._v_Change_WaitForWork_Timeout_Fulfilled._v_StartMillis;
                        if( aWaitForWorkFulfilledMillis) {} /* CQT */
                    }
                    aWaitForWorkStatus =  aWaitForWorkTimeoutSet ? String.fromCharCode(0x231A): '?'; /* WATCH */

                    if( aWaitForWorkFulfilled) {
                        aWaitForWorkStatus +=  'X';
                    }

                    var aNumActions = 0 + ( anIsWakeUp ? 1 : 0) +
                        ( anIsConduct ? 1 : 0) +
                        ( anIsYield ? 1 : 0) +
                        ( anIsWaitForWork ? 1 : 0);

                    var aHei_LiveBox = _cHei_LiveBox;
                    var aHei_Total = _cTop_LiveBox + _cHei_Millis + 2;

                    if( aNumActions > 1) {
                        aHei_LiveBox = aHei_LiveBox * aNumActions;
                        aHei_Total = _cTop_LiveBox + aHei_LiveBox + 2;
                    }

                    var aTopAction = _cTop_Action;




                    aHasWakeUpInterest = this._v_ChangeNode_Iteration._v_Change_WakeUpInterest  ? true: false;
                    if( aHasWakeUpInterest) {
                        if( this._v_ChangeNode_Iteration._v_Change_WakeUpInterest._v_Data &&
                            this._v_ChangeNode_Iteration._v_Change_WakeUpInterest._v_Data._v_Interest) {

                            aWakeUpInterestKind = this._v_ChangeNode_Iteration._v_Change_WakeUpInterest._v_Data._v_Interest._v_InterestKind;
                            if( aWakeUpInterestKind === 'EchoAudio') {
                                aWakeUpInterestKind = String.fromCharCode(0x231B) + /* HOURGLASS */
                                    String.fromCharCode(0x266B); /* BEAMED EIGHTH NOTES */
                            }
                            else {
                                if( aWakeUpInterestKind === 'EchoAudio-drop') {
                                    aWakeUpInterestKind = String.fromCharCode(0x231B) + /* HOURGLASS */
                                        String.fromCharCode(0x266B) + 'x'; /* BEAMED EIGHTH NOTES */
                                }
                                else {
                                    if( aWakeUpInterestKind === 'DeltaBroker') {
                                        aWakeUpInterestKind = String.fromCharCode(0x231B) + /* HOURGLASS */
                                            String.fromCharCode(0x0394); /* GREEK CAPITAL LETTER DELTA */

                                        if ( this._v_ChangeNode_Iteration._v_Change_WakeUp &&
                                            this._v_ChangeNode_Iteration._v_Change_WakeUp._v_Data) {

                                            aNumInterestDeltas = this._v_ChangeNode_Iteration._v_Change_WakeUp._v_Data._v_NumDeltas;
                                            someInterestDeltaKinds = this._v_ChangeNode_Iteration._v_Change_WakeUp._v_Data._v_SomeDeltaKinds;
                                            someInterestDeltaKindSymbols = [];

                                            aNumDeltaKinds = someInterestDeltaKinds.length;
                                            for ( anIndex = 0; anIndex < aNumDeltaKinds; anIndex++) {
                                                aDeltaKind = someInterestDeltaKinds[anIndex];
                                                if ( aDeltaKind) {
                                                    aDeltaKindSymbol = _cDeltaKindsToSymbolsMap[aDeltaKind];
                                                    if( aDeltaKindSymbol) {
                                                        someInterestDeltaKindSymbols.push( aDeltaKindSymbol);
                                                    }
                                                }

                                            }
                                            if ( !someDeltaKindSymbols.length) {
                                                someDeltaKindSymbols = null;
                                            }
                                            else {
                                                someDeltaKindSymbols = someDeltaKindSymbols.join(' ');
                                            }
                                        }
                                    }
                                }
                            }
                            var aWakeUpScheduleClock = this._v_ChangeNode_Iteration._v_Change_WakeUpInterest._v_Data._v_Interest._v_WakeUpScheduleClock;
                            if( aWakeUpScheduleClock) {
                                aWakeUpScheduleMillis = m_Clock.fMillisLapsed( thePerformance._v_StartClock, aWakeUpScheduleClock);

                                if( aHasBegin) {
                                    if( !( aBeginMillis === null)) {
                                        aWakeUpScheduleFromThisIterationBeginMillis = aWakeUpScheduleMillis - aBeginMillis;
                                    }
                                }
                            }
                        }
                    }




                    aHasWakeUpInterestDropped = this._v_ChangeNode_Iteration._v_Change_WakeUpInterestDropped  ? true: false;
                    if( aHasWakeUpInterestDropped) {
                        if( this._v_ChangeNode_Iteration._v_Change_WakeUpInterestDropped._v_Data &&
                            this._v_ChangeNode_Iteration._v_Change_WakeUpInterestDropped._v_Data._v_Interest) {

                            aWakeUpInterestDroppedKind = this._v_ChangeNode_Iteration._v_Change_WakeUpInterestDropped._v_Data._v_Interest._v_InterestKind;
                            if( aWakeUpInterestDroppedKind === 'EchoAudio') {
                                aWakeUpInterestDroppedKind = String.fromCharCode(0x23DA) + /*EARTH GROUND */
                                    String.fromCharCode(0x266B); /* BEAMED EIGHTH NOTES */
                            }
                            else {
                                if( aWakeUpInterestDroppedKind === 'EchoAudio-drop') {
                                    aWakeUpInterestDroppedKind = String.fromCharCode(0x231B) + /* HOURGLASS */
                                        String.fromCharCode(0x266B) + 'x'; /* BEAMED EIGHTH NOTES */
                                }
                                else {
                                    if( aWakeUpInterestDroppedKind === 'DeltaBroker') {
                                        aWakeUpInterestDroppedKind = String.fromCharCode(0x23DA) + /*EARTH GROUND */
                                            String.fromCharCode(0x0394); /* GREEK CAPITAL LETTER DELTA */
                                    }
                                }
                            }
                            var aWakeUpDroppedScheduleClock = this._v_ChangeNode_Iteration._v_Change_WakeUpInterestDropped._v_Data._v_Interest._v_WakeUpScheduleClock;
                            if( aWakeUpDroppedScheduleClock) {
                                aWakeUpDroppedScheduleMillis = m_Clock.fMillisLapsed( thePerformance._v_StartClock, aWakeUpDroppedScheduleClock);

                                if( aHasBegin) {
                                    if( !( aBeginMillis === null)) {
                                        aWakeUpDroppedScheduleFromThisIterationBeginMillis = aWakeUpDroppedScheduleMillis - aBeginMillis;
                                    }
                                }
                            }
                        }
                    }

                }



                this._v_DisplayList = [];

                this._v_DisplayList.push({
                    _v_2DContext_Calls: [
                        [ 'space', [ 0, aHei_Total]]
                    ]
                });

                this._v_DisplayList.push({
                    _v_2DContext_Properties: [
                        [ 'strokeStyle', '#808080'],
                        [ 'lineWidth', 1]
                    ],
                    _v_2DContext_Calls: [
                        [ 'hLine', [ 0, 0, _cRight]]
                    ]
                });



                if ( !( aDurationMillis === null)) {
                    this._v_DisplayList.push({
                        _v_2DContext_Properties: [
                            [ 'fillStyle', '#FFFFFF']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillRect', [ _cCol_DurationMillis, _cTop_LiveBox, _cWid_DurationMillis, _cHei_Millis]]
                        ]
                    });
                    if( aDurationMillis > 0) {
                        this._v_DisplayList.push({
                            _v_2DContext_Properties: [
                                [ 'font',      '10px Arial'],
                                [ 'fillStyle', '#000000']
                            ],
                            _v_2DContext_Calls: [
                                [ 'fillText', [ '' + aDurationMillis, _cCol_DurationMillis, _cTextTop, _cWid_DurationMillis, 'right']]
                            ]
                        });
                    }
                }
                else {
                    this._v_DisplayList.push({
                        _v_2DContext_Properties: [
                            [ 'strokeStyle', '#FFFFFF'],
                            [ 'lineWidth', 1]
                        ],
                        _v_2DContext_Calls: [
                            [ 'strokeRect', [ _cCol_DurationMillis, _cTop_LiveBox, _cWid_DurationMillis, _cHei_Millis]]
                        ]
                    });
                }

                if ( !( aBeginMillis === null)) {
                    this._v_DisplayList.push({
                        _v_2DContext_Properties: [
                            [ 'fillStyle', '#FFFFFF']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillRect', [ _cCol_BeginMillis, _cTop_LiveBox, _cWid_BeginMillis, _cHei_Millis]]
                        ]
                    });
                    if( aBeginMillis > 0) {
                        this._v_DisplayList.push({
                            _v_2DContext_Properties: [
                                [ 'font',      '10px Arial'],
                                [ 'fillStyle', '#000000']
                            ],
                            _v_2DContext_Calls: [
                                [ 'fillText', [ '' + aBeginMillis, _cCol_BeginMillis, _cTextTop, _cWid_BeginMillis, 'right']]
                            ]
                        });
                    }
                }
                else {
                    this._v_DisplayList.push({
                        _v_2DContext_Properties: [
                            [ 'strokeStyle', '#FFFFFF']
                        ],
                        _v_2DContext_Calls: [
                            [ 'strokeRect', [ _cCol_BeginMillis, _cTop_LiveBox, _cWid_BeginMillis, _cHei_Millis]]
                        ]
                    });
                }

                if ( !( anEndMillis === null)) {
                    this._v_DisplayList.push({
                        _v_2DContext_Properties: [
                            [ 'fillStyle', '#FFFFFF']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillRect', [ _cCol_EndMillis, _cTop_LiveBox, _cWid_EndMillis, _cHei_Millis]]
                        ]
                    });
                    if( (anEndMillis > 0) && (!( anEndMillis === aBeginMillis))) {
                        this._v_DisplayList.push({
                            _v_2DContext_Properties: [
                                [ 'font',      '10px Arial'],
                                [ 'fillStyle', '#000000']
                            ],
                            _v_2DContext_Calls: [
                                [ 'fillText', [ '' + anEndMillis, _cCol_EndMillis, _cTextTop, _cWid_EndMillis, 'right']]
                            ]
                        });
                    }
                }
                else {
                    this._v_DisplayList.push({
                        _v_2DContext_Properties: [
                            [ 'strokeStyle', '#FFFFFF'],
                            [ 'lineWidth', 1]
                        ],
                        _v_2DContext_Calls: [
                            [ 'strokeRect', [ _cCol_EndMillis, _cTop_LiveBox, _cWid_EndMillis, _cHei_Millis]]
                        ]
                    });
                }


                this._v_DisplayList = this._v_DisplayList.concat([
                    {
                        _v_2DContext_Properties: [
                            [ 'fillStyle', ( aHasBegin ? ( aHasEnd ? '#008000' : '#FFFFFF') : '#FFFF00')]
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillRect', [ _cCol_LiveBox, _cTop_LiveBox, _cWid_LiveBox, aHei_LiveBox]]
                        ]
                    },
                    {
                        _v_2DContext_Properties: [
                            [ 'font',      '10px Arial'],
                            [ 'fillStyle', '#FFFFFF']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillText', [ String.fromCharCode(0x21B7), _cCol_Type,    _cTextTop]] /* CLOCKWISE TOP SEMICIRCLE ARROW */

                        ]
                    }
                ]);


                if( (!( aNumErrors === null)) && aNumErrors) {
                    this._v_DisplayList.push({
                        _v_2DContext_Properties: [
                            [ 'font',      '10px Arial'],
                            [ 'fillStyle', '#FFFFFF']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillText', [ String.fromCharCode(0x26A0) + aNumErrors,    /* WARNING SIGN */
                                _cCol_NumErrors, _cTextTop]]

                        ]
                    })
                }



                if( aHasNotesJustPlayed) {
                    if( aNumNotesJustPlayed) {
                        this._v_DisplayList.push({
                            _v_2DContext_Properties: [
                                [ 'font',      '10px Arial'],
                                [ 'fillStyle', '#FFFFFF']
                            ],
                            _v_2DContext_Calls: [
                                [ 'fillText', [ String.fromCharCode(0x266A) + aNumNotesJustPlayed, 	 /* EIGHTH NOTE */
                                    _cCol_NumNotesJust, aTopAction, _cWid_NumNotesJust]]
                            ]
                        });
                    }

                    if( someNotesJustPlayed) {
                        this._v_DisplayList.push({
                            _v_2DContext_Properties: [
                                [ 'font',      '10px Arial'],
                                [ 'fillStyle', '#FFFFFF']
                            ],
                            _v_2DContext_Calls: [
                                [ 'fillText', [ someNotesJustPlayed, _cCol_NotesJust, aTopAction, _cWid_NotesJust]]
                            ]
                        });
                    }
                }



                if( aHasSoundNotesPlayed) {
                    if( aNumNotesPlayed) {
                        this._v_DisplayList.push({
                            _v_2DContext_Properties: [
                                [ 'font',      '10px Arial'],
                                [ 'fillStyle', '#FFFFFF']
                            ],
                            _v_2DContext_Calls: [
                                [ 'fillText', [ String.fromCharCode(0x266C) + aNumNotesPlayed,
                                    _cCol_NumNotes, aTopAction, _cWid_NumNotes]] /* BEAMED SIXTEENTH NOTES */
                            ]
                        });
                    }

                    if( someNotesPlayed) {
                        this._v_DisplayList.push({
                            _v_2DContext_Properties: [
                                [ 'font',      '10px Arial'],
                                [ 'fillStyle', '#FFFFFF']
                            ],
                            _v_2DContext_Calls: [
                                [ 'fillText', [ someNotesPlayed, _cCol_Notes, aTopAction, _cWid_Notes]]
                            ]
                        });
                    }
                }




                if( aHasWakeUpInterest) {
                    this._v_DisplayList.push({
                        _v_2DContext_Properties: [
                            [ 'font',      '10px Arial'],
                            [ 'fillStyle', '#FFFFFF']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillText', [ aWakeUpInterestKind, _cCol_WUpInterest, aTopAction]],
                            [ 'fillText', [ '' + aWakeUpScheduleMillis, _cCol_WUpInterest_Millis, aTopAction]],
                            [ 'fillText', [ '' + aWakeUpScheduleFromThisIterationBeginMillis, _cCol_WUpInterest_MillisThisIter, aTopAction]]
                        ]
                    });

                    if( !(aNumInterestDeltas === null)) {
                        this._v_DisplayList.push({
                            _v_2DContext_Properties: [
                                [ 'font',      '10px Arial'],
                                [ 'fillStyle', '#FFFFFF']
                            ],
                            _v_2DContext_Calls: [
                                [ 'fillText', [ ('' + aNumInterestDeltas) + ' ' +
                                    String.fromCharCode(0x231B) +      /* HOURGLASS */
                                    String.fromCharCode(0x0394) + 's', /* GREEK CAPITAL LETTER DELTA */
                                    _cCol_InterestNumDeltas, aTopAction]]
                            ]
                        });
                    }

                    if( (!(someInterestDeltaKindSymbols === null)) && someInterestDeltaKindSymbols.length) {
                        this._v_DisplayList.push({
                            _v_2DContext_Properties: [
                                [ 'font',      '10px Arial'],
                                [ 'fillStyle', '#FFFFFF']
                            ],
                            _v_2DContext_Calls: [
                                [ 'fillText', [ someInterestDeltaKindSymbols, _cCol_InterestDeltaKinds, aTopAction]]
                            ]
                        });
                    }
                }



                if( aHasWakeUpInterestDropped) {
                    this._v_DisplayList.push({
                        _v_2DContext_Properties: [
                            [ 'font',      '10px Arial'],
                            [ 'fillStyle', '#FFFFFF']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillText', [ aWakeUpInterestDroppedKind, _cCol_WUpInterestDropped, aTopAction]],
                            [ 'fillText', [ '' + aWakeUpDroppedScheduleMillis, _cCol_WUpInterest_MillisDropped, aTopAction]],
                            [ 'fillText', [ '' + aWakeUpDroppedScheduleFromThisIterationBeginMillis, _cCol_WUpInterest_MillisThisIterDropped, aTopAction]]
                        ]
                    });
                }




                if( anIsWakeUp) {
                    this._v_DisplayList.push({
                            _v_2DContext_Properties: [
                                [ 'font',      '10px Arial'],
                                [ 'fillStyle', '#FFFFFF']
                            ],
                            _v_2DContext_Calls: [
                                [ 'fillText', [ aWakeUpKind, _cCol_WakeUp, aTopAction]]
                            ]
                    });

                    if( !(aNumDeltas === null)) {
                        this._v_DisplayList.push({
                            _v_2DContext_Properties: [
                                [ 'font',      '10px Arial'],
                                [ 'fillStyle', '#FFFFFF']
                            ],
                            _v_2DContext_Calls: [
                                [ 'fillText', [ ('' + aNumDeltas) + ' ' +
                                    String.fromCharCode(0x23DA) + /*EARTH GROUND */
                                    String.fromCharCode(0x0394) + 's', /* GREEK CAPITAL LETTER DELTA */
                                    _cCol_NumDeltas, aTopAction]]
                            ]
                        });
                    }

                    if( (!(someDeltaKindSymbols === null)) && someDeltaKindSymbols.length) {
                        this._v_DisplayList.push({
                            _v_2DContext_Properties: [
                                [ 'font',      '10px Arial'],
                                [ 'fillStyle', '#FFFFFF']
                            ],
                            _v_2DContext_Calls: [
                                [ 'fillText', [ someDeltaKindSymbols, _cCol_DeltaKinds, aTopAction]]
                            ]
                        });
                    }
                    aTopAction += _cHei_Action;
                }


                if( anIsConduct) {
                    this._v_DisplayList.push({
                        _v_2DContext_Properties: [
                            [ 'font',      '10px Arial'],
                            [ 'fillStyle', '#FFFFFF']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillText', [ String.fromCharCode(0x2230), _cCol_Conduct, aTopAction]], /* VOLUME INTEGRAL */
                            [ 'fillText', [ aConductChantUID, _cCol_ChantUID, aTopAction]]
                        ]
                    });
                    aTopAction += _cHei_Action;
                }







                if( anIsYield) {

                    var someCalls = [
                        [ 'fillText', [ String.fromCharCode(0x23CF) + aYieldReason, _cCol_Yield, aTopAction]] /* EJECT SYMBOL */
                    ];
                    if( aYieldMode) {
                        someCalls.push( [ 'fillText', [ aYieldMode, _cCol_Yield_Mode, aTopAction]]);
                    }
                    if( aYieldFulfilledMillis) {
                        someCalls.push( [ 'fillText', [ '' + aYieldFulfilledMillis, _cCol_YieldFFMillis, aTopAction]]);
                    }
                    this._v_DisplayList.push({
                        _v_2DContext_Properties: [
                            [ 'font',      '10px Arial'],
                            [ 'fillStyle', '#FFFFFF']
                        ],
                        _v_2DContext_Calls: someCalls
                    });
                    aTopAction += _cHei_Action;
                }




                if( anIsWaitForWork) {
                    this._v_DisplayList.push({
                        _v_2DContext_Properties: [
                            [ 'font',      '10px Arial'],
                            [ 'fillStyle', '#FFFFFF']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillText', [ 'WFW ', _cCol_W4W, aTopAction]],
                            [ 'fillText', [ aWaitForWorkStatus, _cCol_W4W_Status, aTopAction]]
                        ]
                    });
                    aTopAction += _cHei_Action;
                    if( aTopAction) {} /* CQT */
                }



            }

            return null;

        })._sName( aPrototype._ModuleName, '_pComposeDisplayList')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',  ['Type', 'Performance'], ['sameas', '_v_Performance']],
            [ 'the2DContext',    ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pComposeDisplayList._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype._pComposeDisplayList._doc);
        }









        return aPrototype;
    })();
    if(m_Instrument.cDocFuncs) {
        _prot_IterationView.displayName='Prototype _prot_IterationView';
        _privateMembers.push(_prot_IterationView);
        _doc+=('\n\n' + _prot_IterationView._doc);
    }






    var f_Constructor_IterationView = (function( theCtxt, thePerformance, theLoopView, theChangeNode_Iteration) {

        this._v_Prot_IterationView       = _prot_IterationView;
        this._v_Prot                     = this._v_Prot_IterationView;
        this._v_ParentProt_IterationView = this._v_Prot_IterationView._v_Prot_CompositeView;

        this._v_Type = 'IterationView';

        this._v_Performance =     thePerformance;

        this._pOpenView( theCtxt, theLoopView, theChangeNode_Iteration);

    })._sName( _displayName, 'f_Constructor_IterationView')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',          ['Type', 'Performance']],
        [ 'theLoopView',             ['Type', 'LoopView']],
        [ 'theChangeNode_Iteration', ['Type', 'ChangeNode_Iteration']]
    ]);
    f_Constructor_IterationView.prototype = _prot_IterationView;
    _publicMembers.push(f_Constructor_IterationView);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_IterationView._sDesc('Factory to create new instances of IterationView.');
        _doc+=('\n\n' + f_Constructor_IterationView._doc);
    }






    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        f_Constructor_IterationView:  f_Constructor_IterationView
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ViewIteration')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Clock', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_ViewComposite', 'm_ViewError'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Clock, m_Instrument,
        m_Trace, m_Log, m_ViewComposite, m_ViewError) {

            return aM_IterationView(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Clock, m_Instrument,
                m_Trace, m_Log, m_ViewComposite,m_ViewError);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_IterationView.displayName]=aM_IterationView(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Clock'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_ViewComposite'],
            gChoirJS_Modules['m_ViewError']
        );
    }
    else {
        ChoirJS_Module_IterationView= aM_IterationView(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Clock,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_CompositeView,
            ChoirJS_Module_ErrorView
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ViewIteration')
}

