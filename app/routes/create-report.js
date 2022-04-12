import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { getOwner } from '@ember/application';
import EmberObject from '@ember/object';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
    model() {
        let applicationInstance = getOwner(this);       
        let meetingController = applicationInstance.lookup('controller:edit-meeting'); // а если мы с create-meeting добавляем доклад?

        return RSVP.hash({
            speakers: this.store.findAll('speaker'),
            books: this.store.findAll('book'), 
            
            report: new Promise(async (resolve) => {
                const meetingModel = await this.get('store').findRecord('meeting', meetingController.model.meeting.id);
                resolve(EmberObject.create ({
                    date: meetingController.model.meeting.meetingDate,
                    grade: '',
                    urlVideo: '',
                    urlPresentation: '',
                    review: '',
                    meeting: meetingModel,
                    book: '',
                    speaker: ''
                }))
            })
        });
    }

    //Promise.All(/*массив промисов*/ */)
    //метод Hash()
});
