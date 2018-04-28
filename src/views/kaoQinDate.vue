<template>
  <div id="calendar"></div>
</template>

<script>
import '../assets/js/e-calendar.js'

export default {
  data () {
      return {
          previousSrc: require('../assets/images/left-arrow.png'),
          nextSrc: require('../assets/images/right-arrow.png')
      }
  },
  mounted () {
    $('#calendar').eCalendar({
        textArrows: {
            previous: '<img src="' + this.previousSrc + '">',
            next: '<img src="' + this.nextSrc + '">'
        }
    })
  }
}
</script>

<style>
@import '../assets/css/reset.css';
@import '../assets/css/e-calendar.css';

#app{
    background: #fff
}
</style>
