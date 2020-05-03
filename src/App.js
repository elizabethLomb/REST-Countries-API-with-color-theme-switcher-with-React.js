import React, { useState } from 'react';
import './App.css';
import MainNav from './components/misc/MainNav';
import Footer from './components/misc/Footer';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import Detail from './components/Detail';

const App = () => {
  const [theme, setTheme] = useState('light')
  
  const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')
  
  return (
    <div className={`${theme === 'light' ? 'lightTheme' : 'darkTheme'}`}>
      <MainNav theme={theme} toggleTheme={toggleTheme}/>

      <Home theme={theme}/>

      <Footer />

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/name/:alpha3Code" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
