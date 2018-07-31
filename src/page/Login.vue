<template>
    <div class="us_body">
     <el-form :model="user" status-icon :rules="rules" ref="ruleForm2" label-width="130px" class="demo-ruleForm">
            <el-form-item prop="userName">
                <el-input placeholder="用户名" icon="coffee" v-model="user.userName"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input placeholder="密码" type="password" v-model="user.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                <el-button @click="signForm('ruleForm2')">注册</el-button>
            </el-form-item>
     </el-form>
    </div>
</template>

<script>
import {login} from '@/api/load-data.js'
export default {
  data () {
    var validateUserName = (rule,value,callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    var validatePassword = (rule,value,callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      user: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [{
          validator: validateUserName,trigger: 'blur'
        }],
        password: [{
          validator: validatePassword,trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          login(this.user).then(res => {
            if (res.success) {
              this.$message.success(res.message)
              sessionStorage.setItem('user', JSON.stringify(res.data.user))
              // this.$store.commit('setUser', JSON.parse(sessionStorage.getItem('user')))
              localStorage.setItem('access_token', true)
              setTimeout(() => {
                localStorage.removeItem('access_token')
              }, 60 * 1000 * 20)
              this.$router.push('/')
            } else {
              this.$message.error(res.message)
            }
          }).catch(err => -1)
        } else {
          console.log('fault')
        }
      })
    },
    signForm () {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
.demo-ruleForm{
  width:300px;
  margin:0 auto;
  padding-top:100px;
  text-align: center
}
.us_body{
  height:100%;
  width:100%;
  background:rgba(0, 0, 0, .5)
}
</style>