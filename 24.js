const koa = require('koa')
const route = require('koa-route')
const app = new koa()

const redirect = ctx => {
  ctx.response.redirect('/')
}
const main = ctx => {
  ctx.response.body = 'hello world 06'
}

app.use(route.get('/', main)).use(route.get('/redirect', redirect)).listen(3000)