import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
const MyItems = () => {
  const navigate = useNavigate() ;
  const [user] = useAuthState(auth)
  const [myItem, setMyItem] = useState([])
  useEffect(() => {
    const myItems = async () => {
      const email = user.email;
      const url = `https://fathomless-cove-99393.herokuapp.com/productAddPerEmail?email=${email}`
       try{
        const { data } = await axios.get(url,{
          headers : {
           authorization:`Bearer ${localStorage.getItem('tokenAccess')}`
          }
       })
       setMyItem(data)
     }
     catch(error){
       console.log(error.message)
       if(error.response.status === 401 || error.response.status === 403){
         navigate('/login')
         signOut(auth)
       }
     }
       }
    myItems()
  }, [user])

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are You Sure Delete Data")
    if (confirmDelete) {
      const url = `https://fathomless-cove-99393.herokuapp.com/productDelete/${id}`
      await axios
        .delete(url)
        .then(response => {
          const filterDelete = myItem.filter(product => product._id !== id)
          setMyItem(filterDelete)
        })
    }
  }

  return (
    <div className='my-4 container'>
      <Table striped bordered hover borderless className="shadow rounded">
        <thead>
          <tr className='text-center'>
            <th>Image</th>
            <th className="fw-bold">Name</th>
            <th className="fw-bold">Price</th>
            <th>Delete My Item</th>
          </tr>
        </thead>
        <tbody>

          {
            myItem?.map(item => {
              return (
                <tr key={item._id} className="text-center">
                  <td>
                    <img src={item.img} alt="" className='img-fluid' height={50} width={150} />
                  </td>
                  <td className="text-center pt-4 fw-bold">{item.name}</td>
                  <td className="text-center pt-4 fw-bold">$ {item.price}</td>
                  <td className="text-center pt-4">
                    <button className="All-Button" onClick={() => handleDelete(item._id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
};

export default MyItems;