/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ViewChronograph')
}



var aM_ChronographView = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
    m_Instrument, m_Trace, m_Log, m_Geometry, m_Clock, m_ViewComposite, m_ViewError, m_ViewLoop) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ViewChronograph')
    }

    if( m_Log) {}


    var _displayName = 'm_ViewChronograph';

    var _doc = _displayName +' module. Functions to visualize received Changes in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace || true);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';



    var _c_ComputeRenderFrequencyMilliseconds = m_ConstValues_Tools.fConst( _displayName, '_c_ComputeRenderFrequencyMilliseconds', 1000);
    _doc+=('\n\n' +  JSON.stringify({_c_ComputeRenderFrequencyMilliseconds: _c_ComputeRenderFrequencyMilliseconds}, null, 4));
    _doc+='Minimum of milliseconds to capture enough number of renders to compute meaninful results.';




    _doc+=('\n\nPrototype and Factory for ChronographView:');


    var _prot_ChronographView = (function() {

        var aPrototype = new m_ViewComposite.SubProt_CompositeView();

        aPrototype._v_Type = 'ChronographView';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];




        aPrototype._pOpenView =  (function( theCtxt, theChronograph, theCanvas, the2DContext, theOriginX, theOriginY, theWidth, theHeight) {

            this._v_ParentProt_ChronographView._pOpenView.apply( this, [theCtxt]);

            this._v_Chronograph = theChronograph;
            this._v_Canvas = theCanvas;
            this._v_2DContext = the2DContext;

            this._v_HostViewPort = m_Geometry.fRectExtent( theOriginX, theOriginY, theWidth, theHeight);
            this._v_ViewPort = m_Geometry.fRectExtent( 0, 0, theWidth, theHeight);

            this._pBuildMissingChildrenViews( theCtxt);

            var aView = this;
            this._v_OnChangeInterest = (function() {
                var aView_here = aView;
                return aView_here._v_Chronograph.fOnChange( theCtxt, function( theCtxt_arg, theAspect, theDetails) {
                    aView_here.pRefresh( theCtxt_arg, theAspect, theDetails);
                });
            })();
            if( this._v_OnChangeInterest) {} /* CQT */

            this._v_RenderCountStartTime = null;
            this._v_RenderCount = 0;
            this._v_RenderFrequency = 0;

            this._v_AcumulatorNumRenders   = null;
            this._v_AcumulatorRenderMillis = null;
            this._v_AverageRenderMillis = 0;
            this._v_MinimumRenderMillis_temp = 0;
            this._v_MaximumRenderMillis_temp = 0;
            this._v_MinimumRenderMillis = 0;
            this._v_MaximumRenderMillis = 0;

            this._v_Damages = [];

            return null;

        })._sName( aPrototype._ModuleName, '_pOpenView')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theChronograph', ['Type', 'ChangeChronograph']],
            [ 'theCanvas',      ['object']],
            [ 'the2DContext',   ['object']],
            [ 'theOriginX',     ['number', 'optional']],
            [ 'theOriginY',     ['number', 'optional']],
            [ 'theWidth',       ['number', 'optional']],
            [ 'theHeight',      ['number', 'optional']]
        ]);
        aPrototype._privateMembers.push( aPrototype._pOpenView);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pOpenView._sDesc(
            'Open a View to render a Changes Chronograph, and react by repainting to changes in the Chronograph.');

            aPrototype._doc+=('\n\n' + aPrototype._pOpenView._doc);
        }







        aPrototype._pBuildMissingChildrenViews = (function( theCtxt) {

            var anIndex;
            var aChangeNode;

            var someRootsWithView = [];

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
                                    someRootsWithView.push( aChangeNode);
                                }
                                continue;

                            case 'LoopView':
                                aChangeNode = aChildView._v_ChangeNode_Loop;
                                if ( aChangeNode) {
                                    someRootsWithView.push( aChangeNode);
                                }
                                continue;

                            default:
                                continue;
                        }
                    }
                }
                var xxx = 1; if( xxx) {} /* CQT  no need continue at the end. But my standards demand it. */
            }

            var someRootsWithoutView = [];

            var aNumRoots = this._v_Chronograph._v_RootNodes.length;
            for ( anIndex = 0; anIndex < aNumRoots; anIndex++) {
                aChangeNode = this._v_Chronograph._v_RootNodes[anIndex];
                if ( aChangeNode) {
                    if( aChangeNode._v_Type) {
                        switch ( aChangeNode._v_Type) {

                            case 'ChangeNode_Error':
                                if( someRootsWithView.indexOf( aChangeNode) < 0) {
                                    someRootsWithoutView.push( aChangeNode);
                                }
                                continue;

                            case 'ChangeNode_Loop':
                                if( someRootsWithView.indexOf( aChangeNode) < 0) {
                                    someRootsWithoutView.push( aChangeNode);
                                }
                                continue;

                            default:
                                continue;
                        }
                    }
                }
                var xx = 1; if (xx){} /* CQT  no need continue at the end. But my standards demand it. */
            }

            var aNewView;

            var aNumRootsWithoutView = someRootsWithoutView.length;
            for ( anIndex = 0; anIndex < aNumRootsWithoutView; anIndex++) {
                aChangeNode = someRootsWithoutView[anIndex];
                if ( aChangeNode) {
                    if( aChangeNode._v_Type) {
                        switch ( aChangeNode._v_Type) {

                            case 'ChangeNode_Error':
                                aNewView = new m_ViewError.f_Constructor_ErrorView( theCtxt, this._v_Performance, this, aChangeNode);
                                if( !aNewView) {
                                    throw new m_Error.Error();
                                }
                                continue;

                            case 'ChangeNode_Loop':
                                aNewView = new m_ViewLoop.f_Constructor_LoopView( theCtxt, this._v_Performance, this, aChangeNode);
                                if( !aNewView) {
                                    throw new m_Error.Error();
                                }
                                continue;

                            default:
                                continue;
                        }
                    }
                }
                var xxxx = 1; if (xxxx){} /* CQT  no need continue at the end. But my standards demand it. */
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pBuildMissingChildrenViews')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        aPrototype._privateMembers.push( aPrototype._pBuildMissingChildrenViews);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pBuildMissingChildrenViews._sDesc(
            'Build missing Views for ChildrenNodes of the Node of this View, after instantiations, or model refresh.');

            aPrototype._doc+=('\n\n' + aPrototype._pBuildMissingChildrenViews._doc);
        }







        aPrototype.pRefresh = (function( theCtxt, theAspect, theDetails) {

            if( theDetails) {}

            if( theAspect === 'Invalidate') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Change_WakeUpInterest') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_Changes_PostDeltas') {
                this.pInvalidate( theCtxt);
                return null;
            }

            if( theAspect === '_v_RootNodes') {
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





        aPrototype.pInvalidate = (function( theCtxt) {

            this._v_ParentProt_ChronographView.pInvalidate.apply( this, [theCtxt]);

            this._v_BackgroundDisplayList = null;

            return null;

        })._sName( aPrototype._ModuleName, 'pInvalidate')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pInvalidate._sDesc(
            'The View is no longer current with the model, and must be re-built upon the next rendering.');

            aPrototype._doc+=('\n\n' + aPrototype.pInvalidate._doc);
        }







        aPrototype._pRegisterDamage = (function( theCtxt, theDamage) {

            /*
            if( theDamage === this) {
                return null;
            }
            */


            if ( this._v_Damages.indexOf( theDamage) < 0 ) {
                this._v_Damages.push( theDamage);
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pRegisterDamage')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theDamage', ['object']] /* ACV OJO Defense TODO it shall be a subtype of view, but it was not asserted by imperative defense */
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pRegisterDamage._sDesc(
            'Register in the Chronograph View a view as damaged, to be filled with backgrounds ' +
            'on the beginning of the next display.');

            aPrototype._doc+=('\n\n' + aPrototype._pRegisterDamage._doc);
        }








        aPrototype.pScrollDelta = (function( theCtxt, thePerformance, theScrollDelta) {

            this._v_ViewPort.pTranslateBy( theScrollDelta);

            this.pInvalidate( theCtxt);

            return null;

        })._sName( aPrototype._ModuleName, 'pScrollDelta')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',         ['Type', 'Performance'], ['sameas', '_v_Performance']],
            [ 'theScrollDelta',         ['Type', 'Point']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pScrollDelta._sDesc(
            'Scroll the View by the supplied delta.');

            aPrototype._doc+=('\n\n' + aPrototype.pScrollDelta._doc);
        }






        aPrototype.pScrollTop = (function( theCtxt, thePerformance) {

            if( thePerformance) {}

            if( !this._v_ViewPort._v_OriginY) {
                return null;
            }
            this._v_ViewPort= m_Geometry.fRectExtent(  this._v_ViewPort._v_OriginX, 0, this._v_ViewPort._v_Width, this._v_ViewPort._v_Height);

            this.pInvalidate( theCtxt);

            return null;

        })._sName( aPrototype._ModuleName, 'pScrollTop')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',         ['Type', 'Performance'], ['sameas', '_v_Performance']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pScrollTop._sDesc(
            'Scroll the View to the top, maintaining whichever horizontal scroll.');

            aPrototype._doc+=('\n\n' + aPrototype.pScrollTop._doc);
        }






        aPrototype.pScrollBottom = (function( theCtxt, thePerformance) {

            if( thePerformance) {}

            var aViewExtent = this.fComputeExtent( theCtxt, this._v_Performance, this._v_2DContext);

            var aNewY = Math.max( 0, aViewExtent._v_Y - this._v_ViewPort._v_Height);
            if( this._v_ViewPort._v_OriginY === aNewY) {
                return null;
            }

            this._v_ViewPort= m_Geometry.fRectExtent(  this._v_ViewPort._v_OriginX, aNewY, this._v_ViewPort._v_Width, this._v_ViewPort._v_Height);

            this.pInvalidate( theCtxt);

            return null;

        })._sName( aPrototype._ModuleName, 'pScrollBottom')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',         ['Type', 'Performance'], ['sameas', '_v_Performance']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pScrollBottom._sDesc(
                'Scroll the View to the bottom, maintaining whichever horizontal scroll.');

            aPrototype._doc+=('\n\n' + aPrototype.pScrollBottom._doc);
        }







        aPrototype.pScrollFraction = (function( theCtxt, thePerformance, theFraction) {

            if( thePerformance) {}

            var aViewExtent = this.fComputeExtent( theCtxt, this._v_Performance, this._v_2DContext);

            var aNewY = Math.max( 0, Math.floor( aViewExtent._v_Y * theFraction));
            if( this._v_ViewPort._v_OriginY === aNewY) {
                return null;
            }

            this._v_ViewPort= m_Geometry.fRectExtent(  this._v_ViewPort._v_OriginX, aNewY, this._v_ViewPort._v_Width, this._v_ViewPort._v_Height);

            this.pInvalidate( theCtxt);

            return null;

        })._sName( aPrototype._ModuleName, 'pScrollFraction')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',  ['Type', 'Performance'], ['sameas', '_v_Performance']],
            [ 'theFraction',     ['number']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pScrollFraction._sDesc(
            'Scroll the View to the fraction of its height, maintaining whichever horizontal scroll.');

            aPrototype._doc+=('\n\n' + aPrototype.pScrollFraction._doc);
        }














        aPrototype._pComputeRenderFrequencyAndTime = (function( theCtxt, thePerformance) {

            if( theCtxt) {}
            if( thePerformance) {}

            if( this._v_RenderCountStartTime === null) {

                this._v_RenderCountStartTime = new Date().getTime();
                this._v_RenderCount = 1;
                this._v_RenderFrequency = 0;

                this._v_AcumulatorNumRenders = 0;
                this._v_AcumulatorRenderMillis = 0;
                this._v_AverageRenderMillis = 0;
                this._v_MinimumRenderMillis_temp = 0;
                this._v_MaximumRenderMillis_temp = 0;
                this._v_MinimumRenderMillis = 0;
                this._v_MaximumRenderMillis = 0;

                return null;
            }

            var aMillisNow = new Date().getTime();
            /* console.log( ' _pComputeRenderFrequency aMillisNow=' + aMillisNow); */

            var aMillisLapsed = aMillisNow - this._v_RenderCountStartTime;
            if ( aMillisLapsed < 0) {
                aMillisLapsed = 0;
            }

            if( !aMillisLapsed) {
                this._v_RenderFrequency = 0;
                this._v_AverageRenderMillis = 0;
                this._v_MinimumRenderMillis_temp = 0;
                this._v_MaximumRenderMillis_temp = 0;
                this._v_MinimumRenderMillis = 0;
                this._v_MaximumRenderMillis = 0;
                return null;
            }
            
            if( aMillisLapsed >= _c_ComputeRenderFrequencyMilliseconds) {
                this._v_RenderCount += 0.5;
                this._v_RenderFrequency = Math.floor(( this._v_RenderCount * 1000 * 100) / aMillisLapsed) / 100;

                if ( !this._v_AcumulatorNumRenders) {
                    this._v_AverageRenderMillis = 0;
                }
                else {
                    this._v_AverageRenderMillis =  Math.floor( 10 * this._v_AcumulatorRenderMillis / this._v_AcumulatorNumRenders) / 10;
                }


                this._v_MinimumRenderMillis = this._v_MinimumRenderMillis_temp;
                this._v_MaximumRenderMillis = this._v_MaximumRenderMillis_temp;


                this._v_RenderCount = 0.5;

                this._v_AcumulatorNumRenders = 0;
                this._v_AcumulatorRenderMillis = 0;

                this._v_MinimumRenderMillis_temp = 0;
                this._v_MaximumRenderMillis_temp = 0;

                this._v_RenderCountStartTime = aMillisNow;

            }
            else {
                this._v_RenderCount += 1;
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pComputeRenderFrequencyAndTime')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',  ['Type', 'Performance'], ['sameas', '_v_Performance']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pComputeRenderFrequencyAndTime._sDesc(
            'Compute and store the average frequency of repaint and the average time to repaint this view.');

            aPrototype._doc+=('\n\n' + aPrototype._pComputeRenderFrequencyAndTime._doc);
        }











        aPrototype.pRender = (function( theCtxt, thePerformance) {

            this._pComputeRenderFrequencyAndTime( theCtxt, thePerformance);

            var aBeginMillis = new Date().getTime();

            try {


                if(aPrototype.pRender._Trace) { m_Trace.pStep(
                'Paint the ChronographView ViewPort Coordinates.');}

                this._v_2DContext.save();
                try {
                    this._pPaintDisplayListAndExtent( theCtxt, thePerformance, this._v_2DContext, [
                        {
                            _v_2DContext_Properties: [
                                [ 'fillStyle', '#00FFFF']
                            ],
                            _v_2DContext_Calls: [
                                [ 'fillRect', [ 0, 0, this._v_HostViewPort._v_CornerX, this._v_HostViewPort._v_OriginY]]
                            ]
                        }

                    ]);
                }
                finally {
                    this._v_2DContext.restore();
                }




                if(aPrototype.pRender._Trace) { m_Trace.pStep(
                'Paint the ChronographView refresh frame rate in frames per second.');}

                this._v_2DContext.save();
                try {

                    var someContextCalls = [
                        [ 'fillText', [ JSON.stringify( this._v_ViewPort.fAsArgsExtent()), 0, 0]]
                    ];

                    if( !(this._v_RenderFrequency === null)) {
                        someContextCalls.push(  [ 'fillText', [ '' + this._v_RenderFrequency + ' fps', 150, 0, 100, "right"]]);
                    }
                    if( !(this._v_AverageRenderMillis === null)) {
                        someContextCalls.push(  [ 'fillText', [ '' + this._v_AverageRenderMillis + ' ms/frame', 250, 0, 100, "right"]]);
                    }
                    if( !(this._v_MinimumRenderMillis === null)) {
                        someContextCalls.push(  [ 'fillText', [ '' + this._v_MinimumRenderMillis + ' ms min', 350, 0, 100, "right"]]);
                    }
                    if( !(this._v_MaximumRenderMillis === null)) {
                        someContextCalls.push(  [ 'fillText', [ '' + this._v_MaximumRenderMillis + ' ms MAX', 450, 0, 100, "right"]]);
                    }


                    this._pPaintDisplayListAndExtent( theCtxt, thePerformance, this._v_2DContext, [
                        {
                            _v_2DContext_Properties: [
                                [ 'fillStyle', '#000000']
                            ],
                            _v_2DContext_Calls: someContextCalls
                        }
                    ]);
                }
                finally {
                    this._v_2DContext.restore();
                }






                if(aPrototype.pRender._Trace) { m_Trace.pStep(
                'Render the body of the ChronographView.');}

                this._v_2DContext.save();
                try {

                    if(aPrototype.pRender._Trace) { m_Trace.pStep(
                    'Translate the 2DContext to display the ChronographView at the Host ViewPort.');}

                    this._v_2DContext.translate.apply( this._v_2DContext, this._v_HostViewPort.fOrigin().fAsArgs());


                    /*
                    var aScale = [ 0.5, 0.5];
                    this._v_2DContext.scale.apply( this._v_2DContext, aScale);
                    */

                    if(aPrototype.pRender._Trace) { m_Trace.pStep(
                    'Clip the 2DContext to avoid painting outside the part of the Host ViewPort reserved for the ChronographView.');}

                    this._v_2DContext.beginPath();
                    this._v_2DContext.rect.apply( this._v_2DContext,
                        [ 0, 0, this._v_HostViewPort._v_Width, this._v_HostViewPort._v_Height]);
                    this._v_2DContext.clip();


                    /*
                    if( ( (!this._v_Performance._v_SchedulePaints) ||
                        !this._v_RenderReport) ||
                        !( this._v_RenderReport._v_ViewPortInParent &&
                        this._v_RenderReport._v_ViewPortInParent.fSameAs( this._v_ViewPort) &&
                        this._v_RenderReport._v_OriginInParent &&
                        this._v_RenderReport._v_OriginInParent.fSameAs( m_Geometry.fPoint( 0, 0)))) {

                        if(aPrototype.pRender._Trace) { m_Trace.pStep(
                        'Paint the background of the ChronographView.');}

                    }
                    */






                    if(aPrototype.pRender._Trace) { m_Trace.pStep(
                    'Fill Damaged areas with backgrounds.');}

                    if( this._v_Damages) {
                        var aNumDamages = this._v_Damages.length;

                        if ( aNumDamages) {

                            /* ACV OJO URGENT after development remember to remove this trick to black out the background to better show the areas just painted (only really observable by step-debugging
                            this._v_2DContext.save();
                            try {

                                this._v_2DContext.fillStyle = '#FFFFFF';
                                this._v_2DContext.fillRect(0, 0, 1000, 1000);

                            }
                            finally {
                                this._v_2DContext.restore();
                            }
                            */
                            this._v_2DContext.save();
                            try {
                                /* AV OJO TODO
                                if(aPrototype.pRender._Trace) { m_Trace.pStep(
                                'Translate the 2DContext to display the damages ' +
                                'the same as was at the last render : the old ViewPort with Scroll applied.');}

                                this._v_2DContext.translate.apply( this._v_2DContext, [
                                    0 - this._v_ViewPort._v_OriginX,
                                    0 - this._v_ViewPort._v_OriginY
                                ]);
                                */

                                for (var anIndexDamage = 0; anIndexDamage < aNumDamages; anIndexDamage++) {
                                    var aDamage = this._v_Damages[anIndexDamage];
                                    if ( aDamage) {

                                        if( aDamage._v_LastRenderReport &&
                                            aDamage._v_LastRenderReport._v_Backgrounds) {

                                            var aNumBackgrounds = aDamage._v_LastRenderReport._v_Backgrounds.length;
                                            if ( aNumBackgrounds) {

                                                for (var anIndexBackground = 0; anIndexBackground < aNumBackgrounds; anIndexBackground++) {
                                                    var aBackground = aDamage._v_LastRenderReport._v_Backgrounds[anIndexBackground];
                                                    if ( aBackground && ( aBackground.length > 1)) {


                                                        /*
                                                        ACV OJO TODO CLIP
                                                        if(aPrototype._pPaintBackgroundWithin._Trace) { m_Trace.pStep(
                                                        'Clip the 2DContext to avoid painting outside the area reserved for this View.');}

                                                        the2DContext.beginPath();
                                                        the2DContext.rect.apply( the2DContext, [ theOwnBounds._v_OriginX, theOwnBounds._v_OriginY, theOwnBounds._v_Width, theOwnBounds._v_Height]);
                                                        the2DContext.clip();
                                                        */


                                                        var someTransforms = aBackground[ 0];
                                                        var aDisplayList   = aBackground[ 1];

                                                        if( someTransforms && someTransforms.length) {
                                                            this._pApplyTransforms( theCtxt, thePerformance, this._v_2DContext, someTransforms, true); /* true to apply inverse transforms */
                                                        }

                                                        if( aDisplayList && aDisplayList.length) {
                                                            this._pPaintDisplayListAndExtent( theCtxt, thePerformance, this._v_2DContext, aDisplayList);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                this._v_Damages = [];
                            }
                            finally {
                                this._v_2DContext.restore();
                            }
                        }
                    }








                    if(aPrototype.pRender._Trace) { m_Trace.pStep(
                    'Recursively display as many children views as are visible at all.');}


                    this._v_2DContext.save();
                    try {


                        if(aPrototype.pRender._Trace) { m_Trace.pStep(
                        'Translate the 2DContext to display the ChronographView at the current ViewPort with Scroll applied.');}

                         this._v_2DContext.translate.apply( this._v_2DContext, [
                             0 - this._v_ViewPort._v_OriginX,
                             0 - this._v_ViewPort._v_OriginY
                         ]);


                        this._v_2DContext.save();
                        try {

                            this.fRenderAndReport( theCtxt, thePerformance, this._v_2DContext,
                                this._v_ViewPort.fCopy(), m_Geometry.fPoint( 0, 0), [], this._v_ReverseOrder);

                        }
                        finally {
                            this._v_2DContext.restore();
                        }
                    }
                    finally {
                        this._v_2DContext.restore();
                    }
                }
                finally {
                    this._v_2DContext.restore();
                }
            }
            finally {
                var aMillisLapsed = Math.max( 0, new Date().getTime() - aBeginMillis);
                this._v_AcumulatorRenderMillis += aMillisLapsed;
                this._v_AcumulatorNumRenders +=  1;

                if( (!this._v_MinimumRenderMillis_temp) || (aMillisLapsed < this._v_MinimumRenderMillis_temp)) {
                    this._v_MinimumRenderMillis_temp = aMillisLapsed;
                }
                if( (aMillisLapsed > this._v_MaximumRenderMillis_temp)) {
                    this._v_MaximumRenderMillis_temp = aMillisLapsed;
                }
            }

            return null;

        })._sName( aPrototype._ModuleName, 'pRender')._sTrace( _cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',  ['Type', 'Performance'], ['sameas', '_v_Performance']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pRender._sDesc(
            'Render the Chronograph View, by rendering all its ChildrenViews ' +
            'with the vertical origin of each ChildView at the vertical corner of the immediately predecessor child view. ' +
            'Only render ChildrenViews visible on the ChronographView DisplayRegion, at the current ChronographView Scroll Y.');

            aPrototype._doc+=('\n\n' + aPrototype.pRender._doc);
        }








        aPrototype._pComposeBackgroundDisplayList = (function( theCtxt, thePerformance, the2DContext) {

            if( thePerformance) {}
            if( the2DContext) {}

            if (!this._v_BackgroundDisplayList) {

                this._v_BackgroundDisplayList = [
                    {
                        _v_2DContext_Properties: [
                            [ 'fillStyle', '#000000']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillRect', [ 0, 0, this._v_HostViewPort._v_Width, this._v_HostViewPort._v_Height]]
                        ]
                    }
                ];
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pComposeBackgroundDisplayList')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',  ['Type', 'Performance'], ['sameas', '_v_Performance']],
            [ 'the2DContext',    ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pComposeBackgroundDisplayList._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype.pRender._doc);
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


        var _cHei_Action    = 14;
        var _cTop_Action    = _cTextTop + 0;


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


        var _cCol_Action    = _cCol;
        var _cWid_Num       = 32;
        var _cSep_Num    = 6;
        _cCol = _cCol_Action + _cWid_Num + _cSep_Num;

        var _cWid_Kinds = 180;
        var _cSep_Kinds = 6;

        var _cRight = _cCol;




        var _cCol_NumDeltas = _cCol_Action + 0;
        var _cWid_NumDeltas = _cWid_Num + 0;
        var _cSep_NumDeltas = _cSep_Num + 0;
        _cCol = _cCol_NumDeltas + _cWid_NumDeltas + _cSep_NumDeltas;


        var _cCol_DeltaKinds = _cCol;
        var _cWid_DeltaKinds = _cWid_Kinds + 0;
        var _cSep_DeltaKinds = _cSep_Kinds + 0;
        _cCol = _cCol_DeltaKinds + _cWid_DeltaKinds + _cSep_DeltaKinds;
        _cRight = Math.max( _cRight, _cCol);



        var _cCol_NumPostedDeltas = _cCol_Action + 0;
        var _cWid_NumPostedDeltas = _cWid_Num + 0;
        var _cSep_NumPostedDeltas = _cSep_Num + 0;
        _cCol = _cCol_NumPostedDeltas + _cWid_NumPostedDeltas + _cSep_NumPostedDeltas;

        var _cCol_PostedDeltaKinds = _cCol;
        var _cWid_PostedDeltaKinds = _cWid_Kinds + 0;
        var _cSep_PostedDeltaKinds = _cSep_Kinds + 0;
        _cCol = _cCol_PostedDeltaKinds + _cWid_PostedDeltaKinds + _cSep_PostedDeltaKinds;
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

                var aBeginMillis = null;
                var anEndMillis = null;
                var aDurationMillis = null;
                /*
                 var aChangeNode_UID = '';
                 */
                var aHasBegin = false;
                var aHasEnd = false;
                var aNumErrors = null;
                var aHasWakeUpInterest = false;
                var aWakeUpInterestKind = null;
                var aWakeUpScheduleMillis = null;
                var aWakeUpScheduleFromThisIterationBeginMillis = null;
                var aNumDeltas = null;
                var someDeltaKinds = null;
                var someDeltaKindSymbols = null;
                var aHasPostedDeltas = false;
                var somePostDeltas = false;
                var aNumPostedDeltas = null;
                var somePostedDeltaKindSymbols = null;




                if( this._v_Chronograph) {

                    aHasBegin   = this._v_Chronograph._v_Change_StartPerformance   ? true: false;
                    aHasEnd     = this._v_Chronograph._v_Change_StopPerformance    ? true: false;

                    if( aHasBegin) {
                        if( !( this._v_Chronograph._v_Change_StartPerformance._v_StartMillis === null)) {
                            aBeginMillis = this._v_Chronograph._v_Change_StartPerformance._v_StartMillis;
                        }
                    }

                    if( aHasEnd) {
                        if( !( this._v_Chronograph._v_Change_End._v_Change_StopPerformance === null)) {
                            anEndMillis = this._v_Chronograph._v_Change_End._v_Change_StopPerformance;
                            if( aHasBegin) {
                                if( !( aBeginMillis === null)) {
                                    aDurationMillis=  anEndMillis - aBeginMillis;
                                }
                            }
                        }
                    }

                    aNumErrors     = 0;

                    aHasWakeUpInterest = this._v_Chronograph._v_Change_WakeUpInterest  ? true: false;
                    if( aHasWakeUpInterest) {
                        if( this._v_Chronograph._v_Change_WakeUpInterest._v_Data &&
                            this._v_Chronograph._v_Change_WakeUpInterest._v_Data._v_Interest) {

                            aWakeUpInterestKind = this._v_Chronograph._v_Change_WakeUpInterest._v_Data._v_Interest._v_InterestKind;
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

                                        if( this._v_Chronograph._v_Change_WakeUpInterest._v_Data._v_Interest._v_Data) {
                                            aNumDeltas =  this._v_Chronograph._v_Change_WakeUpInterest._v_Data._v_Interest._v_Data._v_NumDeltas;
                                            someDeltaKinds =  this._v_Chronograph._v_Change_WakeUpInterest._v_Data._v_Interest._v_Data._v_SomeDeltaKinds;
                                            someDeltaKindSymbols = [];
                                            var aNumDeltaKinds = someDeltaKinds.length;
                                            for ( anIndex = 0; anIndex < aNumDeltaKinds; anIndex++) {
                                                var aDeltaKind = someDeltaKinds[anIndex];
                                                if ( aDeltaKind) {
                                                    var aDeltaKindSymbol = _cDeltaKindsToSymbolsMap[aDeltaKind];
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
                                }
                            }

                            var aWakeUpScheduleClock = this._v_Chronograph._v_Change_WakeUpInterest._v_Data._v_Interest._v_WakeUpScheduleClock;
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


                    somePostDeltas = this._v_Chronograph._v_Changes_PostDeltas;
                    aNumPostedDeltas = somePostDeltas.length;
                    aHasPostedDeltas = aNumPostedDeltas  ? true: false;
                    if( aHasPostedDeltas) {
                        somePostedDeltaKindSymbols = [];
                        for ( anIndex = 0; anIndex < aNumPostedDeltas; anIndex++) {
                            var aPostedDelta = somePostDeltas[anIndex];
                            if ( aPostedDelta && aPostedDelta._v_Data && aPostedDelta._v_Data._v_Delta) {
                                var aPostedDeltaKind = aPostedDelta._v_Data._v_Delta._v_DeltaKind;
                                if ( aPostedDeltaKind) {
                                    var aPostedDeltaKindSymbol = _cDeltaKindsToSymbolsMap[aPostedDeltaKind];
                                    if( aPostedDeltaKindSymbol) {
                                        somePostedDeltaKindSymbols.push( aPostedDeltaKindSymbol);
                                    }
                                }
                            }
                        }
                        if ( !somePostedDeltaKindSymbols.length) {
                            somePostedDeltaKindSymbols = null;
                        }
                        else {
                            somePostedDeltaKindSymbols = somePostedDeltaKindSymbols.join(' ');
                        }
                    }
                }


                var aNumActions = 0 + ( aHasWakeUpInterest ? 1 : 0) +
                    ( aHasPostedDeltas ? 1 : 0);


                var aHei_LiveBox = _cHei_LiveBox;
                var aHei_Total = _cTop_LiveBox + _cHei_Millis + 2;

                if( aNumActions > 1) {
                    aHei_LiveBox = aHei_LiveBox * aNumActions;
                    aHei_Total = _cTop_LiveBox + aHei_LiveBox + 2;
                }

                var aTopAction = _cTop_Action;





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
                            [ 'fillText', [ String.fromCharCode(0x238E), _cCol_Type, _cTextTop]] /*HYSTERESIS SYMBOL*/

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




                if( aHasWakeUpInterest) {
                    this._v_DisplayList.push({
                        _v_2DContext_Properties: [
                            [ 'font',      '10px Arial'],
                            [ 'fillStyle', '#FFFFFF']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillText', [ aWakeUpInterestKind, _cCol_WUpInterest, aTopAction]],
                            [ 'fillText', [ '' + aWakeUpScheduleMillis, _cCol_WUpInterest_Millis, aTopAction]],
                            [ 'fillText', [ '' + aWakeUpScheduleFromThisIterationBeginMillis,
                                _cCol_WUpInterest_MillisThisIter, aTopAction]]
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
                                    String.fromCharCode(0x231B) +      /* HOURGLASS */
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


                if( aHasPostedDeltas) {
                    if( !(aNumPostedDeltas === null)) {
                        this._v_DisplayList.push({
                            _v_2DContext_Properties: [
                                [ 'font',      '10px Arial'],
                                [ 'fillStyle', '#FFFFFF']
                            ],
                            _v_2DContext_Calls: [
                                [ 'fillText', [ ('' + aNumPostedDeltas) + ' ' +
                                    String.fromCharCode(0x27F4	) +  /* RIGHT ARROW WITH CIRCLED PLUS*/
                                    String.fromCharCode(0x0394) + 's', /* GREEK CAPITAL LETTER DELTA */
                                    _cCol_NumPostedDeltas, aTopAction]]
                            ]
                        });
                    }

                    if( (!(somePostedDeltaKindSymbols === null)) && somePostedDeltaKindSymbols.length) {
                        this._v_DisplayList.push({
                            _v_2DContext_Properties: [
                                [ 'font',      '10px Arial'],
                                [ 'fillStyle', '#FFFFFF']
                            ],
                            _v_2DContext_Calls: [
                                [ 'fillText', [ somePostedDeltaKindSymbols, _cCol_PostedDeltaKinds, aTopAction]]
                            ]
                        });
                    }
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

            aPrototype._doc+=('\n\n' + aPrototype.pRender._doc);
        }






        return aPrototype;
    })();
    if(m_Instrument.cDocFuncs) {
        _privateMembers.push(_prot_ChronographView);
        _doc+=('\n\n' + _prot_ChronographView._doc);
    }








    var f_Constructor_ChronographView = (function( theCtxt, thePerformance, theChronograph, theReverseOrder,
                                               theCanvas, the2DContext, theOriginX, theOriginY, theWidth, theHeight) {

        this._v_Prot_ChronographView       = _prot_ChronographView;
        this._v_Prot                      = this._v_Prot_ChronographView;
        this._v_ParentProt_ChronographView = this._v_Prot_ChronographView._v_Prot_CompositeView;

        this._v_Type = 'ChronographView';

        this._v_Performance = null;
        this._v_Chronograph = null;
        this._v_Canvas = null;
        this._v_2DContext = null;

        this._v_ReverseOrder = theReverseOrder ? true : false;

        this._v_BackgroundDisplayList = null;

        this._v_HostViewPort = m_Geometry.fRectExtent( 0, 0, 0, 0);
        this._v_ViewPort = m_Geometry.fRectExtent( 0, 0, 0, 0);

        this._v_OnChangeInterest = null;

        this._v_Performance =     thePerformance;

        this._v_Damages = [];

        this._v_RenderCountStartTime = null;
        this._v_RenderCount = null;
        this._v_RenderFrequency = null;

        this._v_AcumulatorNumRenders   = null;
        this._v_AcumulatorRenderMillis = null;
        this._v_AverageRenderMillis = 0;
        this._v_MinimumRenderMillis_temp = 0;
        this._v_MaximumRenderMillis_temp = 0;
        this._v_MinimumRenderMillis = 0;
        this._v_MaximumRenderMillis = 0;


        this._pOpenView( theCtxt, theChronograph, theCanvas, the2DContext, theOriginX, theOriginY, theWidth, theHeight)

    })._sName( _displayName, 'f_Constructor_ChronographView')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',  ['Type', 'Performance']],
        [ 'theChronograph',  ['Type', 'ChangeChronograph']],
        [ 'theReverseOrder', ['object', 'optional']],
        [ 'theCanvas',       ['object']],
        [ 'the2DContext',    ['object']],
        [ 'theOriginX',      ['number', 'optional']],
        [ 'theOriginY',      ['number', 'optional']],
        [ 'theWidth',        ['number', 'optional']],
        [ 'theHeight',       ['number', 'optional']]
    ]);
    f_Constructor_ChronographView.prototype = _prot_ChronographView;
    _publicMembers.push(f_Constructor_ChronographView);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_ChronographView._sDesc('Factory to create new instances of ChronographView.');
        _doc+=('\n\n' + f_Constructor_ChronographView._doc);
    }



    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        f_Constructor_ChronographView:  f_Constructor_ChronographView
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ViewChronograph')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_Geometry', 'm_Clock',
        'm_ViewComposite', 'm_ViewError', 'm_ViewLoop'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_Geometry, m_Clock,
        m_ViewComposite, m_ViewError, m_ViewLoop) {

        return aM_ChronographView(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
            m_Trace, m_Log, m_Geometry, m_Clock,
            m_ViewComposite, m_ViewError, m_ViewLoop);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ChronographView.displayName]=aM_ChronographView(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Geometry'],
            gChoirJS_Modules['m_Clock'],
            gChoirJS_Modules['m_ViewComposite'],
            gChoirJS_Modules['m_ViewError'],
            gChoirJS_Modules['m_ViewLoop']
        );
    }
    else {
        ChoirJS_Module_ChronographView= aM_ChronographView(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_Geometry,
            ChoirJS_Module_Clock,
            ChoirJS_Module_CompositeView,
            ChoirJS_Module_ErrorView,
            ChoirJS_Module_LoopView
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ViewChronograph')
}

