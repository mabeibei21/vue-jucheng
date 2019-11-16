<template>
  <div class="myCard">
    <Header title="我的卡包" />
    <div class="container">
      <ul>
        <router-link
          v-for="(item,index) in this.cartData"
          :key="index"
          tag="li"
          :to="'/cardDetail/'+item.card.id+'/'+item.card.name"
        >
          <van-card
            :price="item.card.card_price"
            :desc="item.card.binding_clues"
            :title="item.card.name"
            :thumb="item.card.card_image"
          ></van-card>
        </router-link>
      </ul>
    </div>
    <TabBar />
  </div>
</template>

<script>
import axios from "axios";
import TabBar from "@components/Card/tabBarCard";
export default {
  name: "myCard",
  components: {
    TabBar
    // Section
  },
  data() {
    return {
      cartData: []
    };
  },
  filters: {
    getTime: val => {
      return val + new Date().toDateString() + "";
    }
  },
  created() {
    axios({
      method: "get",
      url: "http://localhost:3000/card"
    }).then(res => {
      this.cartData = res.data;
      console.log(this.cartData[0]);
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  overflow: auto;
  position: absolute;
  bottom: 0.333rem;
}
</style>
