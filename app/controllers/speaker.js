import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend ({
  queryParams: [ "search" ],
  search: '',

  dataService: service('data-service'),

  actions: {
    async deleteSpeaker(speaker) {
      await this.get('dataService').deleteSpeaker(speaker);
      this.transitionToRoute('speaker');
    },
    loading(transition, originRoute) {
      return false;
    }
  }  
});
