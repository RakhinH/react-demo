import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {

    const title = "Zapster"

    return ( 
    <>
    <h1>{title}</h1>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="src\Home.jsx">Home</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="src\components\login.jsx">Log in</Navbar.Brand>
        </Container>
      </Navbar>
    </>
     );
}
 
export default NavBar;