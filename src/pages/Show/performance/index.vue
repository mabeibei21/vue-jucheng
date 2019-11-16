<template>
  <div class="performance">
    <Header title="演出兑换" />
    <div class="search">
      <div class="inp">
        <span class="iconfont">&#xe654;</span>
        <input type="text" placeholder="搜索热门演出" v-model="value" />
      </div>
      <div class="city">
        <span class="iconfont">&#xe63a;</span>
        <span>城市</span>
        <span class="iconfont">&#xe634;</span>
      </div>
    </div>
    <BScroll ref="scroll">
      <div class="section" ref="movieBody">
        <ul>
          <router-link
            v-for="item in movieList"
            :key="item.schedular_id"
            :to="'/movieDetail/'+item.schedular_id"
            tag="li"
          >
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
          </router-link>
        </ul>
      </div>
    </BScroll>
  </div>
</template>

<script>
// import BScroll from "better-scroll";
import { performanceApi } from "@api/show";
import { filter } from "minimatch";
import { throttle } from "@utils/optimize";
import { async } from "q";
export default {
  name: "performance",
  data() {
    return {
      movieList: [],
      value: "",
      page: 1
    };
  },

  filters: {
    filterCity: function(city, value) {
      return city + "   |   " + value;
    }
  },
  methods: {
    async handleListData(cityId, page) {
      let movie_data = await performanceApi(cityId, this.page);
      this.movieList = movie_data.data.list;
    }
  },
  activated() {
    this.handleListData(228, this.page);
  },
  watch: {
    value(newValue) {
      throttle(async () => {
        let data = await performanceApi(228, this.page, newValue);
        this.movieList = data.data.list ? data.data.list : [];
        console.log(1);
      }, 300);
    },
    movieList() {
      this.$refs.scroll.handleRefreshDown();
    }
  },
  mounted() {
    this.page = 1;
    var arr = [228, 226];
    var index = parseInt(Math.random() * 5);
    this.$refs.scroll.handleScroll();
    this.$refs.scroll.handlepullingDown(() => {
      this.handleListData(226, this.page);
    });
    // 上拉加载更多
    this.$refs.scroll.handlepullingUp(() => {
      this.page = 2;
      console.log(1231);
      this.handleListData(228, this.page);
    });
  }
};
</script>

<style lang="scss">
.search {
  margin-top: -1px;
  position: relative;
  z-index: 1;
  height: 0.417rem;
  padding: 0.035rem 0.083rem;
  display: flex;
  align-items: center;
  background: #ffff;
  .inp {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 0.167rem;
    input {
      flex: 1;
      border: none;
      outline: none;
      border-bottom: 1px solid #666666;
      padding: 0.042rem;
    }
  }
  .city {
    color: #666666;
    span {
      &:nth-of-type(1) {
        color: #d8d8d8;
      }
    }
  }
}
.section {
  position: absolute;
  top: 1rem;
  bottom: -5.2rem;
  left: 0;
  right: 0;
  background: #f5f5f5;
  ul {
    margin-bottom: 2.5rem;
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
</style>