/*
 * Copyright 2013 Antonio Carrasco Valero
 */


var aM_Builder_Arrays = function (m_Functionx, m_Identifiable, m_Composer, m_Error, m_Builders) {

    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */

    var _displayName = 'm_Builder_Arrays';

    var _doc=_displayName + ' module. Functions to create choirJS assemblies from Arrays of Arrays, strings and functions.';


    _doc+='\nACV OJO This may create a references cycle between modules, ' +
        'because this builder refers to the registry of builder modules or objects, ' +
        'which refers to this builder.';



    var c_BuilderName = 'Arrays';
    _doc+=('\n\n' +  JSON.stringify({c_BuilderName: c_BuilderName}, null, 4));




    _doc+='\n\n\\* ********************************************************\n' +
        'Factory functions to assemble networks of choirJS objects from Arrays of Arrays, strings and functions.';






    var fBuildFrom = function(theArrays) {

        if(theArrays) {}

        return null;
    };
    fBuildFrom._sDoc('fBuildFrom','Create a new instance of choirJS Score, Voice, Phrase or Note from Arrays of Arrays, strings and functions.');
    _doc+=('\n\n' +  fBuildFrom._doc);





    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        c_BuilderName: c_BuilderName,
        fBuildFrom:    fBuildFrom

    };

    if(aModule) {}

    /* ACV OJO This may create a references cycle between modules */
    m_Builders.pRegisterBuilderByName( aModule, aModule.c_BuilderName);

    return aModule;


};



if( typeof define === 'function') {
    define(['m_Functionx', 'm_Identifiable', 'm_Error', 'm_Score', 'm_Builders'], function (m_Functionx, m_Identifiable, m_Error, m_Score, m_Builders) {

        return aM_Builder_Arrays(m_Functionx, m_Identifiable, m_Error, m_Score, m_Builders);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Builder_Arrays.displayName]=aM_Builder_Arrays(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Score'],
            gChoirJS_Modules['m_Builders']
        );
    }
    else {
        ChoirJS_Module_Builder_Arrays = aM_Builder_Arrays(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_Error,
            ChoirJS_Module_Score,
            ChoirJS_Module_Builders
        );
    }
}

