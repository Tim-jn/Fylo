import './_formFooter.scss'
import { SyntheticEvent } from 'react'

export default function FormFooter() {
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    alert('Thank you for your registration !')
    target.reset()
  }

  return (
    <div id="signin" className="form-footer">
      <h2 className="form-title">Get early access today</h2>
      <p className="form-text">
        It only takes a minute to sign up and our free tier is extremely
        generous. If you have any question, our support team would be happy to
        help you.
      </p>
      <form onSubmit={handleSubmit} className="form-footer-content">
        <input
          type="email"
          name="email"
          className="form-footer-input"
          placeholder="email@example.com"
          required
        />
        <button type="submit" className="form-footer-button">
          Get Started For Free
        </button>
      </form>
    </div>
  )
}
