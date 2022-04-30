import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
  const { id } = useParams()
  const [ products, setProducts ] = useState([])
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data)
      })
  }, [])
  return (
    <div>
      <h1>Name:{products?.name}</h1>
    </div>
  );
};

export default InventoryDetails;