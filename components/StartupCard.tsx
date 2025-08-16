
const StartupCard = ({post}: {post: StartupTypeCard}) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="start_card_date">
          {post._cratedAt}
        </p>
      </div>
    </li>
  )
}

export default StartupCard
