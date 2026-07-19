import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Manodevi</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Portfolio</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;