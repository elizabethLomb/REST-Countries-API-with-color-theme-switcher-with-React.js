import React, { useState, useEffect } from 'react';
import './App.css';
import MainNav from './components/misc/MainNav';
import Footer from './components/misc/Footer';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import Detail from './components/Detail';
import CountriesService from './services/CountriesService';

const App = (props) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')

  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    const fetchCountries = async () => {
      CountriesService.list().then(response => {
        setCountries({ countries: response.data })
      }).catch(() => { throw new Error("Bad response from server") })
    }

    fetchCountries()
    return () => {}
  }, [])

  useEffect(() => {
    countries && setLoading(false)
  }, [countries])

  return (
    <div className={`${theme === 'light' ? 'lightTheme' : 'darkTheme'}`}>
      <MainNav theme={theme} toggleTheme={toggleTheme}/>

      {loading &&
        <p>Loading.....</p>
      }

      <Switch>
        <Route
          exact path='/'
          render={() =>
            <Home theme={theme}
            countries={countries}
            />
          }/>

        <Route
          exact path='/alpha/:alpha3Code'
          component={props => 
            <Detail countries={countries} {...props}/>
          }
        />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
