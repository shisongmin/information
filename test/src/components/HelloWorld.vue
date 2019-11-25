<template>
  <div class="header">
    <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#fff"
    style="width:550px"
    >
    <el-menu-item index="1">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">数据</template>
      <el-menu-item index="2-1">数据目录</el-menu-item>
      <el-menu-item index="2-2">数据集</el-menu-item>
      <el-menu-item index="2-3">数据接口</el-menu-item>
      <el-menu-item index="2-4">数据地图</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">应用</template>
      <el-menu-item index="3-1">创新大赛</el-menu-item>
      <el-menu-item index="3-2">数据集</el-menu-item>
      <el-menu-item index="3-3">数据接口</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">画像</template>
      <el-menu-item index="4-1">创新大赛</el-menu-item>
      <el-menu-item index="4-2">数据集</el-menu-item>
      <el-menu-item index="4-3">数据接口</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">资讯</template>
      <el-menu-item index="4-1">创新大赛</el-menu-item>
      <el-menu-item index="4-2">数据集</el-menu-item>
      <el-menu-item index="4-3">数据接口</el-menu-item>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title">互动</template>
      <el-menu-item index="6-1">创新大赛</el-menu-item>
      <el-menu-item index="6-2">数据集</el-menu-item>
      <el-menu-item index="6-3">数据接口</el-menu-item>
    </el-submenu>
  </el-menu>
  </div>
</template>

<script>
  export default {
      name: 'HelloWorld',
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    width:100%;
    height:400px;
    background-color: aqua
  }
</style>
