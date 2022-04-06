import Controller from '@ember/controller';


export default Controller.extend({
    actions: {
        async saveMeeting(meeting) {    
          let newMeeting = this.get('store').createRecord('meeting', meeting);
          await newMeeting.save();
          //this.transitionToRoute('meeting');
          this.transitionToRoute('edit-meeting', newMeeting.id);
        },

        async onDeleteReport(report) {
          await report.destroyRecord(); 
          //для устранения бага (после удаления записи и дальнейшем создании - ошибка сохранения (использовал тот же id (int), который еще оставался в кэше))
          this.get('store').unloadRecord(report);
        },

        onAddReport() {
          /* этот экшен вызовется, если будет возможно создавать доклад с формы создания встречи (сейчас пока здесь кнопка заблочена)
          (т.е. сама встреча еще не будет сохранена на сервере)*/
          //присвоить id встречи
          //this.model.meeting.id = 999;
          //this.set('model.id', 999);

          this.transitionToRoute('create-report');
        }
      }
});
