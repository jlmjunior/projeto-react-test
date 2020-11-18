import React from 'react'

export const ThemeContext = React.createContext()

const GlobalContext = (props) => {
  const [loading, setLoading] = React.useState(false)
  
  return (
    <ThemeContext.Provider value={{loading, setLoading}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default GlobalContext
