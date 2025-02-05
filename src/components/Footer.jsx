import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap ka CSS import

const Footer = () => {
  return (
    <footer  className="bg-dark text-light py-4 w-100"> {/* Footer ko style kiya gaya */}
      <div className="container-fluid"> {/* Full-width container */}
        <div className="row">
          <div className="col-12 col-md-4 mb-3 mb-md-0"> {/* First column */}
            <h5>About Us</h5>
            <p>Creating amazing web experiences</p>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0"> {/* Second column */}
            <h5>Contact</h5>
            <p>Email: info@example.com</p>
          </div>
          <div className="col-12 col-md-4"> {/* Third column */}
            <h5>Follow Us</h5>
            <p>shivam0011</p>
          </div>
        </div>
        <hr className="my-4" /> {/* Horizontal line */}
        <div className="row"> {/* Copyright section */}
          <div className="col-12 text-center"> {/* Center alignment for copyright */}
            <p className="mb-0">© 2024 Your Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Footer component export
