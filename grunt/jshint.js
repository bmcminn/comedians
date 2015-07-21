
var config = {}
  ;


module.exports = {
  dev: {
		options: {
      ignores: [

      ]

    , curly: true
    , eqeqeq: true
    , freeze: true
    , latedef: true
    , laxbreak: true
    , laxcomma: true
    , undef: true
    , unused: false

    // , browser: true

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
      '_js/*.js'
    ]
	}
};
