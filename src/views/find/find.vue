<template>
  <div class="find-box">
    <div class="banner">
      <van-swipe indicator-color="white">
        <van-swipe-item  class='swipe-item' v-for='(item,i) in banner'  :key='i'>
          <van-image radius='5px' width="auto" height="1.6rem" :src="item.pic">
          </van-image>
          <span class='banner-i' :style="{'backgroundColor':item.titleColor}" v-html='item.typeTitle'></span>
        </van-swipe-item>
      </van-swipe>
    </div>


    <!-- 每日推荐 -->
    <listH :title="'推荐歌单'" :to="'#'" :data='resource' ></listH>

  </div>
</template>

<script>
import {resource} from "../../api/home";
import listH from '@/components/list.vue';
export default {
  data() {
    return {
      resource:[], 
      banner:[],//获取banner
    };
  },
  components:{
    listH
  },
  created(){
    this._httpBanner();
    resource().then(res=>{
      this.resource=res.recommend;
    })
  },

  methods: {
   
    _httpBanner(){

      this.$http({url:"/banner?type=2"}).then(res=>{
        if(res.code==200){
          this.banner=res.banners;
        }
      })
    }
  },
};
</script>

<style lang='less'>
.find-box {
  width: 100%;
  height: 100%;
  // background-color: red;
  padding-top: 0.6rem;
  .banner {
    // height: 1.7rem;
    border-radius: 5px;
    min-height:1.5rem;
    overflow:hidden;
    background-color:#fff;
    padding: 0.1rem 0.1rem 0;
    .swipe-item{
      position:relative;
      // margin-right:0.1rem;
      // padding:0 0.1rem;
      .banner-i{
        position:absolute;
        right:0.2rem;
        bottom: 0.1rem;
        font-size:0.12rem;
        color:#fff;
        padding:0.02rem 0.06rem;
        border-radius: 5px;
        line-height:0.16rem;
        
      }
    }
  }
  //每日推荐
  .resource{

  }
}
</style>