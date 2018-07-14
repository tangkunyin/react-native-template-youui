'use strict';

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { TabBarOptions } from '../config/NavigationConfig';
import { HomeTabChildScreens, MineTabChildScreens } from './AppScreens';


// customize the tabBarComponent
const TabBarComponent = props => <BottomTabBar {...props} />;


/**
 * path属性适用于其他app或浏览器使用url打开本app并进入指定页面。
 * path属性用于声明一个界面路径，例如：【/pages/Home】。
 * 此时我们可以在手机浏览器中输入：app名称://pages/Home来启动该App，并进入Home界面。
 */
const Navigation = createBottomTabNavigator(
    {
        home: {
            screen: createStackNavigator(HomeTabChildScreens, {
                mode: 'card',
                headerMode: 'float'
            }),
            path: 'home'
        },
        mine: {
            screen: createStackNavigator(MineTabChildScreens, {
                mode: 'card',
                headerMode: 'float'
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
        // 可选项
        tabBarComponent: props => <TabBarComponent {...props} style={{ borderTopColor: 'gray' }} />,
    }
);

export default Navigation;
