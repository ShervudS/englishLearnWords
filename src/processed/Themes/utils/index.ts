import { TTheme } from '_processed/Themes/type'
import { APP_THEME } from '_assets/constants'

const getUserPreference = () => {
    return localStorage.getItem('theme')
}

const saveUserPreference = (theme: string) => {
    localStorage.setItem('theme', theme)
}

export const checkUserPreferenceTheme = (): TTheme => {
    const userSavedTheme = getUserPreference()

    if (!userSavedTheme) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return APP_THEME.DARK
        }
    } else if (userSavedTheme === APP_THEME.DARK) {
        saveUserPreference(APP_THEME.DARK)
        return APP_THEME.DARK
    }

    saveUserPreference(APP_THEME.LIGHT)
    return APP_THEME.LIGHT
}



