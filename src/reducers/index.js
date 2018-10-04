import {combineReducers} from 'redux';
import { libraryReducer as library } from './library';
import { selectionReducer as selection } from './selection';

export const rootReducer = combineReducers({
    library,
    selection,
})