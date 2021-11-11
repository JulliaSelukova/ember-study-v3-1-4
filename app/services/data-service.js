import Service from '@ember/service';
import ENV from 'ember-study-v3-1-4/config/environment';
import { A } from '@ember/array';

export default Service.extend ({
  init() {
    this._super(...arguments);    
    this.set('speakers', A());
    this.set('books', A());
  },

  async readSpeakers(search) {
    let queryParams = '';
    if (search) {
      queryParams = `?q=${search}`;
    }      

    const response = await fetch(`${ENV.backendURL}speakers${queryParams}`);
    let speakers = await response.json();
    this.speakers.clear();
    this.speakers.pushObjects(speakers);
    return this.speakers;
  },

  readSpeaker(id) {
    //const response = await fetch(`${ENV.backendURL}speakers/${id}`);
    //return response.json();
    return this.speakers.find((speaker) => speaker.id === parseInt(id));
  },

  changeSpeaker(speaker) {
    return fetch(`${ENV.backendURL}speakers/${speaker.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(speaker),
    });
  },

  createSpeaker(speaker) {
    return fetch(`${ENV.backendURL}speakers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(speaker),
    });
  },

  deleteSpeaker(speaker) {
    this.speakers.removeObject(speaker);
    return fetch(`${ENV.backendURL}speakers/${speaker.id}`, {
      method: 'DELETE',
    });
  },

  async readBooks() {
    // const response = await fetch(`${ENV.backendURL}books`);
    // return response.json();
    const response = await fetch(`${ENV.backendURL}books`);
    let books = await response.json();
    this.books.clear();
    this.books.pushObjects(books);
    return this.books;
  },

  async readBook(id) {
    // const response = await fetch(`${ENV.backendURL}books/${id}`);
    // return response.json();

    return this.books.find((book) => book.id === parseInt(id));
  },

  changeBook(book) {
    return fetch(`${ENV.backendURL}books/${book.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
  },

  createBook(book) {
    return fetch(`${ENV.backendURL}books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
  },

  deleteBook(book) {
    this.books.removeObject(book);
    return fetch(`${ENV.backendURL}books/${book.id}`, {
      method: 'DELETE',
    });
  }
});
