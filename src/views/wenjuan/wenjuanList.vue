<!-- 问卷调查列表 -->
<template>
  <div class="wenjuanList">
    <questionList v-for="(item,index) in list" :key="index" :details="item"></questionList>
  </div>
</template>

<script>
import questionList from "@/components/questionList";

import { get_questionList,questionCategoryList } from "@/api/api";
export default {
  components: { questionList },
  data() {
    return {
      list: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {
    //   获取问卷类型列表
    get_questionCategoryList() {
      let params = {
        pagesize: 100
      };
      questionCategoryList(params).then(res => {
        console.log(res.data, "-----获取问卷列表------");
        this.list = res.data.items;
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.get_questionCategoryList();
  },
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
.wenjuanList {
  width: 100%;
  // margin: 0 auto;
}
</style>
<!-- 修改组件样式 -->
<style>
</style>