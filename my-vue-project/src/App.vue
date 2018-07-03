<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Footer from './components/component-detail/Footer'
export default {
  name: "App",
  components: {
    'Footer':Footer
  }
};
</script>

<style>

</style>
