import React, { useEffect, useState } from 'react'
import CountriesService from '../services/CountriesService'
import { Link } from 'react-router-dom'

const Detail = (props, countries) => {
  

  console.log('props ---->', props)

  return (
    <main className="container-fluid mt-5 pt-5 countryDetail">
      <div className="mb-5">
        <Link to='/' className="btn btn-light">← Back</Link>
      </div>
     
      {Object.values(countries).map((v, i) => {
        return (
          <div className="d-flex align-items-center justify-content-between" key={i}>
            <div className="col-lg-5 col-md-5 col-12 text-right">
              <img className="flag" src={v[i].flag} alt={v[i].name} />
            </div>
    
            <div className="col-lg-6 col-md-6 col-12">
              <h1 className="display-4 mb-4">{v[i].name}</h1>

              <div className="d-flex justify-content-between no-gutters">
                <div className="col-lg-6 col-12">
                  <ul className="no-bullets">
                    <li>
                      <span className="font-weight-bold mr-3">Native Name:</span>
                      {v[i].nativeName}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Population:</span>
                      {v[i].population}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Region:</span>
                      {v[i].region}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Sub Region:</span>
                      {v[i].subregion}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Capital:</span>
                      {v[i].capital}
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-12">
                  <ul className="no-bullets">
                    <li>
                      <span className="font-weight-bold mr-3">Top Level Domain:</span>
                      {v[i].topLevelDomain[0]}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Currencies:</span>
                      {v[i].currencies[0].name}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Languages:</span>
                      {v[i].languages[0].name}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <span className="font-weight-bold mr-4">Border Countries</span>
                {/* {v[i].borders.map((name, i) => (
                  <Link
                    key={i}
                    className="btn btn-outline-secondary mr-4"
                    to={`/name/${name}`}>
                      {name}
                  </Link>
                ))} */}
              </div>
            </div>
          </div>
        )
      })
      }
      
    </main>
  )
}

export default Detail