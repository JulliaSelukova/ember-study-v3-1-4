import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {

  async model({ id }) {
    return this.get('store').findRecord('book', id);
  },

  setupController(controller/*, model*/) {
    this._super(...arguments);
    controller.reset();
  }
});
