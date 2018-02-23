import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
        //console.log('Adding a city payload', action.payload);
        //console.log('Adding a city data', action.payload.data);
        return [ action.payload.data, ...state ];  // ES6 notation for flattening an array
    }

    return state;
}
