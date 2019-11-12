<template>

  <section class="s-clients  -bg-gradient-blue"
    ref="sClients"
   :class="{'-s-content-adjust': this.contentAdjust}">

    <!-- * TOP * -->

    <div class="section-top">
      <div class="gc -full-width">
        <div class="g-12">
          <c-header-primary header="Clients" />
        </div>
      </div>
    </div>

    <!-- * BODY * -->

    <div class="section-body">

      <div class="gc -no-gutter logo-wrapper"
        :class="{'-in-view': this.waypointAddClass}"
        v-waypoint="{ active: true, callback: onWaypoint, options: waypointOpt }">

        <div class="g-4 g-m-4 -vattenfall animate-one"><svg-icon class="logo vattenfall large" :name="'vattenfall'" /></div>
        <div class="g-4 g-m-4 -bmb animate-one"><svg-icon class="logo bmb medium" :name="'bmb'" /></div>
        <div class="g-4 g-m-4 -bnl animate-one"><svg-icon class="logo bnl medium" :name="'bnl'" /></div>
        <div class="g-4 g-m-4 -voy animate-two"><svg-icon class="logo voy small" :name="'voy'" /></div>
        <div class="g-4 g-m-4 -cg animate-two"><svg-icon class="logo cg small" :name="'cg'" /></div>
        <div class="g-4 g-m-4 -indpro animate-two"><svg-icon class="logo indpro small" :name="'indpro'" /></div>

      </div>
    </div>

    <!-- * BOTTOM * -->

    <div class="section-bottom footer ">
      <svg-icon class="logo" name="activetalents-filled" />
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
      let elH = this.$refs.sClients.clientHeight;
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
      //this.heightCheck();
  }
}
</script>

<style lang="scss">

.s-clients {

  div.footer {
    text-align: center;
    padding: 15px 0;
    svg {
      margin: 0;
      fill: $blue;
      height: 40px;
    }
  }

  .section-body {
    text-align: center;
  }

  h4 {
    text-align: center;
  }


  svg {
    width: 100%;
    height: 54px;
    margin: 10px 0;
    padding: 0 6px;
    display: inline-block;
  }

  .-vattenfall svg {

  }

  .-bmb svg {
    width: 76%;
  }

  .-bnl svg {

  }

  .-voy svg {
    width: 60%;
  }

  .-cg svg {
    width: 54%;
  }

  .-indpro svg {
    width: 72%;
  }


  // 480px
  @media screen and (min-width: 480px)  {

    div.footer {
      padding: 20px 0;
      svg {
        height: 45px;
      }
    }

    svg {
      width: 92%;
      margin: 15px 0;
    }

  }


  // 600px
  @media screen and (min-width: 600px)  {

    div.footer {
      padding: 25px 0;
      svg {
        height: 50px;
      }
    }

    svg {
      margin: 25px 0;
    }

    .-bmb svg {
      width: 72%;
      max-width: 166px;
    }

    .-voy svg {
      width: 58%;
      max-width: 130px;
    }

    .-cg svg {
      width: 48%;
    }

    .-indpro svg {
      width: 62%;
      max-width: 134px;
    }

  }


  // 768px
  @media screen and (min-width: 768px)  {

    div.footer {
      padding: 32px 0;
      svg {
        height: 55px;
      }
    }

    svg {
      margin: 35px 0;
    }

   .animate-one {
      opacity: 0;
      transition: all ease-out .8s .4s ;
      transform: translateY(50px);
    }
    .animate-two {
      opacity: 0;
      transition: all ease-out .8s .6s;
      transform: translateY(50px);
    }

    .logo-wrapper {
      &.-in-view {
          .animate-one,
          .animate-two {
            opacity: 1;
            transform: translateY(0);
          }
        }
    }

  }

  // 1130px
  @media screen and (min-width: 1130px)  {

    div.footer {
      padding: 40px 0;
      svg {
        height: 55px;
      }
    }

    svg {
      margin: 45px 0;
    }

    .-bmb svg {
      width: 72%;
      max-width: none;
    }

    .-voy svg {
      width: 58%;
      max-width: 150px;
    }

    .-cg svg {
      width: 54%;
    }

    .-indpro svg {
      width: 62%;
      max-width: none;
    }

  }


}

</style>
