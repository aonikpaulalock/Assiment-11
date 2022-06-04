import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageProducts = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fathomless-cove-99393.herokuapp.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [products._id])

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are You Sure Delete Data")
    console.log(id);
    // if(confirmDelete){
    //     const url =`https://fathomless-cove-99393.herokuapp.com/productDelete/${id}`
    //     fetch(url,{
    //       method:"DELETE",
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //       const filterDelete = products.filter(product => product._id !== id) ;
    //       setProducts(filterDelete) 
    //       console.log(data);
    //     })
    // }
    if (confirmDelete) {
      const url = `https://fathomless-cove-99393.herokuapp.com/productDelete/${id}`
      await axios
        .delete(url)
        .then(response => {
            const filterDelete = products.filter(product => product._id !== id)
            setProducts(filterDelete)
        })
    }
  }
  return (
    <div className="container">
      <div className="row table-manage my-3">
      <Table striped bordered hover borderless className="shadow rounded w-sm-100 w-0">
        <thead>
          <tr className='text-center'>
            <th>Image</th>
            <th className="fw-bold">Name</th>
            <th className="fw-bold">Price</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>

          {
            products.map(product => {
              return (
                <tr key={product._id} className="text-center">
                  <td>
                    <img src={product.img} alt="" className="img-fluid" width={100} height={50}/>
                  </td>
                  <td className="text-center pt-4 fw-bold">{product.name}</td>
                  <td className="text-center pt-4 fw-bold">$ {product.price}</td>
                  <td className="text-center pt-4">
                    <button className="manage-btn" onClick={() => handleDelete(product._id)}>Delete</button>
                    <button className="manage-btn" onClick={() => navigate("/inventory/manageProduct/AddItem")}>Add</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      </div>
    </div >
  );
};
export default ManageProducts