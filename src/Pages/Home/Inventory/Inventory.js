import React, { useEffect, useState } from 'react';
import DefaultCarDetais from '../DefaultCarDetais/DefaultCarDetais';

const Inventory = () => {
  const [cars, setCars] = useState([])
  console.log(cars);
  useEffect(() => {
    fetch("http://localhost:5000/products")
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
          cars.slice(0, 6).map(car => <DefaultCarDetais
            key={car._id}
            cars={car} >
          </DefaultCarDetais>)
        }
      </div>
    </div>
  );
};

export default Inventory;