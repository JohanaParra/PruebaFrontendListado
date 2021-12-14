
import { combineReducers } from 'redux';

import ListReducer from '../module/lista/reducer/ListReducer';

const reducers = {
    list: ListReducer,
}

export default combineReducers( reducers);