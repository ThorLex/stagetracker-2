
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faHome ,faCloudUploadAlt, faPercentage, faPlus, faRocket, faTasks, faUser, faUserShield } from '@fortawesome/free-solid-svg-icons';
import ColorSchemesExample from "./Navbar"
import Side from'./Side'
import Table from 'react-bootstrap/Table'

import {Dropdown, Col, Row, Card, Image, Button, Breadcrumb, ListGroup, ProgressBar,ButtonGroup } from 'react-bootstrap';

import Chart from "chart.js/auto";

import { useState } from "react";
import "./Side.css"
import   Logo from "./../assets/logo.png"
import { Data } from "./data.js";
import PieChart from "../components/PieChart.js";

import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "./Widgets";
import { PageVisitsTable } from "./Tables";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export default () => {


    const [chartData, setChartData] = useState({
      labels: Data.map((data) => data.year), 
      datasets: [
        {
          label: "progression ",
          data: Data.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,12,20)",
         
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
            
          ],
          borderColor: "black)",
          borderWidth: 2,
          borderSkipped: false,
          borderRadius: 20,
          
        }
      ]
    });
   

  return (
    < Card className="col-12">
  <div className="bienvenue">
    
  </div>
   
<Side className="justify-content-center" pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> 
        
     
      

          <Card>
          <ColorSchemesExample className="justify-content-sm-center "/>


       
<Row className="justify-content-center col-12 mx-1   " style={{maxHeight:'10px'}}>

<div className="col-xxl-4  col-lg-12 ">
    <div className="card info-card customers-card ">
      <div className="filter">
  
        
      </div>
     
<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center m-4 ml-2 ">
  <Dropdown className="btn-toolbar mx-2">
    <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
      <FontAwesomeIcon icon={faPlus} className="me-2" />New Task
    </Dropdown.Toggle>
    <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
      <Dropdown.Item className="fw-bold">
        <FontAwesomeIcon icon={faTasks} className="me-2" /> New Task
      </Dropdown.Item>
      <Dropdown.Item className="fw-bold">
        <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" /> Upload Files
      </Dropdown.Item>
      <Dropdown.Item className="fw-bold">
        <FontAwesomeIcon icon={faUserShield} className="me-2" /> Preview Security
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item className="fw-bold">
        <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Upgrade to Pro
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <ButtonGroup>
    <Button variant="outline-primary" size="sm">Share</Button>
    <Button variant="outline-primary" size="sm">Export</Button>
  </ButtonGroup>
</div>
 <div className="mx-2 row"> <img src={Logo} alt="" className="col-6"  style={{width:"250px", height:"250px"}}/> 
  <div className="col-6 my-5">     <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block mx-3" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /> </Breadcrumb.Item>
            <Breadcrumb.Item>Tables</Breadcrumb.Item>
            <Breadcrumb.Item active>Bootstrap tables</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Bienvenue monsieur BEKONO</h4>
          <p className="mb-0">
            Dozens of reusable components built to provide buttons, alerts, popovers, and more.
          </p>
        </div>
      </div>
</div>
 </div>

    </div>
  </div>

 



   


     <div className="row col-12 my-2">
  
  {/* Customers Card */}
  <div className="col-xxl-4 my-3 col-lg-4">
    <div className="card info-card customers-card">
      <div className="filter">
        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li className="dropdown-header text-start">
            <h6>Filter</h6>
          </li>
          <li><a className="dropdown-item" href="#">Today</a></li>
          <li><a className="dropdown-item" href="#">This Month</a></li>
          <li><a className="dropdown-item" href="#">This Year</a></li>
        </ul>
      </div>
        
      <SalesValueWidgetPhone
      category="Revenue"
      title="$43,594"
      period="Feb 1 - Apr 1"
      percentage={28.4}
      icon={faCashRegister}
      iconColor="shape-tertiary"
    />

    </div>
  </div>{/* End Customers Card */}



  <div className="col-xxl-4  my-3 col-lg-4">
    <div className="card info-card customers-card">
      <div className="filter">
        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li className="dropdown-header text-start">
            <h6>Filter</h6>
          </li>
          <li><a className="dropdown-item" href="#">Today</a></li>
          <li><a className="dropdown-item" href="#">This Month</a></li>
          <li><a className="dropdown-item" href="#">This Year</a></li>
        </ul>
      </div>
        
      <SalesValueWidgetPhone
      category="Revenue"
      title="$43,594"
      period="Feb 1 - Apr 1"
      percentage={28.4}
      icon={faCashRegister}
      iconColor="shape-tertiary"
    />

    </div>
  </div>

  <div className="col-xxl-4  my-3 col-lg-4">
    <div className="card info-card customers-card">
      <div className="filter">
        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li className="dropdown-header text-start">
            <h6>Filter</h6>
          </li>
          <li><a className="dropdown-item" href="#">Today</a></li>
          <li><a className="dropdown-item" href="#">This Month</a></li>
          <li><a className="dropdown-item" href="#">This Year</a></li>
        </ul>
      </div>
        
      <SalesValueWidgetPhone
      category="Revenue"
      title="$43,594"
      period="Feb 1 - Apr 1"
      percentage={28.4}
      icon={faCashRegister}
      iconColor="shape-tertiary"
    />

    </div>
  </div>

 
<Table className="col-6 mx-2 "  striped bordered hover>
<thead>
  <tr>
    <th>#</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Username</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
  </tr>
  <tr>
    <td>3</td>
    <td colSpan={2}>Larry the Bird</td>
    <td>@twitter</td>
  </tr>
</tbody>
</Table>




</div>








</Row>

  








          </Card>

       

    
    
    </Card>
  );
};
