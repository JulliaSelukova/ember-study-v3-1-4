import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend ({
  dataService: service('data-service'),
  
  actions: {
    async createSpeaker(e) {
      e.preventDefault();
      await this.get('dataService').createSpeaker(this.model);
      this.transitionToRoute('speaker');
    }
  }
});
