<template>
  <div class="hello">

    <div class="icon-box">

         <div  class="head-list" >
          <img slot="icon" src="../../static/img/家长.png">
            <span>家长</span>
         </div>

        <div  class="head-list" >
          <img slot="icon" src="../../static/img/老师.png">
            <span>老师</span>
        </div>

        <div  class="head-list" >
          <img slot="icon" src="../../static/img/消息.png">
            <span>消息</span>
        </div>

    </div>


    </div>
</template>

<script>
export default {
  name: "Tongxun",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .hello {
      width: 100%;
      height: 100%;
      margin: 0px;
      padding: 0px;
  }

  .icon-box {
    width: 100%;
    height: 50px;
  }

  .head-list {
      width: 33.3%;
      height: 50px;
      float: left;
  }

  .head-list img {
    width: 33.3%;
    height: 80px;
    line-height: 80px;
  }
  .head-list span {
   margin-right: 5px;
    height: 30px;
  }
</style>
