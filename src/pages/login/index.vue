<template>
  <div class="log">
    <Header title="用户注册" />
    <section>
      <div class="login">
        <h1 class="title login-title">欢迎来到聚橙网</h1>
        <div class="one" v-show="register">
          <div class="login-area">
            <form>
              <ul class="lg-list">
                <li class="lg-item">
                  <input
                    type="text"
                    name="tel"
                    placeholder="请输入手机号/邮箱"
                    class="lg-input"
                    v-model="username"
                  />
                </li>
                <li class="lg-item">
                  <input
                    type="password"
                    placeholder="请输入密码"
                    class="lg-input pwd-input"
                    v-model="password"
                  />
                </li>
              </ul>
            </form>
          </div>
          <div class="login-btn">
            <span class="btn lg-btn" @click="getIn">登 录</span>
          </div>
          <div class="tg-wrap tg-sms">
            <span class="left tg-mail">忘记密码</span>
            <v-touch class="right tg-login" v-on:tap="handleChange">验证码登录/注册</v-touch>
          </div>
        </div>

        <div class="two" v-show="!register">
          <div class="login-area">
            <form>
              <ul class="lg-list">
                <li class="lg-item">
                  <input
                    type="text"
                    name="text"
                    placeholder="请输入手机号"
                    class="lg-input"
                    v-model="user"
                  />
                  <p class="tip" style="font-size: 12px;">未注册手机号验证成功后自动创建账户</p>
                  <input
                    type="text"
                    name="text"
                    placeholder="请输入密码"
                    class="lg-input"
                    v-model="pass"
                  />
                </li>
              </ul>
            </form>
          </div>
          <div class="login-btn">
            <span class="btn lg-btn" @click="logIn">注册</span>
          </div>
          <div class="login-toggle" style="margin-top: 40px;">
            <div class="tg-wrap tg-sms">
              <span class="left tg-mail">邮箱注册</span>
              <v-touch class="right tg-login" v-on:tap="handleChange">密码登录</v-touch>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="footer-wrap">
        <div class="footer-title">
          <p class="footer-title-txt">其他登录方式</p>
        </div>
        <div class="way">
          <span class="iconfont ic" style="color:  rgb(52, 2, 145)
">&#xe6ca;</span>
          <span class="iconfont ic" style="color:#f00;
">&#xe657;</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import { async } from "q";
import { log } from "util";
export default {
  name: "login",
  data() {
    return {
      register: false,
      username: "",
      password: "",
      user: "",
      pass: ""
    };
  },

  methods: {
    handleChange() {
      this.register = !this.register;
    },
    logIn() {
      let data = { username: "", password: "" };
      data.username = this.user;
      data.password = this.pass;
      let data2 = { username: data.username, password: data.password };
      console.log(data2);
      axios({
        method: "POST",
        url: "http://localhost:3000/use/",
        data: { username: data.username, password: data.password }
      }).then(_ => {
        // this.$router.push("/gatherCard");
        this.register = true;
      });
    },
    getIn() {
      axios({
        method: "get",
        url: "http://localhost:3000/use"
      }).then(res => {
        console.log(res);

        for (var item in res) {
          if (item.username == res.username && item.password == res.password) {
            this.$router.push("/gatherCard");
            break;
          } else {
            console.log("error");
          }
        }
      });
    }
  }
};
</script>

<style lang="scss">
body {
  background: url("https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/login_bg.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
}
.log {
  height: 100%;
}
/* -------------top--------------- */
header {
  position: relative;
  height: 0.417rem;
}
.goback {
  height: 0.417rem;
  line-height: 0.417rem;
  padding-left: 0.083rem;
}
/* -------------section--------------- */
section {
  height: 60%;
  .login {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    h1 {
      font-weight: 700;
      font-stretch: normal;
      color: #232323;
    }
    li {
      list-style: none;
      width: 100%;
      border-bottom: 0.008rem solid #666;
      color: #232323;
      input {
        width: 2.5rem;
        display: block;
        height: 0.417rem;
        border: none;
        background-color: #fdfdfd;
        outline: none;
      }
    }
  }
}
.login-btn {
  width: 2.5rem;
  height: 0.417rem;
  margin: 0.167rem;
}
.btn {
  height: 100%;
  display: block;
  width: 100%;
  color: #4b4a4a;
  border-radius: 1.28rem;
  background-color: #ebebeb;
  border: none;
  text-align: center;
  line-height: 0.417rem;
}
.tg-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: inline-block;
    width: 50%;
    text-align: center;
  }
}
/* -------------footer--------------- */
footer {
  height: 3rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .way {
    margin-top: 0.167rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
.ic {
  font-size: 0.25rem;
}
</style>