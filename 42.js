const koa = require('koa')

const app = new koa()

const main = ctx => {
  ctx.response.status = 404
  ctx.response.body = '404 not found'
}

app.use(main).listen(3000)