import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend ({
  queryParams: [ "search", "tagSearch" ],
  search: '',
  tagSearch: '',

  dataService: service('data-service'),

  actions: {
    async deleteBook(book) {
      await this.get('dataService').deleteBook(book);
      this.transitionToRoute('book');
    },
    searchAll(e) {
      e.preventDefault();
      this.get('dataService').readBooks(this.search);

    },
    searchTag(e) {
      e.preventDefault();
      this.get('dataService').readBooks(this.search, this.tagSearch);
    }    
  }
});
