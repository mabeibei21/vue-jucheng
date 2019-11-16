<template>
  <div class="movieDetail">
    <Header title="演出详情" icon />
    <section>
      <div class="topp" :style="{'background-image':'url('+this.detailData.pic+')'}"></div>
      <div class="top">
        <div class="left">
          <img :src="this.detailData.pic" />
        </div>
        <div class="right">
          <div class="title">{{this.detailData.show_name}}</div>
          <div class="price">￥{{this.detailData.price_range}} <span>套</span></div>
        </div>
      </div>


    
      <div class="address">
        <div class="zuo">
        <div class="date">{{this.timeData.show_time_start_display}}</div>
        <div class="city">{{this.city.city_name}} | {{this.addr.venue_name}}</div>
        <div class="cityNum">{{this.addr.venue_address}}</div>
        </div>
        <i class="iconfont">&#xe50c;</i>
      </div>
      <div class="zhong">
      <div class="hei">
          <span>橙PLUS卡</span>
          <i>开通送￥100 最高省81.8元</i>
          <u>立即开卡 &gt;</u>
      </div>
      <div class="fam">
          <span>欢乐家庭PLUS</span><i>2:1兑换 ></i>
      </div>
      <div class="vip">
          <p>VIP+ <strong>:</strong><span>v+会员享</span> <i>国内免邮 + 双倍积分</i></p>
          <u>&gt;</u>
      </div>
      <div class="vip1">
          <p>入场 <strong>:</strong><span>一人一票，儿童全票，对号入座</span> </p>
      </div>
      <div class="vip2">
          <p>支持 <strong>:</strong><span>在线选座 | 电子票 | 同城满200免邮</span> </p>
      </div>
    </div>
    </section>
    <router-link tag="footer" :to="{name:'ticket',params:{id:detailData.schedular_id}}">
        立即购买
    </router-link>
  </div>
</template>

<script>
import { detailApi } from "@api/shouye";
export default {
  name: "Detail",
  data() {
    return {
      detailData: [],
      addr: [],
      timeData: [],
      id: "",
      city:[]
    };
  },

  activated() {
    let { id } = this.$route.params;
    this.id = id;
    // let id1=sessionStorage.getItem("id")||this.id
    this.handleListData(this.id);
  },
  methods: {
    async handleListData(id) {
      let data = await detailApi(id);
      console.log(data)
      this.detailData = data.data.static_data;
    //   console.log(this.detailData.schedular_id)
      this.addr = data.data.static_data.venue;
      this.timeData = data.data.static_data.show_time_data;
      this.city=data.data.static_data.city;
    }
  }
};
</script>

<style>
section {
  height: 100%;
  overflow: auto;
  position: relative;
}
section .topp {
  width: 100%;
  height: 1.442rem;
  background-color: rgba(0, 0, 0, 0.24);
  -webkit-filter: blur(0.1rem);
  background-size: cover;
  background-repeat: no-repeat;
  position:relative;
}
section  .top {
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0.083rem;
}
section .top .left{
    width: .908rem;height:1.25rem;
    margin-left:.125rem;
}
section  .top .left img {
  width: .908rem;height:1.25rem;
}
section  .top .right {
  margin-left: .125rem;
  flex: 1;width:1.875rem;
  height: 1.25rem;
  display: flex;color:#fff;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
section  .top .right .title {
  font-size: 17px;margin-top:0.042rem;
  color: aliceblue;
}
section  .top .right .price {
  font-size: 17px;width:100%;
  color: aliceblue;
  
}
section  .top .right .price span{
    border:1px solid #fff;
    padding:0.017rem 0.042rem;
}
section .address{
    width:2.875rem;margin:0 auto;
    margin-top:.167rem;
    font-weight:bold;font-size:.133rem;
    display:flex;justify-content:space-between;
}
section .address .zuo{
    width:2.333rem;
}
section .address i{
    padding-top:.25rem;color:tomato;
    font-size:.25rem;
}
section .address .city{
    width:2.875rem;
    margin-top:.042rem;font-size:.133rem;
}
section .address .cityNum{
    margin-top:.042rem;font-size:.1rem;
    font-weight:normal;color:rgb(114, 111, 111);
}
section .zhong{
    width:2.875rem;margin:0 auto;
}
section .zhong .hei{
    height:.367rem;background:black;
    margin-top:0.167rem;border-radius:10px;
    color:#F5DEA9;display:flex;
    justify-content: space-around;
    align-items: center;
}
section .zhong .hei span{
    font-size:.1rem;color:black;
    background:#f8d583;
}
section .zhong .hei i{
    font-style:normal;
    font-size:.117rem;
}
section .zhong .hei u{
    text-decoration: none;
    font-size:.1rem;
}
section .zhong .fam{
    height:.383rem;margin-top:.125rem;font-size:.1rem;
    display:flex;justify-content: space-between;
    align-items: center;
}
section .zhong .fam i{
    font-style:normal;
}
section .zhong .vip{
    height:.392rem;border-top:1px solid #ccc;
    display:flex;justify-content: space-between;
    align-items: center;color:#999;
    white-space:pre-wrap;
}
section .zhong .vip strong{
    font-weight:normal;margin-left:0.042rem;
}
section .zhong .vip span{
    font-size:.1rem;color:black;
    margin-left:.167rem;
}
section .zhong .vip i{
    font-style:normal;font-size:.1rem;
    color:tomato;
}
section .zhong .vip u{
    text-decoration: none;
}
section .zhong .vip1{
    height:.392rem;border-top:1px solid #ccc;
    display:flex;justify-content: space-between;
    align-items: center;color:#999;
    white-space:pre-wrap;
}
section .zhong .vip1 strong{
    font-weight:normal;margin-left:0.042rem;
}
section .zhong .vip1 span{
    font-size:0.117rem;color:black;
    margin-left:.167rem;
}
section .zhong .vip2{
    height:.392rem;border-top:1px solid #ccc;
    display:flex;justify-content: space-between;
    align-items: center;color:#999;
    white-space:pre-wrap;
}
section .zhong .vip2 strong{
    font-weight:normal;margin-left:0.042rem;
}
section .zhong .vip2 span{
    font-size:0.1rem;color:#999;
    margin-left:.167rem;
}
footer{
    height:.458rem;background:tomato;
    margin-top:.333rem;border-radius:.083rem;
    display: flex;justify-content: center;
    align-items: center;font-size:.15rem;
    color:#fff;
}
</style>