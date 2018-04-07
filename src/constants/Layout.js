'use strict';

import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
    window: {
        width,
        height,
    },
    isSmallDevice: width < 375,
    // 导航栏按钮横向边距
    navBarHSpace: 13,
};
