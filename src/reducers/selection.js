import { SELECT_ITEM } from '../actions';

export const selectionReducer = (state = null, action) => {
    if ( action.type === SELECT_ITEM ) {
        return action.payload;
    }
    return state;
}