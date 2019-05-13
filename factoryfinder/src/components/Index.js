import React from 'react';
import Home from './Home';
import Footer from './Footer';
import home from '../styles/home.css'

const Index = props => (
    <>
        <main className="home-main">
            <div className="container">
                <Home/>
            </div>
        </main>
        <Footer/>
    </>
)

export default Index;
