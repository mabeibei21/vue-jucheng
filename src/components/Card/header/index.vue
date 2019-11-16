<template>
  <div class="header">
    <div class="nav">
      <v-touch @tap="handleBack()" class="iconfont">&#xe60b;</v-touch>
      <span>{{title}}</span>
      <span class="iconfont">&#xe626;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "购买新卡"
    }
  },
  methods: {
    handleBack() {
      this.$router.back();
    }
  }
};
</script>

<style>
.nav {
  position: relative;
  z-index: 10;
  display: flex;
  height: 0.333rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.046rem 0.083rem;
  background: #fff;
}

.nav span {
  display: block;
}

.nav span:nth-of-type(2) {
  font-size: 0.125rem;
}

.iconfont {
  font-size: 0.167rem;
}

.iconSize {
  padding-top: 0.042rem;
  font-size: 0.1rem;
}
</style>