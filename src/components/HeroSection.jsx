const HeroSection = () => {
  return (
    <div 
      className="hero-section w-100" // Hero section ko full width diya gaya
      style={{
        backgroundImage: 'url("https://www.celpip.ca/wp-content/uploads/2019/07/trios-college-london-campus-exterior-wide-katie-naccarato.jpg")', // Hero section ka background image set kiya gaya
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '100vh', // Full viewport height ensure kiya gaya
        position: 'relative' 
      }}
    >
      <div 
        className="overlay" // Overlay ka div jo image ke upar hoga
        style={{
          position: 'absolute', 
          top: 0, left: 0, right: 0, bottom: 0, // Full screen ko cover karega
          backgroundColor: 'rgba(0,0,0,0.5)' // 
        }}
      />
      <div 
        className="content position-relative h-100 d-flex align-items-center justify-content-center text-white text-center" // Content ko center align kiya gaya with flexbox
        style={{ zIndex: 1 }} // Content ko overlay ke upar rakha gaya
      >
        <div className="px-4"> 
          <h1 className="display-3 fw-bold mb-4">Welcome to Our Website</h1> {/* Main heading */}
          <p className="lead mb-4">Discover amazing experiences with us</p> 
          <button className="btn btn-primary btn-lg">Learn More</button> {/* Call-to-action button */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection; // HeroSection component ko export kiya gaya
