import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
 import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faExpeditedssl, faGoogle} from '@fortawesome/free-brands-svg-icons'
import { useState } from "react";
import {useLogin} from '../hooks/useLogin';
import './../App.css';
import Img1 from "./../assets/log2.png"
import   Google from "./../assets/g.png"
import swal from 'sweetalert';
import { useNavigate} from "react-router-dom";

  





    const Signup = () => {
      const navigate = useNavigate();
      const [email,setEmail] = useState( null)
      const [nom, setnom]= useState( null)
      const [prenom, setprenom]= useState( null)
      const [nais, setnais]= useState( null)
      const [lnais, setlnais]= useState( null)
      const [genre, setgenre]= useState( null)
      const [password,setPassword] = useState (null)
      const [repassword,setrePassword] = useState( null)
      const [total, setTotal]= useState(false)
      const {login, isLoading,error,isvalid}=useLogin()
    
      function verifierNom(mot) {
        const regex = /^[a-zA-Z\s*]+$/;
        const regexx =/.{3,}/ ;
       // const pass =/.{8,}/ 
        const vide = /^[.+$]/
        const estValide = regex.test(mot);
        const plus = regexx.test(mot)
        const empty = vide.test(mot)
        
       // const pluss = pass.test(mot)
      //console.log(estValide,empty,plus)
      if (estValide && !empty  && plus) {
        setTotal(true)
        console.log(total)
        return total
      //console.log(total)
      }
      else {
        return null
      }
    
      }
    
 
     
      function verifierpss(toto,tata) {
        const regex = /^[a-zA-Z\s*]+$/;
       //  const regexx =/.{3,}/ ;
       const pass =/.{8,}/ 
        const vide = /^[.+$]/
        const estpasValide = regex.test(toto);
       // const plus = regexx.test(mot)
        const empty = vide.test(toto)
       const pluss = pass.test(toto)
       const equal = (toto==tata)
      //console.log(estpasValide,empty,pluss,equal)
        
      }
 
      useEffect(() => {
        if (verifierNom(nom)) {
        console.log(total)
        }
        

        //console.log(verifierNom(nom),
       // verifierNom(prenom),
      // verifierNom(lnais))
    //  verifierpss(password,repassword)

       
    

       
     
      });
    const handleSubmit =  async (e) => {
      e.preventDefault()

 
 
        
      }

      
    
  
    return (

<div className="container">

  <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-0">
    <div className="container">
      <div className="row justify-content-center">
        <div className=" m-1 col-lg-9 col-md-12 d-flex flex-column align-items-center justify-content-center">
        
          <div className="d-flex justify-content-center p-0">
        
              <img className='logosize col-12 p-1' src={Img1}  /> 
             
            
          
          </div>{/* End Logo */}
          <div className="card mb-3">
  
        
            
         
            <div className="card-body">
              <div className="pt-4 pb-2">
      
              <button className="btn btn-outline-primary w-100" type="submit" style={{height:"50px" ,display: 'flex', justifyContent: 'center', alignItems: 'center'}} > 
              S'inscrire avec  <img className='goo ' src={Google}  /> </button>
      
              <div style={{display: 'flex', margin:"20px",display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <hr style={{width: '50%', margin: '0 5px'}} /> Ou  <hr style={{width: '50%', margin: '0 5px'}} />
</div>

                <h5 className="card-title text-center pb-1 fs-4 mb-3"> S'inscrire</h5>
               
                <form   onSubmit={handleSubmit} noValidate>


                <p className="text-bld  text-center fs-5">Veuillez remplir vos informations. Tous les champs sont requis</p>

                <div className="row">
                <div style={{display: 'flex', margin:"20px",display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <hr style={{width: '60%', margin: '0 5px'}} /> Informations personnelles 
</div>
          
                     
                    

                    <div className="col-12 col-lg-6 mt-2">
                    <input type="text" 
                      onChange={(e)=> setnom(e.target.value )} 
                      value={nom} 
                      name="nom" className="form-control" 
                       placeholder='veuillez renseigner votre nom'
                       required />
                    </div>


                    <div className="col-12 col-lg-6 mt-2">
                    <input type="text" 
                      onChange={(e)=> setprenom(e.target.value )} 
                      value={prenom} 
                      name="prenom" className="form-control" 
                       placeholder='veuillez renseigner votre prénom'
                       required />
                    </div>


                    <div className="col-12 col-lg-6 mt-2">
                    <input type="date"
                      onChange={(e)=> setnais(e.target.value )}
                       value={nais} name="nais" 
                        placeholder='veuillez renseigner votre date de naissnce'
                         className="form-control"
                         required />
                    </div>

                    <div className="col-12 col-lg-6 mt-2">
                    <input type="text"
                      onChange={(e)=> setlnais(e.target.value )}
                       value={lnais} name="lnais" 
                        placeholder='veuillez renseigner votre lieu de naissnce'
                         className="form-control"
                         required />
                    </div>






                    <div className="col-12 mt-2">
 <select name="" id="" 
  onChange={(e)=> setgenre(e.target.value )}
   value={genre} placeholder='veuilez  rensigner votre domaine' className="form-control" required >

  <option value="">Masculin</option>
  <option value="">Feminin</option>
 </select>



                    </div>
                  
                   
                  

                
                  <div style={{display: 'flex', margin:"20px",display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
 Creation de compte  <hr style={{width: '70%', margin: '0 5px'}} />
</div>
            
                  <div className="col-12 col-lg-6 mt-2">
                    <input type="email" 
                      onChange={(e)=> setEmail(e.target.value )} 
                      value={email} name="email" 
                      className="form-control"
                      placeholder='veuillez renseigner votre email' 
                      required />
                    </div>
                     
                    <div className="col-12 col-lg-6 mt-2">

                    <input type="password"   
                     onChange={(e)=> setPassword(e.target.value )} 
                     value={password}
                      name="password"
                       className="form-control"
                      placeholder='veuillez renseigner votre mot de passe '
                     required />
                    </div> 


                    <div className="col-12 col-lg-6 mt-2">
                    <input type="password"  
                     onChange={(e)=> setrePassword(e.target.value )}
                      value={repassword} name="ppassword" className="form-control" 
                       placeholder='veuillez renseigner votre mot de passe ' 
                       required />
                    </div> 
                    

                  </div>
                  
                  <div className="col-12 mt-4">
                  { !isLoading &&  <button className="btn btn-primary w-100" type="submit">Soumettre</button>}
                  { isLoading &&  <button className="btn btn-primary w-100 disable"  type="submit">Un instant...</button>}
                
                  </div>
                  <div className="col-12 mt-1">
                    <p className="small mb-0 text-center">  <Link to="/" className="link">Se connecter</Link> </p>
                  </div>


                 
                </form>
              </div>
              
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </section>
</div>


         
     
    )
  }


export default Signup
