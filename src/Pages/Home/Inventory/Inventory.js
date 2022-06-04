import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultCarDetais from '../DefaultCarDetais/DefaultCarDetais';

const Inventory = () => {
  const [cars, setCars] = useState([])
  const navigate = useNavigate() ;
  useEffect(() => {
    fetch("https://fathomless-cove-99393.herokuapp.com/products")
      .then(res => res.json())
      .then(data => {
        setCars(data)
      })
  }, [])
  return (
    <div className="container mt-5">
      <h3 className="Heading mb-3">INVENTORY</h3>
      <div className="row g-4">
        {
          cars.slice(0,6).map(car => <DefaultCarDetais
            key={car._id}
            cars={car} >
          </DefaultCarDetais>)
        }
      <div className='w-100 d-block text-center'> 
        <button className="All-Button px-5" onClick={() => navigate("inventory/manageProduct")}>Manage-Inventory</button>
      </div>
      </div>
    </div>
  );
};

export default Inventory;