const Koa = require('koa')
const router = require('koa-router')()
let db = require('monk')('localhost/test')
let bodyParser = require('koa-bodyparser')
let app = new Koa()

db.then(()=>{
    console.log('server is running')
})
let students = db.get('logins') // 获取logins库
app.use(async (ctx,next) => {
    console.log(ctx.url+'...................'+ctx.method)
    await next()
})
app.use(bodyParser())

// console.log(students.find({account:`${ctx.body.account}`})

router.get('/', async (ctx,next) => {
    ctx.body='这是首页'
})
router.get('/getList',async(ctx,next)=> {
    let st = await students.find({account:'10600'})
    ctx.type = 'application/json'
    ctx.body = st
    await next()
}).post('/login', async(ctx,next) => {
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
}).post('/register', async (ctx,next) => {
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

app.use(router.routes())

app.listen(3003,()=>{
    console.log('your project is running at 127.0.0.1:3003')
})