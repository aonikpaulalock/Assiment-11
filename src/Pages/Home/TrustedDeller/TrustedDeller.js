import React from 'react';
import { Card } from 'react-bootstrap';
import "../../Styles/ShearedStyle.css"
import deller1 from "../../../Asset/Deller/deller2 (2).png"
import deller2 from "../../../Asset/Deller/deller3 (2).png"
import deller3 from "../../../Asset/Deller/deller1 (2).png"
import deller4 from "../../../Asset/Deller/deller5 (1).png"

const dellers = [
  { id:"1",name: "Joes AutoHub", img: deller1 },
  { id:"2",name: "Mvp Automotives", img: deller2 },
  { id:"3",name: "Athlon Automotives", img: deller3 },
  { id:"4",name: "Athlon Automotives", img: deller4 },
]
const TrustedDeller = () => {
  return (
    <div className='container my-4'>
      <h4 className="Heading">TRUSTED DEALERS</h4>
      <div className='row g-3'>
        {
          dellers.map(deller =>
            <div className='col-md-3' key={deller.id}>
              <Card>
                <Card.Img variant="top" src={deller.img} className="p-3" />
                <Card.Body>
                  <Card.Title className="fw-bold text-center text-muted">{deller.name}</Card.Title>
                </Card.Body>
              </Card>
            </div>)
        }
      </div>
    </div>
  );
};

export default TrustedDeller;