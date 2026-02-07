import { NavLink } from 'react-router'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="navigation">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>Skills</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
      </div>
      <div className="copyright">
      <p>&copy; 2024 Myx Peace. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
