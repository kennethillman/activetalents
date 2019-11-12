<template>

    <div class="view-startpage" ref="viewStartpage"
        :class="{}">

      <!-- *** HERO *** -->
      <s-hero bgsrc="hero-hands.jpg" textOne="Connects you to the best!"  type="cover" />
      <!-- <s-hero bgsrc="hero-hands.jpg" textOne="Do you need to find talent?" textTwo="Look no further." type="cover" /> -->

      <!-- *** TALENTED DEVELOPERS *** -->
      <s-developers/>

      <!-- *** APPLICATIONS *** -->
       <s-applications/>


      <!-- *** CONSULTANT SERVICES *** -->
       <s-consultants/>

       <!-- *** WHY  *** -->
       <s-why/>

      <!-- *** CLIENTS *** -->
      <s-clients/>

    </div>

</template>


<script>

import sHero from '~/components/sHero.vue'
import sDevelopers from '~/components/sDevelopers.vue'
import sApplications from '~/components/sApplications.vue'
import sWhy from '~/components/sWhy.vue'
import sConsultants from '~/components/sConsultants.vue'
import sClients from '~/components/sClients.vue'

export default {
  components: {
    sHero,
    sDevelopers,
    sApplications,
    sWhy,
    sConsultants,
    sClients
  },
  data() {
    return {
      //lorum: false
    };
  },
  methods: {
    // lorum() {

    // }
  },
  mounted () {
      //this.lorum();
  }
}
</script>

<style lang="scss">

  .view-startpage {

  }

</style>
