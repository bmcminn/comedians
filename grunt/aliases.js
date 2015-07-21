// grunt/tasks/default.js

module.exports = function(grunt) {

  grunt.registerTask('default', [
    'jshint'
  , 'jsonlint'
  , 'browserify'
  , 'stylus:dev'
  // , 'php:dev'
  ]);

  grunt.registerTask('build', [
    'jshint'
  , 'jsonlint'
  , 'stylus:build'
  // , 'php:build'
  ]);
};
