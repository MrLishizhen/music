<template>
  <div class="home">
    <heads @tabsqh='changeChild' :tabs='tabs' class="home-top"></heads>
    <div class="home-content">
      <van-swipe ref='swipe' class="my-swipe" @change='change' :loop='false' indicator-color="white" :show-indicators='false'>
        <van-swipe-item v-for='(item,i) in tabs' :key='i'>
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
      tabs:[
              {name:"我的",hot:true,src:'Me'},
              {name:"发现",hot:false,src:'find'},
              {name:"云村",hot:false,src:'yuncun'},
              {name:"视频",hot:false,src:'videos'}
          ]
    };
  },
  components: {
    heads,Me,find,yuncun,videos
  },
  methods:{
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
    }
  }
};
</script>
<style lang="less">
.home {
  width: 100%;
  height: 100%;
 
  .home-top {
    position: fixed;
    width: 100%;
    height: 0.4rem; 
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    z-index:999999;
    max-width:680px;
  }
  .home-content{
    height:100%;height:100%;
    .van-swipe{
      height:100%;
      z-index:0;
    }
  }
}
</style>