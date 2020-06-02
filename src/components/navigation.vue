<!--  -->
<template>
  <div class>
    <van-tabbar v-model="active" active-color="#FF2222" inactive-color="#000" >
      <van-tabbar-item to="/Home">
        <span>{{icon.name}}</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <!--  -->
       <van-tabbar-item to="/wenjuanList">
        <span>{{icon2.name}}</span>
        <template #icon="props">
          <img :src="props.active ? icon2.active : icon2.inactive" />
        </template>
      </van-tabbar-item>
      <!--  -->
       <van-tabbar-item to="/center">
        <span>{{icon3.name}}</span>
        <template #icon="props">
          <img :src="props.active ? icon3.active : icon3.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: 0,
      icon: {
        name: "首页",
        active: require('../assets/images/home/home-active.png'),
        inactive:require('../assets/images/home/home.png'),
      },
      icon2: {
        name: "问卷调查",
        active: require('../assets/images/home/wenjuan-active.png'),
        inactive:require('../assets/images/home/wenjuan.png'),
      },
      icon3: {
        name: "个人中心",
        active: require('../assets/images/home/center-active.png'),
        inactive:require('../assets/images/home/center.png'),
      }
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
</style>
//修改组件样式
<style>
</style>