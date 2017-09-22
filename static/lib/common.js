requirejs.config({
  baseUrl: '../vm',
  paths:{
    jquery:"../lib/jquery.min",
  },
  shim:{
    '$':{exports: '$'}
  }
});