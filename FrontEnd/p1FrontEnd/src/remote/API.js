import client from "./AxiosClient";






export const addWarehouse = async (warehouseLocation) => {
    console.log(warehouseLocation);
    return client.post('/warehouses', {warehouseLocation})
      .then((res) => console.log('Successfully created warehouse'))
      .catch((err) => console.log('Error attempting to add warehouse. ', err));
  };


export const addProduct = async (productName, description, quantity, price, warehouseId) => {
    console.log(productName, description, quantity, price, warehouseId);
    return client.post(`/warehouse/${warehouseId}/product`, {productName, description, quantity, price, warehouseId})
      .then((res) => console.log('Successfully created product'))
      .catch((err) => console.log('Error attempting to add product. ', err));
  };


  export const getAllWarehouses = async () => {
    return await client.get('/warehouses')
      .then((res) => { console.log('Successfully Found warehouses'); return res.data.content; })
      .catch((err) => { console.log('Error retriving products: ', err); return []; });
  };

  export const updateWarehouse = async (warehouseId, warehouseLocation) => {
    return client.put(`/warehouse/${warehouseId}`,{warehouseId, warehouseLocation})
      .then((res) => console.log('Successfully updated warehouse'))
      .catch((err) => console.log('Error attempting to update warehouse. ', err));
  };

  export const deleteWarehouse = async (warehouseId) =>{
    return client.delete(`/warehouse/${warehouseId}`)
      .then(() => console.log('Successfully Deleted warehouse'))
      .catch((err) => console.log(err));
  };


  export const getAllProducts = async () => {
    return await client.get('/products')
      .then((res) => { console.log('Successfully Found productss'); return res.data.content; })
      .catch((err) => { console.log('Error retriving products: ', err); return []; });
  };


  export const updateProduct = async (productId, quantity) => {
    return client.put(`/products/${productId}`,{productId, quantity})
      .then((res) => console.log('Successfully updated product'))
      .catch((err) => console.log('Error attempting to update product. ', err));
  };

  export const deleteProduct = async (productId) =>{
    return client.delete(`/products/${productId}`)
      .then(() => console.log('Successfully Deleted product'))
      .catch((err) => console.log(err));
  };


  export const searchProducts = async (term) => {
    return await client.get(`products/keyword/${term}`)
      .then((res) => { console.log('Successfully Found productss'); return res.data.content; })
      .catch((err) => { console.log('Error retriving products: ', err); return []; });
  };

  export default addWarehouse;










