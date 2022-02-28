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
          <li className="nav-link">
            <a href="#features">Features</a>
          </li>
          <li className="nav-link"><a href="#team">Team</a></li>
          <li className="nav-link"><a href="#signin">Sign In</a></li>
        </ul>
      </nav>
    </header>
  )
}
