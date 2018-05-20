<template>
  <div class="new-head">

    <div class="hd">
         <div class="hd-list" v-bind:class="{cur:lanmu=='xinwen'} " v-on:click="change('xinwen')" >
          <img slot="icon" src="../../static/img/家长.png">
            <span>家长</span>
         </div>


        <div class="hd-list" v-bind:class="{cur:lanmu=='tupian'} " v-on:click="change('tupian')" >
          <img slot="icon" src="../../static/img/老师.png">
            <span>老师</span>
        </div>

        <div class="hd-list" v-bind:class="{cur:lanmu=='junshi'} " v-on:click="change('junshi')" >
          <img slot="icon" src="../../static/img/消息.png">
            <span>消息</span>
        </div>

        <div class="medi">
           <div class="medi-l"> <img src="../../static/img/群聊.png" alt=""><span>发起群聊</span></div> 
            <div class="medi-r"><input type="text"><img src="../../static/img/搜索.png" alt=""></div>
          </div>

    </div>

        <div class="bd">  
            <div class="xinwen" v-if="lanmu=='xinwen'">   

            <div class="f-h">
              <div class="fl">
                 <img src="../../static/img/麦兜妈妈.png" alt="">
                 <div class="fd-wz">麦兜 - 妈妈<p class="w-z">132 1234 5678</p>  </div>           
              </div>
               
              <div class="fr">
                  <img src="../../static/img/2消息.png" alt="">
                  <img src="../../static/img/电话.png" alt="">
              </div>
            </div>			

              <div class="f-h">
              <div class="fl">
                 <img src="../../static/img/麦兜妈妈.png" alt="">
                 <div class="fd-wz">麦兜 - 妈妈<p class="w-z">132 1234 5678</p>  </div>           
              </div>
               
              <div class="fr">
                  <img src="../../static/img/2消息.png" alt="">
                  <img src="../../static/img/电话.png" alt="">
              </div>
            </div>	

              <div class="f-h">
              <div class="fl">
                 <img src="../../static/img/麦兜妈妈.png" alt="">
                 <div class="fd-wz">麦兜 - 妈妈<p class="w-z">132 1234 5678</p>  </div>           
              </div>
               
              <div class="fr">
                  <img src="../../static/img/2消息.png" alt="">
                  <img src="../../static/img/电话.png" alt="">
              </div>
            </div>	

              <div class="f-h">
              <div class="fl">
                 <img src="../../static/img/麦兜妈妈.png" alt="">
                 <div class="fd-wz">麦兜 - 妈妈<p class="w-z">132 1234 5678</p>  </div>           
              </div>
               
              <div class="fr">
                  <img src="../../static/img/2消息.png" alt="">
                  <img src="../../static/img/电话.png" alt="">
              </div>
            </div>	

              <div class="f-h">
              <div class="fl">
                 <img src="../../static/img/麦兜妈妈.png" alt="">
                 <div class="fd-wz">麦兜 - 妈妈<p class="w-z">132 1234 5678</p>  </div>           
              </div>
               
              <div class="fr">
                  <img src="../../static/img/2消息.png" alt="">
                  <img src="../../static/img/电话.png" alt="">
              </div>
            </div>	

              <div class="f-h">
              <div class="fl">
                 <img src="../../static/img/麦兜妈妈.png" alt="">
                 <div class="fd-wz">麦兜 - 妈妈<p class="w-z">132 1234 5678</p>  </div>           
              </div>
               
              <div class="fr">
                  <img src="../../static/img/2消息.png" alt="">
                  <img src="../../static/img/电话.png" alt="">
              </div>
            </div>	
                           
         </div>  
            

            <div class="tupian" v-if="lanmu=='tupian'"></div>  

            <div class="junshi" v-if="lanmu=='junshi'"></div>  

       </div>  

    </div>
</template>

<script>
export default {
  name: "Tongxun",
  data() {
    return {
      lanmu: "xinwen"
    };
  },
  methods: {
    change: function(str) {
      this.lanmu = str;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.new-head {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #fff;
}
.new-head .hd {
  height: 140px;
  overflow: hidden;
}

.hd .hd-list {
  float: left;
  width: 33.3%;
  height: 80px;
  text-align: center;
  line-height: 80px;
}

.hd img {
  width: 33.3%;
  height: 24px;
}

.hd span {
  width: 33.3%;
  color: #000;
  font-size: 18px;
  padding: 1px;
  text-align: center;
}

.new-head .medi {
  width: 100%;
  height: 28px;
  padding: 0 10px;
}
.medi .medi-l {
  float: left;
  width: 30%;
  padding-left: 10px;
  border-radius: 5px;
  background-color: #c2cbd2;
}

.medi-l span {
  font-size: 13px;
  height: 25px;
  color: #fff;
  line-height: 26px;
}

.medi-l img {
  float: left;
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.medi .medi-r {
  width: 50%;
  float: right;
}

.medi-r input {
  width: 160px;
  height: 20px;
  float: right;
  margin-right: 20px;
  position: relative;
}
.medi-r img {
  position: absolute;
  right: 10px;
  top: 79px;
  padding: 5px;
  width: 22px;
  height: 14px;
  background-color: #c2cbd2;
}

.new-head .hd span.cur {
  background-color: #fff;
}

.bd .xinwen {
  height: 100%;
  overflow: hidden;
  background-color: #fbfbfb;
}
.bd .f-h {
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: #fbfbfb;
  border-bottom: 1px double #eee;
}
.f-h .fl {
  float: left;
  width: 50%;
  position: relative;
  height: 50px;
  line-height: 30;
}

.f-h .fl img {
  width: 30px;
  height: 50px;
  float: left;
}

.fl .fd-wz {
  height: 50px;
  position: absolute;
  top: -225px;
  left: 40px;
}
.fl .w-z {
  height: 30px;
  position: absolute;
  font: 12px;
  top: 70px;
  left: 0px;
}

.f-h .fr {
  float: right;
  width: 50%;
  height: 50px;
  line-height: 30;
}

.f-h .fr img {
  width: 30px;
  height: 30px;
  padding: 15px;
  float: right;
}
</style>
