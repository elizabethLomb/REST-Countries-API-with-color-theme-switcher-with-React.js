import React, { useState } from 'react';
import './App.css';
import MainNav from './components/misc/MainNav';
import Footer from './components/misc/Footer';
import MainContainer from './components/misc/MainContainer';

const App = () => {
  const [theme, setTheme] = useState('light')
  
  const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')

  return (
    <div className={`${theme === 'light' ? 'lightTheme' : 'darkTheme'}`}>
      <MainNav theme={theme} toggleTheme={toggleTheme}/>

      <MainContainer/>

      <Footer />
    </div>
  );
}

export default App;
