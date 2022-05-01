import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Footer.css"
import { faFacebook, faTwitter, faYoutube, faBilibili } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <div className='footerSec'>
            <div className='w-5/6 md:w-3/4 mx-auto py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div>
                    <p className='text-3xl titleText text-gray-800'>Stockpile</p>
                    <div className='py-6 text-gray-800'>
                        <FontAwesomeIcon className='pr-6' icon={faFacebook}></FontAwesomeIcon>
                        <FontAwesomeIcon className='pr-6' icon={faTwitter}></FontAwesomeIcon>
                        <FontAwesomeIcon className='pr-6' icon={faYoutube}></FontAwesomeIcon>
                        <FontAwesomeIcon className='pr-6' icon={faBilibili}></FontAwesomeIcon>
                    </div>
                </div>
                <div>
                    <p className='text-xl text-gray-800 py-4'>Account and Privacy</p>
                    <div className='text-gray-800'>
                        <p className='pb-2'>Log In</p>
                        <p className='pb-2'>Terms and Conditions</p>
                        <p className='pb-2'>Privacy Policy</p>
                    </div>
                </div>
                <div>
                    <p className='text-xl text-gray-800 py-4'>Abouts</p>
                    <div className='text-gray-800'>
                        <p className='pb-2'>Blogs</p>
                        <p className='pb-2'>Contacts</p>
                    </div>
                </div>
                <div>
                    <p className='text-xl text-gray-800 py-4'>Address</p>
                    <div className='text-gray-800'>
                        <p className='pb-2'>4233 Florentine Dr.</p>
                        <p className='pb-2'>Longmont</p>
                        <p className='pb-2'>​CO 80503</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center py-4 text-gray-800'>Copyright &copy; Stockpile-{currentYear}</p>
            </div>
        </div>
    );
};

export default Footer;