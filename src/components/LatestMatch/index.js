// Write your code here
const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    venue,
    date,
    umpires,
    firstInnings,
    secondInnings,
    result,
    manOfTheMatch,
  } = matchDetails

  return (
    <div className="recent-match-card">
      <div className="compete-img-card">
        <div>
          <p className="compete-team-text">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venu-match-result">{venue}</p>
          <p className="venu-match-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="compete-team"
        />
      </div>
      <hr className="line" />
      <div className="page-match-details-card">
        <p className="venu-match-result">First Innings</p>
        <p className="venu-match-result">{firstInnings}</p>
        <p className="venu-match-result">Second Innings</p>
        <p className="venu-match-result">{secondInnings}</p>
        <p className="venu-match-result">Man Of The Match</p>
        <p className="venu-match-result">{manOfTheMatch}</p>
        <p className="venu-match-result">umpires</p>
        <p className="venu-match-result">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
