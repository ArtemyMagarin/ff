import { apiUrl } from '../config';
import qs from 'query-string';


const apiMiddleware = store => next => action => {
    const type = action.type;

    if (action.api) {
        let body = action.api.method !== 'GET' ? {body: JSON.stringify(action.api.data)} : {};
        let query = action.api.method === 'GET' ? ('?'+qs.stringify(action.api.data)) : '';
        query = (query.length === 1) ? '' : query;
        let options = {
            method: action.api.method,
            credentials: 'include',
            ...body,
        };

        fetch(`${apiUrl}${action.api.url}${query}`, options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                next({...action, type, data})
            })
            .catch(err => {
                console.log(err)
                next({...action, type: type + '__ERROR'})
            })
        next({...action, type: type + '__PENDING'})
    } else {
        next(action);
    }
}

export default apiMiddleware;
