<template>

    <section class="s-hero -reset" :style="{ 'background-image': 'url(' + bgsrc + ')' }" :class="['-type-' + type]">


     <div class="section-body">

      <template v-if="type === 'cover'">
        <logo />
        <h1 class="headline" v-if="textOne">{{textOne}} <template v-if="textTwo"><br/>{{textTwo}}</template></h1>
        <figure class="arrow-down">
          <svg-icon name="arrow-right-thick" />
        </figure>
      </template>

      <template v-if="type === 'quote'">
        <h3 class="quote"> {{quote}}"Any company can have a team offshore with the right processes in place." <span>{{quotee}}Kenneth Illman - COO</span></h3>
      </template>


     </div>

      <div class="overlay"></div>

    </section>

</template>


<script>

  import Logo from '~/components/Logo.vue'

export default {

  //
  components: {
    Logo,
  },
  props: [
    'textOne',
    'textTwo',
    'bgsrc',
    'type',
    'quote',
    'quotee'
  ],
  data() {
    return {

    };
  },
  methods: {

  },

}
</script>

<style lang="scss" >

.s-hero {
  position: relative;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center center;
  height: 88vh;
  backface-visibility: hidden;
  overflow: hidden;

  &.-type-half {
    min-height: 50vh;
    background-attachment: initial;
  }

  .section-body {
    position: absolute;
    width: 100%;
    text-align: center;
    left: 0;
    bottom: 6vh;
    margin: 0;
    z-index: 2;
  }

  .logo {
    margin: 0 0 3vh;
    width: 180px;
    height: 180px;
  }

  .headline {
    margin: 0 0 6vh;
    font-family: 'Oswald', sans-serif;
    font-size: 30px;
    font-weight: 600;
    line-height: 1;
    padding: 0 22px;
    span {
      display: block;
      white-space: nowrap;
    }
  }

  .arrow-down {
    margin: 0 auto;
    height: 66px;
    width: 66px;
    border-radius: 100%;
    background: linear-gradient(to top,$orange, $pink);

    svg {
      margin: 18px 17px 0;
      width: 33px;
      height: 33px;
      transform: rotate(90deg);
    }

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

    .headline {
      font-size: 42px;
    }

    .arrow-down {
      height: 76px;
      width: 76px;
      svg {
        margin: 22px 19px 0;
        width: 38px;
        height: 38px;
      }
    }

    .logo {
      width: 200px;
      height: 200px;
    }

  }

  // 768px
  @media screen and (min-width: 768px)  {

    .section-body {
      bottom: 7vh;
    }

    .headline {
      margin: 0 0 7vh;
      font-size: 54px;
    }

    .logo {
      width: 210px;
      height: 210px;
    }

    .arrow-down {
      height: 88px;
      width: 88px;
      svg {
        margin: 26px 22px 0;
        width: 44px;
        height: 44px;
      }
    }

  }


  // 1024px
  @media screen and (min-width: 1024px)  {

  }

  // 1280px
  @media screen and (min-width: 1280px)  {

    .logo {
      margin: 0 0 5vh;
      width: 240px;
      height: 240px;
    }

    .section-body {
      bottom: 8vh;
    }

    .headline {
      margin: 0 0 8vh;
      font-size: 66px;
    }

  }

  // 1440px
  @media screen and (min-width: 1440px)  {
    .headline {
      font-size: 78px;
    }
  }

  // 1680px
  @media screen and (min-width: 1680px)  {

    .logo {
      margin: 0 0 6.67778vh;
      width: 260px;
      height: 260px;
    }
    .section-body {
      bottom: 9vh;
    }
    .headline {
      margin: 0 0 9vh;
      font-size: 90px;
    }

    .arrow-down {
      height: 104px;
      width: 104px;
      svg {
        margin: 30px 22px 0;
        width: 52px;
        height: 52px;
      }
    }


  }

  // 1920px
  @media screen and (min-width: 1920px)  {

    min-height: 96vh;

    .logo {
      margin: 0 0 6vh;
      width: 280px;
      height: 280px;
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
      margin: 0 0 8vh;
      width: 320px;
      height: 320px;
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
