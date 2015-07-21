// grunt/tasks/default.js

module.exports = function(grunt) {

  grunt.registerTask('default', [
    'jshint'
  , 'jsonlint'
  , 'browserify'
  , 'stylus:dev'
  ]);

  grunt.registerTask('build', [
    'jshint'
  , 'jsonlint'
  , 'stylus:build'
  , 'browserify'
  , 'uglify'
  ]);
};
