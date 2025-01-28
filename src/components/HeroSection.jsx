const HeroSection = () => {
  return (
    <div 
      className="hero-section w-100"
      style={{
        backgroundImage: 'url("https://www.celpip.ca/wp-content/uploads/2019/07/trios-college-london-campus-exterior-wide-katie-naccarato.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative'
      }}
    >
      <div 
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}
      />
      <div 
        className="content position-relative h-100 d-flex align-items-center justify-content-center text-white text-center"
        style={{ zIndex: 1 }}
      >
        <div className="px-4">
          <h1 className="display-3 fw-bold mb-4">Welcome to Our Website</h1>
          <p className="lead mb-4">Discover amazing experiences with us</p>
          <button className="btn btn-primary btn-lg">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 