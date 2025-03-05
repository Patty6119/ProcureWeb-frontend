import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';    //import Link

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const res = await axios.get('http://localhost:5000/');
            console.log("Fetched Data:", res.data);  // ตรวจสอบข้อมูลที่ได้จาก API
            setData(res.data);
            console.log("Success");
        } catch (error) {
            console.log("Fail", error);
        }
    };
    

    const deleteUser = async (id) => {
        if (window.confirm("Are you sure ?")) {
            try {
               await axios.delete(`http://localhost:5000/delete-user/${id}`);
                fetchUser()
                

            } catch (error) {
                console.log("Error deleting user: " + error)
            }
        }
    }

    return (
        <>

            <div className='container mt-4 text-center'>

            <h1 className="mb-4">ProcureWed</h1>


                <Link to="/create-user" className='btn btn-primary btn-lg mb-3'>Create New</Link>

                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">SupplierID (PK)</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Products</th>
                            <th scope="col">PurchaseOrders</th>
                            <th scope="col">PurchaseOrderDetails</th>
                            <th scope="col">Inventory</th>
                            <th scope="col">Warehouses</th>
                            <th scope="col">Shipments</th>
                            <th scope="col">Payments</th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.supplier}</td>
                                <td>{item.products}</td>
                                <td>{item.purchaseorders}</td>
                                <td>{item.purchaseorderdetails }</td>
                                <td>{item.inventory}</td>
                                <td>{item.warehouses}</td>
                                <td>{item.shipments}</td>
                                <td>{item.payments}</td>
                                <td className="d-flex gap-2">
                               <Link to={`/edit-user/${item.id}`} className="btn btn-warning">     
                                   Edit
                              </Link>
                             <button className="btn btn-danger" onClick={() => deleteUser(item.id)}>
                                    Delete
                             </button>
                            </td>

                            </tr>
                        ))}
                      

                    </tbody>
                </table>
            </div>

        </>

    )
}
export default Home;
