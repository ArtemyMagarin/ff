import React, { useState } from 'react';
import header from '../../styles/header.css';
import Search from './search';
import { Link } from 'react-router-dom'
import logo from '../../logo.svg';
import fav from '../../heart-thin.svg';
import magnifier from '../../magnifying-glass.svg';
import cross from '../../cross.svg';
import '../../styles/main.css';
import { Favorite } from '../common'; 

const Header = (props) => {

    const [showSearch, setShowSearch] = useState(false);


    return (<React.Fragment>
        <header className="header bg-white sticky-top">
            <div className={`${showSearch?'d-none':''} d-sm-inline`}>
                <Link to='/'><img className="ff-logo" src={logo} alt="FactoryFinder Logo"/></Link>
            </div>
            <Search className={`${!showSearch?'d-none':''} d-sm-flex`}/>
            <div className="links-wrapper">
                <img role="button" onClick={()=>{setShowSearch(!showSearch)}} src={showSearch?cross:magnifier} height="14" width="16" className="d-sm-none mr-4 cursor-pointer" alt="Open search line" />
                <Link to='/favorites' className={`${showSearch?'d-none':'d-inline-flex'}  mr-4`}>
                    <Favorite className={'black'}/>
                </Link>
                <Link to='/signin' className={`${showSearch?'d-none':''} d-sm-inline text-dark text-decoration-none`}>
                    Sign In
                </Link>
            </div>
        </header>
    </React.Fragment>)
}

export default Header;