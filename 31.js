const koa = require('koa')

const app = new koa()

const main = ctx => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
  ctx.response.body = 'hello world 31'
}

app.use(main).listen(3000)