import './App.css'

function App() {
  return (
    <div className="website">
      <nav className="navbar">
        <div className="logo">✦ RISHABH SHARMA</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="stars">✦　✧　·　✦　˚　✧</div>

        <p className="subtitle">VEDIC ASTROLOGY • SPIRITUAL GUIDANCE</p>

        <h1>
          Find Clarity in Your
          <span> Love & Life</span>
        </h1>

        <p className="description">
          When life feels uncertain and your heart seeks answers,
          discover a path toward clarity, peace and new beginnings.
        </p>

        <div className="buttons">
          <a href="#services" className="gold-button">
            Explore Guidance
          </a>
          <a href="#contact" className="outline-button">
            Book Consultation
          </a>
        </div>

        <div className="cosmic-circle">☽ ✦ ☉ ✦ ☾</div>
      </section>

      <section className="services" id="services">
        <p className="subtitle">PERSONAL GUIDANCE</p>
        <h2>Areas of Guidance</h2>

        <div className="service-grid">
          <div className="service-card">
            <span>♡</span>
            <h3>Love & Relationship</h3>
            <p>Explore relationship concerns and emotional clarity.</p>
          </div>

          <div className="service-card">
            <span>☯</span>
            <h3>Marriage Guidance</h3>
            <p>Navigate marriage and family concerns with thoughtful guidance.</p>
          </div>

          <div className="service-card">
            <span>✧</span>
            <h3>Spiritual Guidance</h3>
            <p>Reconnect with inner peace and positive direction.</p>
          </div>

          <div className="service-card">
            <span>☽</span>
            <h3>Life & Astrology</h3>
            <p>Explore your life's questions through astrological insights.</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <p className="subtitle">YOUR GUIDE</p>
        <h2>Astrologer Rishabh Sharma</h2>
        <p>
          Offering personalized astrological consultations and spiritual guidance
          to people seeking clarity in love, relationships and life decisions.
        </p>
      </section>

      <section className="contact" id="contact">
        <p className="subtitle">TAKE YOUR FIRST STEP</p>
        <h2>Your Journey Towards Clarity Begins Here</h2>
        <p>Connect for a personal consultation.</p>

        <a
          className="gold-button"
          href="https://wa.me/919056950763"
          target="_blank"
          rel="noreferrer"
        >
          Chat on WhatsApp
        </a>
      </section>

      <footer>
        © 2026 Astrologer Rishabh Sharma · Spiritual Guidance
      </footer>
    </div>
  )
}

export default App