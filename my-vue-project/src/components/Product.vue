<template>
    <div class="product">
         <router-link to='/'>首页</router-link>
         <h1>产品页-待完善</h1>
        <Footerbar></Footerbar>
    </div>
</template>
<script>
import Footerbar from './component-detail/Footer';
export default {
  components: {
    'Footerbar':Footerbar,
  },
    mounted:function (){
console.log('hello',window)
    }
}
</script>

