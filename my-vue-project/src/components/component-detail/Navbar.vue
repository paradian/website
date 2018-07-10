<template>
  <div class="container">
    <div class="nav">
      <div class="logo">
        <img src="@/assets/logo.png">
      </div>
      <div class="item-list">
        <ul class="list">
          <li :class="{'background':Index==0}" @click="BackHome()"><router-link to='/'>首页</router-link></li>
          <li :class="{'background':Index==1}" @click="BackProduct()"><router-link to='/product'>产品介绍</router-link></li>
          <li :class="{'background':Index==2}" @click="BackAbout()"> <router-link to='/about'>关于我们</router-link></li>
          <li :class="{'background':Index==3}" @click="BackPartner()"><router-link to="/partner">城市合伙人</router-link></li>
          <li :class="{'background':Index==4}" @click="BackNews()"> <router-link to='/news'>新闻动态</router-link></li>
        </ul>
      </div>
      <div class="button-container">
        <button class="blue-background"><router-link to="/apply">预约试用</router-link></button>
        <button class="white-background"> <router-link to="/login">平台登陆</router-link></button>
      </div>
      <div class="collapse-switch" @click="SwitchHandle()">
        <span class="boder"></span>
        <span class="boder"></span>
        <span class="boder"></span>
      </div>
      <div class="collapse" v-show="Switch">
        <ul>
          <li><router-link to='/'>首页</router-link></li>
          <li><router-link to='/product'>产品介绍</router-link></li>
          <li> <router-link to='/about'>关于我们</router-link></li>
          <li><router-link to="/partner">城市合伙人</router-link></li>
          <li> <router-link to='/news'>新闻动态</router-link></li>
          <li><router-link to='/apply'>预约试用</router-link></li>
          <li><router-link to='/product'>平台登录</router-link></li>

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
            Switch:false,
            Index:0

          }
      },
      components: {
          'Carousel':Carousel
      },
      methods:{
        SwitchHandle() {
this.Switch=!this.Switch;
        },
        BackHome(){
         this.Index=0

        },
        BackProduct() {

          this.Index=1;

        },
        BackAbout() {

          this.Index=2;
        },
        BackPartner() {

          this.Index=3;
        },
        BackNews() {

          this.Index=4;
        }

      },
      mounted () {

      }
    }
</script>

<style scoped>
  .container {
    width: 100%;
    background: linear-gradient(to right ,#0D135f,#0E1833);
  }
 .nav .item-list>ul .background a {
  color:#569af9;
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
    top: 20px;
    width: 40px;
    height: 40px;
  }
  .item-list {
    position: relative;
    left: 20%;
    top: 5px;
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
  .logo,
  .item-list {
    display: inline-block;
    margin-left: 20px;
  }
   a {
    color: #FFFFFF;
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
      border:1px solid white;
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
    .nav .item-list .list>li {
      padding: 4px;
    }
    .logo img {
      top:15px;
      left:20%;
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
