import React, { useState } from 'react';
import './App.css';
import MainNav from './components/misc/MainNav';
import Footer from './components/misc/Footer';
import MainContainer from './components/misc/MainContainer';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  const [theme, setTheme] = useState('light')
  
  const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')

  return (
    <div className={`${theme === 'light' ? 'lightTheme' : 'darkTheme'}`}>
      <MainNav theme={theme} toggleTheme={toggleTheme}/>

      <MainContainer theme={theme}/>

      <Footer />

      <Switch>
        <Route exact path="/" component={MainContainer}/>
      </Switch>
    </div>
  );
}

export default App;
