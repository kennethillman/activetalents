<template>

    <section class="s-applications  -bg-gradient-blue"
      ref="sApplications"
      :class="{'-s-content-adjust': this.contentAdjust}">

      <div class="section-top">
        <div class="gc">
          <div class="g-12">
            <c-header-primary header="Applications" />
          </div>
        </div>
      </div>

      <div class="section-body row" v-match-heights="{el: [ '.s-applications p.text','.s-applications .header-secondary'],disabled: [1024]}">
        <div class="gc -g-vp768-100">
          <div class="g-4 g-t-push-1">
            <div class="m-teaser-text">

              <m-teaser-text header="Project development"
                icon="" link="#" linktext="New"
                text="Start up or a Bigger company, we are always excited over new projects.  Let´s begin!"/>

            </div>
          </div>
          <div class="g-4 g-t-push-1">
            <div class="m-teaser-text">
              <m-teaser-text header="A-Z"
                icon="" link="#" linktext="Custom"
                text="Nordic Tech, Design and UX professionals ensures that full user experience is delivered at great quality. "/>

            </div>
          </div>
          <div class="g-4 g-t-push-1">

              <m-teaser-text header="Maintenance"
                icon="" link="#" linktext="Excisting"
                text="Free time for your in-house developers. MVP time is over  we can help from here. "/>

          </div>
        </div>

      </div>

      <!-- * BOTTOM * -->

      <div class="section-bottom footer -text -bg-darkblue">

        <div class="gc">
          <div class="g-8 footer-text">
            <h4 class="header-secondary">”We work according to Scrum”</h4>
            <span class="text">Certified Scrum masters & Products owners</span>
          </div>
          <div class="g-4 footer-button">
            <a class="btn  -ghost">Our process</a>
          </div>
        </div>

      </div>
    </section>

</template>


<script>

import cHeaderPrimary from '~/components/cHeaderPrimary.vue'
import mTeaserText from '~/components/mTeaserText.vue'

export default {
  components: {
    cHeaderPrimary,
    mTeaserText
  },
  data() {
    return {
        contentAdjust: false
    };
  },
  methods: {
    heightCheck() {
      let winH = window.innerHeight;
      let elH = this.$refs.sApplications.clientHeight;
      if (winH > elH) {
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

.s-applications {

}

</style>
