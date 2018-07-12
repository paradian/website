<template>
    <div class="main">
      <Navbar></Navbar>
      <div class="top-image">
        <img src="/static/images/about-us.png" alt="">
      </div>
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
  .top-image {
    text-align: center;
    width: 100%;
    height: auto;
    background: linear-gradient(to right ,#0D135f,#0E1833);;
  }
  .top-image img {
    width: auto;
    margin: 0 auto;
    margin-top: 80px;
  }

  @media (max-width: 414px) {
    .top-image {
      text-align: center;
      width: 100vw;
      height: auto;
      background: linear-gradient(to right ,#0D135f,#0E1833);;
    }
    .top-image img {
      width: 70vw;
      margin: 0 auto;
      margin-top: 80px;
    }
  }
</style>
