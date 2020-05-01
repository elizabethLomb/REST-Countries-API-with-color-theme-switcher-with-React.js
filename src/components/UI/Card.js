import React from 'react'

const Card = ({flag, name, population, region, capital}) => (
  <div className="card">
    <img src={flag} className="card-img-top" alt={name}/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
    </div>
  </div>
)

export default Card