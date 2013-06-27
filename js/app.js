App = Ember.Application.create();

App.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.RESTAdapter.extend({
    url: 'http://appstore.kitchenatomy.com/api/v1/apps.json'
  })
});

App.Router.map(function() {
  this.resource('about');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.AboutRoute = Ember.Route.extend({
  model: function() {
    return ['this', 'is', 'the', 'about', 'page'];
  }
});

App.Apps = DS.Model.extend({
  title: DS.attr('string'),
  subtitle: DS.attr('string'),
  download_count: DS.attr('integer'),
  version: DS.attr('string')
});
