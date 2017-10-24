const koaBody = require('koa-body');
const CIndex = require('../controller/index');
const CHome = require('../controller/home');

class RouterIndex {
  constructor() {
    this.index = new CIndex();
    this.home = new CHome();
  }
  init(router) {
    this.routeIndex(router);
    this.routeHome(router);
  }
  routeIndex(router) {
    router.get('/', this.index.getController());
    router.post('/post', koaBody(), this.index.postController());
  }
  routeHome(router) {
    router.get('/home', this.home.getController());
  }
}

module.exports = RouterIndex;
