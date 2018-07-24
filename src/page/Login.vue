<template>
    <div>
     <el-form :model="user" status-icon :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="user.account"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="user.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                <el-button @click="signForm('ruleForm2')">注册</el-button>
            </el-form-item>
     </el-form>
    </div>
</template>

<script>
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
        account: '',
        password: ''
      },
      rules: {
        username: [{
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
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          console.log('success')
          await this.$http.post('/apis/login',this.user).then((res) => {
            console.log(res.data.url)
            if (res.data.state === 1) {
              this.$message.error(res.data.message)
            } else {
              this.$store.commit('setToken','true');     //改变token状态
              let redirect = decodeURIComponent(this.$route.query.redirect || '/index') // 获取登录成功后要跳转的路由。
              this.$router.push({
                path: redirect
              })
            } 
          })
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

</style>