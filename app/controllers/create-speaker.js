import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
//import EmberObject from '@ember/object';

export default Controller.extend ({
  // Контроллер - это синглтон, поэтому метод init() срабатывает только один раз - в начале работы приложения.
  /*init() {
    this._super(...arguments);
    this.set('speaker', EmberObject.create());
    this.get('speaker').set('firstName', '');
    this.get('speaker').set('lastName', '');
    this.get('speaker').set('secondName', '');
  },*/

  dataService: service('data-service'),
  
  actions: {
    async saveSpeaker(speaker) {      
      await this.get('dataService').createSpeaker(speaker);

      /* //Для проверки, что даже при установке свойств модели в какие-то значения, после переоткрытия формы создания спикера ее поля затираются
      this.get('model').set('firstName', speaker.firstName);
      this.get('model').set('lastName', speaker.lastName);
      this.get('model').set('secondName', speaker.secondName);
      */

      this.transitionToRoute('speaker');
    }
  }
});
