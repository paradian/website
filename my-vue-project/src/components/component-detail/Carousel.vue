<template>
  <div id="topBanner" style="padding-top: 5px;" class="slide" >
    <div v-for="(imgUrl, index) in bannerList" v-show="index===mark" :key="index" class="slideshow">
      <a href="#">
        <img :src=imgUrl>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Carousel",
      data () {
        return {
          mark: 0, //比对图片索引的变量
          bannerList:["/static/images/1.png","/static/images/2.png","/static/images/3.png"]
        }
      },
      methods: {
        autoPlay () {
          this.mark++;
          if (this.mark === 3) { //当遍历到最后一张图片置零
            this.mark = 0
          }
        },
        play () {
          setInterval(this.autoPlay, 2500)
        },
        change (i) {
          this.mark = i
        }
      },
      created () {
        this.play()
      }

    }
</script>

<style scoped>
  .slide {
    width: 85%;
    height: auto;
    margin: 0 auto;
    margin-top: 80px;
    overflow: hidden;
    position: relative;
    text-align: center;
  }
  .slideshow {
    width: 80%;
    height: auto;
    display: inline-block;
  }
  img {
    width: 90%;
    height: 300px;
  }

  /*@media (max-width: 768px) {*/
    /*.slide {*/
      /*width: 100%;*/
      /*height: 160px;*/
    /*}*/
    /*.slideshow {*/
      /*width: 100%;*/
    /*}*/
    /*img {*/
      /*width: 300px;*/
      /*height:150px ;*/
    /*}*/
  /*}*/

@media (max-width: 375px){
  .slide {
width: 100%;
    height: 160px;
  }
  .slideshow {
    width: 100%;
  }
  img {
width: 300px;
    height:150px ;
  }
}
</style>
