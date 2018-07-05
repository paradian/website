<template>
  <div class="container">
    <div class="nav">
      <div class="logo">
        <img src="@/assets/logo.png">
      </div>
      <div class="item-list">
        <ul class="list">
          <li>
            <router-link to='/'>首页</router-link>
          </li>
          <li class="item"><router-link to='/product'>产品</router-link></li>
          <li> <router-link to='/'>新闻</router-link></li>
          <li> <router-link to='/about'>关于我们</router-link></li>
          <li><button class="ask-use">申请使用</button></li>
        </ul>
      </div>
    </div>
      <Carousel></Carousel>
  </div>


</template>

<script>
  import Carousel from '../component-detail/Carousel'
    export default {
        name: "Navbar",
      components: {
          'Carousel':Carousel
      }
    }
</script>

<style scoped>
  .container {
    width: 100%;
    background: linear-gradient(to right ,#0D135f,#0E1833);
  }

  .nav {
    width: 100vw;
    height: 80px;
    position: fixed;
    top: 0px;
    background: linear-gradient(to right ,#0D135f,#0E1833);
    z-index: 10;
    margin-left: 0px;
  }
  .logo img {
    position: relative;
    left: 100%;
    top: 10px;
    width: 40px;
    height: 40px;
  }
  .item-list {
    position: relative;
    left: 35%;
  }
  .nav .item-list ul {
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
  }
  .nav .item-list>ul>li {
    list-style: none;
    display: inline;
    align-content: space-between;
    padding: 10px;
    color: #FFFFFF;
  }
  .ask-use {
    width: 120px;
    height: 44px;
    background: rgba(86, 154, 249, 1);
    border: none;
    border-radius: 5px;
    position: relative;
    top: -15%;
    box-shadow: none;
    color: #FFFFFF;
  }
  .logo,
  .item-list {
    display: inline-block;
    margin-left: 20px;
  }
  .item-list a {
    color: #FFFFFF;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .item-list{
      left: 10%;
    }
  }

  @media (max-width: 414px) {
    .ask-use {
      width: 75px;
      height: 32px;
    }
    .item-list {
      left: 5%;
    }
    .list {
      margin: 0px;
      padding-left: 0px;
    }
    .nav .item-list .list>li {
      padding: 4px;
    }
    .logo img {
      top:15px;
      left:20%;
    }
  }

  /*iphone678*/
  @media (max-width: 375px) {
.logo,.item-list {
  margin-left: 0px;
  display: inline-block;
}
    .ask-use {
      width: 75px;
      height: 32px;
    }
    .item-list {
      left: 5%;
    }
    .list {
      margin: 0px;
      padding-left: 0px;
    }
    .nav .item-list .list>li {
      padding: 4px;
    }
    .logo img {
      top:15px;
      left:20%;
    }
  }

  @media (max-width: 320px) {
    .logo img {
      width: 27px;
      height: 27px;
      display: none;
    }
    .item-list {
      left: 5%;
    }
    .item-list .list li:last-child {
      padding: 3px;
    }
  }
</style>
