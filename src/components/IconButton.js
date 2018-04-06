'use strict';

import React from 'react';
import {
    View,
    TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import IconType from '../constants/IconType';

const IconButton = (props) => {
    const { 
        name, color, size, style, onPress, type, disabled 
    } = props;
    const Icon = IconType(type);
    const iconElement = <Icon name={name} color={color || 'white'} size={size || 26} style={style} />;
    return (
        <TouchableHighlight underlayColor={'transparent'} disabled={disabled} onPress={onPress}>
            <View style={{ width: size, height: size }}>
                {iconElement}
            </View>
        </TouchableHighlight>
    );
};

IconButton.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.object,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf([
        'zocial', 
        'octicon', 
        'material', 
        'material-community', 
        'ionicon', 
        'foundation', 
        'evilicon', 
        'entypo',
        'font-awesome',
        'simple-line-icon'
    ])
};

IconButton.defaultProps = {
    disabled: false,
    type: 'ionicon'
};

export default IconButton;
