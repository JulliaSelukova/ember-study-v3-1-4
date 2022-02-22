import Route from '@ember/routing/route';
import { PER_PAGE } from '../controllers/meeting';
import RSVP from 'rsvp';

export default Route.extend({    
    queryParams: {        
        page: {
            refreshModel: true,
        },
        speaker: {
            refreshModel: true,
        },
        book: {
            refreshModel: true,
        },
    },

    model(/*search, */{ page, speaker, book }) {    
        const query = {
            _page: page,
            _limit: PER_PAGE,
        };

        if (speaker) {
            query.speaker = speaker;
        }

        if (book) {
            query.book = book;
        }

        //return this.get('store').query('meeting', query);
        return RSVP.hash({
            speakers: this.store.findAll('speaker'),
            books: this.store.findAll('book'),
            meetings: this.store.query('meeting', query),
        });
    }
});
