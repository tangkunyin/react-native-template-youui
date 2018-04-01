'use strict';




const sections = [
    {
        title: '正常的setState',
        data: [
            {
                title: '异步的state',
                page: 'AsyncStateScreen'
            },
            {
                title: 'list所有条目刷新',
                page: 'AllListRefreshScreen'
            },
        ]
    },
    {
        title: 'MobX管理state',
        data: [
            {
                title: '同步的state',
                page: 'SyncStateScreen'
            },
            {
                title: 'list局部条目刷新',
                page: 'PartListRefreshScreen'
            },
        ]
    }
];

export {
    sections
};
