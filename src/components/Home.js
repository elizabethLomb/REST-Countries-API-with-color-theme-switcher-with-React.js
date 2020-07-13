import React, { useState, useEffect } from 'react';
import Card from './UI/Card';
import InputSearch from './UI/InputSearch';
import SelectSearch from './UI/SelectSearch';

const Home = ({ theme, countries }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [selectTerm, setSelectTerm] = useState('')

  const handleChange = (e) => 
    e.target.name === 'search'
    ? setSearchTerm(e.target.value)
    : setSelectTerm(e.target.value)
  
  useEffect(() => {
    const inputResults = Object.values(countries).map(country => 
      country.filter(c => c.name.includes(searchTerm.charAt(0).toUpperCase() + searchTerm.substring(1)))
    ); 

    setSearchResults(inputResults)
  }, [searchTerm, countries])

  useEffect(() => {
    const selectResults = Object.values(countries).map(country => 
      country.filter(c => c.region.includes(selectTerm))
    );
    
    setSearchResults(selectResults)
  }, [selectTerm, countries])

  return (
    <main className="container-fluid mt-5 pt-5">

      <div className="d-flex justify-content-between mb-4 no-gutters flex-row flex-xsm-column">
        <InputSearch handleChange={handleChange} searchTerm={searchTerm} theme={theme}/>
        <SelectSearch handleChange={handleChange} theme={theme} />
      </div>

      {countries ? (
        <div className="row row-cols-1 row-cols-md-4">
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
          )}
        </div>
      ) : (
        <div className="row">
          <p>Sorry!</p>
        </div>
      )}
    </main>
  )
}

export default Home;