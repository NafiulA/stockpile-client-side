import React from 'react';
import "./HeroSection.css";
import banner from "../../../assets/images/banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center heroSec py-3'>
            <div className='order-2 lg:order-1 py-4 '>
                <p className='text-4xl md:text-6xl ml-2 lg:ml-8 font-semibold text-gray-800'>
                    Welcome to World's Leading Warehouse Management Application
                </p>
                <p className='text-2xl ml-2 lg:ml-8 py-2 text-gray-600'>Manage Your Inventories <span className='font-bold text-gray-700'>Hassel-free!</span></p>
                <button onClick={() => { navigate('/register') }} className='flex text-lg text-white mt-4 px-6 ml-2 lg:ml-8 py-4 items-center bg-blue-900 hover:bg-blue-600 rounded-2xl'>
                    <p className='pr-2'>Register to Start</p>
                    <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
                </button>
            </div>
            <div className='order-1 lg:order-2 py-4 mt-16 lg:mt-0'>
                <img className='w-full md:w-5/6 mx-auto' src={banner} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;