import axios from 'axios';
import React from 'react';
import { Form } from 'react-bootstrap';

const AddItems = () => {
  const handleAddProduct = async (event) => {
    event.preventDefault()
    const name = event.target.name.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const img = event.target.img.value;
    console.log(name, description, price, img);
    const user = { name, description, price, img }
    const { data } = await axios.post("http://localhost:5000/productAdd", user)
    console.log(data)
  }
  return (
    <div>
      <div className="form-background">
        <Form onSubmit={handleAddProduct}>
          <h3 className="heding">Add Items</h3>
          <Form.Group className="">
            <Form.Control type="text" name="name" placeholder="Name"
              className="input"
              required
            />
          </Form.Group>
          <Form.Group className="">
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              className="input"
              required />
          </Form.Group>
          <Form.Group className="">
            <Form.Control
              type="number"
              name="price"
              placeholder="Price"
              className="input"
              required />
          </Form.Group>
          <Form.Group className="">
            <Form.Control
              type="text"
              name="img"
              placeholder="Image Url"
              className="input"
              required />
          </Form.Group>
          <button type="submit" className="LogSign-Button">Add Items</button>
        </Form>
      </div>
    </div>
  );
};

export default AddItems;