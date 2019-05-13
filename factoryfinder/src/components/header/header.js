import React, { useState } from 'react';
import logo from '../../logo.svg';
import header from './header.css';
import Search from './search';
import { Link } from 'react-router-dom'

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
                <Link to='/favorites'><img className="ff-logo" src={logo} alt="FactoryFinder Logo"/></Link>
            </header>
        </React.Fragment>
    )
}

export default Header;