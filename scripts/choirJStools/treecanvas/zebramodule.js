/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Zebra')
}



var aM_Zebra = function (m_Functionx, m_Error, m_Instrument, m_Trace) {

    /* "Can not use_strict because need to define global variable zCanvas (and possibly others?) from within an eval."; */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Zebra')
    }

    if(m_Functionx) {}
    if(m_Error) {}
    if(m_Instrument) {}
    if(m_Trace) {}

    var _displayName = 'm_Zebra';

    var _doc = _displayName +' module. To initialize and hold a reference to the zebra framework.';

    _doc +='Adaptation for use with requirejs of the framework at http://www.zebkit.com/';

    _doc+=('\n\nConfigurable module constants:');

    var _cTr = false;
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';




    _doc+='\n\nInitialize zebra.';
    eval(zebra.Import("ui",  "ui.tree", "layout"));


    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        zebra:        zebra,

        ui:           zebra.ui,

        zCanvas:      zCanvas,

        Font:         Font,

        Panel:        Panel,
        Border:       Border,
        BorderPan:    BorderPan,
        ScrollPan:    ScrollPan,

        FlowLayout:   FlowLayout,
        BorderLayout: BorderLayout,
        ListLayout:   ListLayout,
        GridLayout:   GridLayout,

        TextField:    TextField,
        Button:       Button,
        Tree:         Tree,

        TextRender:   TextRender,
        BoldTextRender: BoldTextRender,
        CompRender:   CompRender,

        Label:        Label,
        ImageLabel:   ImageLabel,

        Constraints:  Constraints,

        TOP:          TOP,
        CENTER:       CENTER,
        BOTTOM:       BOTTOM,
        HORIZONTAL:   HORIZONTAL,
        STRETCH:      STRETCH,

        DefEditors:   DefEditors





    };
    if(aModule) {}
    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Zebra')
    }

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Zebra')
}





if( typeof define === 'function') {

    define(['m_Functionx', 'm_Error', 'm_Instrument', 'm_Trace'], function (m_Functionx, m_Error, m_Instrument, m_Trace) {

            return aM_Zebra(m_Functionx, m_Error, m_Instrument, m_Trace);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Zebra.displayName]=aM_Zebra(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace']
        );
    }
    else {
        ChoirJS_Module_Zebra= aM_Zebra(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Zebra')
}

