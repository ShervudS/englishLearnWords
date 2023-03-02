import { ReactNode } from 'react'
import { ICON_NAMES } from '_assets/constants/namesOnConfig'

export type TIconsConfig = Record<ICON_NAMES.MENU | ICON_NAMES.CLOSE | ICON_NAMES.ARROW_DOWN, ReactNode>

export interface IIcons {
    name: ICON_NAMES.MENU | ICON_NAMES.CLOSE | ICON_NAMES.ARROW_DOWN
}
