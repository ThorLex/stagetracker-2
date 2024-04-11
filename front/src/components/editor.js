import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Header from './header';
const App = () => {
  const [valeur, setvaleur] = useState('')
 const [json, setvaleu] = useState('')
  const handleSubmit =  async (e) => {
    e.preventDefault()
    const response = await fetch('/api/user/generate', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({valeur})
    })

     const json = await response.json()
    setvaleu(json)
       
      
    }  


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

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Ajouter un membre</h5>
        {/* Floating Labels Form */}
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-12">
            <div className="form-floating">
              <input type="text" className="form-control"  value={valeur} onChange={(e)=> setvaleur(e.target.value) } id="floatingName" placeholder="Your Name" />
              <label htmlFor="floatingName">entrer votre demande</label>
            </div>
            
            
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">soumettre</button>
            
          </div>
        </form>{/* End floating Labels Form */}
      </div>
    </div>
 
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
     <div className="card">
  <div className="card-body">
    <h5 className="card-title">Rapport  genere</h5>
    {json.text}
  </div>
</div>







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
export default App