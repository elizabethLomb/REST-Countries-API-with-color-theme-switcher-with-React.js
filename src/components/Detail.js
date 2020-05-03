import React, { useEffect, useState } from 'react'
import CountriesService from '../services/CountriesService'

const Detail = () => {
  const [country, setCountry] = useState(null)


  return (
    <div>
      {country}
    </div>
  )
}

export default Detail