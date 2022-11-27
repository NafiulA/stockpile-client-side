import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';
import InventoryItem from '../InventoryItem/InventoryItem';

const Inventory = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://stockpile.onrender.com/inventories?size=6")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false)
            })
    }, [])
    return (
        <div className='py-8'>
            <h3 className='text-4xl font-bold text-slate-800 text-center py-2'>Inventories</h3>
            {loading && <Loading></Loading>}
            <div className='w-11/12 py-4 md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    products.map(product => <InventoryItem key={product._id} product={product}></InventoryItem>)
                }
            </div>
            <div className='text-center pt-2'>
                <button className='py-2 px-4 bg-blue-900 hover:bg-blue-600 text-lg text-center text-white rounded-lg'>
                    <Link to="/manageinventories"> Manage Inventories</Link>
                </button>
            </div>
        </div>
    );
};

export default Inventory;