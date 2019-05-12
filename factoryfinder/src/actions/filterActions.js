
export const ADD_FILTER = 'SET_FILTER'
export const EXCLUDE_FILTER = 'EXCLUDE_FILTER'
export const SEARCH_COMPANY = 'SEARCH_COMPANY'

export function addFilter(key, value) {
    return {
        type: ADD_FILTER,
        data: { key, value }
    }
}

export function excludeFilter(key, value) {
    return {
        type: EXCLUDE_FILTER,
        data: { key, value }
    }
}

export function searchCompany(query) {
    return { type: SEARCH_COMPANY, query }
}
