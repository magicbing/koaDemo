const koa = require('koa')

const app = new koa()

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
  next()
}

app.use(logger).listen(3000)