import React from 'react'

const [dark, setDark] = [true, () => {}]



export const ThemeContext = React.createContext({dark, setDark})

const ThemeContextProvider = ({children}) => {
    const [dark, setDark] = React.useState(true);

    return (
        <ThemeContext.Provider value={{dark, setDark}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider