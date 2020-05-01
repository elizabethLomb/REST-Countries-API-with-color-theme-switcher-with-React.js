import React from 'react'
import Toggle from '../UI/Toggle'

const MainNav = ({theme, toggleTheme}) => (
  
  <nav className={`main__nav navbar sticky-top 
    ${theme === 'light' ? 'lightTheme' : 'darkTheme component'}`}>

    <div className="container">
      <span className="navbar-brand font-weight-bold">Where in the world?</span>
      <Toggle theme={theme} onClick={toggleTheme}/>
    </div>
  </nav>
)

export default MainNav;