import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend ({
  dataService: service('data-service'),

  async model() {
    return new Promise((resolve, reject) => {
      later (async () => {
        try {
          let speakers = await this.get('dataService').readSpeakers();
          resolve(speakers);
        }
        catch (e) {
          reject ('Connection failed');
        }
      }, 1000);
    });    
  }
});
