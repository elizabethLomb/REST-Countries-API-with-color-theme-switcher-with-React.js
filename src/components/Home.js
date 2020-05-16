import React from 'react';
import Card from './UI/Card';

const Home = ({ theme, countries }) => {

  return (
    <main className="container-fluid mt-5 pt-5">
      <div className="row row-cols-1 row-cols-md-5">
        {Object.values(countries).map(country => 
          country.map((c, i) => 
            <div className="col mb-4 mt-4" key={i} >
              <Card theme={theme} {...c} />
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default Home;