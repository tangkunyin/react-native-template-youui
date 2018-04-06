'use strict';

import { NavigationOptions } from '../config/NavigationConfig';
// MainPage
import HomeScreen from '../screens/home/index';
import MineScreen from '../screens/mine/index';
// SubPage
import StatusBarPlayground from '../screens/home/views/StatusBarPlayground';
import AsyncStateScreen from '../screens/home/views/AsyncStateScreen';
import AllListRefreshScreen from '../screens/home/views/AllListRefreshScreen';
import SyncStateScreen from '../screens/home/views/SyncStateScreen';
import PartListRefreshScreen from '../screens/home/views/PartListRefreshScreen';

// navigationOptions dynamic added
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

const HomeTabChildScreens = ScreenOptionExt({
    HomeScreen: { screen: HomeScreen, root: true },
    StatusBarPlayground: { screen: StatusBarPlayground },
    AsyncStateScreen: { screen: AsyncStateScreen },
    AllListRefreshScreen: { screen: AllListRefreshScreen },
    SyncStateScreen: { screen: SyncStateScreen },
    PartListRefreshScreen: { screen: PartListRefreshScreen },
});

const MineTabChildScreens = ScreenOptionExt({
    MineScreen: { screen: MineScreen, root: true }
});

export {
    HomeTabChildScreens,
    MineTabChildScreens
};
