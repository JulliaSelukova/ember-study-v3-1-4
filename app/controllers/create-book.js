import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend ({
  dataService: service('data-service'),

  actions: {
    async createBook(e) {
      e.preventDefault();
      await this.get('dataService').createBook(this.model);
      this.transitionToRoute('book');
    }
  }
});
