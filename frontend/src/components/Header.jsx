import { Link } from "react-router-dom";



export function Header() {

  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            Portfolio
          </Link>

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
                <Link className="nav-link" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Testimonials
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  Recent Work
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Get In Touch
                </Link>
              </li>
            </ul>

            <div className="d-flex gap-3 social-icons">
              <Link href="#" className="text-white">
                <i className="bi bi-linkedin"></i>
              </Link>
              <Link href="#" className="text-white">
                <i className="bi bi-behance"></i>
              </Link>
              <Link href="#" className="text-white">
                <i className="bi bi-twitter"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
  );
}

