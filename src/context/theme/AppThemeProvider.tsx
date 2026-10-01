import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

// Основной современный шрифт интерфейса
const font = 'Plus Jakarta Sans, Play, sans-serif'

// Фирменная палитра MisterStrawberry
const strawberryRed = {
  50: '#fff1f3',
  100: '#ffe4e8',
  200: '#fecdd6',
  300: '#fda4af',
  400: '#fb7185',
  500: '#ff4b72', // Акцентный Strawberry
  600: '#e11d48',
  700: '#be123c',
  800: '#9f1239',
  900: '#881337',
  main: '#ff4b72',
  light: '#ff85a2',
  dark: '#be123c',
  contrastText: '#ffffff',
}

const indigoSecondary = {
  50: '#eef2ff',
  100: '#e0e7ff',
  200: '#c7d2fe',
  300: '#a5b4fc',
  400: '#818cf8',
  500: '#6366f1', // Вторичный Indigo для перелива в ColorBends
  600: '#4f46e5',
  700: '#4338ca',
  800: '#3730a3',
  900: '#312e81',
  main: '#6366f1',
  light: '#818cf8',
  dark: '#4338ca',
  contrastText: '#ffffff',
}

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: strawberryRed,
        secondary: indigoSecondary,
        background: {
          default: '#f8fafc',
          paper: '#ffffff',
        },
      },
    },

    dark: {
      palette: {
        primary: strawberryRed,
        secondary: indigoSecondary,
        background: {
          default: '#08090d',
          paper: '#12141d',
        },
      },
    },
  },

  typography: {
    fontFamily: font,
    fontSize: 16,
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '1rem',
    },
    button: {
      fontSize: '1rem',
      textTransform: 'none',
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: '1rem',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: font,
          fontSize: '1rem',
          borderRadius: '12px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 8px 20px rgba(255, 75, 114, 0.25)',
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          fontFamily: font,
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: font,
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: font,
          fontSize: '1rem',
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: font,
          fontSize: '1rem',
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: font,
          fontSize: '1rem',
        },
      },
    },
  },
})

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <ThemeProvider theme={theme} defaultMode="dark" noSsr>
    {children}
  </ThemeProvider>
)