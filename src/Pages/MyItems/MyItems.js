import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
const MyItems = () => {
  const [user] = useAuthState(auth)
  const [myItem, setMyItem] = useState([])
  useEffect(() => {
    const myItems = async () => {
      const email = user.email;
      const url = `http://localhost:5000/productAddPerEmail?email=${email}`
      const { data } = await axios.get(url)
      setMyItem(data)
    }
    myItems()
  }, [user])
  return (
    <div>
      <h1>my items {myItem.length}</h1>
    </div>
  );
};

export default MyItems;