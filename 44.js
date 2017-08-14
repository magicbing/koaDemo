const koa = require('koa')

const app = new koa()

const main = ctx => {
  ctx.throw(500)
}

app.on('error', (err, ctx) => 
  console.error('server error', err)
)

app.use(main).listen(3000)