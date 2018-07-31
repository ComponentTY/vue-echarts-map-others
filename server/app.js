const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')
const app = new Koa()
app.use(async (context, next) => {
    console.log(new Date().toLocaleDateString())
    await next()
})
app.use(bodyParser())
app.use(require('./routers/index.js').routes())

app.listen(3003, () => {
    console.log('your project is running......')
})