import React from 'react';
import notFound from "../../../assets/images/404Error.svg";
const NotFound = () => {
    return (
        <div className='min-h-fit lg:min-h-screen'>
            <img className='w-full lg:w-2/3 mx-auto pt-24 lg:pt-0' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;