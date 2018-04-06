'use strict';

import React, { PureComponent } from 'react';
import { Platform, StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';
import AppConfig from '../../config/AppConfig';
import Styles from '../../constants/Styles';

export default class AppStatusBar extends PureComponent {
    static propTypes = {
        animated: PropTypes.bool,
        hidden: PropTypes.bool,
        backgroundColor: PropTypes.string,
        translucent: PropTypes.bool,
        barStyle: PropTypes.string,
        networkActivityIndicatorVisible: PropTypes.bool,
        showHideTransition: PropTypes.string,
    };
    
    static defaultProps = AppConfig.statusBar;
    
    render() {
        const { backgroundColor } = this.props;
        if (Platform.OS === 'ios' || Platform.OS === 'android') {
            return <StatusBar {...this.props} />;
        } else {
            return <View style={[Styles.statusBar, { backgroundColor: backgroundColor }]} />;
        }
    }
}
