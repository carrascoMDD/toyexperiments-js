/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ChantTree')
}



var aM_ChantTree = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Error, m_Instrument, m_Trace, m_Defense,
                             m_Zebra, m_Score, m_Performance) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ChantTree')
    }


    if( m_Performance) {}


    var _displayName = 'm_ChantTree';

    var _doc = _displayName +' module. Functions to execute Note functions according to a Chant.';

    var _privateMembers = [];
    var _publicMembers = [];


    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');


    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';


    var _cTrBuildTree = _cTr && false && m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTrBuildTree', _cTr && false);
    _doc+=('\n\n' +  JSON.stringify({_cTrBuildTree: _cTrBuildTree}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions building the tree model.';


    var _c_CanvasWidth = m_ConstValues_Tools.fConst( _displayName, '_c_CanvasWidth', 512);
    _doc+=('\n\n' +  JSON.stringify({_c_CanvasWidth: _c_CanvasWidth}, null, 4));


    var _c_CanvasHeight = m_ConstValues_Tools.fConst( _displayName, '_c_CanvasHeight', 384);
    _doc+=('\n\n' +  JSON.stringify({_c_CanvasHeight: _c_CanvasHeight}, null, 4));




    _doc+=('\n\nModule functions:');





    var _fTreeModelFromChant = (function (theChant) {

        var aRoot = _fRootNodeFromChant( theChant);

        var aTreeModel = new m_Zebra.zebra.data.TreeModel(aRoot);

        _pBuildTreeNodes(aTreeModel, aRoot);

        return aTreeModel;

    })._sName( _displayName, '_fTreeModelFromChant')._sTrace(_cTr)._DefendWith([
        [ 'theChant',       ['Type', 'Chant']]
    ]);
    _privateMembers.push(_fTreeModelFromChant);
    if(m_Instrument.cDocFuncs) {
        _fTreeModelFromChant._sDesc('');
        _doc+=('\n\n' + _fTreeModelFromChant._doc);
    }









    var _fRootNodeFromChant = (function (theChant) {

        var aRoot = new m_Zebra.zebra.data.Item( _fNodeLabel(theChant));
        aRoot._v_Chant = theChant;
        return aRoot;

    })._sName( _displayName, '_fRootNodeFromChant')._sTrace(_cTr)._DefendWith([
        [ 'theChant',       ['Type', 'Chant']]
    ]);
    _privateMembers.push(_fRootNodeFromChant);
    if(m_Instrument.cDocFuncs) {
        _fRootNodeFromChant._sDesc('');
        _doc+=('\n\n' + _fRootNodeFromChant._doc);
    }








    var _fNodeFromChant = (function (theChant) {

        var aNode = new m_Zebra.zebra.data.Item( _fNodeLabel(theChant));
        aNode._v_Chant = theChant;
        return aNode;

    })._sName( _displayName, '_fNodeFromChant')._sTrace(_cTrBuildTree)._DefendWith([
        [ 'theChant',       ['Type', 'Chant']]
    ]);
    _privateMembers.push(_fNodeFromChant);
    if(m_Instrument.cDocFuncs) {
        _fNodeFromChant._sDesc('');
        _doc+=('\n\n' + _fNodeFromChant._doc);
    }








    var _fNodeLabel = (function (theChant) {

        var aLabel = '';
        aLabel += ('' + (theChant._v_UID ?  theChant._v_UID : '!'));

        aLabel += (theChant._v_MayBegin ?  '  mayB' : '');
        aLabel += (theChant._v_Sung ?  '  sung' : '');

        aLabel += ('  [' + (theChant._v_Chants ? theChant._v_Chants.length : '')  + ']');

        var aChantable = theChant._v_Chantable;

        if ( aChantable) {
            aLabel += (' ' + (aChantable._v_Type ? aChantable._v_Type : '?'));
            aLabel += ( ' ' + (aChantable._v_UID ?  aChantable._v_UID : '!'));


            if( m_Score.cOrchestrableTypeNames.indexOf( aChantable._v_Type) >= 0) {
                aLabel += ('  ^' + (aChantable._v_OrchestrationKind ?  aChantable._v_OrchestrationKind : '?'));
            }

            if( m_Score.cWithSectionsOrVoicesTypeNames.indexOf( aChantable._v_Type) >= 0) {
                aLabel += ('  [' + (aChantable._v_SectionsOrVoices ? aChantable._v_SectionsOrVoices.length : '0')  + ']');
            }
            else {
                if( m_Score.cWithPhrasesOrNotesTypeNames.indexOf( aChantable._v_Type) >= 0) {
                    aLabel += ('  [' + (aChantable._v_PhrasesOrNotes ? aChantable._v_PhrasesOrNotes.length : '0')  + ']');
                }
                else {
                    if( aChantable._v_Type == 'Note') {
                        aLabel += ('  #' + (aChantable._v_NoteHandler ?  (aChantable._v_NoteHandler._UUID ? aChantable._v_NoteHandler._UUID : '?') : '?'));
                    }
                }
            }
        }

        /*
        if( theChant._v_ActionsDone && theChant._v_ActionsDone.length) {
            aLabel += '\n';
            aLabel += (theChant._v_ActionsDone.join('\n'));
        }
        */

        return aLabel;

    })._sName( _displayName, '_fNodeLabel')._sTrace(_cTrBuildTree)._DefendWith([
        [ 'theChant',       ['Type', 'Chant']]
    ]);
    _privateMembers.push(_fNodeLabel);
    if(m_Instrument.cDocFuncs) {
        _fNodeLabel._sDesc('');
        _doc+=('\n\n' + _fNodeLabel._doc);
    }






    var _pBuildTreeNodes = (function (theTreeModel, theParentNode) {

        var aChant = theParentNode._v_Chant;

        var someSubChants = aChant._v_Chants;
        if( !( someSubChants && someSubChants.length)) {
            return null;
        }

        var aNumSubChant;
        var aSubChantIndex;
        var aSubNode;
        var someSubNodes;

        someSubNodes = [];

        aNumSubChant = someSubChants.length;
        for ( aSubChantIndex = 0; aSubChantIndex < aNumSubChant; aSubChantIndex++) {
            var aSubChant = someSubChants[aSubChantIndex];
            if( aSubChant) {
                aSubNode = _fNodeFromChant( aSubChant);
                if (aSubNode) {
                    someSubNodes.push( aSubNode);
                }
            }
        }


        var aNumSubNodes;
        var aSubNodeIndex;
        if( someSubNodes) {
            aNumSubNodes = someSubNodes.length;
            for ( aSubNodeIndex = 0; aSubNodeIndex < aNumSubNodes; aSubNodeIndex++) {
                aSubNode = someSubNodes[aSubNodeIndex];
                if( aSubNode) {
                    theTreeModel.add( theParentNode, aSubNode);
                }
            }

            for ( aSubNodeIndex = 0; aSubNodeIndex < aNumSubNodes; aSubNodeIndex++) {
                aSubNode = someSubNodes[aSubNodeIndex];
                if( aSubNode) {
                    _pBuildTreeNodes(theTreeModel, aSubNode);
                }
            }

        }

        return null;

    })._sName( _displayName, '_pBuildTreeNodes')._sTrace(_cTrBuildTree)._DefendWith([
        [ 'theTreeModel',   ['object']],
        [ 'theParentNode',  ['object']] /* ACV OJO Defense TODO The imperative Defense included additional tests for  theParentNode._v_Chant._v_Type === 'Chant' */
    ]);
    _privateMembers.push(_pBuildTreeNodes);
    if(m_Instrument.cDocFuncs) {
        _pBuildTreeNodes._sDesc('');
        _doc+=('\n\n' + _pBuildTreeNodes._doc);
    }








    var _pToggleAllNodes = (function( theTree, theNodes) {

            if (!theTree) {
                return null;
            }

            var aNumNodes = theNodes.length;
            for (var anIndex = 0; anIndex < aNumNodes; anIndex++) {
                var aNode = theNodes[ anIndex];
                if ( aNode) {
                    theTree.toggle( aNode);
                    _pToggleAllNodes(theTree, aNode.kids);
                }
            }

            return null;

    })._sName( _displayName, '_pToggleAllNodes')._sTrace(_cTrBuildTree)._DefendWith([
        [ 'theTree',   ['object']],
        [ 'theNodes',  ['object']] /* ACV OJO Defense TODO add constraint array which shall imply that theArgument.length > 0 */
    ]);
    _privateMembers.push(_pToggleAllNodes);
    if(m_Instrument.cDocFuncs) {
        _pToggleAllNodes._sDesc('');
        _doc+=('\n\n' + _pToggleAllNodes._doc);
    }






    var fNewChantTree = (function(theChant, theWidth, theHeight) {

        var aWidth = _c_CanvasWidth;
        if ( typeof theWidth === 'number') {
            aWidth = theWidth;
        }
        var aHeight = _c_CanvasHeight;
        if ( typeof theHeight === 'number') {
            aHeight = theHeight;
        }


        var aCanvas = (new m_Zebra.zCanvas( aWidth, aHeight)).root;


       if(fNewChantTree._Trace) { m_Trace.pStep(
       'Create Tree model from Chant.');}

        var aTreeModel =  _fTreeModelFromChant(theChant);

        aCanvas.properties({
            layout : new m_Zebra.BorderLayout(8,8),
            border : new m_Zebra.Border(),
            padding: 0
         });


        aCanvas.add( m_Zebra.TOP, new m_Zebra.Label('Chant tree: Actions actually performed'));


        var aTree = new m_Zebra.Tree( aTreeModel);
        aTree.select( aTreeModel.root);


        _pToggleAllNodes( aTree, aTreeModel.root.kids);
        _pToggleAllNodes( aTree, aTreeModel.root.kids);

        aTree.setPadding(4);
        var aPanel = new m_Zebra.BorderPan('', new m_Zebra.ScrollPan( aTree));
        aPanel.setPreferredSize( aWidth, aHeight - 16);
        aCanvas.add( m_Zebra.BOTTOM, aPanel);

        return aCanvas;

    })._sName( _displayName, 'fNewChantTree')._sTrace(_cTrBuildTree)._DefendWith([
        [ 'theChant',  ['Type', 'Chant']],
        [ 'theWidth',  ['number', 'optional']],
        [ 'theHeight', ['number', 'optional']]
    ]);
    _publicMembers.push(fNewChantTree);
    if(m_Instrument.cDocFuncs) {
        fNewChantTree._sDesc('');
        _doc+=('\n\n' + fNewChantTree._doc);
    }





    /*
     var fNewTextArea = function() {

     var aTC =_cTr && m_Trace.fBegin( _displayName, fNewDialog);
     try {

    if(fNewChantTree._Trace) { m_Trace.pStep(         'Create zebra Canvas.');}
     var aCanvas = (new m_Zebra.zCanvas(400, 400)).root;

    if(fNewChantTree._Trace) { m_Trace.pStep(         'Add widgets to zebra Canvas.');}
     aCanvas.properties({
     layout : new m_Zebra.BorderLayout(8,8),
     border : new m_Zebra.Border(),
     padding: 8,
     kids: {
     CENTER: new m_Zebra.TextField('Hi ...\n', true),
     BOTTOM: new m_Zebra.Button('Clear').properties({
     canHaveFocus: false
     })
     }
     });

    if(fNewChantTree._Trace) { m_Trace.pStep(         'Add widget to zebra Canvas.');}
     aCanvas.find('//Button')._.add(function() {
     aCanvas.find('//TextField').setValue('Button Clar clicked');
     });


     return aCanvas;
     }
     finally {
     if(aTC) { m_Trace.pEnd( aTC);}
     }
     };
     if(m_Instrument.cDocFuncs) {
     fNewTextArea._sDoc('fNewTextArea', '');
     _doc+=('\n\n' + fNewTextArea._doc);
     }
     */





    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        fNewChantTree: fNewChantTree
    };

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_ChantTree')
    }


    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ChantTree')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Error', 'm_Instrument', 'm_Trace', 'm_Defense',
        'm_Zebra', 'm_Score', 'm_Performance'],
        function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Error, m_Instrument, m_Trace, m_Defense,
                  m_Zebra, m_Score, m_Performance) {

            return aM_ChantTree(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Error, m_Instrument, m_Trace, m_Defense,
                m_Zebra, m_Score, m_Performance);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ChantTree.displayName]=aM_ChantTree(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Zebra'],
            gChoirJS_Modules['m_Score'],
            gChoirJS_Modules['m_Performance']
        );
    }
    else {
        ChoirJS_Module_ChantTree= aM_ChantTree(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Zebra,
            ChoirJS_Module_Score,
            ChoirJS_Module_Performance
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ChantTree')
}

