'use strict';

import React from 'react';
import {
    ActivityIndicator,
    Platform,
    StyleSheet,
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IconType from '../constants/IconType';
import colors from '../constants/Colors';
import { Text, View } from 'react-native-animatable';


const log = () => {
    console.log('please attach method to this component'); //eslint-disable-line no-console
};

const styles = StyleSheet.create({
    button: {
        padding: 19,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
    icon: {
        marginRight: 10
    },
    iconRight: {
        marginLeft: 10
    },
    small: {
        padding: 12
    },
    smallFont: {
        fontSize: 14
    },
    activityIndicatorStyle: {
        marginHorizontal: 10,
        height: 0
    },
    raised: {
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .4)',
                shadowOffset: {
                    height: 1,
                    width: 1
                },
                shadowOpacity: 1,
                shadowRadius: 1
            },
            android: {
                elevation: 2
            }
        })
    }
});

const Button = (props) => {
    const {
        disabled,
        loading,
        loadingRight,
        activityIndicatorStyle,
        buttonStyle,
        borderRadius,
        title,
        onPress,
        icon,
        secondary,
        secondary2,
        secondary3,
        primary1,
        primary2,
        backgroundColor,
        color,
        fontSize,
        underlayColor,
        raised,
        textStyle,
        large,
        iconRight,
        fontWeight,
        disabledStyle,
        fontFamily,
        display,
        isCustom,
        customView,
        animationType,
        activeOpacity,
        ...attributes
    } = props;
    let { Component } = props;
    let iconElement;

    if (icon) {
        let Icon;
        if (!icon.type) {
            Icon = MaterialIcon;
        } else {
            Icon = IconType(icon.type);
        }
        iconElement = (
            <Icon
                color={icon.color || 'white'}
                size={icon.size || (large ? 26 : 18)}
                style={[
                    iconRight ? styles.iconRight : styles.icon,
                    icon.style && icon.style
                ]}
                name={icon.name}/>
        );
    }
    let loadingElement;
    if (loading) {
        loadingElement = (
            <ActivityIndicator
                style={[styles.activityIndicatorStyle, activityIndicatorStyle]}
                color={color || 'white'}
                size={large && 'large' || 'small'}
            />
        );
    }
    if (!Component && Platform.OS === 'ios') {
        Component = TouchableHighlight;
    }
    if (!Component && Platform.OS === 'android') {
        Component = TouchableNativeFeedback;
    }
    if (!Component) {
        Component = TouchableHighlight;
    }

    let customComponent;
    if (!isCustom) {
        customComponent = (
            <View
                animation={animationType}
                useNativeDriver
                style={[
                    styles.button,
                    secondary && { backgroundColor: colors.secondary },
                    secondary2 && { backgroundColor: colors.secondary2 },
                    secondary3 && { backgroundColor: colors.secondary3 },
                    primary1 && { backgroundColor: colors.primary1 },
                    primary2 && { backgroundColor: colors.primary2 },
                    backgroundColor && { backgroundColor: backgroundColor },
                    borderRadius && { borderRadius },
                    raised && styles.raised,
                    !large && styles.small,
                    buttonStyle && buttonStyle,
                    disabled && { backgroundColor: colors.disabled },
                    disabled && disabledStyle && disabledStyle
                ]}
            >
                {
                    icon && !iconRight && iconElement
                }
                {
                    loading && !loadingRight && loadingElement
                }
                <Text
                    style={[
                        styles.text,
                        color && { color },
                        fontSize && { fontSize },
                        textStyle && textStyle,
                        fontWeight && { fontWeight },
                        fontFamily && { fontFamily }
                    ]}>
                    {title}
                </Text>
                {
                    loading && loadingRight && loadingElement
                }
                {
                    icon && iconRight && iconElement
                }
            </View>
        );
    }
    return (
        <Component
            underlayColor={underlayColor || 'transparent'}
            onPress={onPress || log}
            disabled={disabled || false}
            style={{ display: display || 'flex' }}
            activeOpacity={activeOpacity}
            {...attributes}
        >
            {

                isCustom ? customView : customComponent

            }
        </Component>
    );
};

Button.propTypes = {
    style: PropTypes.object,
    title: PropTypes.string,
    onPress: PropTypes.any,
    icon: PropTypes.object,
    secondary: PropTypes.bool,
    secondary2: PropTypes.bool,
    secondary3: PropTypes.bool,
    primary1: PropTypes.bool,
    primary2: PropTypes.bool,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.any,
    underlayColor: PropTypes.string,
    raised: PropTypes.bool,
    textStyle: PropTypes.any,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    activityIndicatorStyle: PropTypes.object,
    loadingRight: PropTypes.bool,
    Component: PropTypes.any,
    borderRadius: PropTypes.number,
    large: PropTypes.bool,
    iconRight: PropTypes.bool,
    fontWeight: PropTypes.string,
    disabledStyle: PropTypes.object,
    fontFamily: PropTypes.string,
    display: PropTypes.string,
    isCustom: PropTypes.bool,
    customView: PropTypes.object,
    animationType: PropTypes.string,
    activeOpacity: PropTypes.number,
};


export default Button;
