
module.exports = function(grunt) {

  'use strict';

  var path    = require('path')
    , lodash  = require('lodash')
    , pkg     = require('./package.json')
    , date    = new Date()
    ;

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
      configPath: path.join(process.cwd(), 'grunt')
    , data: {
        banner: [
          '/**'
        , ' * Copyright (c) ' + date.getFullYear() + ' - ' + pkg.author
        , ' */'
        , ''
        ].join('\n')
      }
    });

  grunt.loadTasks('./tasks/');

};
