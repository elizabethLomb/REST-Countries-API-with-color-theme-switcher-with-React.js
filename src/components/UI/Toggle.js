import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'

const Toggle = ({theme, onClick}) => { 
  return (
    <button
      className={`change__mode font-weight-bold btn
      ${theme === 'light' ? 'lightTheme' : 'darkTheme component'}`}
      onClick={onClick}
    >
      {theme === 'light' ? (
        <>
          <FontAwesomeIcon className="mr-2" icon={faMoon}/>
          Dark mode
        </>
        ) : (
          <>
            <FontAwesomeIcon className="mr-2" icon={faSun}/>
            Light mode
          </>
        )
      }
    </button>
  )
}

export default Toggle