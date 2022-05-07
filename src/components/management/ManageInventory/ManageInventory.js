import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const ManageInventory = () => {
    const [inventories, setInventories] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/inventories?size=10&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setInventories(data)
            })
    }, [page])

    const handleDelete = id => {
        const consent = window.confirm("Are you sure?");
        if (consent) {

            fetch(`http://localhost:5000/deleteinventory/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        toast.success("Inventory deleted!", { id: "inventoryDelete" })
                    }
                })

            const remaining = inventories.filter(inventory => inventory._id !== id);
            setInventories(remaining);
        }
    }

    useEffect(() => {
        fetch("http://localhost:5000/inventoryCount")
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, []);
    return (
        <div>
            <h3 className='text-4xl font-bold text-slate-800 text-center pt-24 pb-2'>Inventories</h3>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="py-2 inline-block min-w-full">
                        <div className="overflow-hidden">
                            <table className="w-11/12 mx-auto border text-center">
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-sm text-center font-medium text-gray-900 px-2 py-4 border-r">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm text-center font-medium text-gray-900 px-2 py-4 border-r">
                                            Name
                                        </th>
                                        <th scope="col" className="text-sm text-center font-medium text-gray-900 px-2 py-4 border-r">
                                            Description
                                        </th>
                                        <th scope="col" className="text-sm text-center font-medium text-gray-900 px-2 py-4 border-r">
                                            Quantity
                                        </th>
                                        <th scope="col" className="text-sm text-center font-medium text-gray-900 px-2 py-4 border-r">
                                            Manage
                                        </th>
                                        <th scope="col" className="text-sm text-center font-medium text-gray-900 px-2 py-4 border-r">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {inventories.map(inventory => {
                                        return (

                                            <tr key={inventory._id} className="border-b">
                                                <td className="px-2 py-4 text-sm font-medium text-gray-900 border-r">{inventories.indexOf(inventory) + 1}</td>
                                                <td className="text-sm text-gray-900 font-light px-2 py-4 border-r">
                                                    {inventory.name}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-2 py-4 border-r">
                                                    <p className='overflow-scroll md:overflow-auto'>{inventory.description}</p>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-normal border-r">
                                                    {inventory.quantity}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-2 py-4 border-r">
                                                    <button onClick={() => { navigate(`/inventory/${inventory._id}`) }} className='bg-blue-900 hover:bg-blue-600 px-2 py-2 flex justify-center items-center text-white rounded-lg'>
                                                        <p className='hidden lg:block pr-2' >Manage</p>
                                                        <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>
                                                    </button>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-2 py-4">
                                                    <button onClick={() => handleDelete(inventory._id)} className='bg-red-700 hover:bg-red-600 px-2 py-2 flex justify-center items-center text-white rounded-lg'>
                                                        <p className='hidden lg:block pr-2' >Delete</p>
                                                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center py-4'>
                {
                    [...Array(pageCount).keys()].map(num => <button className={page === num ? "bg-blue-900 text-white p-2 rounded-lg hover:bg-blue-600 mr-2" : "p-2 rounded-lg mr-2 hover:bg-gray-400"} onClick={() => setPage(num)} key={num}>{num + 1}</button>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;