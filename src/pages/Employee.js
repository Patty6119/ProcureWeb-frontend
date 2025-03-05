import React, { Component } from 'react'
import axios from 'axios';

class Employee extends Component {
    constructor() {
        super(); // this is required to call the constructor of the parent class (Component)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios
        .get("http://localhost:5000/") //endpoint to get data from the server
        .then(result => {
            //const { data } = result.data;
            this.setState({
                data: result.data
            })
        })
        .catch(err => {
            console.log("Error");
        });
    }

  render() {
    return (
        <>
        <div className='MyHome'>
            Employee
        </div>

        <div className='container text-center'>

            <h1>Employee</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Products</th>
                        <th scope="col">Purchaseorders</th>
                        <th scope="col">Purchaseorderdetails </th>
                        <th scope="col">Inventory</th>
                        <th scope="col">Warehouses</th>
                        <th scope="col">Shipments</th>
                        <th scope="col">Payments</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(item => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.supplierip}</td> 
                            <td>{item.supplier}</td>
                            <td>{item.products}</td>
                            <td>{item.purchaseorders}</td>
                            <td>{item.purchaseorderdetails}</td>
                            <td>{item.inventory}</td>
                            <td>{item.warehouses}</td>
                            <td>{item.shipments}</td>
                            <td>{item.payments}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    </>
    )
  }
}

export default Employee;
