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
                <LinkContainer to="/nosotros">
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

                <LinkContainer to="/cart">
                    <Nav.Link>
                        <CartWidget />
                    </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/contacto">
                    <Nav.Link>Contacto</Nav.Link>
                </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;