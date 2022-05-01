import React from 'react';
import Features from '../Features/Features';
import HeroSection from '../HeroSection/HeroSection';
import Inventory from '../Inventory/Inventory';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Inventory></Inventory>
            <Features></Features>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;