import React from 'react';
import hours from "../../../assets/icons/24-hours.png";
import security from "../../../assets/icons/shield.png";
import checklist from "../../../assets/icons/checklist.png";
import FeatureCard from '../FeatureCard/FeatureCard';
const Features = () => {

    const features = [{
        id: "1",
        name: "User Friendly",
        description: "Easily manage your inventory from your comfort with our user friendly functionalities. Keep track of your deliveries and out of stock comodities.",
        img: checklist
    }, {
        id: "2",
        name: "Data Security",
        description: "Use our application without any worries for your data. We will keep your data secured. A lots of people have trusted us with their data and we are obliged to keep that trust.",
        img: security
    }, {
        id: "3",
        name: "24/7 Online Support",
        description: "We are always here to support you with any query or help. If you need any help with managing your inventory, our management team is here to help.",
        img: hours
    }]

    return (
        <div className='py-8'>
            <h3 className='text-4xl font-bold text-slate-800 text-center py-2'>Our Features</h3>
            <div className='w-11/12 py-4 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    features.map(feature => <FeatureCard key={feature.id} feature={feature}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Features;