
var config = {}
  ;


module.exports = {
  build: {
		options: {
      mangle: true
    , report: 'gzip'
    , preserveComments: false
    , banner: '<%= banner %>'
    , compress: {
        dead_code: true
      , drop_debugger: true
      , unused: true
      , join_vars: true
      , warnings: true
      }
    }
  , files: {
      'app/build/main.js': 'app/build/main.js'
    }

	}
};
