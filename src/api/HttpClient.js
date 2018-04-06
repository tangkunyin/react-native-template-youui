'use strict';

import fetch from 'node-fetch';
import feathers from '@feathersjs/feathers';
import restClient from '@feathersjs/rest-client';
import Url from './Url';

let _instance = null;

export default class HttpClient {
    constructor() {
        if (!_instance) {
            const rest = restClient(Url.apiBaseURL);
            _instance = feathers().configure(rest.fetch(fetch));
        }
        return _instance;
    }
    
    static service(name) {
        return new HttpClient().service(name);
    }
} 
