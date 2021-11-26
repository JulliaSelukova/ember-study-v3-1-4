import DS from 'ember-data';

export default DS.JSONSerializer.extend({    
  /*normalize(model, hash) {
      hash = this._super(...arguments);
      let hashCopy = Object.assign({}, hash);
      hashCopy.attributes = {};
      hashCopy.attributes.firstName = hashCopy.firstName;
      hashCopy.attributes.lastName = hashCopy.lastName;
      hashCopy.attributes.secondName = hashCopy.secondName;
      delete hashCopy.firstName;
      delete hashCopy.lastName;
      delete hashCopy.secondName;
      hash = {
        data: hashCopy
      };
  
      return hash;
    }*/
  
  serialize(/*snapshot, options*/) {
      let json = this._super(...arguments);
      //json.type = snapshot.modelName;
      return json;
  }
});
