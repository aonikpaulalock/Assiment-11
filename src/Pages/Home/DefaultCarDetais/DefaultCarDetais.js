import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DefaultCarDetais = ({ cars }) => {
  const { _id,name, supplierName, img, price, quantity, description } = cars;
   const navigate = useNavigate()
  return (
    <div className="col-lg-4 col-md-6">
      <Card className="border-0 shadow p-2">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <h5 className="fw-bold">{name}</h5>
          <Card.Title className="fw-bold text-muted">{supplierName}</Card.Title>
          <Card.Text className="text-muted">
            {description}
          </Card.Text>
          <div className='d-flex align-items-center justify-content-between my-2 mb-4'>
            <h5>Price: $ {price}</h5>
            <h6>Quantity : {quantity}</h6>
          </div>
          <div className="text-center">
          <button className="All-Button" onClick={()=>navigate(`/inventory/${_id}`)}>Update</button>
        </div>
      </Card.Body>
    </Card>
    </div >
  );
};

export default DefaultCarDetais;