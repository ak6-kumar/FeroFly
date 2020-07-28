import React,{Component} from 'react';
import {Nav,Navbar,NavbarBrand,NavbarToggler,Collapse,NavItem,NavLink,Button,UncontrolledDropdown} from 'reactstrap';
import './style.css';

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
          <div>
            <Navbar color="dark" light expand="md" fixed="top">
              <div className="container">
                <div className="mx-auto">
                <Nav navbar>
                  <NavItem className="m-3">
                    <NavLink className="nav-link" color="white" to="/home"><span className="textColour">HOME</span></NavLink>
                  </NavItem>
                  <NavItem className="m-3">
                    <NavLink className="nav-link" to="/home"><span className="textColour">ABOUT</span></NavLink>
                  </NavItem>
                  <NavItem className="m-3">
                    <NavLink className="nav-link" to="/home"><span className="textColour">ROOMS</span></NavLink>
                  </NavItem>
                  <NavItem className="m-3">
                    <NavLink className="nav-link" to="/home"><span className="textColour">SERVICES</span></NavLink>
                  </NavItem>
                  <NavItem className="m-3">
                    <NavLink className="nav-link" to="/home"><span className="textColour">GALLERY</span></NavLink>
                  </NavItem>
                  <NavItem className="m-3">
                    <NavLink className="nav-link" to="/home"><span className="textColour">SEE & DO</span></NavLink>
                  </NavItem>
                  <NavItem className="m-3">
                    <NavLink className="nav-link" to="/home"><span className="textColour">CONTACT</span></NavLink>
                  </NavItem>
                  <NavItem className="m-3">
                    <Button outline className="textColour" >Book a Room</Button>
                  </NavItem>
                </Nav>
                </div>
              </div>
            </Navbar>
          </div>
        );
    }
}

export default Header;