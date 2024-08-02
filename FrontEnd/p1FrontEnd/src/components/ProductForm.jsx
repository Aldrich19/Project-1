import FloatingLabel from 'react-bootstrap/FloatingLabel';
import{ React, ChangeEvent, FormEvent, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import SubmitBotton from './SubmitButton';
import { addProduct } from '../remote/API';

function ProductForm() {
  const navigate = useNavigate();
  const[productName, setProductName] = useState("");
  const[description, setDescription] = useState("");
  const[quantity, setQuantity] = useState(0);
  const[price, setPrice] = useState("");
  const[warehouseId, setWarehouseId] = useState(0);

  const handlProductNameChange = (event) => {
    setProductName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleWarehouseIdChange = (event) => {
    setWarehouseId(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
     await addProduct(productName, description, quantity, price, warehouseId);
  
       navigate('/');
     }



  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <FloatingLabel controlId="floatingInput1" label="Product name" className="mb-3" >
        <Form.Control type="text" placeholder="Product Name" onChange={handlProductNameChange}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Description" className="mb-3" >
        <Form.Control type="text" placeholder="Description" onChange={handleDescriptionChange}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput3" label="Quantity" className="mb-3">
        <Form.Control type="number" placeholder="Quantity"  onChange={handleQuantityChange}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput4" label="Price" className="mb-3" >
        <Form.Control type="text" placeholder="Price" onChange={handlePriceChange }/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput5" label="Warehouse" className="mb-3" >
        <Form.Control type="number" placeholder="Warehouse" onChange={handleWarehouseIdChange }/>
      </FloatingLabel>
      <SubmitBotton />
      </form>
    </>
  );
}

export default ProductForm;