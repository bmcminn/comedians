var config  = {}
  ;

module.exports = {
  dev: {
  	options: {
  		compress: false
  	, linenos: true
  	}
	, files: {
      'app/build/main.css': 'app/stylus/main.styl'
    }
  }
};
