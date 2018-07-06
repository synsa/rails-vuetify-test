<template lang='pug'>
  div
    v-app
      router-view
</template>

<script>

export default {
  name: 'Layout',
  data () {
    return {
      fixed: false
    }
  }
}
</script>

<style>
  .head {
    color: black;
  }
</style>

