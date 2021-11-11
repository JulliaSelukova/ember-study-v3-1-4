import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend ({
  dataService: service('data-service'),

  actions: {
    async deleteBook(book) {
      await this.get('dataService').deleteBook(book);
      this.transitionToRoute('book');
    }
  }
});
