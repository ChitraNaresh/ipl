// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    teamsCardData: [],
  }

  componentDidMount() {
    this.getEachTeam()
  }

  getEachTeam = async () => {
    const teamsResponse = await fetch('https://apis.ccbp.in/ipl')
    const teamsData = await teamsResponse.json()
    const modifiedData = teamsData.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    console.log(modifiedData)
    this.setState({isLoading: false, teamsCardData: modifiedData})
  }

  renderLoading = () => (
    <div className="loading-card" data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeamsCards = teamsCardData => (
    <ul className="cards-container-bg">
      {teamsCardData.map(eachCard => (
        <TeamCard eachTeamCard={eachCard} key={eachCard.id} />
      ))}
    </ul>
  )

  render() {
    const {isLoading, teamsCardData} = this.state
    console.log(teamsCardData)
    return (
      <div className="home-container-bg">
        <div className="home-card-bg">
          <div className="heading-card-bg">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="dashboard-heading">IPL Dashboard</h1>
          </div>
          {isLoading
            ? this.renderLoading()
            : this.renderTeamsCards(teamsCardData)}
        </div>
      </div>
    )
  }
}

export default Home
