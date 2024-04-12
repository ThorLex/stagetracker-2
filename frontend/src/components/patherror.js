

import {React , useState, useEffect }from "react";
import './dash.css'
import logo from './../assets/logo.png'
import { Data } from "./data.js";
import { faCashRegister ,  faChartLine, faHome ,faCloudUploadAlt, faPercentage, faPlus, faRocket, faTasks, faUser, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Card } from "react-bootstrap";
import  {SalesValueWidgetPhone} from './Widgets.js'
import { Link } from "react-router-dom";
import Header from "./header.js";




   

const Error = () => {
    return (  

        
        <div>
         <Header></Header>
          <main id="main" className="main">
       

  <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
    <h1>404</h1>
    <h2>La page que vous recherché n'existe pas </h2>
    <Link to ="./home"> <a className="btn">  Retour a l'Acceuil</a> </Link>
   


         
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
 
export default Error;