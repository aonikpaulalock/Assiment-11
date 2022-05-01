import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageTable from '../ManageTable/ManageTable';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
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
          {
            products.map(product => <ManageTable
              key={product._id}
              product={product}
            >
            </ManageTable>)
          }
      </Table>
    </div>
  );
};

export default ManageProducts;