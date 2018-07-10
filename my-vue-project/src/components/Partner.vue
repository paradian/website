<template>
    <div class="main">
      <Navbar></Navbar>
      <section class="container">

      </section>
      <Tipbar></Tipbar>
      <Footer></Footer>
    </div>
</template>

<script>
  import Navbar from  './component-detail/Navbar';
  import Footer from  './component-detail/Footer';
  import  Tipbar from  './component-detail/Tipbar';
    export default {
        name: "Partner",
      components: {
          'Navbar':Navbar,
        'Footer':Footer,
        'Tipbar':Tipbar
      }
    }
</script>

<style scoped>

</style>
