import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import page_details from './page_reducer';

const rootReducer = combineReducers({
	page_details,
	routing: routerReducer
});

export default rootReducer;
