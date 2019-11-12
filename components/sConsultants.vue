<template>

  <!--
    -s-content-adjust
  -->

  <section class="s-consultants  -bg-gradient-pink"
        ref="sConsultans"
        :class="{'-s-content-adjust': this.contentAdjust}">

    <div class="section-top">
      <div class="gc">
        <div class="g-12">
          <c-header-primary header="Consultant services" />
        </div>
      </div>
    </div>


    <div class="section-body row" v-match-heights="{el: [ '.s-consultants p.text'],disabled: [680]}">
      <div class="gc -m-four">

        <div class="g-5 g-push-1">
          <m-teaser-text header="Talent Aquisition"
            icon="avatar-girl"
            text="With experience from a wide range of small to big global companies. We can help you find the Talents you need."/>
        </div>
        <div class="g-5">
          <m-teaser-text header="UI & Design systems"
            icon="screens"
            text="Specialized in frontend development and design systems at scale with the end users in focus.  "/>
        </div>
        <div class="g-5 g-push-1">
          <m-teaser-text header="PO or SCM"
            icon="avatar-man"
            text="Certified by Scrum alliance we can support teams as Scrum Masters and take care of full products as Product owners"/>
        </div>
        <div class="g-5">
          <m-teaser-text header="Outsourcing"
            icon="globe"
            text="Outsourcing is one of our expert areas. Process overview, improving team work effincey or client communication as bridge managers."/>
        </div>

      </div>
    </div>

    <!-- * BOTTOM * -->

    <div class="section-bottom footer -bg-purple"
      :class="{'-in-view': this.waypointAddClass}"
      v-waypoint="{ active: true, callback: onWaypoint, options: waypointOpt }">

      <div class="gc">
        <div class="g-5 g-pull-2 left">
          <a class="linkedin" href="https://www.linkedin.com/in/nidhisoni/" target="_blank"><div class="header-secondary">Nidhi Illman</div><span>CEO</span><figure><svg-icon name="sm-linkedin" /></figure></a>
        </div>
        <div class="g-4 right">
          <nuxt-link to="/contact" class="btn -ghost">Contact</nuxt-link>
        </div>
        <figure class="footer-photo image"><img src="~assets/images/nidhi.png"></figure>
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
      let elH = this.$refs.sConsultans.clientHeight;
      if (winH > elH) {
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

.s-consultants {

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
