<template>
  <div id="Carousel" style="padding:10px 0px;" class="slide" >
    <div v-for="(imgUrl, index) in carouselImg" v-show="index===mark" :key="index" class="slideshow">
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
          mark: 0,
          carouselImg:["/static/images/carousel-1.png","/static/images/carousel-2.png","/static/images/carousel-3.png","/static/images/carousel-4.png"]
        }
      },
      methods: {
        autoPlay () {
          this.mark++;
          if (this.mark === 4) {
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



@media (max-width: 414px){
  .slide {
width: 100%;
    height: 160px;
  }
  .slideshow {
    width: 100%;
  }
  img {
width: 70vw;
    height:150px ;
  }
}
</style>
