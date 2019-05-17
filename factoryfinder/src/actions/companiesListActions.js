// import store from '../store'

export const FETCH_COMPANIES = 'FETCH_COMPANIES'
export const FETCH_COMPANIES__PENDING = 'FETCH_COMPANIES__PENDING'
export const FETCH_COMPANIES__ERROR = 'FETCH_COMPANIES__ERROR'

export const FETCH_COMPANY = 'FETCH_COMPANY'
export const FETCH_COMPANY__PENDING = 'FETCH_COMPANY__PENDING'
export const FETCH_COMPANY__ERROR = 'FETCH_COMPANY__ERROR'


export const ADD_FILTER = 'SET_FILTER'
export const EXCLUDE_FILTER = 'EXCLUDE_FILTER'
export const SEARCH_COMPANY = 'SEARCH_COMPANY'


export function fetchCompanies() {
    return {
        type: FETCH_COMPANIES,
        api: {
            method: 'GET',
            data: {},
            url: '/companies.json'
        }
    }
}

export function fetchCompany(id) {
    return {
        type: FETCH_COMPANY,
        api: {
            method: 'GET',
            data: { id },
            url: '/company.json'
        }
    }
}

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
