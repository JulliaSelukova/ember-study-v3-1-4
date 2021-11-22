import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend ({
  dataService: service('data-service'),

  actions: {
    changeTags(newTags) {
      set(this.model, 'tags', [...newTags]);      
      console.log(get(this, 'tags'));
    },

    async createBook(e) {
      e.preventDefault();
      await this.get('dataService').createBook(this.model);
      this.transitionToRoute('book');
    }
  }
});
