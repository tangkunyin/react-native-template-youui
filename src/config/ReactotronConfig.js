'use strict';

import Config from './DebugConfig';
import Reactotron, {
    trackGlobalErrors,
    openInEditor,
    overlay,
    asyncStorage,
    networking
} from 'reactotron-react-native';

if (Config.useReactotron) {
    // https://github.com/infinitered/reactotron for more options!
    Reactotron
        .configure({
            name: 'MobXApp Demo'
        })
        .use(trackGlobalErrors())
        .use(openInEditor())
        .use(overlay())
        .use(asyncStorage())
        .use(networking())
        .connect();

    // Let's clear Reactotron on every time we load the app
    Reactotron.clear();

    // Totally hacky, but this allows you to not both importing reactotron-react-native
    // on every file.  This is just DEV mode, so no big deal.
    console.tron = Reactotron;
}
