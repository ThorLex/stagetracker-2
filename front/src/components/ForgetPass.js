import React, { isValidElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faMailBulk, faUnlockAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";


import './../App.css';
import {useSignup} from '../hooks/useSignup';
import swal from 'sweetalert';
import { useNavigate} from "react-router-dom";
import {useEffect, useState } from 'react';

import { Col, Row, Form, Card, Button, Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "./routes";

import BgImage from "./../assets/img/illustrations/signin.svg";


export default () => {









  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const contenu = "Votre mot de passe est la clé de votre vie numérique.Il protège vos comptes en ligne, vos informations personnelles et vos données sensibles. Si quelqu'un découvre votre mot de passe, il peut accéder à tout cela et causer de graves dommages."
  const sujet = "Recuperation de mot de passe"
  const [success, setsuc] = useState(null)
  const [message, setmes] = useState(null)
  
const handleSubmit =  async (e) => {

 

    e.preventDefault();



    const response = await fetch('/api/user/forgot', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email,contenu,sujet})
    })

    const json = await response.json()
    
    setsuc(json.success)
    setmes(json.message)
console.log(success,message)
 
  }



  


  return (
    <main style={{ backgroundImage: `url(${BgImage})` ,  backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100vh', }}>
      <section className="vh-lg-100 mt-6 mt-lg-0 bg-soft d-flex align-items-center">
        <Container>
          <Row className="justify-content-center mt-5">
            <p className="text-center">
            <Button variant="secondary"  as={Link} to={"/login"} type="submit" className=" col-4 w-99">
            page de connexion
                  </Button>
            </p>
            <Col xs={12} className="d-flex align-items-center m-5 col-12 col-lg-6 justify-content-center">
              <div className="signin-inner my-3 my-lg-0 bg-white shadow-soft border rounded border-light p-lg-5 w-100 fmxw-500"> 
              <div className="row">
              <h3 className="m-4" >Forgot your password?</h3>
              </div>
              
                <p className="m-4">Ne vous inquiétez pas ! Tapez simplement votre email et nous vous enverrons un code pour réinitialiser votre mot de passe</p>
                <Form className="m-4"  onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <Form.Label htmlFor="email" >votre Email</Form.Label>
                    <InputGroup id="email">
                      <Form.Control required autoFocus   onChange={(e)=> setEmail(e.target.value )} value={email} type="email" placeholder="john@company.com" />
                    </InputGroup>
                  </div>
                  <Button variant="primary" type="submit"   className="w-100">
                  Récupérer votre mot de passe
                  </Button>
                </Form>
                
                  {success == false && <div className=" center error fs-6">   <FontAwesomeIcon  className="error" icon={faUser} />  {message}</div>}
                {success == true && <div className=" center success  fs-6">   <FontAwesomeIcon  className="success" icon={faUser} />  {message}</div>}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
