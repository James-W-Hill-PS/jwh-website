'use client'

import { ThemeUIProvider } from 'theme-ui'
import theme from '@hackclub/theme'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Set dark mode as default
  const customTheme = {
    ...theme,
    initialColorModeName: 'dark',
    useColorSchemeMediaQuery: false
  }

  return (
    <ThemeUIProvider theme={customTheme as any}>
      {children}
    </ThemeUIProvider>
  )
}
