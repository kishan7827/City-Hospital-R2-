import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../compnent/footer/Footer';
import Header from '../compnent/header/Header';

function PublicRoute({ component: Component, restricted = false, ...rest }) {
    let login = localStorage.getItem('login')
    
    return (
        <Route {...rest} render={(props) => (

            login && restricted ?
                <>
                    <Header />
                    <Redirect path='/home' />
                    <Footer />
                </>
                :
                <>
                    <Header />
                    <Component />
                    <Footer />
                </>
            )}
        />
    );
}

export default PublicRoute;