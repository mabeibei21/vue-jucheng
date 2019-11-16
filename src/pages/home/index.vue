<template>
  <div class="page">
    
    <header>
      <nav>
        <ul>
          <router-link tag="li" to="/city">
            <i class="iconfont">&#xe50c;</i>
            <span>{{this.$store.state.city.nm}}</span>
          </router-link>
          <router-link tag="li" to="/search">
            <input type="text" />
            <i class="iconfont">&#xe744;</i>
            <span>搜索热门演出</span>
          </router-link>
          <li>
            <img src="img/sdong.gif" />
          </li>
        </ul>
      </nav>
    </header>

<!-- <bei-scroll ref="scroll"> -->
    <div class="section">
      <div class="bs">
        <!---轮播图-->
        <div class="lunbo">
          <img src="img/slun.jpg" />
        </div>
        <!--classify_list-->
        <div class="content">
          <div class="brow">
            <ul>
              <router-link 
              v-for="(item,index) in classify_list" 
              :key="index" 
              :to="{name:item.id<=5?'list':item.id==17?'':item.id==19?'vvv':'',params:{id:item.category_id,name:item.name}}" 
              tag="li">
                <img :src="item.pic" />
                <span>{{item.name}}</span>
              </router-link>
            </ul>
          </div>
          <!--优先购票-->
          <div class="eye">
            <div class="vip">
              <ul>
                <li>
                  <span>优先购票</span>
                  <i>VIP+会员尊享权益</i>
                </li>
                <li>99元/年 &gt;</li>
              </ul>
            </div>
            <div class="vipbottom">
              <div class="stu">
                <img src="img/sfuluo.jpg" />
              </div>
              <div class="szi">
                <h3>弗洛朗·莫特 Florent Mothe 2019演唱会-西安站</h3>
                <p>西安|别克陕西大剧院·戏剧厅</p>
                <h6>
                  <span>11/12 16:00</span>
                  <strong>开始</strong>
                  <i>开售提醒</i>
                </h6>
              </div>
            </div>
          </div>
          <div class="re">
            <span>热门演出</span>
            <i>&gt;</i>
          </div>
          <div class="men">
            <ul>
              <li v-for="(item,index) in hots_show_list" :key="index">
                <img :src="item.pic" />
                <h3>{{item.show_name}}</h3>
              </li>
            </ul>
          </div>
        </div>

        <div class="container">
          <div class="wid">
          <!--巡回演出-->
          <div class="re1">
            <span>巡回演出</span>
            <i>&gt;</i>
          </div>
          <div class="xun">
            <ul class="xun1">
              <li v-for="(item,index) in tour_show_list" :key="index">
                <img :src="item.pic" />
                <h3>{{item.show_name}}</h3>
                <p>{{item.schedular_num}}场巡演</p>
              </li>
            </ul>
          </div>
          <!--会员尊享-->
          <div class="hui">
            <ul>
              <li>
                <i class="iconfont">&#xe606;</i>VIP+会员尊享权益
              </li>
              <li>99元/年 &gt;</li>
            </ul>
          </div>
          <div class="time">
            <h3>
              <span>专属票价</span>
              <i>
                0天
                <b>14</b>:
                <b>14</b>:
                <b>14</b> &gt;
              </i>
            </h3>
            <h3>
              <span>专享折扣</span>
              <u>&gt;</u>
            </h3>
          </div>
          <div class="zhe">
            <ul>
              <li>
                <img src="img/s7.jpg" />
                <p>
                  <span>￥111</span>
                  <del>￥290</del>
                </p>
              </li>
              <li>
                <img src="img/s8.jpg" />
                <p>
                  <span>9.5</span>
                  <del>折</del>
                </p>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <!--为你推荐-->
        <div class="wei">
          <div class="ni">
            为你推荐
          </div>
        </div>
        <div class="intro" v-for="(item,index) in list" :key="index">
          <div class="intro1">
                <div class="tu">
                    <img :src="item.pic">
                </div>
                <div class="zi">
                    <h6>{{item.start_show_time}}<span>-{{item.show_time_top}}</span></h6>
                    <h5>{{item.name}}</h5>
                    <p><span>{{item.city_name}}</span> | {{item.venue_name}}</p>
                    <h4><span>￥{{item.min_price}}</span>起</h4>
                </div>
          </div>
        </div>


      </div>
    </div>
<!-- </bei-scroll> -->
  </div>
  
</template>


<script>
import { shouyeApi,shouyeApire,shouyeApixun,introApi} from "@api/shouye";
import {cityApiSort} from "@api/city";
export default {
  name: "Home",
  data() {
    return {
      classify_list: [],
      operation_list: [],
      hots_show_list:[],
      tour_show_list:[],
      list:[],
      SortList:[],
      list_city_name:''
    };
  },
  async created() {
    let data = await shouyeApi();
    let data1= await shouyeApire();
    let data2= await shouyeApixun();
    let data3=await introApi();
    let city=await cityApiSort();
    this.classify_list = data.data.classify_list;
    this.operation_list = data.data.operation_list;
    //热门演出
    this.hots_show_list=data1.data.hots_show_list;
    //巡回演出
    // console.log(data2.data.tour_show_list)
    this.tour_show_list=data2.data.tour_show_list;
    this.list=data3.data.list;
    //根据地址渲染城市
    this.handleGetHomeList("全国")
  },
  activated(){
    let add=sessionStorage.getItem("cityId");
    this.handleGetHomeList(add);
    // console.log(this.$store.state.city.SortList.name,996)
  },
  methods:{
    async handleGetHomeList(add){
      let data4=await introApi(add);
      this.list=data4.data.list;
      // console.log(this.list,456)
    }
  }
}
</script>
<style>
/*header*/
header {
  top: 0;
  position: relative;
  height: 0.367rem;
  display: flex;
  align-items: center;
  z-index: 10;
  background: #fff;
  justify-content: space-around;
}
header nav {
  width: 100%;
}
header nav ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
header nav ul li:nth-of-type(1) {
  width: 0.5rem;
  height: 0.25rem;
  border: 1px solid #fff;
  border-radius: 0.167rem;
  line-height: 0.25rem;
  display: inline-block;
}
header nav ul li:nth-of-type(1) i {
  font-size: 0.167rem;
  color: #ff6743;
}
header nav ul li:nth-of-type(2) {
  position: relative;
  line-height: 0.25rem;
}
header nav ul li:nth-of-type(2) input {
  width: 2rem;
  height: 0.25rem;
  border-radius: 0.167rem;
  outline: none;
  border: none;
  background: #f5f5f5;
}
header nav ul li:nth-of-type(2) i {
  position: absolute;
  left: 0.083rem;
  width: 0.167rem;
  height: 0.167rem;
  color: #aaa;
}
header nav ul li:nth-of-type(2) span {
  position: absolute;
  left: 0.25rem;
  font-size: 0.117rem;
  color: #aaa;
}
header nav ul li:nth-of-type(3) {
  width: 0.225rem;
  height: 0.208rem;
}
header nav ul li:nth-of-type(3) img {
  width: 0.225rem;
  height: 0.208rem;
}
/**.section */
.section {
  height: 100%;
  flex: 1;
  overflow: auto;
}
/* .section .bs{
  height:100%;flex: 1;
  overflow: auto;
} */
.section .lunbo {
  width: 3.125rem;
  height: 1.633rem;
  margin-bottom: 0.167rem;
}
.section .lunbo img {
  width: 3.125rem;
  height: 1.633rem;
}
.section .content {
  width: 2.875rem;
  margin: 0 auto;
}
.section .content .brow{
  height:1.417rem;overflow:hidden;
}
.section .content .brow ul li {
  text-align: center;width:0.575rem;
  height:0.625rem;float:left;margin-top:0.042rem;
}
.section .content .brow ul li img {
  width: 0.425rem;
  height: 0.425rem;
}
.section .content .brow ul li span {
  display: block;
  font-size: 0.117rem;
}
.section .content .eye {
  height: 1.517rem;
  border: 0.008rem solid rgb(253, 223, 228);
  margin-top: 0.25rem;
  background: rgb(247, 246, 246);
}
.section .content .eye .vip {
  height: 0.333rem;
  border-bottom: 0.008rem solid rgb(245, 231, 231);
}
.section .content .eye .vip ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.333rem;
}
.section .content .eye .vip ul li:nth-of-type(1) {
  margin-left: 0.083rem;
}
.section .content .eye .vip ul li:nth-of-type(1) span {
  font-size: 0.125rem;
  color: #6b4218;
  font-weight: bold;
}
.section .content .eye .vip ul li:nth-of-type(1) i {
  font-style: normal;
  font-size: 0.1rem;
  color: #6b4218;
  margin-left: 0.042rem;
}
.section .content .eye .vip ul li:nth-of-type(2) {
  font-size: 0.1rem;
  color: #6b4218;
  margin-right: 0.083rem;
}
.section .content .eye .vipbottom {
  display: flex;
  justify-content: space-around;
  margin-top: 0.167rem;
}
.section .content .eye .vipbottom .stu {
  width: 0.533rem;
  height: 0.733rem;
}
.section .content .eye .vipbottom .stu img {
  width: 0.533rem;
  height: 0.733rem;
}
.section .content .eye .vipbottom .szi {
  width: 1.967rem;
}
.section .content .eye .vipbottom .szi h3 {
  font-size: 0.117rem;
}
.section .content .eye .vipbottom .szi p {
  font-size: 0.1rem;
  color: #999;
  margin-top: 0.083rem;
  margin-bottom: 0.083rem;
}
.section .content .eye .vipbottom .szi h6 span {
  color: #ff6743;
  font-weight: normal;
}
.section .content .eye .vipbottom .szi h6 strong {
  font-weight: normal;
  color: #999;
  margin-left: 0.083rem;
}
.section .content .eye .vipbottom .szi h6 i {
  font-weight: normal;
  color: #ff6743;
  font-style: normal;
  margin-left: 0.5rem;
  border: 0.008rem solid #ff6743;
  padding: 0.025rem 0.058rem;
  border-radius: 0.083rem;
}
.section .content .nose {
  height: 1.683rem;
  background: rgb(236, 235, 235);
  margin-top: 0.25rem;
}
.section .content .nose .a {
  margin: 0.017rem;
}
.section .content .nose .a:nth-of-type(1) {
  width: 1.375rem;
  height: 0.75rem;
  background: #fff;
  display: flex;
  justify-content: center;
  margin-left: 0.05rem;
  align-items: center;
  float: left;
}
.section .content .nose .a:nth-of-type(2) {
  width: 1.375rem;
  height: 0.75rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  margin-left: 0.017rem;
}
.section .content .nose .a .zi {
  width: 0.767rem;
}
.section .content .nose .a .zi h3 {
  font-size: 0.133rem;
}
.section .content .nose .a .zi p {
  font-size: 0.1rem;
  color: #999;
}
.section .content .nose .a .zi p i {
  font-style: normal;
  color: #ff6743;
}
.section .content .nose .a .tu1 {
  width: 0.35rem;
  height: 0.375rem;
}
.section .content .nose .a .tu1 img {
  width: 0.35rem;
  height: 0.375rem;
}

.section .content .nose .a:nth-of-type(3) {
  width: 0.917rem;
  height: 0.833rem;
  background: #fff;
  text-align: center;
  float: left;
  margin-left: 0.017rem;
}
.section .content .nose .a:nth-of-type(3) .tu1 {
  text-align: center;
  width: 100%;
}
.section .content .nose .a:nth-of-type(3) h3 {
  font-size: 0.133rem;
  margin-top: 0.067rem;
  width: 0.917rem;
}
.section .content .nose .a:nth-of-type(3) p {
  font-size: 0.1rem;
  color: #999;
  margin-top: 0.042rem;
  width: 0.917rem;
}
.section .content .nose .a:nth-of-type(3) p span {
  color: #ff6743;
}
.section .content .nose .a:nth-of-type(3) img {
  width: 0.375rem;
  height: 0.375rem;
  margin-top: 0.042rem;
  text-align: center;
}
.section .content .nose .a:nth-of-type(4) {
  width: 0.917rem;
  height: 0.833rem;
  background: #fff;
  text-align: center;
  float: left;
}
.section .content .nose .a:nth-of-type(4) .tu1 {
  text-align: center;
  width: 100%;
}
.section .content .nose .a:nth-of-type(4) h3 {
  font-size: 0.133rem;
  margin-top: 0.067rem;
  width: 0.917rem;
}
.section .content .nose .a:nth-of-type(4) p {
  font-size: 0.1rem;
  color: #999;
  margin-top: 0.042rem;
  width: 0.917rem;
}
.section .content .nose .a:nth-of-type(4) p span {
  color: #ff6743;
}
.section .content .nose .a:nth-of-type(4) img {
  width: 0.375rem;
  height: 0.375rem;
  margin-top: 0.042rem;
  text-align: center;
}
.section .content .nose .a:nth-of-type(5) .tu1 {
  text-align: center;
  width: 100%;
}
.section .content .nose .a:nth-of-type(5) {
  width: 0.917rem;
  height: 0.833rem;
  background: #fff;
  text-align: center;
  float: left;
}
.section .content .nose .a:nth-of-type(5) h3 {
  font-size: 0.133rem;
  margin-top: 0.067rem;
  width: 0.917rem;
}
.section .content .nose .a:nth-of-type(5) p {
  font-size: 0.1rem;
  color: #999;
  margin-top: 0.042rem;
  width: 0.917rem;
}
.section .content .nose .a:nth-of-type(5) p span {
  color: #ff6743;
}
.section .content .nose .a:nth-of-type(5) img {
  width: 0.375rem;
  height: 0.375rem;
  margin-top: 0.042rem;
  text-align: center;
}
.section .content .re {
  display: flex;
  justify-content: space-between;
  margin-top: 0.167rem;
  margin-bottom: 0.083rem;
}
.section .content .re span {
  font-size: 0.15rem;
  font-weight: bold;
}
.section .content .re i {
  font-style: normal;
  color: #999;
}
.section .content .men {
  overflow: hidden;
  margin-bottom: 0.167rem;
}
.section .content .men ul {
  display: flex;
  overflow-x: auto;
}
.section .content .men ul li {
  margin-right: 0.083rem;
}
.section .content .men ul li img {
  width: 0.883rem;
  height: 1.208rem;
}
.section .content .men ul li h3 {
  font-size: 0.117rem;
  width: 0.883rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.083rem;
}
.section .container {
  background: rgb(240, 239, 239);
}
.section .container .re1 {
  display: flex;
  justify-content: space-between;
  margin-top: 0.167rem;
  margin-bottom: 0.083rem;
  width: 2.875rem;
  margin: 0 auto;
  padding-top: 0.083rem;
}
.section .container .re1 span {
  font-size: 0.15rem;
  font-weight: bold;
}
.section .container .re1 i {
  font-style: normal;
  color: #999;
}
.section .container .xun{
    height:1.617rem;overflow:hidden;
    margin-top:0.083rem;
}
.section .container .xun .xun1{
    display:flex;align-items: center;
    overflow-x:auto;
}
.section .container .xun ul li{
    margin-right:0.167rem;
}
.section .container .xun ul li img{
    width:2.033rem;height:1.158rem;
}
.section .container .xun ul li h3{
    font-size:0.117rem;width:2.033rem;
    white-space:nowrap;overflow:hidden;
    text-overflow:ellipsis;margin-top:0.083rem;
}
.section .container .xun ul li p{
    font-size:0.1rem;color:#999;
    text-align:center;
}
.section .container .hui{
    height:0.333rem;background:#232323;
    color:#f0d1b0;
}
.section .container .hui ul{
    display:flex;justify-content:space-between;
    align-items: center;height:0.333rem;
    width:2.875rem;margin:0 auto;
}
.section .container .hui ul li:nth-of-type(1){
    font-size:0.117rem
}
.section .container .hui ul li:nth-of-type(1) i{
    font-size:0.15rem;
}
.section .container .hui ul li:nth-of-type(2){
    font-size:0.108rem;
}
.section .container .time{
    display:flex;width:2.875rem;margin:0 auto;
    justify-content:space-between;
    align-items: center;margin-top:0.042rem;
}
.section .container .time h3:nth-of-type(1){
    display:flex;justify-content:space-between;
    width:1.95rem;
}
.section .container .time h3:nth-of-type(1) span{
    font-size:0.117rem;
}
.section .container .time h3:nth-of-type(1) i{
    font-size:0.1rem;font-style:normal
}
.section .container .time h3:nth-of-type(2) span{
    font-size:0.117rem;
}
.section .container .time h3:nth-of-type(2) u{
    text-decoration:none;
}
.section .container .zhe{
    height:1.467rem;margin-top:0.083rem;
    margin-bottom:0.083rem;
}
.section .container .zhe ul{
    display:flex;justify-content:space-between;
    width:2.875rem;margin:0 auto;
}
.section .container .zhe ul li:nth-of-type(1) img{
    width:0.883rem;height:1.208rem;
}
.section .container .zhe ul li p{
    text-align:center;
}
.section .container .zhe ul li:nth-of-type(1) p span{
    font-size:0.117rem;color:#ff6743;
}
.section .container .zhe ul li:nth-of-type(1) p del{
    font-size:0.1rem;color:#999;
}
.section .container .zhe ul li:nth-of-type(2) img{
    width:0.883rem;height:1.208rem;
}
.section .container .zhe ul li:nth-of-type(2) p span{
    font-size:0.117rem;color:#ff6743;
}
.section .container .zhe ul li:nth-of-type(2) p del{
    font-size:0.1rem;color:#999;
}
.section .wei{
  height:0.417rem;
}
.section .wei .ni{
  height:0.417rem;
  width:2.875rem;margin:0 auto;
  line-height:0.417rem;font-weight:bold;
  font-size:0.15rem;
}
.section .intro{
  margin-bottom:0.083rem;
}
 .section .intro1{
        height:1.208rem;width:2.875rem;
        margin:0 auto;display:flex;
        margin-top:0.125rem;margin-bottom:0.125rem;
    }
    .section .intro1 .tu{
        width:0.875rem;height:1.183rem;
    }
    .section .intro1 .tu img{
        width:0.875rem;height:1.183rem;
    }
    .section .intro1 .zi{
        margin-left:15px;
    }
    
    .section .intro1 .zi h6{
        font-size:0.142rem;
    }
    
    .section .intro1 .zi h6 span{
        font-size:0.1rem;font-size:#ccc;
        font-weight:normal;margin-left:0.042rem;
    }
    
    .section .intro1 .zi h5{
        font-size:0.125rem;margin-top:0.083rem;
        width:1.875rem;white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    
    .section .intro1 .zi p{
        font-size:0.1rem;margin-top:0.083rem;
    }
    
    .section .intro1 .zi h4{
        font-size:0.1rem;color:#aaa;
        font-weight:normal;margin-top:0.083rem;
    }
    
    .section .intro1 .zi h4 span{
        font-size:0.133rem;color:#ff7643;
        margin-right:0.042rem;
    }
</style>