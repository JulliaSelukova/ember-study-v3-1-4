import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  secondName: DS.attr('string'),
  lastName: DS.attr('string')
});
