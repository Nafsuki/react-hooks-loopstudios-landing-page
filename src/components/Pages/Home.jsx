import React from 'react'
import './Home.scss'
import Header from './Header'
import Main from './Main'
import Creations from './Creations'

const Home = () => {
  return (
    <div className='Home'>
      <Header />
      <Main /> 
      <Creations />
    </div>
  )
}

export default Home
