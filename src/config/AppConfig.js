'use strict';

import Colors from '../constants/Colors';

export default {
    // font scaling override - RN default is on
    allowTextFontScaling: true,

    // App StatusBar config here.
    statusBar: {
        animated: true,
        hidden: false,
        backgroundColor: Colors.tintColor,
        translucent: false,
        
        // enum('default', 'light-content', 'dark-content')
        barStyle: 'light-content', 
        
        networkActivityIndicatorVisible: false,
        
        //enum('fade', 'slide') 
        showHideTransition: 'slide',
    }
};
