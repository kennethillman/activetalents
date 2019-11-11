<template>

  <div class="p-onsite -bg-gradient-orange" ref="pOnsite"
        :class="{}">

        <div class="custom-overlay -bg-pink"></div>

    <section class="s- ">

      <div class="section-top">
        <div class="gc">
          <div class="g-12">
            <h2 class="header-primary -in-view"> ONSITE <!-- <span>Offshore</span> --></h2>
          </div>
        </div>
      </div>

      <div class="section-body">
        <div class="gc">
          <div class="g-5 g-push-1 text two">
            The dedicated software developers, like your own employees, become a part of your development team during the project either on site or remote from our office. <br><br>Our most popular solution is a team on site. It means you get a senior developer at your location who manages the rest of the team remotely. We provide high quality software solutions, including a tester into your team or independent testing that will help your business enhance quality.
          </div>
          <div class="g-5 text two">
            The dedicated software developers, like your own employees, become a part of your development team during the project either on site or remote from our office. Our most popular solution is a team on site. It means you get a senior developer at your <br><br>location who manages the rest of the team remotely. We provide high quality software solutions, including a tester into your team or independent testing that will help your business enhance quality.
          </div>
          <div class="g-12 -text-center three"><br><br><nuxt-link to="/distributed" class="btn ">Offsore</nuxt-link></div>
        </div>
      </div>

      <!-- <div class="section-bottom footer -text -bg-pink">
        <div class="gc">
          <div class="g-8 footer-text">
            <h4 class="header-secondary" style="height: 34px;">”We work according to Scrum”</h4>
            <span class="text">Certified Scrum masters &amp; Products owners</span>
          </div>
          <div class="g-4 footer-button">
            <a class="btn  -ghost">Our process</a>
          </div>
        </div>
      </div> -->

    </section>

  </div>

</template>


<script>

import cHeaderPrimary from '~/components/cHeaderPrimary.vue'
import mTeaserText from '~/components/mTeaserText.vue'

export default {
  components: {
    cHeaderPrimary,
    mTeaserText
  },
  transition: 'custom',
  data() {
    return {
      //lorum: false
    };
  },
  methods: {
    lorum() {

    }
  },
  mounted () {
      //this.lorum();
  }
}
</script>

<style lang="scss">


</style>
