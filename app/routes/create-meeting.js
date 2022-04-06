import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
    model() {
        return EmberObject.create({
          meetingDate: new Date(),
          reports: []
        })
      },

      /*для отладки - посмотреть что попало в model у контроллера
      setupController(controller, model) {
        this._super(...arguments);
        debugger;
      }*/
});
