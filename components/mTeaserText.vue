<template>

    <div class="m-teaser-text"
      :class="{'-in-view': this.waypointAddClass}"
      v-waypoint="{ active: true, callback: onWaypoint, options: waypointOpt }">
      <h3 class="header-secondary">{{header}}</h3>
      <p class="text">{{text}}</p>
      <div class="btn-wrapper" v-if="linktext">
        <nuxt-link v-if="link" :to="link" class="btn -color-orange">{{linktext}}</nuxt-link>
      </div>
      <figure class="-round" v-if="icon">
        <svg-icon :name="icon" />
      </figure>
    </div>

</template>


<script>

export default {
  props: [
    'header',
    'text',
    'link',
    'linktext',
    'icon'
  ],
  data() {
    return {
      waypointAddClass: false,
      waypointOpt: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1]
      }
    };
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

<style lang="scss">

  .m-teaser-text {



    // 768px
    @media screen and (min-width: 768px)  {

      figure {
        transition: all ease-out 1.6s .2s;
        opacity: 0;
        transform: scale(.2);
      }

      .header-secondary {
        opacity: 0;
        transition: all ease-out .8s .4s ;
        transform: translateY(50px);
      }
      .text {
        opacity: 0;
        transition: all ease-out .8s .6s;
        transform: translateY(50px);
      }
      .btn-wrapper {
        opacity: 0;
        transition: all ease-out .8s .8s;
        transform: translateY(50px);
      }

      &.-in-view {
        .header-secondary,
        .text,
        .btn-wrapper {
          opacity: 1;
          transform: translateY(0);
        }
        figure {
          opacity: 1;
          transform: scale(1);
        }
      }

    }

  }



</style>
