<template>

  <div class="section-bottom footer -footer-quote">

    <div class="gc ">
      <div class="g-12 footer-text">
        <div class="footer-quote"
        :class="{'-in-view': this.waypointAddClass}"
        v-waypoint="{ active: true, callback: onWaypoint, options: waypointOpt }">

          <h4 class="header-secondary" v-if="header">"{{header}}"</h4>
          <span class="text" v-if="subheader">{{subheader}}</span>

        </div>

        <!--
          <div class="g-4 footer-button">
              <a class="btn  -ghost">Our process</a>
          </div>
        -->

      </div>
    </div>

  </div>


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

.section-bottom {

 // 768px
  @media screen and (min-width: 768px)  {
    .footer-quote {
      transition: all ease-out .8s;
      opacity: 0;
      transform: translateY(50px);
      &.-in-view {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

}

</style>
