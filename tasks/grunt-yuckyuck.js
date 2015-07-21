module.exports = function(grunt) {

  var EOL     = require('os').EOL
    , Chance  = require('chance')
    , chance  = new Chance()
    ;

  grunt.registerTask('yuckyuck', 'Gives you a random joke!', function() {

    console.log([
      '               __'
    , '              / _) < RAWR!!'
    , '     _/\\/\\/\\_/ /'
    , '   _|         /'
    , ' _|  (  | (  |'
    , '/__.-\'|_|--|_| PapaJ'
    ].join(EOL));
  });

  return;


}
