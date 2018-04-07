'use strict';

/**
 * 自定义Navigation 和 TabBars
 */
import React from 'react';
import { Platform } from 'react-native';
import Colors from "../constants/Colors";
import Styles from '../constants/Styles';
import Layout from "../constants/Layout";
import IconButton from '../components/IconButton';

const NavigationOptions = (options, root) => {
    const { goBack } = options.navigation;
    const params = options.navigationOptions;

    // 滑动返回收拾，安卓默认关闭了，这里把它打开
    const gesturesEnabled = true;
    const headerBackTitle = false;

    let header;
    if (params ? params.isVisible === true : null) {
        header = null;
    }

    // 导航条底部阴影控制
    let headerStyle = { backgroundColor: Colors.tintColor };
    if (params ? params.bottomShadow === false : null) {
        const shadow = Platform.select({
            ios: {
                shadowOpacity: 0
            },
            android: {
                elevation: 0
            }
        });
        headerStyle = {
            ...headerStyle,
            ...shadow,
            borderBottomWidth: 0
        };
    }

    // 修改标题文字颜色
    let headerTitleStyle = Styles.headerTitle;
    if (params ? params.headerTitleColor : null) {
        headerTitleStyle = { ...headerTitleStyle, color: params.headerTitleColor };
    }

    // 自定义返回按钮
    let headerLeft = null;
    if (params ? params.headerLeft : null) {
        headerLeft = params.headerLeft;
    }
    if (!root && !headerLeft) {
        // 默认返回样式
        headerLeft = <IconButton name={'ios-arrow-back'} style={{ marginLeft: Layout.navBarHSpace }} onPress={() => { goBack(); }} />;
    }
    // 导航栏右边按钮
    let headerRight = null;
    if (params ? params.headerRight : null) {
        headerRight = params.headerRight;
    }

    return {
        header,
        headerStyle,
        headerTitleStyle,
        headerBackTitle,
        headerLeft,
        headerRight,
        gesturesEnabled
    };
};

const TabBarOptions = {
    indicatorStyle: {
        height: 0, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
    },
    style: {
        height: 49,
        backgroundColor: 'white'
    },
    labelStyle: {
        marginBottom: 3
    },
    iconStyle: {
        height: 24,
        width: 24,
        margin: 0
    },
    showIcon: true,
    scrollEnabled: false,
    // label和icon的前景色 活跃状态下（选中）
    activeTintColor: Colors.tabIconSelected,
    // label和icon的前景色 不活跃状态下(未选中)
    inactiveTintColor: Colors.tabIconDefault,
    // label和icon的背景色 活跃状态下
    activeBackgroundColor: 'white',
    // label和icon的背景色 不活跃状态下
    inactiveBackgroundColor: 'white',
    // 不透明度为按选项卡(iOS和Android < 5.0)
    pressOpacity: 0.3,
    //material涟漪效果的颜色（安卓版本需要大于5.0）
    pressColor: 'white'
};

export {
    NavigationOptions,
    TabBarOptions,
};
