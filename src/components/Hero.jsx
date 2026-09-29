function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-small-text">
          Hello, I'm
        </p>

        <h1>
          Nilanjan <span>Dey</span>
        </h1>

        <h2>
          Web & App Developer
        </h2>

        <p className="hero-description">
          I am a passionate BCA student interested in creating
          modern, responsive and user-friendly web applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

      </div>

      <div className="hero-card">

        <div className="code-window">

          <div className="window-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="code-content">
            <p>
              <span className="code-purple">const</span>{" "}
              developer = {"{"}
            </p>

            <p className="indent">
              name: <span className="code-green">"Nilanjan"</span>,
            </p>

            <p className="indent">
              role: <span className="code-green">"Web Developer"</span>,
            </p>

            <p className="indent">
              skills: <span className="code-green">"React"</span>
            </p>

            <p>{"}"}</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;