import Component from '@ember/component';
import ENV from 'ember-study-v3-1-4/config/environment';

export default Component.extend({
    iAmRobot: true,
    reset: false,

    actions: {
        submitForm(e) {
            e.preventDefault();
            /* this.onsubmit({
                id: this.get('idUser'),
                email: this.get('email'),
                password: this.get('password'),
                passwordConfirmation: this.get('passwordConfirmation'),        
            }); */
            this.get('onSubmit')({
                id: this.idUser,
                email: this.email,
                password: this.password,
                passwordConfirmation: this.passwordConfirmation
              });
        },

        async verified(key) {
            try {
              const { success } = await (await fetch(`${ENV.backendURL}/recaptcha?key=${key}`)).json();
      
              this.set('iAmRobot', !success);
            } catch (error) {
              this.set('reset', true);
            }
          },
      
          expired() {
            this.set('iAmRobot', true);
          }
    },

    didReceiveAttrs() {
        this._super(...arguments);

        this.setProperties ({
            idUser: this.get('user.id') ? this.get('user.id') : undefined,
            email: this.get('user.email'),
            password: this.get('user.password'),
            passwordConfirmation: this.get('user.passwordConfirmation'),    
        })
    }
});
