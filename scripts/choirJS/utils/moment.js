/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_Moment')
}


var aM_Moment = function (m_Functionx) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_Moment')
    }


    if(m_Functionx) {} /* To avoid code quality tools from complaining about unused parameter */

    var _displayName = 'm_Moment';

    var _doc=_displayName +' module. Factory and manager functions for moments in time. Uses clock to deliver numbers increasing with time.';


    var _c_TakeSnapshots=false;
    var _cSnapshotInterval=100;


    var _g_MomentCounter=0;

    var _g_TimeSnapshots=[];
    var _g_LastTimeSnapshotMillis=0;




    var fNow = function() {
        _g_MomentCounter++;

        if(_c_TakeSnapshots) {
            var aMustSnapshotTime=false;
            var aMillis=null;
            if(!_g_LastTimeSnapshotMillis) {
                aMustSnapshotTime=true;
            }
            else {
                aMillis=new Date().getTime();
                if (aMillis > (_g_LastTimeSnapshotMillis + _cSnapshotInterval)) {
                    aMustSnapshotTime=true;
                }
            }
            if(aMustSnapshotTime) {
                if(!aMillis) {
                    aMillis=new Date().getTime();
                }
                _g_LastTimeSnapshotMillis=aMillis;
                _g_TimeSnapshots.push([ _g_MomentCounter,_g_LastTimeSnapshotMillis])
            }
        }
        return _g_MomentCounter;
    };
    fNow._sDoc('fNow', 'Return an always increasing number, possibly recording a snapshot of moment counter and time.');
    _doc+=('\n\n' + fNow._doc);







    var fSnapshot = function() {
        if(_c_TakeSnapshots) {
            _g_LastTimeSnapshotMillis=new Date().getTime();
            _g_TimeSnapshots.push([ _g_MomentCounter,_g_LastTimeSnapshotMillis])
        }
    };
    fSnapshot._sDoc('fSnapshot', 'Records a snapshot of moment counter and time.');
    _doc+=('\n\n' + fSnapshot._doc);






    /* Module members */
   var aModule = {
       _v_Type: 'Module',

       displayName: _displayName,
        _doc: _doc,

        fNow:      fNow,
        fSnapshot: fSnapshot
        /* _g_TimeSnapshots: function() { return _g_TimeSnapshots;} */
    };
    if(aModule) {}  /* To avoid code quality tools from complaining about unused parameter */

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('END m_Moment')
    }

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_Moment')
}




if( typeof define === 'function') {

    define(['m_Functionx'], function (m_Functionx) {
        return aM_Moment(m_Functionx);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_Moment.displayName]=aM_Moment(gChoirJS_Modules['m_Functionx']);
    }
    else {
        ChoirJS_Module_Moment = aM_Moment(ChoirJS_Module_Functionx);
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_Moment')
}
