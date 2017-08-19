const koa = require('koa')
const koaBody = require('koa-body')

const app = new koa()

const main = function (ctx) {
  const body = ctx.request.body
  if (!body.name) {
    ctx.throw(400, '.name required')
  }
  ctx.body = { name: body.name }
}

app.use(koaBody()).use(main).listen(3000)