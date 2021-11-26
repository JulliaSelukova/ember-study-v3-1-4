import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend ({
  dataService: service('data-service'),

  actions: {
    async saveSpeaker(speaker) {
      //await this.get('dataService').changeSpeaker(speaker);
      let speakerModel = this.get('model');
      speakerModel.set('firstName', speaker.firstName);
      speakerModel.set('secondName', speaker.secondName);
      speakerModel.set('lastName', speaker.lastName);
      
      await speakerModel.save();

      this.transitionToRoute('speaker');
    }
  } 
});
