<template>

  <section class="s-why  -bg-gradient-orange" ref="sWhy">


    <!-- * TOP * -->

    <div class="section-top">
      <div class="gc">
        <div class="g-12">
          <c-header-primary header="Why Active Talents?" />
        </div>
      </div>
    </div>


    <!-- * BODY* -->

    <div class="section-body" v-match-heights="{el: [ '.s-applications p.text','.s-applications .header-secondary'],disabled: [1024]}">

      <div class="gc text-wrapper"
        :class="{'-in-view': this.waypointAddClass}"
        v-waypoint="{ active: true, callback: onWaypoint, options: waypointOpt }"
      >

        <div class="g-8 g-push-2">
          <div class="text">
            <h3 class="header-secondary animate-header">Professinals at your fingertips</h3>
          </div>
        </div>

        <div class="g-5 g-push-1 animate-text">
          <p class="text">Active Talents is the perfect extension to your coming or current outsourcing setup. We don't work as middlemen, we work as close partners with professional processes and vendors.</p>
          <p class="text">We work by three core principles, Quality, Transparency and tight Communication.</p>
          <p class="text">Thanks to our long experience and our values we can help in almost every situation. Do you want to setup your own Offshore development center (ODC) Or do you just want to outsource a smaller IT project?</p>
        </div>

        <div class="g-5 animate-text">
          <p class="text">We have over 10 years of global experience leading and setting up development teams from vendor and client side in countries like India, Serbia and Vietnam.</p>
          <p class="text">For Design and UX we prefer to use our senior Nordic partners.</p>
          <p class="text">With this perfect mix of offshore development and Nordic design kept together with processes for work efficiency and quality assurance we can deliver and maintain world class products to a reasonable price over time.</p>
          <p class="text">We can be there for you all the way.</p>
        </div>

        <div class="g-12">
          <div class="partners">
            <svg-icon class="logo activetalents" name="activetalents-filled" />
          </div>
        </div>

      </div>

    </div>


    <!-- * BOTTOM * -->

    <c-footer-quote header="Quality, Transparency and tight Communication" subheader="Active Talents core principles" />


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
      waypointAddClass: false,
      waypointFooterAddClass: false,
      waypointOpt: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1]
      }
    }
  },
  methods: {
    onWaypoint ({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN && !this.waypointAddClass) {
        this.waypointAddClass = true
      }
    }

  }
}
</script>

<style lang="scss" >

.s-why {


  .section-body {
    width: 100%;
    .header-secondary {
      text-align: left;
      margin: 0 0 24px;
    }
    .text {
      margin: 0 0 16px;
    }
  }



  .partners{
    padding: 20px 0 0;
    text-align: center;
    svg {
      fill: $orange;
      height: 40px;
    }
  }

  .logo {
    width: 60px;
    height: 40px;
    display: inline-block;
    margin: 0 4px;
  }


//  - - - 600px

    @media screen and (min-width: 600px)  {
      .partners{
        svg {
          height: 60px;
        }
      }
    }


//  - - - 768px

  @media screen and (min-width: 768px)  {
    .section-body {
      .header-secondary {
        text-align: center;
        margin-bottom: 1.2em;
      }
    }
    .animate-header {
      opacity: 0;
      transition: all ease-out .8s .4s ;
      transform: translateY(50px);
    }
    .animate-text {
      opacity: 0;
      transition: all ease-out .8s .6s;
      transform: translateY(50px);
    }
    .text-wrapper {
      &.-in-view {
        .animate-header,
        .animate-text{
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }


//  - - - 1130px

  @media screen and (min-width: 1130px)  {
    .partners{
      padding: 46px 0 0;
      text-align: center;
      svg {
        height: 66px;
        width: 66px;
      }
    }
  }


}

</style>
