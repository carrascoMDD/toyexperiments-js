/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Geometry')
}


var aM_Geometry = function (m_ConstValues, m_Functionx, m_Instrument, m_Error, m_Defense, m_Trace) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Geometry')
    }


    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */

    var _displayName = 'm_Geometry';

    var _doc=_displayName +' module. Factory and manager functions for geometries like rectangle, and their computations.';



    var _privateMembers = [];
    var _publicMembers = [];





    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';




    _doc+=('\n\nPrototype and Factory for Point:');


    var _prot_Point = (function() {

        "use strict";

        var aPrototype = {};

        aPrototype._v_Type = 'Point';
        aPrototype._v_InstancesType = 'Point';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;





        aPrototype.toString = (function() {

            return '(x=' + this._v_X + ' y=' + this._v_Y + ')';

        })._sName( _displayName, 'toString')._sTrace(false);
        if(m_Instrument.cDocFuncs) {
            aPrototype.toString._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.toString._doc);
        }






        aPrototype.fCopy = (function() {

            return new fPoint( this._v_X, this._v_Y);

        })._sName( _displayName, 'fCopy')._sTrace(false);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fCopy._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.fCopy._doc);
        }







        aPrototype.fAsArgs = (function() {

            return [ this._v_X, this._v_Y];

        })._sName( _displayName, 'fAsArgs')._sTrace(false);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fAsArgs._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.fAsArgs._doc);
        }







        aPrototype.pAddY = (function( theY) {

            this._v_Y += theY;

            return this;

        })._sName( _displayName, 'pAddY')._sTrace(false)._DefendWith([
            [ 'theY',       ['number']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pAddY._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.pAddY._doc);
        }








        aPrototype.pMergeWithPoint = (function( thePoint) {

            if( thePoint._v_X > this._v_X) {
                this._v_X = thePoint._v_X;
            }
            if( thePoint._v_Y > this._v_Y) {
                this._v_Y = thePoint._v_Y;
            }
            return this;

        })._sName( _displayName, 'pMergeWithPoint')._sTrace(false)._DefendWith([
            [ 'thePoint',       ['Point']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pMergeWithPoint._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.pMergeWithPoint._doc);
        }








        aPrototype.fSameAs = (function( thePoint) {

            return ( this._v_X === thePoint._v_X) && ( this._v_Y === thePoint._v_Y);

        })._sName( _displayName, 'fSameAs')._sTrace(false)._DefendWith([
            [ 'thePoint',       ['Type', 'Point']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fSameAs._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.fSameAs._doc);
        }






        aPrototype.fIsZeroPoint = (function() {

            return (!this._v_X) && (!this._v_Y);

        })._sName( _displayName, 'fIsZeroPoint')._sTrace(false);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fIsZeroPoint._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.fIsZeroPoint._doc);
        }







        aPrototype.fIsOnePoint = (function() {

            return ( (this._v_X == 1) || (this._v_X == 1.0)) && ( (this._v_Y== 1) || (this._v_Y == 1.0));

        })._sName( _displayName, 'fIsZeroPoint')._sTrace(false);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fIsZeroPoint._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.fIsZeroPoint._doc);
        }



        return aPrototype;
    })();
    if(m_Instrument.cDocFuncs) {
        _privateMembers.push(_prot_Point);
        _doc+=('\n\n' + _prot_Point._doc);
    }






    var _f_Constructor_Point = (function( theX, theY) {

        this._v_X = theX;
        this._v_Y = theY;

    })._sName( _displayName, '_f_Constructor_Point')._sTrace(false)._DefendWith([
        [ 'theX',       ['number']],
        [ 'theY',       ['number']]
    ]);
    _f_Constructor_Point.prototype = _prot_Point;
    _privateMembers.push(_f_Constructor_Point);
    if(m_Instrument.cDocFuncs) {
        _f_Constructor_Point._sDesc(
        'Constructor to create new instances of Point in representation of a 2D coordinate.');

        _doc+=('\n\n' + _f_Constructor_Point._doc);
    }






    var fPoint = (function( theX, theY) {

        return new _f_Constructor_Point( theX, theY);

    })._sName( _displayName, 'fPoint')._sTrace(false)._DefendWith([
        [ 'theX',       ['number']],
        [ 'theY',       ['number']]
    ]);
    _publicMembers.push(fPoint);
    if(m_Instrument.cDocFuncs) {
        fPoint._sDesc(
        'Constructor to create new instances of Point in representation of a 2D coordinate.');

        _doc+=('\n\n' + fPoint._doc);
    }





    var fZeroPoint = (function( ) {

        return new _f_Constructor_Point( 0, 0);

    })._sName( _displayName, 'fPoint')._sTrace(false);
    _publicMembers.push(fZeroPoint);
    if(m_Instrument.cDocFuncs) {
        fZeroPoint._sDesc(
        'Factory to create a Zero Point.');

        _doc+=('\n\n' + fZeroPoint._doc);
    }












    _doc+=('\n\nPrototype and Factory for Rect:');




    var _prot_Rect = (function() {

        var aPrototype = {};

        aPrototype._v_Type = 'Rect';
        aPrototype._v_InstancesType = 'Rect';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;






        aPrototype.toString = (function() {

            return '(ox=' + this._v_OriginX +
                ' oy=' + this._v_OriginY +
                ' w=' + this._v_Width +
                ' h=' + this._v_Height +
                ' cx=' + this._v_CornerX +
                ' cy=' + this._v_CornerY + ')';

        })._sName( _displayName, 'toString')._sTrace(false);
        if(m_Instrument.cDocFuncs) {
            aPrototype.toString._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.toString._doc);
        }





        aPrototype.fCopy = (function() {

            return new fRectExtent( this._v_OriginX, this._v_OriginY, this._v_Width, this._v_Height);

        })._sName( _displayName, 'fCopy')._sTrace(false);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fCopy._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.fCopy._doc);
        }




        aPrototype.pTranslateBy = (function( thePoint) {

            this._v_OriginX += thePoint._v_X;
            this._v_OriginY += thePoint._v_Y;

            this._v_CornerX  = this._v_OriginX + this._v_Width;
            this._v_CornerY  = this._v_OriginY + this._v_Height;

            return this;

        })._sName( _displayName, 'pTranslateBy')._sTrace(false)._DefendWith([
            [ 'thePoint',       ['Type', 'Point']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pTranslateBy._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.pTranslateBy._doc);
        }







        aPrototype.pAddHeight = (function( theHeight) {

            this._v_Height  += theHeight;

            this._v_CornerY  = this._v_OriginY + this._v_Height;

            return this;

        })._sName( _displayName, 'pAddHeight')._sTrace(false)._DefendWith([
            [ 'theHeight',        ['number']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pAddHeight._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.pAddHeight._doc);
        }





        aPrototype.fIsEmptyRect = (function() {

            return ( this._v_Width <= 0) || ( this._v_Height <= 0);

        })._sName( _displayName, 'fIsEmptyRect')._sTrace(false);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fIsEmptyRect._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.fIsEmptyRect._doc);
        }





        aPrototype.fIsIntersectionEmpty = (function( theRect) {

            var aResult = !(
                this._v_OriginX    <= theRect._v_CornerX &&
                theRect._v_OriginX <= this._v_CornerX &&
                this._v_OriginY    <= theRect._v_CornerY &&
                theRect._v_OriginY <= this._v_CornerY
             );
            if ( aResult) {}
            return aResult;

        })._sName( _displayName, 'fIsIntersectionEmpty')._sTrace(false)._DefendWith([
            [ 'theRect',       ['Type', 'Rect']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fIsIntersectionEmpty._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.fIsIntersectionEmpty._doc);
        }






        aPrototype.fAsArgsExtent = (function() {

            return [ this._v_OriginX, this._v_OriginY, this._v_Width, this._v_Height];

        })._sName( _displayName, 'fAsArgsExtent')._sTrace(false);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fAsArgsExtent._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.fAsArgsExtent._doc);
        }



        aPrototype.fAsArgsCorner = (function() {

            return [ this._v_OriginX, this._v_OriginY, this._v_CornerX, this._v_CornerY];

        })._sName( _displayName, 'fAsArgsCorner')._sTrace(false);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fAsArgsCorner._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.fAsArgsCorner._doc);
        }





        aPrototype.fOrigin = (function() {

            return new fPoint( this._v_OriginX, this._v_OriginY);

        })._sName( _displayName, 'fOrigin')._sTrace(false);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fOrigin._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.fOrigin._doc);
        }





        aPrototype.fSameAs = (function( theRect) {

            return ( this._v_OriginX === theRect._v_OriginX) && ( this._v_OriginY === theRect._v_OriginY) &&
                ( this._v_Width === theRect._v_Width) && ( this._v_Height === theRect._v_Height);

        })._sName( _displayName, 'fSameAs')._sTrace(false)._DefendWith([
            [ 'theRect',       ['Type', 'Rect']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fSameAs._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.fSameAs._doc);
        }



        aPrototype.fPointInRect = (function( thePoint) {

            return ( thePoint._v_X >= this._v_OriginX) && ( thePoint._v_Y >=  this._v_OriginY) &&
                ( thePoint._v_X < this._v_CornerX) && ( thePoint._v_Y < this._v_CornerY);

        })._sName( _displayName, 'fPointInRect')._sTrace(false)._DefendWith([
            [ 'thePoint', ['Type', 'Point']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fPointInRect._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.fPointInRect._doc);
        }








        aPrototype.fScaled = (function( theScaleX, theScaleY) {

            return fRectExtent(
                this._v_OriginX * theScaleX,
                this._v_OriginY * theScaleY,
                this._v_Width   * theScaleX,
                this._v_Height  * theScaleY
            );

        })._sName( _displayName, 'fScaled')._sTrace(false)._DefendWith([
            [ 'theScaleX',       ['number']],
            [ 'theScaleY',       ['number']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fScaled._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.fScaled._doc);
        }






        return aPrototype;
    })();
    if(m_Instrument.cDocFuncs) {
        _privateMembers.push(_prot_Rect);
        _doc+=('\n\n' + _prot_Rect._doc);
    }






    var _f_Constructor_RectExtent = (function( theOriginX, theOriginY, theWidth, theHeight) {

        this._v_OriginX = theOriginX;
        this._v_OriginY = theOriginY;
        this._v_Width   = theWidth;
        this._v_Height  = theHeight;
        this._v_CornerX = theOriginX + theWidth;
        this._v_CornerY = theOriginY + theHeight;

    })._sName( _displayName, 'fRectExtent')._sTrace(false)._DefendWith([
            [ 'theOriginX',       ['number']],
            [ 'theOriginY',       ['number']],
            [ 'theWidth',         ['number']],
            [ 'theHeight',        ['number']]
        ]);
    _f_Constructor_RectExtent.prototype = _prot_Rect;
    _privateMembers.push(_f_Constructor_RectExtent);
    if(m_Instrument.cDocFuncs) {
        _f_Constructor_RectExtent._sDesc(
        'Constructor to create new instances with prototype Rect in representation of a Rectangle.');

        _doc+=('\n\n' + _f_Constructor_RectExtent._doc);
    }






    var fRectExtent = (function( theOriginX, theOriginY, theWidth, theHeight) {

        return new _f_Constructor_RectExtent( theOriginX, theOriginY, theWidth, theHeight);

    })._sName( _displayName, 'fRectExtent')._sTrace(false)._DefendWith([
        [ 'theOriginX',       ['number']],
        [ 'theOriginY',       ['number']],
        [ 'theWidth',         ['number']],
        [ 'theHeight',        ['number']]
    ]);
    _publicMembers.push(fRectExtent);
    if(m_Instrument.cDocFuncs) {
        fRectExtent._sDesc(
        'Factory to create a Rectangle given its origin width and height.');

        _doc+=('\n\n' + fRectExtent._doc);
    }






    var fRectCorner = (function( theOriginX, theOriginY, theCornerX, theCornerY) {


        return new _f_Constructor_RectExtent( theOriginX, theOriginY,
            Math.max( 0, theCornerX - theOriginX),
            Math.max( 0, theCornerY - theOriginY));

    })._sName( _displayName, 'fRectCorner')._sTrace(false)._DefendWith([
        [ 'theOriginX',       ['number']],
        [ 'theOriginY',       ['number']],
        [ 'theCornerX',       ['number']],
        [ 'theCornerY',       ['number']]
    ]);
    _publicMembers.push(fRectCorner);
    if(m_Instrument.cDocFuncs) {
        fRectCorner._sDesc(
        'Factory to create a Rectangle given its origin and corner.');

        _doc+=('\n\n' + fRectCorner._doc);
    }







    var fZeroRect = (function( ) {

        return new _f_Constructor_RectExtent( 0, 0, 0, 0);

    })._sName( _displayName, 'fZeroRect')._sTrace(false);
    _publicMembers.push(fZeroRect);
    if(m_Instrument.cDocFuncs) {
        fZeroRect._sDesc(
        'Factory to create a Zero Rectangle.');

        _doc+=('\n\n' + fZeroRect._doc);
    }








    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        fPoint:      fPoint,
        fZeroPoint:  fZeroPoint,


        fRectExtent: fRectExtent,
        fRectCorner: fRectCorner,
        fZeroRect:   fZeroRect

    };
    if(aModule) {}  /* To avoid code quality tools from complaining about unused parameter */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Geometry')
    }

    return aModule;
};




if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Geometry')
}




if( typeof define === 'function') {

    define(['m_ConstValues', 'm_Functionx', 'm_Instrument', 'm_Error', 'm_Defense', 'm_Trace'],
        function (m_ConstValues, m_Functionx, m_Instrument, m_Error, m_Defense, m_Trace) {
            return aM_Geometry(m_ConstValues, m_Functionx, m_Instrument, m_Error, m_Defense, m_Trace);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Geometry.displayName]=aM_Geometry(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Trace']
        );
    }
    else {
        ChoirJS_Module_Geometry = aM_Geometry(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Error,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Trace
        );
    }
}

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Geometry')
}

