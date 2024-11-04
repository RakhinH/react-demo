import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const NavBar = () => {

    const title = "Zapster"

    return ( 
    <>
      <Navbar className="bg-body-tertiary">
        <Container className='flex gap-4'>
          <h1 className='grow'>{title}</h1>
          <Link to={"/"}>Home</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
          <Link to={"/create"} className="">+</Link>
        </Container>
      </Navbar>
    </>
     );
}
 
export default NavBar;