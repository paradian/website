<template>
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
</style>
