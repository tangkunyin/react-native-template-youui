'use strict';

import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import { TabBarOptions } from '../config/NavigationConfig';
import { HomeTabChildScreens, MineTabChildScreens } from './AppScreens';

/**
 * path属性适用于其他app或浏览器使用url打开本app并进入指定页面。
 * path属性用于声明一个界面路径，例如：【/pages/Home】。
 * 此时我们可以在手机浏览器中输入：app名称://pages/Home来启动该App，并进入Home界面。
 */
const Navigation = TabNavigator(
    {
        home: {
            screen: StackNavigator(HomeTabChildScreens, {
                headerMode: 'screen',
                transitionConfig: () => ({
                    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
                })
            }),
            path: 'home'
        },
        mine: {
            screen: StackNavigator(MineTabChildScreens, {
                headerMode: 'screen',
                transitionConfig: () => ({
                    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
                })
            }),
            path: 'mine'
        }
    },
    {
        // customize app tab bars
        lazy: true,
        backBehavior: 'none',
        tabBarPosition: 'bottom',
        tabBarComponent: TabBarBottom,
        initialRouteName: 'home',
        swipeEnabled: false,
        animationEnabled: false,
        tabBarOptions: TabBarOptions
    }
);

export default Navigation;
