'use strict';

/**
 * 自定义Navigation 和 TabBars
 */
import React from 'react';
import Colors from "../constants/Colors";
import Styles from '../constants/Styles';
import IconButton from '../components/IconButton';

const NavigationOptions = (options, root) => {
    const { state, goBack } = options.navigation;
    const headerStyle = { backgroundColor: Colors.tintColor };
    const headerTitleStyle = Styles.headerTitle;
    // 滑动返回收拾，安卓默认关闭了，这里把它打开
    const gesturesEnabled = true;
    const headerBackTitle = false;
    let header;
    if (state.params ? state.params.isVisible === true : null) {
        header = null;
    }
   
    // 给子项自定义返回按钮
    let headerLeft = null;
    let headerRight = null;
    if (!root) {
        headerLeft = <IconButton name={'ios-arrow-back'} style={{ marginLeft: 13 }} onPress={() => { goBack(); }} />;
        // 给二级页加右边按钮
        if (state.params ? state.params.headerRight : null) {
            headerRight = state.params.headerRight;
        } else {
            // 默认一项
            headerRight = <IconButton name={'ios-search'} style={{ marginRight: 13 }} />;
        }
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