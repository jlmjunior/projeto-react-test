import React from 'react'

export const ThemeContext = React.createContext()

const GlobalContext = (props) => {
  
  return (
    <ThemeContext.Provider>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default GlobalContext
