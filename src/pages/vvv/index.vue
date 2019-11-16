<template>
  <div class="vw">
    <Header title="VIP + 会员" icon/>
    <!--section-->
    <section>
        <div class="box1">
      <div class="bei">
        <div class="tu">
          <img src="img/vip2.png" />
        </div>
        <div class="zhong">
          <div class="one">
            <ul>
              <li>
                <i class="iconfont">&#xe633;</i>
                <span>优先购票</span>
              </li>
              <li>
                <i class="iconfont">&#xe689;</i>
                <span>专属票价</span>
              </li>
              <li>
                <i class="iconfont">&#xe662;</i>
                <span>专享折扣</span>
              </li>
              <li>
                <i class="iconfont">&#xe6b2;</i>
                <span>专享券</span>
              </li>
            </ul>
          </div>
          <div class="one">
            <ul>
              <li>
                <i class="iconfont">&#xe6d8;</i>
                <span>全场包邮</span>
              </li>
              <li>
                <i class="iconfont">&#xe605;</i>
                <span>双倍积分</span>
              </li>
              <li>
                <i class="iconfont">&#xe61c;</i>
                <span>赠观影券</span>
              </li>
              <li>
                <i class="iconfont">&#xe8b3;</i>
                <span>明星活动</span>
              </li>
            </ul>
          </div>
          <div class="two">
            <ul>
              <li>
                <i class="iconfont">&#xe724;</i>
                <span>免费期刊</span>
              </li>
              <li>
                <i class="iconfont">&#xe509;</i>
                <span>生日专享</span>
              </li>
              <li>
                <i class="iconfont">&#xe720;</i>
                <span>敬请期待</span>
              </li>
              <li>
                <i class="iconfont"></i>
                <span></span>
              </li>
            </ul>
          </div>
          <!--权益解读-->
          <div class="quan">
            立即开通
            <span>￥99</span>
            <i>/年</i>
          </div>
          <div class="yi">权益解读</div>
        </div>
      </div>
      <!--轮播图-->
      <div class="slider">
        <img src="img/vvv1.png">
      </div>
      <!--专享券-->
      <div class="quan">
        <div class="you">优先购票</div>
        <div class="fan">
          <div class="tu1">
            <img src="img/s4.jpg" />
          </div>
          <div class="zi1">
            <h6>12/19 周四</h6>
            <h5>世界原版音乐剧《猫》</h5>
            <p>北京|世纪剧院</p>
            <h4>
              <span>
                ￥380
                <i>起</i>
              </span>
              <u>
                11/12 16:00
                <b>开始</b>
              </u>
            </h4>
          </div>
        </div>
        <div class="fan">
          <div class="tu1">
            <img src="img/s5.jpg" />
          </div>
          <div class="zi1">
            <h6>12/19 周四</h6>
            <h5>东北三省金奖话剧-《良宵》</h5>
            <p>西安|世纪剧院</p>
            <h4>
              <span>
                ￥380
                <i>起</i>
              </span>
              <u>
                11/12 16:00
                <b>开始</b>
              </u>
            </h4>
          </div>
        </div>
      </div>
        </div>
    </section>
    <!--footer-->
    <footer>
      <div class="di">
        立即开通
        <span>￥99</span>
        <i>/年</i>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "vvv"
};
</script>
<style>
/*section*/
.vw{
      height:100%;
}
section{
    height:100%;
    background:rgb(240, 239, 239);
    overflow:auto;
    flex:1
}
section .box1{
  padding-bottom: .417rem;
}
section .bei{
    background:url(/img/vb.png) no-repeat;
    height:3.883rem;
    background-size:100%;
}
section .bei .tu{
    height:0.592rem;
}
section .bei .tu img{
    width:2.875rem;height:0.583rem;
    margin-left:0.083rem;
}
section .bei .zhong{
    width:2.875rem;height:3.167rem;
    background:rgb(250, 247, 247);margin:0 auto;
    overflow:hidden;
}
section .bei .zhong .one{
    height:0.417rem;padding-top:0.125rem;
    margin-top:0.167rem;
}
section .bei .zhong .one ul{
    display:flex;height:0.417rem;
    justify-content: space-around;
    align-items: center;
}
section .bei .zhong .one ul li{
    text-align:center;
}
section .bei .zhong .one ul li i{
    border:1px solid #fece9d;
    color:#d79a62;padding:0.1rem;
    border-radius:50%;font-size:0.15rem;
}
section .bei .zhong .one ul li span{
    display:block;margin-top:0.125rem;;
    font-size:0.117rem;
}
section .bei .zhong .two{
    height:0.417rem;padding-top:0.125rem;
    margin-top:0.167rem;
}
section .bei .zhong .two ul{
    display:flex;height:0.417rem;
    justify-content: space-around;
    align-items: center;
}
section .bei .zhong .two ul li{
    text-align:center;
}
section .bei .zhong .two ul li i{
    border:1px solid #fece9d;
    color:#d79a62;padding:0.1rem;
    border-radius:50%;font-size:0.15rem;
}
section .bei .zhong .two ul li:nth-of-type(4){
    width:0.467rem;border:none;
}
section .bei .zhong .two ul li:nth-of-type(4) i{
    border:none;
}
section .bei .zhong .two ul li span{
    display:block;margin-top:0.125rem;;
    font-size:0.117rem;
}
section .bei .zhong .quan{
    height:0.375rem;width:2.625rem;
    background:#fece9d;margin:0 auto;
    margin-top:0.167rem;border-radius:0.167rem;
    font-size:0.125rem;text-align:center;
    line-height:0.375rem;color:#85470e;
}
section .bei .zhong .quan span{
    font-weight:bold;color:#85470e;
}
section .bei .zhong .quan i{
    font-style:normal;font-size:0.1rem;
}
section .bei .zhong .yi{
    height:0.383rem;font-size:0.1rem;
    display:flex;justify-content:center;
    align-items: center;
}
/*轮播图*/
section .slider{
    height:1.5rem;background:black;
    margin-bottom:0.083rem;
}
section .slider img{
    height:1.5rem;width:3.125rem;
    margin-bottom:0.083rem;
}
section .quan{
    height:3.25rem;background:#fff;
}
section .quan .you{
    height:0.367rem;line-height:0.367rem;
    font-size:0.167rem;margin-left:0.083rem;
}
section .quan .fan{
    display:flex;justify-content:space-around;
    border-bottom:1px solid #ccc;
    margin-bottom:0.083rem;
}
section .quan .fan .tu1{
    width:0.875rem;height:1.183rem;
    padding-bottom:0.042rem;
}
section .quan .fan .tu1 img{
    width:0.875rem;height:1.183rem;
}
section .quan .fan .zi1{
    width:1.875rem;height:1.183rem;
    
}
section .quan .fan .zi1 h6{
    font-size:0.108rem;margin-top:0.05rem;
}
section .quan .fan .zi1 h5{
    font-size:0.133rem;margin-top:0.083rem;
}
section .quan .fan .zi1 p{
    font-size:0.1rem;margin-top:0.125rem;
}
section .quan .fan .zi1 h4{
    display:flex;justify-content:space-between;
    font-weight:normal;margin-top:0.083rem
}
section .quan .fan .zi1 h4 span{
    font-size:0.125rem;font-weight:normal;
    color:#ff6743
}
section .quan .fan .zi1 h4 span i{
    font-style:normal;color:#999;
    font-size:0.1rem;
}
section .quan .fan .zi1 h4 u{
    color:#ff6743;font-size:0.1rem;
    text-decoration:none;
}
section .quan .fan .zi1 h4 u b{
    color:#999;
}
/*footer*/
footer{
  width: 100%;
  position: absolute;
    height:0.408rem;background:#fece9d;
    bottom: 0;
}
footer .di{
    height:0.408rem;
    font-size:0.125rem;text-align:center;
    line-height:0.408rem;color:#85470e;
}
footer .di span{
    font-weight:bold;color:#85470e;
}
footer .di i{
    font-style:normal;font-size:0.1rem;
}
</style>