import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  author: DS.attr('string'),
  size: DS.attr('number'),
  description: DS.attr('string'),
  image: DS.attr('string'),
  tags: DS.attr(),

  reports: DS.hasMany('report')
});
