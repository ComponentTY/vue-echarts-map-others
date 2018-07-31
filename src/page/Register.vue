<template>
    <div>
        <el-form :model="user" status-icon :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="user.userName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="user.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="user.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {register} from '@/api/load-data.js'
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.user.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.user.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    return {
      user: {
        userName: '',
        password: '',
        checkPass: ''
      },
      rules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        userName: [
          { validator: validateUserName, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log('success')
          let {userName, password} = this.user
          let data = {}
          data.userName = userName
          data.password = password
          // let result = await register(data)
          // console.log(result)
          register(data).then(res => {
            if (res.success) {
              this.$message.success(res.message + '页面将于三秒后跳转到登录页面')
              setTimeout(() => {
                this.$router.push('/login')
              }, 3000)
            } else {
              this.$message.error(res.message)
            }
          })
          // await this.$http.post('/apis/login', parmas).then((res) => {
          //   console.log(res.data)
          //   res.data.state === 0 ? this.$message.success('注册成功,三秒后自动跳转到登录页面') : this.$message.error('用户名已存在')
          //   if (res.data.state === 0) {
          //     setTimeout(() => {
          //       this.$router.push('/login')
          //     },3000)
          //   } else {
          //     this.$refs[formName].resetFields()
          //   }
          // })
        } else {
          console.log('fault')
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>

</style>