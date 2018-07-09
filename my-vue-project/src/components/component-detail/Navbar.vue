<template>
  <div class="container">
    <div class="nav">
      <div class="logo">
        <img src="@/assets/logo.png">
      </div>
      <div class="item-list">
        <ul class="list">
          <li><router-link to='/'>首页</router-link></li>
          <li class="item"><router-link to='/product'>产品介绍</router-link></li>
          <li> <router-link to='/about'>关于我们</router-link></li>
          <li><router-link to="/partner">城市合伙人</router-link></li>
          <li> <router-link to='/news'>新闻动态</router-link></li>
        </ul>
      </div>
      <div class="button-container">
        <button>预约试用</button>
        <button>平台登陆</button>
      </div>
      <div class="collapse-switch" @click="this.Switch!=Switch">
        <span class="boder"></span>
        <span class="boder"></span>
        <span class="boder"></span>
      </div>
      <div class="collapse" v-show="Switch">
        <ul>
          <li>首页</li>
          <li>产品介绍</li>
          <li>关于我们</li>
          <li>城市合伙人</li>
          <li>新闻动态</li>
          <li>预约试用</li>
          <li>平台登录</li>
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
      data() {
          return {
            Switch:false
          }
      },
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

  .logo,
  .item-list {
    display: inline-block;
    margin-left: 20px;
  }
  .item-list a {
    color: #FFFFFF;
    text-decoration: none;
  }
.collapse-switch span {
  border:1px solid white;
}
.collapse-switch {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0}
  @media (max-width: 768px) {
    .item-list{
      left: 10%;
    }
  }

  @media (max-width: 414px) {
    .item-list {
      display: none;
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


</style>
