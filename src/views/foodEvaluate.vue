<template>
  <div class="caipin-container wid-100 hei-100">
    <div class="caipin-evaluate-content" v-if="!submitSuccess">
      <div class="caipin-evaluate-header">
        <span>等级评价</span>
        <div class="evaluate-box">
					<evaluate :score="caiPuScore" @ping-fen="pingFen"></evaluate>
        </div>
        <span>给菜品点个赞吧</span>
      </div>
      <textarea class="wid-100" placeholder="给个意见和建议" v-model="suggestion"></textarea>
      <div class="submit-btn wid-100" @click="submitEvaluate">提交评价</div>
    </div>
		<transition name="fade" mode="out-in">
			<div class="caipin-evaluate-success" v-if="submitSuccess">
				<img src="../assets/images/success.png"/>
				<span>点评成功</span>
			</div>
		</transition>
  </div>
</template>

<script>
import Evaluate from '../components/evaluate'
export default {
  components: {
	  Evaluate
	},
	data () {
		return {
			caiPuScore: 1,
			submitSuccess: false,
			suggestion: ''
		}
	},
	methods: {
		pingFen (score) {
			this.caiPuScore = score
		},
		submitEvaluate () {
			alert('你的评分是：' + this.caiPuScore)
			alert('你的建议是：' + this.suggestion)
			this.submitSuccess = true
		}
	}
}
</script>

<style>
.caipin-container{
	background: #fff;
}
.caipin-evaluate-content{
	padding: 0 0.746666rem;
}
.caipin-evaluate-header{
	padding: 1.226666rem 0;
	text-align: center;
}
.caipin-evaluate-header span{
	font-size: 0.32rem;
	display: block;
}
.caipin-evaluate-header span:first-child{
	color: #606060;
}
.caipin-evaluate-header span:last-child{
	color: #debb20;
}
.evaluate-box img{
	width: 0.613333rem;
	height: 0.613333rem;
	margin: 0.533333rem 0.226666rem;
}
textarea{
	height: 2.346666rem;
	margin-bottom: 1.066666rem;
	font-size: 0.32rem;
	border: solid 1px #f7a739;
}
.submit-btn{
	height: 1.146666rem;
	line-height: 1.146666rem;
	text-align: center;
	font-size: 0.4rem;
	color: #fff;
	background: rgba(252, 134, 26, 1);
	border-radius: 0.266666rem;
}
.submit-btn:active{
	background: rgba(252, 134, 26, .9);
}
.caipin-evaluate-success{
	text-align: center;
}
.caipin-evaluate-success img{
	width: 1.573333rem;
	height: 1.573333rem;
	margin-top: 1.333333rem;
	margin-bottom: 0.48rem;
}
.caipin-evaluate-success span{
	font-size: 0.373333rem;
	display: block;
}
</style>