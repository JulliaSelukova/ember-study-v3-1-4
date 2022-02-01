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
  this.route('404', { path: '*path'});
  this.route('meeting', { path: '/meetings' });
  this.route('create-meeting');
  this.route('edit-meeting', { path: 'edit-meeting/:id' });
  this.route('report');
  this.route('create-report');
  this.route('edit-report', { path: 'edit-report/:id' });
});

export default Router;

