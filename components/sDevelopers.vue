<template>

  <section class="s-developers  -bg-gradient-orange"
    ref="sDevelopers"
   :class="{'-s-content-adjust': this.contentAdjust}">

    <!-- * TOP * -->

    <div class="section-top">
      <div class="gc -full-width">
        <div class="g-12">
          <c-header-primary header="Talented developers" />
        </div>
      </div>
    </div>

    <!-- * BODY * -->

    <div class="section-body" v-match-heights="{el: [ '.s-developers p.text'],disabled: [680]}">

      <div class="gc">
        <div class="g-5 g-push-1">

          <m-teaser-text header="Distributed teams"
            icon="globe"
            text='Having problems finding resources? Do you need dedicated developers that feels like your own employees?'/>

       <!--    <m-teaser-text header="Distributed teams"
            icon="globe" link="/distributed" linktext="Offshore"
            text='Having problems finding resources? Do you need dedicated developers that feels like your own employees?'/> -->

        </div>
        <div class="g-5">

          <m-teaser-text header="At your location"
            icon="flag"
            text='Experts on site is very common, we can provide the developers you need for your office.'/>

          <!-- <m-teaser-text header="At your location"
            icon="flag" link="/onsite"  linktext="On site"
            text='Experts on site is very common, we can provide the developers you need for your office.'/> -->

        </div>
      </div>
    </div>

    <!-- * BOTTOM * -->

    <div class="section-bottom footer -bg-pink"
      :class="{'-in-view': this.waypointAddClass}"
      v-waypoint="{ active: true, callback: onWaypoint, options: waypointOpt }">

        <div class="gc">
          <div class="g-5 g-push-1 left">
            <nuxt-link to="/contact" class="btn -ghost">Contact</nuxt-link>
          </div>
          <div class="g-5 right">
            <a class="linkedin" href="https://www.linkedin.com/in/kennethillman/" target="_blank"><div class="header-secondary">Kenneth Illman</div><span>COO</span><figure><svg-icon name="sm-linkedin" /></figure></a>
          </div>
        </div>
        <figure class="footer-photo image"><img src="~assets/images/kenneth.png"></figure>

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
      let elH = this.$refs.sDevelopers.clientHeight;
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
     // this.heightCheck();
  }
}
</script>




<style lang="scss">

.s-developers {

    // 768px
    @media screen and (min-width: 768px)  {

      .footer {

        .image {
          transition: all ease-out 1.2s;
          opacity: 0;
        }

        .left,
        .right {
          opacity: 0;
          transition: all ease-out .8s .4s ;
          transform: translateX(-50px);
        }
        .right {
          transform: translateX(50px);
        }

        &.-in-view {
          .left,
          .right {
            opacity: 1;
            transform: translateY(0);
          }
          .image {
            opacity: 1;
          }
        }


      }

    }


}

</style>
