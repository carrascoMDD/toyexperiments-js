/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_View')
}





var aM_View = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Identifiable, m_Defense, m_Error,
    m_Instrument, m_Trace, m_Log, m_Geometry) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_View')
    }

    if( m_Log) {}


    var _displayName = 'm_View';

    var _doc = _displayName +' module. Prototype and Factory to visualize received Changes in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';


    var _cHeightMeasurementText = m_ConstValues_Tools.fConst( _displayName, '_cHeightMeasurementText', 'e');
    _doc+=('\n\n' +  JSON.stringify({_cHeightMeasurementText: _cHeightMeasurementText}, null, 4));
    _doc+='The text used to approximate the height of text rendered with the font and scaling set at the moment in the 2DContext.';


    var _cHeightMeasurementFactor = m_ConstValues_Tools.fConst( _displayName, '_cHeightMeasurementFactor', 2);
    _doc+=('\n\n' +  JSON.stringify({_cHeightMeasurementText: _cHeightMeasurementFactor}, null, 4));
    _doc+='The factor used to approximate the height of text rendered with the font and scaling set at the moment in the 2DContext,' +
        'by multiplying with this factor the width computed for the text specified by the _cHeightMeasurementFactor module constant.';





    _doc+=('\n\nPrototype and Factory for View_Simple:');


    var _prot_View = (function() {


        var aPrototype = {};

        aPrototype._v_Type = 'View';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];




        aPrototype._pOpenView =  (function( theCtxt) {

            if( theCtxt) {}

            this._v_UID = m_Identifiable.fNewUID();

            this._v_DisplayList = null;

            return null;

        })._sName( aPrototype._ModuleName, '_pOpenView')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        aPrototype._privateMembers.push( aPrototype._pOpenView);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pOpenView._sDesc(
            'Initialize this instance of View');

            aPrototype._doc+=('\n\n' + aPrototype._pOpenView._doc);
        }









        aPrototype.pRefresh = (function( theCtxt, theAspect, theDetails) {

            if( theDetails) {}

            if(aPrototype.pRefresh._Trace) { m_Trace.sThis(this);}

            if( theAspect === 'Invalidate') {
                this.pInvalidate( theCtxt);
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

            if( theCtxt) {}

            this._v_DisplayList = null;

            return null;

        })._sName( aPrototype._ModuleName, 'pInvalidate')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pInvalidate._sDesc(
            'The View is no longer current with the model, and must be re-built upon the next rendering.');

            aPrototype._doc+=('\n\n' + aPrototype.pInvalidate._doc);
        }









        aPrototype._pPaintOwnDisplayListAndExtent = (function( theCtxt, thePerformance, the2DContext, theJustComputeExtent) {

            if(aPrototype._pPaintOwnDisplayListAndExtent._Trace) { m_Trace.sThis(this);}

            if( !this._v_DisplayList) {

                this._pComposeDisplayList( theCtxt, thePerformance, the2DContext);

                if( !this._v_DisplayList) {
                    throw new m_Error.Error('DerivedPropertyError', {module: aPrototype._ModuleName, function: aPrototype._pPaintOwnDisplayListAndExtent, derivedProperty: '_pComposeDisplayList', with: [this]});
                }
            }

            return this._pPaintDisplayListAndExtent( theCtxt, thePerformance, the2DContext, this._v_DisplayList, theJustComputeExtent);

        })._sName( aPrototype._ModuleName, '_pPaintOwnDisplayListAndExtent')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',       ['Type', 'Performance']],
            [ 'the2DContext',         ['object']],
            [ 'theJustComputeExtent', ['boolean', 'optional']]
        ]);
        aPrototype._privateMembers.push( aPrototype._pPaintOwnDisplayListAndExtent);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pPaintOwnDisplayListAndExtent._sDesc(
            'Paint in the 2D context the primitives in the DisplayList of this View, and return the Extent occupied by the rendered primitives.');

            aPrototype._doc+=('\n\n' + aPrototype._pPaintOwnDisplayListAndExtent._doc);
        }









        aPrototype._pPaintDisplayListAndExtent = (function( theCtxt, thePerformance, the2DContext, theDisplayList, theJustComputeExtent) {

            if(aPrototype._pPaintDisplayListAndExtent._Trace) { m_Trace.sThis(this);}

            var anExtentX = 0;
            var anExtentY = 0;

            var aCornerX;
            var aCornerY;

            var aCallFunction;

            the2DContext.save();

            try {
                the2DContext.translate(0.5,0.5);

                var aNumNodes = theDisplayList.length;
                if( aNumNodes) {
                    for ( var anIndex=0; anIndex < aNumNodes; anIndex++) {
                        var aNode = theDisplayList[ anIndex];
                        if ( aNode) {

                            the2DContext.save();
                            try {

                                if( !theJustComputeExtent) {

                                    if( aNode._v_2DContext_Properties) {
                                        var aNumPpties = aNode._v_2DContext_Properties.length;
                                        for ( var aPptyIndex = 0; aPptyIndex < aNumPpties; aPptyIndex++) {
                                            var aPpty = aNode._v_2DContext_Properties[ aPptyIndex];
                                            if( aPpty && ( aPpty.length > 1)) {
                                                var aPptyName = aPpty[ 0];
                                                if( aPptyName) {
                                                    var aPptyValue = aPpty[ 1];
                                                    if ( aPptyValue) {
                                                        the2DContext[aPptyName]=aPptyValue;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                                if( aNode._v_2DContext_Calls) {
                                    var aNumCalls = aNode._v_2DContext_Calls.length;
                                    for ( var aCallIndex = 0; aCallIndex < aNumCalls; aCallIndex++) {
                                        var aCall = aNode._v_2DContext_Calls[ aCallIndex];
                                        if( aCall && ( aCall.length > 1)) {
                                            var aCallName = aCall[ 0];
                                            if( aCallName) {
                                                var someCallArguments = aCall[ 1];
                                                if ( someCallArguments === 'extent') {
                                                    throw m_Error.Error ('Unsupported someCallArguments = [ 0, 0, theCanvas.width, theCanvas.height];');
                                                }
                                                else {
                                                    someCallArguments = someCallArguments.slice();
                                                }

                                                switch( aCallName) {

                                                    case 'fillText':
                                                        aCallFunction = the2DContext[aCallName];
                                                        if( aCallFunction) {

                                                            if( someCallArguments && someCallArguments.length) {
                                                                var aText = someCallArguments[ 0];
                                                                var aText_OriginX = (( someCallArguments.length > 1) && someCallArguments[ 1]) || 0;
                                                                var aText_OriginY = (( someCallArguments.length > 2) && someCallArguments[ 2]) || 0;
                                                                var aText_Width   = null;
                                                                var aText_Align   = '';
                                                                if(someCallArguments.length > 3) {
                                                                    aText_Width = someCallArguments[ 3];
                                                                    if(someCallArguments.length > 4) {
                                                                        aText_Align = someCallArguments[ 4];
                                                                    }
                                                                    someCallArguments= someCallArguments.slice(0, 3);
                                                                }

                                                                if( aText) {
                                                                    if (aText_OriginY > anExtentY) {
                                                                        anExtentY = aText_OriginY;
                                                                    }
                                                                    var aWidthMeasurement = the2DContext.measureText( aText);
                                                                    if ( aWidthMeasurement) {

                                                                        if (aText_OriginX > anExtentX) {
                                                                            anExtentX = aText_OriginX;
                                                                        }

                                                                        aCornerX = aText_OriginX + aWidthMeasurement.width;
                                                                        if (aCornerX > anExtentX) {
                                                                            anExtentX = aCornerX;
                                                                        }
                                                                    }

                                                                    var aHeightMeasurement = the2DContext.measureText( _cHeightMeasurementText);
                                                                    if( aHeightMeasurement) {
                                                                        var aTextHeight = Math.floor( aHeightMeasurement.width * _cHeightMeasurementFactor);
                                                                        aCornerY = aText_OriginY + aTextHeight;
                                                                        if( someCallArguments.length > 2) {
                                                                            var aNewOriginY = aText_OriginY + aTextHeight;
                                                                            if( aNewOriginY) {}
                                                                            someCallArguments[2] = aNewOriginY;
                                                                        }
                                                                        if (aCornerY > anExtentY) {
                                                                            anExtentY = aCornerY;
                                                                        }
                                                                    }
                                                                    if( aText_Align === 'right') {
                                                                        someCallArguments[1] += aText_Width - aWidthMeasurement.width;
                                                                    }
                                                                }
                                                            }

                                                            if( !theJustComputeExtent) {

                                                                try {
                                                                    aCallFunction.apply( the2DContext, someCallArguments);
                                                                }
                                                                catch( anException) {
                                                                    if( anException) {}
                                                                }
                                                            }

                                                        }
                                                        break;



                                                    case 'fillRect':

                                                        aCallFunction = the2DContext[aCallName];
                                                        if( aCallFunction) {

                                                            if( someCallArguments && (someCallArguments.length === 4)) {
                                                                if (someCallArguments[0] > anExtentX) {
                                                                    anExtentX = someCallArguments[0];
                                                                }
                                                                if (someCallArguments[1] > anExtentY) {
                                                                    anExtentY = someCallArguments[1];
                                                                }
                                                                aCornerX = someCallArguments[0] + someCallArguments[2];
                                                                if ( aCornerX > anExtentX) {
                                                                    anExtentX = aCornerX;
                                                                }
                                                                aCornerY = someCallArguments[1] + someCallArguments[3];
                                                                if ( aCornerY > anExtentY) {
                                                                    anExtentY = aCornerY;
                                                                }
                                                            }

                                                            if( !theJustComputeExtent) {

                                                                try {
                                                                    aCallFunction.apply( the2DContext, someCallArguments);
                                                                }
                                                                catch( anException) {
                                                                    if( anException) {}
                                                                }
                                                            }
                                                        }
                                                        break;



                                                    case 'strokeRect':

                                                        aCallFunction = the2DContext[aCallName];
                                                        if( aCallFunction) {

                                                            if( someCallArguments && (someCallArguments.length === 4)) {
                                                                if (someCallArguments[0] > anExtentX) {
                                                                    anExtentX = someCallArguments[0];
                                                                }
                                                                if (someCallArguments[1] > anExtentY) {
                                                                    anExtentY = someCallArguments[1];
                                                                }
                                                                aCornerX = someCallArguments[0] + someCallArguments[2];
                                                                if ( aCornerX > anExtentX) {
                                                                    anExtentX = aCornerX;
                                                                }
                                                                aCornerY = someCallArguments[1] + someCallArguments[3];
                                                                if ( aCornerY > anExtentY) {
                                                                    anExtentY = aCornerY;
                                                                }
                                                            }

                                                            if( !theJustComputeExtent) {

                                                                try {
                                                                    aCallFunction.apply( the2DContext, someCallArguments);
                                                                }
                                                                catch( anException) {
                                                                    if( anException) {}
                                                                }
                                                            }
                                                        }
                                                        break;



                                                    case 'hLine':

                                                        if( someCallArguments && (someCallArguments.length >= 3)) {

                                                            if (someCallArguments[0] > anExtentX) {
                                                                anExtentX = someCallArguments[0];
                                                            }
                                                            aCornerX = someCallArguments[0] + someCallArguments[2];
                                                            if ( aCornerX > anExtentX) {
                                                                anExtentX = aCornerX;
                                                            }
                                                            if (someCallArguments[1] > anExtentY) {
                                                                anExtentY = someCallArguments[1];
                                                            }

                                                            if( !theJustComputeExtent) {

                                                                try {
                                                                    the2DContext.beginPath();
                                                                    the2DContext.moveTo( someCallArguments[0], someCallArguments[1]);
                                                                    the2DContext.lineTo(someCallArguments[0] + someCallArguments[2], someCallArguments[1]);
                                                                    the2DContext.stroke();
                                                                }
                                                                catch( anException) {
                                                                    if( anException) {}
                                                                }
                                                            }
                                                        }
                                                        break;




                                                    case 'space':

                                                        if( someCallArguments && (someCallArguments.length >= 2)) {

                                                            if (someCallArguments[0] > anExtentX) {
                                                                anExtentX = someCallArguments[0];
                                                            }
                                                            if (someCallArguments[1] > anExtentY) {
                                                                anExtentY = someCallArguments[1];
                                                            }
                                                        }
                                                        break;



                                                    default:
                                                        break;

                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            finally {
                                the2DContext.restore();
                            }
                        }
                    }
                }
            }
            finally {
                the2DContext.restore();
            }

            var anExtent = m_Geometry.fPoint( anExtentX, anExtentY);
            if( anExtent) {}
            return anExtent;

        })._sName( aPrototype._ModuleName, '_pPaintDisplayListAndExtent')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',       ['Type', 'Performance']],
            [ 'the2DContext',         ['object']],
            [ 'theDisplayList',       ['object']],
            [ 'theJustComputeExtent', ['boolean', 'optional']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pPaintDisplayListAndExtent._sDesc(
            'Paint in the 2D context the primitives in the DisplayList of this View, and return the Extent occupied by the rendered primitives.');

            aPrototype._doc+=('\n\n' + aPrototype._pPaintDisplayListAndExtent._doc);
        }








        aPrototype._pComposeDisplayList = (function( theCtxt, thePerformance, the2DContext) {

            if(aPrototype._pComposeDisplayList._Trace) { m_Trace.sThis(this);}

            if( thePerformance) {}
            if( the2DContext) {}

            throw new m_Error.Error('NotImplementedError', {module: aPrototype._ModuleName, function: aPrototype._pComposeDisplayList});

        })._sName( aPrototype._ModuleName, '_pComposeDisplayList')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',       ['Type', 'Performance']],
            [ 'the2DContext',         ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pComposeDisplayList._sDesc('');

            aPrototype._doc+=('\n\n' + aPrototype._pComposeDisplayList._doc);
        }
















        aPrototype._pApplyTransforms = (function( theCtxt, thePerformance, the2DContext, theTransforms, theInverse) {

            if(aPrototype._pApplyTransforms._Trace) { m_Trace.sThis(this);}


            var aCallFunction;

            var aNumTransforms = theTransforms.length;

            for ( var aTransformIndex=0; aTransformIndex < aNumTransforms; aTransformIndex++) {

                var aTransform = theTransforms[ aTransformIndex];

                if ( aTransform && ( aTransform.length > 1)) {

                    var aTransformName = aTransform[ 0];
                    if( aTransformName) {

                        var someCallArguments = aTransform[ 1];

                        switch( aTransformName) {

                            case 'translate':

                                aCallFunction = the2DContext[aTransformName];
                                if( aCallFunction) {

                                    if( theInverse) {
                                        someCallArguments = someCallArguments.slice();
                                        someCallArguments[ 0] = 0 - someCallArguments[ 0];
                                        someCallArguments[ 1] = 0 - someCallArguments[ 1];
                                    }

                                    try {
                                        aCallFunction.apply( the2DContext, someCallArguments);
                                    }
                                    catch( anException) {
                                        if( anException) {}
                                    }
                                }

                                break;



                            case 'scale':

                                aCallFunction = the2DContext[aTransformName];
                                if( aCallFunction) {

                                    if( theInverse) {
                                        someCallArguments = someCallArguments.slice();
                                        someCallArguments[ 0] = (-1) * someCallArguments[ 0];
                                        someCallArguments[ 1] = (-1) * someCallArguments[ 1];
                                    }

                                    try {
                                        aCallFunction.apply( the2DContext, someCallArguments);
                                    }
                                    catch( anException) {
                                        if( anException) {}
                                    }
                                }

                                break;


                            default:

                        }
                    }
                }
            }

            return null;

        })._sName( aPrototype._ModuleName, '_pApplyTransforms')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',       ['Type', 'Performance']],
            [ 'the2DContext',         ['object']],
            [ 'theTransforms',        ['object']], /* ACV OJO Defense TODO the imperative defense considered this optional, while it is required. */
            [ 'theInverse',           ['boolean', 'optional']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pApplyTransforms._sDesc(
            'Apply to the 2D context the supplied transformations, optionally applying the inverse transformations.');

            aPrototype._doc+=('\n\n' + aPrototype._pApplyTransforms._doc);
        }









            return aPrototype;
    })();
    if(m_Instrument.cDocFuncs) {
        _privateMembers.push(_prot_View);
       _doc+=('\n\n' + _prot_View._doc);
    }






    var SubProt_View = (function( ) {

            this._v_Prot_View = _prot_View;
            this._v_Prot = this._v_Prot_View;

        })._sName( _displayName, 'SubProt_View')._sTrace(_cTr);
    SubProt_View.prototype = _prot_View;
    _publicMembers.push(SubProt_View);
    if(m_Instrument.cDocFuncs) {
        SubProt_View._sDesc(
        'Factory to create new instances of View to serve as prototype for more specific types of views.');

        _doc+=('\n\n' + SubProt_View._doc);
    }




    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        SubProt_View:  SubProt_View
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_View')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Identifiable',
        'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_Geometry'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Identifiable,
        m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_Geometry) {

            return aM_View(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Identifiable,
                m_Defense, m_Error, m_Instrument,
                m_Trace, m_Log, m_Geometry);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_View.displayName]=aM_View(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Geometry']
        );
    }
    else {
        ChoirJS_Module_View= aM_View(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_Geometry
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_View')
}

