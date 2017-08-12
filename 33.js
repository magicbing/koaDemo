const koa = require('koa')

const app = new koa()

const one = (ctx, next) => {
  console.log('>> one')
  console.log('<< one')
  next()
}
const two = (ctx, next) => {
  console.log('>> two')
  next()
  console.log('<< two')
}
const three = (ctx, next) => {
  console.log('>> three')
  next()
  console.log('<< three')
}

app.use(one)
app.use(two)
app.use(three)
app.listen(3000)