import Controller from '@ember/controller';
import ENV from 'ember-study-v3-1-4/config/environment';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend ({
  dataService: service('data-service'),

  actions: {
    changeTags(newTags) {
      set(this.model, 'tags', [...newTags]);      
      //console.log(get(this, 'tags'));
    },

    async createBook(e) {
      e.preventDefault();
      set(this, 'isUploadingFile', true);
      const uploadData = get(this, 'uploadData');
      
      //await this.get('dataService').saveBook(this.model, uploadData, true);
      /*let newBook = this.get('store').createRecord('book', this.model);
      newBook.serialize();
      await newBook.save();*/

      await new Promise(async (resolve, reject) => {
        try {                    
          let newBook = this.get('store').createRecord('book', this.model); 
          //newBook.serialize();
          await newBook.save();

          if (!uploadData) {
            resolve();
          }
  
          uploadData.url = `${ENV.fileUploadURL}`;
          // uploadData.headers = getOwner(this).lookup('adapter:application').get('headers');
          uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
            try {
              const dataToUpload = {
                entityName: 'books',
                id: newBook.get('id'),
                fileName: result.filename
              };
  
              await fetch(`${ENV.backendURL}/saveURL`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToUpload)
              });
  
              // eslint-disable-next-line no-console
              console.log('Ok');
              resolve();
            }
            catch (e) {
              reject(e);
            }
          }).fail((jqXhr, textStatus, errorThrown) => {
            reject(errorThrown);
          });
        }
        catch (e) {
          reject(e);
        }
      });
    
      set(this, 'isUploadingFile', false);
      this.transitionToRoute('book');      
    },

    changeUploadData(uploadData) {
      set(this, 'uploadData', uploadData);
    }
  },
  
  reset() {     
    set(this, 'uploadData', null);
  }
});
