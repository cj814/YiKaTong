<template>
  <div>
        <div class="index-header wid-100"></div>
		<div class="cost-content">
			<div class="cost-content-item">
				<img src="./../assets/images/money.png" />
				<span>消费机号：{{costName}}</span>
				<div class="trans-line"></div>
			</div>
			<div class="cost-content-item">
				<img src="./../assets/images/money.png" />
				<span>营业时段：{{yingYeShiDuan}}</span>
				<div class="trans-line"></div>
			</div>
			<div class="cost-content-item">
				<img src="./../assets/images/money2.png" />
				<span>消费金额：{{costMoney}} 元</span>
				<div class="trans-line"></div>
			</div>
			<div class="cost-content-item">
				<img src="./../assets/images/food-ico.png" />
				<span>青菜包：{{qingCaiBao}} 元</span>
				<div class="trans-line"></div>
			</div>
			<div class="cost-content-item">
				<img src="./../assets/images/money2.png" />
				<span>卡内金额：{{kaNeiJinE}} 元</span>
				<div class="trans-line"></div>
			</div>
			<div class="cost-content-item">
				<img src="./../assets/images/kuanggong.png" />
				<span>消费时间：{{costTime}}</span>
				<div class="trans-line"></div>
			</div>
		</div>
  </div>
</template>

<script>
import '../assets/css/index.css'
import * as costAPI from '../api/cost'

export default {
  mounted () {
	  costAPI.getCostDetail('cost/getCostDetail', 'get').then((res) => {
		this.costName = res.costName
		this.yingYeShiDuan = res.yingYeShiDuan
		this.costMoney = res.costMoney
		this.qingCaiBao = res.qingCaiBao
		this.kaNeiJinE = res.kaNeiJinE
		this.costTime = res.costTime
	  })
  },
  data () {
	  return {
		costName: '',
		yingYeShiDuan: '',
		costMoney: 0,
		qingCaiBao: 0,
		kaNeiJinE: 0,
		costTime: ''
	  }
  }
}
</script>

<style scoped>
.index-header{
    background-image: url(./../assets/images/index-header-bg.png)
}
.cost-content{
	background: #fff;
}
.cost-content-item{
	padding: 0.373333rem 0.32rem;
	display: flex;
	align-items: center;
    position: relative;
    justify-content: flex-start;
}
.cost-content-item img{
	width: 0.506666rem;
	height: 0.506666rem;
	margin-right: 0.32rem;
}
.cost-content-item span{
	color: #585858;
	font-size: 0.32rem;
	position: relative;
	top: 0.04rem;
}
</style>