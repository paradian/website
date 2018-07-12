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
          carouselImg:["/static/images/carousel-1.png","/static/images/carousel-3.png","/static/images/carousel-4.png"]
        }
      },
      methods: {
        autoPlay () {
          this.mark++;
          if (this.mark === 2) {
            this.mark = 0
          }
        },
        play () {
          setInterval(this.autoPlay, 2000)
        },
      },
      created () {
        this.play()
      }

    }
</script>

<style scoped>
  .slide {
    width: 100%;
    height: auto;
    margin: 0 auto;
    margin-top: 80px;
    overflow: hidden;
    position: relative;
    text-align: center;
    background: linear-gradient(to right ,#0D135f,#0E1833);
  }
  .slideshow {
    width: 80%;
    height: auto;
    display: inline-block;
  }
  img {
    width: auto;
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
