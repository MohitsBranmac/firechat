<template>
  <div id="app">
    <Initialize />
  </div>
</template>

<script>
import Initialize from './Initialize.vue';

export default {
  name: 'app',
  created () {
    console.log ( this.$store.state.db );
  },
  components: {
    Initialize
  }
}
</script>

<style>

</style>
