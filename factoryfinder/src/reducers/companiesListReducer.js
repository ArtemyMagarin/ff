import {
    FETCH_COMPANIES,
    FETCH_COMPANIES__PENDING,
    FETCH_COMPANIES__ERROR,
    FETCH_COMPANY,
    FETCH_COMPANY__PENDING,
    FETCH_COMPANY__ERROR,
    ADD_FILTER,
    EXCLUDE_FILTER
} from '../actions/companiesListActions'

const initialState = {
    allCompaniesList: [],
    currentCompaniesList: [],
    favoriteCompaniesList: [],
    pending: false,
    error: false,

    selectedCompany: null,

    lists: {
        allCategories: [],
        allRegions: [],
        allScores: [],
    },
    filter: {
        regions: [],
        categories: [],
        maxScore: 100000,
        minScore: 0,
        query: ''
    }
}

const doFilter = (companiesList, {regions, categories, maxScore, minScore, query}) => {
    console.log(Date.now())
    const list = companiesList.filter(company => (
        company.score >= (+minScore||0) &&
        company.score <= (+maxScore||100000) &&
        (regions.length === 0 || company.regions.some(region => ~regions.indexOf(region))) &&
        (categories.length === 0 || company.rubrics.some(category => ~categories.indexOf(category))) &&
        (query.length === 0 || ~company.company_name.toLowerCase().indexOf(query.toLowerCase()))
    ))
    console.log(Date.now())
    return list
}


export default function companiesListReducer(state=initialState, action) {
    switch (action.type) {
        case FETCH_COMPANIES: 
            const companiesList = [...action.data];
            return {
                ...state, 
                currentCompaniesList: doFilter(companiesList, {...state.filter}), 
                favoriteCompaniesList: [...companiesList.slice(10, 30)],
                allCompaniesList: [...action.data], 
                lists: {
                    allCategories: [...new Set(companiesList.reduce((categories, company) => ([...categories, ...company.rubrics]), []))],
                    allRegions: [...new Set(companiesList.reduce((regions, company) => ([...regions, ...company.regions]), []))],
                    allScores: companiesList.map(company => +company.score),
                },
                filter: {
                    ...state.filter,
                    maxScore: companiesList.reduce((prevMax, company) => Math.max(+company.score, prevMax), 0),
                    minScore: companiesList.reduce((prevMin, company) => Math.min(+company.score, prevMin), 0),
                },
                pending: false,
                error: false,
            }
        case FETCH_COMPANIES__PENDING:
            return {...state, pending: true}
        case FETCH_COMPANIES__ERROR: 
            return {...state, pending: false, error: true}

        case FETCH_COMPANY: 
            return {
                ...state, 
                selectedCompany: action.data,
                pending: false,
                error: false,
            }
        case FETCH_COMPANY__PENDING:
            return {...state, selectedCompany: null, pending: true}
        case FETCH_COMPANY__ERROR: 
            return {...state, selectedCompany: null, pending: false, error: true}

        case ADD_FILTER:
            if (state.filter[action.data.key] !== undefined) {
                const new_value = Array.isArray(state.filter[action.data.key]) ?  [...state.filter[action.data.key], action.data.value] : action.data.value;
                return {
                    ...state,
                    currentCompaniesList: doFilter(state.allCompaniesList, {...state.filter, [action.data.key]: new_value }),
                    filter: {
                        ...state.filter,
                        [action.data.key]: new_value
                    }
                }
            }
            return state

        case EXCLUDE_FILTER:
            if (state.filter[action.data.key] !== undefined && Array.isArray(state.filter[action.data.key])) {
                const index = state.filter[action.data.key].indexOf(action.data.value)
                const new_value = (index !== -1) ? [...state.filter[action.data.key].slice(0, index), ...state.filter[action.data.key].slice(index+1)] : [...state.filter[action.data.key]];
                return {
                    ...state,
                    currentCompaniesList: doFilter(state.allCompaniesList, {...state.filter, [action.data.key]: new_value }),
                    filter: {
                        ...state.filter,
                        [action.data.key]: new_value
                    }
                }
            }
            return state
        default:
            return state;
    }
    return state;
}
