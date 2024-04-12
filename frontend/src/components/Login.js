// import React from 'react';
// import { Link } from 'react-router-dom';
//  import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//  import { faExpeditedssl, faGoogle} from '@fortawesome/free-brands-svg-icons'
import { useState } from "react";
import {useLogin} from '../hooks/useLogin';
import './../App.css';
// import Img1 from "./../assets/log2.png"
// import   Google from "./../assets/g.png"
import swal from 'sweetalert';
import { useNavigate} from "react-router-dom";
import {useEffect } from 'react';


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserXmark, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "./routes";
import BgImage from "./../assets/img/illustrations/signin.svg";


export default () => {


          const navigate = useNavigate();
          const [email,setEmail] = useState('')
          const [password,setPassword] = useState('')
          const {login, isLoading,error,isvalid}=useLogin()
        
          
        const handleSubmit =  async (e) => {
          e.preventDefault()

             await login(email,password) 
            
          }
    
          useEffect(() => {
            console.log(isvalid == true)
    
            if (isvalid == true ) {
             swal("Vous allez etre redirigé vers votre sesiion de travail ", {
               buttons: false,
               timer: 3000,
               title: 'Bienvenue sur Stage Tracker',
                 
                 icon: "success", 
                 
                
               
             });
             navigate("/home");
           }
          });
            
          
       
  return (
    <main style={{ backgroundImage: `url(${BgImage})` ,  backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100vh', }}>
      <section className="d-flex align-items-center">
        <Container>
         


          <Row className="justify-content-center form-bg-image mt-5">
            <Col xs={12} className="d-flex align-items-center justify-content-center col-12 col-lg-6">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  
           

                  <h3 className="mb-0">Se connecter à la plateforme</h3>
                  <Card.Link  className="text-gray-700">
        {error && <div className="error">      
            <FontAwesomeIcon icon={faUserXmark} className="me-2" />  {error}</div> }
            </Card.Link>
             
                </div>
                <Form className="mt-2"  onSubmit={handleSubmit}>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Votre Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="email"  value={email} onChange={(e)=> setEmail(e.target.value) } placeholder="example@company.com" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Votre Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control required type="password"  onChange={(e)=> setPassword(e.target.value )} value={password}  placeholder="Password" />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      
                      <Card.Link className="small text-end" as={Link} to={Routes.forgot.path}>Mot de passe perdu ?</Card.Link>
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Sign in
                  </Button>
                </Form>

                <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">Ou </span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button variant="light" className="btn-icon-only btn-pill text-facebook me-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button variant="light" className="btn-icon-only btn-pill text-twitter me-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button variant="light" className="btn-icon-only btn-pil text-dark">
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Pas de compte?
                    <Card.Link as={Link} to={Routes.Signup.path} className="fw-bold">
                      {` Créer un compte `}
                    </Card.Link>
                  </span>
               
                </div>
                
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

