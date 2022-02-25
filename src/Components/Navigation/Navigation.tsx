import './_navigation.scss'
import logo from '../../assets/logo.svg'

export default function Navigation() {
  return (
    <header className="header">
      <div className="header-logo-content">
        <img src={logo} alt="Fylo Icon" className="header-logo" />
      </div>
      <nav className="header-navigation">
        <ul className="nav-links">
          <li className="nav-link">Features</li>
          <li className="nav-link">Team</li>
          <li className="nav-link">Sign In</li>
        </ul>
      </nav>
    </header>
  )
}
