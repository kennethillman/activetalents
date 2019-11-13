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




