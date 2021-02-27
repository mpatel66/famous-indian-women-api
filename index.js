const Koa = require('koa');
require('dotenv').config();
const router = require('./router.js');
const PORT = process.env.PORT;

const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  // if route not found set status to 404.
  if (ctx.status === 404) {
    ctx.body = '404 not found';
    ctx.status = 404;
  }

});

app.use(router.routes());

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});