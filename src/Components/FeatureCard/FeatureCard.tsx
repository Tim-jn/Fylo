import './_featureCard.scss'

interface Props {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: Props) {
  return (
    <div className="feature-card">
      <img src={icon} alt="Feature Icon" className="feature-image" />
      <h2 className="feature-title">{title}</h2>
      <p className="feature-description">{description}</p>
    </div>
  )
}
