<template>
  <div class="page">
    <Header title="我的票夹" icon />
    <section>
      <div class="box">
        <div class="zhao"
          v-for="(item,index) in list"
          :key="index"
        >
          <div class="tu">
            <img :src="item.share_data.share_pic" />
          </div>
          <div class="zi">
            <!-- <h6>
              {{item.show_time_top}}
              <span>{{item.end_show_time}}</span>
            </h6> -->
            <h5>{{item.share_data.share_title}}</h5>
            <p>
              <span>{{item.static_data.city.city_name}}</span>
              | {{item.static_data.venue.venue_name}}
            </p>
            <h4>
              <span>￥{{item.static_data.low_price}}</span><strong>已购票</strong>
            </h4>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// 注释
import { detailApi } from "@api/shouye";
export default {
  name: "Ticket",
  data() {
    return {
      id:'',
      list:JSON.parse(sessionStorage.getItem("ticket"))||[]
    };
  },
   async activated() {
    let { id } = this.$route.params;
    this.id = id;
    let data = await detailApi(id);
    this.list.push(data.data);
    sessionStorage.setItem("ticket",JSON.stringify(this.list));
  }
};
</script>
<style>
section{
    height:100%;flex:1;
    overflow:auto;
}
section .zhao {
  height: 1.208rem;
  width: 2.875rem;
  margin: 0 auto;
  display: flex;
  margin-top: 0.125rem;
  margin-bottom: 0.125rem;
}
section .zhao .tu {
  width: 0.875rem;
  height: 1.183rem;
}
section .zhao .tu img {
  width: 0.875rem;
  height: 1.183rem;
}
section .zhao .zi {
  margin-left: 15px;
}

section .zhao .zi h6 {
  font-size: 0.142rem;
}

section .zhao .zi h6 span {
  font-size: 0.1rem;
  font-size: #ccc;
  font-weight: normal;
  margin-left: 0.042rem;
}

section .zhao .zi h5 {
  font-size: 0.133rem;
  margin-top: 0.083rem;
}

section .zhao .zi p {
  font-size: 0.1rem;
  margin-top: 0.083rem;
}

section .zhao .zi h4 {
  font-size: 0.1rem;
  color: #aaa;
  font-weight: normal;
  margin-top: 0.083rem;
}

section .zhao .zi h4 span {
  font-size: 0.133rem;
  color: #ff7643;
  margin-right: 0.042rem;
}
</style>