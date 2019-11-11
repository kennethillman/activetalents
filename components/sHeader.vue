<template>

  <div class="s-header">

    <div class="home" v-on:click="closeMenu">
      <nuxt-link to="/" ><svg-icon class="logo" name="activetalents-filled" /></nuxt-link>
    </div>
    <figure class="home-background"></figure>

   <!--  <div class="menu-toggle" v-on:click="toggleMenu">
      <div class="burger" >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div> -->

    <div class="menu">
      <ul v-on:click="navigateMenu">
        <li><span class="header">Developers</span></li>
        <li><nuxt-link  to="/distributed" >Offshore<!-- , Distributed --></nuxt-link></li>
        <li><nuxt-link  to="/onsite" >Onsite<!-- , At you location --></nuxt-link></li>
        <!-- <li><nuxt-link  to="/" >How does it work?</nuxt-link></li>
        <li><nuxt-link  to="/" >Our workprocess?</nuxt-link></li> -->
        <!-- <li><span class="header">Applications</span></li> -->
        <!-- <li><nuxt-link  to="/" >New, Project developemnt</nuxt-link></li> -->
        <!-- <li><nuxt-link  to="/" >Custom, A-Z</nuxt-link></li> -->
        <!-- <li><nuxt-link  to="/" >Existing, Maintenance</nuxt-link></li> -->
        <!-- <li><span class="header">Consultant services</span></li> -->
        <!-- <li><nuxt-link  to="/" >Talent aquisition</nuxt-link></li> -->
        <!-- <li><nuxt-link  to="/" >Frontend</nuxt-link></li> -->
        <li><span class="header">Active talents</span></li>
        <li><nuxt-link  to="/" >About</nuxt-link></li>
        <li><nuxt-link  to="/contact" >Contact</nuxt-link></li>
      </ul>
    </div>

    <figure class="menu-background"></figure>

  </div>

</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      isMenuOpen: this.$store.getters.getMenu,
    };
  },
  methods: {
    toggleMenu: function(){
      this.isMenuOpen = !this.isMenuOpen;
      this.$store.commit("setMenu",this.isMenuOpen)
    },
    closeMenu: function(){
      this.$store.commit("setMenu",false)
    },
    navigateMenu: function(){
      this.$store.commit("setMenuNavigate",true)

      setTimeout(() => {
        this.$store.commit("setMenuNavigate",false)
        this.closeMenu();
      }, 425);

    }
  }
}
</script>

<style lang="scss" >

.s-header {
  position: fixed !important;
  padding: 0!important;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  .home {
    margin: 11px 0 0 11px;
    width: 61px;
    position: relative;
    z-index: 4;
    svg {
      width: 50px;
      height: 50px;
      transition: all .225s ease-in-out;
    }
  }

  .home-background {
    margin: 0;
    background-color: $orange;
    height: 200px;
    width: 200px;
    top: -85px;
    left: -114px;
    position: absolute;
    z-index: 2;
    transform: rotate(37.5deg);
    border-radius: 30px;
    transition: all .2s ease-in-out;
  }

  .menu-toggle {
    position: absolute;
    z-index: 5;
    right: 0;
    top: 0;
    box-sizing: content-box;

    .burger {
      position: relative;
      margin: 18px;
      width: 42px;
      text-align: right;
      direction: rtl;
      cursor: pointer;
      z-index: 5;

      span {
        height: 5px;
        display: block;
        margin-bottom: 7px;
        background: $white;
        transition: all .4s ease-out;
        position: relative;
        &:nth-child(1) {
          width: 77%;
        }
        &:nth-child(2) {
          width: 100%;
        }
        &:nth-child(3) {
          width: 58%;
        }
      }

      &:hover {
        span {
          &:nth-child(1) {
            width: 100%;
          }
          &:nth-child(2) {
            width: 100%;
          }
          &:nth-child(3) {
            width: 100%;
          }
        }
      }

    }
  }

  .menu {
    position: absolute;
    visibility: hidden;
    z-index: -1;
    top:0;
    height: 100vh;
    width: 100%;
    overflow: scroll;
    opacity: 0;
    span {
      opacity: 0;
      transition: all .225s ease-in-out;
    }
    a {
      opacity: 0;
      transition: all .225s ease-in-out;
    }
  }

  ul {
    padding: 50px 11px 0 ;
    margin: 0 auto;
    width: 60%;
    text-align: center;

    li {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    .header {
      font-family: 'Oswald', sans-serif;
      text-transform: uppercase;
      color: $purple;
      display: inline-block;;
      margin: 50px 0 0 4px;
      font-size: 14px;
    }

    a {
      display: block;
      padding: 10px 10px;
      line-height: 1;
      white-space: nowrap;
      background: $purple;
      margin-top: 6px;
      text-decoration: none;
      border-radius: 9999px;
    }

  }

 .menu-background {
      margin: 0;
      background-color: $pink;
      height: 200px;
      width: 200px;
      top: -86px;
      right: -114px;
      position: absolute;
      z-index: 3;
      transform: rotate(-37.5deg);
      border-radius: 30px;
      transition: all .225s ease-out;
  }

  .-menu-open &{

    .home {
      svg {
        fill: $purple;
         transition: all .325s ease-in-out;
      }
    }

    .menu-toggle {
      .burger {
        span {
          &:nth-child(1) {
            width: 100%;
            transform: rotate(135deg);
            top: 12px;
          }
          &:nth-child(2) {
            width: 100%;
            opacity: 0;
          }
          &:nth-child(3) {
            width: 100%;
            transform: rotate(-135deg);
            bottom: 12px;
          }
        }
      }
     }

   .menu-background {
      height: 200vw;
      width: 200vw;
      top: -50vw;
      right: -50vw;
      transition: all .425s ease-in-out;
      transform: rotate(-37.5deg);
      border-radius: 100%;
    }

    .menu {
      opacity: 1;
      visibility: visible;
      z-index: 4;
      span {
        opacity: 1;
        transition: all .45s ease-in-out;

      }
      a {
        opacity: 1;
        transition: all .75s ease-in-out;
      }
    }

  }

  .-menu-open.-portrait &{
    .menu-background {
      height: 200vh;
      width: 200vh;
      top: -50vh;
      right: -50vh;
    }
  }

  a {
    display: block;
  }



  // 480px
  @media screen and (min-width: 480px)  {

  }

  // 600px
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



    .home {
      padding: 16px 0 0 16px;
      width: 60px;
      position: relative;
      svg {
        width: 60px;
        height: 60px;
      }
    }

    .home-background {
      height: 300px;
      width: 300px;
      top: -135px;
      left: -172px;
      border-radius: 50px;
    }

    .menu-toggle {
      margin: 14px 14px 0 0;
      .burger {
        width: 52px;
        span {
          height: 7px;
          margin-bottom: 9px
        }
      }

    }

    .menu-background {
      height: 300px;
      width: 300px;
      top: -135px;
      right: -172px;
      border-radius: 50px;
    }


    .-menu-open &{

      .menu-toggle {
        .burger {
          span {
            &:nth-child(1) {
              top: 16px;
            }

            &:nth-child(3) {
              bottom: 16px;
            }
          }
        }
       }

    }


  }

  // 1440px
  @media screen and (min-width: 1440px)  {

  }

  // 1680px
  @media screen and (min-width: 1680px)  {

  }

  // 1920px
  @media screen and (min-width: 1920px)  {

  }

  // 2600px
  @media screen and (min-width: 2600px)  {

  }




}

</style>
