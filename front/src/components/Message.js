import React from 'react';

const Message = ({ username, text,position}) => {
  return (


 
<div className="d-flex flex-row justify-content-start" mb-4 pt-1">
  <div>
  <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary"> {text}</p>              
   <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-top"></p>
   </div>
<div className="username">{username}</div>
<br />
</div>




     

  );
};

export default Message;