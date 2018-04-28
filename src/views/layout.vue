<template>
  <div>
    <div class="index-header wid-100">
        <img src="../assets/images/user-photo.png" />
        <span>欢迎您，张三</span>
    </div>
    <div class="index-content">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell index-content-item tap-active">
                <router-link class="mui-navigate-right" :to="{name: 'kaoQinRecord'}">
                    <img src="../assets/images/kaoqinjilu.png" />
                    <span>考勤记录</span>
                </router-link>
            </li>
            <li class="mui-table-view-cell index-content-item tap-active">
                <router-link class="mui-navigate-right" :to="{name: 'oneWeekMenu'}">
                    <img src="../assets/images/yizhoucaipu.png" />
                    <span>一周菜谱</span>
                </router-link>
            </li>
            <li class="mui-table-view-cell index-content-item tap-active">
                <router-link class="mui-navigate-right" :to="{name: 'costRecord'}">
                    <img src="../assets/images/wodezhanghu.png" />
                    <span>消费记录</span>
                </router-link>
            </li>
            <li class="mui-table-view-cell index-content-item tap-active">
                <router-link class="mui-navigate-right" :to="{name: 'myAccount'}">
                    <img src="../assets/images/wodezhanghu.png" />
                    <span>我的账户</span>
                </router-link>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import '../assets/css/index.css'
import '../assets/css/kaoqin-record.css'
export default {
  
}
</script>

<style>

</style>
