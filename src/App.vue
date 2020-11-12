<template>
  <div id="app">  
    <!-- <router-view name='tabs' class='tabs-box'></router-view> -->
    <router-view class='content'></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods:{

  }
}
</script>  

<style lang="less">
#app {
  width:100%;
  height:100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display:flex;
  flex-direction: column;
}
.tabs-box{
  height:0.6rem;
  width:100%;
  // flex-shrink: 0;
  position:fixed;
  left:0;top:0;
  width:100%;
  // background-color: #ccc;
}
.content{
  flex-grow: 1;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
