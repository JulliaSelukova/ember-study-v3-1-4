//import ApplicationSerializer from './application';
import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        speaker: {
            serialize: false,
            deserialize: 'records'
        },
        book: {
            serialize: false,
            deserialize: 'records'
        }
    }
});
