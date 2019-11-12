<template>

    <section class="s-why  -bg-gradient-orange"
      ref="sWhy"
      :class="{'-s-content-adjust': this.contentAdjust}">

      <div class="section-top">
        <div class="gc">
          <div class="g-12">
            <c-header-primary header="Why Active Talents?" />
          </div>
        </div>
      </div>

      <div class="section-body" v-match-heights="{el: [ '.s-applications p.text','.s-applications .header-secondary'],disabled: [1024]}">

        <div class="gc text-wrapper"
          :class="{'-in-view': this.waypointAddClass}"
          v-waypoint="{ active: true, callback: onWaypoint, options: waypointOpt }">

            <div class="g-8 g-push-2">
              <div class="text">
                <h3 class="header-secondary animate-header">Professinals at your fingertips</h3>
              </div>
            </div>

            <div class="g-5 g-push-1 animate-text">
              <p class="text">Active Talents is the perfect extention to your comming or current outsourcing setup. We don't work as middlmen, we work as close partners with professional processes and vendors. </p>
              <p class="text">We live by three core values, Quality, Transparency and tight Communcation. </p>
              <p class="text">Thanks to our long experiance and our values we can help in almost every situation. Do you want to setup your own Offshore development center (ODC) Or do you just want to outsource a smaller IT project? </p>


            </div>

            <div class="g-5 animate-text">

               <p class="text">We have over 10 years of global experiance leading and setting up development teams from vendor and client side in countries like India, Serbia and Vietnam.</p>
              <p class="text">For Design and UX we prefer to use our senior Nordic partners.</p>
              <p class="text">With this perfect mix of offshore development and Nordic design keept togheter with processes for quality and work effiency we can deliver and maintain world class products to a reasonable price.</p>

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
      <div class="section-bottom footer -text -bg-darkblue"></div>

    </section>

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
      let elH = this.$refs.sWhy.clientHeight;
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

.s-why {

    .header-secondary {
      text-align: left;
      margin: 0 0 24px;
    }

    .section-body {
      width: 100%;
    }

    .text {
      margin: 0 0 16px;
    }

    .partners{
      padding: 20px 0 0;
      text-align: center;
      svg {
        fill: $orange;
        height: 60px;
      }
    }

    div.footer {
      padding: 20px 0;
    }

    .logo {
      width: 60px;
      height: 40px;
      display: inline-block;
      margin: 0 4px;
      &.active{
        //width: 31vw;
      }
      &.cc{
        //width: 31vw;
      }
      &.indpro{

       width: 86px
      }
      &.vattenfall{
       width: 200px
      }
    }


    // 600px
    @media screen and (min-width: 600px)  {

      div.footer {
        margin-top: 40px;
        padding: 20px 0;
      }

    }


    // 768px
    @media screen and (min-width: 768px)  {

      .header-secondary {
        text-align: center;
        margin-bottom: 1.2em;
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
          .animate-text {
            opacity: 1;
            transform: translateY(0);
          }
        }
      }


    }


   // 1130px
    @media screen and (min-width: 1130px)  {

      div.footer {
        margin-top: 46px;
        padding: 23px 0;
      }

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
