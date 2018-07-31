const router = require('koa-router')()
const role = require('../module/role.js')

router.get('/getList', role.getList)
router.post('/login', role.login)
router.post('/register', role.register)
module.exports = router