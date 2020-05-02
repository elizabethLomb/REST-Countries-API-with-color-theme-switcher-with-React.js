import React, { useState, useEffect }  from 'react';
import CountriesService from '../../services/CountriesService';
import Card from '../UI/Card';
import { useLocation } from 'react-router-dom';

const MainContainer = ({ theme }) => {
  const [countries, setCountries] = useState([])

  const fetchCountries = () => {
    CountriesService.list().then(response => {
      setCountries({ countries: response.data })
    })
  }

  useEffect(() => {
    fetchCountries()
  }, [countries])


  return (
    <main className="container mt-5 pt-5">
      <div className="row row-cols-1 row-cols-md-3">
        {Object.values(countries).map(country => 
          country.map((c, i) => 
            <div className="col mb-4">
              <Card theme={theme} {...c} key={i} />
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default MainContainer;