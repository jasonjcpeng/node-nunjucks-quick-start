class ControllerIndex {
  constructor() {
    this.html = 'index';
  }
  getController() {
    return async (ctx) => {
      this.render(ctx);
    };
  }
  render(ctx) {
    ctx.render(this.html, { title: 'index pager', content: 'Here is some content text' });
  }
}

module.exports = ControllerIndex;
