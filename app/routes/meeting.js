import Route from '@ember/routing/route';
import { PER_PAGE } from '../controllers/meeting';
import RSVP from 'rsvp';

export default Route.extend({    
    queryParams: {        
        page: {
            refreshModel: true,
        }
    },

    model(/*search, */{ page, speaker }) {    
        const query = {
            _page: page,
            _limit: PER_PAGE,
        };        

        //return this.get('store').query('meeting', query);
        return RSVP.hash({            
            meetings: this.store.query('meeting', query),
        });
    }
});
