<template>

    <section class="s-quote -reset" :style="{ 'background-image': 'url(' + this.b + ')' }" :class="['-type-' + this.t]">

     <div class="section-body">
      <h3 class="quote"> {{q}}<!-- "Any company can have a team offshore with the right processes in place." --> <span>{{qe}}<!-- Kenneth Illman - COO --></span></h3>
     </div>

     <div class="overlay"></div>

    </section>

</template>


<script>



export default {
  components: {

  },
  props: [
    'type',
    'bgsrc',
    'quote',
    'quotee'
  ],
  data() {
    return {
        t: this.type ? this.type : 'normal',
        b: this.bgsrc ? this.bgsrc : 'hero-temp.jpg',
        q: this.quote ? this.quote : '"Lorum ipsum dollor."',
        qe: this.quotee ? this.quotee : 'John Doe - COO'
    };
  },
  methods: {

  },

}
</script>

<style lang="scss">

.s-quote {
  position: relative;
  min-height: 50vh;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center center;

  &.-type-xxx {
    min-height: 50vh;
    background-attachment: initial;
  }

  .section-body {

  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    opacity: .53;
    background-color: #000;
  }

  // 600x
  @media screen and (min-width: 600px)  {



  }

  // 768px
  @media screen and (min-width: 768px)  {



  }


  // 1024px
  @media screen and (min-width: 1024px)  {

  }

  // 1280px
  @media screen and (min-width: 1280px)  {



  }

  // 1440px
  @media screen and (min-width: 1440px)  {

  }

  // 1680px
  @media screen and (min-width: 1680px)  {




  }

  // 1920px
  @media screen and (min-width: 1920px)  {

    min-height: 96vh;

    .logo {
      margin: 0 0 8vh;
      width: 220px;
      height: 220px;
    }
    .section-body {
      bottom: 8vh;
    }
    .headline {
      margin: 0 0 8vh;
      font-size: 82px;
    }

  }

  // 2600px
  @media screen and (min-width: 2600px)  {

    .logo {
      margin: 0 0 10vh;
      width: 260px;
      height: 260px;
    }

    .headline {
      font-size: 114px;
    }

    .arrow-down {
      height: 124px;
      width: 124px;
      svg {
        margin: 34px 22px 0;
        width: 62px;
        height: 62px;
      }
    }

  }


}

</style>
