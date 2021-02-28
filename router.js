const Router = require('koa-router');
const router = new Router();
const getRandomPerson = require('./controller/person.controller');

router.get('/random', getRandomPerson);

module.exports = router;