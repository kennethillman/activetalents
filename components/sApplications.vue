<template>

  <section class="s-applications  -bg-gradient-blue"
    ref="sApplications"
    :class="{'-s-content-adjust': this.contentAdjust}"
  >


    <!-- * TOP * -->

    <div class="section-top">
      <div class="gc">
        <div class="g-12">
          <c-header-primary header="Applications" />
        </div>
      </div>
    </div>


    <!-- * BODY * -->

    <div class="section-body row" v-match-heights="{el: [ '.s-applications p.text','.s-applications .header-secondary'],disabled: [1024]}">
      <div class="gc -g-vp768-100">

        <div class="g-4 g-t-push-1">
          <div class="m-teaser-text">
            <m-teaser-text header="Projects"
              icon=""
              text="Startup or established, we are always excited over new projects. Let´s begin!"
            />
          </div>
        </div>

        <div class="g-4 g-t-push-1">
          <div class="m-teaser-text">
            <m-teaser-text header="A-Z"
              icon=""
              text="Nordic Tech, Design and UX professionals ensures that full user experience is delivered at great quality."
            />
          </div>
        </div>

        <div class="g-4 g-t-push-1">
          <m-teaser-text
            header="Maintenance"
            icon="" link="#"
            text="MVP time is over, we can help from here. Free time for your developers."
          />
        </div>

      </div>
    </div>


    <!-- * BOTTOM * -->

    <c-footer-quote
      header="We work according to Scrum"
      subheader="Certified Scrum masters & Products owners"
    />


  </section>

</template>


<script>

import cHeaderPrimary from '~/components/cHeaderPrimary.vue'
import cFooterQuote from '~/components/cFooterQuote.vue'
import mTeaserText from '~/components/mTeaserText.vue'

export default {
  components: {
    cHeaderPrimary,
    cFooterQuote,
    mTeaserText
  },
  data() {
    return {
      contentAdjust: false,
      waypointAddClass: false,
      waypointOpt: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1]
      }
    };
  },
  methods: {
    heightCheck() {
      let winH = window.innerHeight;
      let winW = window.innerWidth;
      let elH = this.$refs.sApplications.clientHeight;
      if (winH > elH && winW > 767) {
        this.contentAdjust = true
      }
    },
    onWaypoint ({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN && !this.waypointAddClass) {
        this.waypointAddClass = true
      }
    }

  },
  mounted () {
    //if(this.$store.getters.getMenu === "landscape") {
      //this.heightCheck();
    //}
  }
}
</script>

<style lang="scss" >

.s-applications {



}

</style>
