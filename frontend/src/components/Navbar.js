import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from"./../assets/logo.png"


function ColorSchemesExample() {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          
          <Nav className="justify-content-center text-center" style={{marginLeft:"15%"}}>
        
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
          </Nav>
          <img src={ Logo} alt="" className='justify-content-center'  style={{width:"50px"  , height:"50px"}}/>
        
        </Container>
      </Navbar>


        

  );
}

export default ColorSchemesExample;