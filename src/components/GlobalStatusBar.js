'use strict';

import React, { PureComponent } from 'react';
import { Platform, StatusBar, View } from 'react-native';

export default class GlobalStatusBar extends PureComponent {

    render() {
        const { backgroundColor, barStyle } = this.props;
        if (Platform.OS === 'ios') {
            return (
                <View style={{
                    height: 20,
                    backgroundColor: backgroundColor
                }}>
                    <StatusBar barStyle={barStyle} />
                </View>
            );
        } else if (Platform.OS === 'android') {
            return (
                <View style={{
                    height: StatusBar.currentHeight,
                    backgroundColor: backgroundColor
                }}>
                    <StatusBar backgroundColor={'rgba(0, 0, 0, 0.0)'} barStyle={barStyle}/>
                </View>
            );
        }
    }
}
