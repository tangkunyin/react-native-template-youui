'use strict';

import React, { PureComponent } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'mobx-react';
import Stack from './navigation';
import stores from './stores';

if (!__DEV__) {
    global.console = {
        info: () => {
        },
        log: () => {
        },
        warn: () => {
        },
        error: () => {
        },
    };
}

export default class App extends PureComponent {
    render() {
        return (
            <Provider {...stores}>
                <Stack/>
            </Provider>
        );
    }
}

// change xxx to your own module name.
AppRegistry.registerComponent('YouUIMobX', () => App);
