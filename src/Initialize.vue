<template>
  <div>
    <button @click="init">Initialize App Base State</button>
    <button @click="get">Get</button>
  </div>
</template>

<script>
  export default {
    name: "InitializeData",

    methods: {
      init () {
        this.$store.dispatch ('users/seed')
        this.$store.dispatch ('conversations/seed')
      },
      get () {
        //....
      }
    }
  }
</script>

<style>

</style>
