<!-- 公共页面 -->
<template>
  <div id="layout">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <navigation></navigation>
    <!-- 加载动画 -->
     <van-loading v-show="loading" type="spinner" color="#1989fa" />
    
  </div>
</template>
<script>
import navigation from "@/components/navigation"
export default {
  name: "layout",
  data() {
    return {};
  },
  components: {
    navigation
  },
  computed: {
    loading() {
      return this.$store.state.load.loading;
    }
  }
};
</script>
<style>
#layout {
  height: 100%;
}
</style>