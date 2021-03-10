import React from 'react'
import './Creations.scss'
import { CardData } from './CardData.js'
import { CardDataMobile } from './CardDataMobile.js'

const Creations = () => {
  return (
    <div className="Creations">
      <div className="creations-header">
        <h2>our creations</h2>
        <button className="btn">SEE ALL</button>
      </div>
      <div className="card-container">
        {CardData.map(card => {
          const { title, cName, img } = card
          return(
            <div className="card desktop-card" key={title} style={{backgroundImage: `url(${img})`}}>
              <div className="card-filter"></div>
              <h3 className={cName}>{title}</h3>
            </div>
          )
        })}
        {CardDataMobile.map(card => {
          const { title, cName, img } = card
          return(
            <div className="card mobile-card" key={title} style={{backgroundImage: `url(${img})`}}>
              <div className="card-filter"></div>
              <h3 className={cName}>{title}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Creations
