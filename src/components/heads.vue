<template>
  <div class="header">
    <div class="header-left">
      <van-icon name="wap-nav" class="tips-i" size="0.24rem" />
    </div>
    <div class="header-tabs">
      <ul class='tabs'>
          <li v-for='(item,i) in tabs' @click='tabsClick(i)' :key='i' :class='{"hot":item.hot}'>{{item.name}}</li>
      </ul>
    </div>
    <div class="header-right">
      <van-icon name="search" class="tips-i" size="0.24rem" />
    </div>
  </div>
</template>

<script>
export default {
  name: "tabs",
  data(){
      return {
          active:0,
          
      }
  },
  props:['tabs'],
  methods:{
      tabsClick(i){
         this.$emit('tabsqh',i);
      }
  }
};
</script>

<style lang='less'>
.header {
  padding-top: 0.2rem;
  height: 0.4rem;
  width: 100%;
  display: flex;
  .header-left,
  .header-right {
    width: 0.4rem;
    height: 0.4rem;
    flex-shrink: 0;
    line-height: 0.4rem;

    .tips-i {
      margin-top: 0.08rem;
      width: 0.24rem;
      height: 0.24rem;
    }
  }
  .header-tabs {
    flex-grow: 1;
    .tabs{
        width:100%;
        line-height:0.4rem;
        padding:0 0.2rem;
        height:100%;
        box-sizing: border-box;
        display:flex;
        justify-content: space-around;
        li{
            font-size:0.16rem;
            color:#e0e0e0;
            &.hot{
                font-size:0.16rem;
                color:#2c3e50;
            }
        }
    }
  }
}
</style>