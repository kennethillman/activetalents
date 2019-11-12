<template>

    <div class="section-bottom global-footer footer">
      <svg-icon class="logo" name="activetalents-filled" />
    </div>

</template>


<script>

export default {
  components: {
  },
  data() {
    return {

    };
  },
  methods: {

  }
}
</script>

<style lang="scss">

.global-footer {

  text-align: center;
  padding: 15px 0;

  svg {
    margin: 0;
    fill: $orange;
    height: 40px;
  }

  .-bg-gradient-blue & {
    svg {
      fill: $blue;
    }
  }

  .-bg-gradient-orange & {
    svg {
      fill: $orange;
    }
  }

  .-bg-gradient-pink & {
    svg {
      fill: $pink;
    }
  }





  // 480px
  @media screen and (min-width: 480px)  {
    padding: 20px 0;
    svg {
      height: 45px;
    }
  }

  // 600px
  @media screen and (min-width: 600px)  {
    padding: 25px 0;
    svg {
      height: 50px;
    }
  }

  // 768px
  @media screen and (min-width: 768px)  {
    padding: 32px 0;
    svg {
      height: 55px;
    }
  }

  // 1130px
  @media screen and (min-width: 1130px)  {

    padding: 40px 0;
    svg {
      height: 55px;
    }

  }

}

</style>
