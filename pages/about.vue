<template>

    <div class="p-about -bg-blue" ref="pAbout"
        :class="{}">

        <div class="gc">
          <div class="g-12">
            <h1>PAGE ABOUT</h1>
          </div>
        </div>

    </div>

</template>


<script>

// import lorum from '~/components/lorum.vue'


export default {
  components: {
   // lorum
  },
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

  .p-about {
      min-height: 100vh;
  }

</style>
