import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Style/Footer';

import Header from '../Style/Header'

const Main = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;