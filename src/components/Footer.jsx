function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div>
          <h3>
            <span>&lt;</span>PS<span>/&gt;</span>
          </h3>

          <p>
            Web & App Developer
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Priyangshu Sarkar.
          All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;