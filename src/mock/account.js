// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;


// 账户信息
const accountInfo = () => {
    let accountInfo = {
        userName: Random.cname(),
        cardNumber: Random.natural(),
        bankName: Random.csentence(4, 6),
        bankLogo: Random.dataImage('100%x100%', 'B')
    }

    return accountInfo
}

export default {
    getAccountInfo: accountInfo
}