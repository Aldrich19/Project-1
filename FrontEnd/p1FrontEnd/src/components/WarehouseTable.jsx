import Table from 'react-bootstrap/Table';
import{ React, useState, useEffect} from 'react';
import { getAllWarehouses,updateWarehouse, deleteWarehouse } from '../remote/API';
import { useNavigate } from 'react-router-dom';





function WarehouseTable() {
const navigate = useNavigate();
const [warehouses, setwarehouses] = useState();
const [updateId, setUpdateId] = useState(-1)
const [warehouseLocation, setWarehouseLocation] =useState('')




useEffect(() => {
  (async () => { 
    const result = await getAllWarehouses();
    
    setwarehouses(result); 
  })();
}, []);



const handleEdit =(warehouseId)=>{
setUpdateId(warehouseId)

}
const handlewarehouseLocationChange = (event) => {
  setWarehouseLocation(event.target.value);
};

const handleUpdate = async(event) =>{
event.preventDefault();
await updateWarehouse(updateId, warehouseLocation);
location.reload();
}

const handleDelete = async(warehouseId) =>{

 await deleteWarehouse(warehouseId)
      location.reload();
}

  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Location</th>
          <th>#</th>
          
        </tr>
      </thead>
      <tbody>
        
          {warehouses?
          warehouses.map(warehouse =>(
            warehouse.warehouseId ==updateId?
              <tr>
                <td>{warehouse.warehouseId}</td>
                <td><input type="text" value={warehouseLocation} onChange={handlewarehouseLocationChange}/></td>
                <td><button onClick={handleUpdate}>Update</button></td>
              </tr>
            :
            <tr key={warehouse.warehouseId}>
            <td>{warehouse.warehouseId}</td>
            <td>{warehouse.warehouseLocation}</td>
            <td> 
              <button onClick={()=>handleEdit(warehouse.warehouseId)}> Update</button>
              <button onClick={()=>handleDelete(warehouse.warehouseId)}>Delete</button>

            </td>
            </tr>
          )

          ):
          (<tr><td colSpan='2'>Loading...</td></tr>)
          }
        
      </tbody>
    </Table>
    </>
  );
}

export default WarehouseTable;