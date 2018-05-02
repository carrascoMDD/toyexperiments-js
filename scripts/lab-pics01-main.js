/*
 * Copyright 2013 Antonio Carrasco Valero
 */


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Lab_Pics01')
}


require(['m_ConstValues', 'm_ConstValues_Tools', 'm_Clock', 'm_Ctxt', 'm_ResLoader'],
    function(m_ConstValues, m_ConstValues_Tools, m_Clock, m_Ctxt, m_ResLoader) {


        if( typeof fChoirJS_LogModuleLoads === 'function') {
            fChoirJS_LogModuleLoads('BEGIN m_Lab_Pics01');
        }




        var _cURLs = [
            'DSCN1045.JPG',
            'DSCN1046.JPG',
            'DSCN1047.JPG',
            'DSCN1048.JPG',
            'DSCN1049.JPG',
            'DSCN1050.JPG',
            'DSCN1051.JPG',
            'DSCN1052.JPG',
            'DSCN1053.JPG',
            'DSCN1054.JPG',
            'DSCN1055.JPG',
            'DSCN1056.JPG',
            'DSCN1057.JPG',
            'DSCN1058.JPG',
            'DSCN1059.JPG',
            'DSCN1060.JPG',
            'DSCN1061.JPG',
            'DSCN1062.JPG',
            'DSCN1063.JPG',
            'DSCN1064.JPG',
            'DSCN1065.JPG',
            'DSCN1066.JPG',
            'DSCN1067.JPG',
            'DSCN1068.JPG',
            'DSCN1069.JPG',
            'DSCN1070.JPG',
            'DSCN1071.JPG',
            'DSCN1072.JPG',
            'DSCN1073.JPG',
            'DSCN1074.JPG',
            'DSCN1075.JPG',
            'DSCN1076.JPG',
            'DSCN1077.JPG',
            'DSCN1078.JPG',
            'DSCN1079.JPG',
            'DSCN1080.JPG',
            'DSCN1081.JPG',
            'DSCN1082.JPG',
            'DSCN1083.JPG',
            'DSCN1084.JPG',
            'DSCN1085.JPG',
            'DSCN1086.JPG',
            'DSCN1087.JPG',
            'DSCN1088.JPG',
            'DSCN1089.JPG',
            'DSCN1090.JPG',
            'DSCN1091.JPG',
            'DSCN1092.JPG',
            'DSCN1093.JPG',
            'DSCN1094.JPG',
            'DSCN1095.JPG',
            'DSCN1096.JPG',
            'DSCN1097.JPG',
            'DSCN1098.JPG',
            'DSCN1099.JPG',
            'DSCN1100.JPG',
            'DSCN1101.JPG',
            'DSCN1102.JPG',
            'DSCN1103.JPG',
            'DSCN1104.JPG',
            'DSCN1105.JPG',
            'DSCN1106.JPG',
            'DSCN1107.JPG',
            'DSCN1108.JPG',
            'DSCN1109.JPG',
            'DSCN1110.JPG',
            'DSCN1111.JPG',
            'DSCN1112.JPG',
            'DSCN1113.JPG',
            'DSCN1114.JPG',
            'DSCN1115.JPG',
            'DSCN1116.JPG',
            'DSCN1117.JPG',
            'DSCN1118.JPG',
            'DSCN1119.JPG',
            'DSCN1120.JPG',
            'DSCN1121.JPG',
            'DSCN1122.JPG',
            'DSCN1123.JPG',
            'DSCN1124.JPG',
            'DSCN1125.JPG',
            'DSCN1126.JPG',
            'DSCN1127.JPG',
            'DSCN1128.JPG',
            'DSCN1129.JPG',
            'DSCN1130.JPG',
            'DSCN1131.JPG',
            'DSCN1132.JPG',
            'DSCN1133.JPG',
            'DSCN1134.JPG',
            'DSCN1135.JPG',
            'DSCN1136.JPG'
        ];

        _cURLs.sort();

        if( false) { _cURLs = _cURLs.slice(0, 2); }

        var aCtxt = m_Ctxt.fNewCtxt();

        var someServerRequests = [ ];

        setTimeout(
            function() {


                var aLoadQueue = m_ResLoader.fOpenLoadQueue( aCtxt,

                    function( theCtxt_arg, theServerRequest_arg) {

                        if( theServerRequest_arg._v_Response && theServerRequest_arg._v_Response) {
                            console.log( 'ServerRequest success ' +  theServerRequest_arg.toString());

                            theServerRequest_arg._v_ImageLoaded = false;
                            theServerRequest_arg._v_Image = new Image();

                            theServerRequest_arg._v_Image.onload = (function() {
                                var aServerRequest_here = theServerRequest_arg;
                                return (function() {

                                    aServerRequest_here._v_ImageLoaded = true;

                                    document.body.appendChild( aServerRequest_here._v_Image);

                                    console.log( 'LOADED image from data URI with base64 contents ' + aServerRequest_here.toString());
                                });
                            })();
                            theServerRequest_arg._v_Image.src = 'data:resource/jpg;base64,' +
                                aServerRequest_here._v_Response;
                        }
                        else  {
                            console.log( 'ServerRequest success with EMPTY response' +  theServerRequest_arg.toString());
                        }
                    },
                    function( theCtxt_arg, theServerRequest_arg) {
                        console.log( 'ServerRequest failure ' + theServerRequest_arg.toString());
                    },
                    false /* true for initially inactive LoadQueue */
                );


                var aNumURLs = _cURLs.length;
                for (var aURLIdx = 0; aURLIdx < aNumURLs; aURLIdx++) {
                    var aURL = _cURLs[ aURLIdx];
                    if (aURL) {
                        var aServerRqst = aLoadQueue.fRequestURL( aCtxt, 'images/Seq01/' + aURL + '.txt');
                        if( aServerRqst) {
                            someServerRequests.push( aServerRqst);
                        }
                    }
                }

                var x= 1;
                if( x) {}

            },
            0
        );


        if( typeof fChoirJS_LogModuleLoads === 'function') {
            fChoirJS_LogModuleLoads('END m_Lab_Pics01')
        }



});


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Lab_Pics01')
}
