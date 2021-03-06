const router = require('koa-router')()

export const getList = (ctx, nex) => {
    
}
router.get('/getList',async(ctx,next)=> {
  let st = await students.find({account:'10600'})
  ctx.type = 'application/json'
  ctx.body = st
  await next()
})
router.post('/login', async(ctx,next) => {
  ctx.body = ctx.request.body // url地址栏?后面的参数 {} json的形式
  console.log(ctx.body)
  ctx.type = 'application/json'
  // 全部查找
  let stud = await students.find({account:`${ctx.body.account}`},(err,docs)=>{console.log(docs);console.log(err)})
  console.log(stud)
  if(JSON.stringify(stud) === '[]') {
      console.log(2)
      ctx.body = {
          state:ctx.state = 1,
          message: '用户名或者密码错误，请重新输入'
      }
  } else {
      console.log(1)
      if (stud[0].password === ctx.body.password){
          console.log(stud)
          ctx.body = {
              state:ctx.state = 0,
              message: '登陆成功',
              url: '/'
          }
      }else {
          ctx.body = {
              state:ctx.state = 1,
              message: '用户名或者密码错误，请重新输入'
          }
      }
  }
})
router.post('/register', async (ctx,next) => {
  ctx.body = ctx.request.body
  let student = await students.findOne({account:`${ctx.body.account}`}, 'account') //只找唯一一个
  console.log(student)
  console.log(ctx.body)
  ctx.type = 'application/json'
  if (student) {
      ctx.body = {
          state: ctx.state = 1,
          message: '用户名已存在'
      }
  } else {
      students.insert(ctx.body)
      ctx.body = {
          state: ctx.state = 0,
          message: '注册成功'
      }
  }
})
module.exports = function (path) {
    return router || path
}