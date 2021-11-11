import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend ({
  dataService: service('data-service'),

  actions: {
    async saveSpeaker(speaker) {
      await this.get('dataService').changeSpeaker(speaker);
      this.transitionToRoute('speaker');
    }
  } 
});
