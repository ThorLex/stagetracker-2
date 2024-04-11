import {React , useState, useEffect }from "react";
import './dash.css'
import './chat.css' ;
import Header from "./header.js";


import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

const Dash = () => {
    const username = "bekono";
    const [message, setMessage]= useState("")
    const [monTableau, setMonTableau] = useState([])
    const [toiTableau, setToiTableau] = useState([])


    const handleSend =  async (e) => {
        const response = await fetch('/api/user/chat', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ username , message })
        })
      
const json = await response.json()
 console.log(json.stagetracker)
 setMonTableau(json.stagetracker)
 console.log(monTableau)  
const mesValeurs = json.stagetracker.filter(item => item.username === "bekono");
const autresValeurs = json.stagetracker.filter(item => item.username !== "bekono");
setMonTableau(mesValeurs)
setToiTableau(autresValeurs)
   
      }

      




    useEffect(() => {
       console.log(message)
      });
    
 

   
    return ( 

<div>
 <Header></Header>
  <main id="main" className="main">
    <div className="pagetitle">
      <h1>Messagerie chat</h1>
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
              <h5 className="card-title">Messagerie chat
               

              <div className="divider d-flex align-items-center mb-4">
                  <p
                    className="text-center mx-3 mb-0"
                    style={{ color: "#a2aab7" }}
                  >
                 messages
                  </p>
                </div>
  
           
              <>
                <div className="d-flex flex-row justify-content-start">
          </div>
      
               

          {monTableau.map((item, index) => (
            
          <div key={index}>
 

  <div className="d-flex flex-row justify-content-start mb-4 pt-1">
                  <div>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                    {item.message}
                    </p>
                   
                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                    {item.createdAt}
                    </p>
                  </div>
                 <div className="username"> {item.username}</div>
                </div>

              
               
                   {/* <small className="fs-10">{item.createdAt}</small> */}
               
                </div>
          

                ))}
 {/* pour autre  */}
                <div className="d-flex flex-row justify-content-start mb-4 pt-1">
                  <div>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat veniam totam ex eius placeat numquam reprehenderit quo enim.
                    </p>
                   
                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-top">
                      00:06
                    </p>
                  </div>
                 <div className="username">Divine</div>
                </div>

                <div className="d-flex flex-row justify-content-start mb-4">
                 
             
                </div>



                
              </>
          

               </h5>
          
               </div>
                
              <form  className="row m-5" action="">
                    <textarea onChange={(e)=> setMessage(e.target.value)} value={message} className=" form-control my-2 col-9" name="" id="" cols="10" rows="2" placeholder="Ecrire un message..."></textarea>
                 
                    {monTableau && message != "" && <div className="form-control col-2 col-lg-1 btn btn-success" onClick={(e)=> handleSend()}> Ecrire</div>}
                   {!monTableau && <div className="form-control col-2 col-lg-1 btn btn-success" onClick={(e)=> handleSend()}> demmarrer la session </div>}
                </form>
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