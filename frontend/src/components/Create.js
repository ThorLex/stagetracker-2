
import React, { isValidElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faMailBulk, faUnlockAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../App.css';
import {useSignup} from '../hooks/useSignup';
import swal from 'sweetalert';
import { useNavigate} from "react-router-dom";
import {useEffect, useState } from 'react';



import BgImage from "./../assets/img/illustrations/signin.svg";


export default () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setrePassword] = useState('')
  const [username, setusername] = useState('')
  const {signup, error, isLoading , isValid} = useSignup()

  
const handleSubmit =  async (e) => {
  e.preventDefault()

 



     await signup(username,email,password) 
    
  }

  useEffect(() => {
    console.log(isLoading,error)

    if (isValid == true ) {
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
      <section className="d-flex align-items-center   ">
        <Container >
           <br /><br />
          <Row className="justify-content-center form-bg-image" >
            <Col xs={6} className="d-flex align-items-center justify-content-center col-12 col-lg-6 ">
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-400">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Creation 'un compte</h3>
                </div>
                <Form className="mt-2 "  onSubmit={handleSubmit}>
                  <Form.Group id="user" className="mb-2">
                    <Form.Label>Votre username</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text" value={username} onChange={(e)=> setusername(e.target.value) } placeholder="Audin" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Votre email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faMailBulk} />
                      </InputGroup.Text>
                      <Form.Control required type="email"  onChange={(e)=> setEmail(e.target.value )} value={email}  placeholder="example@company.com"/>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="Password" className="mb-4">
                    <Form.Label>Confirmation Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password"  onChange={(e)=> setPassword(e.target.value )} value={password} placeholder=" Password" />
                    </InputGroup>
                  </Form.Group>
                

                  <Button variant="primary" type="submit" className="w-100 ">
                  S'inscrire
                  </Button>
                </Form>

                <div className="mt-2 mb-4 text-center">
                  <span className="fw-normal">ou</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button variant="light" className="btn-icon-only btn-pill text-facebook me-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button variant="light" className="btn-icon-only btn-pill text-twitter me-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-2">
                {error && <div className="error">{error}</div> }
                  <span className="fw-normal">
                  Vous avez déjà un compte ?
                    <Card.Link as={Link} to={"/login"} className="fw-bold">
                      {` Connecter vous ici`}
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
