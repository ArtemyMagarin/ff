import React, { useState } from 'react';
import header from './header.css';
import Search from './search';
import { Link } from 'react-router-dom'
import logo from '../../logo.svg';
import fav from '../../heart-thin.svg';

const Header = (props) => {
    
    let [searching, setSearching] = useState(false);
    let [query, setQuery] = useState('');

    query && console.log("Let's find:", query)

    return (
        <React.Fragment>
            <header className="header bg-white sticky-top">
                <Link to='/'><img className="ff-logo" src={logo} alt="FactoryFinder Logo"/></Link>
                <Search searching={searching} sendQuery={(query)=>{
                    setSearching(true);
                    setQuery(query)
                }} />
                <div>
                    <Link to='/favorites'>
                        <img src={fav} height="14" width="16" className="mr-4" alt="Favorites"/>
                    </Link>
                    <Link to='/signin' className="text-dark text-decoration-none">
                        Sign In
                    </Link>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;