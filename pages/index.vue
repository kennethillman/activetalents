<template>
  <div>

    <div class="custom-overlay -bg-pink"></div>




    <view-startpage/>



  </div>
</template>

<script>

import viewStartpage from '~/components/viewStartpage.vue'

export default {
  transition: 'custom',
  components: {
    viewStartpage
  },
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {
    this.$store.commit('setMenu',false);
  }
}
</script>

<style lang="scss">




</style>





   <!--
    <svg-icon name="activetalents-line" />

    <div class="height-test" v-match-heights="{el: [ 'h1'],disabled: [680]}">
      <h1>Row one <br> Row 2 <br> Row3 </h1>
      <h1>Row one <br> Row 2 </h1>
      <h1>Row one </h1>
    </div>
 -->


<!--       <section class="-bg-blue">
        <h1>current mq: {{$mq}} </h1>
        <div v-if="$device.isDesktop">
          Desktop
        </div>
        <div v-else-if="$device.isTablet">
          Tablet
        </div>
        <div v-else>
          Mobile
        </div>
    </section> -->
