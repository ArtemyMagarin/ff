import {
    FETCH_COMPANIES,
    FETCH_COMPANIES__PENDING,
    FETCH_COMPANIES__ERROR,
    SEARCH_COMPANY,
    SET_PAGE
} from '../actions/companiesListActions'

const initialState = {
    allCompaniesList: [],
    currentCompaniesList: [],
    currentPage: 0,
    pending: false,
    error: false,
}


export default function companiesListReducer(state=initialState, action) {
    switch (action.type) {
        case FETCH_COMPANIES: {
            // todo: do more things with data
            return {...state, currentCompaniesList: action.data, pending: false}
        }
        case FETCH_COMPANIES__PENDING: {
            return {...state, pending: true}
        }
        case FETCH_COMPANIES__ERROR: {
            return {...state, pending: false, error: true}
        }
    }
    return state;
}
