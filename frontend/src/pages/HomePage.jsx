


import './HomePage.css'


export function HomePage() {
  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column">
      {/* Navbar */}
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

      {/* Hero Section */}
      <section className="container text-center text-md-start d-flex flex-column flex-md-row align-items-center justify-content-center flex-grow-1 py-5">
        {/* Left: Profile Image */}
        <div className="me-md-5 mb-4 mb-md-0">
          <img
            src="profile-photo.jpg"
            alt="Profile"
            className="rounded-circle hero-image shadow-lg"
            width="300"
            height="300"
          />
        </div>

        {/* Right: Intro Text */}
        <div>
          <h1 className="fw-bold display-5">Your Name Here</h1>
          <p className="lead mt-3 mb-4 text-secondary">
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#" className="btn btn-success btn-lg px-4 shadow">
            Let’s get started →
          </a>
        </div>
      </section>
    </div>
  );
}


