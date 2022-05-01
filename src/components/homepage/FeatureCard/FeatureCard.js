import React from 'react';

const FeatureCard = ({ feature }) => {

    const { name, img, description } = feature;
    return (
        <div>
            <div className='min-h-[180px] flex flex-col md:flex-row justify-center items-start border-2 shadow-lg rounded-md'>
                <div className='p-2'>
                    <img className='w-24 md:w-48' src={img} alt="" />
                </div>
                <div className='p-2'>
                    <p className='text-xl pb-2 font-semibold text-gray-800'>{name}</p>
                    <p className='pb-2 text-lg text-gray-700'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;