/*
 * Copyright 2013 Antonio Carrasco Valero
 */

if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('OPEN m_ResLoader')
}



var aM_ResLoader = function (m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error,
    m_Instrument, m_Trace, m_Log, m_Identifiable, m_URI) {

    "use strict";

    if( typeof fChoirJS_LogModuleLoads === 'function') {
        fChoirJS_LogModuleLoads('BEGIN m_ResLoader')
    }

    if( m_Log) {}


    var _displayName = 'm_ResLoader';

    var _privateMembers = [];

    var _doc = _displayName +' module. Functions to asynchronously load resources from servers. ' +
        '\n' +
        'Each of a number of clients may open a queue to retrieve resources ' +
        'specifying handler functions for successful delivery or error. ' +
        'Each client may submit a number of URLs for resources to load on any of the open queues. ' +
        'The resources in each queue shall be retrieved in the order of the URLs submitted to the queue by the client. ' +
        '\n' +
        'Relative ordering of resource loads among queues is undefined. ' +
        '\n' +
        'The actual algorithm attempts to serve all queues with same priority, ' +
        'looping over all open queues in a round-robin fashion, ' +
        'requesting one resource from one queue, and then from the next, until the last queue, ' +
        'and then starting again from the first queue. ' +
        '\n' +
        'The ResLoader shall limit the number of simultaneous request to the same server to 1. ' +
        'If an resource URL from any other queue is already undergoing an interaction with a server, ' +
        'then no further resources shall be requested from the same server until the ongoing one is completes or fails. ' +
        '\n' +
        'A client may request to close a queue, ' +
        'in which case any pending resource URLs will be discarded, ' +
        'and any in-progress request shall be ignored upon successful reception or error. ' +
        'The load mechanism shall utilize Base64 encoded resource files retrieved through AJAX ' +
        'and then inject the Base64 data into an image element, as:' +
        ' new Image().src("data:resource/png;base64,"+b64data) .';

    var _publicMembers = [];




    _doc+=('\n\nConfigurable module constants copied from m_ConstValues:');

    var _cTr = m_Trace.cTrace && m_ConstValues_Tools.fConst( _displayName, '_cTr', m_Trace.cTrace);
    _doc+=('\n\n' +  JSON.stringify({_cTr: _cTr}, null, 4));
    _doc+='Whether to trace begin, end and steps of functions in this module.';


    var _c_MaxServerRequests = m_ConstValues_Tools.fConst( _displayName, '_c_MaxServerRequests', true);
    _doc+=('\n\n' +  JSON.stringify({_c_MaxServerRequests: _c_MaxServerRequests}, null, 4));
    _doc+='If _c_MaxServerRequests maximum number of ongoing requests to the same server.';





    _doc+=('\n\nModule variables');


    var _g_LoaderActive = false;
    _doc+=('\n\nModule variable _g_LoaderActive  If true then ongoing server requests and pending client queues ' +
        'shall be attended, and resources shall be loaded.');


    var _g_ServerRequests = {};
    _doc+=('\n\nModule variable _g_ServerRequests ' +
    'For each on-going request to a server, holds an object representing the interaction. ' +
    'Also serves to avoid requesting an resource from a server from where an resource request is already ongoing.');



    var _g_ActiveLoadQueues = [ ];
    _doc+=('\n\nModule variable _g_ActiveLoadQueues ' +
    'Holds the list of queues opened by clients to retrieve resources, which are actively requesting resources from servers.');


    var _g_InactiveLoadQueues = [ ];
    _doc+=('\n\nModule variable _g_InactiveLoadQueues ' +
    'Holds the list of queues opened by clients which are temporarily not requesting resources from servers.');


    var _g_LastConsideredLoadQueue = null;
    _doc+=('\n\nModule variable _g_LastConsideredLoadQueue ' +
        'Holds the Client Queue that was considered last, such that in next cycle the attention is directed towards ' +
        'the next Cient Queue.');










    _doc+=('\n\nPrototype and Constructor for LoadQueue:');


    var _prot_LoadQueue = (function() {

        var aPrototype = {};

        aPrototype._v_Type = 'LoadQueue';
        aPrototype._v_InstancesType = 'LoadQueue';

        aPrototype._displayName = '_prot_' + aPrototype._v_Type;
        aPrototype._ParentModuleName = _displayName;
        aPrototype._ModuleName = aPrototype._ParentModuleName + '.' + aPrototype._displayName;
        aPrototype.displayName=aPrototype._displayName;
        aPrototype._doc ='Prototype ' + aPrototype.displayName;

        aPrototype._privateMembers = [];





        aPrototype._pInitQueue =  (function( theCtxt, theRetrievedHandler, theErrorHandler, theInactive) {

            this._v_Type = aPrototype._v_InstancesType;
            this._v_UID = m_Identifiable.fNewUID();

            this._v_Active = theInactive ? false: true;

            this._v_RetrievedHandler = theRetrievedHandler;
            this._v_ErrorHandler     = theErrorHandler;

            this._v_LastSubmittedMillis  = null;
            this._v_LastConsideredMillis = null;
            this._v_LastRequestedMillis  = null;
            if( this._v_LastSubmittedMillis) {} /* CQT */
            if( this._v_LastConsideredMillis) {} /* CQT */
            if( this._v_LastRequestedMillis) {} /* CQT */

            this._v_ServerRequests_Pending =    [];
            this._v_ServerRequests_InProgress = [];
            this._v_ServerRequests_Completed =  [];


            return null;

        })._sName( aPrototype._ModuleName, '_pInitQueue')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theRetrievedHandler', ['function']],
            [ 'theErrorHandler',     ['function']],
            [ 'theInactive',         ['boolean']]
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

            return this._v_ServerRequests_Pending.length > 0;

        })._sName( aPrototype._ModuleName, 'fNeedsReactivation')._sTrace(_cTr)._DefendWith([
            ['theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fNeedsReactivation._sDesc( '');

            _doc+=('\n\n' + aPrototype.fNeedsReactivation._doc);
        }






        aPrototype.pActivate = (function( theCtxt) {

            this._v_Active = true;

            _pActivateLoadQueue( theCtxt, this);

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

            _pDeactivateLoadQueue( theCtxt, this);

            return null;

        })._sName( aPrototype._ModuleName, 'pDeactivate')._sTrace(_cTr)._DefendWith([
                ['theCtxt']
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pDeactivate._sDesc( '');

            _doc+=('\n\n' + aPrototype.pDeactivate._doc);
        }






        aPrototype.fRequestURL = (function( theCtxt, theURL, theDeactivateAfter) {

            if( !theURL) {
                return null;
            }

            var aServerRequest = new _f_Constructor_ServerRequest( theCtxt, this, theURL, theDeactivateAfter);
            if( !aServerRequest) {
                throw new m_Error.Error( 'ConstructorError');
            }

            this._v_LastSubmittedMillis  = new Date().getTime();

            this._v_ServerRequests_Pending.push( aServerRequest);

            if( this._v_Active) {
                _pRequestJustPostedToLoadQueue( theCtxt, this, aServerRequest);
            }

            return aServerRequest;

        })._sName( aPrototype._ModuleName, 'fRequestURL')._sTrace(_cTr)._DefendWith([
            ['theCtxt'],
            ['theURL',             ['string']],
            ['theDeactivateAfter', ['boolean', 'optional']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fRequestURL._sDesc( '');

            _doc+=('\n\n' + aPrototype.fRequestURL._doc);
        }









        aPrototype.fNextServerRequest = (function( theCtxt) {
            if( theCtxt) {}

            /*
            console.log( 'fNextServerRequest ' + this._v_Comment +
                ' #pending='    + this._v_ServerRequests_Pending.length +
                ' #inProgress=' + this._v_ServerRequests_InProgress.length +
                ' #completed='  + this._v_ServerRequests_Completed.length);
            */
            this._v_LastConsideredMillis  = new Date().getTime();

            if( !this._v_ServerRequests_Pending.length) {
                return null;
            }

            return this._v_ServerRequests_Pending[ 0];

        })._sName( aPrototype._ModuleName, 'fNextServerRequest')._sTrace(_cTr)._DefendWith([
            ['theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fNextServerRequest._sDesc( '');

            _doc+=('\n\n' + aPrototype.fNextServerRequest._doc);
        }





        aPrototype.pServerRequestSent = (function( theCtxt, theServerRequest) {

            if( theCtxt) {}
            if( !theServerRequest) {
                return null;
            }

            if( !this._v_ServerRequests_Pending.length) {
                return null;
            }

            if( this._v_ServerRequests_InProgress.indexOf( theServerRequest) >= 0) {
                var xyz = 1;  if ( xyz) {}
            }

            var aRequestIndex = this._v_ServerRequests_Pending.indexOf( theServerRequest);
            if ( aRequestIndex < 0 ) {
                return null;
            }

            this._v_LastRequestedMillis  = new Date().getTime();

            this._v_ServerRequests_Pending = this._v_ServerRequests_Pending.slice( 0 , aRequestIndex).concat(
                this._v_ServerRequests_Pending.slice( aRequestIndex + 1));

            this._v_ServerRequests_InProgress.push( theServerRequest);

            return null;

        })._sName( aPrototype._ModuleName, 'pServerRequestSent')._sTrace(_cTr)._DefendWith([
            ['theCtxt'],
            ['theServerRequest', ['Type', 'ServerRequest']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pServerRequestSent._sDesc( '');

            _doc+=('\n\n' + aPrototype.pServerRequestSent._doc);
        }






        aPrototype.pServerRequestSucceeded = (function( theCtxt, theServerRequest) {

            if( !theServerRequest) {
                return null;
            }

            var aRequestIndex = this._v_ServerRequests_InProgress.indexOf( theServerRequest);
            if ( aRequestIndex >= 0 ) {

                this._v_ServerRequests_InProgress = this._v_ServerRequests_InProgress.slice( 0, aRequestIndex).
                    concat( this._v_ServerRequests_InProgress.slice( aRequestIndex + 1));

                this._v_ServerRequests_Completed.push( theServerRequest);

                if( this._v_RetrievedHandler) {
                    this._v_RetrievedHandler.apply( this._v_RetrievedHandler, [ theCtxt, theServerRequest]);
                }
            }


            pServerRequestResponseReceived( theCtxt, this, theServerRequest);

            return null;

        })._sName( aPrototype._ModuleName, 'pServerRequestSucceeded')._sTrace(_cTr)._DefendWith([
            ['theCtxt'],
            ['theServerRequest', ['Type', 'ServerRequest']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pServerRequestSucceeded._sDesc( '');

            _doc+=('\n\n' + aPrototype.pServerRequestSucceeded._doc);
        }







        aPrototype.pServerRequestFailed = (function( theCtxt, theServerRequest) {

            if( !theServerRequest) {
                return null;
            }

            var aRequestIndex = this._v_ServerRequests_InProgress.indexOf( theServerRequest);
            if ( aRequestIndex >= 0 ) {

                this._v_ServerRequests_InProgress = this._v_ServerRequests_InProgress.slice( 0, aRequestIndex).
                    concat( this._v_ServerRequests_InProgress.slice( aRequestIndex + 1));

                this._v_ServerRequests_Completed.push( theServerRequest);

                if( this._v_ErrorHandler) {
                    this._v_ErrorHandler.apply( this._v_ErrorHandler, [ theCtxt, theServerRequest]);
                }
            }
            else {
                var xx = 1; if( xx) {}
            }

            pServerRequestResponseReceived( theCtxt, this, theServerRequest);

            return null;

        })._sName( aPrototype._ModuleName, 'pServerRequestSucceeded')._sTrace(_cTr)._DefendWith([
                ['theCtxt'],
                ['theServerRequest', ['Type', 'ServerRequest']]
            ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.pServerRequestSucceeded._sDesc( '');

            _doc+=('\n\n' + aPrototype.pServerRequestSucceeded._doc);
        }






        return aPrototype;
    })();
    _privateMembers.push(_prot_LoadQueue);
    if(m_Instrument.cDocFuncs) {
        _doc+=('\n\n' + _prot_LoadQueue._doc);
    }






    var _f_Constructor_LoadQueue = (function( theCtxt, theRetrievedHandler, theErrorHandler, theInactive) {

        this._v_Type = _prot_LoadQueue._v_InstancesType;
        this._v_UID = null;

        this._v_Active = null;

        this._v_RetrievedHandler = null;
        this._v_ErrorHandler = null;

        this._v_LastConsideredMillis = null;
        this._v_LastSubmittedMillis  = null;
        this._v_LastRequestedMillis  = null;

        this._v_ServerRequests_Pending =    [];
        this._v_ServerRequests_InProgress = [];
        this._v_ServerRequests_Completed =  [];

        this._pInitQueue( theCtxt, theRetrievedHandler, theErrorHandler, theInactive);

    })._sName( _displayName, '_f_Constructor_LoadQueue')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theRetrievedHandler', ['function']],
        [ 'theErrorHandler',     ['function']],
        [ 'theInactive',         ['boolean']]
    ]);
    _f_Constructor_LoadQueue.prototype = _prot_LoadQueue;
    _publicMembers.push( _f_Constructor_LoadQueue);
    if(m_Instrument.cDocFuncs) {
        _f_Constructor_LoadQueue._sDesc('Constructor to create new instances of LoadQueue.');

        _doc+=('\n\n' + _f_Constructor_LoadQueue._doc);
    }


























    _doc+=('\n\nPrototype and Constructor for ServerRequest:');


    var _prot_ServerRequest = (function() {

        var aPrototype = {};

        aPrototype._v_Type = 'ServerRequest';
        aPrototype._v_InstancesType = 'ServerRequest';

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




        aPrototype._pForURL =  (function( theCtxt, theLoadQueue, theURL, theDeactivateAfter) {

            this._v_Type = aPrototype._v_InstancesType;
            this._v_UID = m_Identifiable.fNewUID();

            this._v_LoadQueue = theLoadQueue;

            this._v_URL = theURL;

            this._v_DeactivateAfter = theDeactivateAfter ? true : false;

            this._v_ImageLoaded = false;
            if( this._v_ImageLoaded) {} /* CQT */

            this._v_ServerName = null;

            this._v_Success = false;

            this._v_Requested = false;
            this._v_Completed = false;

            this._v_Response = null;
            this._v_Error = null;
            if( this._v_Error) {} /* CQT */

            this._v_Image = null;

            return null;

        })._sName( aPrototype._ModuleName, '_pForURL')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theLoadQueue', ['Type', 'LoadQueue']],
            [ 'theURL',         ['string']],
            [ 'theDeactivateAfter', ['boolean', 'optional']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pForURL._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype._pForURL._doc);
        }







        aPrototype.fServerName =  (function( theCtxt) {

            if( theCtxt) {}

            if ( this._v_ServerName) {
                return this._v_ServerName;
            }

            if( !this._v_URL) {
                return null;
            }

            var aURI = new m_URI.URI( this._v_URL);
            if( !aURI) {
                throw new m_Error.Error( 'ConstructorError', {constructorModule: 'm_URI', constructor: 'URI'});
            }

            var aHostName = aURI.authority;
            if( !aHostName) {
                aHostName = window.location.protocol + '//' + window.location.host;
            }
            this._v_ServerName = aHostName;

            return this._v_ServerName;

        })._sName( aPrototype._ModuleName, 'fServerName')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fServerName._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.fServerName._doc);
        }







        aPrototype.fDoRequestFromServer =  (function( theCtxt) {

            if( !this._v_URL) {
                return null;
            }

            var anHTTPRequest = _fNewXMLHttpRequest();
            if ( !anHTTPRequest) {
                throw new m_Error.Error( 'InfrastructureServiceUnavailableError', { service: 'XMLHttpRequest'})
            }

            var aServerRequest = this;

            anHTTPRequest.onreadystatechange = (function() {
                var aServerRequest_here = aServerRequest;
                var anHTTPRequest_here = anHTTPRequest;
                return (function() {
                    if( anHTTPRequest_here.readyState === 4) {

                        if( aServerRequest_here._v_AlreadyReceived) {
                            var xxxyy = 1; if( xxxyy) {}
                        }
                        aServerRequest_here._v_AlreadyReceived = true;
                        if( anHTTPRequest_here.status === 200) {
                            aServerRequest_here._pSucessfulResponse( m_Ctxt.fNewCtxt(), anHTTPRequest_here.responseText);
                        }
                        else {
                            aServerRequest_here._pFailureResponse(   m_Ctxt.fNewCtxt(), anHTTPRequest_here.responseText);
                        }
                    }
                });
            })();


            this._v_Requested = true;


            anHTTPRequest.open("GET", this._v_URL, true);
            anHTTPRequest.send();

            this._v_LoadQueue.pServerRequestSent( theCtxt, this);


            if ( this._v_DeactivateAfter) {
                return 'deactivate';
            }

            return null;

        })._sName( aPrototype._ModuleName, 'fDoRequestFromServer')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype.fDoRequestFromServer._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype.fDoRequestFromServer._doc);
        }







        aPrototype._pSucessfulResponse =  (function( theCtxt, theResponseText) {

            this._v_Success = true;
            this._v_Completed = true;
            this._v_Response = theResponseText;

            this._v_LoadQueue.pServerRequestSucceeded( theCtxt, this);

            return null;

        })._sName( aPrototype._ModuleName, '_pSucessfulResponse')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theResponseText', ['string']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pSucessfulResponse._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype._pSucessfulResponse._doc);
        }






        aPrototype._pFailureResponse =  (function( theCtxt, theResponseText) {

            this._v_Success = false;
            this._v_Completed = true;
            this._v_Error = theResponseText;

            this._v_LoadQueue.pServerRequestFailed( theCtxt, this);

            return null;

        })._sName( aPrototype._ModuleName, '_pFailureResponse')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt'],
            [ 'theResponseText', ['string']]
        ]);
        if(m_Instrument.cDocFuncs) {
            aPrototype._pFailureResponse._sDesc('');
            aPrototype._doc+=('\n\n' + aPrototype._pFailureResponse._doc);
        }






        return aPrototype;
    })();
    _privateMembers.push(_prot_ServerRequest);
    if(m_Instrument.cDocFuncs) {
        _doc+=('\n\n' + _prot_ServerRequest._doc);
    }






    var _f_Constructor_ServerRequest = (function( theCtxt, theLoadQueue, theURL, theDeactivateAfter) {

        this._v_Type = _prot_ServerRequest._v_InstancesType;
        this._v_UID = null;

        this._v_DeactivateAfter = null;

        this._v_LoadQueue = null;
        this._v_URL         = null;
        this._v_ServerName  = null;

        this._v_Success   = null;
        this._v_Requested = null;
        this._v_Completed = null;
        this._v_ImageLoaded = null;

        this._v_Response      = null;
        this._v_Error         = null;
        this._v_Image = null;

        this._pForURL( theCtxt, theLoadQueue, theURL, theDeactivateAfter);

    })._sName( _displayName, '_f_Constructor_ServerRequest')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theLoadQueue',     ['Type', 'LoadQueue']],
        [ 'theURL',             ['string']],
        [ 'theDeactivateAfter', ['boolean', 'optional']]
    ]);
    _f_Constructor_ServerRequest.prototype = _prot_ServerRequest;
    _publicMembers.push( _f_Constructor_ServerRequest);
    if(m_Instrument.cDocFuncs) {
        _f_Constructor_ServerRequest._sDesc('Constructor to create new instances of ServerRequest.');

        _doc+=('\n\n' + _f_Constructor_ServerRequest._doc);
    }



















    _doc+=('\n\nFunctions for ResLoader singleton, realized as functions and variables in the m_ResLoaded module:');







    var pActivateLoader = (function( theCtxt) {

        if( _g_LoaderActive) {
            return null;
        }

        _g_LoaderActive = true;

        pProcessNextServerRequest( theCtxt);

        return null;

    })._sName( _displayName, 'pActivateLoader')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt']
    ]);
    if(m_Instrument.cDocFuncs) {
        pActivateLoader._sDesc('');

        _doc+=('\n\n' + pActivateLoader._doc);
    }








    var pDeactivateLoader = (function( theCtxt) {

        if( theCtxt) {}

        if( !_g_LoaderActive) {
            return null;
        }

        if( _g_ServerRequests) {
            var aNumServerRequests = _g_ServerRequests.length;
            for (var aServerRequestIdx = 0; aServerRequestIdx < aNumServerRequests; aServerRequestIdx++) {
                var aServerRequest = _g_ServerRequests[ aServerRequestIdx];
                if (aServerRequest) {

                }
            }
        }

        _g_LoaderActive = false;

        return null;

    })._sName( _displayName, 'pDeactivateLoader')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt']
    ]);
    if(m_Instrument.cDocFuncs) {
        pDeactivateLoader._sDesc('');

        _doc+=('\n\n' + pDeactivateLoader._doc);
    }







    var fOpenLoadQueue = (function( theCtxt, theRetrievedHandler, theErrorHandler, theInactive) {

        var aLoadQueue = new _f_Constructor_LoadQueue( theCtxt, theRetrievedHandler, theErrorHandler, theInactive);
        if ( !aLoadQueue) {
            throw new m_Error.Error( 'ConstructorError', {module: _displayName, function: fOpenLoadQueue, constructor: '_f_Constructor_LoadQueue'});
        }

        if ( theInactive) {

            _g_InactiveLoadQueues.push( aLoadQueue)
        }
        else {
            _g_ActiveLoadQueues.push( aLoadQueue)
        }

        return aLoadQueue;

    })._sName( _displayName, 'fOpenLoadQueue')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theRetrievedHandler', ['function']],
        [ 'theErrorHandler',     ['function']],
        [ 'theInactive',         ['boolean', 'optional']]
    ]);
    if(m_Instrument.cDocFuncs) {
        fOpenLoadQueue._sDesc(
        'Create and initialize a new Client Queue for a client to submit URLs of resources to load.');

        _doc+=('\n\n' + fOpenLoadQueue._doc);
    }










    var _pActivateLoadQueue = (function( theCtxt, theLoadQueue) {

        if ( _g_ActiveLoadQueues.indexOf( theLoadQueue) >= 0) {
            return null;
        }


        var aLoadQueueIndex = _g_InactiveLoadQueues.indexOf( theLoadQueue);
        if ( aLoadQueueIndex < 0) {
            return null;
        }

        _g_InactiveLoadQueues = _g_InactiveLoadQueues.slice( 0, aLoadQueueIndex).
            concat( _g_InactiveLoadQueues.slice( aLoadQueueIndex + 1));

        _g_ActiveLoadQueues.push( theLoadQueue);

        pActivateLoader( theCtxt);

        return null;

    })._sName( _displayName, '_pActivateLoadQueue')._sTrace(_cTr)._DefendWith([
        ['theCtxt'],
        ['theLoadQueue', ['Type', 'LoadQueue']]
    ]);
    _privateMembers.push( _pActivateLoadQueue);
    if(m_Instrument.cDocFuncs) {
        _pActivateLoadQueue._sDesc( '');

        _doc+=('\n\n' + _pActivateLoadQueue._doc);
    }








    var _pDeactivateLoadQueue = (function( theCtxt, theLoadQueue) {

        if ( _g_InactiveLoadQueues.indexOf( theLoadQueue) >= 0) {
            return null;
        }


        var aLoadQueueIndex = _g_ActiveLoadQueues.indexOf( theLoadQueue);
        if ( aLoadQueueIndex < 0) {
            return null;
        }

        _g_ActiveLoadQueues = _g_ActiveLoadQueues.slice( 0, aLoadQueueIndex).
            concat( _g_ActiveLoadQueues.slice( aLoadQueueIndex + 1));

        _g_InactiveLoadQueues.push( theLoadQueue);

        if( _g_LastConsideredLoadQueue && ( theLoadQueue === _g_LastConsideredLoadQueue)) {

            aLoadQueueIndex = _g_ActiveLoadQueues.indexOf( _g_LastConsideredLoadQueue);
            if ( aLoadQueueIndex < 0) {
                _g_LastConsideredLoadQueue = null;
            }
            else {
                if ( aLoadQueueIndex) {
                    _g_LastConsideredLoadQueue = null;
                }
                else {
                    _g_LastConsideredLoadQueue = _g_ActiveLoadQueues[ aLoadQueueIndex - 1];
                }
            }
        }


        if( !_g_ActiveLoadQueues.length) {      /* ACV OJO TODO was refering the inactive queue !? */
            pDeactivateLoader( theCtxt);
        }

        return null;

    })._sName( _displayName, '_pDeactivateLoadQueue')._sTrace(_cTr)._DefendWith([
        ['theCtxt'],
        ['theLoadQueue', ['Type', 'LoadQueue']]
    ]);
    _privateMembers.push( _pActivateLoadQueue);
    if(m_Instrument.cDocFuncs) {
        _pDeactivateLoadQueue._sDesc( '');

        _doc+=('\n\n' + pActivateLoadQueue._doc);
    }









    var pProcessNextServerRequest = (function( theCtxt) {

        if( theCtxt) {}

        if( !_g_LoaderActive) {
            return null;
        }

        var aNumActiveLoadQueues = _g_ActiveLoadQueues.length;

        if( !aNumActiveLoadQueues) {
            return null;
        }

        var aLastConsideredQueueIndex = -1;

        if( _g_LastConsideredLoadQueue) {
            var aLoadQueueIndex = _g_ActiveLoadQueues.indexOf( _g_LastConsideredLoadQueue);
            if ( aLoadQueueIndex >= 0) {
                aLastConsideredQueueIndex = aLoadQueueIndex;
            }
        }
        var aNextQueueIndex = aLastConsideredQueueIndex + 1;
        if( aNextQueueIndex >= aNumActiveLoadQueues) {
            aNextQueueIndex = 0;
        }


        var someQueuesToDeactivate = [];

        var aNumQueuesScanned = 0;

        while( aNumQueuesScanned < aNumActiveLoadQueues) {

            aNumQueuesScanned += 1;

            if( aNextQueueIndex >= aNumActiveLoadQueues) {
                aNextQueueIndex = 0;
            }

            var aNextQueue = _g_ActiveLoadQueues[ aNextQueueIndex];
            if( !aNextQueue) {
                throw new m_Error.Error( 'no LoadQueue in _g_ActiveLoadQueues at next queue index.', null);
            }


            var aServerRequest = aNextQueue.fNextServerRequest( theCtxt);
            if( aServerRequest) {

                var aServerName = aServerRequest.fServerName( theCtxt);
                if ( aServerName) {

                    var someServerRequests = _g_ServerRequests[ aServerName];
                    if( !someServerRequests || ( someServerRequests.length < _c_MaxServerRequests)) {

                        _g_LastConsideredLoadQueue = aNextQueue;

                        if( aServerRequest.fDoRequestFromServer( theCtxt) === 'deactivate') {
                            someQueuesToDeactivate.push( aNextQueue);
                        }

                        if( !someServerRequests) {
                            someServerRequests = [];
                            _g_ServerRequests[ aServerName] = someServerRequests;
                        }

                        someServerRequests.push( aServerRequest);
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

    })._sName( _displayName, 'pProcessNextServerRequest')._sTrace(_cTr)._DefendWith([
            [ 'theCtxt']
        ]);
    if(m_Instrument.cDocFuncs) {
        pProcessNextServerRequest._sDesc('');

        _doc+=('\n\n' + pProcessNextServerRequest._doc);
    }








    var _pRequestJustPostedToLoadQueue = (function( theCtxt, theLoadQueue, theServerRequest) {

        if( !theLoadQueue) {
            return null;
        }

        if( !theServerRequest) {
            return null;
        }

        var aLoadQueueIndex = _g_ActiveLoadQueues.indexOf( theLoadQueue);
        if ( aLoadQueueIndex < 0) {
            return null;
        }

        pActivateLoader( theCtxt);

        return null;

    })._sName( _displayName, '_pRequestJustPostedToLoadQueue')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theLoadQueue', ['Type', 'LoadQueue']],
        [ 'theServerRequest', ['Type', 'ServerRequest']]
    ]);
    if(m_Instrument.cDocFuncs) {
        _pRequestJustPostedToLoadQueue._sDesc(
        'The supplied Server Request has been posted on the supplied Client Queue, act accordingly, ' +
        'i.e. activating the loader, if it is not active now.');

        _doc+=('\n\n' + _pRequestJustPostedToLoadQueue._doc);
    }








    var pServerRequestResponseReceived = (function( theCtxt, theLoadQueue, theServerRequest) {
        if( theLoadQueue) {}

        var aServerName = theServerRequest.fServerName( theCtxt);
        if ( aServerName) {

            var someServerRequests = _g_ServerRequests[ aServerName];
            if( someServerRequests && someServerRequests.length) {
                var aServerRequestIndex = someServerRequests.indexOf( theServerRequest);
                if ( aServerRequestIndex >= 0) {

                    if( someServerRequests.length === 1) {
                        delete _g_ServerRequests[ aServerName];
                    }
                    else {
                        _g_ServerRequests[ aServerName] = someServerRequests.slice(0, aServerRequestIndex).concat(
                            someServerRequests.slice( aServerRequestIndex + 1));
                    }
                }

            }
        }
        else {
            var yy = 1;  if( yy) {}
        }

        pProcessNextServerRequest( theCtxt);

        return null;

    })._sName( _displayName, 'pServerRequestResponseReceived')._sTrace(_cTr)._DefendWith([
        [ 'theCtxt'],
        [ 'theLoadQueue',   ['Type', 'LoadQueue']],
        [ 'theServerRequest', ['Type', 'ServerRequest']]
    ]);
    if(m_Instrument.cDocFuncs) {
        pServerRequestResponseReceived._sDesc('');

        _doc+=('\n\n' + pServerRequestResponseReceived._doc);
    }











    var _fNewXMLHttpRequest = (function() {

        if ( typeof( XMLHttpRequest) != undefined) {
            return new XMLHttpRequest;
        }

        if ( window.ActiveXObject) {

            var someXMLHttpVersions= [
                'MSXML2.XMLHttp.5.0',
                'MSXML2.XMLHttp.4.0',
                'MSXML2.XMLHttp.3.0',
                'MSXML2.XMLHttp',
                'Microsoft.XMLHttp'
            ];
            var aNumXMLHttpVersions = someXMLHttpVersions.length;

            for (var anXMLHttpVersionIndex = 0; anXMLHttpVersionIndex < aNumXMLHttpVersions; anXMLHttpVersionIndex++) {
                try {
                    return new ActiveXObject( someXMLHttpVersions[ anXMLHttpVersionIndex]);
                }
                catch ( anException) {}
            }
        }

        return null;

    })._sName( _displayName, '_fNewXMLHttpRequest')._sTrace(_cTr);
    if(m_Instrument.cDocFuncs) {
        _fNewXMLHttpRequest._sDesc('');

        _doc+=('\n\n' + _fNewXMLHttpRequest._doc);
    }



    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        _publicMembers:    _publicMembers,
        _privateMembers:   _privateMembers,

        pActivateLoader:   pActivateLoader,
        pDeactivateLoader: pDeactivateLoader,
        fOpenLoadQueue:  fOpenLoadQueue

    };
    if( aModule) {}

    return aModule;
};


if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('REGISTER m_ResLoader')
}





if( typeof define === 'function') {

    define(['m_ConstValues', 'm_ConstValues_Tools', 'm_Functionx', 'm_Ctxt', 'm_Defense', 'm_Error', 'm_Instrument',
        'm_Trace', 'm_Log', 'm_Identifiable', 'm_URI'], function (
        m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
        m_Trace, m_Log, m_Identifiable, m_URI) {

            return aM_ResLoader(m_ConstValues, m_ConstValues_Tools, m_Functionx, m_Ctxt, m_Defense, m_Error, m_Instrument,
                m_Trace, m_Log, m_Identifiable, m_URI);
        });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ResLoader.displayName]=aM_ResLoader(
            gChoirJS_Modules['m_ConstValues'],
            gChoirJS_Modules['m_ConstValues_Tools'],
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Ctxt'],
            gChoirJS_Modules['m_Defense'],
            gChoirJS_Modules['m_Error'],
            gChoirJS_Modules['m_Instrument'],
            gChoirJS_Modules['m_Trace'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Identifiable'],
            gChoirJS_Modules['m_URI']
        );
    }
    else {
        ChoirJS_Module_ResLoader= aM_PicsLoader(
            ChoirJS_Module_ConstValues,
            ChoirJS_Module_ConstValues_Tools,
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Ctxt,
            ChoirJS_Module_Defense,
            ChoirJS_Module_Error,
            ChoirJS_Module_Instrument,
            ChoirJS_Module_Trace,
            ChoirJS_Module_Log,
            ChoirJS_Module_Identifiable,
            ChoirJS_Module_URI
        );
    }
}



if( typeof fChoirJS_LogModuleLoads === 'function') {
    fChoirJS_LogModuleLoads('DEFINED m_ResLoader')
}

