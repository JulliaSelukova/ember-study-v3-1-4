import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async saveReport(report) {
            let reportModel = this.get('model.report');           
            reportModel.set('date', report.date);
            reportModel.set('grade', report.grade);
            reportModel.set('urlVideo', report.urlVideo);
            reportModel.set('urlPresentation', report.urlPresentation);
            reportModel.set('review', report.review);
            reportModel.set('book', report.book);
            reportModel.set('speaker', report.speaker);
            reportModel.set('meeting', report.meeting);

            await reportModel.save();
      
            this.transitionToRoute('edit-meeting', report.meeting.get('id'));
        }
    }
});
