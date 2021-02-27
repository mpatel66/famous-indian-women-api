const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'Hello World';
  ctx.status = 200;
});

router.get('/random', (ctx) => {
  ctx.body = 'random';
  ctx.status = 200;
});



module.exports = router;