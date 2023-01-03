import React from 'react'
import './home.css'

const Home = (props) => {
  function renderTeams(){
    return props.teams.map(team => <h3 key={team.id} > { team.name }</h3>)
  }

  return (
    <div className='home-page container'>
        <h1 className='text-center home-title'>Welcome to the home page.</h1>

        <button type = 'button' className='btn btn-block btn-primary'> 
          Add Team 
        </button>

        <div className="team-view">
          {renderTeams()}
        </div>

        

    </div>
  )
}

export default Home
