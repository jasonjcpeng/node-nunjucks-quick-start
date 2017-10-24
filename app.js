const Koa = require('koa');
const KoaRouter = require('koa-router');
const KoaNunjucks = require('koa-nunjucks-2');

const RouterIndex = require('./src/router/index');
const Config = require('./config.js');
const path = require('path');
const logger = require('koa-logger');
const staticServer = require('koa-static-cache');

const config = new Config();
const app = new Koa();
const router = new KoaRouter();
const routerIndex = new RouterIndex();

routerIndex.init(router);
app
  .use(logger())
  .use(KoaNunjucks({
    ext: 'html',
    path: path.join(__dirname, config.ViewPath),
    nunjucksConfig: {
      autoescape: true,
      trimBlocks: true,
    },
  }))
  .use(router.routes())
  .use(router.allowedMethods())
  .use(staticServer(path.join(__dirname, config.StaticPath), config.StaticOptions));

app.listen(config.ListenPort);
console.log(`监听${config.ListenPort}已开启`);
