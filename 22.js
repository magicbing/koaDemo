const Koa = require('koa')
const route = require('koa-route')
const app = new Koa()

const about = ctx => {
  ctx.response.type ='html'
  ctx.response.body = '<a href="/">Index page</a>'
}

const main = ctx => {
  ctx.response.body = 'hello world 06'
}

app.use(route.get('/', main)).use(route.get('/about', about)).listen(3000)