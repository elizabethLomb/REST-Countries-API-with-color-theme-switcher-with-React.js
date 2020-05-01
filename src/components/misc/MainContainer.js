import React, { useState, useEffect }  from 'react';
import CountriesService from '../../services/CountriesService';
import Card from '../UI/Card';

const MainContainer = () => {
  const [countries, setCountries] = useState([])

  const fetchCountries = () => {
    CountriesService.list().then(response => {
      setCountries({ countries: response.data})
    })
  }

  useEffect(() => {
    fetchCountries()
  })

  return (
    <main className="container mt-5 pt-5">
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4">
          {Object.keys(countries).map(country =>
            {country.name},
            <Card {...country} key={country.indexOf} />)}
        </div>
      </div>
    </main>
  )
}


export default MainContainer;