<template>

  <h2 class="header-primary"
    :class="{'-in-view': this.waypointAddClass}"
    v-waypoint="{ active: true, callback: onWaypoint, options: waypointOpt }"><div>{{header}}</div><div class="sub" v-if="subheader">{{subheader}}</div></h2>

</template>


<script>

export default {
  props: [
    'header',
    'subheader'
  ],
  data() {
    return {
      waypointAddClass: false,
      waypointOpt: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [1, 1]
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

.header-primary {
  font-size: 32px;
  letter-spacing: .06em;
  margin: 0 0 $m4;
  font-family: 'Oswald', sans-serif;
  text-align: center;
  line-height: 1;
  font-weight: 200;
  text-transform: uppercase;

  div,span {
    font-family: inherit;
  }

  span,
  .sub {
    display: inline-block;
    padding: .4em 1em;
    font-size: .4em;
    font-weight: 200;
    // margin-top: .3em;
    color: $orange;
    background-color: $white;
    line-height: 1;
  }

  // 480px
  @media screen and (min-width: 480px)  {
    font-size: 38px;
    letter-spacing: .11em;
  }

  // 600px
  @media screen and (min-width: 600px)  {
    font-size: 44px;
    margin: 0 0 $m3;
  }

  // 768px
  @media screen and (min-width: 768px)  {
    font-size: 54px;
    letter-spacing: .13em;
    margin: 0 0 $m2;
    transition: all ease-out .8s;
    opacity: 0;
    transform: translateY(50px);
     &.-in-view {
      opacity: 1;
      transform: translateY(0);
    }
  }

  // 1280px
  @media screen and (min-width: 1280px)  {
    font-size: 66px;
    letter-spacing: .15em;
    margin: 0 0 $m1;
  }

  // 1680px
  @media screen and (min-width: 1680px)  {
    font-size: 80px;
    letter-spacing: .15em;
  }

  // 1920px
  @media screen and (min-width: 1920px)  {
    font-size: 88px;
    letter-spacing: .15em;
  }

  // 2600px
  @media screen and (min-width: 2600px)  {
    font-size: 114px;
    letter-spacing: .15em;
  }


}



</style>
