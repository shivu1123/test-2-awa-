import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer  className="bg-dark text-light py-4 w-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h5>About Us</h5>
            <p>Creating amazing web experiences</p>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h5>Contact</h5>
            <p>Email: info@example.com</p>
          </div>
          <div className="col-12 col-md-4">
            <h5>Follow Us</h5>
            <p>shivam0011</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">© 2024 Your Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 