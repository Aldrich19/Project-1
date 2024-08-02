import {React, useState, useEffect }from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import SearchTable from "../components/SearchTable";
import searchProducts from "../remote/API";

function SearchPage (){
const [keyword, setKeyword] = useState('');
const [products, setProducts] = useState();

useEffect(() => {
    (async () => { 
      const result = await searchProducts(keyword);
      console.log(result)
      
       
    })();
  }, []);

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    
  };


    return(
        <>
        <form onSubmit={handleFormSubmit}>
      <FloatingLabel controlId="floatingText" label="Location">
        <Form.Control type="text" placeholder="Search" value={keyword} onChange={handleChange}  />
      </FloatingLabel>
        </form>
        
        <SearchTable />
        </>

    )
}

export default SearchPage;