// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

// 菜谱列表
const caiPuList = () => {
    let caiPuList = [];

    for(let i = 0; i < 10; i++) {
        caiPuList.push({
            caiPuName: Random.csentence(4, 6),
            caiPuImage: Random.dataImage('100%x100%', '随机菜谱')
        })
    }

    return caiPuList
}

// 菜谱详情
const caiPuDetail = () => {
    let caiPuDetail = {
        danBaiZhi: Random.float(0, 100, 2, 2) + '%',
        xianWeiSu: Random.float(0, 100, 2, 2) + '%',
        huaHeWu: Random.float(0, 100, 2, 2) + '%',
        caiPuScore: Random.integer(0, 5),
        caiPuName: Random.csentence(4, 6),
        caiPuImage: Random.dataImage('100%x100%', '随机菜谱')
    }

    return caiPuDetail
}

export default {
    getCaiPuList: caiPuList,
    getCaiPuDetail: caiPuDetail
}