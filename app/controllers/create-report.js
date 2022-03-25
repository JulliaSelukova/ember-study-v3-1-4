import Controller from '@ember/controller';

export default Controller.extend({
   
    actions: {    
        
        async saveReport(report) {            
            let newReport = this.get('store').createRecord('report', report);
            await newReport.save();
            
            this.transitionToRoute('edit-meeting', report.meeting.get('id'));
          }
    }

});
