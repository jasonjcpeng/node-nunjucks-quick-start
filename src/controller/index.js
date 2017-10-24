class ControllerIndex {
  constructor() {
    this.html = 'index';
  }
  getController() {
    return async (ctx) => {
      await ctx.render(this.html, { title: 'index pager', content: 'Here is some content text' });
    };
  }
  postController() {
    return async (ctx) => {
      await ctx.render(this.html, { title: 'index pager', content: ctx.request.body.content });
    };
  }
}

module.exports = ControllerIndex;
