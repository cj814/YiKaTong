<template>
  <div class="wid-100 hei-100 back-fff">
      <div class="menu-detail-header wid-100">
			<img :src="caiPuImage" class="wid-100 hei-100" />
			<div class="menu-detail-header-bg wid-100">{{caiPuName}}</div>
		</div>
		<div class="menu-detail-content">
			<table class="wid-100">
				<tr>
					<td rowspan="3" class="td-left">
						<img src="../assets/images/yingyang.png" />
						营养成分
					</td>
					<td class="td-right">蛋白质含量：{{danBaiZhi}}</td>
				</tr>
				<tr>
					<td class="td-right">纤维素含量：{{xianWeiSu}}</td>
				</tr>
				<tr>
					<td class="td-right">碳水化合物：{{huaHeWu}}</td>
				</tr>
			</table>
			<div class="menu-evaluate wid-100">
				<div class="menu-evaluate-left mui-pull-left">评价等级</div>
				<div class="menu-evaluate-right mui-pull-left">
					<evaluate :score="caiPuScore"></evaluate>
				</div>
				<div class="clear"></div>
			</div>
			<router-link class="menu-comment-btn wid-100" tag="div" :to="{name: 'foodEvaluate'}">我要点评</router-link>
		</div>
  </div>
</template>

<script>
import * as caiPuAPI from '../api/caipu'
import Evaluate from '../components/evaluate'

export default {
  components: {
	  Evaluate
  },
  mounted () {
	  caiPuAPI.getCaiPuDetail('caipu/getCaiPuDetail', 'get').then((res) => {
		this.danBaiZhi = res.danBaiZhi
		this.xianWeiSu = res.xianWeiSu
		this.huaHeWu = res.huaHeWu
		this.caiPuScore = res.caiPuScore
		this.caiPuName = res.caiPuName
		this.caiPuImage = res.caiPuImage
	  })
  },
  data () {
	  return {
		defaultImage: require('../assets/images/menu-header-bg.png'),
		danBaiZhi: '',
		xianWeiSu: '',
		huaHeWu: '',
		caiPuScore: 0,
		caiPuName: '',
		caiPuImage: ''
	  }
  }
}
</script>

<style scoped>
@import '../assets/css/menu-detail.css';
td,th{
	vertical-align: middle
}
.back-fff{
	background: #fff
}
</style>
