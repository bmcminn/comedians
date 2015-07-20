var config  = {}
  , path    = require('path')
  ;

module.exports = {
  js: {
    options: {
      spawn: false
    },
    files: [
      "app/js/**.js"
    ],
    tasks: [
      "jshint", "jsonlint", "browserify"
    ]
  }

, styl: {
    options: {
      spawn: false
    },
    files: [
      "app/stylus/**/*.styl"
    ],
    tasks: [
      "stylus"
    ]
  }

, json: {
    options: {
      spawn: false
    },
    files: [
      "**.json"
    ],
    tasks: [
      "stylus"
    ]
  }
};
