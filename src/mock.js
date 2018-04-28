import Mock from 'mockjs'
import kaoQinAPI from './mock/kaoqin'
import caiPuAPI from './mock/caipu'
import costAPI from './mock/cost'
import accountAPI from './mock/account'

Mock.setup({
    timeout: '350-600'
})

// 考勤相关
Mock.mock('kaoqin/getUserKaoQinState', 'get', kaoQinAPI.getUserKaoQinState)
Mock.mock('kaoqin/getUserKaoQinDetail', 'get', kaoQinAPI.getUserKaoQinDetail)

// 菜谱相关
Mock.mock('caipu/getCaiPuList', 'get', caiPuAPI.getCaiPuList)
Mock.mock('caipu/getCaiPuDetail', 'get', caiPuAPI.getCaiPuDetail)

// 消费相关
Mock.mock('cost/getCostList', 'get', costAPI.getCostList)
Mock.mock('cost/getCostDetail', 'get', costAPI.getCostDetail)

// 账户相关
Mock.mock('account/getAccountInfo', 'get', accountAPI.getAccountInfo)

export default Mock