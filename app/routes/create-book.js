import Route from '@ember/routing/route';

export default Route.extend ({
  model() {
    return {
      id: '',
      name: '',
      author: '',
      size: '',
      description: '',
      image: '',
      tags: '',
    };
  }
});
