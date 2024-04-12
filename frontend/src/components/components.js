
const Affiche = ({stagetracker}) => {

    

    return (
    
        


  <div className>
  <h2>qfdgdfghdfhd</h2>
  {stagetracker.map(blog => (
    <div className="col-12">
    <div className="username">{blog.username}</div>
                  <div>
                    <p
                      className="small p-2 ms-3 mb-1 rounded-3"
                      style={{ backgroundColor: "#f5f6f7" }}
                    >
                    {blog.message}
                    </p>
                   
                  </div>
                </div>
  
  
   



      
        
        ))}
      </div>

     
    );
}
   
  export default Affiche;