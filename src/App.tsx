import './_app.scss'
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
import illustrationIntro from './assets/illustration-intro.png'
import FeatureCard from './Components/FeatureCard/FeatureCard'
import iconAccessAnywhere from './assets/icon-access-anywhere.svg'
import iconSecurity from './assets/icon-security.svg'
import iconCollaboration from './assets/icon-collaboration.svg'
import iconAnyFile from './assets/icon-any-file.svg'
import illustrationCompany from './assets/illustration-stay-productive.png'
import arrowIcon from './assets/icon-arrow.svg'
import ReviewCard from './Components/ReviewCard/ReviewCard'
import profile1 from './assets/profile-1.jpg'
import profile2 from './assets/profile-2.jpg'
import profile3 from './assets/profile-3.jpg'
import curvyBg from './assets/bg-curvy-desktop.svg'

function App() {
  return (
    <main className="App">
      <Navigation />
      <div className="intro-section-bg">
        <section className="intro-section">
          <img
            src={illustrationIntro}
            alt="Intro illustration"
            className="intro-img"
          />
          <h1 className="intro-title">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="intro-description">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family, and co-workers.
          </p>
          <button type="button" className="start-button">
            Get Started
          </button>
          <div className="background-curvy">
            <img src={curvyBg} alt="Background curvy" />
          </div>
        </section>
      </div>
      <section id="features" className="features-section">
        <FeatureCard
          icon={iconAccessAnywhere}
          title="Access your files, anywhere"
          description="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        />
        <FeatureCard
          icon={iconSecurity}
          title="Security you can trust"
          description="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        />
        <FeatureCard
          icon={iconCollaboration}
          title="Real-time collaboration"
          description="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        />
        <FeatureCard
          icon={iconAnyFile}
          title="Store any type of file"
          description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared. "
        />
      </section>
      <section className="company-infos">
        <img
          src={illustrationCompany}
          alt="Company"
          className="company-image"
        />
        <div className="company-infos-text">
          <h3 className="company-title">Stay productive, wherever you are</h3>
          <p className="company-description">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
            <br />
            <br />
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
            <br />
            <br />
            <span className="company-link">
              See how Fylo works
              <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
            </span>
          </p>
        </div>
      </section>
      <section id="team" className="team">
        <ReviewCard
          text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          image={profile1}
          name="Satish Patel"
          job="Founder & CEO, Huddle"
        />
        <ReviewCard
          text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          image={profile2}
          name="Bruce McKenzie"
          job="Founder & CEO, Huddle"
        />
        <ReviewCard
          text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          image={profile3}
          name="Iva Boyd"
          job="Founder & CEO, Huddle"
        />
      </section>
      <Footer />
    </main>
  )
}

export default App
