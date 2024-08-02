import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarBoostrap from "./components/NavBar";
import HomePage from "./Pages/HomePage";
import AddWarehousePage from "./Pages/AddWarehousePage";
import AddProductsPage from "./Pages/AddProductsPage";
import ViewWarehousePage from "./Pages/ViewWarehousePage";
import ViewProductsPage from "./Pages/ViewProductsPage";
import SearchPage from "./Pages/SearchPage"


function App() {
  
  return (
    <div>
      
    <Router>
      <NavbarBoostrap />
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/addwarehouse" element={<AddWarehousePage />} />
            <Route exact path="/addproduct" element={<AddProductsPage />} />
            <Route exact path="/viewwarehousesall" element={<ViewWarehousePage />} />
            <Route exact path="/vieproductsall" element={<ViewProductsPage />} />
            <Route exact path="/search" element={<SearchPage />} />
        </Routes>
    </Router>
    </div>
    
  );
}

export default App;