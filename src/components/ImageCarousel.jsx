import { Carousel } from 'react-bootstrap'; // React-Bootstrap se Carousel component import kiya gaya

function ImageCarousel() {
  const carouselItems = [ // Carousel items ka data array define kiya gaya
    {
      image: "https://www.celpip.ca/wp-content/uploads/2019/07/trios-college-london-campus-exterior-wide-katie-naccarato.jpg", // Slide 1 ki image
      title: "Example headline.", 
      description: "Some representative placeholder content for the first slide of the carousel.", // Slide 1 ka description
      buttonText: "Sign up today" 
    },
    {
      image: "https://www.celpip.ca/wp-content/uploads/2019/07/trios-college-london-campus-exterior-wide-katie-naccarato.jpg", // Slide 2 ki image
      title: "Another headline.", 
      description: "Some representative placeholder content for the second slide of the carousel.", // Slide 2 ka description
      buttonText: "Learn more" 
    },
    {
      image: "https://www.celpip.ca/wp-content/uploads/2019/07/trios-college-london-campus-exterior-wide-katie-naccarato.jpg", // Slide 3 ki image
      title: "Final headline.", 
      description: "Some representative placeholder content for the third slide of the carousel.", // Slide 3 ka description
      buttonText: "Browse gallery" 
    }
  ];

  return (
    <div id="carousel" className="carousel-wrapper"> {/* Carousel ko wrap kiya gaya div mein */}
      <Carousel 
        fade 
        interval={5000} // Har slide ke liye 5 seconds ka interval set kiya gaya
        className="main-carousel" 
        indicators={true} // Indicators ko enable kiya gaya
        prevIcon={<span className="carousel-control-prev-icon" />} 
        nextIcon={<span className="carousel-control-next-icon" />} 
      >
        {carouselItems.map((item, index) => ( 
          <Carousel.Item key={index}> 
            <div className="carousel-slide"> 
              <div className="dark-overlay"></div> {/* Dark overlay add kiya gaya */}
              <img
                className="d-block w-100"
                src={item.image} // Image ko dynamically set kiya gaya
                alt={`Slide ${index + 1}`} 
              />
              <Carousel.Caption className="carousel-content"> {/* Carousel ke caption content */}
                <h1>{item.title}</h1> {/* Slide ka title */}
                <p className="lead">{item.description}</p> 
                <button className="btn btn-primary btn-lg">
                  {item.buttonText} {/* Button ka text */}
                </button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel; // ImageCarousel component ko export kiya gaya
