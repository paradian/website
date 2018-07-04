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
            <div><img src="/static/images/support-1.png" alt="">
              <p class="info-title">系统支持</p>
              <p class="info-text">每个城市合伙人拥有独立合伙人账号，实时监测推广效果，结算奖金</p>
            </div>
          </div>
          <div class="cell">
            <div><img src="/static/images/support-2.png" alt="">
              <p class="info-title">产品支持</p>
              <p class="info-text">律呗软件非常创新特点鲜明、持续升级迭代，广受法律人欢迎</p>
            </div>
          </div>
          <div class="cell">
            <div><img src="/static/images/support-3.png" alt="">
              <p class="info-title">物料支持</p>
              <p class="info-text">提供组织活动所需的各项资料，包括PPT、文档、海报、视频等资料</p>
            </div>
          </div>
          <div class="cell">
            <div><img src="/static/images/support-4.png" alt="">
              <p class="info-title">讲师支持</p>
              <p class="info-text">不论线上活动还是线下活动，都提供专业的分享老师，共同完成活动</p>
            </div>
          </div>
          <div class="cell">
            <div><img src="/static/images/support-3.png" alt="">
              <p class="info-title">传播支持</p>
              <p class="info-text">律呗软件及合作机构的公众号，可向近百万粉丝推送信息</p>
            </div>
          </div>
        </div>
      </section>
      <section class="requirement">
        <p class="partner-info"></p>
        <div class="img-container">
          <div class="img-cell"><img src="" alt=""></div>
          <div class="img-cell"><div class="both"></div></div>
          <div class="img-cell"><img src="" alt=""></div>
        </div>
      </section>
      <section class="join">
        <div class="introduce"></div>
        <div class="apply">
          <form >
            <label for="name">
              您的姓名
              <input type="text" name="name" ></label>

            <label for="organization">律所名称<input type="text" name="organization"></label>

            <label for="identy"></label>
            <input type="radio">
            <label for="phone">联系电话 <input type="phone" name="phone"></label>
            <label for="note">备注信息 <textarea name="note" id="" cols="30" rows="10"></textarea></label>

          </form>
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
  .partner-info {
    text-align: center;
  }
.partner-get {
  display: flex;
}

  .get-cell {
    width: 400px;
  }
  .get-cell>div {
    width: 200px;
    text-align: center;
  }

  .partner:nth-of-type(2) {
    background: linear-gradient(to right,#569af9,#7de1fa);
  }
  .partner-support {
    display: flex;
  }
  .cell {
    width: 300px;
  }
  .cell>div {
    width: 200px;
    text-align: center;
  }
  label {
    display: block;
  }

</style>
