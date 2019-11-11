<template>

  <div class="p-distributed -bg-gradient-orange">

        <div class="custom-overlay -bg-pink"></div>


    <section class="s- " ref="pPage" :class="{'-p-content-adjust': this.contentAdjust}">

      <div class="section-top">
        <div class="gc">
          <div class="g-12">
            <c-header-primary header="Distributed teams" subheader="Offshore" />
          </div>
        </div>
      </div>

      <div class="section-body">
        <div class="gc">

          <div class="row">
            <div class="g-5 g-push-1 text-bread ani-two">
              <p>To have a team in a different location may feel to complicated to manage for many but we like to keep it simple. With our long experience and expert partners we have the right processe and knowledge to setup teams so that any company can have a team offshore.</p>

              <p>Our price model is simple, a fixed monthly cost for the team with a short termination period. We believe long term and long-lasting collabortaions. </p>
            </div>
            <div class="g-5 text-bread ani-two">
              <p>Hand picked ”Talents” can be ready in 6-8 weeks to extend your development team at your location. <!-- Depending on your in-house knowledge and needs we provide custom team setups. Swedish tech leads / Products owners or your own, Developers /--> Team leads on-site or offshore the options are many. Everything depends on your needs. </p><p>We will also provide a suggested process to help the teams feel as one, team work and communication is key.  We will also go threw the major culture differences on both sides to avoid possible misunderstandings.</p>

            </div>
          </div>

          <div class="row">
          <!--   <div class="g-5 g-push-1 text-faq ani-three">
              <p><b>What about the time difference?</b><br>As our Offshore Developer Centers are located in Asia the time difference is 3,5h - 6,5h depending on location and daylight savings. Over time we learnt to use this to our benefit. First boost the production then maximize the communication and collaboration when the teams are online together. With the right process this can be very effective, more production time, less meetings. </p>
            </div> -->

            <div class="g-12 -text-center ani-three contact"><!-- Let's make this haoppend for your comapny!<br><br> --><nuxt-link to="/contact" class="btn ">Contact us</nuxt-link></div>
          </div>


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

      <s-footer />


    </section>

    <!-- <s-quote quote='"Any company can have a team offshore with the right processes in place."' quotee="Kenneth Illman - COO - Active talents" /> -->

  </div>

</template>


<script>

import sQuote from '~/components/sQuote.vue'
import sFooter from '~/components/sFooter.vue'
import cHeaderPrimary from '~/components/cHeaderPrimary.vue'
import mTeaserText from '~/components/mTeaserText.vue'

export default {
  components: {
    sQuote,
    sFooter,
    cHeaderPrimary,
    mTeaserText
  },
  transition: 'custom',
  data() {
    return {
      contentAdjust: false
    };
  },
  methods: {
    heightCheck() {
      let winH = window.innerHeight;
      let elH = this.$refs.pPage.clientHeight;
      if (winH > elH) {
        this.contentAdjust = true
      }
    }
  },
  mounted () {
      this.heightCheck();
  }
}
</script>

<style lang="scss">

  .p-distributed {
    .contact {
      margin-top: 25px;
    }

    // 600px
    @media screen and (min-width: 600px)  {
      .contact {
        margin-top: 40px;
      }
    }

    // 768px
    @media screen and (min-width: 768px)  {
      .contact {
        margin-top: 60px;
      }
    }

     // 1280px
    @media screen and (min-width: 1280px)  {
      .contact {
        margin-top: 80px;
      }
    }


  }

</style>
