<template>

  <div class="p-thanks -bg-gradient-blue"
        :class="{}">

        <div class="custom-overlay -bg-pink"></div>

    <section class="s- cont" ref="pOnsite"
      :class="{'-s-content-adjust': this.contentAdjust}">

      <div class="section-top">
        <div class="gc">
          <div class="g-12">
            <h2 class="header-primary -in-view"> Thank you!</h2>
          </div>
        </div>
      </div>

      <div class="section-body">
        <div class="gc -g-center">
          <div class="g-5 -text-center">
            We will get back to you as soon as possible!
          </div>
          <div class="g-12 -text-center three"><br><br><br><nuxt-link to="/" class="btn ">Home</nuxt-link></div>
        </div>
      </div>

      <s-footer />

    </section>

  </div>

</template>


<script>

import cHeaderPrimary from '~/components/cHeaderPrimary.vue'
import mTeaserText from '~/components/mTeaserText.vue'
import sFooter from '~/components/sFooter.vue'

export default {
  components: {
    sFooter,
    cHeaderPrimary,
    mTeaserText
  },
  transition: 'custom',
  data() {
    return {
      contentAdjust: false
    };
  },
  methods: {
    heightCheck() {
      let winH = window.innerHeight;
      let winW = window.innerWidth;
      let elH = this.$refs.pOnsite.clientHeight;
      if (winH > elH && winW > 767) {
        this.contentAdjust = true
      }
    }
  },
  mounted () {
       this.heightCheck();
  }
}
</script>

<style lang="scss">

  .p-thanks {
    .section-body{
      width: 100%;
    }
  }

</style>
