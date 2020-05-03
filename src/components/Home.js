import React, { useState, useEffect }  from 'react';
import CountriesService from '../services/CountriesService';
import Card from './UI/Card';

const MainContainer = ({ theme }) => {
  const [countries, setCountries] = useState([])
  const [isLoading, noLoading] = useState(true)

  useEffect(() => {
    const fetchCountries = async () => {
      CountriesService.list().then(response => {
        if(isLoading) {
          setCountries({ countries: response.data })
        }
      }).catch(() => { throw new Error("Bad response from server") })
    }

    fetchCountries()
    return () => { setLoading({ loading: false })}
  }, [countries])

  return (
    <main className="container mt-5 pt-5">
      {isLoading ? ( 
        <div>isLoading....</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3">
          {Object.values(countries).map(country => 
            country.map((c, i) => 
              <div className="col mb-4" key={i} >
                <Card theme={theme} {...c} />
              </div>
            ))
          }
        </div>
      )
      }
    </main>
  )
}

export default MainContainer;