import { createEvent, createStore } from 'effector'
import { TTheme } from '_processed/Themes/type'
import { checkUserPreferenceTheme } from '_processed/Themes/utils'

export const toggleThemeEvent = createEvent()

export const $themeStore = createStore<TTheme>(checkUserPreferenceTheme())

