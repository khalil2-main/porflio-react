


export function Header() {
  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary py-3">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Portfolio
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Recent Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Get In Touch
                </a>
              </li>
            </ul>

            <div className="d-flex gap-3 social-icons">
              <a href="#" className="text-white">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-behance"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
  );
}

