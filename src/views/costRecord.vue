<template>
  <div class="wid-100 hei-100">
    <div class="index-header wid-100"></div>
		<div class="index-content">
			<div class="bar">
				<span class="left">本月</span>
				<div class="right">
					<img src="../assets/images/date.png" />
					<span>考勤日历</span>
				</div>
			</div>
			<ul class="mui-table-view">
				<div v-if="isLoading" class="loading">
					<spinner message="消费加载中..."></spinner>
				</div>
				<div v-for="item in costList">
					<router-link class="mui-table-view-cell cost-content-item tap-active" tag="li" :to="{name: 'costDetail'}">
						<div class="left">
							<img src="../assets/images/money.png" />
							<div class="left-sub">
								<span>{{item.costName}}</span>
								<span>{{item.costTime}}</span>
							</div>
						</div>
						<span class="right">{{item.costMoney}} 元</span>
					</router-link>
				</div>
			</ul>
		</div>
  </div>
</template>

<script>
import '../assets/css/cost-record.css'
import Spinner from 'vue-simple-spinner'
import * as costAPI from '../api/cost'

export default {
	components: {
		Spinner
	},
  mounted () {
		costAPI.getCostList('cost/getCostList', 'get').then((res) => {
			this.isLoading = false
			this.costList = res
		})
	},
	data () {
		return {
			isLoading: true,
			costList: []
		}
	}
}
</script>

<style scoped>
.loading{
	margin: 0.48rem 0
}
.index-content{
	height: calc(100% - 5.106666rem)
}
.mui-table-view{
	height: calc(100% - 0.773333rem);
	overflow-y: auto;
}
.mui-table-view-cell:after{
	height: 1px;
}
.mui-table-view:after{
	height: 0
}
</style>
