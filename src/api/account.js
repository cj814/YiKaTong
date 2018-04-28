import { fetch } from '../utils/fetch'

// 账户信息
export function getAccountInfo(url, params) {
    return fetch(url, params)
}