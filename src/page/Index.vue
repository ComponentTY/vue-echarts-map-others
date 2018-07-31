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
.item{
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
}
.item:hover{
  background: rgba(67, 74, 80);
}
.item i {
  color:#fff;
}
.us-header{width:100%}
.title{
  width:1500px;text-align:center;
  font-size:24px;
  color:rgba(192, 65, 125, 0.7)
}
.left {float: left;}
.right{float: right;}
.icon{
  vertical-align: middle;
  width:50px;
  height:50px;
  border-radius: 50%;
}
</style>
<template>
<div>
  <el-header>
    <div class="us-header">
      <div class="left">Wty ♥♡♥♡♥♡ Fwt</div>
      <div class="left title">web前端技术总结</div>
      <div class="right">
        <el-dropdown>
          <span class="el-dropdown-link" style="cursor:pointer">
            {{this.user.userName}}
            <img src="../assets/images/ourSlef.jpg" alt="" class="icon">
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>账号信息</el-dropdown-item>
            <el-dropdown-item>
              <span @click="loginout">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </el-header>
<el-container style="height: 100%">
  <div class="aisde-wrap">
    <el-aside :style="{backgroundColor: 'rgb(238, 241, 246)', width: isCollapse ? '60px' : '200px'}">
      <el-menu :collapse="isCollapse" mode="vertical" style="height:100%;" background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" router :default-active='$store.state.activeMenu'>
         <div class="item" style="height:40px;display:flex;" @click="toggleClick"><i class="el-icon-menu"></i></div>
         <el-menu-item index="/charts">
            <i class="el-icon-rank"></i>
            <span slot="title">echarts图表</span>
          </el-menu-item>
          <el-menu-item index="/map">
            <i class="el-icon-location-outline"></i>
            <span slot="title">高德地图</span>
          </el-menu-item>
          <el-menu-item index="/vue">
            <i class="el-icon-view"></i>
            <span slot="title">vue相关</span>
          </el-menu-item>
          <el-menu-item index="/others">
            <i class="el-icon-document"></i>
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


<script>
  export default {
    data() {
      return {
        isCollapse: false,
        user: {}
      }
    },
    mounted () {
      this.user = JSON.parse(sessionStorage.getItem('user'))
    },
    methods: {
      toggleClick () {
        this.isCollapse = !this.isCollapse
      },
      loginout () {
        localStorage.removeItem('access_token')
        if (!localStorage.getItem('access_token')) {
          this.$router.push('/login')
        }
      }
    }
  };
</script>