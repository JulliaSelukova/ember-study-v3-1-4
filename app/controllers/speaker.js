import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend ({
  queryParams: [ "search" ],
  search: '',

  dataService: service('data-service'),

  actions: {
    async deleteSpeaker(speaker) {
      //await this.get('dataService').deleteSpeaker(speaker);      
      await speaker.destroyRecord(); 
      //для устранения бага (после удаления записи и дальнейшем создании - ошибка сохранения (использовал тот же id (int), который еще оставался в кэше))
      this.get('store').unloadRecord(speaker);
    },
    loading(transition, originRoute) {
      return false;
    }
  }  
});
