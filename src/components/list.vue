<template>
  <div class="list-h">
    <div class="list-top">
      <span class="list-title" v-html="title"></span>
      <router-link class="list-to" :to="to ? to : '#'">查看更多</router-link>
    </div>
    <div class="list-bom">
      <ul class="list" ref='seroll' id="seroll" @scroll='scrollEvent' @touchstart='touchstart' @touchmove='touchmoveStop'>
        <li v-for="item in data" :key="item.id">
          <div class="img-box">
            <van-image
              radius= '0.05rem'
              class="image"
              width="1rem"
              height="1rem"
              :src="item.picUrl"
            />
          </div>
          <span class="img-span" v-html="item.name"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollold:1,
      scrollnew:0,
      elementWidth:1,
    };
  },

  props: ["data", "to", "title"],
  created() {},
  
  methods: {
    touchmove(e) {
      e.preventDefault();
    },
    touchstart(e){
      console.log(e.touches[0].clientX);
    },
    scrollEvent(e){
      
      this.scrollnew=e.target.scrollLeft;
      this.elementWidth=e.target.clientWidth;
      this.scrollold=e.target.scrollWidth;

    },
    touchmoveStop(e){
      // if(this.)
      // e.stopPropagation();
      
      let right = this.scrollold-this.scrollnew-this.elementWidth;
      
      
      if(this.scrollnew==0||right==0){
        return "";
      }else{
        return e.stopPropagation();
      }
     
    }
  },
};
</script>


<style lang='less'>
::-webkit-scrollbar {
    width: 0px;
    height:0px;
}   //1 滚动条整体部分，其中的属性有width,height,background,border（就和一个块级元素一样）等。
// ::webkit-scrollbar-button //2 滚动条两端的按钮。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。
// ::webkit-scrollbar-track   //3  外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。
// ::webkit-scrollbar-track-piece //4  内层轨道，滚动条中间部分（除去）。
// ::webkit-scrollbar-thumb  //5  滚动条里面可以拖动的那部分
// ::webkit-scrollbar-corner  //6  边角
// ::webkit-resizer
 
.list-h {
  height: 1.6rem;
  display: flex;
  flex-direction: column;
  position: relative;
  .list-top {
    height: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .list-title {
      font-size: 0.16rem;
      font-weight: 700;
      margin-left: 0.1rem;
      height: 0.16rem;
      line-height: 1;
    }
    .list-to {
      font-size: 0.14rem;
      color: #999;
      height: 0.14rem;
      line-height: 1;
      margin-right: 0.1rem;
      border: 1px solid #999;
      padding: 0.03rem 0.05rem;
      border-radius: 0.05rem;
    }
  }
  .list-bom {
    width:100%;
    box-sizing: border-box;
    height: 1.3rem;
    display: flex;
    overflow: hidden;
     padding: 0 0.1rem;
    .list {
      width: 100%;
      height: 100%;
      display: flex;
      overflow: auto;
     
      li {
        width:1rem;
        height:100%;
        display:flex;
        flex-direction: column;
        margin-right:0.1rem;
        .img-box {
          width:1rem;
          height:1rem;
          flex-grow: 1;
          display:flex;
          justify-content: center;
          align-items: center;
          .image {
            display: block;
            margin:auto auto;
          }
        }

        .img-span {
          flex-shrink: 0;
          height: 0.2rem;
          font-size: 0.14rem;
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: 0 0.08rem 0 0;
        }
      }
    }
  }
}
</style>