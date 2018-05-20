<template>  
  <div class="shouye slide">  
      <!-- 轮播图部分 -->
        <div class="slideshow">  
           <transition-group tag="ul" name="image">  
              <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">  
               <a href="#">  
                 <img :src='img'>  
                </a>  
             </li>  
           </transition-group>  
        </div>  

        <div class="icon-box">
            <div class="icon-one">
                <a href="#"><img src="../../static/img/相册.png" >相册</a>
                <a href="#"><img src="../../static/img/作业.png" >作业</a>
                <a href="#"><img src="../../static/img/通知.png" >通知</a>
                <a href="#"><img src="../../static/img/考勤.png" >考勤</a>
                <a href="#"><img src="../../static/img/校车.png" >校车</a>
            </div>

            <div class="icon-two">
                <a href="#"><img src="../../static/img/班级风采.png" >班级风采</a>
                <a href="#"><img src="../../static/img/竞技场.png" >竞技场</a>
                <a href="#"><img src="../../static/img/学生评价.png" >学生评价</a>
                <a href="#"><img src="../../static/img/校园名师.png" >校园名师</a>
                <a href="#"><img src="../../static/img/更多.png" >更多</a>
            </div>
        </div>

    <div class="mian">  
      
        <div class="hd">  
            <span v-bind:class="{cur:lanmu=='xinwen'} " v-on:click="change('xinwen')">重要通知</span>  
            <span v-bind:class="{cur:lanmu=='tupian'} " v-on:click="change('tupian')">校园资讯</span>  
            <span v-bind:class="{cur:lanmu=='junshi'} " v-on:click="change('junshi')">班级课程表</span>  
        </div>  

        <div class="bd">  
            <div class="xinwen" v-if="lanmu=='xinwen'">   

            <div class="f-hd">红色预警 <p class="nub">2018.5.10</p></div>			
                    <P>红色暴雨预警，几天继续上班！！！</P>
                    <p>年轻的时候多吃点苦，这样老了吃苦才会习惯</p>
                    <p>不经历风雨，怎么迎接暴风雨？</p>
                    <p>生活会让你苦上一辈子，等你适应后，再让你苦一辈子。...</p>             
                
            </div>  
            
            <div class="tupian" v-if="lanmu=='tupian'">
                <div class="f-hd">校园头条 </div>			
                    <P>三月，我们与美好相遇！！！</P>
                    <p>To辅导员：阁下何不同风起，扶摇直上九万里？</p>
                    <p>广告艺术节获大奖，你造么？</p>
                    <p>企业专家担任高职单招评委成亮点</p>     
                </div>  

            <div class="junshi" v-if="lanmu=='junshi'">
                <div class="f-hd">追梦班</div>			
                    <P>追梦班缔造完美教室叙事！！！</P>
                    <p>一群追梦的少年，路途中难免会有风吹雨打</p>
                    <p>有执著与努力作双翼，终会让梦想在现实中展翅高飞。</p>
                    <p>生活会让你苦上一辈子，等你适应后，再让你苦一辈子。...</p>     
                </div>  

        </div>  
    </div>  


  </div>  
</template>  

<script>
export default {
  name: "shouye",
  data() {
    return {
      footertitle: true,
      lanmu: "xinwen",
      timer: null, //定时器
      mark: 0, //比对图片索引的变量
      imgArray: [
        "../../static/img/1.png",
        "../../static/img/2.jpg",
        "../../static/img/3.jpg",
        "../../static/img/4.jpg"
      ]
    };
  },
  methods: {
    autoPlay() {
      this.mark++;
      if (this.mark === 4) {
        this.mark = 0;
      }
    },
    play() {
      this.timer = setInterval(this.autoPlay, 2000);
    },
    change(i) {
      this.mark = i;
    },
    change: function(str) {
      this.lanmu = str;
    },
    selectMapNav(title) {
      this.isSelect = title;
    },

  },
  created() {
    this.play();
  }
};
</script>  

<style scoped>
    .image-enter-active {
    transform: translateX(0);
    transition: all 1s ease;
    }
    .image-leave-active {
    transform: translateX(-100%);
    transition: all 1s ease;
    }
    .image-enter {
    transform: translateX(100%);
    }
    .image-leave {
    transform: translateX(0);
    }
</style>

