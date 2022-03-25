import DS from 'ember-data';
import ENV from 'ember-study-v3-1-4/config/environment';

export default DS.JSONAPIAdapter.extend({
    host: ENV.backendURL,

    init() {
        this._super(...arguments);
        this.set('headers', {
          'Content-Type': 'application/json'
        });
    },

    buildURL(modelName, id, snapshot, requestType, query) {
      let url = this._super(...arguments);
      if (modelName === 'meeting') {
        url += '?_embed=reports';
      }

      if (modelName === 'report') {
        url += '?_expand=speaker&_expand=book&_expand=meeting'
      }

      return url;        
    },

    handleResponse(status, headers, payload) {
      const meta = {
        total: headers['x-total-count'],
      };

      payload.meta = meta;

      return this._super(status, headers, payload);
    }
});
