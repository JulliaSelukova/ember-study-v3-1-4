import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    async model({ id }) {
        return RSVP.hash({
        meeting: this.store.findRecord('meeting', id),
        reports: this.store.query('report', {meetingId: id}),        
      })
    }
});
