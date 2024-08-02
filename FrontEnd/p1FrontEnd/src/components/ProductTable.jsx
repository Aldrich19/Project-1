import Table from 'react-bootstrap/Table';
import { React, useState, useEffect} from 'react';
import {getAllProducts, deleteProduct, updateProduct } from "../remote/API";






function ProductTable() {
const [products, setProducts] = useState();
const [updateId, setUpdateId] = useState(-1)
const [updateQuantity, setUpdateQuantity] =useState();

useEffect(() => {
  (async () => { 
    const result = await getAllProducts();
    setProducts(result); 
  })();
}, []);

const handleEdit =(productId)=>{
  setUpdateId(productId)
  
  }
  const handleQuantityChange = (event) => {
    setUpdateQuantity(event.target.value);
    
  };
  
  const handleUpdate = async(event) =>{
  event.preventDefault();
  await updateProduct(updateId, updateQuantity);
  console.log(updateQuantity);
  location.reload();
  }
  
  const handleDelete = async(productId) =>{
  
   await deleteProduct(productId)
        location.reload();
  }





  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
      {products?
          products.map(product =>(
            product.productId ==updateId?
              <tr>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td><input type="text" value={updateQuantity} onChange={handleQuantityChange}/></td>
                <td>{product.price}</td>
                <td><button onClick={handleUpdate}>Update</button></td>
              </tr>
            :
            <tr key={product.productId}>
            <td>{product.productId}</td>
            <td>{product.productName}</td>
            <td>{product.description}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td> 
              <button onClick={()=>handleEdit(product.productId)}> Update</button>
              <button onClick={()=>handleDelete(product.productId)}>Delete</button>

            </td>
            </tr>
          )

          ):
          (<tr><td colSpan='2'>Loading...</td></tr>)
          }
      </tbody>
    </Table>
  );
}

export default ProductTable;