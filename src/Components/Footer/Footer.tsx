import './_footer.scss'
import logo from '../../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import FormFooter from '../FormFooter/FormFooter'

export default function Footer() {
  return (
    <footer className="footer">
      <FormFooter />
      <div className="footer-content">
        <div className="footer-logo-content">
          <img src={logo} alt="Fylo Icon" className="footer-logo" />
        </div>
        <div className="infos">
          <div className="location-content">
            <div className="location-icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <p className="location-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nam
              provident deleniti totam numquam modi unde aperiam nemo enim.
            </p>
          </div>
          <div className="contact-content">
            <div className="contact-phone">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <p className="contact-text">+1-543-123-4567</p>
            </div>
            <div className="contact-mail">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <p className="contact-text">example@fylo.com</p>
            </div>
          </div>
          <div className="footer-links">
            <ul className="infos-links left-links">
              <li className="info-link">About Us</li>
              <li className="info-link">Jobs</li>
              <li className="info-link">Press</li>
              <li className="info-link">Blog</li>
            </ul>
            <ul className="infos-links right-links">
              <li className="info-link">Contact Us</li>
              <li className="info-link">Terms</li>
              <li className="info-link">Privacy</li>
            </ul>
            <div className="footer-icons">
              <div className="footer-icon facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className="footer-icon twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="footer-icon instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
