import { Carousel } from 'react-bootstrap';

function ImageCarousel() {
  const carouselItems = [
    {
      image: "https://www.celpip.ca/wp-content/uploads/2019/07/trios-college-london-campus-exterior-wide-katie-naccarato.jpg",
      title: "Example headline.",
      description: "Some representative placeholder content for the first slide of the carousel.",
      buttonText: "Sign up today"
    },
    {
      image: "https://www.celpip.ca/wp-content/uploads/2019/07/trios-college-london-campus-exterior-wide-katie-naccarato.jpg",
      title: "Another headline.",
      description: "Some representative placeholder content for the second slide of the carousel.",
      buttonText: "Learn more"
    },
    {
      image: "https://www.celpip.ca/wp-content/uploads/2019/07/trios-college-london-campus-exterior-wide-katie-naccarato.jpg",
      title: "Final headline.",
      description: "Some representative placeholder content for the third slide of the carousel.",
      buttonText: "Browse gallery"
    }
  ];

  return (
    <div id="carousel" className="carousel-wrapper">
      <Carousel 
        fade 
        interval={5000} 
        className="main-carousel"
        indicators={true}
        prevIcon={<span className="carousel-control-prev-icon" />}
        nextIcon={<span className="carousel-control-next-icon" />}
      >
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-slide">
              <div className="dark-overlay"></div>
              <img
                className="d-block w-100"
                src={item.image}
                alt={`Slide ${index + 1}`}
              />
              <Carousel.Caption className="carousel-content">
                <h1>{item.title}</h1>
                <p className="lead">{item.description}</p>
                <button className="btn btn-primary btn-lg">
                  {item.buttonText}
                </button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel; 