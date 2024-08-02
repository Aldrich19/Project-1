import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import { NavLink } from 'react-router-dom';



function NavbarBootstrap (){

  //Navbar handling naigation with react=router-dom navlinks
  
  return(
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand >Tools "R" Us </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" id="text">Home</NavLink>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown" >
                <NavLink to="/addwarehouse">Add Warehouse</NavLink>
                <NavDropdown.Divider />
                <NavLink to="/viewwarehousesall">All Warehouses</NavLink>
                <NavDropdown.Divider />
                <NavDropdown.Divider />
                <NavLink to="/addproduct">  Add Product</NavLink>
                <NavDropdown.Divider />
                <NavLink to="/vieproductsall">All Products</NavLink>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default NavbarBootstrap;