<template>
  <div class="zong">
    <Header title="城市" icon/>
    <div class="city_container" ref="city_container">
      <div class="city_body">
        <!--热门城市-->
        <div class="hot_city">
          <div class="hot_title">热门城市</div>
          <div class="hot_city_list">
            <div class="hot_city_name" v-for="(item,index) in hotList" :key="index">{{item.name}}</div>
          </div>
        </div>
        <!--城市列表-->
        <div class="city_list" ref="city_list">
          <div class="city_list_item" v-for="item in SortList" :key="item.id">
            <div class="city_title_letter">{{item.id}}</div>
            <div class="city_list_name">
              <v-touch 
              tag="div" @tap="handleCityTo(child)"
                class="city_list_name_item"
                v-for="(child) in item.list"
                :key="child.id"
              >{{child.name}}</v-touch>
            </div>
          </div>
        </div>

        <!--城市列表下标-->
        <div class="city_list_index">
          <v-touch tag="div" @tap="handleTo(index)" class="index_item" v-for="(item,index) in SortList" :key="item.id">{{item.id}}</v-touch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "City",
  created() {
    console.log(this.$store.state);
    if (
      !(sessionStorage.getItem("hotList") && sessionStorage.getItem("SortList"))
    ) {
      this.$store.dispatch("city/handleGetCityList");
      this.$store.dispatch("city/handleGetSortList");
    }
  },
  computed: {
    ...mapState({
      hotList: state => state.city.hotList,

      SortList: state => state.city.SortList
    })
  },
  methods: {
    handleTo(index){
      console.log(index);
      let t=this.$refs.city_list.querySelectorAll(".city_title_letter")
      let indexx;
      for(var i =0;i<t.length;i++){
        if(t[i].innerText==index){
          indexx = i;
          break;
        }
      }
      let top=t[indexx].offsetTop;
      this.$refs.city_container.scrollTop=top-44;
    },
    handleCityTo(city){
      this.$router.push("./home");
      this.$store.commit("city/handleUpdateCityInfo",city)
    }
  }
};
</script>
<style>
.zong{
  height: 100%;
}
.city_body {
  background: #ebebeb;
  /* height: 100%; */
  

}
.city_container{
  height: 100%;  flex: 1;
  overflow: auto;
  /* padding-top:0.367rem */
}
/*热门城市*/
.hot_title,
.city_title_letter {
  line-height: 0.25rem;
  padding-left: 0.208rem;
  font-size: 0.117rem;
}
.hot_city_list,
.city_list_name {
  width: 96%;
  background: #f5f5f5;
  padding-bottom: 0.133rem;
  padding-right: 0.067rem;
  display: flex;
  flex-wrap: wrap;
}
.hot_city_name {
  margin-top: 0.125rem;
  margin-left: 0.108rem;
  width: 0.792rem;
  height: 0.275rem;
  background: #fff;
  text-align: center;
  line-height: 0.275rem;
  font-size: 0.117rem;
  border: 0.008rem solid #e6e6e6;
}
.city_list > div {
  width: 100%;
}
.city_list_name_item {
  line-height: 0.375rem;
  margin-left: 0.125rem;
  width: 100%;
  border-bottom: 0.017rem solid #e6e6e6;
  font-size: 0.117rem;
}
/*城市列表下标*/
.city_list_index {
  position: fixed;
  right: 0;
  top: 0.667rem;
}
.city_list_index > div {
  padding: 0.042rem 0.042rem;
  font-size: 0.1rem;
}
</style>