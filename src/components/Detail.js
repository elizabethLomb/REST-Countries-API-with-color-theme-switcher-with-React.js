import React, { useEffect, useState } from 'react'
import CountriesService from '../services/CountriesService'

const Detail = (props) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    const fetchCountry = async () => {
      await CountriesService.detail(props.match.params.name).then(response => {
        setCountry({ country: response.data })
      }).catch(() => { throw new Error("Bad response from server") })
    }

    fetchCountry()
    return () => {}
  }, [])

  return (
    <div>
      <main className="container mt-5 pt-5">
        <div className="col-lg-8 col-md-8 col-12">
          {
            console.log(country)
          }
        </div>
      </main>
    </div>
  )
}

export default Detail