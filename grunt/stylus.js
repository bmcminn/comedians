var config  = {}
  ;

module.exports = {
  dev: {
  	options: {
  		compress: false
  	, linenos: true
  	}
	, files: {
      'app/build/main.css': '_stylus/main.styl'
    }
  }
, build: {
    options: {
      compress: true
    }
  , files: {
      'app/build/main.css': '_stylus/main.styl'
    }
  }
};
