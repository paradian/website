<template>
  <div class="try">
    <div class="left">
      <p class="left-text">FREE TRIAL | 免费试用</p>
    </div>
    <div class="right">
      <p class="right-text">找不到合适的产品?小律可以帮您<button class="click-me">点我呦</button></p>
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
    background-image: url("~/assets/background-img.png") ;
    background-size: 100%;
    background-repeat: repeat;
    justify-content: center;
    align-items: center;
    color: #fff;
    align-content: space-between;
  }

  .try .left {
    margin: auto 0;
    padding-right: 10%;
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

</style>
