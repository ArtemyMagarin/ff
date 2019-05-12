// import store from '../store'

export const FETCH_COMPANIES = 'FETCH_COMPANIES'
export const FETCH_COMPANIES__PENDING = 'FETCH_COMPANIES__PENDING'
export const FETCH_COMPANIES__ERROR = 'FETCH_COMPANIES__ERROR'
export const SEARCH_COMPANY = 'SEARCH_COMPANY'
export const SET_PAGE = 'SET_PAGE'


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

export function searchCompany(query) {
    return { type: SEARCH_COMPANY, query }
}