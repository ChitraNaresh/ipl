// Write your code here
import './index.css'

const LatestMatch = props => {
  const {eachTeamDataVal} = props
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = eachTeamDataVal
  const statusColor = matchStatus === 'Lost' ? 'result-loss' : 'result-win'
  return (
    <li className="each-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="compete-team-image"
      />
      <h1 className="team-name-text">{competingTeam}</h1>
      <p className="match-results-on-team">{result}</p>
      <p className={`result ${statusColor}`}>{matchStatus}</p>
    </li>
  )
}

export default LatestMatch
