<template>
  <div id="footer">
    <ul>
      <div class="full" v-show="show">
        <van-action-sheet v-model="show" cancel-text="取消" @cancel="onCancel" :actions="actions">
          <div class="inText">
            <div>
              <label>卡号</label>
              <input type="text" name id />
            </div>
            <div>
              <label>密码</label>
              <input type="text" name id />
            </div>
          </div>
          <span></span>
        </van-action-sheet>
      </div>
      <router-link tag="li" :key="tabbars[0].id" :to="tabbars[0].path">{{tabbars[0].text}}</router-link>
      <li @click="changeBox()">{{tabbars[1].text}}</li>
      <router-link tag="li" :key="tabbars[2].id" :to="tabbars[2].path">{{tabbars[2].text}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  data() {
    return {
      actions: [
        { disabled: true },
        { name: "绑定欢聚橙卡" },
        { color: "#000000" }
      ],
      show: false,
      tabbars: [
        {
          id: 0,
          text: "购买新卡",
          path: "/gatherCard"
        },
        {
          id: 1,
          text: "绑定新卡"
        },
        {
          id: 2,
          text: "我的卡包",
          path: "/myCard"
        }
      ]
    };
  },
  methods: {
    changeBox() {
      this.show = !this.show;
    },
    onCancel() {
      this.show = false;
      Toast("cancel");
    }
  }
};
</script>

<style lang="scss" scoped>
.full {
  position: absolute;
  height: 100%;
  width: 100%;
  .inText {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    div {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    input {
      width: 300px;
      height: 0.167rem;
      margin: 0.083rem;
      border: none;
      border-bottom: 1px solid #666666;
    }
  }
}
#footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}
#footer ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  height: 0.417rem;
  font-size: 15px;
  background: #ffffff;
  border-top: 1px solid #cccccc;
}
#footer ul .router-link-active {
  color: #ff6743;
}
</style>