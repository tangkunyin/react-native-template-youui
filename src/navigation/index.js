'use strict';

import React from 'react';
import { Easing, Animated } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { BottomTabBar } from 'react-navigation-tabs';
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import { StackNavigatorConfig, BottomTabNavigatorConfig, TabBarOptions } from '../config/NavigationConfig';


// App Screens
import HomeScreen from '../screens/home/index';
import MineScreen from '../screens/mine/index';
import StatusBarPlayground from '../screens/home/views/StatusBarPlayground';


/**
 * customize the tabBarComponent
 * @param props
 * @returns {*}
 * @constructor
 */
const TabBarComponent = props => <BottomTabBar {...props} />;

/**
 * Create NavigationController
 */
const CreateUINavigationController = (screens) => {
    const controllers = {};
    Object.keys(screens).forEach((key) => {
        const screenValue = screens[key];
        if (!screenValue.navigationOptions) {
            screenValue.navigationOptions = options => StackNavigatorConfig(options, screenValue.root);
        }
        controllers[key] = screenValue;
    });
    return createStackNavigator(controllers, {
        mode: 'card',
        headerMode: 'float',
        transitionConfig: () => ({
            transitionSpec: {
                duration: 400,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: StackViewStyleInterpolator.forHorizontal,
            isModal: false
        })
    });
};

/**
 * Create TabBarViewController
 */
const UITabBarController = createBottomTabNavigator(
    {
        home: {
            screen: CreateUINavigationController({
                HomeScreen: { screen: HomeScreen, root: true },
                StatusBarPlayground: { screen: StatusBarPlayground }
            }),
            path: 'home'
        },
        mine: {
            screen: CreateUINavigationController({
                MineScreen: { screen: MineScreen, root: true }
            }),
            path: 'mine'
        }
    },
    {
        lazy: true,
        initialRouteName: 'home',
        backBehavior: 'none',
        swipeEnabled: false,
        animationEnabled: false,
        tabBarOptions: TabBarOptions,
        navigationOptions: ({ navigation }) => BottomTabNavigatorConfig(navigation),
        // 可选项
        tabBarComponent: props => <TabBarComponent {...props} style={{ borderTopColor: '#999' }} />
    }
);

export default UITabBarController;
