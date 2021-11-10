import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend ({
  dataService: service('data-service'),

  actions: {
    async saveBook(e) {
      e.preventDefault();
      await this.get('dataService').changeBook(this.model);
      this.transitionToRoute('book');
    }
  }  
});
