import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
function Menu() {
  return (
    <div className="navstyle">
      <Navbar bg="light" variant="light" expand="lg" fixed="top">
        <Container className="navbar-container">
          <Navbar.Brand href="#home">fredPasqua|webDev</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">about</Nav.Link>
              <Nav.Link href="#project">projects</Nav.Link>
              <Nav.Link href="#contact">contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;
