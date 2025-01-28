import { useState } from 'react';
import Navbar from './components/NavbarComponent';
import HeroSection from './components/HeroSection';
import ThreeColumnSection from './components/ThreeColumnSection';
import Footer from './components/Footer';
import CopyrightModal from './components/CopyrightModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [showCopyright, setShowCopyright] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar setShowCopyright={setShowCopyright} />
      <HeroSection />
      <ThreeColumnSection />
      <Footer />
      <CopyrightModal 
        show={showCopyright}
        handleClose={() => setShowCopyright(false)}
      />
    </div>
  );
};

export default App;