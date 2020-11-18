<template>
  <div class="login">
    <van-nav-bar
      title="登录"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="content">
      <span class="title">手机号登录</span>
      <div class="cont-box">
        <van-form @submit="onSubmit">
          <van-cell-group>
            <van-field
              v-model="tel"
              name="validator"
              :rules="[
              { required: true, message: '请填写您的手机号码！' },
              { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！'}
                ]"
              type="tel"
              label="手机号"
              placeholder="手机号"
              clearable
              colon
            />
            <van-field
              v-model="password"
              type="password"
              label="密码"
              placeholder="密码"
              clearable
              colon
            />
          </van-cell-group>

          <van-button style='margin-top:0.1rem;' round block type="info" native-type="submit">
              登录
          </van-button>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from '../../api/login'
export default {
  data() {
    return {
      
      tel: "",
      password: "",
      
    };
  },
  methods: {
     
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {},
    onSubmit() {
        login({phone:this.tel,pws:this.password});
    },
  },
};
</script>

<style>
.van-nav-bar .van-icon {
  color: #ccc !important;
}
.van-nav-bar__text {
  color: #ccc !important;
}
/* .van-hairline--top-bottom::after{
    border:0!important;
} */
</style>
<style lang="less">
.login {
  display: flex;
  flex-direction: column;
  .content {
    display: flex;
    flex-direction: column;
    .cont-box {
      width: 80%;
      margin: 0 auto;
    }
  }
  .title {
    line-height: 0.2rem;
    font-size: 0.14rem;
    margin-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
}
</style>