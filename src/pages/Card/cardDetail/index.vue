<template>
  <div class="CardDetail">
    <Header :title="name" />
    <section>
      <div class="banner">
        <div class="bannerTop">
          <!-- <div class="top">
            <h3>{{detailData.name}}</h3>
            <span>{{detailData.effect_type==0?'次卡':'储值卡'}}</span>
          </div>-->
          <!-- <div class="bottom">
            <span>￥999</span>
            <span>有效期：12个月</span>
          </div>-->
          <img :src="detailData.card_image" alt />
        </div>
        <div class="bannerMiddle">
          <h3 @click="putUpCardData()">立即购卡</h3>
        </div>
        <div class="bannerBottom">
          <span>
            30张兑换券&nbsp;&nbsp;
            <i>33元</i>&nbsp;&nbsp;
            <u>使用规则</u>
          </span>
        </div>
      </div>
      <div class="list">
        <v-touch class="listTitle" tag="div" @tap="goToMovieDetail">
          <span style="font-weight:bold;font-size:20px;">演出兑换</span>
          <span>&gt;</span>
        </v-touch>
        <ul>
          <li v-for="item in detailListData" :key="item.id">
            <div class="left">
              <img :src="item.pic" />
            </div>
            <div class="right">
              <div class="center">
                <h6>{{item.month_day|filterMD}}&nbsp;&nbsp;</h6>
                <span>&nbsp;&nbsp;{{item.month_day2|filterD}}</span>
              </div>
              <div class="top">{{item.schedular_name}}</div>
              <div class="middle">{{item.city_name|filterCity(item.venue_name)}}</div>
              <div class="bottom">
                <span class="int">
                  {{item.leastDiscount}}
                  <span
                    class="price"
                    style="font-size: 12px;color: #666666;margin-left: 10px;"
                  >起</span>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <footer>
      <span @click="putUpCardData()">立即购卡</span>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import { detailCardApi, detailCardListApi } from "@api/card";

export default {
  name: "CardDetail",
  props: ["id", "name"],
  data() {
    return {
      detailData: [],
      detailListData: []
    };
  },

  activated() {
    this.handleDetailData(this.id);
  },
  methods: {
    async handleDetailData(id) {
      let detailData = await detailCardApi(id);
      let detailListData = await detailCardListApi(id);
      this.detailData = detailData.data.card_group_info;
      this.detailListData = detailListData.data.data;
    },
    goToMovieDetail() {
      this.$router.push("/performance");
    },
    putUpCardData() {
      console.log("执行了");
      let data = this.detailData;
      console.log(data);
      axios({
        method: "post",
        url: "http://localhost:3000/card",
        data: {
          card: data
        }
      });
      this.$router.push("/myCard");
    }
  },
  filters: {
    filterCity: function(city, value) {
      return city + "|" + value;
    }
  }
};
</script>

<style lang="scss">
section {
  position: absolute;
  overflow: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.417rem 0 0.367rem;
  background: #f5f5f5;
  .banner {
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 0 0.25rem;
    .bannerTop {
      background: #f5f5f5;
      width: 100%;
      height: 1.367rem;
      position: relative;
      color: #f5f5f5;
      .top {
        padding-left: 0.125rem;
        width: 80%;
        position: absolute;
        top: 0.15rem;
        z-index: 1;
        h3 {
          display: inline;
          font-size: 20px;
        }
      }
      .bottom {
        width: 90%;
        z-index: 1;
        padding: 0 0.125rem;
        position: absolute;
        bottom: 0.15rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      img {
        width: 2.683rem;
        height: 1.417rem;
      }
    }
    .bannerMiddle {
      width: 100%;
      background: #ff9a34;
      margin: 0.125rem 0.25rem;
      border-radius: 20px;
      h3 {
        height: 45px;
        color: aliceblue;
        line-height: 45px;
        text-align: center;
      }
    }
    .bannerBottom {
      font-size: 14px;
      i {
        font-style: normal;
        color: #ff6743;
      }
      u {
        font-size: 12px;
        color: #666666;
      }
    }
  }
  .listTitle {
    height: 0.375rem;
    padding: 0 0.125rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    padding: 0.083rem;
    li {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .left {
        img {
          width: 0.875rem;
        }
      }
      .right {
        height: 1.183rem;
        padding-left: 0.167rem;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        .top {
          font-size: 16px;
          font-weight: bold;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .center {
          h6 {
            display: inline-block;
            font-size: 16px;
          }
          font-size: 12px;
        }
        .middle {
          font-size: 14px;
          color: #666666;
        }
        .bottom {
          font-size: 14px;
          color: #ff7919;
        }
      }
    }
  }
}
footer {
  width: 100%;
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  height: 0.367rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff9a34;
  color: #f5f5f5;
  font-size: 20px;
}
</style>