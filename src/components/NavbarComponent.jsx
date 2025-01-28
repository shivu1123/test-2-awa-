import { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap';

function NavbarComponent() {
  const [showModal, setShowModal] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-3 fixed-top">
        <Container>
          <Navbar.Brand>Shivam</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => scrollToSection('carousel')}>Home</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('cards')}>Cards</Nav.Link>
              <Button 
                variant="outline-primary" 
                onClick={() => setShowModal(true)}
                className="ms-2"
              >
                Copyright
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Copyright Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          © 2024 Your Name. All rights reserved.
        </Modal.Body>
      </Modal>
      
      {/* Add spacing to prevent content from hiding under fixed navbar */}
      <div style={{ marginTop: '76px' }}></div>
    </>
  );
}

export default NavbarComponent;