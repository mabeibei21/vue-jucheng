<template>
<div class="sec">
    <div class="login">
        <h1 class="title login-title">欢迎来到聚橙网</h1>
        <div class="one" style="display: block;">
            <div class="login-area">
                <form>
                    <ul class="lg-list">
                        <li class="lg-item">
                            <input type="text" name="tel" placeholder="请输入手机号/邮箱" class="lg-input">
                        </li>
                        <li class="lg-item">
                            <input type="password" placeholder="请输入密码" class="lg-input pwd-input">
                        </li>
                    </ul>
                </form>
            </div>
            <div class="login-btn">
                <a href="#" disabled="disabled" class="btn lg-btn">登 录</a>
            </div>
            <div class="tg-wrap tg-sms">
                <span class="left tg-mail">忘记密码</span>
                <span class="right tg-login">验证码登录/注册</span>
            </div>
        </div>
        <div class="two" style="display: none;">
            <div class="login-area">
                <form>
                    <ul class="lg-list">
                        <li class="lg-item">
                            <input type="text" name="text" placeholder="请输入手机号" class="lg-input">
                            <p class="tip" style="font-size: 12px;">未注册手机号验证成功后自动创建账户</p>
                            <input type="text" name="text" placeholder="请输入密码" class="lg-input">
                        </li>
                    </ul>
                </form>
            </div>
            <div class="login-toggle" style="margin-top: 40px;">
                <div class="tg-wrap tg-sms"><span class="left tg-mail">邮箱注册</span>
                    <span class="right tg-login">密码登录</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"login"
}
</script>
<style>
    .sec {
            height: 100%;
            /* padding: .417rem 0 .-367rem; */
            overflow: auto;
        }

        .sec .login {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
        }

        .sec .login h1 {
            font-weight: 700;
            font-stretch: normal;
            color: #232323;
        }

        .sec .login li {
            list-style: none;
            width: 100%;
            border-bottom: .008rem solid #666;
            color: #232323;
        }

        .sec .login li input {
            width: 2.5rem;
            display: block;
            height: .417rem;
            border: none;
            background-color: #fdfdfd;
            outline: none;
        }

        .login-btn {
            width: 2.5rem;
            height: .417rem;
        }

        .btn {
            height: 100%;
            display: block;
            width: 100%;
            color: #fefefe;
            border-radius: 1.28rem;
            background-color: #ebebeb;
            border: none;
        }

        .tg-wrap {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .tg-wrap span {
            display: inline-block;
            width: 50%;
            text-align: center;
        }
</style>