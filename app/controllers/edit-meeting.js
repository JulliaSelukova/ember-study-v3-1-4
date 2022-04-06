import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async saveMeeting(meeting) {
          let meetingModel = this.get('model.meeting');
          meetingModel.set('meetingDate', meeting.meetingDate);          
          await meetingModel.save();

          //Поменять дату у всех докладов этой встречи!!!
              
          this.transitionToRoute('meeting');
        },

        async onDeleteReport(report) {
          await report.destroyRecord(); 
          //для устранения бага (после удаления записи и дальнейшем создании - ошибка сохранения (использовал тот же id (int), который еще оставался в кэше))
          this.get('store').unloadRecord(report);
        },

        onAddReport() {
          this.transitionToRoute('create-report');
        }
      } 
});
