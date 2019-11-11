<template>

  <a :href="link" class="btn" :class="class">{{linktext}}</a>

</template>


<script>

export default {
  props: [
    'link',
    'class',
    'link',
    'linktext'
  ],
  data() {
    return {

    };
  },
  methods: {

  }
}
</script>

<style lang="scss">

.btn {

}

</style>
