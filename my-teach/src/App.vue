<template>
  <div id="app">
    <router-view class="view"></router-view>
      <div class="nav">
          <div class="nav-item">
            <router-link  to="/">
               <div> <img slot="icon" src=".././static/img/首页.png"></div>
               首页 
            </router-link>
             <router-link  to="Tongxun">
                 <div>  <img slot="icon" src=".././static/img/通讯录.png"> </div>
                通讯录
             </router-link>
            <router-link  to="/Faxian">
                <div><img slot="icon" src=".././static/img/发现.png"></div>
                发现
            </router-link>
            <router-link  to="/Me">
                <div><img slot="icon" src=".././static/img/我.png"></div>
                我
              </router-link>
          </div>
      </div>
    </div>
</template>


<script>
import Shouye from "./components/Shouye";
import Tongxun from "./components/Tongxun";
export default {
  name: "app",
  components: {
    Shouye,
    Tongxun
  }
};
</script>
<style>
    #app{
        height: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      .nav{
        height: 50px;
        width: 100%;
        background-color:#fff;
      }

      .nav-item {
          height: 50px;
         
      }
      .nav-item img{
         width: 25%;
         height: 25px;
      }

      .nav-item a{
        flex: 1;
        width: 25%;
        float: left;
        height: 30px;
        font-size: 1px;
        color: black;
        line-height: 15px;
        text-align: center;
        text-decoration: none;
        box-sizing: border-box;
        padding: 0.35rem 0.3rem;
      }

      .nav-item:link,.nav-item:visited{
        background-color: #fff;
        color: black;
      }

      .nav-item:hover,.nav-item:active{
        color: #ff7125;
        background-color: #fff;
      }

</style>
