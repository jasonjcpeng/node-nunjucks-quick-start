class Config {
  constructor() {
    this.ViewPath = 'src/view';
    this.StaticPath = '/static';
    this.StaticOptions = {
      gzip: true,
      usePrecompiledGzip: true,
    };
    this.ListenPort = '10086';
  }
}

module.exports = Config;
