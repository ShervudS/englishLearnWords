import 'styled-components'
import { APP_THEME } from '_assets/constants'
import { checkUserPreferenceTheme } from '_processed/Themes/utils'

declare module 'styled-components' {
    export interface ITheme {
        colors: {
            powderWhite: string,
            persianGreen: string,
            lightBlue: string,
            onyx: string
        },
        fonts: string[],
        fontSizes: {
            small: string,
            medium: string,
            large: string
        }
    }
}

export type TTheme = APP_THEME.LIGHT | APP_THEME.DARK;

export type TCheckUserPreferenceTheme = () => TTheme
