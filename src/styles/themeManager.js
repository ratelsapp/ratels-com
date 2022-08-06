import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './theme'
import { useDarkMode } from '../contexts/Application'

export const StyledThemeProvider = props => {
  const [isDarkMode] = useDarkMode()

  return (
    <ThemeProvider theme={theme(true || isDarkMode)}>
      <GlobalStyle isDark={true || isDarkMode} />
      {props.children}
    </ThemeProvider>
  )
}
