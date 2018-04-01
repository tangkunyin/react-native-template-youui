'use strict';

import { NavigationOptions } from '../config/NavigationConfig';
// MainPage
import OfflineIndex from '../containers/OfflineIndex';
import OnlineIndex from '../containers/OnlineIndex';
// SubPage
import AsyncStateScreen from '../containers/views/AsyncStateScreen';
import AllListRefreshScreen from '../containers/views/AllListRefreshScreen';
import SyncStateScreen from '../containers/views/SyncStateScreen';
import PartListRefreshScreen from '../containers/views/PartListRefreshScreen';

// 动态添加 navigationOptions
const ScreenOptionExt = (screen) => {
    const extScreen = {};
    Object.keys(screen)
        .forEach((key) => {
            const screenValue = screen[key];
            if (!screenValue.navigationOptions) {
                screenValue.navigationOptions = options => NavigationOptions(options, screenValue.root);
            }
            extScreen[key] = screenValue;
        });
    return extScreen;
};

const OfflineTabChildScreens = ScreenOptionExt({
    OfflineScreen: { screen: OfflineIndex, root: true },
    AsyncStateScreen: { screen: AsyncStateScreen },
    AllListRefreshScreen: { screen: AllListRefreshScreen },
    SyncStateScreen: { screen: SyncStateScreen },
    PartListRefreshScreen: { screen: PartListRefreshScreen },
});

const OnlineTabChildScreens = ScreenOptionExt({
    OnlineScreen: { screen: OnlineIndex, root: true }
});

// TODO 取出来后Screen对象的顺序应该是不能保证的，而结果又是正确的 ！！ ？
export {
    OfflineTabChildScreens,
    OnlineTabChildScreens
};
