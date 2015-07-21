var path    = require('path')
  , config  = {}
  ;


config = {
  port: 3005
// , hostname: '192.168.1.82'
, hostname: '10.20.60.68'
// , routerFile: 'index.html'
, routerFile: null
, devbase: './app'
, buildbase: './build'
, errorlogs: 'logs/error.log'
};

module.exports = {
  dev: {
    options: {
      port: config.port
    , keepalive: true
    , hostname: config.hostname
    , base: config.devbase
    , router: config.routerFile
    , directives: {
        error_log: path.resolve(config.devbase, config.errorlogs)
      , log_errors: 1
      , display_errors: 1
      }
    }
  },
  build: {
    options: {
      port: config.port
    , keepalive: true
    , hostname: config.hostname
    , base: config.buildbase
    , router: config.routerFile
    , directives: {
        error_log: path.resolve(config.buildbase, config.errorlogs)
      , log_errors: 1
      }
    }
  }
};
