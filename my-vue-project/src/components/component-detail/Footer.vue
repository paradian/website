<template>
  <div class="foot">
    <div class="container">
      <div class="slice">
        <p class="information">电话：025-888888</p>
        <p class="information">邮箱：hello world@gmail.com</p>
        <p class="information">地址：南京市雨花台雨花客厅</p>
      </div>
      <div class="slice"><p class="information">新闻速报</p>
        <p class="information">最新资讯</p>
        <p class="information">使用说明</p></div>
      <div class="slice">
        <img src="/static/images/QRcode.png" alt="">
        <p>扫一扫二维码关注</p>
      </div>
    </div>
    <div class="brand">
      <p>版权所有 © 2017-2018 南京法奔信息科技有限公司 苏icp备88888888号</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Footer",

    }
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: space-around;
align-items: center;
  background-color: #333438;
  color: #fff;
  font-size: 20px;
}
  .slice {
    text-align: center;
    width: 400px;
  }
  .slice img{
    display: inline-block;
    width: 130px;
    height: 130px;
  }
  .slice .information {
    padding-left: 20%;
    text-align: left;
  }
  .slice .information {
    margin-bottom: 50px ;
  }
  .brand {
    margin: 0px;
    background-color: #2e2f34;
  }
  .brand p{
    text-align: center;
    margin: 0px;
    padding: 30px;
    color: #fff;
    font-size: 18px;
  }

@media (max-width: 414px) {
  .container {
    flex-wrap: wrap;
  }
  .slice p {
   margin-bottom: 0px;
  }
}
@media (max-width: 414px) {
  img {
    width: 50px;
    height: 50px;
  }
.slice {
  text-align: left;
  font-size: 1rem;
}
.slice .information {
  margin-bottom: 10px;
}
.slice:last-child {
  text-align: center;
}
}

</style>
