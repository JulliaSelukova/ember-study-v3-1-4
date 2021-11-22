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
      set(this, 'isUploadingFile', true);
      const uploadData = get(this, 'uploadData');
      try {
        await this.get('dataService').saveBook(this.model, uploadData, true);
      }
      catch(e) {

      }
      finally {
        set(this, 'isUploadingFile', false);
        this.transitionToRoute('book');
      }  
    },

    changeUploadData(uploadData) {
      set(this, 'uploadData', uploadData);
    }
  },
  
  reset() {     
    set(this, 'uploadData', null);
  }
});
