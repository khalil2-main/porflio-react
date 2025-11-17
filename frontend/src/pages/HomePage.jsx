


import { Header } from '../components/Header';
import './HomePage.css'


export function HomePage() {
  return (<><title>porfolio</title>
  <div className="bg-dark text-white min-vh-100 d-flex flex-column">
      {/* Navbar */}
      <Header/>

      {/* Hero Section */}
      <section className="container text-center text-md-start d-flex flex-column flex-md-row align-items-center justify-content-center flex-grow-1 py-5">
        {/* Left: Profile Image */}
        <div className="me-md-5 mb-4 mb-md-0">
          <img
            src="profile.jpg"
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
  </>
    
  );
}


