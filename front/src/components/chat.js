import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Message from './Message';
import Header from "./header.js";

const socket = io('http://localhost:5001');

function Dash() {
  const user = localStorage.getItem("user")
  const me = JSON.parse(user)
  const username = me.email
  console.log(me.email)
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);


  const sendMessage = () => {
    socket.emit('sendMessage', { text: messageText });
    setMessageText('');
  };

  return (
    <div>
     <Header></Header>
     <main id="main" className="main">
    <div className="pagetitle">
      <h1>Acceuil</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Acceuil</a></li>

        </ol>
      </nav>
    </div>{/* End Page Title */}
    <section className="section">
    <div className="App">
  

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
                  > messages </p></div> </h5>
          
        
          
                <div className="d-flex flex-row justify-content-end mb-4 pt-1 ">
              
              
                {messages.map((message, index) => (
          <Message key={index} username={"beyas"} text={message.text}  />
        ))}

      
                </div>

                <form className='row col-10 m-5' action="">
        <textarea onChange={(e)=> setMessageText(e.target.value)} value={messageText} className=" form-control my-2 col-9" name="" id="" cols="10" rows="2" placeholder="Ecrire un message..."></textarea>
        <div className="form-control col-2 col-lg-1 btn btn-success" onClick={(e)=> sendMessage()}> Ecrire</div>
        </form>


                
   





              </div>
            </div>
          </div> 
      </div>
    </section>














     
      





      
    </div>
    </section>
    </main>
 
</div> 


  );
}

export default Dash;