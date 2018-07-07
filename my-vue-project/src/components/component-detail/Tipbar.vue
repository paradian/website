<template>
  <div class="try">
    <div class="left">
      <p class="left-text">FREE TRIAL | 免费试用</p>
    </div>
    <div class="right">
      <p class="right-text"><span>找不到合适的产品?小律可以帮您</span><button class="click-me">点我呦</button></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Tipbar"
    }
</script>

<style scoped>
  .try {
    height: 105px;
    display: flex;
    background-image: url("/static/images/background-img.png");
    background-size: 100%;
    background-repeat: repeat;
    justify-content: center;
    align-items: center;
    color: #fff;
    align-content: space-between;
  }

  .try .left {
    width: 30%;
    margin: auto 0;
    /*padding-right: 10%;*/
  }

  .try .right button {
    background-color: #0076f8;
    border: none;
    border-radius: 3px;
    font-size: 20px;
    margin-left: 10px;
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
  }
  .click-me {
    padding: 10px 20px;
  }
  @media (max-width: 414px) {
    .try {
      flex-wrap: wrap;
      background-size: inherit;
      height: 150px;
    }
   .try .left {
      width: 50vw;
     padding-top: 20px;
    }
   .try .right button {
     width: 30vw;
     font-size: 0.8rem;
     background-color: #48d2ff;
     display: block;
     margin: 0 auto;
   }
   .right {
     display: inline-block;
     padding-bottom: 20px;
   }
   .try p {
     margin: 0;
   }
   .try .right p>span{
     display: block;
     padding-bottom: 20px;
   }
  }

</style>
