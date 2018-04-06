'use strict';

import Colors from './Colors';
import Layout from './Layout';

const Styles = {
    headerTitle: {
        flex: 1,
        fontSize: 18,
        color: 'white',
        fontWeight: '400',
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusBar: {
        width: Layout.window.width,
        height: 20,
        backgroundColor: Colors.tintColor
    },
    button: {
        margin: 5,
    },
    container: {
        backgroundColor: Colors.background,
    },
};

export default Styles;
