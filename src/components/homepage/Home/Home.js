import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Inventory from '../Inventory/Inventory';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Inventory></Inventory>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;