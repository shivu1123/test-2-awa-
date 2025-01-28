import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ThreeColumnSection = () => {
  const cards = [
    {
      title: "Web Development",
      image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*fHrAZJ1_L0Ff9dvVexL5_A.png",
      description: "Building modern and responsive websites using cutting-edge technologies."
    },
    {
      title: "UI/UX Design",
      image: "https://mobitouch.net/_next/image?url=https%3A%2F%2Fnew.mobitouch.pl%2Fwp-content%2Fuploads%2F2023%2F09%2FUI-Designera_-Blog-Main.jpg&w=1920&q=75",
      description: "Creating beautiful and intuitive user interfaces for better experiences."
    },
    {
      title: "Digital Marketing",
      image: "https://dsdeducation.in/wp-content/uploads/2024/02/digital_marketing_img_00-1-1320x743.jpg",
      description: "Implementing effective strategies to grow your online presence."
    }
  ];

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row g-4">
          {cards.map((card, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm" style={{ backgroundColor: 'white' }}>
                <img 
                  src={card.image} 
                  className="card-img-top" 
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

export default ThreeColumnSection;