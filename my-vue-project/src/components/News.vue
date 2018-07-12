<template>
  <div class="main">
<Navbar></Navbar>
    <div class="top-image">
      <img src="/static/images/news-center.png" alt="">
    </div>
    <section class="container">
      <p class="header-title">新闻中心</p>
      <ul class="news-list">
        <li class="news-cell" v-for="(item,index) in testarr" :key="index" @click="enterDetail(item.id)">
          <div class="article-img">
            <img :src=item.image >
          </div>
          <div class="article-detail">
            <p class="title"><span class="article-title">{{item.title}}</span><span class="article-time">{{item.time}}</span></p>
            <!--<p class="content">{{item.content}}</p>-->
          </div>

        </li>
      </ul>

      <PageSlice :page-index="currentPage" :total="count" :page-size="pageSize"
                 @change="pageChange"></PageSlice>
    </section>
    <Tipbar></Tipbar>
    <Footer></Footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import Navbar from  './component-detail/Navbar';
  import Footer from  './component-detail/Footer';
  import  Tipbar from  './component-detail/Tipbar';
  import PageSlice from  './component-detail/PageSlice';
  export default {
    name: "Partner",
    components: {
      'Navbar':Navbar,
      'Footer':Footer,
      'Tipbar':Tipbar,
      'PageSlice':PageSlice
    },
    data (){
      return {
        testarr:[],
        pageSize : 5 , //每页显示20条数据
        currentPage : 1, //当前页码
        count : 0, //总记录数
        newsarr:[
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!this is a test content,we don`t talk any more',image:'./static/images/intro-1.png'},
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!',image:'./static/images/intro-1.png'},
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!',image:'./static/images/intro-1.png'},
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!',image:'./static/images/intro-1.png'},
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!',image:'./static/images/intro-1.png'},
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!',image:'./static/images/intro-1.png'},
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!this is a test content,we don`t talk any more',image:'./static/images/intro-1.png'},
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!',image:'./static/images/intro-1.png'},
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!',image:'./static/images/intro-1.png'},
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!',image:'./static/images/intro-1.png'},
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!',image:'./static/images/intro-1.png'},
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!',image:'./static/images/intro-1.png'},
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!this is a test content,we don`t talk any more',image:'./static/images/intro-1.png'},
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!',image:'./static/images/intro-1.png'},
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!',image:'./static/images/intro-1.png'},
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!',image:'./static/images/intro-1.png'},
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!',image:'./static/images/intro-1.png'},
          {title:'hello',time:'20187.11',content:'you sucker!How dare you do such things!',image:'./static/images/intro-1.png'},

        ],
      }
    },
    methods: {
      enterDetail(index){
        console.log(index);
      },
      //获取数据
      getList (res) {
        //模拟
            //子组件监听到count变化会自动更新DOM
        // let url = `/api/list/?pageSize=${this.pageSize}&currentPage=${this.currentPage}`
        // this.$http.get(url)
        //   .then(({body}) => {
        //     //子组件监听到count变化会自动更新DOM
        //     this.count = body.count
        //     this.items = body.list
        //   })
        axios({
          method:'get',
          url:`https://cnodejs.org/api/v1/topics/?limit=${this.pageSize}&page=${this.currentPage}`,
          data:res,
        })
          .then(function (body) {
            console.log(body);
            this.count = 20;
                this.testarr = body.data.data
          }.bind(this))

      },

      //从page组件传递过来的当前page
      pageChange (page) {
        this.currentPage = page
        this.getList()
      }
    },
    mounted() {
      //请求第一页数据
      this.getList();

    }

  }
</script>

<style scoped>
  section {
    padding: 15%;
    padding-top: 60px;
  }
  .header-title {
    text-align: center;
    font-size: 1.5em;
  }
  .top-image {
    text-align: center;
    width: 100%;
    height: auto;
    background: linear-gradient(to right ,#0D135f,#0E1833);;
  }
  .top-image img {
    width: auto;
    margin: 0 auto;
    margin-top: 80px;
  }
  .news-cell {
    width: 60%;
    display: flex;
    margin-bottom: 30px;
    width: 100%;

  }
  .title {
    font-size: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
  }
  .article-img {
    width: 25%;
    padding-left: 0;
    text-align: center;
  }
  .article-img img {
    width: auto;
    display: inline-block;
   margin: 0 auto;

  }
  .article-detail {
    width:70%;
  }
  @media (max-width: 414px) {
    .top-image {
      text-align: center;
      width: 100vw;
      height: auto;
      background: linear-gradient(to right ,#0D135f,#0E1833);;
    }
    .top-image img {
      width: 70vw;
      margin: 0 auto;
      margin-top: 80px;
    }
  }
</style>
