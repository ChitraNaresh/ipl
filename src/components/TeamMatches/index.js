// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {v4 as uuid} from 'uuid'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.fetchTeamDetails()
  }

  fetchTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const keyOfData = Object.values(data)
    const modifiedData = {
      teamBannerUrl: keyOfData[0],
      latestMatchDetails: {
        competingTeam: keyOfData[1].competing_team,
        competingTeamLogo: keyOfData[1].competing_team_logo,
        date: keyOfData[1].date,
        firstInnings: keyOfData[1].first_innings,
        manOfTheMatch: keyOfData[1].man_of_the_match,
        matchStatus: keyOfData[1].match_status,
        result: keyOfData[1].result,
        secondInnings: keyOfData[1].second_innings,
        umpires: keyOfData[1].umpires,
        venue: keyOfData[1].venue,
      },
      recentMatches: keyOfData[2].map(eachTeamVal => ({
        competingTeam: eachTeamVal.competing_team,
        competingTeamLogo: eachTeamVal.competing_team_logo,
        matchStatus: eachTeamVal.match_status,
        result: eachTeamVal.result,
        id: uuid(),
      })),
    }
    console.log(modifiedData)
    this.setState({teamDetails: modifiedData, isLoading: false})
  }

  renderLoader = () => (
    <div className="loader" data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeamBanner = teamBannerVal => (
    <img src={teamBannerVal} alt="team banner" className="team-img" />
  )

  renderEachTeamResults = recentMatches => (
    <ul className="teams-list">
      {recentMatches.map(eachTeamData => (
        <MatchCard eachTeamDataVal={eachTeamData} key={eachTeamData.id} />
      ))}
    </ul>
  )

  renderTeamDetails = (teamBannerUrl, latestMatchDetails, recentMatches) => (
    <div>
      {this.renderTeamBanner(teamBannerUrl)}
      <h1 className="latest-text">Latest Matches</h1>
      <LatestMatch matchDetails={latestMatchDetails} />
      {this.renderEachTeamResults(recentMatches)}
    </div>
  )

  render() {
    const {isLoading, teamDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetails
    return (
      <div className="each-team-details-bg">
        <div className="content-card">
          {isLoading
            ? this.renderLoader()
            : this.renderTeamDetails(
                teamBannerUrl,
                latestMatchDetails,
                recentMatches,
              )}
        </div>
      </div>
    )
  }
}

export default TeamMatches
