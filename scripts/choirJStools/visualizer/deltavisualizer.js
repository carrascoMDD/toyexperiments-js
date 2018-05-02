/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_DeltaVisualizer')
}



var aM_DeltaVisualizer = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Defense, m_Error, m_Instrument, m_Trace, m_Log, m_DeltaBroker) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_DeltaVisualizer')
    }

    if( m_Log) {}


    var _displayName = 'm_DeltaVisualizer';

    var _doc = _displayName +' module. Functions to visualize received Deltas in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';


    var _c_CanvasWidth =m_ConstValues_Tools.fConst( _displayName, '_c_CanvasWidth', 512);
    _doc+=('\n\n' +  JSON.stringify({_c_CanvasWidth: _c_CanvasWidth}, null, 4));


    var _c_CanvasHeight =m_ConstValues_Tools.fConst( _displayName, '_c_CanvasHeight', 384);
    _doc+=('\n\n' +  JSON.stringify({_c_CanvasHeight: _c_CanvasHeight}, null, 4));







    _doc+=('\n\nPrototype and Factory for DeltaVisualizer_Simple:');







    var _prot_DeltaVisualizer_Simple = (function() {

        var aPrototype = {};

        aPrototype._v_Type = 'Visualizer';
        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];





        aPrototype.pOpenVisualizer =  (function( theCtxt, theCanvasOrId, theWidth, theHeight) {

            var aCanvas = null;

            if ( typeof theCanvasOrId === 'string') {
                aCanvas = document.getElementById( theCanvasOrId);
            }
            else {
                if( typeof theCanvasOrId === 'object') {
                    aCanvas = theCanvasOrId;
                }
            }

            if ( !aCanvas) {
                try {
                    aCanvas = document.createElement("canvas");
                }
                catch( anException) {}
                if( aCanvas) {
                    if ( typeof theCanvasOrId === 'string') {
                        aCanvas.id = theCanvasOrId;
                    }
                    if( theWidth) {
                        aCanvas.width = theWidth;
                    }
                    else {
                        aCanvas.width = _c_CanvasWidth;
                    }
                    if( theHeight) {
                        aCanvas.height = theHeight;
                    }
                    else {
                        aCanvas.height = _c_CanvasHeight;
                    }
                    document.body.appendChild( aCanvas);
                }
            }

            if (!aCanvas) {
                throw new m_Error.Error('CanvasCreationError', {module: aPrototype._ModuleName, function: aPrototype.pOpenVisualizer});
            }
            if ( theWidth && !( aCanvas.width === theWidth)) {
                aCanvas.width = theWidth;
            }
            if ( theHeight && !( aCanvas.height === theHeight)) {
                aCanvas.height = theHeight;
            }


            var a2DContext = null;
            try {
                a2DContext = aCanvas.getContext('2d');
            }
            catch( anException) {}
             if (!a2DContext) {
                 throw new m_Error.Error('CanvasContext2DCreationError', {module: aPrototype._ModuleName, function: aPrototype.pOpenVisualizer});
            }

            this._v_Canvas = aCanvas;
            this._v_2DContext = a2DContext;


            this._v_2DContext.fillStyle="#000000";
            this._v_2DContext.fillRect(0, 0, aCanvas.width, aCanvas.height);

            return null;

        })._sName( aPrototype._ModuleName, 'pOpenVisualizer')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],                                                    /* ACV OJO Defense TODO the imperative defense included assertions on the object having a Performance property and object */
            [ 'theCanvasOrId', [ 'typeof', 'object', 'string', 'optional']], /* ACV OJO Defense TODO make sure this constraint works . It is also used in motionpics */
            [ 'theWidth',  ['number', 'optional']],
            [ 'theHeight', ['number', 'optional']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pOpenVisualizer._sDesc('');
            aPrototype._doc+=('\n\n' +  aPrototype.pOpenVisualizer._doc);
        }







        aPrototype.pVisualizeDeltas = (function( theCtxt, thePerformance, theDeltas) {

            var aNumDeltas = theDeltas.length;

            this._v_2DContext.font="10px Arial";
            this._v_2DContext.fillStyle="#FFFFFF";

            for ( var anIndex=0; anIndex < aNumDeltas; anIndex++) {
                var aDelta = theDeltas[ anIndex];
                if ( aDelta) {
                    this._v_Y += 14;
                    var aDeltaText = '';
                    try {
                        aDeltaText = JSON.stringify( aDelta);
                    }
                    catch( anException) {
                        aDeltaText = '!!!EXCEPTION JSON.stringify Delta ' + anException;
                    }

                    if( aPrototype.pVisualizeDeltas._Trace) { m_Trace.pStep(
                    'VISUALIZE DELTA @ Y = ' + this._v_Y + ' ' + aDeltaText);}

                    this._v_2DContext.fillText( aDeltaText, 0, this._v_Y);
                }
            }


            if( theDeltas) {}
            return null;

        })._sName( aPrototype._ModuleName, 'pVisualizeDeltas')._sTrace(_cTr)._sDesc('')._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',       ['Type', 'Performance']],
            [ 'theDeltas',            ['object']] /* ACV OJO Defense TODO add constraint array for object.length > 0 */
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pVisualizeDeltas._sDesc('');
            aPrototype._doc+=('\n\n' +  aPrototype.pVisualizeDeltas._doc);
        }





        return aPrototype;
    })();
    if(m_Instrument.cDocFuncs) {
        _prot_DeltaVisualizer_Simple.displayName='Prototype _prot_DeltaVisualizer_Simple';
        _privateMembers.push(_prot_DeltaVisualizer_Simple);
        _prot_DeltaVisualizer_Simple._doc='Prototype _prot_DeltaVisualizer_Simple';
        _doc+=('\n\n' + _prot_DeltaVisualizer_Simple._doc);
    }






    var _f_Constructor_DeltaVisualizer_Simple = (function( theCtxt, thePerformance) {

        this._v_Performance =     thePerformance;

        this._v_Canvas=           null;
        this._v_2DContext=        null;
        this._v_NodesByChoirUID=  {};

        if( this._v_Canvas) {}
        if( this._v_2DContext) {}
        if( this._v_NodesByChoirUID) {}

    })._sName( _displayName, '_f_Constructor_DeltaVisualizer_Simple')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',       ['Type', 'Performance']]
    ]);
    _f_Constructor_DeltaVisualizer_Simple.prototype = _prot_DeltaVisualizer_Simple;
    _publicMembers.push(_f_Constructor_DeltaVisualizer_Simple);
    if(m_Instrument.cDocFuncs) {
        _f_Constructor_DeltaVisualizer_Simple._sDesc('');
        _doc+=('\n\n' + _f_Constructor_DeltaVisualizer_Simple._doc);
    }







    _doc+=('\n\nModule functions:');




    var fOpenVisualizer = (function( theCtxt, thePerformance, theCanvasOrId, theWidth, theHeight) {  /* ACV OJO TODO theHeight was actually written as theHeigh in the imperative defense function. Probably now it is perfectly ok, but be aware of some side effect if it was passed down as undefined  */

        var aVisualizer = new _f_Constructor_DeltaVisualizer_Simple( theCtxt, thePerformance, theCanvasOrId, theWidth, theHeight);
        if (!aVisualizer) {
            return null;
        }
        aVisualizer.pOpenVisualizer( theCtxt, theCanvasOrId, theWidth, theHeight);

        var aDeltaBrokerInterest = (function() {
            var aVisualizerHere = aVisualizer;
            return function( theCtxt_arg, thePerformance_arg, theDeltas) {
                aVisualizerHere.pVisualizeDeltas( theCtxt, thePerformance_arg, theDeltas);
            }
        })();

        /* ACV OJO TODO theCTxt */
        m_DeltaBroker.pRegisterInterest( theCtxt, thePerformance, aDeltaBrokerInterest);

        return aVisualizer;

    })._sName( _displayName, 'fOpenVisualizer')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'thePerformance',    ['Type', 'Performance']],
        [ 'theCanvasOrId',     ['typeof', 'object', 'string', 'optional']],
        [ 'theWidth',          ['number', 'optional']],
        [ 'theHeight',         ['number', 'optional']]
    ]);
    _publicMembers.push(fOpenVisualizer);
    if(m_Instrument.cDocFuncs) {
        fOpenVisualizer._sDesc(
        'Invoke DeltaVisualizer Factory to create a new DeltaVisualized, ' +
        'and register an interest on DeltaBroker to deliver deltas to the DeltaVisualizer.');

        _doc+=('\n\n' + fOpenVisualizer._doc);
    }












    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        fOpenVisualizer:  fOpenVisualizer
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_DeltaVisualizer')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx',  'm_Defense', 'm_Error', 'm_Instrument', 'm_Trace', 'm_Log', 'm_DeltaBroker'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Defense, m_Error, m_Instrument, m_Trace, m_Log, m_DeltaBroker) {

            return aM_DeltaVisualizer(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Defense, m_Error, m_Instrument, m_Trace, m_Log, m_DeltaBroker);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_DeltaVisualizer.displayName]=aM_DeltaVisualizer(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_DeltaBroker']
        );
    }
    else {
        ChoirJS_Module_DeltaVisualizer= aM_DeltaVisualizer(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_DeltaBroker
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_DeltaVisualizer')
}

