import {React, useState, useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Container, InputGroup } from 'react-bootstrap';
import Side from'./Side'



export default () => {

 
 



const [title, settitle] = useState('')
const [status,setstatus] = useState('')
const [help, sethelp] = useState('')
const [dure,setdure] = useState()
const email = "beyasbekono@gmail.com"

        const handleSubmit =  async (e) => {
          e.preventDefault()
          const response = await fetch('/api/user/creation', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ title , dure , status, help,email})
          })
          const json = await response.json()
             
            
          }

  return (
    <article>         
    <Side className="justify-content-center" pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> 
    

      <Container className="py-5">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h1 className="h2">Formulaire de soumission des taches</h1>
            <p className="mb-0">

            <div >
  <div className="card-body">

    <div className="alert alert-primary alert-dismissible fade m-4 show" role="alert">
      <h4 className="alert-heading">Remplissage des informations</h4>
      <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
      <hr />
      <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
   
    </div>
    
  </div>
</div>



            </p>
          </Col>
        </Row>

       
        <div className="card m-4">
  <div className="card-body">
    <h5 className="card-title"> formulaire de remplisage des information</h5>
    {/* No Labels Form */}
    <Form className="row g-3"  >
      <div className="col-md-12">
        <input type="text"  onChange={(e)=> settitle(e.target.value )} value={title} className="form-control" placeholder=" Intitule de la tache" />
      </div>
      <div className="col-md-4">
        <select id="inputState"   value={status}
       onChange={(e) => setstatus(e.target.value)} className="form-select">
          <option selected>Statut  de la tache </option>
          <option value={"temine"}>Terminé</option>
          <option value={"en cours"}>En cous </option>
          <option value={"en attente"}>En attente</option>
        </select>
      </div>

      <div className="col-md-4">
        <select id="inputState" value={help}
       onChange={(e) => sethelp(e.target.value)} className="form-select">
          <option selected>accompagnement</option>
          <option value={"bekono"}>bekono beyas</option>
          <option value={"ambroise"}>  ambroise beyas</option>
          <option value={"mouloum"}>mouloum beyas</option>
          <option value={"koubikat"}>Koubikat beyas</option>
        </select>
      </div>
     
      <div className="col-md-12">
        <input type="number"  onChange={(e)=> setdure(e.target.value )} value={dure} className="form-control" placeholder="inserer une valeur" />
      </div>
     
     
      <div className="text-center">
      <button onClick={() => handleSubmit()}>Add Blog</button>
        <button  className="btn btn-secondary mx-3">Reset</button>
      </div>
    </Form>{/* End No Labels Form */}
  </div>
</div>


    

      </Container>
    </article>
  );
};
