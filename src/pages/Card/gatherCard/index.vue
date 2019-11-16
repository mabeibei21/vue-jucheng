<template>
  <div class="gatherCard">
    <Header title="购买新卡" />
    <div class="section">
      <div class="warp">
        <div class="container">
          <div class="banner">
            <img v-for="(item,index) in swiperList" :src="item.mb_image" :key="index" />
          </div>
        </div>
        <div class="listTop">
          <v-touch tag="div" class="vip" @tap="handleInVip()
            ">
            <span>VIP+&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="vip1">开通VIP+，演出随心看</span>
          </v-touch>
          <ul>
            <li v-for="(item,index) in vipList" :key="index">
              <span class="iconfont">&#xf01be;</span>
              <p class="iconSize">{{item.benefits_desc}}</p>
            </li>
          </ul>
        </div>
        <div class="cardBorder">
          <router-link
            class="listMain"
            v-for="(item) in cardList.store_card"
            :key="item.id"
            :to="'/cardDetail/'+item.id+'/'+item.name"
            tag="div"
          >
            <div class="main_top">
              <span class="vip">{{item.card_type_name}}</span>
              <span class="vip1">{{cardList.store_title}}</span>
            </div>
            <div class="card">
              <div class="cardLeft fl">
                <img :src="item.card_image" alt />
              </div>
              <div class="cardRight fl">
                <h6>{{item.name}}</h6>
                <p>有效期： 长期有效</p>
                <div>
                  <span class="fl">{{item.card_price}}</span>
                  <span class="fr" v-text="item.give_vip==1?'赠VIP+':''"></span>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div class="cardBorder">
          <router-link
            class="listMain"
            v-for="(item) in cardList.cate_card"
            :key="item.id"
            :to="'/cardDetail/'+item.id+'/'+item.name"
            tag="div"
          >
            <div class="main_top">
              <span class="vip">{{item.card_type_name}}</span>
            </div>
            <div class="card">
              <div class="cardLeft fl">
                <img :src="item.card_image" alt />
              </div>
              <div class="cardRight fl">
                <h6>{{item.name}}</h6>
                <p>有效期： 长期有效</p>
                <div>
                  <span class="fl">{{item.card_price}}</span>
                  <span class="fr" v-text="item.give_vip==1?'赠VIP+':''"></span>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div class="main_class">
          <span class="vip">品类·</span>
          <span class="vip">次卡</span>
        </div>
        <div class="cardBorder">
          <router-link
            class="listMain"
            v-for="(item) in cardList.once_card"
            :key="item.id"
            :to="'/cardDetail/'+item.id+'/'+item.name"
            tag="div"
          >
            <div class="card">
              <div class="cardLeft fl">
                <img :src="item.card_image" alt />
              </div>
              <div class="cardRight fl">
                <h6>{{item.name}}</h6>
                <p>有效期： 长期有效</p>
                <div>
                  <span class="fl">{{item.card_price}}</span>
                  <span class="fr" v-text="item.give_vip==1?'赠VIP+':''"></span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <TabBar />
  </div>
</template>


<script>
import TabBar from "@components/Card/tabBarCard";
import { cardList1Api, cardList2Api, cardList3Api } from "@api/card";

export default {
  name: "gatherCard",
  async created() {
    let data1 = await cardList1Api();
    let data2 = await cardList2Api();
    let data3 = await cardList3Api();
    this.swiperList = data1.data;
    this.cardList = data2.data;
    this.vipList = data3.data.vip_rule_data.equity_list;
  },
  data() {
    return {
      swiperList: [],
      cardList: [],
      vipList: {}
    };
  },
  methods: {
    handleInVip() {
      this.$router.push("/inVip");
    },
    handleCardDetail() {
      console.log(123);
      this.$router.push("/cardDetail");
    }
  },

  components: {
    TabBar
  }
};
</script>

<style lang="scss" scoped>
.gatherCard {
  height: 100%;
}
.section {
  height: 100%;
  flex: 1;
  overflow: auto;
  position: absolute;
}
.cardBorder {
  border-bottom: 1px solid #666666;
}
.warp {
  padding: 0 0 0.733rem;
}
.container {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: url("https://m.juooo.com/static/img/card_market_top_bg.dd98990.png");
  background-size: 100%;
  background-position-y: -0.333rem;
  background-repeat: no-repeat;
  height: 2.117rem;
  padding: 0.125rem;
}
.banner {
  img {
    position: absolute;
    width: 2.875rem;
    height: 1.5rem;
  }
}
.listTop {
  padding: 0.125rem;
  div {
    margin-bottom: 0.167rem;
  }
  ul {
    height: 0.567rem;
    width: 100%;
    overflow: auto;
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      flex-direction: column;
      height: 100%;
      span {
        height: 0.383rem;
        width: 0.383rem;
        padding: 0 0.167rem;
        text-align: center;
        line-height: 0.383rem;
        color: #ff6734;
      }
    }
  }
}
.main_class {
  padding: 0.125rem;
}
.vip {
  font-size: 0.167rem;
  font-weight: bold;
  padding-right: 0.083rem;
}
.vip1 {
  font-size: 0.117rem;
  color: #666666;
}
.listIcon {
  width: 0.383rem;
  height: 0.383rem;
  display: block;
  // background: url();
  background-size: 1.8rem 1.3rem;
  background-position: 50px -3px;
}
.listMain {
  padding: 0.125rem;
}
.cardLeft {
  margin-right: 0.167rem;
  img {
    width: 1.333rem;
    height: 0.833rem;
  }
}
.main_top {
  margin-bottom: 0.25rem;
}
.card {
  height: 0.833rem;
}
.cardRight {
  height: 0.833rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  h6 {
    font-size: 0.142rem;
  }
  p {
    color: #666666;
    font-size: 0.1rem;
  }
  div {
    width: 0.833rem;
    font-size: 0.133rem;
    color: #ff6734;
  }
}
</style>
