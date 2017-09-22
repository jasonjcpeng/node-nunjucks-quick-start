class ControllerHome {
  constructor() {
    this.html = 'home';
  }
  getController() {
    return async (ctx) => {
      this.render(ctx);
    };
  }
  render(ctx) {
    ctx.render(this.html, { title: 'home pager' });
  }
}

module.exports = ControllerHome;
