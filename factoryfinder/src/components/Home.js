import React, {useEffect} from 'react';

const Home = props => {
    
    useEffect(() => {
        document.querySelector('.search-input-group input').focus();
    }, [])

    return (
        <React.Fragment>
            <div className="row home">
                <div className="col-12 col-md-8 offset-md-2">
                    <h1>
                        FactoryFinder is a platform 
                        for finding business information 
                        about private and public companies.
                    </h1>
                    <p>
                        Our information includes investments and funding information, 
                        founding members and individuals in leadership positions, 
                        mergers and acquisitions, news, and industry trends. 
                        Originally built to track startups, this website contains information 
                        on public and private companies on a global scale.
                    </p>
                </div>
            </div>
            
        </React.Fragment>);
}

export default Home;
