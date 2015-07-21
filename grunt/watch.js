var config  = {}
  , path    = require('path')
  ;

module.exports = {
  js: {
    options: {
      spawn: false
    },
    files: [
      "_js/**.js"
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
      "_stylus/**/*.styl"
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
