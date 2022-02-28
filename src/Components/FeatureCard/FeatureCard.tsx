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
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  )
}
