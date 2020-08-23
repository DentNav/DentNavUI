import React from 'react';
import AboutUs from '../aboutus/AboutUs';
import Gallery from '../Gallery/Gallery';
import FAQ from '../FAQ/FAQ';
import ContactUs from '../ContactUs/ContactUs';
import Videoplayer from '../videoplayer/Videoplayer';
import { useEffect } from 'react';

function Home(){
    useEffect(()=>{
        window.scroll(0,0);
    })
    return(
        <div id="home">
        <Videoplayer/>
        <AboutUs/>
        <Gallery/>
        <FAQ/>
        <ContactUs/>
        </div>
    )
}

export default Home;