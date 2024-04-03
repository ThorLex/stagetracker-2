

import {React , useState, useEffect }from "react";
import './dash.css'
import logo from './../assets/logo.png'
import { Data } from "./data.js";
import { faCashRegister ,  faChartLine, faHome ,faCloudUploadAlt, faPercentage, faPlus, faRocket, faTasks, faUser, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Card } from "react-bootstrap";
import  {SalesValueWidgetPhone} from './Widgets.js'
import { Link } from "react-router-dom";
import Header from "./header.js";



   

const Tableau = () => {
    return (  

        
        <div>
         <Header></Header>
          <main id="main" className="main">
            <div className="pagetitle">
              <h1>Tableaux des Utilisateurs</h1>
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
                    
                  
                    

             <div className="card">
  <div className="card-body">
  <h5 className="card-title">Tableau des utilisateurs </h5> 
    <div className="row ml-4 ">
   
    <button type="button" className="btn btn-primary m-1  col-6">Ajouter</button>
    <button type="button" className="btn btn-secondary   justify-content -right m-1 col-5">Imprimer</button>


    </div>
   
    <br /><p className=" alert bg-primary bg-opacity-50">Pour plus d'informations sur la personne veuillez selectionner son Nom</p>
    {/* Table with stripped rows */}
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nom</th>
          <th scope="col">Domaine</th>
          <th scope="col">Staut</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Brandon Jacob</td>
          <td>Designer</td>
  
          <td><span class="badge rounded-pill bg-success small">Encadreur</span></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Bridie Kessler</td>
          <td>Developer</td>
    
          <td><span class="badge rounded-pill bg-primary">stagiaire</span></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Ashleigh Langosh</td>
          <td>Finance</td>

          <td><span class="badge rounded-pill bg-success">Encadreur</span></td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Angus Grady</td>
          <td>HR</td>

          <td><span class="badge rounded-pill bg-primary">Stagiaire</span></td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Raheem Lehner</td>
          <td>Dynamic Division Officer</td>

          <td><span class="badge rounded-pill bg-primary">Stagiaire</span></td>
        </tr>
      </tbody>
    </table>
    {/* End Table with stripped rows */}
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
 
export default Tableau;