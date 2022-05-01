import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Form } from 'react-bootstrap';
import axios from "axios";
const InventoryDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [products, setProducts] = useState([])
  const [reload, setReload] = useState(false)
  const [decraese, setDecrease] = useState(products.quantity)

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `http://localhost:5000/product/${id}`
      );
      setProducts(data);
      setDecrease(data.quantity);
    })()
  }, [id, reload])

  const handleDelevered = () => {
    const quantity = decraese - 1;
    axios.put(
      `http://localhost:5000/product/${id}`, {
      quantity
    })
      .then(response => {
        setReload(!reload)
      })
  }

  const handleAddQuantity = async (event) => {
    event.preventDefault()
    const newQuantity = event.target.number?.value;
    console.log(newQuantity);
    const quantity = parseInt(newQuantity) + parseInt(products?.quantity)
    await axios.put(`http://localhost:5000/product/${id}`, {
      quantity,
    })
      .then(response => {
        setReload(!reload)
      })
  }
  return (
    <div className="container my-5">
      <div className="row border-1 shadow p-3">
        <div className="col-md-6 mt-5">
          <div className="form-background">
            <Form onSubmit={handleAddQuantity}>
              <h3 className="heding">Delevered</h3>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="number"
                  placeholder="Enter Delevery Number"
                  className="input"
                  autoComplete='off'
                  required/>
              </Form.Group>
              <button type="submit" className="LogSign-Button" >Delevered</button>
            </Form>
          </div>
        </div>
        <div className='col-md-6'>
          <Card className="shadow border-0">
            <Card.Img variant="top" src={products.img} />
            <Card.Body className="text-center">
              <h5 className="fw-bold fs-3">{products.name}</h5>
              <Card.Title className="fw-bold text-muted">{products.supplierName}</Card.Title>
              <Card.Text className="text-muted">
                {products.description}
              </Card.Text>
              <div className='d-flex align-items-center justify-content-around my-2 mb-4'>
                <h5>Price: $ {products.price}</h5>
                <h5>Quantity : {products.quantity}</h5>
              </div>
              <div className=" d-block w-50 mx-auto">
                <button className="All-Button" onClick={handleDelevered}>Delevered</button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="w-100 d-block text-center pt-3">
        <button className="Manage-Button" onClick={()=>navigate('/inventory/manageProduct')}>Manage-Inventory</button>
      </div>
    </div>
  );
};

export default InventoryDetails;