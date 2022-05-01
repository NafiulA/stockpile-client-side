import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryItem = ({ product }) => {
    const { _id, name, description, img, price, quantity, supplierName } = product;
    console.log(product)

    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center items-center border-2 rounded-lg shadow-md'>
            <div>
                <img className='w-2/3 mx-auto' src={img} alt="" />
            </div>
            <div className='py-2 px-4'>
                <p className='text-xl pb-2'>{name}</p>
                <p className='text-lg'>{description}</p>
                <p className='text-lg pt-2'>Price: BDT {price}<span className='text-md text-gray-500'>/unit</span></p>
                <p className='text-lg'>Quantity: {quantity}</p>
                <p className='text-lg'>Supplier: {supplierName}</p>
                <button onClick={() => { navigate(`/inventory/${_id}`) }} className='flex justify-start items-center my-2 px-4 py-2 text-white rounded-lg bg-blue-900 hover:bg-blue-600'>
                    <p className='text-lg pr-2'>Manage</p>
                    <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default InventoryItem;