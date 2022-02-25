import './_footer.scss'
import logo from '../../assets/logo.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="infos">
        <div className="footer-logo-content">
          <img src={logo} alt="Fylo Icon" className="footer-logo" />
        </div>
        <div className="position-content">
          <p className="position-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nam
            provident deleniti totam numquam modi unde aperiam nemo enim.
          </p>
        </div>
      </div>
    </footer>
  )
}
