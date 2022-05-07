import React from 'react';
import { useState, useEffect } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';

const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/inventories?size=6")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <div className='py-8'>
            <h3 className='text-4xl font-bold text-slate-800 text-center py-2'>Inventories</h3>

            <div className='w-11/12 py-4 md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <InventoryItem key={product._id} product={product}></InventoryItem>)
                }
            </div>
        </div>
    );
};

export default Inventory;