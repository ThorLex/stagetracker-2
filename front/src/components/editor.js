import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Header from './header';
import {Form}  from "react-bootstrap";
export default function App() {
    const [valeur, setvaleur] = useState('')
    const [valeur1, setvaleurr] = useState()
    const [valeur2, setvaleurrr] = useState()
    


    console.log(valeur1, valeur2)




  


  return (


 
    <div>
    <Header></Header>
     <main id="main" className="main">
       <div className="pagetitle">
         <h1>Generateur de rapport</h1>
        
       </div>{/* End Page Title */}
      
       <section className="section profile">
<div className="row">
<div className="card m-4">
  <div className="card-body">
    <h5 className="card-title"> formulaire de remplisage des information</h5>
    {/* No Labels Form */}
    <Form className="row g-3"  >
      <div className="col-md-12">
        <input type="text" className="form-control" placeholder=" Intitule de la tache" />
      </div>
      <div className="col-md-4">
        <select id="inputState"   className="form-select">
          <option selected>Statut  de la tache </option>
          <option value={"temine"}>Terminé</option>
          <option value={"en cours"}>En cous </option>
          <option value={"en attente"}>En attente</option>
        </select>
      </div>

      <div className="col-md-4">
        <select id="inputState"
       className="form-select">
          <option selected>accompagnement</option>
          <option value={"bekono"}>bekono beyas</option>
          <option value={"ambroise"}>  ambroise beyas</option>
          <option value={"mouloum"}>mouloum beyas</option>
          <option value={"koubikat"}>Koubikat beyas</option>
        </select>
      </div>
     
      <div className="col-md-12">
        <input type="number"   className="form-control" placeholder="inserer une valeur" />
      </div>
     
     
      <div className="text-center">
      <button>Add Blog</button>
        <button  className="btn btn-secondary mx-3">Reset</button>
      </div>
    </Form>{/* End No Labels Form */}
  </div>
</div>
<div className="col-xl-12">
 <div className="card">




 <Editor
      apiKey='82uejwswbi1veoewy5eo9tl9sik45thnahrf6tz7q1af09ry'
      init={{
     
           
   
        language: 'fr_FR',
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate  mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
          
        ],
       
      }}
     
         
      
    />






 </div>


</div>

<div className="col-xl-7">

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