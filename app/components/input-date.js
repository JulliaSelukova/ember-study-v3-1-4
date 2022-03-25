import Component from '@ember/component';

export default Component.extend({   
    //classNames: ["datepicker", "datepicker-meeting", "date", "input-group", "p-0"],
    
    didInsertElement() {       
        this._super(...arguments);
        const self = this;
        this.$('.datepicker').datepicker({
            clearBtn: true,
            format: "dd.mm.yyyy",
            language: "ru",
            autoclose: true
        }).on("changeDate", function(e) {
            // `e` here contains the extra attributes
            self.get('onChangeDate')(e.date);
        }).on("clearDate", function() {
            self.get('onClearDate')();
        });

        /*if (!this.$('.datepicker').datepicker('getDate')) {
            this.$('.datepicker').datepicker('setUTCDate', new Date());
        }*/ //Не работает 
    },    
});
