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
    <div className="pagetitle my-4">
      <h1>Administration des utilisateurs </h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item active "><a href="index.html">Acceuil</a></li>
        
        </ol>
      </nav>
    </div>{/* End Page Title */}
    <section className="section">
    

        <div className="row">
        <div className=" col-12 col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"> Gestion des Membre </h5>
                
        <div className="row">
  <div className="col-lg-6">
  <div className="card">
      <div className="card-body">
        <h5 className="card-title">Ajouter un membre</h5>
        {/* Floating Labels Form */}
        <form className="row g-3">
          <div className="col-md-12">
            <div className="form-floating">
              <input type="text" className="form-control" id="floatingName" placeholder="Your Name" />
              <label htmlFor="floatingName">le Nom</label>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingEmail" placeholder="Your Email" />
              <label htmlFor="floatingEmail">l'Email</label>
            </div>
          </div>
          <div className="col-md-6">
           
          </div>
          <div className="col-12">
            <div className="form-floating">
              <input min={0} type= "number" className="form-control" placeholder="Address" id="floatingTextarea"  />
              <label htmlFor="floatingTextarea">numero de telephone</label>
            </div>
          </div>
        
          <div className="col-md-12">
            <div className="form-floating mb-3">
              <select className="form-select" id="floatingSelect" aria-label="State">
                <option selected disabled>Role</option>
                <option  value={1}>Encadreur</option>
                <option value={2}>stagiaire</option>
              </select>
              <label htmlFor="floatingSelect">Privileges</label>
            </div>
          </div>
         
          <div className="text-center">
            <button type="submit" className="btn btn-primary">soumettre</button>
            
          </div>
        </form>{/* End floating Labels Form */}
      </div>
    </div>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Modifiation des droits</h5>
        {/* Floating Labels Form */}
        <form className="row g-3">
          <div className="col-md-12">
            <div className="form-floating">
              <input type="text" className="form-control" id="floatingName" placeholder="Your Name" />
              <label htmlFor="floatingName"> Nom </label>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingEmail" placeholder="Your Email" />
              <label htmlFor="floatingEmail"> Email</label>
            </div>
          </div>
          
          <div className="col-12">
            <div className="form-floating">
              <input  min = {0}   type ="number" className="form-control" placeholder="Address" id="floatingTextarea"  />
              <label htmlFor="floatingTextarea">telephone</label>
            </div>
          </div>
       
          <div className="col-md-12">
            <div className="form-floating mb-3">
              <select className="form-select" id="floatingSelect" aria-label="State">
                <option  disabled selected>Nouveau role</option>
                <option value={1}>Administrateur</option>
                <option value={2}>Stagaiare</option>
              </select>
              <label htmlFor="floatingSelect">Privilege</label>
            </div>
          </div>
          
          <div className="text-center">
            <button type="submit" className="btn btn-success">Soumettre</button>
        
          </div>
        </form>{/* End floating Labels Form */}
      </div>
    </div>
  </div>
  <div className="col-lg-6">
  <div className="card">
      <div className="card-body">
        <h5 className="card-title">Attribution des Stagiaires</h5>
        {/* Floating Labels Form */}
        <form className="row g-3">
          <div className="col-md-12">
            <div className="form-floating">
            <select className="form-select" id="floatingSelect" aria-label="State">
                <option selected disabled>nom_utililsateur 1 </option>
                <option value={1}>Administrateur</option>
                <option value={2}>Stagaiare</option>
              </select>
              <label htmlFor="floatingSelect">Choisir Stagiaire</label>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-floating">
            <select className="form-select" id="floatingSelect" aria-label="State">
                <option selected disabled>Nom_utilisateur 2 </option>
                <option value={1}>Administrateur</option>
                <option value={2}>Stagaiare</option>
              </select>
              <label htmlFor="floatingSelect">Choisir Encadreur</label>
            </div>
          </div>
          
          
       
        
          
          <div className="text-center">
            <button type="submit" className="btn btn-secondary">Soumettre</button>
        
          </div>
        </form>{/* End floating Labels Form */}
      </div>
    </div>
    
    
  </div>
</div>


            </div>
          </div>
        </div>

        {/* <div className="col-lg-12 col-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title profile">stagiaire</h5>
             
            </div>
          </div>
        </div>
         */}
      

        
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