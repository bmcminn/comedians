
var config = {}
  ;


module.exports = {
  dev: {
		options: {
      ignores: [

      ]
    , undef: true
    , laxbreak: true
    , laxcomma: true
    , unused: true
    , globals: {
        console: true
      , window: true
      , document: true
      , module: true
      , define: true
      , require: true
      , Modernizr: true
      , process: true
      }
    }
  , src: [
      'app/js/*.js'
    ]
	}
};
