import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    async model({ id }) {
        return RSVP.hash({
            speakers: this.store.findAll('speaker'),
            books: this.store.findAll('book'),            
            report: this.get('store').findRecord('report', id),
        })
    }
});
