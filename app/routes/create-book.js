import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend (AuthenticatedRouteMixin, {
  model() {
    return {
      name: '',
      author: '',
      size: '',
      description: '',
      image: '',
      tags: []
    };
  },

  setupController(controller/*, model*/) {
    this._super(...arguments);
    controller.reset();
  }
});
