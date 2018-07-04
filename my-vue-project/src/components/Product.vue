<template>
    <div class="main">
      <Navbar></Navbar>
        <Footerbar></Footerbar>

    </div>
</template>
<script>
import Footerbar from './component-detail/Footer';
import  Navbar from './component-detail/Navbar'
export default {
  components: {
    'Footerbar':Footerbar,
    'Navbar' :Navbar
  },
    mounted:function (){
console.log('hello',window)
    }
}
</script>
<style>

</style>

