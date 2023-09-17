import { useState } from "react"

import Home from "./pages/Home/Home"

import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'

import { LightMode, DarkMode } from "./styles/Variables"

function App() {
    const [theme, setTheme] = useState(DarkMode)

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? DarkMode : LightMode)
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Home
                toggleTheme={toggleTheme}
            />
        </ThemeProvider>
    )
}

export default App
