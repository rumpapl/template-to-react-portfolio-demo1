import React from 'react';
import NavBar from '../components/navBar/NavBar';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Experiences from '../components/experiences/Experiences';
import Services from '../components/services/Services';
import Contact from '../components/contacts/Contact';
import Prices from '../components/prices/Prices';
import Footer from '../components/footer/Footer';
import BackBtn from '../components/sharedComponents/backButton/BackBtn';

const Home = () => {
    return (
        <>
        <NavBar />
        <Hero />
        <About />
        <Experiences />
        <Services />
        <Contact />
        <Prices />
        <Footer />
        <BackBtn />
    </>
    )
}

export default Home
