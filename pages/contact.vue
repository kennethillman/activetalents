<template>

    <div class="p-contact -bg-gradient-blue" ref="pContact"
        :class="{}">

    <div class="custom-overlay -bg-pink"></div>

    <section class="s- ">

      <div class="section-top">
        <div class="gc">
          <div class="g-12">
            <h2 class="header-primary -in-view"> Hi! Don't be a stranger :) <!-- <span>We are happy to answere any question"</span> --></h2>
          </div>
        </div>
      </div>

      <div class="section-body">
        <div class="gc">
          <div class="g-5 g-push-1 text two">


            <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <p>
                <label>Your Name: <input type="text" name="name" /></label>
              </p>
              <p>
                <label>Your Email: <input type="email" name="email" /></label>
              </p>

              <p>
                <label>Message: <textarea name="message"></textarea></label>
              </p>
              <p>
                <button class="btn" type="submit">Send</button>
              </p>
            </form>


          </div>
          <div class="g-5 text two">
            Netlify contactform comming soon
          </div>
          <div class="g-12 -text-center three"><br><br><nuxt-link to="/" class="btn ">Home</nuxt-link></div>
        </div>
      </div>

    </section>
    </div>

</template>


<script>

// import lorum from '~/components/lorum.vue'


export default {
  components: {
   // lorum
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

  .p-contact {
      min-height: 100vh;
  }

</style>
