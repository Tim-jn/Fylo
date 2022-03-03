import './_reviewCard.scss'

interface Props {
  text: string
  image: string
  name: string
  job: string
}

export default function ReviewCard({ text, image, name, job }: Props) {
  return (
    <div className="review-card">
      <p className="review-text">{text}</p>
      <div className="team-profile">
        <img src={image} alt="Review" className="team-image" />
        <div className="team-profile-text">
          <h4 className="team-name">{name}</h4>
          <p className="team-job">{job}</p>
        </div>
      </div>
    </div>
  )
}
