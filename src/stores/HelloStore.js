'use strict';

import HttpClient from '../api/HttpClient';
import { observable, computed, action, runInAction } from 'mobx';

export default class HelloStore {
    service = null;
    
    @observable text = '';
    @observable timestamp = 0;
    
    @computed get time() {
        if (this.timestamp) {
            return new Date(this.timestamp).toLocaleString();
        }
        return '';
    }
    
    constructor() {
        this.service = HttpClient.service('index');
    }

    @action async getHello() {
        try {
            const response = await this.service.get({});
            if (response.code === 0 && response.data) {
                runInAction('server response ok', () => {
                    this.text = response.data.text;
                    this.timestamp = response.data.timestamp;
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
}
