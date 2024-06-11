import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar() {
  return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <LinkContainer to="/">
                <Navbar.Brand>TechArg</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto gap-3">
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                    <Nav.Link>Nosotros</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <LinkContainer to="/category/lavarropas">
                    <NavDropdown.Item>Lavarropas</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/category/heladeras">
                    <NavDropdown.Item>Heladeras</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/category/microondas">
                    <NavDropdown.Item>Microondas</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>

                <CartWidget />
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