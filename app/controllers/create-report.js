import Controller from '@ember/controller';

export default Controller.extend({
   
    actions: {    
        changeSpeaker(speaker) {     
            this.set('model.report.speaker', speaker);
        },

        changeBook(book) {     
           this.set('model.report.book', book);
        },

        async saveReport(report, e) {
            e.preventDefault();
            let newReport = this.get('store').createRecord('report', report);
            await newReport.save();
            
            this.transitionToRoute('edit-meeting', report.meeting.get('id'));
          }
    }

});
