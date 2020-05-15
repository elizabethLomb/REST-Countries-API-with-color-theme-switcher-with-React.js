import React from 'react'
import { Link } from 'react-router-dom'

const Detail = (props) => {

  const country = Object.values(props.countries).map(c => {
    return c.filter(el => el.alpha3Code === props.match.params.alpha3Code && c)
  })

  // const countryBorder = Object.values(props.countries).map((key, i) => {
  //   return key.filter(el => {
  //     return country.map((c, i) => {
  //       if(c[i].borders === el.alpha3Code) return el.name
  //     })
  //   })
  // })

  return (
    <main className="container-fluid mt-5 pt-5 countryDetail">
      <div className="mb-5">
        <Link to='/' className="btn btn-light">← Back</Link>
      </div>

      {country.map((c, i) => {
        return (
          <div className="d-flex align-items-center justify-content-between" key={i}>
            <div className="col-lg-5 col-md-5 col-12 text-right">
              <img className="flag" src={c[i].flag} alt={c[i].name} />
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <h1 className="display-4 mb-4">{c[i].name}</h1>

              <div className="d-flex justify-content-between no-gutters">
                <div className="col-lg-6 col-12">
                  <ul className="no-bullets">
                    <li>
                      <span className="font-weight-bold mr-3">Native Name:</span>
                      {c[i].nativeName}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Population:</span>
                      {c[i].population}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Region:</span>
                      {c[i].region}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Sub Region:</span>
                      {c[i].subregion}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Capital:</span>
                      {c[i].capital}
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-12">
                  <ul className="no-bullets">
                    <li>
                      <span className="font-weight-bold mr-3">Top Level Domain:</span>
                      {c[i].topLevelDomain[0]}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Currencies:</span>
                      {c[i].currencies[0].name}
                    </li>
                    <li>
                      <span className="font-weight-bold mr-3">Languages:</span>
                      {c[i].languages[0].name}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <span className="font-weight-bold mr-4">Border Countries</span>
                <ul className="d-inline-flex no-bullets">
                  {c[i].borders.length ? (
                    c[i].borders.map((border, i) => {
                      return(
                        <li key={i}>
                          <Link className="btn" to={`/${border}`}>
                            {Object.entries(props.countries).map(([key, value], j) =>
                              value.map(v => v.alpha3Code === border && v.name)
                            )}
                          </Link>
                        </li>
                      )
                    })
                  ) : (
                    <>No borders</>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )
      })}
    </main>
  )
}

export default Detail