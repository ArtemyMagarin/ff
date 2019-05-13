import React from 'react';
import Home from './Home';
import Footer from './Footer';
import '../styles/home.css'

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
