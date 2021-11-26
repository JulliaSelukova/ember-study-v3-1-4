import DS from 'ember-data';
import ENV from 'ember-study-v3-1-4/config/environment';

export default DS.JSONAPIAdapter.extend({
    host: ENV.backendURL,

    init() {
        this._super(...arguments);
        this.set('headers', {
          'Content-Type': 'application/json'
        });
    }
});
