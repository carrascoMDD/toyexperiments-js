/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ViewLoop')
}



var aM_LoopView = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
    m_Instrument, m_Trace, m_Log, m_ViewComposite, m_ViewError, m_ViewIteration) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ViewLoop')
    }

    if( m_Log) {}


    var _displayName = 'm_ViewLoop';

    var _doc = _displayName +' module. Functions to visualize received Changes in a Canvas.';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';



    _doc+=('\n\nPrototype and Factory for LoopView:');


    var _prot_LoopView = (function() {

        var aPrototype = new m_ViewComposite.SubProt_CompositeView();

        aPrototype._v_Type = 'LoopView';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];






        aPrototype._pOpenView =  (function( theCtxt, theChronographView, theChangeNode_Loop) {

            this._v_ParentProt_LoopView._pOpenView.apply( this, [theCtxt]);

            if(aPrototype._pOpenView._Trace) { m_Trace.sThis(this);}


            this._v_ParentView = theChronographView;

            this._v_ParentView.pAddChildView( theCtxt, this._v_Performance, this);

            this._v_ChangeNode_Loop = theChangeNode_Loop;

            this._pBuildMissingChildrenViews( theCtxt);

            var aView = this;
            this._v_OnChangeInterest = (function() {
                var aView_here = aView;
                return aView_here._v_ChangeNode_Loop.fOnChange( theCtxt, function( theCtxt_arg, theAspect, theDetails) {
                    aView_here.pRefresh( theCtxt_arg, theAspect, theDetails);
                });
            })();

            return null;

        })._sName( aPrototype._ModuleName, '_pOpenView')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theChronographView', ['Type', 'ChronographView']],
            [ 'theChangeNode_Loop', ['Type', 'ChangeNode_Loop']]
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

            var aNumErrors = this._v_ChangeNode_Loop._v_ErrorNodes.length;
            for ( anIndex = 0; anIndex < aNumErrors; anIndex++) {
                aChangeNode = this._v_ChangeNode_Loop._v_ErrorNodes[anIndex];
                if ( aChangeNode) {
                    if( aChangeNode._v_Type) {

                        switch ( aNode._v_Type) {

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


            var aNumIterations = this._v_ChangeNode_Loop._v_Nodes_Iteration.length;
            for ( anIndex = 0; anIndex < aNumIterations; anIndex++) {
                aChangeNode = this._v_ChangeNode_Loop._v_Nodes_Iteration[anIndex];
                if ( aChangeNode) {
                    if( aChangeNode._v_Type) {

                        switch ( aChangeNode._v_Type) {

                            case 'ChangeNode_Iteration':
                                if( someChildrenNodesWithView.indexOf( aChangeNode) < 0) {
                                    someChildrenNodesWithoutView.push( aChangeNode);
                                }
                                continue;

                            default:
                                continue;
                        }
                    }
                }
                var xxxx= 1; if( xxxx) {} /* CQT */
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

                            case 'ChangeNode_Iteration':
                                aNewView = new m_ViewIteration.f_Constructor_IterationView( theCtxt, this._v_Performance, this, aChangeNode);
                                if( !aNewView) {
                                    throw new m_Iteration.Iteration();
                                }
                                continue;

                            default:
                                continue;
                        }
                    }
                }
                var xxxxx= 1; if( xxxxx) {} /* CQT */
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


            if( theAspect === '_v_Change_End') {
                this.pInvalidate( theCtxt);
                return null;
            }


            if( ['_v_ErrorNodes', '_v_Nodes_Iteration'].indexOf( theAspect) >= 0) {
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
        var _cHei_Total = _cTop_LiveBox + _cHei_Millis + 2;

        var _cCol = 4;

        var _cWid_Millis = 32;

        var _cCol_DurationMillis = _cCol;
        var _cWid_DurationMillis = _cWid_Millis + 0;
        var _cSep_DurationMillis = 4;
        _cCol = _cCol_DurationMillis + _cWid_DurationMillis + _cSep_DurationMillis;

        var _cCol_BeginMillis = _cCol;
        var _cWid_BeginMillis = _cWid_Millis + 0;
        var _cSep_BeginMillis = 4;
        _cCol = _cCol_BeginMillis + _cWid_BeginMillis + _cSep_BeginMillis;

        var _cCol_EndMillis = _cCol;
        var _cWid_EndMillis = _cWid_Millis + 0;
        var _cSep_EndMillis = 4;
        _cCol = _cCol_EndMillis + _cWid_EndMillis + _cSep_EndMillis;

        var _cCol_BeginMode = _cCol;
        var _cWid_BeginMode = 24;

        var _cCol_LiveBox  = _cCol_BeginMode + 0;
        var _cWid_LiveBox  = _cWid_BeginMode;
        var _cSep_LiveBox  = 0;
        _cCol = Math.max( _cCol, _cCol_LiveBox + _cWid_LiveBox + _cSep_LiveBox);


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
        var _cSep_NumErrors    = 16;
        _cCol = _cCol_NumErrors + _cWid_NumErrors + _cSep_NumErrors;

        var _cCol_NumIterations    = _cCol;
        var _cWid_NumIterations    = 24;
        var _cSep_NumIterations    = 16;
        _cCol = _cCol_NumIterations + _cWid_NumIterations + _cSep_NumIterations;

        /*
         var _cCol_ViewUID    = _cCol;
         var _cWid_ViewUID    = 24;
         var _cSep_ViewUID    = 16;
         _cCol = _cCol_ViewUID + _cWid_ViewUID + _cSep_ViewUID;

         var _cCol_NodeUID    = _cCol;
         var _cWid_NodeUID    = 24;
         var _cSep_NodeUID    = 16;
         _cCol = _cCol_NodeUID + _cWid_NodeUID + _cSep_NodeUID;
         */
        var _cRight = _cCol;





    aPrototype._pComposeDisplayList = (function( theCtxt, thePerformance, the2DContext) {

            if(aPrototype._pComposeDisplayList._Trace) { m_Trace.sThis(this);}

            if( thePerformance) {}
            if( the2DContext) {}


            if (!this._v_DisplayList) {

                var aBeginMillis = null;
                var anEndMillis = null;
                var aDurationMillis = null;
                /* var aChangeNode_UID = ''; */
                var aHasBegin = false;
                var aHasEnd = false;
                var aBeginMode = '';
                var aNumIterations = null;
                var aNumErrors = null;
                var aFulfilledMillis = null;


                if( this._v_ChangeNode_Loop) {

                   /*  aChangeNode_UID = this._v_ChangeNode_Loop._v_UID; */
                    aHasBegin = this._v_ChangeNode_Loop._v_Change_Begin ? true: false;
                    aHasEnd   = this._v_ChangeNode_Loop._v_Change_End   ? true: false;

                    if( aHasBegin) {

                        if( !( this._v_ChangeNode_Loop._v_Change_Begin._v_StartMillis === null)) {
                            aBeginMillis = this._v_ChangeNode_Loop._v_Change_Begin._v_StartMillis;
                        }

                        if( this._v_ChangeNode_Loop._v_Change_Begin._v_ParentChange) {

                            switch( this._v_ChangeNode_Loop._v_Change_Begin._v_ParentChange._v_Kind) {
                                case 'Start':
                                    aBeginMode = 'ST';
                                    break;

                                case 'Yield.MessageChannel.Handled':
                                    aBeginMode = String.fromCharCode(0x23CF)  /* EJECT SYMBOL */ +
                                        String.fromCharCode(0x2326); /* ERASE TO THE RIGHT */
                                    break;

                                case 'Yield.Timeout.Handled':
                                    aBeginMode = String.fromCharCode(0x23CF)  /* EJECT SYMBOL */ +
                                        String.fromCharCode(0x231B); /* HOURGLASS */
                                    break;

                                case 'WaitUntilWakeUp.Timeout.Handled':
                                    aBeginMode = 'AW';
                                    break;

                                case 'WaitForWork.Timeout.Handled':
                                    aBeginMode = 'WK';
                                    break;

                                default:
                            }
                        }
                    }
                    if( !aBeginMode) {
                        aBeginMode = '?';
                    }

                    if( this._v_ChangeNode_Loop._v_ChangeFulfilled) {
                        aFulfilledMillis = this._v_ChangeNode_Loop._v_ChangeFulfilled._v_StartMillis;
                    }

                    if( aHasEnd) {
                        if( !( this._v_ChangeNode_Loop._v_Change_End._v_StartMillis === null)) {
                            anEndMillis = this._v_ChangeNode_Loop._v_Change_End._v_StartMillis;
                            if( aHasBegin) {
                                if( !( this._v_ChangeNode_Loop._v_Change_Begin._v_StartMillis === null)) {
                                    aDurationMillis= this._v_ChangeNode_Loop._v_Change_End._v_StartMillis -
                                        this._v_ChangeNode_Loop._v_Change_Begin._v_StartMillis;
                                }
                            }
                        }
                    }

                    aNumIterations = this._v_ChangeNode_Loop._v_Nodes_Iteration.length;
                    aNumErrors     = this._v_ChangeNode_Loop._v_ErrorNodes.length;

                }



                this._v_DisplayList = [];

                this._v_DisplayList.push({
                    _v_2DContext_Calls: [
                        [ 'space', [ 0, _cHei_Total]]
                    ]
                });

                this._v_DisplayList.push({
                    _v_2DContext_Properties: [
                        [ 'strokeStyle', '#008000'],
                        [ 'lineWidth', 1]
                    ],
                    _v_2DContext_Calls: [
                        [ 'hLine', [ 0, 0, _cRight]]
                    ]
                });



                if ( !( aDurationMillis === null)) {
                    this._v_DisplayList.push({
                        _v_2DContext_Properties: [
                            [ 'fillStyle', '#FFFFFF'],
                            [ 'strokeStyle', '#008000']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillRect', [ _cCol_DurationMillis, _cTop_LiveBox, _cWid_DurationMillis, _cHei_Millis]],
                            [ 'strokeRect', [ _cCol_DurationMillis, _cTop_LiveBox, _cWid_DurationMillis, _cHei_Millis]]
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
                            [ 'fillStyle', '#FFFFFF'],
                            [ 'strokeStyle', '#008000']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillRect', [ _cCol_BeginMillis, _cTop_LiveBox, _cWid_BeginMillis, _cHei_Millis]],
                            [ 'strokeRect', [ _cCol_BeginMillis, _cTop_LiveBox, _cWid_BeginMillis, _cHei_Millis]]
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
                            [ 'fillStyle', '#FFFFFF'],
                            [ 'strokeStyle', '#008000']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillRect', [ _cCol_EndMillis, _cTop_LiveBox, _cWid_EndMillis, _cHei_Millis]],
                            [ 'strokeRect', [ _cCol_EndMillis, _cTop_LiveBox, _cWid_EndMillis, _cHei_Millis]]
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
                            [ 'fillRect', [ _cCol_LiveBox, _cTop_LiveBox, _cWid_LiveBox, _cHei_LiveBox]]
                        ]
                    },
                    {
                        _v_2DContext_Properties: [
                            [ 'fillStyle', ( '#008000')]
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillRect', [ _cCol_LiveBox + _cWid_LiveBox, _cTop_LiveBox, _cRight - _cCol_LiveBox - _cWid_LiveBox, _cHei_LiveBox]]
                        ]
                    },

                    {
                        _v_2DContext_Properties: [
                            [ 'font',      '10px Arial'],
                            [ 'fillStyle', '#FFFFFF']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillText', [ aBeginMode, _cCol_BeginMode, _cTextTop]]

                        ]
                    }
                ]);


                if( ! ( aFulfilledMillis === null)) {

                    this._v_DisplayList.push({
                        _v_2DContext_Properties: [
                            [ 'font',      '10px Arial'],
                            [ 'fillStyle', '#FFFFFF']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillText', [ '' + aFulfilledMillis, _cCol_FFMillis, _cTextTop]]

                        ]
                    });
                }

                this._v_DisplayList.push({
                    _v_2DContext_Properties: [
                        [ 'font',      '10px Arial'],
                        [ 'fillStyle', '#FFFFFF']
                    ],
                    _v_2DContext_Calls: [
                        [ 'fillText', [ String.fromCharCode(0x2941), _cCol_Type, _cTextTop]] /* CLOCKWISE CLOSED CIRCLE ARROW */

                    ]
                });


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


                if( !( aNumIterations === null) && aNumIterations) {
                    this._v_DisplayList.push({
                        _v_2DContext_Properties: [
                            [ 'font',      '10px Arial'],
                            [ 'fillStyle', '#FFFFFF']
                        ],
                        _v_2DContext_Calls: [
                            [ 'fillText', [ String.fromCharCode(0x21B7) + aNumIterations,    /* CLOCKWISE TOP SEMICIRCLE ARROW */
                                _cCol_NumIterations, _cTextTop]]

                        ]
                    })
                }

                /*
                this._v_DisplayList.push({
                    _v_2DContext_Properties: [
                        [ 'font',      '10px Arial'],
                        [ 'fillStyle', '#FFFFFF']
                    ],
                    _v_2DContext_Calls: [
                        [ 'fillText', [ this._v_UID,                 _cCol_ViewUID, _cTextTop]],
                        [ 'fillText', [ '(' + aChangeNode_UID + ')', _cCol_NodeUID, _cTextTop]]

                    ]
                })
                */
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
        _prot_LoopView.displayName='Prototype _prot_LoopView';
        _privateMembers.push(_prot_LoopView);
        _doc+=_prot_LoopView._doc;
    }





    var f_Constructor_LoopView = (function( theCtxt, thePerformance, theChronographView, theChangeNode_Loop) {

        this._v_Prot_LoopView       = _prot_LoopView;
        this._v_Prot                = this._v_Prot_LoopView;
        this._v_ParentProt_LoopView = this._v_Prot_LoopView._v_Prot_CompositeView;

        this._v_Type = 'LoopView';

        this._v_Performance =     thePerformance;
        this._v_ParentView = null;

        this._v_ChangeNode_Loop = null;

        this._pOpenView( theCtxt,  theChronographView, theChangeNode_Loop);

    })._sName( _displayName, 'f_Constructor_LoopView')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'thePerformance',     ['Type', 'Performance']],
            [ 'theChronographView', ['Type', 'ChronographView']],
            [ 'theChangeNode_Loop', ['Type', 'ChangeNode_Loop']]
        ]);
    f_Constructor_LoopView.prototype = _prot_LoopView;
    _publicMembers.push(f_Constructor_LoopView);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_LoopView._sDesc('Factory to create new instances of LoopView.');
        _doc+=('\n\n' + f_Constructor_LoopView._doc);
    }








    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        f_Constructor_LoopView:  f_Constructor_LoopView
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ViewLoop')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_ViewComposite', 'm_ViewError', 'm_ViewIteration'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_ViewComposite, m_ViewError, m_ViewIteration) {

            return aM_LoopView(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
                m_Trace, m_Log, m_ViewComposite, m_ViewError, m_ViewIteration);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_LoopView.displayName]=aM_LoopView(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_ViewComposite'],
            gChoirJS_Modules['m_ViewError'],
            gChoirJS_Modules['m_ViewIteration']
        );
    }
    else {
        ChoirJS_Module_LoopView= aM_LoopView(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_CompositeView,
            ChoirJS_Module_ErrorView,
            ChoirJS_Module_IterationView
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ViewLoop')
}

