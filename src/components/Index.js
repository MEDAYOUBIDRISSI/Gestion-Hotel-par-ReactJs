import React from 'react'

import Header from './Header/Header';
import Slide from './Header/Slide';
import Footer from './Footer/Footer';
import Restau_index from './Restauration/Restau_index';
import Espace_index from './Espace/Espace_index';
import Info_index from './Information/Info_index';
export default function Index() {
    return (
        <div>
            <Header/>
            <Slide/>
            <Info_index/>
            <Espace_index/>
            <Restau_index/>
            <Footer/>
        </div>
    )
}
