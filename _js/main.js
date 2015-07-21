var _   = require('lodash')
  , $   = require('jquery')
  , hbs = require('handlebars')
  , aja = require('aja')
  , app = {}
  ;


app.updateView = function(selector, template) {
  var $this   = $(selector)
    , render  = hbs.compile(template || $(this.template).html())
    ;

  $this.html(render(this.data));
};


app.updateProp = function(selector, prop, content) {
  $(selector).attr(prop, content);
};


aja()
  .url('/data/comedians.min.json')
  .on('success', function(data) {
      app.data = {
        comedians: data
      , title:  'Comedians'
      , desc:   'A website curated by Brandtley McMinn for no reason other that I can\'t keep track of things any other way :P'
      };

      app.template = '#comedians-list';

      app.updateView('[data-app-container]');
      app.updateView('title', '{{ title }}');
      app.updateProp('meta[name="description"]', 'content', app.data.desc);
    })
  .go()
  ;
