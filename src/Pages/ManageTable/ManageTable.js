import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageTable = ({ product }) => {
  const {img, price, name } = product;
  const navigate = useNavigate()
  return (
    <tbody>
      <tr className="text-center">
        <td>
          <img src={img} alt="" className='img-fluid' height={50} width={150} />
        </td>
        <td className="text-center pt-4 fw-bold">{name}</td>
        <td className="text-center pt-4 fw-bold">$ {price}</td>
        <td className="text-center pt-4">
          <button className="All-Button">Delete</button>
          <button className="All-Button" onClick={()=>navigate("/") }>Add Items</button>
        </td>
      </tr>
    </tbody>
  );
};

export default ManageTable;