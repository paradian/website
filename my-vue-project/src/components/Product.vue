<template>
    <div class="main">
      <Navbar></Navbar>
      <section class="join">
        <div class="try-to-use">
          <div class="introduce">
            <p class="process-title">开通试用后您将获得：</p>
            <p class="weight-text">专业顾问全程服务和讲解 免费体验全系统流程</p>


            <img src="/static/images/partner-img.png" alt="">
            <p class="append-text">更多惊喜等着你,赶快行动吧!</p>
          </div>
          <div class="apply">
            <form >
              <div class="label-cell">
                <label for="name">
                  您的姓名
                </label>
                <div class="label-for" name="name"><input type="text"></div>
              </div>
              <div class="label-cell">
                <label for="phone">联系电话</label>
                <div class="label-for" name="phone"><input type="phone" ></div>
              </div>
              <div class="label-cell">
                <label for="note">备注信息 </label>
                <div class="label-for"><textarea name="note" id="" cols="30" rows="3" style="vertical-align: top"></textarea></div>
              </div>
            </form>
            <button id="apply">了解更多</button>
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
  components: {
    'Footerbar':Footerbar,
    'Navbar' :Navbar
  },
    mounted:function (){
console.log('hello',window)
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
    font-size: 24px;
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
    padding:60px;
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
  }
  .label-for {
    display: inline-block;
    width: 70%;
  }
  .label-cell {
    margin-bottom: 15%;
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
    width: 30%;
    height: auto;
    font-size: 20px;
    background: #569af9;
    border-radius: 30px;
    padding: 2%;
    margin:  auto 0;
    color:#FFF
  }

</style>

