<template>
  <div>
    <div class="index-header wid-100"></div>
		<div class="index-content">
			<div class="bar">
				<span class="left">本月</span>
				<router-link class="right" tag="div" :to="{name: 'kaoQinDate'}">
					<img src="../assets/images/date.png" />
					<span>考勤日历</span>
				</router-link>
			</div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell index-content-item">
					<a class="mui-navigate-right" href="javascript:;">
						<img src="../assets/images/chuqintianshu.png" />
						<span>出勤天数</span>
						<span class="item-num">{{chuQinTianShu}}天</span>
					</a>
				</li>
				<li class="mui-table-view-cell index-content-item">
					<a class="mui-navigate-right" href="javascript:;">
						<img src="../assets/images/xiuxitianshu.png" />
						<span>休息天数</span>
						<span class="item-num">{{xiuXiTianShu}}天</span>
					</a>
				</li>
				<li class="mui-table-view-cell index-content-item">
					<a class="mui-navigate-right" href="javascript:;">
						<img src="../assets/images/chidao.png" />
						<span>迟到</span>
						<span class="item-num">{{chiDao}}次</span>
					</a>
				</li>
				<li class="mui-table-view-cell index-content-item">
					<a class="mui-navigate-right" href="javascript:;">
						<img src="../assets/images/zaotui.png" />
						<span>早退</span>
						<span class="item-num">{{zaoTui}}次</span>
					</a>
				</li>
				<li class="mui-table-view-cell index-content-item">
					<a class="mui-navigate-right" href="javascript:;">
						<img src="../assets/images/kuanggong.png" />
						<span>矿工</span>
						<span class="item-num">{{kuangGong}}次</span>
					</a>
				</li>
				<li class="mui-table-view-cell index-content-item">
					<a class="mui-navigate-right" href="javascript:;">
						<img src="../assets/images/jiaban.png" />
						<span>加班</span>
						<span class="item-num">{{jiaBan}}次</span>
					</a>
				</li>
			</ul>
		</div>
  </div>
</template>

<script>
import '../assets/css/index.css'
import '../assets/css/kaoqin-record.css'
import * as kaoQinAPI from '../api/kaoqin'
export default {
  created () {
	  kaoQinAPI.getUserKaoQinState('kaoqin/getUserKaoQinState', 'get').then((res) => {
		this.chuQinTianShu = res.chuQinTianShu,
		this.xiuXiTianShu = res.xiuXiTianShu,
		this.chiDao = res.chiDao,
		this.zaoTui = res.zaoTui,
		this.kuangGong = res.kuangGong,
		this.jiaBan = res.jiaBan
	  })
  },
  data () {
	  return {
		chuQinTianShu: 0,
		xiuXiTianShu: 0,
		chiDao: 0,
		zaoTui: 0,
		kuangGong: 0,
		jiaBan: 0
	  }
  }
}
</script>

<style scoped>
.index-content-item .item-num{
	right: 1rem;
}
</style>