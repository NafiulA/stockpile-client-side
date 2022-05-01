import React from 'react';
import Features from '../Features/Features';
import HeroSection from '../HeroSection/HeroSection';
import Inventory from '../Inventory/Inventory';
import Newsletter from '../Newsletter/Newsletter';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Inventory></Inventory>
            <Features></Features>
            <Testimonials></Testimonials>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;