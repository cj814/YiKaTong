<template>
  <div class="wid-100 hei-100">
    <div class="menu-header wid-100"></div>
		<div class="menu-content">
			<div class="menu-week-header">
				<img src="../assets/images/food-ico.png" />
				<span :class="{active:activeDay === item}" @click="changeCaiPu(item)" v-for="item in weekList">星期{{item}}</span>
				<div class="trans-line"></div>
			</div>
			<div class="menu-week-content">
				<div v-if="isLoading">
					<spinner message="菜谱加载中..."></spinner>
				</div>
				<div>
					<div v-for="item in caiPuList">
						<router-link class="menu-item" tag="div" :to="{name: 'menuDetail'}">
							<div class="food-img-box">
								<img :src="item.caiPuImage" />
								<div class="food-comment-box wid-100"></div>
								<div class="food-comment">
									<img src="../assets/images/pen.png" />
									<span>菜肴点评</span>
								</div>
							</div>
							<div class="food-name">{{item.caiPuName}}</div>
						</router-link>
					</div>
					<div class="clear"></div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import '../assets/css/menu-list.css'
import Spinner from 'vue-simple-spinner'
import * as caiPuAPI from '../api/caipu'

export default {
  components: {
	  Spinner
  },
  mounted () {
	  this.loadCaiPu(this.activeDay)
  },
  data () {
	  return {
		  isLoading: true,
		  activeDay: '一',
		  weekList: ['一', '二', '三', '四', '五'],
		  caiPuList: []
	  }
  },
  methods: {
	  loadCaiPu (activeDay) {
		  caiPuAPI.getCaiPuList('caipu/getCaiPuList', 'get', activeDay).then((res) => {
			this.isLoading = false
			this.caiPuList = res
		})
	  },
	  changeCaiPu (day) {
		  this.caiPuList = [];
		  this.activeDay = day
		  this.isLoading = true
		  this.loadCaiPu(this.activeDay)
	  }
  }
}
</script>

<style scoped>
.menu-content{
	height: calc(100% - 6.813333rem)
}
.menu-week-content{
	height: calc(100% - 1.066666rem);
	overflow-y: auto;
}
</style>
