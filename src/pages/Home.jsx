import React, {useState } from 'react'
import {Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ImFacebook2 } from "@react-icons/all-files/im/ImFacebook2";
import { ImTwitter } from "@react-icons/all-files/im/ImTwitter";
import './home.css';

function Home() {
  const [inputText, setInputText] = useState("");
  
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

return (
  <>
    <div>
     <Navbar bg="light" expand="lg">
  <Container fluid >
  <img src="https://www.themealdb.com/images/logo-small.png" alt="" className='me-4 mx-2' />
  
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-6 my-2 my-lg-0 ml-4"
        style={{ maxHeight: '100px'}}
       
      >
    <Nav.Link href="/Home" className='mx-0'>Home</Nav.Link>
    <Nav.Link href="https://forum.kodi.tv/showthread.php">Forum</Nav.Link>
   <span> <a className=' me-6 mx-2' href="https://www.facebook.com/TheDataDB/" target='_blank' rel="noreferrer">< ImFacebook2 /></a> </span>
   <span> <a className='mx-2' href="https://twitter.com/TheAudioDB" target='_blank' rel="noreferrer">< ImTwitter /></a> </span>
      </Nav>
      <Form className="">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-6 mx-2"
          aria-label="Search"
          onChange={inputHandler}
        style={{width:'100'}}/>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
</>

  )
}
export default Home