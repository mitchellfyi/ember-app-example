import EmberRouter from '@ember/routing/router';
import config from 'ember-app-supabase-server-example/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('tables', function () {
    this.route('new');
    this.route('show', { path: ':table_id' });
    this.route('edit', { path: ':table_id/edit' });
    this.route('destroy', { path: ':table_id/destroy' });
  });
});
