<template>
  <div>
      <div class="trans-money" v-if="!transSuccess">
        <div class="trans-header">
            <div class="trans-name">{{userName}}</div>
            <div class="trans-num">{{cardNumber}}</div>
            <div class="trans-bank">
                <!-- <img src="./../assets/images/bank-ico.png" /> -->
                <img :src="bankLogo" />
                <span>{{bankName}}</span>
            </div>
            <div class="trans-line"></div>
        </div>
        <div class="trans-content">
            <div class="trans-item">
                <span class="mui-pull-left">时间</span>
                <span class="mui-pull-right" style="color: #999;">具体到账时间以短信通知为准</span>
                <div class="clear"></div>
            </div>
            <div class="trans-item">
                <span class="mui-pull-left">金额</span>
                <a href="#" class="mui-pull-right">限额说明</a>
                <div class="mui-pull-right">
                    <input type="number" placeholder="请输入转账金额" v-model="transMoney" />
                </div>
                <div class="clear"></div>
            </div>
            <button class="mui-btn-blue trans-btn" :class="{active:isBtnShow}" @click="submitTrans">下一步</button>
        </div>
    </div>
	<transition name="fade" mode="out-in">
		<div class="trans-success" v-if="transSuccess">
			<div class="success-header">
				<img src="../assets/images/success2.png" />
				<span>转账成功</span>
			</div>
			<router-link class="mui-btn-blue trans-btn active" tag="button" :to="{name: 'Layout'}">确定</router-link>
		</div>
	</transition>
  </div>
</template>

<script>
import * as accountAPI from '../api/account'

export default {
  mounted () {
	  accountAPI.getAccountInfo('account/getAccountInfo', 'get').then((res) => {
		this.userName = res.userName
		this.cardNumber = this.replaceNum(res.cardNumber)
		this.bankName = res.bankName
		this.bankLogo = res.bankLogo
	  })
  },
  computed: {
	  isBtnShow () {
		  return this.transMoney == '' ? false : true
	  }
  },
  data () {
	  return {
		userName: '',
		cardNumber: '',
		bankName: '',
		bankLogo: '',
		transMoney: '',
		transSuccess: false
	  }
  },
  methods: {
	  submitTrans (e) {
		  if(!this.isBtnShow) {
			  e.preventDefault = true
			  e.stop
		  }else{
			  alert('转账金额：' + this.transMoney)
			  this.transSuccess = true
		  }
	  },
	  replaceNum: (string) => {
		  let str = string.toString()
		  let test = str.substring(6, 10)
		  let newStr = str.replace(test, '****')

		  return newStr
	  }
  }
}
</script>

<style scoped>
::-webkit-input-placeholder { /* WebKit browsers */ 
	font-size: 0.32rem;
} 
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
	font-size: 0.32rem;
} 
::-moz-placeholder { /* Mozilla Firefox 19+ */ 
	font-size: 0.32rem;
} 
:-ms-input-placeholder { /* Internet Explorer 10+ */ 
	font-size: 0.32rem;
}
.trans-header{
	height: 3.866666rem;
	color: #282828;
	font-size: 0.373333rem;
	background: #fff;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.trans-header span{
	color: #585858;
	font-size: 0.32rem;
}
.trans-num{
	margin: 0.266666rem auto;
}
.trans-bank img{
	width: 0.426666rem;
	height: 0.426666rem;
	position: relative;
	top: 0.053333rem;
}
.trans-item{
	height: 0.933333rem;
	line-height: 0.933333rem;
	margin-bottom: 0.346666rem;
	padding: 0 0.32rem;
	font-size: 0.32rem;
	background: #fff;
}
.trans-item input{
	width: 4rem;
	height: 0.8rem;
	margin: 0.066666rem 0.133333rem 0 0;
	padding: 0.026666rem 0.213333rem;
	border: none;
	text-align: right;
}
.trans-btn{
	width: 9.333333rem;
	height: 1.066666rem;
	margin: 1.133333rem 0.32rem 0;
	font-size: 0.373333rem;
	opacity: .5;
}
.trans-btn.active{
	opacity: 1;
}
.success-header{
	height: 5.866666rem;
	background: #a4b6ff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.success-header img{
	width: 1.32rem;
	height: 1.32rem;
	margin-bottom: 0.64rem;
}
.success-header span{
	color: #fff;
	font-size: 0.32rem;
}
</style>