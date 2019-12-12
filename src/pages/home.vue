<template>
  <div>
    <div>
      <p>Home</p>
      <p @click="$router.push({ name: 'Camera' })">Camera</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>

</style>
