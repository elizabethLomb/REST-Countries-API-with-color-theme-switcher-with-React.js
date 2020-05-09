import React from 'react'
import { Link } from 'react-router-dom'

const Detail = (props) => {
  
  const country = Object.values(props.countries).map(c => 
    c.filter(c => c.name === props.match.params.name && c)
  )

  const countryBorder = Object.values(props.countries).map(c => (
    c.filter(el => (
      country.map((value, i) => (
        value[i].borders.filter(v => {
          if(v === el.alpha3Code){
            return (
              el.name
            )
          }
        })
      ))
    ))
  ))
 

  return (
    <main className="container-fluid mt-5 pt-5 countryDetail">
      <div className="mb-5">
        <Link to='/' className="btn btn-light">← Back</Link>
      </div>

      {country.map((value, i) => (
        <div className="d-flex align-items-center justify-content-between" key={i}>

          <div className="col-lg-5 col-md-5 col-12 text-right">
            <img className="flag" src={value[i].flag} alt={value[i].name} />
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <h1 className="display-4 mb-4">{value[i].name}</h1>

              <div className="d-flex justify-content-between no-gutters">
                <div className="col-lg-6 col-12">
                  <ul className="no-bullets">
                    <li>
                      <span className="font-weight-bold mr-3">Native Name:</span>
                      {value[i].nativeName}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Population:</span>
                      {value[i].population}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Region:</span>
                      {value[i].region}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Sub Region:</span>
                      {value[i].subregion}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Capital:</span>
                      {value[i].capital}
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-12">
                  <ul className="no-bullets">
                    <li>
                      <span className="font-weight-bold mr-3">Top Level Domain:</span>
                      {value[i].topLevelDomain[0]}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Currencies:</span>
                      {value[i].currencies[0].name}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Languages:</span>
                      {value[i].languages[0].name}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <span className="font-weight-bold mr-4">Border Countries</span>
                {value[i].borders.length ? (
                  value[i].borders.map((border, index) => {
                    return (
                      <Link key={index} to={`/${border}`}>
                        {Object.values(props.countries).filter((c, i) => {
                          console.log(c[i].alpha3Code)
                          if(c.alpha3Code === border)
                          
                            return props.countries[c].name
                        })}
                      </Link>
                    )
                  })
                ) : (
                  <>No borders</>
                )}
                {/* {value[i].borders.filter(v => {
                  return Object.values(props.countries).map(c => {
                    c.filter((el, i) => {
                      if(v === el.alpha3Code) {
                        return el.name
                      }
                    })
                  })
                })}        */}
              </div>


          </div>

        </div>
      ))}      
    </main>
  )
}

export default Detail