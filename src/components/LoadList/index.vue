<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    :immediate-check="false"
    @load="onLoad"
  >
    <slot></slot>
  </van-list>
</template>

<script>
export default {
  props: {
    page: {
      type: Number
    },
    totalpage: {
      type: Number
    }
  },
  data() {
    return {
      loading: false,
      finished: false,
      last_page: 1
    };
  },
  created() {
    this.last_page = this.page;
  },
  methods: {
    onLoad() {
      if (this.page > this.totalpage) {
        this.finished = true;
      } else {
        if (this.page == this.last_page) {
          this.loading = false;
          return;
        } else {
          this.$emit("loadlist");
          this.loading = false;
          this.last_page = this.page;
        }
      }
    }
  }
};
</script>