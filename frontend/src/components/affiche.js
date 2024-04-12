
function CardComponent({ message,username }) {
    return (
      <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>
      message</h2>
       

      <div className="d-flex flex-row justify-content-start">
        
        <div className="username">{username} </div>
           <div>
             <p
               className="small p-2 ms-3 mb-1 rounded-3"
               style={{ backgroundColor: "#f5f6f7" }}
             >
            {message}
             </p>
            
           </div>
         </div>

         <div className="main">
      
     </div>
      </div>
    );
  }
  export default CardComponent;