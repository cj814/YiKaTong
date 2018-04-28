<template>
  <div>
    <img class="evaluate-img" 
        :src="(index+1) <= score ? shixin : kongxin" 
        v-for="(item, index) in total" 
        @click="pingFen(index + 1)" 
    />
  </div>
</template>

<script>
export default {
  props: {
      score: {
          type: Number,
          default: 0
      }
  },
  data () {
      return {
          total: [0, 0, 0, 0, 0],
          shixin: require('../assets/images/wujiaoxing.png'),
          kongxin: require('../assets/images/wujiaoxing-space.png')
      }
  },
  methods: {
      pingFen (score) {
        this.$emit('ping-fen', score)
      }
  }
}
</script>

<style>
.evaluate-img{
    width: 0.613333rem;
    height: 0.613333rem;
    margin-right: 0.213333rem;
    position: relative;
    top: 0.133333rem;
}
</style>
