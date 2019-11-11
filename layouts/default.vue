<template>
  <div class="act-page-container" :class="{'-menu-open': this.$store.getters.getMenu, '-portrait': this.orientation === 'p', '-landscape': this.orientation === 'l','-menu-navigate': this.$store.getters.getMenuNavigate,}">

    <!-- *** HEADER *** -->
    <s-header/>

    <!-- *** NUXT MAGIC *** -->
    <nuxt/>

    <!-- *** FOOTER *** -->
   <!--  <s-footer/> -->

  </div>
</template>

<script>

  import sHeader from '~/components/sHeader.vue'
  import sFooter from '~/components/sFooter.vue'

  export default {
    components: {
      sHeader,
      sFooter
    },
    head () {
      return {
        title: 'Active Talents',
        bodyAttrs: {
          class: 'at-grid'
        }
      }
    },
    data () {
      return {
        orientation: null
      }
    },
    methods: {
      onResize(event) {
        this.$store.commit("setMenu",false)
        this.deviceOrientation()
      },
      deviceOrientation() {
        let winH = window.innerHeight;
        let winW = window.innerWidth;
        if (winH > winW && this.orientation !== 'p') {
          this.orientation = 'p'
        } else if (winW > winH && this.orientation !== 'l'){
          this.orientation = 'l'
        }
      }
    },
    mounted() {
      window.addEventListener('resize', this.onResize)
      this.deviceOrientation();
    },
  }

</script>

<style lang="scss" scoped>
  .act-page-container {
    min-height: 100vh;
    overflow: hidden;
  }
</style>

