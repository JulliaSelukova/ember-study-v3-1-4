import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend ({
  dataService: service('data-service'),

  actions: {
    async saveSpeaker(e) {
      e.preventDefault();
      await this.get('dataService').changeSpeaker(this.model);
      this.transitionToRoute('speaker');
    }
  } 
});
