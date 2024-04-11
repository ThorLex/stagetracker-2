

import {React , useState, useEffect }from "react";
import './dash.css'
import logo from './../assets/logo.png'
import { Data } from "./data.js";
import { faCashRegister ,  faChartLine, faHome ,faCloudUploadAlt, faPercentage, faPlus, faRocket, faTasks, faUser, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Card } from "react-bootstrap";
import  {SalesValueWidgetPhone} from './Widgets.js'
import { Link } from "react-router-dom";
import Header from "./header.js";




   

const Errorr = () => {
    return (  

        
        <div>
         <Header></Header>
          <main id="main" className="main">
       

  <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
   
    <img src={logo} alt=""  style={{width:"300px" , height:"300px"}} />
     <h5 className="fs-2 text-primary"> BIENVENUE SUR STAGE TRACKER  </h5>
   


         
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
 
export default Errorr;