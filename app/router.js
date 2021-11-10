import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('speaker', { path: '/speakers' });
  this.route('book', { path: '/books' });
  this.route('edit-book', { path: 'edit-book/:id' });
  this.route('edit-speaker', { path: 'edit-speaker/:id' });
  this.route('create-speaker');
  this.route('create-book');
  this.route('test-ver');
  this.route('404', { path: '*path'});
});

export default Router;

