import React from 'react'
import './home.css'

const Home = (props) => {
  function renderTeams(){
    return props.teams.map(team => <h3 key={team.id} > { team.name }</h3>)
  }

  return (
    <div className='home-page container'>
        <h1 className='text-center home-title'>Welcome to the home page.</h1>
        {renderTeams()}

    </div>
  )
}

export default Home
