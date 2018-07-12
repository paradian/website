<template>
    <div class="main">
      <Navbar></Navbar>
      <div class="top-image">
        <img src="/static/images/free-try.png" alt="">
      </div>
      <section class="join">
        <div class="try-to-use">
          <div class="introduce">
            <p class="process-title">开通试用后您将获得：</p>
            <p class="weight-text">专业顾问全程服务和讲解 免费体验全系统流程</p>


            <img src="/static/images/apply-1.png" alt="">
            <p class="append-text">更多惊喜等着你,赶快行动吧!</p>
          </div>
          <div class="apply">
            <div class="controller">
              <div class="use" @click="useView()" :class="{'active':Switch==true}">申请试用</div>
              <div class="get" @click="getView()" :class="{'active':Switch==false}">联系我们</div>
            </div>
            <div class="apply-to" v-show="Switch">
            <form >
              <div class="label-cell">
                <label for="name">
                  您的姓名
                </label>
                <div class="label-for" name="name"><input type="text" v-model="name" required></div>
              </div>
              <div class="label-cell">
                <label for="phone">联系电话</label>
                <div class="label-for" name="phone"><input type="phone" v-model="phone"></div>
              </div>
              <div class="label-cell">
                <label for="note">备注信息 </label>
                <div class="label-for"><textarea name="note" id="" cols="30" rows="3" style="vertical-align: top" v-model="remark"></textarea></div>
              </div>
            </form>
            <button id="apply" @click="apply()">申请试用</button>
          </div>
            <div class="get-us" v-show="!Switch">
              <div class="text-container">
              <div class="intro"><p class="intro-text">您对我们的软件有任何疑问，请您直接联系我们的运营人员，
                添加微信：lvbeiyunying；
                或者直接扫描二维码。</p></div>
              <div class="get-more"><p class="intro-text">更多问题咨询
                联系电话：025-83377231 转 售前中心
                联系邮箱：yunying@oocas.com</p></div>
              </div>
              <div class="img-container"><img src="/static/images/QRcode.png" alt="" class="QRcode"></div>
            </div>
          </div>
        </div>
      </section>
        <Footerbar></Footerbar>

    </div>
</template>
<script>
import Footerbar from './component-detail/Footer';
import  Navbar from './component-detail/Navbar'
export default {
  data () {
    return {
      Switch:true,
      name:'',
      phone:'',
      remark:''
    }
  },
  components: {
    'Footerbar':Footerbar,
    'Navbar' :Navbar
  },
  methods: {
    useView(){
      console.log(this.Switch)
      this.Switch=true
      console.log(this.Switch)
    },
    getView(){
      console.log(this.Switch)
      this.Switch=false;
      console.log(this.Switch)
    },
    apply(){
      var data={
        name:this.name,
        phone:this.phone,
        marker:this.remark
      }
      console.log(data);
    }
  },
    mounted:function (){

    }
}
</script>
<style scoped>
  section {
    padding: 60px  10%;
  }
  .try-to-use {
    display: flex;
    height: auto;
  }
  .introduce, .apply {
    display: inline-block;
    height:auto;
    padding:60px;
    padding-bottom: 10px;
  }
  .introduce img {
    width: 50%;
    margin: 5% 20%;
  }
  .introduce {
    width: 28%;
    border: 1px solid #82abfd ;
    background-color:#f3f9ff ;
    text-align: center;
  }
  .process-title {
    font-size: 1.2em;
    color: #999999;
  }
  .weight-text {
    font-size: 20px;
    color: #569afa;
  }
  .append-text {
    color: #999;
  }
  .apply {
    border:1px solid #82abfd ;
    padding:0px;
    text-align: center;
    width: 60%;
  }
  .apply form {
    text-align: left;
  }
  label {
    display: inline-block;
    width: 25%;
    text-align: left;
    padding-right: 1vw;
  }
  .label-for {
    display: inline-block;
    width: 70%;
  }
  .label-cell {
    margin-bottom: 8%;
  }
  input[type=text],input[type=phone] {
    display: inline-block;
    width: 100%;
  }
  textarea {
    width: 100%;
    display: inline-block;
  }
  #apply {
    width: 40%;
    height: auto;
    font-size: 1em;
    background: #569af9;
    border-radius: 30px;
    padding: 3%;
    margin:  auto 0;
    color:#FFF
  }
  .controller {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;

  }
  .get,.use {
    display: inline-block;
    width: 49.5%;
    height: auto;
    margin: 0;

    padding: 20px;
    border: 1px solid #82abfd;
    border-collapse: collapse;
  }
  .active {
    background-color: #82abfd;
    color: #fff;
  }
  .apply-to, .get-us {
    padding: 60px 30px;
  }
  .text-container{
    display: inline-block;
    width: 45%;
  }
  .get-us {
    display: flex;
    justify-content: space-between;
  }
  .get-more {
    color: #666;
  }
  .img-container{
    display: inline-block;
    width: 45%;
  }
  .img-container  img {
    width: 100%;
    height: auto;
  }
  .top-image {
    text-align: center;
    width: 100%;
    height: auto;
    background: linear-gradient(to right ,#0D135f,#0E1833);;
  }
  .top-image img {
    width: 80%;
    margin: 0 auto;
    margin-top: 80px;
  }
  @media (max-width: 414px) {
   .try-to-use {
     flex-wrap: wrap;
   }
   .introduce,.apply{
     width: 90vw;
     padding: 20px;
   }
   #apply {
     width: 30vw;
     padding: 2vw 1vw;
     font-size: 0.8em;
   }
   label {
     width: auto;
   }
  .text-container, .img-container {
     display: block;
    text-align: center;
   }
  .text-container {
    width: 60vw;
    text-align: left;
  }
  .img-container img {
    width: 40vw;
    margin-left: 20vw;
    margin-bottom: 20vw;
  }
   .get-us {
     display: block;
     flex-wrap: wrap;
     padding-bottom: 10px;
     padding-top: 20px;
     position: relative;
   }
.apply {
  padding: 0;
  width: 100%;
}
.label-cell {
  width: 100%;
  padding: 3vw;
}

.join {
  padding-left: 10px;
  padding-right: 10px;
}
.get-more{
  position: absolute;
  bottom: 0%;
}
.use,.get {
  padding-top: 0;
  padding: 10px;
border-collapse: collapse;
  height: auto;
}
 }
</style>

