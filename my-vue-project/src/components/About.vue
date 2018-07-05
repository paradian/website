<template>
    <div class="main">
<Navbar></Navbar>
      <section class="partner">
        <p class="partner-info">城市合伙人，可以获得什么</p>
      <div class="partner-get">
        <div class="get-cell">
          <div><img src="/static/images/get-1.png" alt="">
            <p class="info-title">现金奖励</p>
            <p class="info-text">向更多人推广律呗软件，城市合伙人获得丰厚现金奖励</p>
          </div>
        </div>
        <div class="get-cell">
          <div><img src="/static/images/get-2.png" alt="">
            <p class="info-title">资源整合</p>
            <p class="info-text">通过律呗交流群，拓展在法律圈人脉和资源，获得更多发展机会</p>

          </div>
        </div>
        <div class="get-cell">
          <div><img src="/static/images/get-3.png" alt="">
            <p class="info-title">拥抱科技</p>
            <p class="info-text">亲身参与法律科技项目与全国法律人切磋，提升专业能力和技术能力
            </p>
          </div>
        </div>
        <div class="get-cell">
          <div><img src="/static/images/get-4.png" alt="">
            <p class="info-title">成为股东</p>
            <p class="info-text">条件和成绩优秀的城市合伙人，优先获得投资律呗软件成为股东的机会
            </p>
          </div>
        </div>
      </div>
      </section>
      <section class="partner">
        <p class="partner-info">城市合伙人，可以获得那些支持</p>
        <div class="partner-support">
          <div class="cell">
            <div><div class="boder"><img src="/static/images/support-1.png" alt=""></div>
              <p class="info-title">系统支持</p>
              <p class="info-text">每个城市合伙人拥有独立合伙人账号，实时监测推广效果，结算奖金</p>
            </div>
          </div>
          <div class="cell">
            <div><div class="boder"><img src="/static/images/support-2.png" alt=""></div>
              <p class="info-title">产品支持</p>
              <p class="info-text">律呗软件非常创新特点鲜明、持续升级迭代，广受法律人欢迎</p>
            </div>
          </div>
          <div class="cell">
            <div><div class="boder"><img src="/static/images/support-3.png" alt=""></div>
              <p class="info-title">物料支持</p>
              <p class="info-text">提供组织活动所需的各项资料，包括PPT、文档、海报、视频等资料</p>
            </div>
          </div>
          <div class="cell">
            <div><div class="boder"><img src="/static/images/support-4.png" alt=""></div>
              <p class="info-title">讲师支持</p>
              <p class="info-text">不论线上活动还是线下活动，都提供专业的分享老师，共同完成活动</p>
            </div>
          </div>
          <div class="cell">
            <div><div class="boder"><img src="/static/images/support-3.png" alt=""></div>
              <p class="info-title">传播支持</p>
              <p class="info-text">律呗软件及合作机构的公众号，可向近百万粉丝推送信息</p>
            </div>
          </div>
        </div>
      </section>
      <section class="requirement">
        <p class="partner-info">城市合伙人，需要什么条件？</p>
        <div class="img-container">
          <div class="img-cell"><img src="" alt=""></div>
          <div class="img-cell"><div class="both"></div></div>
          <div class="img-cell"><img src="" alt=""></div>
        </div>
        <p class="info-text">律师、企业法务、法律自媒体人均可；对互联网技术、效率工具有浓厚兴趣；开放热情，擅于沟通，擅于演讲更佳；在律所、律协、律师人群中有影响力</p>
      </section>
      <section class="join">
        <p class="partner-info">如何成为成为合伙人？</p>
        <div class="to-be-partner">
        <div class="introduce">
            <p class="process-title">期限与流程</p>
          <p class="weight-text">合作期限：一年，到期可续约</p>
          <p class="process-title">申请流程</p>
          <p class="process-text">点击<span class="weight-text">“立即申请”</span>提交报名表</p>
          <p class="process-text">开通专属账号权限，获得支持</p>
          <p class="process-text">添加工作人员微信，实时交流</p>
          <img src="/static/images/partner-img.png" alt="">
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
            <label for="organization">
              律所名称
              </label>
<div class="label-for" name="organization"><input type="text" ></div>
            </div>
            <div class="label-cell">
              <label for="identity">身份</label>
              <div class="label-for" name="identity" style="vertical-align: top" >
                <span><input type="radio" name="identity" value="1">律所主任</span>
              <span><input type="radio" name="identity" value="2">律所合伙人</span>
              <span><input type="radio" name="identity" value="3">执业律师</span>
              <span><input type="radio" name="identity" value="4">助理律师</span>
              <span><input type="radio" name="identity" value="5">其他身份 <input type="text" id="other"></span>
              </div>
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
          <button id="apply">立即申请</button>
        </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
</template>

<script>
  import Navbar from './component-detail/Navbar';
  import Footer from './component-detail/Footer';
    export default {
        name: "About",
      components : {
          'Navbar':Navbar,
        'Footer':Footer
      }
    }
</script>

<style scoped>
  section {
    padding: 60px  10%;
  }
  .partner-info {
    text-align: center;
  }
.partner-get {
  display: flex;
flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  align-content: space-between;
}
  .get-cell {
    width: 22%;
    text-align: center;
    padding: 5px 0;
    height: 200px;
    margin :0 10px;
  }
  .get-cell img {
width: 40px;
    height: 40px;
  }
  .get-cell>div {
    width: 100%;
    height: auto;
    text-align: center;

  }

  .partner:nth-of-type(2) {
    background: linear-gradient(to right,#569af9,#7de1fa);
  }
  .partner-support {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    text-align: center;
  }
  .cell {
    width: 17%;
    text-align: center;
    height: 250px;
    margin: 0 10px;
  }
  .cell>div {
    width: 100%;
    text-align: center;
  }
  .boder {
    width: 50px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 25px;
    padding: 0 auto;
    margin: 0px;
    position: relative;
    left: 30%;
  }
  .cell img {
    width: 30px;
    height: 30px;
    margin: 10px ;
  }
  .partner-info {
    font-size: 30px;
  }
 .info-title {
    font-size: 22px;
  }
.info-text {
  font-size: 16px;
}
.requirement {
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
}
  .img-container {
    display: flex;
    background-color: bisque;
    width: 100%;
    height: 450px;
    padding: 10px auto;
  }

  .img-cell {
    display: inline-block;
    border: solid 1px #000;
    width: 200px;
    height: 400px;
  }
  .to-be-partner {
    display: flex;
  }
  .to-be-partner p {
    margin: 0px;
  }
.introduce, .apply {
  display: inline-block;
  height:500px;
}

.introduce .process-title {
  font-size:24px ;
  color: #666;
  margin-bottom: 30px;
}
.weight-text {
  font-size: 20px;
  color: #569af9;
}
p.weight-text {
  margin-bottom: 60px;
}
.process-text {
  font-size: 20px;
  color: #999;
}
  .introduce img {
    width: 100%;
  }

  .apply {
    border:1px solid #82abfd ;
    padding:60px;
    margin-left: 44px;
    text-align: center;
  }
  .apply form {
    text-align: left;
  }
  #unique span:last-child {
    display: flex;
    display: inline-block;
  }
  #other {
display: inline-block;
    width: auto;
    zoom: 1;
  }
  label:nth-of-type(3)>span {
    margin:5%;
  }
  label:nth-of-type(3)>span:last-child {
    position: relative;
    left: 5%;
  }
   input[type=text],input[type=phone] {
    display: inline-block;
    width: 100%;
  }
  #apply {
    width: 240px;
    height: 60px;
    font-size: 20px;
    background: #569af9;
    border-radius: 30px;
    margin:  auto 0;
    color:#FFF
  }
  label {
    display: inline-block;
    width: 20%;
    text-align: left;
  }
.label-for {
  display: inline-block;
  width: 75%;
}
.label-cell {
  margin-bottom: 8%;
}
  @media (max-width: 414px) {

  }
</style>
