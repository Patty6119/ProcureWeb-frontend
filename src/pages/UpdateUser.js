import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateUser = () => {
    const [supplier, setSupplier] = useState("");
    const [products, setProducts] = useState("");
    const [purchaseorders , setPurchaseorders ] = useState("");
    const [purchaseorderdetails  , setPurchaseorderdetails  ] = useState("");
    const [inventory, setInventory] = useState("");
    const [warehouses, setWarehouses] = useState("");
    const [shipments, setShipments] = useState("");
    const [payments, setPayments] = useState("");
    const [message, setMessage] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/user/${id}`);
                setSupplier(res.data.supplier); 
                setProducts(res.data.products);
                setPurchaseorders (res.data.purchaseorders);
                setPurchaseorderdetails  (res.data.purchaseorderdetails );
                setInventory(res.data.inventory); 
                setWarehouses(res.data.warehouses); 
                setShipments(res.data.shipments); 
                setPayments(res.data.payments); 
            } catch (error) {
                setMessage("Error Fetching User");
            }
        };

        if (id) {
            fetchUser();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/update-user/${id}`, { 
                supplier, products , purchaseorders , purchaseorderdetails , inventory , warehouses , shipments , payments
            });
            navigate("/");
        } catch (error) {
            setMessage("Error Updating User. Please Try Again");
        }
    };

    return (
        <div className='container'>
            <h2>Update User</h2>
            {message && <p className='text-danger'>{message}</p>}
            <form onSubmit={handleSubmit}>
                
                <div className='w-25 mb-3'>
                    <label className='form-label'>Supplier</label>
                    <input
                        type='text'
                        className='form-control'
                        value={supplier}
                        onChange={(e) => setSupplier(e.target.value)}
                        required
                    />
                </div>

                <div className='w-25 mb-3'>
                    <label className='form-label'>Products</label>
                    <input
                        type='text'
                        className='form-control'
                        value={products}
                        onChange={(e) => setProducts(e.target.value)}
                        required
                    />
                </div>

                <div className='w-25 mb-3'>
                    <label className='form-label'>Purchaseorders</label>
                    <input
                        type='text'
                        className='form-control'
                        value={purchaseorders}
                        onChange={(e) => setPurchaseorders(e.target.value)}
                        required
                    />
                </div>

                <div className='w-25 mb-3'>
                    <label className='form-label'>Purchaseorderdetails </label>
                    <input
                        type='text'
                        className='form-control'
                        value={purchaseorderdetails }
                        onChange={(e) => setPurchaseorderdetails (e.target.value)}
                        required
                    />
                </div>

                <div className='w-25 mb-3'>
                    <label className='form-label'>Inventory</label>
                    <input
                        type='text'
                        className='form-control'
                        value={inventory}
                        onChange={(e) => setInventory(e.target.value)}
                        required
                    />
                </div>

                <div className='w-25 mb-3'>
                    <label className='form-label'>Warehouses</label>
                    <input
                        type='text'
                        className='form-control'
                        value={warehouses}
                        onChange={(e) => setWarehouses(e.target.value)}
                        required
                    />
                </div>

                <div className='w-25 mb-3'>
                    <label className='form-label'>Shipments</label>
                    <input
                        type='text'
                        className='form-control'
                        value={shipments}
                        onChange={(e) => setShipments(e.target.value)}
                        required
                    />
                </div>

                <div className='w-25 mb-3'>
                    <label className='form-label'>Payments</label>
                    <input
                        type='text'
                        className='form-control'
                        value={payments}
                        onChange={(e) => setPayments(e.target.value)}
                        required
                    />
                </div>


                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    );
};

export default UpdateUser;
