import {React , useState, useEffect }from "react";
import './dash.css'
import logo from './../assets/logo.png'
import { Data } from "./data.js";
import { faCashRegister ,  faChartLine, faHome ,faCloudUploadAlt, faPercentage, faPlus, faRocket, faTasks, faUser, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Card } from "react-bootstrap";
import  {SalesValueWidgetPhone} from './Widgets.js'
import { Link } from "react-router-dom";
import Header from "./header.js";
const Dash = () => {


   
    return ( 

<div>
 <Header></Header>
  <main id="main" className="main">
    <div className="pagetitle">
      <h1>Acceuil</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Acceuil</a></li>

        </ol>
      </nav>
    </div>{/* End Page Title */}
    <section className="section">
      <div className="row">
        <div className="col-lg-12 col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Diagramme </h5>
          
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
        </div>
        <div className="row">
        <div className="col-lg-12 col-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Encadreur</h5>
              le nombre d'encadreur sur la plateforme est : 2

            </div>
          </div>
        </div>

        <div className="col-lg-12 col-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title profile">stagiaire</h5>
              le nombre d'encadreur sur la plateforme est : 1
            </div>
          </div>
        </div>
        </div>
      

        
      </div>

 
    </section>
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer" className="footer">
    <div className="copyright">
      © Copyright <strong><span>Stage Tracker</span></strong>. 
    </div>
   
  </footer>{/* End Footer */}
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
</div>


     );
}
 
export default Dash;