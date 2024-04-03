import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row,Form, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu';

import img from "./../assets/logo.png"
import { Nav, Card, Navbar, Container } from 'react-bootstrap';

const  Navbare = () => {
    return (



<header id="header" className="header  bg-white fixed-top d-flex align-items-center">
<div className="d-flex align-items-center justify-content-between">
  <a  className="logo d-flex align-items-center text-decoration-none">
    <img src={img} alt style={{width:"60px", height:"60px"}} />

  </a>
  <i className="bi bi-list toggle-sidebar-btn" />
</div>{/* End Logo */}
<div className="search-bar">
<Form inline>
      <Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
          />
        </Col>
        
      </Row>
    </Form>


</div>{/* End Search Bar */}


</header> 


      );
}
 
export default Navbare ;





