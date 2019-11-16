<template>
  <div class="movieDetail">
    <Header title="演出详情" />
    <section>
      <div class="topp" :style="{'background-image':'url('+this.detailData.pic+')'}"></div>
      <div class="top">
        <div class="left">
          <img :src="this.detailData.pic" />
        </div>
        <div class="right">
          <div class="title">{{this.detailData.show_name}}</div>
          <div class="price">{{this.detailData.price_range}}</div>
        </div>
      </div>
      <div class="address">
        <div
          class="date"
        >{{this.timeData.show_time_start_display|filterFan(this.timeData.show_time_end_display)}}</div>
        <div class="city">{{this.addr.venue_name}}</div>
        <div class="cityNum">{{this.addr.venue_address}}</div>
      </div>
    </section>
  </div>
</template>

<script>
import { movieDetailApi } from "@api/show";
export default {
  name: "movieDetail",
  props: ["id"],
  data() {
    return {
      detailData: [],
      addr: [],
      timeData: []
    };
  },

  activated() {
    this.handleListData(this.id);
  },
  methods: {
    async handleListData(id) {
      let movie_data = await movieDetailApi(id);
      this.detailData = movie_data.data.static_data;
      this.addr = movie_data.data.static_data.venue;
      this.timeData = movie_data.data.static_data.show_time_data;
    }
  },
  filters: {
    filterCity: function(city, value) {
      return city + "   |   " + value;
    },
    filterPrice: function(val1, val2) {
      return val1 + "   ——   " + val2;
    }
  }
};
</script>

<style lang="scss">
section {
  height: 100%;
  width: 100%;
  overflow: auto;
  position: absolute;
  .topp {
    width: 100%;
    height: 1.983rem;
    background-color: rgba(0, 0, 0, 0.24);
    -webkit-filter: blur(0.1rem);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .top {
    padding: 0 0.125rem 0.733rem;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    top: 0.417rem;
    .left {
      img {
        width: 0.833rem;
      }
    }
    .right {
      margin-left: 0.167rem;
      flex: 1;
      height: 1.25rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      .title {
        font-size: 17px;
        color: aliceblue;
      }
      .price {
        font-size: 17px;
        color: aliceblue;
      }
    }
  }
}
</style>