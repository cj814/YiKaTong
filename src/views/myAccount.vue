<template>
  <div>
    <div class="account-header wid-100 swiper-container">
			<div class="swiper-wrapper">
				<img class="swiper-slide" src="../assets/images/card.png" />
				<img class="swiper-slide" src="../assets/images/card.png" />
				<img class="swiper-slide" src="../assets/images/card.png" />
			</div>
		</div>
		<div class="account-content">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell index-content-item">
					<a class="mui-navigate-right first" href="javascript:;">
						<img src="../assets/images/account.png" />
						<span>账户余额</span>
						<span class="item-num"><i>3562.7</i>元</span>
					</a>
				</li>
				<li class="mui-table-view-cell index-content-item tap-active">
					<router-link class="mui-navigate-right" :to="{name: 'transMoney'}">
						<img src="../assets/images/zhuanzhang.png" />
						<span>转账到银行卡</span>
					</router-link>
				</li>
			</ul>
		</div>
  </div>
</template>

<script>
import '../assets/css/swiper.min.css'
import '../assets/css/index.css'
import '../assets/css/kaoqin-record.css'
import '../assets/css/my-account.css'
import Swiper from 'swiper'

export default {
  mounted () {
    var swiper = new Swiper('.swiper-container', {
				effect: 'coverflow',
				grabCursor: true,
				centeredSlides: true,
				slidesPerView: 'auto',
				coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
				}
		});
  }
}
</script>