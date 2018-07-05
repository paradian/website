<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Footer from './components/component-detail/Footer'
  import Carousel from './components/component-detail/Carousel'
export default {
  name: "App",
  components: {
    'Footer':Footer,
    'Carousel':Carousel
  }
};
</script>

<style>
body {
  margin: 0;
}
  button:hover {
    cursor: pointer;
  }
</style>
