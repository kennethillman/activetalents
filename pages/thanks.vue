<template>

  <div class="p-onsite -bg-gradient-blue" ref="pOnsite"
        :class="{}">

        <div class="custom-overlay -bg-pink"></div>

    <section class="s- ">

      <div class="section-top">
        <div class="gc">
          <div class="g-12">
            <h2 class="header-primary -in-view"> Thank you for your meassage!</h2>
          </div>
        </div>
      </div>

      <div class="section-body">
        <div class="gc">
          <div class="g-5 g-push-1 text two">
            Lorum
          </div>
          <div class="g-5 text two">
            Lorum
          </div>
          <div class="g-12 -text-center three"><br><br><nuxt-link to="/" class="btn ">Home</nuxt-link></div>
        </div>
      </div>


    </section>

  </div>

</template>


<script>

import cHeaderPrimary from '~/components/cHeaderPrimary.vue'
import mTeaserText from '~/components/mTeaserText.vue'

export default {
  components: {
    cHeaderPrimary,
    mTeaserText
  },
  transition: 'custom',
  data() {
    return {
      //lorum: false
    };
  },
  methods: {
    lorum() {

    }
  },
  mounted () {
      //this.lorum();
  }
}
</script>

<style lang="scss">


</style>
