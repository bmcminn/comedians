// grunt/tasks/default.js

module.exports = function(grunt) {

  grunt.registerTask('default', [
    'jshint'
  , 'jsonlint'
  , 'browserify'
  , 'stylus:dev'
  , 'templatize'
  ]);

  grunt.registerTask('build', [
    'jshint'
  , 'jsonlint'
  , 'stylus:build'
  , 'browserify'
  , 'uglify'
  , 'templatize'
  ]);
};
