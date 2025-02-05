import { useState } from 'react'; // React se useState import kiya gaya
import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap'; // React-Bootstrap se required components import kiye gaye

function NavbarComponent() {
  const [showModal, setShowModal] = useState(false); // Modal ko show/hide karne ka state manage kiya gaya

  const scrollToSection = (sectionId) => { // Smooth scroll ke liye function define kiya gaya
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' }); // Target section pe scroll kiya gaya
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-3 fixed-top"> {/* Fixed top navbar with light background */}
        <Container>
          <Navbar.Brand>Shivam</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Navbar toggle button */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"> {/* Navigation links ko right-align kiya gaya */}
              <Nav.Link onClick={() => scrollToSection('carousel')}>Home</Nav.Link> 
                          <Nav.Link onClick={() => scrollToSection('cards')}>Cards</Nav.Link> 
              <Button 
                variant="outline-primary" 
                onClick={() => setShowModal(true)} // Button click par modal ko show kiya gaya
                className="ms-2"
              >
                Copyright
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={() => setShowModal(false)}> {/* Modal show/hide state ko handle kiya gaya */}
        <Modal.Header closeButton>
          <Modal.Title>Copyright Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          © 2024 Your Name. All rights reserved. {/* Copyright information */}
        </Modal.Body>
      </Modal>
      
      {/* Add spacing to prevent content from hiding under fixed navbar */}
      <div style={{ marginTop: '76px' }}></div> {/* Navbar ke neeche content ko hide hone se bachane ke liye margin add kiya gaya */}
    </>
  );
}

export default NavbarComponent; // NavbarComponent ko export kiya gaya
