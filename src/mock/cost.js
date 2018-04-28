// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

// 消费列表
const costList = () => {
    let costList = [];

    for (let i = 0; i < 10; i++) {
        costList.push({
            costName: Random.csentence(6, 8),
            costTime: Random.datetime('MM-dd HH:mm'),
            costMoney: Random.float(0, 1000, 2, 2)
        })
    }

    return costList
}

// 消费详情
const costDetail = () => {
    let costDetail = {
        costName: Random.csentence(6, 8),
        yingYeShiDuan: Random.csentence(2, 4),
        costMoney: Random.float(0, 1000, 2, 2),
        qingCaiBao: Random.float(0, 1000, 2, 2),
        kaNeiJinE: Random.float(0, 1000, 2, 2),
        costTime: Random.datetime('yyyy-MM-dd HH:mm')
    };

    return costDetail
}

export default {
    getCostList: costList,
    getCostDetail: costDetail
}