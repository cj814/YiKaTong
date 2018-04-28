// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

// 考勤状态
const kaoQinState = () => {
    let kaoQinState = {
        chuQinTianShu: Random.integer(1, 31),
        xiuXiTianShu: Random.integer(1, 31),
        chiDao: Random.integer(1, 31),
        zaoTui: Random.integer(1, 31),
        kuangGong: Random.integer(1, 31),
        jiaBan: Random.integer(1, 31)
    }

    return kaoQinState
}

// 考勤详情
const kaoQinDetail = () => {
    let kaoQinDetail = {
        shangBanTime: Random.datetime('HH:mm'),
        xiaBanTime: Random.datetime('HH:mm')
    }

    return kaoQinDetail
}

export default {
    getUserKaoQinState: kaoQinState,
    getUserKaoQinDetail: kaoQinDetail
}