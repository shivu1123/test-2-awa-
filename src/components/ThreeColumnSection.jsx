
const ThreeColumnSection = () => {
  const cards = [ // Cards data define kiya gaya
    {
      title: "Web Development", // First card ka title
      image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*fHrAZJ1_L0Ff9dvVexL5_A.png", // Web Development card ki image
      description: "Building modern and responsive websites using cutting-edge technologies." // Description for Web Development
    },
    {
      title: "UI/UX Design", // Second card ka title
      image: "https://mobitouch.net/_next/image?url=https%3A%2F%2Fnew.mobitouch.pl%2Fwp-content%2Fuploads%2F2023%2F09%2FUI-Designera_-Blog-Main.jpg&w=1920&q=75", // UI/UX Design card ki image
      description: "Creating beautiful and intuitive user interfaces for better experiences." // Description for UI/UX Design
    },
    {
      title: "Digital Marketing", // Third card ka title
      image: "https://dsdeducation.in/wp-content/uploads/2024/02/digital_marketing_img_00-1-1320x743.jpg", // Digital Marketing card ki image
      description: "Implementing effective strategies to grow your online presence." // Description for Digital Marketing
    }
  ];

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: 'white' }}>
      <div className="container"> {/* Inner container for centering content */}
        <h2 className="text-center mb-5">Our Services</h2> 
        <div className="row g-4"> 
          {cards.map((card, index) => ( 
            <div key={index} className="col-12 col-md-6 col-lg-4"> {/* Responsive columns for different screen sizes */}
              <div className="card h-100 shadow-sm" style={{ backgroundColor: 'white' }}> 
                <img 
                  src={card.image} 
                  className="card-img-top" // Card image ko top position pe set kiya gaya
                  alt={card.title} 
                  style={{ height: '250px', objectFit: 'cover' }} 
                />
                <div className="card-body"> 
                  <h5 className="card-title">{card.title}</h5> 
                  <p className="card-text">{card.description}</p> 
                  <button className="btn btn-primary">Learn More</button> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnSection; // ThreeColumnSection component ko export kiya gaya
