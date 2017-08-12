const compose = require('koa-compose')
const koa = require('koa')

const app = new koa()

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
  next()
}

const main = ctx => {
  ctx.response.body = 'hello world 35'
}

const middlewares = compose([logger, main])
app.use(middlewares).listen(3000)