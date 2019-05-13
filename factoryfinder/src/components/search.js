import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CompaniesList from './CompaniesList';
import Company from './CompaniesList';


const List = (props) => {
    console.log('List dispatched')
    return (
        <React.Fragment>
            <table>
                <tbody>
                    <tr>
                        <td>123</td>
                        <td>456</td>
                    </tr>
                    <tr>
                        <td>654</td>
                        <td>321</td>
                    </tr>
                </tbody>
            </table>
            <Link to={`/companies/${1}`}>1</Link>
        </React.Fragment>
    )
}


// const Company = (props) => {
//     console.log('Company dispatched')
//     return <p>Company</p>
// }


const SearchResults = (props) => {
    // const list = (<List {...props}/>)
    // const company = (<Company {...props}/>)
    
    // return <CompaniesList {...props}/>

    return (
        <Switch>
            <Route exact path='/companies' render={() => (<CompaniesList {...props}/>)}/>
            <Route path='/companies/:number' render={(props) => (<CompaniesList {...props}/>)}/>
        </Switch>
    )
}

export default SearchResults;
