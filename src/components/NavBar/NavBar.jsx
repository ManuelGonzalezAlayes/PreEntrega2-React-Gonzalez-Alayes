import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">TechArg</Navbar.Brand>
            <Nav className="me-auto gap-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Lavarropas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Heladeras</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Microondas</NavDropdown.Item>
            </NavDropdown>
            <CartWidget/>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    );
    }

export default NavBar;


    // <div className="navbar-container">
    //     <h1>TechArg</h1>
    //     <div>
    //         <p>Inicio</p>
    //         <p>Productos</p>
    //         <p>Nosotros</p>
    //         <p>Contacto</p>
    //     </div>
    // </div>