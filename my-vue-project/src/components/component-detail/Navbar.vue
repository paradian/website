<template>
  <div class="container">
    <div class="nav">
      <div class="logo">
        <img src="@/assets/logo.png">
      </div>
      <div class="item-list">
        <ul class="list">
          <li :class="{'background':RoutePath=='/home'}">
            <router-link to='/home'>首页</router-link>
          </li>
          <li :class="{'background':RoutePath=='/product'}">
            <router-link to='/product'>产品介绍</router-link>
          </li>
          <li :class="{'background':RoutePath=='/partner'}">
            <router-link to="/partner">城市合伙人</router-link>
          </li>
          <li :class="{'background':RoutePath=='/news'}">
            <router-link to='/news'>新闻中心</router-link>
          </li>
          <li :class="{'background':RoutePath=='/about'}">
            <router-link to='/about'>关于我们</router-link>
          </li>
        </ul>
      </div>
      <div class="button-container">
        <button class="blue-background">
          <router-link to="/apply">预约试用</router-link>
        </button>
        <!-- <button class="white-background"> <a href="http://www.farbun.com/timeline.html">平台登陆</a></button> -->
        <button class="white-background">
          <a href="/pcapp" target="_blank">平台登陆</a>
        </button>
      </div>
      <div class="collapse-switch" @click="SwitchHandle()">
        <span class="boder"></span>
        <span class="boder"></span>
        <span class="boder"></span>
      </div>
      <div class="collapse" v-show="Switch">
        <ul>
          <li>
            <router-link to='/'>首页</router-link>
          </li>
          <li>
            <router-link to='/product'>产品介绍</router-link>
          </li>
          <li>
            <router-link to='/about'>关于我们</router-link>
          </li>
          <li>
            <router-link to="/partner">城市合伙人</router-link>
          </li>
          <li>
            <router-link to='/news'>新闻动态</router-link>
          </li>
          <li>
            <router-link to='/apply'>预约试用</router-link>
          </li>
          <li>
            <a href="http://www.farbun.com/timeline.html">平台登录</a>
          </li>

        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Navbar',
    data () {
      return {
        Switch: false,
        RoutePath: ''
      }
    },
    methods: {
      SwitchHandle () {
        this.Switch = !this.Switch
      }
    },
    created () {
      console.log(this.$route.fullPath)
      this.RoutePath = this.$route.fullPath
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    background: linear-gradient(to right, #0d135f, #0e1833);
  }
  .nav .item-list > ul .background  {
    color: #FFF;
    background-color: #569af9;
  }
  .nav .item-list > ul li:hover {
    color: #FFF;
    background-color: #569af9;
  }
  .nav {
    width: 100vw;
    height: 80px;
    position: fixed;
    top: 0px;
    background: linear-gradient(to right, #0d135f, #0e1833);
    z-index: 10;
    margin-left: 0px;
  }
  .logo img {
    position: relative;
    left: 100%;
    top: 20px;
    width: 40px;
    height: 40px;
  }
  .item-list {
    position: relative;
    left: 20%;
    top: 5px;
    display: inline-block;
  }

  .nav .item-list ul {
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    margin: 0;
  }
  .nav .item-list > ul > li {
    list-style: none;
    display: inline-block;
    align-content: space-between;
    padding: 10px;
    margin: 5px;
    color: #fff;
    border-radius: 5px;
  }
  .button-container {
    display: inline-block;
    position: absolute;
    right: 8%;
    top: 30%;
  }
  .button-container button {
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
  }
  .logo {
    display: inline-block;
  }
  a {
    color: #ffffff;
    text-decoration: none;
  }
  .blue-background {
    background-color: #569af9;
  }
  .white-background {
    background-color: #fff;
  }
  .white-background a {
    color: #569af9;
  }

  @media (max-width: 414px) {
    .collapse-switch span {
      width: 30px;
      border: 1px solid white;
      margin-bottom: 5px;
    }

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
    .nav .item-list .list > li {
      padding: 4px;
    }
    .logo img {
      top: 15px;
      left: 20%;
    }
    .button-container {
      display: none;
    }
    .boder {
      display: block;
    }
    .collapse-switch {
      position: absolute;
      width: 40px;
      right: 10px;
      top: 30px;
    }
    .collapse ul li {
      list-style: none;
    }
  }
</style>
