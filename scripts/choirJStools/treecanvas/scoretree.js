/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ScoreTree')
}



var aM_ScoreTree = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Error, m_Instrument, m_Trace, m_Defense,
                             m_Zebra, m_Score) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ScoreTree')
    }


    var _displayName = 'm_ScoreTree';

    var _doc = _displayName +' module. Functions to execute Note functions according to a Score.';

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







    var _fTreeModelFromScore = (function (theScore) {

        var aRoot = _fRootNodeFromScore( theScore);

        var aTreeModel = new m_Zebra.zebra.data.TreeModel(aRoot);

        _pBuildTreeNodes(aTreeModel, aRoot);

        return aTreeModel;

    })._sName( _displayName, '_fTreeModelFromScore')._sTrace(_cTr)._DefendWith([
        [ 'theScore',       ['Type', 'Score']]
    ]);
    _privateMembers.push(_fTreeModelFromScore);
    if(m_Instrument.cDocFuncs) {
        _fTreeModelFromScore._sDesc('');
        _doc+=('\n\n' + _fTreeModelFromScore._doc);
    }







    var _fRootNodeFromScore = (function (theScore) {

        var aRoot = new m_Zebra.zebra.data.Item( _fNodeLabel(theScore));
        aRoot._v_Scored = theScore;
        return aRoot;

    })._sName( _displayName, '_fRootNodeFromScore')._sTrace(_cTr)._DefendWith([
        [ 'theScore',       ['Type', 'Score']]
    ]);
    _privateMembers.push(_fRootNodeFromScore);
    if(m_Instrument.cDocFuncs) {
        _fRootNodeFromScore._sDesc('');
        _doc+=('\n\n' + _fRootNodeFromScore._doc);
    }








    var _fNodeFromScored = (function (theScored) {

        var aNode = new m_Zebra.zebra.data.Item( _fNodeLabel(theScored));
        aNode._v_Scored = theScored;
        return aNode;

    })._sName( _displayName, '_fNodeFromScored')._sTrace(_cTrBuildTree)._DefendWith([
        [ 'theScored',  ['Type'].concat(m_Score.cScoredTypeNames)] /* ACV OJO Defense TODO make sure this idiom works. Used in other places too. */
    ]);
    _privateMembers.push(_fNodeFromScored);
    if(m_Instrument.cDocFuncs) {
        _fNodeFromScored._sDesc('');
        _doc+=('\n\n' + _fNodeFromScored._doc);
    }








    var _fNodeLabel = (function (theScored) {

        var aLabel = '';
        aLabel += (theScored._v_Type ? theScored._v_Type : '?');
        aLabel += (' ' + (theScored._v_UID ?  theScored._v_UID : '!'));

        if( m_Score.cOrchestrableTypeNames.indexOf( theScored._v_Type) >= 0) {
            aLabel += ('  ^' + (theScored._v_OrchestrationKind ?  theScored._v_OrchestrationKind : '?'));
        }

        if( m_Score.cWithSectionsOrVoicesTypeNames.indexOf( theScored._v_Type) >= 0) {
            aLabel += ('  [' + (theScored._v_SectionsOrVoices ? theScored._v_SectionsOrVoices.length : '0')  + ']');
        }
        else {
            if( m_Score.cWithPhrasesOrNotesTypeNames.indexOf( theScored._v_Type) >= 0) {
                aLabel += ('  [' + (theScored._v_PhrasesOrNotes ? theScored._v_PhrasesOrNotes.length : '0')  + ']');
            }
            else {
                if( theScored._v_Type == 'Note') {
                    aLabel += ('  #' + (theScored._v_NoteHandler ?  (theScored._v_NoteHandler._UUID ? theScored._v_NoteHandler._UUID : '?') : '?'));
                }
            }
        }

        return aLabel;

    })._sName( _displayName, '_fNodeLabel')._sTrace(_cTrBuildTree)._DefendWith([
        [ 'theScored',  ['Type'].concat(m_Score.cScoredTypeNames)] /* ACV OJO Defense TODO make sure this idiom works. Used in other places too. */
    ]);
    _privateMembers.push(_fNodeLabel);
    if(m_Instrument.cDocFuncs) {
        _fNodeLabel._sDesc('');
        _doc+=('\n\n' + _fNodeLabel._doc);
    }






    var _pBuildTreeNodes = (function ( theTreeModel, theParentNode) {

        var aScored = theParentNode._v_Scored;

        var someSubScored;
        if ( m_Score.cWithSectionsOrVoicesTypeNames.indexOf( aScored._v_Type) >= 0) {
            someSubScored = aScored._v_SectionsOrVoices;
        }
        else {
            if ( m_Score.cWithPhrasesOrNotesTypeNames.indexOf( aScored._v_Type) >= 0) {
                someSubScored = aScored._v_PhrasesOrNotes;
            }
        }
        if( !( someSubScored && someSubScored.length)) {
            return null;
        }


        var aNumSubScored;
        var aSubScoredIndex;
        var aSubNode;
        var someSubNodes;

        someSubNodes = [];

        aNumSubScored = someSubScored.length;
        for ( aSubScoredIndex = 0; aSubScoredIndex < aNumSubScored; aSubScoredIndex++) {
            var aSubScored = someSubScored[aSubScoredIndex];
            if( aSubScored) {
                aSubNode = _fNodeFromScored( aSubScored);
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
        [ 'theParentNode',  ['object']] /* ACV OJO Defense TODO The imperative Defense included additional tests for  !( m_Score.cScoredTypeNames.indexOf( theParentNode._v_Scored._v_Type) >= 0) */
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






    var fNewScoreTree = (function(theScore, theWidth, theHeight) {

        if(fNewScoreTree._Trace) { m_Trace.pStep(
        'Create zebra Canvas.');}

        var aWidth = _c_CanvasWidth;
        if ( typeof theWidth === 'number') {
            aWidth = theWidth;
        }
        var aHeight = _c_CanvasHeight;
        if ( typeof theHeight === 'number') {
            aHeight = theHeight;
        }


        var aCanvas = (new m_Zebra.zCanvas( aWidth, aHeight)).root;


        if(fNewScoreTree._Trace) { m_Trace.pStep(
        'Create Tree model from Score.');}

        var aTreeModel =  _fTreeModelFromScore(theScore);


        aCanvas.properties({
            layout : new m_Zebra.BorderLayout(8,8),
            border : new m_Zebra.Border(),
            padding: 0
        });

        aCanvas.add( m_Zebra.TOP, new m_Zebra.Label('Score tree: Plan of actions to perform'));


        var aTree = new m_Zebra.Tree( aTreeModel);
        aTree.select( aTreeModel.root);


        _pToggleAllNodes( aTree, aTreeModel.root.kids);
        _pToggleAllNodes( aTree, aTreeModel.root.kids);

        aTree.setPadding(4);
        var aPanel = new m_Zebra.BorderPan('', new m_Zebra.ScrollPan( aTree));
        aPanel.setPreferredSize( aWidth, aHeight - 16);
        aCanvas.add( m_Zebra.BOTTOM, aPanel);

        return aCanvas;

    })._sName( _displayName, 'fNewScoreTree')._sTrace(_cTrBuildTree)._DefendWith([
        [ 'theScore',  ['Type', 'Score']],
        [ 'theWidth',  ['number', 'optional']],
        [ 'theHeight', ['number', 'optional']]
    ]);
    _publicMembers.push(fNewScoreTree);
    if(m_Instrument.cDocFuncs) {
        fNewScoreTree._sDesc('');
        _doc+=('\n\n' + fNewScoreTree._doc);
    }






    /*
     var fNewTextArea = function() {

     var aTC =_cTr && m_Trace.fBegin( _displayName, fNewDialog);
     try {

     if(aTC) { m_Trace.pTr( aTC, 'Create zebra Canvas.');}
     var aCanvas = (new m_Zebra.zCanvas(400, 400)).root;

     if(aTC) { m_Trace.pTr( aTC, 'Add widgets to zebra Canvas.');}
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

     if(aTC) { m_Trace.pTr( aTC, 'Add widget to zebra Canvas.');}
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

        fNewScoreTree: fNewScoreTree
    };

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_ScoreTree')
    }


    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ScoreTree')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Error', 'm_Instrument', 'm_Trace', 'm_Defense',
        'm_Zebra', 'm_Score'],
        function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Error, m_Instrument, m_Trace, m_Defense,
                  m_Zebra, m_Score) {

            return aM_ScoreTree(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Error, m_Instrument, m_Trace, m_Defense,
                m_Zebra, m_Score);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ScoreTree.displayName]=aM_ScoreTree(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Zebra'],
            gChoirJS_Modules['m_Score']
        );
    }
    else {
        ChoirJS_Module_ScoreTree= aM_ScoreTree(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Zebra,
            ChoirJS_Module_Score
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ScoreTree')
}

