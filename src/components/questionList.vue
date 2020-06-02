<!--  -->
<template>
  <div class="questionList">
    <router-link :to="{path:'/questionDetail',query:{id:details.id}}">
      <div>{{details.name}}</div>
      <!-- <div>{{details.updatetime}}</div> -->
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Object
    }
  },
  components: {},
  data() {
    return {
      IMG_PATH: process.env.VUE_APP_IMG_PATH
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
.questionList {
  width: 92%;
  background: white;
  margin: 24px auto;

  box-sizing: border-box;
  padding: 28px 24px;
  box-shadow:0px 7px 10px rgba(129,129,129,0.3);
  border-radius:20px 20px 20px 20px;
  > a {
    > div:nth-child(1) {
      font-size: 30px;
      color: #333;
      margin-bottom: 24px;
    }
    > div:nth-child(2) {
      font-size: 24px;
      color: #8b8b8b;
    }
  }
}
</style>
<style>
</style>