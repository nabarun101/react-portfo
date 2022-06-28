import React from 'react';
import '../../App.css'
import HomeSection from '../HomeSection';
import {SliderData} from '../SliderData';
import Cards from '../Cards';
import Footer from '../Footer';
import Info from '../Info';

function Home(){
    return(
        <>
        <HomeSection slides={SliderData}/>
        <Info />
        <Cards />
        <Footer />
        </>
    );
}

export default Home;