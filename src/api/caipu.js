import { fetch } from '../utils/fetch'

// 菜谱列表
export function getCaiPuList(url, params) {
    return fetch(url, params)
}

// 菜谱详情
export function getCaiPuDetail(url, params) {
    return fetch(url, params)
}