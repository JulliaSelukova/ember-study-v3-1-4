import Component from '@ember/component';

export default Component.extend({
    actions: {
        submitForm(e) {
            e.preventDefault();
            this.onsubmit({
                id: this.get('idMeeting'),
                meetingDate: this.get('meetingDate'),
                reports: this.get('reports')
            });
        },

        changeDate(newDate) {
            this.set('meetingDate', newDate);
        },

        async deleteReport(report) {
            /* т.к. это closure-action, то удаление записи лучше производить в экшене контроллера, иначе возникает баг
            await report.destroyRecord(); 
            //для устранения бага (после удаления записи и дальнейшем создании - ошибка сохранения (использовал тот же id (int), который еще оставался в кэше))
            this.get('store').unloadRecord(report);  */
            
            this.onDeleteReport(report);
        },

        addReport() {
            this.onAddReport();
        }
    },

    didReceiveAttrs() {
        this._super(...arguments);

        this.setProperties ({
            idMeeting: this.get('meeting.id') ? this.get('meeting.id') : undefined,
            meetingDate: this.get('meeting.meetingDate'),
            reports: this.get('meeting.reports')
        })
    }
});
