import{ React, ChangeEvent, FormEvent, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import SubmitBotton from './SubmitButton';
import { addWarehouse } from '../remote/API';

function WarehouseForm() {
const navigate = useNavigate();
const [warehouseLocation, setWarehouseLocation] = useState('');


const handlewarehouseLocationChange = (event) => {
  setWarehouseLocation(event.target.value);
};

const handleFormSubmit = async (event) => {
  event.preventDefault();
   await addWarehouse(warehouseLocation);

     navigate('/viewwarehousesall');
   }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
      <FloatingLabel controlId="floatingText" label="Location">
        <Form.Control type="text" placeholder="Location" onChange={handlewarehouseLocationChange}  />
      </FloatingLabel>
      <SubmitBotton />
      </form>
    </>
  );
}

export default WarehouseForm;