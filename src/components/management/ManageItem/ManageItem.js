import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const ManageItem = () => {

    const id = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(0);
    const [inputQuantity, setInputQuantity] = useState('');
    useEffect(() => {
        fetch(`https://stockpile.onrender.com/inventory/${id.id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                setQuantity(data.quantity);
            })
    }, [id.id]);
    const { img, name, description, price, supplierName } = item;

    const handleQuantity = event => {
        setInputQuantity(event.target.value);
    }

    const handleDelivered = data => {
        let amount;
        if (data === "pos") {
            amount = inputQuantity;
        }
        else {
            if (quantity > 0) {
                amount = "-1";
            }
            else {
                return toast("Item is sold out and cannot be delivered", { id: "delivered" });
            }
        }

        fetch(`https://stockpile.onrender.com/updatequantity/${id.id}?incAmount=${amount}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Stock Updated", { id: "stockUpdate" })
                }
            })
        const newQuantity = quantity + parseInt(amount);
        setQuantity(newQuantity);

    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-16'>
                <div className='p-4 mt-24 md:mt-0'>
                    <img className='w-2/3 mx-auto' src={img} alt="" />
                    <p className='py-2'>ID: {id.id}</p>
                    <p className='text-3xl py-2 font-semibold'>{name}</p>
                    <p className='text-lg font-semibold'>{description}</p>
                    <p className='text-xl py-2'>Price: {price}<span className='text-md text-gray-600'>/unit</span></p>
                    <p className='text-xl pb-2'>Quantity: {quantity}</p>
                    <p className='text-xl'>Supplier: {supplierName}</p>
                    <button onClick={() => handleDelivered("neg")} className='mt-4 py-2 px-6 text-white text-lg bg-blue-900 hover:bg-blue-600 rounded'>Delivered</button>
                </div>
                <div className='p-4'>
                    <h3 className='text-2xl font-bold text-slate-800 text-center py-2'>Update quantity</h3>

                    <div className="form-group mb-6">
                        <label htmlFor="quantity" className="form-label inline-block mb-2 text-gray-700">Add to Stock</label>
                        <input onChange={handleQuantity} type="number" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="quantity"
                            aria-describedby="quantityHelp" placeholder="Put your quantity" name='quantity' />
                        <button onClick={() => handleDelivered("pos")} type="button" className="mt-3
      w-1/3
      px-6
      py-2.5
      bg-blue-900
      text-white
      font-medium
      text-lg
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-600 hover:shadow-lg">Update</button>
                    </div>
                    <div>
                        <button className='py-2 px-4 bg-blue-900 hover:bg-blue-600 text-lg text-center text-white rounded'>
                            <Link to="/manageinventories"> Manage Inventories</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;