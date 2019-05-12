import {
    ADD_FILTER,
    EXCLUDE_FILTER,
} from '../actions/filterActions'



const initialState = {
    filter: {
        regions: [],
        categories: [],
        maxScore: 100000,
        minScore: 0,
        query: ''
    }
}

export default function filterReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_FILTER:
            if (state[action.data.key] !== undefined) {
                const new_value = Array.isArray(state[action.data.key]) ?  [...state[action.data.key], action.data.value] : action.data.value;
                return {
                    ...state,
                    [action.data.key]: new_value
                }
            }
            return state

        case EXCLUDE_FILTER:
            if (state[action.data.key] !== undefined && Array.isArray(state[action.data.key])) {
                const index = state[action.data.key].indexOf(action.data.value)
                const new_value = (index !== -1) ? [...state[action.data.key].slice(0, index), ...state[action.data.key].slice(index+1)] : [...state[action.data.key]];
                return {
                    ...state,
                    [action.data.key]: new_value
                }
            }
            return state
    }
    return state;
}