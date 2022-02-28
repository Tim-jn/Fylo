import './_formFooter.scss'

export default function FormFooter() {
  return (
    <div className="form-footer">
      <h2 className="form-title">Get early access today</h2>
      <p className="form-text">
        It only takes a minute to sign up and our free tier is extremely
        generous. If you have any question, our support team would be happy to
        help you.
      </p>
      <form className="form-footer-content">
        <input
          type="email"
          className="form-footer-input"
          placeholder="email@example.com"
          required
        />
        <button className="form-footer-button">Get Started For Free</button>
      </form>
    </div>
  )
}
