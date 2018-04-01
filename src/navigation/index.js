'use strict';

import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import { TabBarOptions } from '../config/NavigationConfig';
import { OfflineTabChildScreens, OnlineTabChildScreens } from './AppScreens';

/**
 * path属性适用于其他app或浏览器使用url打开本app并进入指定页面。
 * path属性用于声明一个界面路径，例如：【/pages/Home】。
 * 此时我们可以在手机浏览器中输入：app名称://pages/Home来启动该App，并进入Home界面。
 */
const Navigation = TabNavigator(
    {
        Offline: {
            screen: StackNavigator(OfflineTabChildScreens, {
                headerMode: 'screen',
                transitionConfig: () => ({
                    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
                })
            }),
            path: 'offline'
        },
        Online: {
            screen: StackNavigator(OnlineTabChildScreens, {
                headerMode: 'screen',
                transitionConfig: () => ({
                    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
                })
            }),
            path: 'online'
        }
    },
    {
        // customize app tab bars
        lazy: true,
        backBehavior: 'none',
        tabBarPosition: 'bottom',
        tabBarComponent: TabBarBottom,
        initialRouteName: 'Offline',
        swipeEnabled: false,
        animationEnabled: false,
        tabBarOptions: TabBarOptions
    }
);

export default Navigation;
