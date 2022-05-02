// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ManageTable = ({ product, fun }) => {
//   const [products, setProducts] = fun;
//   console.log(products);
//   const { img, price, name } = product;
//   const navigate = useNavigate()
//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Are You Sure Delete Data")
//     if (confirmDelete) {
//       fetch(`http://localhost:5000/productDelete/${id}`)
//         .then(res => res.json())
//         .then(data => {
//           if (data.deletedCount > 0) {
//             const filterDelete = products.filter(product => product._id !== id)
//             setProducts(filterDelete)
//           }
//         })
//       // await axios
//       //   .delete(`http://localhost:5000/productDelete/${id}`)
//       //   .then(response => {
//       //     if (response.deletedCount > 0) { 
//       //       const filterDelete = products.filter(product => product._id !== id)
//       //       setProducts(filterDelete)
//       //     }
//       //   })
//     }

//   }
//   return (
//     <tbody>
//       <tr className="text-center">
//         <td>
//           <img src={img} alt="" className='img-fluid' height={50} width={150} />
//         </td>
//         <td className="text-center pt-4 fw-bold">{name}</td>
//         <td className="text-center pt-4 fw-bold">$ {price}</td>
//         <td className="text-center pt-4">
//           <button className="All-Button" onClick={() => handleDelete(product._id)}>Delete</button>
//           <button className="All-Button" onClick={() => navigate("/inventory/manageProduct/AddItem")}>Add Items</button>
//         </td>
//       </tr>
//     </tbody>
//   );
// };

// export default ManageTable;