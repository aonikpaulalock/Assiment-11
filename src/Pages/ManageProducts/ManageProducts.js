import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageProducts = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [products._id])

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are You Sure Delete Data")
    console.log(id);
    // if(confirmDelete){
    //     const url =`http://localhost:5000/productDelete/${id}`
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
      const url = `http://localhost:5000/productDelete/${id}`
      await axios
        .delete(url)
        .then(response => {
            const filterDelete = products.filter(product => product._id !== id)
            setProducts(filterDelete)
        })
    }
  }
  return (
    <div className="container my-4">
      <Table striped bordered hover borderless className="shadow rounded">
        <thead>
          <tr className='text-center'>
            <th>Image</th>
            <th className="fw-bold">Name</th>
            <th className="fw-bold">Price</th>
            <th>Delete And Add Items</th>
          </tr>
        </thead>
        <tbody>

          {
            products.map(product => {
              return (
                <tr key={product._id} className="text-center">
                  <td>
                    <img src={product.img} alt="" className='img-fluid' height={50} width={150} />
                  </td>
                  <td className="text-center pt-4 fw-bold">{product.name}</td>
                  <td className="text-center pt-4 fw-bold">$ {product.price}</td>
                  <td className="text-center pt-4">
                    <button className="All-Button" onClick={() => handleDelete(product._id)}>Delete</button>
                    <button className="All-Button" onClick={() => navigate("/inventory/manageProduct/AddItem")}>Add Items</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div >
  );
};
export default ManageProducts