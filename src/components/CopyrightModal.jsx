import 'bootstrap/dist/css/bootstrap.min.css'; // yaha pe Bootstrap ka CSS import kiya gaya he

const CopyrightModal = ({ show, handleClose }) => {
  if (!show) return null; // agar show false ho, to kuch bhi render nahi hoga

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}> {/* Modal ko dikhane ka logic aur background color set kiya gaya he */}
      <div className="modal-dialog modal-dialog-centered"> {/* Modal ka layout aur center alignment set kiya gaya he */}
        <div className="modal-content"> {/* Modal ka content area */}
          <div className="modal-header"> {/* Modal ka header jahan title aur close button hote hain */}
            <h5 className="modal-title">Copyright Information</h5> {/* Title ko set kiya gaya he */}
            <button type="button" className="btn-close" onClick={handleClose}></button> {/* Close button ka functionality define kiya gaya he */}
          </div>
          <div className="modal-body"> {/* Modal ka body jahan content dikhaya jata he */}
            <p>© 2025 Student Portfolio. All rights reserved.</p> {/* Copyright information */}
          </div>
          <div className="modal-footer"> {/* Modal ka footer jahan action buttons hote hain */}
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              Close
            </button> {/* Close button jo modal ko band karne ka kaam karta he */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightModal; // yaha pe CopyrightModal component ko export kiya gaya he
