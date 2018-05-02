/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Convolutions')
}



var aM_Convolutions = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
                                m_Identifiable, m_Instrument, m_Trace, m_Log) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Convolutions')
    }

    if( m_Log) {}


    var _displayName = 'm_Convolutions';

    var _doc = _displayName +' module. Functions to filter image, in this case with convolution algorithm.' +
        'Convolution algoritms and code originally copied from http://www.html5rocks.com/en/tutorials/canvas/imagefilters/';

    var _privateMembers = [];
    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';






    _doc+=('\n\nPrototype and Factory for ImageFilter:');


    var _Prot_Convolutions = (function() {

        var aPrototype = { };

        aPrototype._v_Type = 'Convolutions';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [ ];




        if (!window.Float32Array) {
            Float32Array = Array;
        }







        aPrototype._pInitConvolutions =  (function( theCtxt, theImageFilter) {

            this._v_UID = m_Identifiable.fNewUID();

            this._v_Type = _Prot_Convolutions._v_Type;

            this._v_ImageFilter = theImageFilter;

            return null;

        })._sName( aPrototype._ModuleName, '_pInitConvolutions')._sTrace(_cTr)._DefendWith([
                [ 'theCtxt'],
                [ 'theImageFilter',           ['object']]
            ]);
        aPrototype._privateMembers.push( aPrototype._pInitConvolutions);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pInitConvolutions._sDesc(
            'Initialize a Convolutions Image Filter logic with a reference to an Image Filter.');

            aPrototype._doc+=('\n\n' + aPrototype._pInitConvolutions._doc);
        }












        aPrototype.fRun_Grayscale = function( theCtxt, theImage, theArgs) {
            var idata = null;
            if( theArgs) {
                idata = this.filterImage.apply( this, [ this.grayscale, theImage].concat( theArgs));
            }
            else {
                idata = this.filterImage( this.grayscale, theImage);
            }

            return idata
        };






        aPrototype.fRun_Brightness = function( theCtxt, theImage, theArgs) {

            var idata = null;
            if( theArgs) {
                idata = this.filterImage.apply( this, [ this.brightness, theImage].concat( theArgs));
            }
            else {
                idata = this.filterImage( this.brightness, theImage);
            }
            return idata;
        };








        aPrototype.fRun_Threshold = function( theCtxt, theImage, theArgs) {
            var idata = null;
            if( theArgs) {
                idata = this.filterImage.apply( this, [ this.threshold, theImage].concat( theArgs));
            }
            else {
                idata = this.filterImage( this.threshold, theImage);
            }
            return idata;
        };







        aPrototype.fRun_Sharpen = function( theCtxt, theImage) {
            var idata = this.filterImage( this.convolute, theImage,
                [ 0, -1,  0,
                 -1,  5, -1,
                  0, -1,  0]
            );
            if( idata) {} /* CQT */
            return idata;
        };






        aPrototype.fRun_Blur = function( theCtxt, theImage) {
            var idata = this.filterImage( this.convolute, theImage,
                [ 1/9, 1/9, 1/9,
                  1/9, 1/9, 1/9,
                  1/9, 1/9, 1/9 ]
            );
            if( idata) {} /* CQT */
            return idata;
        };








        aPrototype.fRun_Sobel = function( theCtxt, theImage) {

            var idata = this.filterImage(

                function(px) {

                    px = this.grayscale(px);

                    var vertical = this.convoluteFloat32(px,
                        [-1,-2,-1,
                            0, 0, 0,
                            1, 2, 1]);

                    var horizontal = this.convoluteFloat32(px,
                        [-1,0,1,
                            -2,0,2,
                            -1,0,1]);

                    var id = this.createImageData(vertical.width, vertical.height);

                    for (var i=0; i<id.data.length; i+=4) {
                        var v = Math.abs(vertical.data[i]);
                        id.data[i] = v;
                        var h = Math.abs(horizontal.data[i]);
                        id.data[i+1] = h;
                        id.data[i+2] = (v+h)/4;
                        id.data[i+3] = 255;
                    }
                    return id;
                },
                theImage
            );
            if( idata) {} /* CQT */
            return idata;
        };





        aPrototype.fRun_Custom = function( theCtxt, theImage, theMatrix) {
            var idata = this.filterImage( this.convolute, theImage, theMatrix, true);
            if( idata) {} /* CQT */
            return idata;
        };



















        aPrototype.getCanvas = function ( theWidth, theHeight) {
            return this._v_ImageFilter.fGetOffscreenCanvas( theWidth, theHeight);
        };



        aPrototype.releaseCanvas = function ( theCanvas) {
            return this._v_ImageFilter.fReleaseOffscreenCanvas( theCanvas);
        };






        aPrototype.createImageData = function ( theWidth, theHeight) {
            if( !this.tmpCtxt) {

                var aCanvas = this._v_ImageFilter.fGetAuxCanvas();
                this.tmpCtxt =  aCanvas.getContext('2d');
            }

            return this.tmpCtxt.createImageData( theWidth, theHeight);
        };






        aPrototype.getPixels = function (img) {
            var c, ctx;
            if (img.getContext) {
                c = img;
                try {
                    ctx = c.getContext('2d');
                } catch (e) {
                }
            }
            if (!ctx) {
                c = this.getCanvas(img.width, img.height);
                ctx = c.getContext('2d');
                ctx.drawImage(img, 0, 0);
            }
            return ctx.getImageData(0, 0, c.width, c.height);
        };









        aPrototype.filterImage = function (filter, image, var_args) {
            var args = [this.getPixels(image)];
            for (var i = 2; i < arguments.length; i++) {
                args.push(arguments[i]);
            }

            return filter.apply( this, args);
        };





        aPrototype.grayscale = function (pixels) {
            var d = pixels.data;
            for (var i = 0; i < d.length; i += 4) {
                var r = d[i];
                var g = d[i + 1];
                var b = d[i + 2];
                // CIE luminance for the RGB
                var v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
                d[i] = d[i + 1] = d[i + 2] = v
            }
            return pixels;
        };





        aPrototype.brightness = function (pixels, adjustment) {
            var d = pixels.data;
            for (var i = 0; i < d.length; i += 4) {
                d[i] += adjustment;
                d[i + 1] += adjustment;
                d[i + 2] += adjustment;
            }
            return pixels;
        };





        aPrototype.threshold = function (pixels, threshold) {
            var d = pixels.data;
            for (var i = 0; i < d.length; i += 4) {
                var r = d[i];
                var g = d[i + 1];
                var b = d[i + 2];
                var v = (0.2126 * r + 0.7152 * g + 0.0722 * b >= threshold) ? 255 : 0;
                d[i] = d[i + 1] = d[i + 2] = v
            }
            return pixels;
        };







        aPrototype.convolute = function (pixels, weights, opaque) {
            var side = Math.round(Math.sqrt(weights.length));
            var halfSide = Math.floor(side / 2);

            var src = pixels.data;
            var sw = pixels.width;
            var sh = pixels.height;

            var w = sw + 0; /* CQT */
            var h = sh + 0; /* CQT */


            var output = this.createImageData(w, h);
            var dst = output.data;

            var alphaFac = opaque ? 1 : 0;

            for (var y = 0; y < h; y++) {
                for (var x = 0; x < w; x++) {
                    var sy = y;
                    var sx = x;
                    var dstOff = (y * w + x) * 4;
                    var r = 0, g = 0, b = 0, a = 0;
                    for (var cy = 0; cy < side; cy++) {
                        for (var cx = 0; cx < side; cx++) {
                            var scy = Math.min(sh - 1, Math.max(0, sy + cy - halfSide));
                            var scx = Math.min(sw - 1, Math.max(0, sx + cx - halfSide));
                            var srcOff = (scy * sw + scx) * 4;
                            var wt = weights[cy * side + cx];
                            r += src[srcOff] * wt;
                            g += src[srcOff + 1] * wt;
                            b += src[srcOff + 2] * wt;
                            a += src[srcOff + 3] * wt;
                        }
                    }
                    dst[dstOff] = r;
                    dst[dstOff + 1] = g;
                    dst[dstOff + 2] = b;
                    dst[dstOff + 3] = a + alphaFac * (255 - a);
                }
            }
            return output;
        };







        aPrototype.convoluteFloat32 = function (pixels, weights, opaque) {
            var side = Math.round(Math.sqrt(weights.length));
            var halfSide = Math.floor(side / 2);

            var src = pixels.data;
            var sw = pixels.width;
            var sh = pixels.height;


            var w = sw + 0; /* CQT */
            var h = sh + 0; /* CQT */

            var output = {
                width: w, height: h, data: new Float32Array(w * h * 4)
            };
            var dst = output.data;

            var alphaFac = opaque ? 1 : 0;

            for (var y = 0; y < h; y++) {
                for (var x = 0; x < w; x++) {
                    var sy = y;
                    var sx = x;
                    var dstOff = (y * w + x) * 4;
                    var r = 0, g = 0, b = 0, a = 0;
                    for (var cy = 0; cy < side; cy++) {
                        for (var cx = 0; cx < side; cx++) {
                            var scy = Math.min(sh - 1, Math.max(0, sy + cy - halfSide));
                            var scx = Math.min(sw - 1, Math.max(0, sx + cx - halfSide));
                            var srcOff = (scy * sw + scx) * 4;
                            var wt = weights[cy * side + cx];
                            r += src[srcOff] * wt;
                            g += src[srcOff + 1] * wt;
                            b += src[srcOff + 2] * wt;
                            a += src[srcOff + 3] * wt;
                        }
                    }
                    dst[dstOff] = r;
                    dst[dstOff + 1] = g;
                    dst[dstOff + 2] = b;
                    dst[dstOff + 3] = a + alphaFac * (255 - a);
                }
            }
            return output;
        };










        return aPrototype;
    })();
    if(m_Instrument.cDocFuncs) {
        _Prot_Convolutions.displayName='Prototype _Prot_Convolutions';
        _privateMembers.push(_Prot_Convolutions);
        _doc+=('\n\n' + _Prot_Convolutions._doc);
    }







    var f_Constructor_Convolutions = (function( theCtxt, theFilter) {

        this._v_Prot_Convolutions = _Prot_Convolutions;
        this._v_Prot = this._v_Prot_Convolutions;

        this._v_Type = _Prot_Convolutions._v_Type;

        this._v_UID = null;

        this._v_ImageFilter  = null;

        this._pInitConvolutions( theCtxt, theFilter);

    })._sName( _displayName, 'f_Constructor_Convolutions')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theFilter',           ['object']]
        ]);
    f_Constructor_Convolutions.prototype = _Prot_Convolutions;
    _publicMembers.push(f_Constructor_Convolutions);
    if(m_Instrument.cDocFuncs) {
        f_Constructor_Convolutions._sDesc('Factory to create new instances of Convolutions Image Filter logic.');

        _doc+=('\n\n' + f_Constructor_Convolutions._doc);
    }










    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:   _publicMembers,
        _privateMembers:  _privateMembers,

        f_Constructor_Convolutions:  f_Constructor_Convolutions
    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Convolutions')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error',
        'm_Identifiable', 'm_Instrument', 'm_Trace', 'm_Log'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
        m_Identifiable, m_Instrument, m_Trace, m_Log) {

        return aM_Convolutions(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
            m_Identifiable, m_Instrument, m_Trace, m_Log);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ImageFilter.displayName]=aM_Convolutions(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log']
        );
    }
    else {
        ChoirJS_Module_Convolutions= aM_Convolutions(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Convolutions')
}

