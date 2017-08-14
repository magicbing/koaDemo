const koa = require('koa')

const app = new koa()

const handler = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500
    ctx.response.type = 'html'
    ctx.response.body = '<p>something wrong 45</p>'
    ctx.app.emit('error', err, ctx)
  }
}

const main = ctx => {
  ctx.throw(500)
}

app.on('error', function(err) {
  console.log('logging error', err.message)
  console.log(err)
})

app.use(main).listen(3000)