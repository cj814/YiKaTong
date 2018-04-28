<template>
  <div>
      <div class="index-header wid-100">
			<div class="kaoqin-date wid-100">日期：{{kaoQinDate}}</div>
		</div>
		<div class="index-content">
			<div class="bar">
				<span class="left">打卡记录时间和位置</span>
				<div class="right">
					<img src="../assets/images/date.png" />
					<span>考勤日历</span>
				</div>
			</div>
			<div class="kaoqin-content">
				<div class="kaoqin-item">
					<img src="../assets/images/chuqintianshu.png" />
					<span>上班打卡时间 {{shangBanTime}}</span>
				</div>
				<div class="kaoqin-item-sub">
					<img src="../assets/images/position.png" />
					<span>校门口考勤机</span>
				</div>
				<div class="kaoqin-item second">
					<img src="../assets/images/zaotui.png" />
					<span>下班打卡时间 {{xiaBanTime}}</span>
				</div>
				<div class="kaoqin-item-sub">
					<img src="../assets/images/position.png" />
					<span>校门口考勤机</span>
				</div>
				<div class="kaoqin-line"></div>
			</div>
		</div>
  </div>
</template>

<script>
import '../assets/css/index.css'
import '../assets/css/kaoqin-record.css'
import '../assets/css/kaoqin-detail.css'
import * as kaoQinAPI from '../api/kaoqin'

export default {
  mounted () {
	kaoQinAPI.getUserKaoQinDetail('kaoqin/getUserKaoQinDetail', 'get', this.kaoQinDate).then((res) => {
		this.shangBanTime = res.shangBanTime
		this.xiaBanTime = res.xiaBanTime
	})
  },
  data () {
	  return {
		  kaoQinDate: this.$route.query.date,
		  shangBanTime: '',
		  xiaBanTime: ''
	  }
  }
}
</script>