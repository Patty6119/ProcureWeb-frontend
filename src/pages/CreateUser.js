import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function CreateUser() {
    const [supplier, setSupplier] = useState("");
    const [products, setProducts] = useState("");
    const [purchaseorders, setPurchaseorders] = useState("");
    const [purchaseorderdetails , setPurchaseorderdetails ] = useState("");
    const [inventory , setInventory ] = useState("");
    const [warehouses , setWarehouses ] = useState("");
    const [shipments , setShipments] = useState("");
    const [payments , setPayments] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/create-user", { supplier , products , purchaseorders , purchaseorderdetails , inventory , warehouses , shipments , payments });
                navigate('/'); //redirect to home page


        } catch (error) {
            setMessage("Error creating user, please try again");
        }
    }

    return (
        <div className='container'>
            <h1>Create User</h1>
            {message && <p className='text-danger'>{message}</p>}

            <form onSubmit={handleSubmit}>
                 
                <div className="w-25 p-3">
                    <label className='form-label'>Supplier</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={supplier} 
                        onChange={(e) => setSupplier(e.target.value)} 
                        required 
                    />
                </div>

                <div className="w-25 p-3">
                    <label className='form-label'>Products</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={products} 
                        onChange={(e) => setProducts(e.target.value)} 
                        required 
                    />
                </div>

                <div className="w-25 p-3">
                    <label className='form-label'>Purchase Orders</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={purchaseorders} 
                        onChange={(e) => setPurchaseorders(e.target.value)} 
                        required 
                    />
                </div>

                <div className="w-25 p-3">
                    <label className='form-label'>Purchase Order Details</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={purchaseorderdetails} 
                        onChange={(e) => setPurchaseorderdetails (e.target.value)} 
                        required 
                    />
                </div>

                <div className="w-25 p-3">
                    <label className='form-label'>Inventory</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={inventory} 
                        onChange={(e) => setInventory(e.target.value)} 
                        required 
                    />
                </div>


                <div className="w-25 p-3">
                    <label className='form-label'>Warehouses</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={warehouses} 
                        onChange={(e) => setWarehouses(e.target.value)} 
                        required 
                    />
                </div>

                <div className="w-25 p-3">
                    <label className='form-label'>Shipments</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={shipments} 
                        onChange={(e) => setShipments(e.target.value)} 
                        required 
                    />
                </div>

                <div className="w-25 p-3">
                    <label className='form-label'>Payments</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={payments} 
                        onChange={(e) => setPayments(e.target.value)} 
                        required 
                    />
                </div>

                <div className="w-25 p-3">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateUser;

