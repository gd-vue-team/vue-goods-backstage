<template>
  <ml-layout :title="title" :back="true">
    <div class="s">
      商家详情
    </div>
  </ml-layout>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        title: this.$route.query.id ? '添加商家' : '编辑商家',
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>

</style>