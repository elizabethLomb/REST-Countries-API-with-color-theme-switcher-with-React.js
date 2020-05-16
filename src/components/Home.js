import React, { useState, useEffect } from 'react';
import Card from './UI/Card';

const Home = ({ theme, countries }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    const results = Object.values(countries).map((country, i) => 
      country.filter(c => c.name.includes(searchTerm.charAt(0).toUpperCase() + searchTerm.substring(1)))
    )
    setSearchResults(results)
  }, [searchTerm])
  
  return (
    <main className="container-fluid mt-5 pt-5">

      <div className="d-flex justify-content-between mb-4">
        <div className="col-5">
          <form>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                value={searchTerm}
                placeholder="Search....."
              />
            </div>
          </form>
        </div>
        <div className="col-4">Region</div>
      </div>


      <div className="row row-cols-1 row-cols-md-5">
        {searchResults.length ? (
          Object.values(searchResults).map(country => 
            country.map((c, i) => 
              <div className="col mb-4 mt-4" key={i} >
                <Card theme={theme} {...c} />
              </div>
            ))
        ) : (
          Object.values(countries).map(country => 
          country.map((c, i) => 
            <div className="col mb-4 mt-4" key={i} >
              <Card theme={theme} {...c} />
            </div>
          ))
        )
        }
      </div>
    </main>
  )
}

export default Home;