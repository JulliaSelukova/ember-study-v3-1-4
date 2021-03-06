import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    async model({ id }) {
        return RSVP.hash({
            speakers: this.store.findAll('speaker'),
            books: this.store.findAll('book'),            
            report: this.get('store').findRecord('report', id),
        })
    }
});
