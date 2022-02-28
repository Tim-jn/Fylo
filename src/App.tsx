import './_app.scss'
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
import illustrationIntro from './assets/illustration-intro.png'
import FeatureCard from './Components/FeatureCard/FeatureCard'
import iconAccessAnywhere from './assets/icon-access-anywhere.svg'
import iconSecurity from './assets/icon-security.svg'
import iconCollaboration from './assets/icon-collaboration.svg'
import iconAnyFile from './assets/icon-any-file.svg'

function App() {
  return (
    <main className="App">
      <Navigation />
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
      </section>
      <section className="features-section">
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
      <section className="user-reviews"></section>
      <Footer />
    </main>
  )
}

export default App
