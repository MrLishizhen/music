<template>
  <div class="home">
    <van-popup v-model="show" :round='true' position='left' class='leftPopup'></van-popup>
    <heads @tabsqh='changeChild' @topLeft='topLeft' :tabs='tabs' class="home-top"></heads>
    <div class="home-content">
      <van-swipe ref='swipe' class="my-swipe" :lazy-render='true' @change='change' :initial-swipe='1' :loop='false' indicator-color="white" :show-indicators='false'>
        <van-swipe-item class='swipe-box' v-for='(item,i) in tabs' :key='i'>
          <components :is='item.src'></components>  
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import heads from "@/components/heads.vue";
import Me from '@/views/me/me.vue';
import find from '@/views/find/find.vue';
import yuncun from '@/views/yuncun/yuncun.vue';
import videos from '@/views/video/video.vue';
export default {
  name: "Home",
  data() {
    return {
      msg: 0,
      show:false,
      tabs:[
              {name:"我的",hot:false,src:'Me',meth:'/home/me'},
              {name:"发现",hot:true,src:'find',meth:'/home/find'},
              {name:"云村",hot:false,src:'yuncun',meth:'/home/yuncun'},
              {name:"视频",hot:false,src:'videos',meth:'/home/videos'}
          ]
    };
  },
  components: {
    heads,Me,find,yuncun,videos
  },
  methods:{
    topLeft(){
      this.show=true;
    },
    change(i){
      let tabs = this.tabs;
      for(let index= 0;index<tabs.length;index++){
        tabs[index].hot=false;
      }
      tabs[i].hot=true;
    },
    changeChild(i){
      this.change(i);
      this.$refs.swipe.swipeTo(i);
      // this.$router.push(this.tabs[i].meth)
    }
  }
};
</script>
<style lang="less">
.home {
  width: 100%;
  height: 100%;
  .leftPopup{
    width:50%;
    height:100%;

  }
  .home-top {
    position: fixed;
    width: 100%;
    height: 0.4rem; 
    left:0;
    // transform: translateX(-50%);
    top: 0;
    z-index:2000;
    // max-width:680px;
    
  }
  .home-content{
    height:100%;
    
    .van-swipe{
      height:100%;
      z-index:0;
      .swipe-box{
        
      }
    }
  }
}
</style>