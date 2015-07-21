module.exports = function(grunt) {

  var path  = require('path')
    , _     = require('lodash')
    // , EOL   = require('os').EOL
    , EOL   = '\n'
    ;

  grunt.registerTask('minijson', function() {
    var target  = path.resolve('app/data/comedians.json')
      , data    = ''
      , lines
      ;

    lines   = grunt.file.read(target).split(EOL);
    target  = target.replace(/\.json$/i, '.min.json');


    _.each(lines, function(val) {
      data += val.replace(/\s{2,}/, '');
    });


    grunt.file.write(data, target);
  });
}
