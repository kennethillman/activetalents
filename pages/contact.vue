<template>

    <div class="p-contact -bg-gradient-blue"
        :class="{}">

    <div class="custom-overlay -bg-pink"></div>

    <section class="s- " ref="pContact"
      :class="{'-s-content-adjust': this.contentAdjust}">

      <div class="section-top">
        <div class="gc">
          <div class="g-12">
            <h2 class="header-primary -in-view">Contact us.</h2>
          </div>
        </div>
      </div>

      <div class="section-body">
        <form
              name="contact"
              action="/thanks"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
        <div class="gc contact-form">
          <div class="g-5 g-push-1 text two">
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label for="name" hidden>Name:</label>
                <input type="text" name="name" placeholder="Your Name" required>
              </div>
              <div>
                <label for="email" hidden>Email:</label>
                <input type="email" name="email" placeholder="Your Email" required/>
              </div>
          </div>
          <div class="g-5 text two">
            <div>
              <label for="message" hidden>Message:</label>
              <textarea  rows="3" name="message" placeholder="Tell us, how can we help you?" required></textarea>
            </div>
          </div>

          <div class="g-12 -text-center three contact-send"><br>
            <button type="submit" value="Send message" class="btn">Send</button></div>
        </div>
        </form>

        <!-- Thanks -->
        <!-- <div class="gc contact-thankyou">
          <div class="g-12">
            <h2 class="header-primary -in-view">Thank you!</h2>
          </div>
        </div> -->

        <!-- Address ++ -->
        <div class="gc contact-details">
          <div class="g-3 g-push-1"><strong>Active Talents</strong>
            Gustav III:s Boulverad 161 <br>
            169 74 Solna <br>
            Stockholm <br>
            Sweden</div>
          <div class="g-4 ">
              <strong>Inquieries</strong>
              <a href="mailto:kenneth@activetalents.se">kenneth@activetalents.se</a><br>
              <a href="mailto:nidhi@activetalents.se">nidhi@activetalents.se</a>
          </div>
          <div class="g-3 ">
            <strong>Social</strong>
            <a href="https://www.linkedin.com/company/activetalents" target="_blank">Linkedin</a><br>
          </div>
          <!-- <div class="g-12 -text-center three"><br><br><nuxt-link to="/" class="btn -ghost">Home</nuxt-link></div> -->
        </div>


      </div>

      <s-footer />

    </section>
    </div>

</template>


<script>

import sFooter from '~/components/sFooter.vue'


export default {
  components: {
   sFooter
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
      let winW = window.innerWidth;
      let elH = this.$refs.pContact.clientHeight;
      if (winH > elH && winW > 767) {
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

  .p-contact {
    min-height: 100vh;

    strong {
      font-size: 18px;
      margin-bottom: 6px;
      line-height: 1;
      display: block;
    }

    .section-body { width: 100%; }

    input,
    select,
    textarea {
      -webkit-appearance: none;
      border: 0;
      border-radius: 0;
      height: 50px;
      line-height: 50px;
      margin-bottom: 20px;
      display: block;
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.23);
      font-size: 18px;
      background: transparent;
      transition: 0.5s ease all;
      &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #fff;
        opacity: 1; /* Firefox */
      }
      &:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #fff;
      }

      &::-ms-input-placeholder { /* Microsoft Edge */
        color: #fff;
      }
    }

    textarea {
      height: auto;
      line-height: 1.4;
    }

    .contact-send {
      margin-bottom: 50px;
    }

    .contact-details {
      margin-bottom: 50px;
      font-size: 14px;
      > div {
        margin-bottom: 30px;
      }
    }

    @media screen and (min-width: 768px)  {
      textarea {
        height: 120px;
      }


      .contact-details > div:nth-child(2) {
        text-align: center;
      }

      .contact-details > div:last-child {
        text-align: right;
      }

    }

  }

</style>
