import { combineReducers } from 'redux';
import companiesListReducer from './companiesListReducer';
import filterReducer from './filterReducer';


export default combineReducers({
    companiesListReducer,
    filterReducer
});
