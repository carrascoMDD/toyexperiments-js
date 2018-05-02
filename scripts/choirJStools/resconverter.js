/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ResConverter')
}



var aM_ResConverter = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
    m_Instrument, m_Trace, m_Log, m_Identifiable) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ResConverter')
    }

    if( m_Log) {}


    var _displayName = 'm_ResConverter';

    var _privateMembers = [];

    var _doc = _displayName +' module. Functions to convert resources (i.e. Images) whether asynchronously.' +
        '\n' +
        'Each of a number of clients may open a queue to retrieve resources ' +
        'specifying handler functions for successful delivery or error. ' +
        'Each client may submit a number of resources to convert on any of the open queues. ' +
        'The resources in each queue shall be converted in the order of submission to the queue by the client. ' +
        '\n' +
        'Relative ordering of resource conversion among queues is undefined. ' +
        '\n' +
        'The actual algorithm attempts to serve all queues with same priority, ' +
        'looping over all open queues in a round-robin fashion, ' +
        'requesting one resource from one queue, and then from the next, until the last queue, ' +
        'and then starting again from the first queue. ' +
        '\n' +
        'The ResConverter shall limit the number of simultaneous conversions of the same kind to 1. ' +
        'If an resource from any other queue is already undergoing a conversion of a ginven kind, ' +
        'then no further conversions shall be requested of the same kind until the ongoing one is completes or fails. ' +
        '\n' +
        'A client may request to close a queue, ' +
        'in which case any pending resource conversions will be discarded, ' +
        'and any in-progress request shall be ignored upon successful reception or error.';

    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';


    var _c_MaxConversionsOfKind = m_ConstValues_Tools.fConst( _displayName, '_c_MaxConversionsOfKind', true);
    _doc+=('\n\n' +  JSON.stringify({_c_MaxConversionsOfKind: _c_MaxConversionsOfKind}, null, 4));
    _doc+='If _c_MaxConversionsOfKind maximum number of ongoing conversions of the same kind.';





    _doc+=('\n\nModule variables');


    var _g_ConverterActive = false;
    _doc+=('\n\nModule variable _g_ConverterActive  If true then ongoing server requests and pending client queues ' +
        'shall be attended, and resources shall be loaded.');


    var _g_ConversionRequests = {};
    _doc+=('\n\nModule variable _g_ConversionRequests ' +
    'For each on-going conversion, holds an object representing the interaction. ' +
    'Also serves to avoid requesting an resource from a server from where an resource request is already ongoing.');



    var _g_ActiveConvertQueues = [ ];
    _doc+=('\n\nModule variable _g_ActiveConvertQueues ' +
    'Holds the list of queues opened by clients to retrieve resources, which are actively requesting conversions of some kind.');


    var _g_InactiveConvertQueues = [ ];
    _doc+=('\n\nModule variable _g_InactiveConvertQueues ' +
    'Holds the list of queues opened by clients which are temporarily not requesting conversions of any kind.');



    var _g_LastConsideredConvertQueue = null;
    _doc+=('\n\nModule variable _g_LastConsideredConvertQueue ' +
        'Holds the Client Queue that was considered last, such that in next cycle the attention is directed towards ' +
        'the next Cient Queue.');



    var _g_ConvertersForKind = [ ];
    _doc+=('\n\nModule variable _g_ConvertersForKind ' +
        'Holds the instances of Converter indexed by key Conversion Kind.');







    _doc+=('\n\nPrototype and Constructor for ConvertQueue:');


    var _prot_ConvertQueue = (function() {

        var aPrototype = {};

        aPrototype._v_Type = 'ConvertQueue';
        aPrototype._v_InstancesType = 'ConvertQueue';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [];





        aPrototype._pInitQueue =  (function( theCtxt, theConverterFactory, theInactive) {

            this._v_Type = aPrototype._v_InstancesType;
            this._v_UID = m_Identifiable.fNewUID();

            this._v_Active = theInactive ? false: true;

            this._v_ConverterFactory    = theConverterFactory;

            this._v_LastSubmittedMillis  = null;
            this._v_LastConsideredMillis = null;
            this._v_LastRequestedMillis  = null;
            if( this._v_LastSubmittedMillis) {} /* CQT */
            if( this._v_LastConsideredMillis) {} /* CQT */
            if( this._v_LastRequestedMillis) {} /* CQT */

            this._v_ConversionRequests_Pending =    [];
            this._v_ConversionRequests_InProgress = [];
            this._v_ConversionRequests_Completed =  [];


            return null;

        })._sName( aPrototype._ModuleName, '_pInitQueue')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theConverterFactory',    ['function']],
            [ 'theInactive',           ['boolean']]
        ]);
        aPrototype._privateMembers.push( aPrototype._pInitQueue);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pInitQueue._sDesc('');
        }







        aPrototype.fNeedsReactivation = (function( theCtxt) {
            if( theCtxt) {} /* CQT */

            if( this._v_Active) {
                return false;
            }

            return this._v_ConversionRequests_Pending.length > 0;

        })._sName( aPrototype._ModuleName, 'fNeedsReactivation')._sTrace(_cTr)._DefendWith([
            ['theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fNeedsReactivation._sDesc( '');

            _doc+=('\n\n' + aPrototype.fNeedsReactivation._doc);
        }






        aPrototype.pActivate = (function( theCtxt) {

            this._v_Active = true;

            _pActivateConvertQueue( theCtxt, this);

            return null;

        })._sName( aPrototype._ModuleName, 'pActivate')._sTrace(_cTr)._DefendWith([
            ['theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pActivate._sDesc( '');

            _doc+=('\n\n' + aPrototype.pActivate._doc);
        }





        aPrototype.pDeactivate = (function( theCtxt) {

            this._v_Active = false;

            _pDeactivateConvertQueue( theCtxt, this);

            return null;

        })._sName( aPrototype._ModuleName, 'pDeactivate')._sTrace(_cTr)._DefendWith([
                ['theCtxt']
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pDeactivate._sDesc( '');

            _doc+=('\n\n' + aPrototype.pDeactivate._doc);
        }








        aPrototype.fNewConversion = (function( theCtxt, theResource, theConversionKind, theConversionArgs,
                                               theDeactivateAfter) {

            if( !theResource) {
                return null;
            }

            var aConversionRequest = new _f_Constructor_ConversionRequest( theCtxt, this,
                theResource, theConversionKind, theConversionArgs, theDeactivateAfter);
            if( !aConversionRequest) {
                throw new m_Error.Error( 'ConstructorError');
            }

            return aConversionRequest;

        })._sName( aPrototype._ModuleName, 'fNewConversion')._sTrace(_cTr)._DefendWith([
                ['theCtxt'],
                ['theResource',        ['object']],
                ['theConversionKind',  ['string']],
                ['theConversionArgs',  ['object']],
                ['theDeactivateAfter', ['boolean', 'optional']]
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fNewConversion._sDesc( '');

            _doc+=('\n\n' + aPrototype.fNewConversion._doc);
        }







        aPrototype.pRequestConversion = (function( theCtxt, theConversionRequest) {

            if( !theConversionRequest) {
                return null;
            }

            this._v_LastSubmittedMillis  = new Date().getTime();

            this._v_ConversionRequests_Pending.push( theConversionRequest);

            if( this._v_Active) {
                _pRequestJustPostedToConvertQueue( theCtxt, this, theConversionRequest);
            }

            return theConversionRequest;

        })._sName( aPrototype._ModuleName, 'pRequestConversion')._sTrace(_cTr)._DefendWith([
            ['theCtxt'],
            ['theConversionRequest', ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pRequestConversion._sDesc( '');

            _doc+=('\n\n' + aPrototype.pRequestConversion._doc);
        }









        aPrototype.fNextConversionRequest = (function( theCtxt) {
            if( theCtxt) {}

            /*
            console.log( 'fNextConversionRequest ' + this._v_Comment +
                ' #pending='    + this._v_ConversionRequests_Pending.length +
                ' #inProgress=' + this._v_ConversionRequests_InProgress.length +
                ' #completed='  + this._v_ConversionRequests_Completed.length);
            */
            this._v_LastConsideredMillis  = new Date().getTime();

            if( !this._v_ConversionRequests_Pending.length) {
                return null;
            }

            return this._v_ConversionRequests_Pending[ 0];

        })._sName( aPrototype._ModuleName, 'fNextConversionRequest')._sTrace(_cTr)._DefendWith([
            ['theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fNextConversionRequest._sDesc( '');

            _doc+=('\n\n' + aPrototype.fNextConversionRequest._doc);
        }





        aPrototype.pConversionRequestSent = (function( theCtxt, theConversionRequest) {

            if( theCtxt) {}
            if( !theConversionRequest) {
                return null;
            }

            if( !this._v_ConversionRequests_Pending.length) {
                return null;
            }

            if( this._v_ConversionRequests_InProgress.indexOf( theConversionRequest) >= 0) {
                var xyz = 1;  if ( xyz) {}
            }

            var aRequestIndex = this._v_ConversionRequests_Pending.indexOf( theConversionRequest);
            if ( aRequestIndex < 0 ) {
                return null;
            }

            this._v_LastRequestedMillis  = new Date().getTime();

            this._v_ConversionRequests_Pending = this._v_ConversionRequests_Pending.slice( 0 , aRequestIndex).concat(
                this._v_ConversionRequests_Pending.slice( aRequestIndex + 1));

            this._v_ConversionRequests_InProgress.push( theConversionRequest);

            return null;

        })._sName( aPrototype._ModuleName, 'pConversionRequestSent')._sTrace(_cTr)._DefendWith([
            ['theCtxt'],
            ['theConversionRequest', ['Type', 'ConversionRequest']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pConversionRequestSent._sDesc( '');

            _doc+=('\n\n' + aPrototype.pConversionRequestSent._doc);
        }






        aPrototype.pConversionRequestSucceeded = (function( theCtxt, theConversionRequest) {

            if( !theConversionRequest) {
                return null;
            }

            var aRequestIndex = this._v_ConversionRequests_InProgress.indexOf( theConversionRequest);
            if ( aRequestIndex >= 0 ) {

                this._v_ConversionRequests_InProgress = this._v_ConversionRequests_InProgress.slice( 0, aRequestIndex).
                    concat( this._v_ConversionRequests_InProgress.slice( aRequestIndex + 1));

                this._v_ConversionRequests_Completed.push( theConversionRequest);
            }

            pConversionRequestResponseReceived( theCtxt, this, theConversionRequest);

            return null;

        })._sName( aPrototype._ModuleName, 'pConversionRequestSucceeded')._sTrace(_cTr)._DefendWith([
            ['theCtxt'],
            ['theConversionRequest', ['Type', 'ConversionRequest']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pConversionRequestSucceeded._sDesc( '');

            _doc+=('\n\n' + aPrototype.pConversionRequestSucceeded._doc);
        }







        aPrototype.pConversionRequestFailed = (function( theCtxt, theConversionRequest) {

            if( !theConversionRequest) {
                return null;
            }

            var aRequestIndex = this._v_ConversionRequests_InProgress.indexOf( theConversionRequest);
            if ( aRequestIndex >= 0 ) {

                this._v_ConversionRequests_InProgress = this._v_ConversionRequests_InProgress.slice( 0, aRequestIndex).
                    concat( this._v_ConversionRequests_InProgress.slice( aRequestIndex + 1));

                this._v_ConversionRequests_Completed.push( theConversionRequest);
            }


            pConversionRequestResponseReceived( theCtxt, this, theConversionRequest);

            return null;

        })._sName( aPrototype._ModuleName, 'pConversionRequestSucceeded')._sTrace(_cTr)._DefendWith([
                ['theCtxt'],
                ['theConversionRequest', ['Type', 'ConversionRequest']]
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pConversionRequestSucceeded._sDesc( '');

            _doc+=('\n\n' + aPrototype.pConversionRequestSucceeded._doc);
        }














        return aPrototype;
    })();
    _privateMembers.push(_prot_ConvertQueue);
    if(m_Instrument.cDocFuncs) {
        _doc+=('\n\n' + _prot_ConvertQueue._doc);
    }






    var _f_Constructor_ConvertQueue = (function( theCtxt, theConverterFactory, theInactive) {

        this._v_Type = _prot_ConvertQueue._v_InstancesType;
        this._v_UID = null;

        this._v_Active = null;

        this._v_ConverterFactory = null;

        this._v_LastConsideredMillis = null;
        this._v_LastSubmittedMillis  = null;
        this._v_LastRequestedMillis  = null;

        this._v_ConversionRequests_Pending =    [];
        this._v_ConversionRequests_InProgress = [];
        this._v_ConversionRequests_Completed =  [];

        this._pInitQueue( theCtxt, theConverterFactory, theInactive);

    })._sName( _displayName, '_f_Constructor_ConvertQueue')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theConverterFactory',    ['function']],
        [ 'theInactive',           ['boolean']]
    ]);
    _f_Constructor_ConvertQueue.prototype = _prot_ConvertQueue;
    _publicMembers.push( _f_Constructor_ConvertQueue);
    if(m_Instrument.cDocFuncs) {
        _f_Constructor_ConvertQueue._sDesc('Constructor to create new instances of ConvertQueue.');

        _doc+=('\n\n' + _f_Constructor_ConvertQueue._doc);
    }


























    _doc+=('\n\nPrototype and Constructor for ConversionRequest:');


    var _prot_ConversionRequest = (function() {

        var aPrototype = {};

        aPrototype._v_Type = 'ConversionRequest';
        aPrototype._v_InstancesType = 'ConversionRequest';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;


        aPrototype._privateMembers = [];





        aPrototype.toString =  (function() {

            return this._v_Type + '  UID=' + this._v_UID + '  URL=' + this._v_URL +
                ' _v_Success= ' + this._v_Success +
                ' _v_Requested= ' + this._v_Requested +
                ' _v_Completed= ' + this._v_Completed;

        })._sName( aPrototype._ModuleName, 'toString')._sTrace(false);
        if(m_Instrument.cDocFuncs) {
            aPrototype.toString._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.toString._doc);
        }




        aPrototype._pForResource =  (function( theCtxt, theConvertQueue,
                                          theResource, theConversionKind, theConversionArgs, theDeactivateAfter) {

            this._v_Type = aPrototype._v_InstancesType;
            this._v_UID = m_Identifiable.fNewUID();

            this._v_ConvertQueue = theConvertQueue;

            this._v_Resource = theResource;
            this._v_ConversionKind = theConversionKind;
            this._v_ConversionArgs = theConversionArgs;

            this._v_DeactivateAfter = theDeactivateAfter ? true : false;


            this._v_Success = false;
            this._v_Requested = false;
            this._v_Completed = false;
            this._v_Converted = false;
            if( this._v_Converted) {} /* CQT */

            this._v_ResultResource = null;

            return null;

        })._sName( aPrototype._ModuleName, '_pForResource')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theConvertQueue', ['Type', 'ConvertQueue']],
            [ 'theResource',        ['object']],
            [ 'theConversionKind',  ['string']],
            [ 'theConversionArgs',  ['object']],
            [ 'theDeactivateAfter', ['boolean', 'optional']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pForResource._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype._pForResource._doc);
        }










        aPrototype.fDoConversion =  (function( theCtxt, theConverter) {

            if( !theConverter) {
                return null;
            }

            if( !this._v_Resource) {
                return null;
            }

            this._v_Requested = true;
            this._v_ConvertQueue.pConversionRequestSent( theCtxt, this);


            theConverter.pConvert( theCtxt, this);

            if ( this._v_DeactivateAfter) {
                return 'deactivate';
            }

            return null;

        })._sName( aPrototype._ModuleName, 'fDoConversion')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'] ,
            [ 'theConverter', ['object']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fDoConversion._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.fDoConversion._doc);
        }









        aPrototype.pSucessfulResponse =  (function( theCtxt) {

            this._v_Success = true;
            this._v_Completed = true;

            this._v_ConvertQueue.pConversionRequestSucceeded( theCtxt, this);

            return null;

        })._sName( aPrototype._ModuleName, 'pSucessfulResponse')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pSucessfulResponse._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.pSucessfulResponse._doc);
        }






        aPrototype.pFailureResponse =  (function( theCtxt) {

            this._v_Success = false;
            this._v_Completed = true;

            this._v_ConvertQueue.pConversionRequestFailed( theCtxt, this);

            return null;

        })._sName( aPrototype._ModuleName, 'pFailureResponse')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pFailureResponse._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.pFailureResponse._doc);
        }






        return aPrototype;
    })();
    _privateMembers.push(_prot_ConversionRequest);
    if(m_Instrument.cDocFuncs) {
        _doc+=('\n\n' + _prot_ConversionRequest._doc);
    }






    var _f_Constructor_ConversionRequest = (function( theCtxt, theConvertQueue,
                                                      theResource, theConversionKind, theConversionArgs,
                                                      theDeactivateAfter) {

        this._v_Type = _prot_ConversionRequest._v_InstancesType;
        this._v_UID = null;

        this._v_DeactivateAfter = null;

        this._v_ConvertQueue = null;

        this._v_Resource = null;
        this._v_ConversionKind = null;

        this._v_Success   = null;
        this._v_Requested = null;
        this._v_Completed = null;
        this._v_Converted = null;

        this._v_ResultResource = null;

        this._pForResource( theCtxt, theConvertQueue, theResource, theConversionKind, theConversionArgs,
            theDeactivateAfter);

    })._sName( _displayName, '_f_Constructor_ConversionRequest')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theConvertQueue',     ['Type', 'ConvertQueue']],
        [ 'theResource',        ['object']],
        [ 'theConversionKind',  ['string']],
        [ 'theConversionArgs',  ['object']],
        [ 'theDeactivateAfter', ['boolean', 'optional']]
    ]);
    _f_Constructor_ConversionRequest.prototype = _prot_ConversionRequest;
    _publicMembers.push( _f_Constructor_ConversionRequest);
    if(m_Instrument.cDocFuncs) {
        _f_Constructor_ConversionRequest._sDesc('Constructor to create new instances of ConversionRequest.');

        _doc+=('\n\n' + _f_Constructor_ConversionRequest._doc);
    }


















    _doc+=('\n\nFunctions for ResConverter singleton, realized as functions and variables in the m_ResLoaded module:');







    var pActivateConverter = (function( theCtxt) {

        if( _g_ConverterActive) {
            return null;
        }

        _g_ConverterActive = true;

        pProcessNextConversionRequest( theCtxt);

        return null;

    })._sName( _displayName, 'pActivateConverter')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt']
    ]);
    if(m_Instrument.cDocFuncs) {
        pActivateConverter._sDesc('');

        _doc+=('\n\n' + pActivateConverter._doc);
    }








    var pDeactivateConverter = (function( theCtxt) {

        if( theCtxt) {}

        if( !_g_ConverterActive) {
            return null;
        }

        if( _g_ConversionRequests) {
            var aNumConversionRequests = _g_ConversionRequests.length;
            for (var aConversionRequestIdx = 0; aConversionRequestIdx < aNumConversionRequests; aConversionRequestIdx++) {
                var aConversionRequest = _g_ConversionRequests[ aConversionRequestIdx];
                if (aConversionRequest) {

                }
            }
        }

        _g_ConverterActive = false;

        return null;

    })._sName( _displayName, 'pDeactivateConverter')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt']
    ]);
    if(m_Instrument.cDocFuncs) {
        pDeactivateConverter._sDesc('');

        _doc+=('\n\n' + pDeactivateConverter._doc);
    }







    var fOpenConvertQueue = (function( theCtxt, theConverterFactory, theInactive) {

        var aConvertQueue = new _f_Constructor_ConvertQueue( theCtxt, theConverterFactory, theInactive);

        if ( !aConvertQueue) {
            throw new m_Error.Error( 'ConstructorError', {module: _displayName, function: fOpenConvertQueue, constructor: '_f_Constructor_ConvertQueue'});
        }

        if ( theInactive) {

            _g_InactiveConvertQueues.push( aConvertQueue)
        }
        else {
            _g_ActiveConvertQueues.push( aConvertQueue)
        }

        return aConvertQueue;

    })._sName( _displayName, 'fOpenConvertQueue')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theConverterFactory',   ['function']],
        [ 'theInactive',           ['boolean', 'optional']]
    ]);
    if(m_Instrument.cDocFuncs) {
        fOpenConvertQueue._sDesc(
        'Create and initialize a new Client Queue for a client to submit URLs of resources to load.');

        _doc+=('\n\n' + fOpenConvertQueue._doc);
    }










    var _pActivateConvertQueue = (function( theCtxt, theConvertQueue) {

        if ( _g_ActiveConvertQueues.indexOf( theConvertQueue) >= 0) {
            return null;
        }


        var aConvertQueueIndex = _g_InactiveConvertQueues.indexOf( theConvertQueue);
        if ( aConvertQueueIndex < 0) {
            return null;
        }

        _g_InactiveConvertQueues = _g_InactiveConvertQueues.slice( 0, aConvertQueueIndex).
            concat( _g_InactiveConvertQueues.slice( aConvertQueueIndex + 1));

        _g_ActiveConvertQueues.push( theConvertQueue);

        pActivateConverter( theCtxt);

        return null;

    })._sName( _displayName, '_pActivateConvertQueue')._sTrace(_cTr)._DefendWith([
        ['theCtxt'],
        ['theConvertQueue', ['Type', 'ConvertQueue']]
    ]);
    _privateMembers.push( _pActivateConvertQueue);
    if(m_Instrument.cDocFuncs) {
        _pActivateConvertQueue._sDesc( '');

        _doc+=('\n\n' + _pActivateConvertQueue._doc);
    }








    var _pDeactivateConvertQueue = (function( theCtxt, theConvertQueue) {

        if ( _g_InactiveConvertQueues.indexOf( theConvertQueue) >= 0) {
            return null;
        }


        var aConvertQueueIndex = _g_ActiveConvertQueues.indexOf( theConvertQueue);
        if ( aConvertQueueIndex < 0) {
            return null;
        }

        _g_ActiveConvertQueues = _g_ActiveConvertQueues.slice( 0, aConvertQueueIndex).
            concat( _g_ActiveConvertQueues.slice( aConvertQueueIndex + 1));

        _g_InactiveConvertQueues.push( theConvertQueue);

        if( _g_LastConsideredConvertQueue && ( theConvertQueue === _g_LastConsideredConvertQueue)) {

            aConvertQueueIndex = _g_ActiveConvertQueues.indexOf( _g_LastConsideredConvertQueue);
            if ( aConvertQueueIndex < 0) {
                _g_LastConsideredConvertQueue = null;
            }
            else {
                if ( aConvertQueueIndex) {
                    _g_LastConsideredConvertQueue = null;
                }
                else {
                    _g_LastConsideredConvertQueue = _g_ActiveConvertQueues[ aConvertQueueIndex - 1];
                }
            }
        }


        if( !_g_ActiveConvertQueues.length) {      /* ACV OJO TODO was refering the inactive queue !? */
            pDeactivateConverter( theCtxt);
        }

        return null;

    })._sName( _displayName, '_pDeactivateConvertQueue')._sTrace(_cTr)._DefendWith([
        ['theCtxt'],
        ['theConvertQueue', ['Type', 'ConvertQueue']]
    ]);
    _privateMembers.push( _pActivateConvertQueue);
    if(m_Instrument.cDocFuncs) {
        _pDeactivateConvertQueue._sDesc( '');

        _doc+=('\n\n' + pActivateConvertQueue._doc);
    }









    var pProcessNextConversionRequest = (function( theCtxt) {

        if( theCtxt) {}

        if( !_g_ConverterActive) {
            return null;
        }

        var aNumActiveConvertQueues = _g_ActiveConvertQueues.length;

        if( !aNumActiveConvertQueues) {
            return null;
        }

        var aLastConsideredQueueIndex = -1;

        if( _g_LastConsideredConvertQueue) {
            var aConvertQueueIndex = _g_ActiveConvertQueues.indexOf( _g_LastConsideredConvertQueue);
            if ( aConvertQueueIndex >= 0) {
                aLastConsideredQueueIndex = aConvertQueueIndex;
            }
        }
        var aNextQueueIndex = aLastConsideredQueueIndex + 1;
        if( aNextQueueIndex >= aNumActiveConvertQueues) {
            aNextQueueIndex = 0;
        }


        var someQueuesToDeactivate = [];

        var aNumQueuesScanned = 0;

        while( aNumQueuesScanned < aNumActiveConvertQueues) {

            aNumQueuesScanned += 1;

            if( aNextQueueIndex >= aNumActiveConvertQueues) {
                aNextQueueIndex = 0;
            }

            var aNextQueue = _g_ActiveConvertQueues[ aNextQueueIndex];
            if( !aNextQueue) {
                throw new m_Error.Error( 'no ConvertQueue in _g_ActiveConvertQueues at next queue index.', null);
            }


            var aConversionRequest = aNextQueue.fNextConversionRequest( theCtxt);
            if( aConversionRequest) {

                var aConversionKind = aConversionRequest._v_ConversionKind;
                if ( aConversionKind) {

                    var someConversionRequests = _g_ConversionRequests[ aConversionKind];
                    if( !someConversionRequests || ( someConversionRequests.length < _c_MaxConversionsOfKind)) {

                        _g_LastConsideredConvertQueue = aNextQueue;

                        var aConverter = _fConverterForKind( theCtxt, aNextQueue, aConversionKind);
                        if( !aConverter) {
                            throw new m_Error.Error( 'ConverterServiceUnavailableError', { conversionKind: aConversionKind})
                        }
                        else {

                            if( !someConversionRequests) {
                                someConversionRequests = [];
                                _g_ConversionRequests[ aConversionKind] = someConversionRequests;
                            }

                            someConversionRequests.push( aConversionRequest);

                            if( aConversionRequest.fDoConversion( theCtxt, aConverter) === 'deactivate') {
                                someQueuesToDeactivate.push( aNextQueue);
                            }
                        }
                    }
                }
            }

            aNextQueueIndex += 1;
        }

        var aNumQueues = someQueuesToDeactivate.length;
        for (var aQueueIdx = 0; aQueueIdx < aNumQueues; aQueueIdx++) {
            var aQueue = someQueuesToDeactivate[ aQueueIdx];
            if (aQueue) {
                aQueue.pDeactivate( theCtxt);
            }
        }

        return null;

    })._sName( _displayName, 'pProcessNextConversionRequest')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
    if(m_Instrument.cDocFuncs) {
        pProcessNextConversionRequest._sDesc('');

        _doc+=('\n\n' + pProcessNextConversionRequest._doc);
    }





    var _fConverterForKind = (function( theCtxt, theConvertQueue, theConversionKind) {

        if( !theConversionKind) {
            return null;
        }

        var aConversionKind = theConversionKind;
        var aDotIndex = aConversionKind.indexOf('.');
        if ( aDotIndex > 0) {
            aConversionKind = aConversionKind.substr( 0, aDotIndex);
        }

        var aConverter = _g_ConvertersForKind[  aConversionKind];
        if ( aConverter) {
            return aConverter;
        }

        aConverter = theConvertQueue._v_ConverterFactory( theCtxt, theConversionKind);
        if( aConverter) {
            _g_ConvertersForKind[  aConversionKind] = aConverter;
        }

        return aConverter;

    })._sName( _displayName, '_fConverterForKind')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theConvertQueue',   ['Type', 'ConvertQueue']],
            [ 'theConversionKind', ['string']]
        ]);
    if(m_Instrument.cDocFuncs) {
        _fConverterForKind._sDesc( '');

        _doc+=('\n\n' + _fConverterForKind._doc);
    }








    var _pRequestJustPostedToConvertQueue = (function( theCtxt, theConvertQueue, theConversionRequest) {

        if( !theConvertQueue) {
            return null;
        }

        if( !theConversionRequest) {
            return null;
        }

        var aConvertQueueIndex = _g_ActiveConvertQueues.indexOf( theConvertQueue);
        if ( aConvertQueueIndex < 0) {
            return null;
        }

        pActivateConverter( theCtxt);

        return null;

    })._sName( _displayName, '_pRequestJustPostedToConvertQueue')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theConvertQueue', ['Type', 'ConvertQueue']],
        [ 'theConversionRequest', ['Type', 'ConversionRequest']]
    ]);
    if(m_Instrument.cDocFuncs) {
        _pRequestJustPostedToConvertQueue._sDesc(
        'The supplied Server Request has been posted on the supplied Client Queue, act accordingly, ' +
        'i.e. activating the loader, if it is not active now.');

        _doc+=('\n\n' + _pRequestJustPostedToConvertQueue._doc);
    }








    var pConversionRequestResponseReceived = (function( theCtxt, theConvertQueue, theConversionRequest) {
        if( theConvertQueue) {}

        if ( theConversionRequest._v_ConversionKind) {

            var someConversionRequests = _g_ConversionRequests[ theConversionRequest._v_ConversionKind];
            if( someConversionRequests && someConversionRequests.length) {
                var aConversionRequestIndex = someConversionRequests.indexOf( theConversionRequest);
                if ( aConversionRequestIndex >= 0) {

                    if( someConversionRequests.length === 1) {
                        delete _g_ConversionRequests[ theConversionRequest._v_ConversionKind];
                    }
                    else {
                        _g_ConversionRequests[ theConversionRequest._v_ConversionKind] = someConversionRequests.slice(0, aConversionRequestIndex).concat(
                            someConversionRequests.slice( aConversionRequestIndex + 1));
                    }
                }

            }
        }

        pProcessNextConversionRequest( theCtxt);

        return null;

    })._sName( _displayName, 'pConversionRequestResponseReceived')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theConvertQueue',   ['Type', 'ConvertQueue']],
        [ 'theConversionRequest', ['Type', 'ConversionRequest']]
    ]);
    if(m_Instrument.cDocFuncs) {
        pConversionRequestResponseReceived._sDesc('');

        _doc+=('\n\n' + pConversionRequestResponseReceived._doc);
    }














    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:    _publicMembers,
        _privateMembers:   _privateMembers,

        pActivateConverter:   pActivateConverter,
        pDeactivateConverter: pDeactivateConverter,
        fOpenConvertQueue:    fOpenConvertQueue,
        pProcessNextConversionRequest: pProcessNextConversionRequest

    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ResConverter')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_Identifiable'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_Identifiable) {

            return aM_ResConverter(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
                m_Trace, m_Log, m_Identifiable);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ResConverter.displayName]=aM_ResConverter(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Identifiable']
        );
    }
    else {
        ChoirJS_Module_ResConverter= aM_PicsConverter(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_Identifiable
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ResConverter')
}

