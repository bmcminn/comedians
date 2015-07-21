module.exports = function(grunt) {

  var path  = require('path')
    , _     = require('lodash')
    , EOL   = require('os').EOL
    ;

  grunt.registerMultiTask('templatize', 'Generates index.html with inlined template files.', function() {

    var opt           = this.data
      , viewsDir      = path.resolve(opt.dir)
      , index         = path.resolve(viewsDir, opt.index)
      , renderTarget  = path.resolve(opt.target)
      , views         = grunt.file.expand(viewsDir + '/**' + opt.ext)
      , template = {}
      ;

    template.render = '';

    _.each(views, function(view) {

      template.filename = path.basename(view, opt.ext);
      template.content = grunt.file.read(view);

      template.render += [
        '<script id="{{FILENAME}}" type="text/x-handlebars-template">'.replace(/\{\{FILENAME\}\}/, template.filename)
      ,   template.content
      , '</script>'
      , ''
      ].join(EOL);

    });

    template.target =
      grunt
        .file.read(index)
        .replace(/<!--LOAD_HANDLEBARS_VIEWS-->/, template.render);
      ;

    // console.log(template.target);
    // console.log(JSON.stringify(this, null, 2));

    grunt.file.write(renderTarget, template.target);
  });
}
