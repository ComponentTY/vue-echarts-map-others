<template>
  <div>
    <el-card>
      <div class="title">双向数据绑定V-model</div>
      <el-input v-model="msg" placeholder='输入什么下面显示什么'></el-input>
      <div>在这里显示内容~~~~{{msg}}</div>
    </el-card>
    <el-card>
      <div class="title">指令操作</div>
      <div>v-if v-else v-else-if</div>
      <el-card>
        num: {{num}} showFlag: {{showFlag}} showFlag1: {{showFlag1}}
        <div v-if="showFlag" style="color:#00f">我是v-if为true时显示的内容</div>
        <div v-else-if='showFlag1' style="color:#f00">我是v-else-if为true时显示的内容</div>
        <div v-else style="color:#0f0">我是v-else显示的内容</div>
        <el-button @click="clickMe">clickMe</el-button>
      </el-card>
    </el-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '',
        showFlag: false,
        showFlag1: false,
        num: 0
      }
    },
    created () {
      this.$store.commit('setActiveMenu', '/vue')
    },
    methods: {
      clickMe () {
        this.num++
        if (this.num === 1) {
          this.showFlag = true
          this.showFlag1 = false  
        }
        if (this.num === 2) {
          this.showFlag = false
          this.showFlag1 = true  
        }
        if (this.num === 3) {
          this.showFlag = false
          this.showFlag1 = false
          this.num = 0
        }
      }
    }
  }
</script>

<style scoped>

</style>