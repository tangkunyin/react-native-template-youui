'use strict';

/**
 * 自定义Navigation 和 TabBars
 */
import React from 'react';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';

const NavigationOptions = (options, root) => {
    const { state, goBack } = options.navigation;
    const headerStyle = { backgroundColor: '#4ECBFC' };
    const headerTitleStyle = {
        fontSize: 18,
        color: 'white',
        fontWeight: '500',
        alignSelf: 'center',
        textAlign: 'center'
    };
    // 滑动返回收拾，安卓默认关闭了，这里把它打开
    const gesturesEnabled = true;
    let headerRight;
    if (state.params ? state.params.headerRight : null) {
        headerRight = state.params.headerRight;
    }
    let header;
    if (state.params ? state.params.isVisible === true : null) {
        header = null;
    }
    // 给子项自定义返回按钮
    let headerLeft = null;
    const headerBackTitle = false;
    if (!root) {
        headerLeft = (
            <Button customView={<Icon name={'ios-arrow-back'} size={30} color={'white'} style={{ marginLeft: 13 }}/>}
                    onPress={() => {
                        goBack();
                    }}
            />
        );
        if (__ANDROID__) {
            headerRight = (
                <Button customView={<Icon name={'ios-share'} size={30} color={'white'} style={{ marginRight: 13 }}/>}/>
            );
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
    activeTintColor: '#4ECBFC',
    // label和icon的前景色 不活跃状态下(未选中)
    inactiveTintColor: '#aaa',
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
