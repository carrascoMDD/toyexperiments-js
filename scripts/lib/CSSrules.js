/*
 * ACV : obtained from http://code.google.com/p/js-uri/
 *
 * An URI datatype.  Based upon examples in RFC3986.
 *
 * TODO %-escaping
 * TODO split apart authority
 * TODO split apart query_string (on demand, anyway)
 *
 * @(#) $Id$
 */




if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_CSSrules')
}



var aM_CSSrules = function () {

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_CSSrules')
    }



    var _displayName = 'm_CSSrules';

    var _doc = _displayName +' module. To manipulate CSS rules.' +
        'From http://www.hunlock.com/blogs/Totally_Pwn_CSS_with_Javascript';


    /*

     getCSSRule -- Return a CSS rule
     These are three simple and easy to use functions. getCSSRule(ruleName) will accept a CSS selector (classname, divname, etc) and if it exists will pass back the style object. Lets say you have a class called .global. To retrieve this style all you have to do is the following...

     var global = getCSSRule('.global');
     Global is now a pointer to the stylesheet rule for the class global and you can now manipulate it pretty much exactly like you would manipulate any getElementById object! For instance to give the class an overline and underline property just issue the following command…

     global.style.textDecoration='underline overline';
     This works for any defined selector. For instance if you have an ID match #global then you would retreive it via…

     var global = getCSSRule('#global');
     And of course it works on raw HTML elements. For instance to get your style for all the paragraph tags…

     var global = getCSSRule('P');
     getCSSRule goes by exact match. So if you have a rule for .global DIV you will need to specify .global DIV to get that rule, just .global won't cut it. If getCSSRule can't find the selector you're looking for it will return FALSE.

     killCSSRule -- Delete a CSS rule
     This is a VERY simple function. All it does is call getCSSRule with your ruleName and a delete flag. When getCSSRule finds your rule it will delete it and any objects on the page with that style will instantly become unstyled. Again this is an exact match function.

     addCSSRule -- Create a new CSS rule
     This is a really cool function. It basically accepts a rule name, creates an empty ruleset in the first stylesheet, and then returns the stylesheet object it created. Why is it cool? Well if you pass it a string p then you can instantly style every paragraph on the page. If you're creating a javascript distribution you don't have to distribute a css file with your javascript source, you can just create the stylesheet rules automatically with this function. Passing it .globalTwo would create a new classname called globalTwo and passing it #someDiv would let you style some division with an ID of someDiv. Here's an example:

     var global2 = addCSSRule('.global2');
     global2.style.backgroundColor='green';
     var someDiv = addCSSRule('#someDiv');
     someDiv.style.fontWeight='bold';
     The caveat is that this works with the first stylesheet on the page regardless of the media type. So make sure your screen CSS appears as the first stylesheet if you want to use addCSSRule, otherwise -- while it may appear your new styles are going into a black-hole, your printouts may end up looking VERY funky indeed!

     Creating a StyleSheet Dynamically
     If you have the need, you can create a stylesheet dynamically, on the fly, through javascript with the following code...

     var cssNode = document.createElement('style');
     cssNode.type = 'text/css';
     cssNode.rel = 'stylesheet';
     cssNode.media = 'screen';
     cssNode.title = 'dynamicSheet';
     document.getElementsByTagName("head")[0].appendChild(cssNode);
     This will create a new style tag, assign it its attributes and then append the new object to the head tag of the current page. Since we assigned a title we can find our new sheet just by checking the title as we loop through the stylesheets.

     Loading a StyleSheet Dynamically
     You can load an external stylesheet dynamically with the following code.

     var cssNode = document.createElement('link');
     cssNode.type = 'text/css';
     cssNode.rel = 'stylesheet';
     cssNode.href = 'http://www.somedomain.com/styles/FireFox.css';
     cssNode.media = 'screen';
     cssNode.title = 'dynamicLoadedSheet';
     document.getElementsByTagName("head")[0].appendChild(cssNode);

   */




    _doc+=('\n\nConfigurable module constants:');



    _doc+=('\n\Module functions:');

    'use strict';




    var getCSSRule = function(ruleName, deleteFlag) {               // Return requested style obejct
        ruleName=ruleName.toLowerCase();                       // Convert test string to lower case.
        if (document.styleSheets) {                            // If browser can play with stylesheets
            for (var i=0; i<document.styleSheets.length; i++) { // For each stylesheet
                var styleSheet=document.styleSheets[i];          // Get the current Stylesheet
                var ii=0;                                        // Initialize subCounter.
                var cssRule=false;                               // Initialize cssRule.
                do {                                             // For each rule in stylesheet
                    if (styleSheet.cssRules) {                    // Browser uses cssRules?
                        cssRule = styleSheet.cssRules[ii];         // Yes --Mozilla Style
                    } else {                                      // Browser usses rules?
                        cssRule = styleSheet.rules[ii];            // Yes IE style.
                    }                                             // End IE check.
                    if (cssRule)  {                               // If we found a rule...
                        if (cssRule.selectorText.toLowerCase()==ruleName) { //  match ruleName?
                            if (deleteFlag=='delete') {             // Yes.  Are we deleteing?
                                if (styleSheet.cssRules) {           // Yes, deleting...
                                    styleSheet.deleteRule(ii);        // Delete rule, Moz Style
                                } else {                             // Still deleting.
                                    styleSheet.removeRule(ii);        // Delete rule IE style.
                                }                                    // End IE check.
                                return true;                         // return true, class deleted.
                            } else {                                // found and not deleting.
                                return cssRule;                      // return the style object.
                            }                                       // End delete Check
                        }                                          // End found rule name
                    }                                             // end found cssRule
                    ii++;                                         // Increment sub-counter
                } while (cssRule);                                // end While loop
            }                                                   // end For loop
        }                                                      // end styleSheet ability check
        return false;                                          // we found NOTHING!
    };                                                         // end getCSSRule






    var killCSSRule = function(ruleName) {                          // Delete a CSS rule
        return getCSSRule(ruleName,'delete');                  // just call getCSSRule w/delete flag.
    };                                                         // end killCSSRule







    var addCSSRule = function (ruleName) {                           // Create a new css rule
        if (document.styleSheets) {                            // Can browser do styleSheets?
            if (!getCSSRule(ruleName)) {                        // if rule doesn't exist...
                if (document.styleSheets[0].addRule) {           // Browser is IE?
                    document.styleSheets[0].addRule(ruleName, null,0);      // Yes, add IE style
                } else {                                         // Browser is IE?
                    document.styleSheets[0].insertRule(ruleName+' { }', 0); // Yes, add Moz style.
                }                                                // End browser check
            }                                                   // End already exist check.
        }                                                      // End browser ability check.
        return getCSSRule(ruleName);                           // return rule we just created.
    };









    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,


        getCSSRule: getCSSRule,
        killCSSRule: killCSSRule,
        addCSSRule: addCSSRule

    };

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_CSSrules')
    }


    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_CSSrules')
}





if( typeof define === 'function') {

    define(function () {

        return aM_CSSrules();
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_CSSrules.displayName]=aM_CSSrules();
    }
    else {
        ChoirJS_Module_CSSrules= aM_CSSrules();
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_CSSrules')
}

    