const koa = require('koa')

const app = new koa()

const main = ctx => {
  ctx.throw(404)
}

app.use(main).listen(3000)