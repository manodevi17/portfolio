import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>CONTACT ME</p>
        <div className="footer-links">
          <a href="mailto:manodevi1707@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/manodevi-s-1b27b53b5" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/manodevi17" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p className="footer-text">&copy; 2026 Mano. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;