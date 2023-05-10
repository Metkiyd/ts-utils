type ThemeParams = {
  fontSize: number
  color: string
}

type Theme = 'light' | 'dark'

type AppTheme = Record<Theme, ThemeParams>

const Themes: AppTheme = {
  light: {
    fontSize: 20,
    color: 'red',
  },
  dark: {
    fontSize: 20,
    color: 'black',
  },
}
