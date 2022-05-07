import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItem = () => {

    const [user] = useAuthState(auth);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    if (errors.name || errors.description || errors.price || errors.quantity || errors.img || errors.supplierName) {

        if (errors?.name) {
            errors.name.message = "Item name is required";
            toast.error(`${errors.name.message}`, { id: "nameError" });
        }

        if (errors?.description) {
            errors.description.message = "Description is required";
            toast.error(`${errors.description.message}`, { id: "descriptionError" });
        }

        if (errors?.price) {
            errors.price.message = "Price is required";
            toast.error(`${errors.price.message}`, { id: "priceError" });
        }

        if (errors?.quantity) {
            errors.quantity.message = "Quantity is required";
            toast.error(`${errors.quantity.message}`, { id: "quantityError" });
        }

        if (errors?.img) {
            errors.img.message = "Image URL is required";
            toast.error(`${errors.img.message}`, { id: "imgError" });
        }

        if (errors?.supplierName) {
            errors.supplierName.message = "Supplier name is required";
            toast.error(`${errors.supplierName.message}`, { id: "supplierError" });
        }

    }

    const onSubmit = data => {
        fetch("http://localhost:5000/additem", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Item is added to database!", { id: "itemAdd" })
                    reset();
                }

            })
    }

    return (
        <div className='py-8 min-h-screen flex flex-col justify-center items-center'>
            <div>
                <h3 className='text-4xl font-bold text-slate-800 text-center pt-24 pb-2'>Add Item</h3>
            </div>
            <div className='w-full md:w-2/4 lg:w-1/2'>
                <div className="block p-6 rounded-lg shadow-lg bg-white">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-6">
                            <label htmlFor="email" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                            <input {...register("userEmail", { value: user.email }, { required: true })} type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="email" aria-describedby="emailHelp" disabled />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="name" className="form-label inline-block mb-2 text-gray-700">Item Name</label>
                            <input {...register("name", { required: true })} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
                                placeholder="Item Name" />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="description" className="form-label inline-block mb-2 text-gray-700">Description</label>
                            <input {...register("description", { required: true })} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="description"
                                placeholder="Short description" />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="supplierName" className="form-label inline-block mb-2 text-gray-700">Supplier</label>
                            <input {...register("supplierName", { required: true })} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="supplierName"
                                placeholder="Supplier name" />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="price" className="form-label inline-block mb-2 text-gray-700">Price</label>
                            <input {...register("price", { required: true })} type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="price"
                                placeholder="Price per unit" />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="quantity" className="form-label inline-block mb-2 text-gray-700">Quantity</label>
                            <input {...register("quantity", { required: true })} type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="quantity"
                                placeholder="Quantity" />
                        </div>
                        <div className="form-group mb-6">
                            <label htmlFor="img" className="form-label inline-block mb-2 text-gray-700">Image URL</label>
                            <input {...register("img", { required: true })} type="url" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="img"
                                placeholder="Image URL" />
                        </div>

                        <input type="submit" className=" w-full px-6 py-2.5 bg-blue-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;