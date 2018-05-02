/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ViewComposite')
}



var aM_CompositeView = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
    m_Instrument, m_Trace, m_Log, m_View, m_Geometry) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ViewComposite')
    }

    if( m_Log) {}


    var _displayName = 'm_ViewComposite';

    var _doc = _displayName +' module. Functions to visualize received Changes in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';





    _doc+=('\n\nPrototype and Factory for CompositeView_Simple:');


    var _prot_CompositeView = (function() {

        var aPrototype = new m_View.SubProt_View();

        aPrototype._v_Type = 'CompositeView';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;




        aPrototype._pOpenView =  (function( theCtxt) {

            this._v_ParentProt_CompositeView._pOpenView.apply( this, [theCtxt]);

            this._v_ChildrenViews = [];

            this._v_LastRenderReport = null;


            return null;

        })._sName( aPrototype._ModuleName, '_pOpenView')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        aPrototype._privateMembers.push( aPrototype._pOpenView);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pOpenView._sDesc(
            'Initialize this instance of CompositeView');

            aPrototype._doc+=('\n\n' + aPrototype._pOpenView._doc);
        }







        aPrototype.pAddChildView =  (function( theCtxt, thePerformance, theChildView) {

            if( thePerformance) {}

            this._v_ChildrenViews.push( theChildView);

            this.pInvalidate( theCtxt);

            return null;

        })._sName( aPrototype._ModuleName, 'pAddChildView')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance', ['Type', 'Performance'], ['sameas', '_v_Performance']],
            [ 'theChildView',   ['object']] /* ACV OJO Defense TODO should be one of the view subtypes */
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pAddChildView._sDesc(
            'Add the supplied view as one of the children of this view, and invalidate this view.');

            aPrototype._doc+=('\n\n' + aPrototype.pAddChildView._doc);
        }








        aPrototype.pInvalidate = (function( theCtxt) {

            this._v_ParentProt_CompositeView.pInvalidate.apply( this, [theCtxt]);


            if( this._v_ParentView) {
                this._v_ParentView.pInvalidate( theCtxt);
            }


            this._v_RenderReport = null;


            if( this._v_LastRenderReport &&
                this._v_LastRenderReport._v_Condition &&
                this._v_LastRenderReport._v_Bounds &&
                this._v_LastRenderReport._v_OriginInParent &&
                this._v_LastRenderReport._v_Backgrounds) {

                if( ['Straddle',
                    'StraddleBefore',
                    'FullDisplay',
                    'StraddleAfter'].indexOf( this._v_LastRenderReport._v_Condition) >= 0) {

                    this._pRegisterDamage( theCtxt, this);
                }
            }

            return null;

        })._sName( aPrototype._ModuleName, 'pInvalidate')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pInvalidate._sDesc(
            'The View is no longer current with the model. ' +
            'The view shall be re-built and re-rendered upon the next rendering, ' +
            'and the area occupied in the last rendering, if not empty, shall be filled with backgrounds.');

            aPrototype._doc+=('\n\n' + aPrototype.pInvalidate._doc);
        }








        aPrototype._pRegisterDamage = (function( theCtxt, theDamage) {

            if( this._v_ParentView) {
                this._v_ParentView._pRegisterDamage( theCtxt, theDamage);
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pRegisterDamage')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theDamage',   ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pRegisterDamage._sDesc(
            'Register in the Chronograph View a view as damaged, to be filled with backgrounds ' +
            'on the beginning of the next display.');

            aPrototype._doc+=('\n\n' + aPrototype._pRegisterDamage._doc);
        }












        var _fNewVoidRenderReport =  (function() {
            return  {

                _v_Type: 'RenderReport',

                _v_ViewPortInParent:   null,
                _v_OriginInParent:     null,
                _v_Backgrounds:        null,
                _v_ReverseOrder:       false,

                _v_Condition:          '',
                _v_AnyIncompleteChild: false,
                _v_OwnBounds:          null,
                _v_Bounds:             null

        };
        })._sName( aPrototype._ModuleName, '_fNewVoidRenderReport')._sTrace(false);
        if(m_Instrument.cDocFuncs) {
            _fNewVoidRenderReport._sDesc(
            'Create an instance of RenderReport');
        }






        aPrototype.fRenderAndReport = (function( theCtxt, thePerformance, the2DContext,
                                                 theViewPortInParent, theOriginInParent,
                                                 theParentBackgrounds, theReverseOrder) {

            if(aPrototype.fRenderAndReport._Trace) { m_Trace.sThis(this);}

            if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
            'Check for boldly insufficient conditions to render anything at all from this view.');}

            if( theViewPortInParent.fIsEmptyRect()) {

                if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                'No room in ViewPort to display anything.');}

                this._v_RenderReport= _fNewVoidRenderReport();
                this._v_RenderReport._v_ViewPortInParent = theViewPortInParent.fCopy();
                this._v_RenderReport._v_OriginInParent   = theOriginInParent.fCopy();
                this._v_RenderReport._v_Bounds = m_Geometry.fRectExtent( 0, 0, 0, 0);
                this._v_RenderReport._v_OwnBounds = m_Geometry.fRectExtent( 0, 0, 0, 0);

                this._v_RenderReport._v_Condition ='NoRoomToDisplay';

                this._v_LastRenderReport = this._v_RenderReport;

                return this._v_RenderReport;
            }



            if( theOriginInParent._v_Y >= theViewPortInParent._v_CornerY) {

                if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                'Falls completely after the ViewPort bottom Y.');}

                this._v_RenderReport= _fNewVoidRenderReport();
                this._v_RenderReport._v_ViewPortInParent = theViewPortInParent.fCopy();
                this._v_RenderReport._v_OriginInParent   = theOriginInParent.fCopy();
                this._v_RenderReport._v_Bounds = m_Geometry.fRectExtent( 0, 0, 0, 0);
                this._v_RenderReport._v_OwnBounds = m_Geometry.fRectExtent( 0, 0, 0, 0);

                this._v_RenderReport._v_Condition ='FallsCompletelyAfter';

                this._v_LastRenderReport = this._v_RenderReport;

                return this._v_RenderReport;
            }







            if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
            'Check conditions same as in the last rendering, if any still valid, ' +
            'when it is not needed to render anything at all from this view.');}

            if( this._v_RenderReport) {
                if( this._v_RenderReport._v_ViewPortInParent &&
                    this._v_RenderReport._v_ViewPortInParent.fSameAs( theViewPortInParent) &&
                    this._v_RenderReport._v_OriginInParent &&
                    this._v_RenderReport._v_OriginInParent.fSameAs( theOriginInParent)) {

                 // console.log('....Trying to reuse previous RenderReport with condition ' + this._v_RenderReport._v_Condition + ' at ' + this._v_Type + ' ' + this._v_UID);

                    if( [
                       'NoRoomToDisplay',
                       'FallsCompletelyBefore',
                       'FallsCompletelyAfter'].indexOf( this._v_RenderReport._v_Condition) >= 0) {

                        if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                        'Reusing _v_RenderReport for View that is hidden with _v_Condition ' +
                        'NoRoomToDisplay or FallsCompletelyBefore or FallsCompletelyAfter.');}

                        this._v_Performance._v_ACVOJO_NumSaveDisplays += 1;

                        // console.log('REUSED previous RenderReport with condition ' + this._v_RenderReport._v_Condition + ' at ' + this._v_Type + ' ' + this._v_UID);

                        return this._v_RenderReport;
                    }

                    if( this._v_Performance._v_SchedulePaints) {
                        return this._v_RenderReport;
                    }

                }
            }








            if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
            'Snapshot initial rendering values into report, including relevant received arguments.');}

            this._v_RenderReport= _fNewVoidRenderReport();
            this._v_RenderReport._v_ViewPortInParent =  theViewPortInParent.fCopy();
            this._v_RenderReport._v_OriginInParent   =  theOriginInParent.fCopy();
            this._v_RenderReport._v_Bounds =            m_Geometry.fRectExtent( 0, 0, 0, 0);
            this._v_RenderReport._v_OwnBounds =         m_Geometry.fRectExtent( 0, 0, 0, 0);
            this._v_RenderReport._v_ReverseOrder =      theReverseOrder;

            this._v_RenderReport._v_Backgrounds = [
                [   [ [ 'translate', [ 0, 0]]],
                    this._fBackgroundDisplayList( theCtxt, thePerformance, the2DContext)
                ]
            ];
            if( theParentBackgrounds) {
                this._v_RenderReport._v_Backgrounds = this._v_RenderReport._v_Backgrounds.concat( theParentBackgrounds);
            }


            if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
            'Keep a reference to the render report in a separate variable that shall survive view invalidation,' +
            'to be used when filling Damage areas with backgrounds.');}

            this._v_LastRenderReport = this._v_RenderReport;









            if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
            'Render the body of the CompositeView, including: ' +
            'First, compute the extent of the area occupied by the own Display list of this view, if any. ' +
            'Paint the backgrounds of parent views and this view, in the extent of the own DisplayList of this view, if any. ' +
            'The own DisplayList of this view, if any. ' +
            'Its children views.');}

            the2DContext.save();
            try {



                if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                'Compute the Extent of the area occupied the DisplayList owned by this View, if any.');}

                var anOwnRectExtent = m_Geometry.fRectExtent( 0, 0, 0, 0);
                var anOwnDisplayListExtent = this._pPaintOwnDisplayListAndExtent( theCtxt, thePerformance, the2DContext, true); /* true for JustComputeExtent */
                var aHasOwnDisplayList = anOwnDisplayListExtent && !anOwnDisplayListExtent.fIsZeroPoint();
                if( aHasOwnDisplayList) {
                    anOwnRectExtent= m_Geometry.fRectExtent( 0, 0, anOwnDisplayListExtent._v_X, anOwnDisplayListExtent._v_Y);

                    if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                    'Paint the backgrounds of parent views and this view, ' +
                    'in the area of the extent occupied by the DisplayList owned by this View, if any.');}

                    this._pPaintBackgroundWithin( theCtxt, thePerformance, the2DContext,
                        theViewPortInParent, theOriginInParent, theParentBackgrounds, anOwnRectExtent);


                    if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                    'Paint the DisplayList owned by this View, if any, reporting the Extent of the area occupied.');}

                    if( !anOwnDisplayListExtent.fIsZeroPoint()) {
                        this._pPaintOwnDisplayListAndExtent( theCtxt, thePerformance, the2DContext, false); /* Go ahead and paint, not just compute extent. */
                    }
                }

                if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                'Snapshot in the render Report the values from the Extent of the own DisplayList of this view.');}

                this._v_RenderReport._v_Bounds    = anOwnRectExtent;
                this._v_RenderReport._v_OwnBounds = anOwnRectExtent.fCopy();








                if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                'Render children views of this view, if any.');}

                var aNumChidrenViews = 0;
                if( this._v_ChildrenViews) {
                   aNumChidrenViews = this._v_ChildrenViews.length;
                }




                if( !aNumChidrenViews) {

                    if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                    'The View has no ChildrenViews. No more to Render and Report. ' +
                    'Determine how well this view fits in the parent ViewPort ' +
                    'based solely on the extent of its own DisplayList, ' +
                    'and Return immediately.');}

                    this._pSetReportCondition_NoChildren( theCtxt, thePerformance, the2DContext);

                    return this._v_RenderReport;
                }







                if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                'Compute the ViewPort for childrens in the coordinate system of this view (the childrens parent).');}

                var aChildViewOrigin = m_Geometry.fPoint( 0, anOwnDisplayListExtent._v_Y);

                var aViewPortForChildren = m_Geometry.fRectExtent(
                    theViewPortInParent._v_OriginX - theOriginInParent._v_X,
                    theViewPortInParent._v_OriginY - theOriginInParent._v_Y,
                    theViewPortInParent._v_Width,
                    theViewPortInParent._v_Height
                );
                if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                'aViewPortForChildren=' + aViewPortForChildren.toString());}






                if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                'Iterate over ChildrenViews, accumulating their height ' +
                'and advancing by the predecessor height the origin for each successive children view. ' +
                'Compute the ViewPort for childrens in the coordinate system of this view (the childrens parent).');}



                for ( var anIndex = 0; anIndex < aNumChidrenViews; anIndex++) {

                    var aChildIndex =  anIndex; /* theReverseOrder ? ( aNumChidrenViews - anIndex - 1) : anIndex; */
                    aChildIndex =  theReverseOrder ? ( aNumChidrenViews - anIndex - 1) : anIndex;

                    var aChildView = this._v_ChildrenViews[ aChildIndex];

                    if ( aChildView) {

                        if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                        'Display the ChildView. ' +
                        'If the ChildView is not composite, then display the ChildView completely. ' +
                        'If the ChildView is composite, then display sub-views until a sub-view falls completely after the viewport. ' +
                        'Return a report with the assessment made during display of the ChildView, ' +
                        'stating whether at least a portion of the ChildView would show in the Canvas, ' +
                        'through the DisplayRegion height remaining for the ChildView to render, ' +
                        'or no portion of the ChildView shall show in the Chanvas, ' +
                        'because of either the whole ChildView falls before the ScrollY, ' +
                        'or the whole ChildView falls after the DisplayRegion bottom and the ScrollY.');}



                        if ( !this._fSetReportCondition_ForChild( theCtxt, thePerformance, the2DContext,
                            theParentBackgrounds, aChildView, aChildViewOrigin, aViewPortForChildren, theReverseOrder)) {

                            break;
                        }
                    }
                }





                if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                'Determine how well this view fits in the parent ViewPort ' +
                'based on the extent of its own DisplayList, and the extents of its children views, ' +
                'and Return immediately.');}

                this._pSetReportCondition_AfterChildren( theCtxt, thePerformance, the2DContext, this._v_RenderReport._v_AnyIncompleteChild);


                return this._v_RenderReport;

            }
            finally {
                the2DContext.restore();

                if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                'EXIT fRenderAndReport ' + this._v_Type + ' UID=' + this._v_UID + ' _v_RenderReport=\n' + JSON.stringify( this._v_RenderReport));}
            }

        })._sName( aPrototype._ModuleName, 'fRenderAndReport')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',         ['Type', 'Performance']],
            [ 'the2DContext',           ['object']],
            [ 'theViewPortInParent',    ['Type', 'Rect']],
            [ 'theOriginInParent',      ['Type', 'Point']],
            [ 'theParentBackgrounds',   ['object']],
            [ 'theReverseOrder',        ['boolean']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fRenderAndReport._sDesc(
            'Display the View, and return a report with an assessment of ' +
            'whether at least a portion of the View would show in the Canvas, ' +
            'through the ViewPort, or no portion of the ChildView shall show in the Chanvas.');
        }




















        aPrototype._pSetReportCondition_NoChildren = (function( theCtxt, thePerformance, the2DContext) {

            if( thePerformance) {}
            if( the2DContext) {}


            if(aPrototype._pSetReportCondition_NoChildren._Trace) { m_Trace.sThis(this);}


            if( ( this._v_RenderReport._v_OriginInParent._v_Y < this._v_RenderReport._v_ViewPortInParent._v_OriginY) &&
                ( ( this._v_RenderReport._v_OriginInParent._v_Y + this._v_RenderReport._v_Bounds._v_Height) >
                    this._v_RenderReport._v_ViewPortInParent._v_CornerY)) {

                if(aPrototype._pSetReportCondition_NoChildren._Trace) { m_Trace.pStep(
                'This View starts before and ends after the ViewPortInParent.');}

                this._v_RenderReport._v_Condition ='Straddle';

                return null;
            }


            if( ( this._v_RenderReport._v_OriginInParent._v_Y + this._v_RenderReport._v_Bounds ._v_Height) <
                this._v_RenderReport._v_ViewPortInParent._v_OriginY) {

                if(aPrototype._pSetReportCondition_NoChildren._Trace) { m_Trace.pStep(
                'This View Falls completely before the ViewPortInParent.');}

                this._v_RenderReport._v_Condition ='FallsCompletelyBefore';

                return null;
            }


            if( this._v_RenderReport._v_OriginInParent._v_Y > this._v_RenderReport._v_ViewPortInParent._v_CornerY) {

                if(aPrototype._pSetReportCondition_NoChildren._Trace) { m_Trace.pStep(
                'This View Falls completely after the ViewPortInParent.');}

                this._v_RenderReport._v_Condition ='FallsCompletelyAfter';

                return null;
            }


            if( this._v_RenderReport._v_OriginInParent._v_Y < this._v_RenderReport._v_ViewPortInParent._v_OriginY) {

                if(aPrototype._pSetReportCondition_NoChildren._Trace) { m_Trace.pStep(
                'Part of this View falls before current ViewPortInParent, and part is visible.');}

                this._v_RenderReport._v_Condition ='StraddleBefore';

                return null;
            }



            if( ( this._v_RenderReport._v_OriginInParent._v_Y + this._v_RenderReport._v_Bounds ._v_Height) >
                this._v_RenderReport._v_ViewPortInParent._v_CornerY) {

                if(aPrototype._pSetReportCondition_NoChildren._Trace) { m_Trace.pStep(
                'Part of this View falls after current ViewPortInParent, and part is visible.');}

                this._v_RenderReport._v_Condition ='StraddleAfter';

                return null;
            }


            this._v_RenderReport._v_Condition ='FullDisplay';

            return null;

        })._sName( aPrototype._ModuleName, '_pSetReportCondition_NoChildren')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',         ['Type', 'Performance']],
            [ 'the2DContext',           ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pSetReportCondition_NoChildren._sDesc(
            'The View has no ChildrenViews. No more to Render and Report.  Return immediately.' +
            'Determine how well it fits in the parent ViewPort based solely on the extent of its own DisplayList.' );
        }














        aPrototype._pSetReportCondition_AfterChildren = (function( theCtxt, thePerformance, the2DContext) {

            if( thePerformance) {}
            if( the2DContext) {}


            if(aPrototype._pSetReportCondition_AfterChildren._Trace) { m_Trace.sThis(this);}


            if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
            'After rendering the ChildrenViews of this view, ' +
            'Determine how well it fits in the parent ViewPort based solely on the extent of its own DisplayList.');}


            if( ( this._v_RenderReport._v_OriginInParent._v_Y < this._v_RenderReport._v_ViewPortInParent._v_OriginY) &&
                ( ( this._v_RenderReport._v_OriginInParent._v_Y + this._v_RenderReport._v_Bounds._v_Height) >
                    this._v_RenderReport._v_ViewPortInParent._v_CornerY)) {

                if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                'This View starts before and ends after the ViewPortInParent.');}

                this._v_RenderReport._v_Condition ='Straddle';

                return null;
            }




            if( !this._v_RenderReport._v_AnyIncompleteChild) {

                if( ( this._v_RenderReport._v_OriginInParent._v_Y + this._v_RenderReport._v_Bounds ._v_Height) <
                    this._v_RenderReport._v_ViewPortInParent._v_OriginY) {

                    if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                    'This View Falls completely before the ViewPortInParent.');}

                    this._v_RenderReport._v_Condition ='FallsCompletelyBefore';

                    return null;
                }


                if( ( this._v_RenderReport._v_OriginInParent._v_Y + this._v_RenderReport._v_Bounds ._v_Height) >
                    this._v_RenderReport._v_ViewPortInParent._v_CornerY) {

                    if(aPrototype.fRenderAndReport._Trace) { m_Trace.pStep(
                    'Part of this View falls after current ViewPortInParent, and part is visible.');}

                    this._v_RenderReport._v_Condition ='StraddleAfter';

                    return null;
                }



                this._v_RenderReport._v_Condition ='FullDisplay';

                return null;
            }



            this._v_RenderReport._v_Condition ='StraddleAfter';


            return null;

        })._sName( aPrototype._ModuleName, '_pSetReportCondition_AfterChildren')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',         ['Type', 'Performance']],
            [ 'the2DContext',           ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pSetReportCondition_AfterChildren._sDesc(
            'After rendering as many ChildrenViews as possible, with no more to Render and Report, shall Return immediately.' +
            'Determine how well it fits in the parent ViewPort based ' +
            'on the extent of its own DisplayList and the extents of its children views.' );
        }






















        aPrototype._fSetReportCondition_ForChild = (function( theCtxt, thePerformance, the2DContext, theParentBackgrounds,
                                                              theChildView, theChildViewOrigin, theViewPortForChildren,
                                                              theReverseOrder) {

            if( thePerformance) {}
            if( the2DContext) {}


            if(aPrototype._fSetReportCondition_ForChild._Trace) { m_Trace.sThis(this);}




            the2DContext.save();
            try {


                if(aPrototype._fSetReportCondition_ForChild._Trace) { m_Trace.pStep(
                'Translate local coordinate system to render the ChildView.');}

                the2DContext.translate.apply( the2DContext, theChildViewOrigin.fAsArgs());







                the2DContext.save();
                try {


                    if(aPrototype._fSetReportCondition_ForChild._Trace) { m_Trace.pStep(
                        'Assemble a Background list including the background of this view, ' +
                        'and the backgrounds of parent views (supplied as argument). ' +
                        'with a translation corresponding to the inverse of the child origin. ' +
                        'When the child needs to paint background, ' +
                        'it shall also paint the Background of this parent by applying first the translation,' +
                        'which undoes in the child context the translation made for the children' +
                        'See code and traces at the 2DContext.translate function invocation above. ');}

                    var someParentBackgroundsForChild = [
                        [   [ [ 'translate', [ 0 - theChildViewOrigin._v_X, 0 - theChildViewOrigin._v_Y]]],
                            this._fBackgroundDisplayList( theCtxt, thePerformance, the2DContext)
                        ]
                    ];
                    if( theParentBackgrounds) {
                        someParentBackgroundsForChild = someParentBackgroundsForChild.concat( theParentBackgrounds);
                    }






                    if(aPrototype._fSetReportCondition_ForChild._Trace) { m_Trace.pStep(
                        'Recurse into rendering the ChildView, and obtain a report.');}

                    var aRenderAtReport = theChildView.fRenderAndReport( theCtxt, thePerformance, the2DContext,
                        theViewPortForChildren.fCopy(),
                        theChildViewOrigin.fCopy(),
                        someParentBackgroundsForChild,
                        ( theReverseOrder ? true : false)
                    );
                    if( !aRenderAtReport) {
                        throw new m_Error.Error('ComputationError', {module: aPrototype._ModuleName, function: aPrototype._fSetReportCondition_ForChild, derivedProperty: 'fRenderAndReport', with: [aChildView]});
                    }
                    if( !aRenderAtReport._v_Condition) {
                        throw new m_Error.Error('ComputationResultFieldEmpty', {module: aPrototype._ModuleName, function: aPrototype._fSetReportCondition_ForChild, computation: 'fRenderAndReport',fieldName: '_v_Condition', with: [ aRenderAtReport, aChildView]});
                    }






                    if(aPrototype._fSetReportCondition_ForChild._Trace) { m_Trace.pStep(
                        'Decide how to proceed, or not, according to the render condition ' +
                            'reported by rendering the child view.');}


                    if( aRenderAtReport._v_Condition === 'NoRoomToDisplay') {

                        if(aPrototype._fSetReportCondition_ForChild._Trace) { m_Trace.pStep(
                            'Should have been avoided in previous iteration.' +
                                'Break the loop on ChildrenViews.');}

                        this._v_RenderReport._v_AnyIncompleteChild = true;

                        return false;
                    }



                    if( aRenderAtReport._v_Condition === 'FallsCompletelyBefore') {

                        if(aPrototype._fSetReportCondition_ForChild._Trace) { m_Trace.pStep(
                            'The whole ChildView falls completely before current ViewPortInParent. ' +
                                'Accumulate ChildView Heigth.' +
                                'Continue exploring ChildrenViews.');}

                        theChildViewOrigin.pAddY( aRenderAtReport._v_Bounds._v_CornerY);

                        this._v_RenderReport._v_Bounds.pAddHeight( aRenderAtReport._v_Bounds._v_CornerY);

                        return true;
                    }



                    if( aRenderAtReport._v_Condition === 'StraddleBefore') {

                        if(aPrototype._fSetReportCondition_ForChild._Trace) { m_Trace.pStep(
                            'Part of the ChildView falls before current ViewPortInParent, and part is visible. ' +
                                'Accumulate ChildView Heigth. ' +
                                'Continue exploring ChildrenViews.');}

                        theChildViewOrigin.pAddY( aRenderAtReport._v_Bounds._v_CornerY);

                        this._v_RenderReport._v_Bounds.pAddHeight( aRenderAtReport._v_Bounds._v_CornerY);

                        return true;
                    }



                    if( aRenderAtReport._v_Condition === 'Straddle') {

                        if(aPrototype._fSetReportCondition_ForChild._Trace) { m_Trace.pStep(
                            'The ChildView starts before and ends after the current ViewPortInParent. ' +
                                'The visible parts of the ChildView have been rendered. ' +
                                'No need to keep exploring any more ChildrenViews, because all shall fall completely after. ' +
                                'Break the loop on ChildrenViews.');}

                        this._v_RenderReport._v_Bounds.pAddHeight( aRenderAtReport._v_Bounds._v_CornerY);
                        this._v_RenderReport._v_AnyIncompleteChild = true;

                        return false;
                    }



                    if( aRenderAtReport._v_Condition === 'StraddleAfter') {

                        if(aPrototype._fSetReportCondition_ForChild._Trace) { m_Trace.pStep(
                            'Part of the ChildView is visible and part falls after current ViewPort . ' +
                                'The visible parts of the ChildView have been rendered. ' +
                                'No need to keep exploring any more ChildrenViews, because all shall fall completely after. ' +
                                'Break the loop on ChildrenViews.');}

                        this._v_RenderReport._v_Bounds.pAddHeight( aRenderAtReport._v_Bounds._v_CornerY);
                        this._v_RenderReport._v_AnyIncompleteChild = true;

                        return false;
                    }



                    if( aRenderAtReport._v_Condition === 'FallsCompletelyAfter') {

                        if(aPrototype._fSetReportCondition_ForChild._Trace) { m_Trace.pStep(
                            'The whole ChildView falls completely after current ScrollY. ' +
                                'No need to keep exploring any more ChildrenViews, because all shall fall completely after. ' +
                                'Break the loop on ChildrenViews.');}

                        this._v_RenderReport._v_Bounds.pAddHeight( aRenderAtReport._v_Bounds._v_CornerY);
                        this._v_RenderReport._v_AnyIncompleteChild = true;

                        return false;
                    }



                    if( aRenderAtReport._v_Condition === 'FullDisplay') {

                        if(aPrototype._fSetReportCondition_ForChild._Trace) { m_Trace.pStep(
                            'The whole ChildView has been completely displayed. ' +
                                'Continue exploring ChildrenViews.');}

                        theChildViewOrigin.pAddY( aRenderAtReport._v_Bounds._v_CornerY);

                        this._v_RenderReport._v_Bounds.pAddHeight( aRenderAtReport._v_Bounds._v_CornerY);

                        return true;
                    }



                    if(aPrototype._fSetReportCondition_ForChild._Trace) { m_Trace.pStep(
                    'Error: Unknown ChildView Render Report Condition.');}

                    throw m_Error.Error( 'Unsupported  aRenderAtReport._v_Condition = ' +
                        ( aRenderAtReport._v_Condition ? aRenderAtReport._v_Condition : '?'));

                }
                finally {
                    the2DContext.restore();
                }

            }
            finally {
                the2DContext.restore();
            }


        })._sName( aPrototype._ModuleName, '_fSetReportCondition_ForChild')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',         ['Type', 'Performance']],
            [ 'the2DContext',           ['object']],
            [ 'theParentBackgrounds',   ['object']],
            [ 'theChildView',           ['Type', 'ChronographView', 'LoopView', 'IterationView', 'ErrorView']],
            [ 'theChildViewOrigin',     ['Type', 'Point']],
            [ 'theViewPortForChildren', ['Type', 'Rect']],
            [ 'theReverseOrder',        ['boolean']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fSetReportCondition_ForChild._sDesc(
            'After rendering as many ChildrenViews as possible, with no more to Render and Report, shall Return immediately.' +
            'Determine how well it fits in the parent ViewPort based ' +
            'on the extent of its own DisplayList and the extents of its children views. ' +
            'Return true if additional Children Views may be explored, ' +
            'or false if a conclusion has been reached, such that no further Children Views shall be explored.' );
        }












        aPrototype._pPaintBackgroundWithin = (function( theCtxt, thePerformance, the2DContext,
                                                        theViewPortInParent, theOriginInParent,
                                                        theParentBackgrounds, theOwnBounds) {

            if( theViewPortInParent) {}
            if( theOriginInParent) {}
            if( theOwnBounds) {}

            if(aPrototype._pPaintBackgroundWithin._Trace) { m_Trace.sThis(this);}


            var anOwnBackgroundDisplayList = this._fBackgroundDisplayList( theCtxt, thePerformance, the2DContext);
            if ( anOwnBackgroundDisplayList && anOwnBackgroundDisplayList.length) {
                this._pPaintDisplayListAndExtent( theCtxt, thePerformance, the2DContext, anOwnBackgroundDisplayList);
            }


            var aNumParentBackgrounds = theParentBackgrounds.length;

            if( aNumParentBackgrounds) {

                the2DContext.save();
                try {

                    if(aPrototype._pPaintBackgroundWithin._Trace) { m_Trace.pStep(
                    'Clip the 2DContext to avoid painting outside the area reserved for this View.');}

                    the2DContext.beginPath();
                    the2DContext.rect.apply( the2DContext, [ theOwnBounds._v_OriginX, theOwnBounds._v_OriginY, theOwnBounds._v_Width, theOwnBounds._v_Height]);
                    the2DContext.clip();


                    for (var anIndexBackground = 0; anIndexBackground < aNumParentBackgrounds; anIndexBackground++) {

                        var aParentBackground = theParentBackgrounds[ anIndexBackground];
                        if ( aParentBackground && ( aParentBackground.length > 1)) {

                            var someTransforms = aParentBackground[ 0];
                            var aDisplayList   = aParentBackground[ 1];

                            if( someTransforms && someTransforms.length) {
                                this._pApplyTransforms( theCtxt, thePerformance, the2DContext, someTransforms);
                            }

                            if( aDisplayList && aDisplayList.length) {
                                this._pPaintDisplayListAndExtent( theCtxt, thePerformance, the2DContext, aDisplayList);
                            }
                        }
                    }

                }
                finally {
                    the2DContext.restore();
                }
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pPaintBackgroundWithin')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',         ['Type', 'Performance']],
            [ 'the2DContext',           ['object']],
            [ 'theViewPortInParent',    ['Type', 'Rect']],
            [ 'theOriginInParent',      ['Type', 'Point']],
            [ 'theParentBackgrounds',   ['object']],
            [ 'theOwnBounds',           ['Type', 'Rect']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pPaintBackgroundWithin._sDesc(
            'Paint in the 2D context the background form all parents, corresponding to the area of this view.');

            aPrototype._doc+=('\n\n' + aPrototype._pPaintBackgroundWithin._doc);
        }











        aPrototype._fBackgroundDisplayList = (function( theCtxt, thePerformance, the2DContext) {

            if(aPrototype._fBackgroundDisplayList._Trace) { m_Trace.sThis(this);}

            if( !this._v_BackgroundDisplayList) {

                this._pComposeBackgroundDisplayList( theCtxt, thePerformance, the2DContext);

                if( !this._v_BackgroundDisplayList) {
                    throw new m_Error.Error('DerivedPropertyError', {module: aPrototype._ModuleName, function: aPrototype._fBackgroundDisplayList, derivedProperty: '_pComposeDisplayList', with: [this]});
                }
            }

            return this._v_BackgroundDisplayList;

        })._sName( aPrototype._ModuleName, '_fBackgroundDisplayList')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',         ['Type', 'Performance']],
            [ 'the2DContext',           ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._fBackgroundDisplayList._sDesc(
            'Return or compute the primitives in the DisplayList of the background of this View.');

            aPrototype._doc+=('\n\n' + aPrototype._fBackgroundDisplayList._doc);
        }








        aPrototype._pComposeBackgroundDisplayList = (function( theCtxt, thePerformance, the2DContext) {

            if( thePerformance) {}
            if( the2DContext) {}


            if (!this._v_BackgroundDisplayList) {
                this._v_BackgroundDisplayList = [];
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pComposeBackgroundDisplayList')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',         ['Type', 'Performance']],
            [ 'the2DContext',           ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pComposeBackgroundDisplayList._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype._pComposeBackgroundDisplayList._doc);
        }



















        aPrototype.fComputeExtent = (function( theCtxt, thePerformance, the2DContext) {

            if(aPrototype.fComputeExtent._Trace) { m_Trace.sThis(this);}



            if(aPrototype.fComputeExtent._Trace) { m_Trace.pStep(
            'Compute the Extent of the area occupied the DisplayList owned by this View, if any.');}

            var anExtent = m_Geometry.fZeroPoint();

            var anOwnDisplayListExtent = this._pPaintOwnDisplayListAndExtent( theCtxt, thePerformance, the2DContext, true); /* true for JustComputeExtent */
            if( anOwnDisplayListExtent && !anOwnDisplayListExtent.fIsZeroPoint()) {
                anExtent= m_Geometry.fPoint( anOwnDisplayListExtent._v_X, anOwnDisplayListExtent._v_Y);
            }



            if(aPrototype.fComputeExtent._Trace) { m_Trace.pStep(
            'Compute extent of children views of this view, if any.');}

            var aNumChidrenViews = 0;
            if( this._v_ChildrenViews) {
                aNumChidrenViews = this._v_ChildrenViews.length;
            }
            if( !aNumChidrenViews) {
               return anExtent;
            }



            if(aPrototype.fComputeExtent._Trace) { m_Trace.pStep(
            'Iterate over ChildrenViews, accumulating their height.');}

            for ( var anIndex = 0; anIndex < aNumChidrenViews; anIndex++) {

                var aChildView = this._v_ChildrenViews[ anIndex];

                if ( aChildView) {

                    if(aPrototype.fComputeExtent._Trace) { m_Trace.pStep(
                    'Compute and accumulate extent of ChildView.');}

                    var aChildExtent = aChildView.fComputeExtent( theCtxt, thePerformance, the2DContext);
                    if( aChildExtent && !aChildExtent.fIsZeroPoint()) {
                        anExtent._v_Y += aChildExtent._v_Y;
                        if( aChildExtent._v_X > anExtent._v_X) {
                            anExtent._v_X = aChildExtent._v_X;
                        }
                    }
                }
            }

            return anExtent;

        })._sName( aPrototype._ModuleName, 'fComputeExtent')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',         ['Type', 'Performance']],
            [ 'the2DContext',           ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fComputeExtent._sDesc(
            'Compute the extent of the whole view.');
        }




























        return aPrototype;
    })();
    if(m_Instrument.cDocFuncs) {
        _prot_CompositeView.displayName='Prototype _prot_CompositeView';
        _privateMembers.push(_prot_CompositeView);
        _doc+=('\n\n' + _prot_CompositeView._doc);
    }



    var SubProt_CompositeView = (function() {

        this._v_Prot_CompositeView = _prot_CompositeView;
        this._v_ParentProt_CompositeView = this._v_Prot_CompositeView._v_Prot_View;

    })._sName( _displayName, 'SubProt_CompositeView')._sTrace(_cTr);
    SubProt_CompositeView.prototype = _prot_CompositeView;
    _publicMembers.push(SubProt_CompositeView);
    if(m_Instrument.cDocFuncs) {
        SubProt_CompositeView._sDesc(
        'Factory to create new instances of CompositeView to serve as prototype for more specific types of views.');
        _doc+=('\n\n' + SubProt_CompositeView._doc);
    }







    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        SubProt_CompositeView:  SubProt_CompositeView
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ViewComposite')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_View', 'm_Geometry'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_View, m_Geometry) {

            return aM_CompositeView(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
                m_Trace, m_Log, m_View, m_Geometry);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_CompositeView.displayName]=aM_CompositeView(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_View'],
            gChoirJS_Modules['m_Geometry']
        );
    }
    else {
        ChoirJS_Module_CompositeView= aM_CompositeView(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_View,
            ChoirJS_Module_Geometry
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ViewComposite')
}

