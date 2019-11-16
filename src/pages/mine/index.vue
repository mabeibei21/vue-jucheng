<template>
  <div class="page">
    <header>
      <div class="setup">
        <span class="iconfont fr">&#xe720;</span>
      </div>
      <div class="content">
        <div class="top">
          <div class="headPic fl">
            <img
              src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png"
              alt
            />
          </div>
          <div class="name fl">
            <h6>名字</h6>
            <p>ID：934093</p>
          </div>
        </div>
        <div class="vip">
          <span class="fr">普通会员</span>
        </div>
        <ul class="headNav">
          <li>
            <span>0</span>
            <span>账户余额</span>
          </li>
          <li>
            <span>8</span>
            <span>积分</span>
          </li>
          <li>
            <span>0</span>
            <span>优惠券</span>
          </li>
          <li>
            <span style="font-size: 13px; color: #666666;">立即开通</span>
            <span>橙PLUS卡</span>
          </li>
        </ul>
      </div>
    </header>
    <section>
      <div class="one">
        <img src="https://m.juooo.com/static/img/ad.411f5e6.png" alt />
      </div>
      <ul class="two">
        <li>
          <span class="iconfont">&#xe720;</span>
          <span class="ifont">我的订单</span>
        </li>
        <li>
          <span class="iconfont">&#xe720;</span>
          <span class="ifont">我的票夹</span>
        </li>
        <li>
          <span class="iconfont">&#xe720;</span>
          <span class="ifont">我的卡包</span>
        </li>
        <li>
          <span></span>
          <span></span>
        </li>
    </ul>
    <ul class="two">
        <li>
          <span class="iconfont">&#xe720;</span>
          <span class="ifont">实名购票人</span>
        </li>
        <li>
          <span class="iconfont">&#xe720;</span>
          <span class="ifont">收货地址</span>
        </li>
        <li>
          <span class="iconfont">&#xe720;</span>
          <span class="ifont">意见反馈</span>
        </li>
        <li>
          <span class="iconfont">&#xe720;</span>
          <span class="ifont">客服帮助</span>
        </li>
    </ul>
    </section>
  </div>
</template>
<script>
export default {
  name: "mine"
};
</script>
<style scoped>
 
header {
  height: 1.75rem;
  background: url(https://m.juooo.com/static/img/personal_bg_1.f5fc96c.png)
  no-repeat top;
  background-size: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 0.125rem;
  
}

.setup {
  height: 0.417rem;
  line-height: 0.417rem;
  color: #ffffff;
}

.iconfont {
  font-size: 20px;
  color: #f7871f;float:right;
}

header .content {
  margin-top: 0.042rem;
  height: 1.3rem;
  background: #ffffff;
  border-radius: 0.042rem;
}
header .content .top{
    display:flex;
}
header .content .headPic {
  height: 0.483rem;
  width: 0.483rem;
  border-radius: 50%;
  margin-left: 0.208rem;
  margin-top: -0.167rem;
  
}
header .content .name {
  margin-left: 0.167rem;
  margin-top: 0.083rem;
}

header .content .name h6 {
  font-size: 14px;
}

header .content .top .name p {
  font-size: 12px;
  color: #666666;
}

header .content .vip {
  clear: both;float:right;
}

header .content .vip span {
  padding: 0.025rem;
  background: #f8d583;
  border-radius: 0.042rem;
}

header .content .headNav {
  width: 100%;
  height: 0.692rem;
  justify-content: space-around;
  align-items: center;
  display: flex;
}

header .content .headNav li {
  height: 0.417rem;
  width: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-right: 1px solid #eee9e9;
}

header .content .headNav li span:nth-of-type(1) {
  font-size: 18px;
  color: #f00;
  font-weight: bold;
}

header .content .headNav li span:nth-of-type(2) {
  font-size: 12px;
  color: #666666;
}

section {
  flex: 1;
  overflow: auto;
}

section .one img {
  width: 3.083rem;
}

section .two {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 12px;
  height: 0.75rem;
  background: rgb(224, 220, 220);
  margin: 0.083rem 0.125rem;
  border-radius: 0.042rem;
}

section .two li {
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 25%;
}

.ifont {
  font-size: 13px;
}

</style>