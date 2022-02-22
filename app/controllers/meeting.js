import Controller from '@ember/controller';
import { computed } from '@ember/object';

export const PER_PAGE = 2;

export default Controller.extend({
    queryParams: ['page'],    
    page: 1,

    pages: computed('model.meetings.meta.total', function() {
      const total = Number(this.get('model.meetings.meta.total'));
      if (Number.isNaN(total) || total <= 0) {
        return [];
      }

      return new Array(Math.ceil(total / PER_PAGE))
        .fill()
        .map((value, index) => index + 1);
    }),    

    actions: {
      async deleteMeeting(meeting) {    
        await meeting.destroyRecord(); 
        //для устранения бага (после удаления записи и дальнейшем создании - ошибка сохранения (использовал тот же id (int), который еще оставался в кэше))
        this.get('store').unloadRecord(meeting);
      }
    }  
});
