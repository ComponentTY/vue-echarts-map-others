
<template>
<div>
  <el-header>
    <div>hello我让领导</div>
  </el-header>
<el-container style="height: 100%">
  <div class="aisde-wrap">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :collapse="isCollapse" mode="vertical" style="height:100%;" background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" router>
         <el-menu-item index="/charts">
            <i class="el-icon-setting"></i>
            <span slot="title">图表</span>
          </el-menu-item>
          <el-menu-item index="/map">
            <i class="el-icon-setting"></i>
            <span slot="title">地图</span>
          </el-menu-item>
          <el-menu-item index="/vue">
            <i class="el-icon-setting"></i>
            <span slot="title">vue相关</span>
          </el-menu-item>
          <el-menu-item index="/others">
            <i class="el-icon-setting"></i>
            <span slot="title">其他</span>
          </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
  <el-main style="width:1000px">
    <router-view/>
  </el-main>
</el-container>
</div>
</template>
<style>
#app {
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
  width:100%;
}
.aside-wrap{
    width: 200px;
    min-width: 200px;
    overflow-x: hidden;
  }
.el-aside {
  box-sizing: content-box;
  color: #333;
  height:100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  border-right: 0;
  width: 200px;
  min-height: 100%;
}
  
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      }
    }
  };
</script>