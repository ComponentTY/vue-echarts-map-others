const mongoose = require('./moogo.js')

exports.getList = async (ctx, next) => {
  await mongoose.find({}, {name:1, age:1, _id:0}).then(res => {
    ctx.body = res
  }).catch(err => {
    ctx.body = err
  })
}
exports.login = async (ctx, next) => {
  let {userName, password} = ctx.request.body
  await mongoose.find({userName: userName}, {userName:1, password:1, _id:1}).then(res => {
    if (res.length) {
      if (res[0].userName === userName && res[0].password === password) {
        ctx.body = {
          code: 200,
          success: true,
          message: '登录成功',
          data: {
            user: {
              'userName': res[0].userName,
              'id': res[0]._id
            },
            route: '/index',
            message: 'hello world'
          }
        }
      } else {
        ctx.body = {
          code: 200,
          success: false,
          message: '用户名或者密码错误!'
        }
      }
    } else {
      ctx.body = {
        code: 200,
        success: false,
        message: '用户名不存在!'
      }
    }
  }).catch(err => {
    ctx.body = err
  })
}
exports.register = async (ctx, next) => {
  let {userName, password} = ctx.request.body
  await mongoose.find({userName: userName}).then(async res => {
    console.log(res)
    if (res.length > 0) {
      try {
        throw Error('用户名已存在')
      } catch (error) {
        console.log(error)
      }
      ctx.body = {
        code: 200,
        success: false,
        message: '用户名已存在!'
      }
    } else {
      let ro = new mongoose(ctx.request.body)
      ro.save((err, r) => {
        if (err) {
          console.log(err)
        } else {
          console.log('r', r)
        }
      })
      ctx.body = {
        code:200,
        success: true,
        message: '注册成功!'
      }
    }
  })
}