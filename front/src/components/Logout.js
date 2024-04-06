
 import { useAuthContext } from "../hooks/useAuthContext";
  Logout = () => {
     

 handleclick = () => {
    logout()
     
   };


 
        return ( 
            <div className="header">
                <button onClick={handleclick }>se deonneter </button>
        
                    <Link to ="/">
                    <button>
                      se deconecter
                    </button>
                    </Link>
               
            </div>
         )

        };

 
export default Logout;