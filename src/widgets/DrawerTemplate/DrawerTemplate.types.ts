import { DRAWER_ITEMS } from '_assets/constants'
import { ReactNode } from 'react'

export type TDrawerComponentStore =
    | DRAWER_ITEMS.DEFAULT
    | DRAWER_ITEMS.USER_DRAWER

export type TConfigTemplatesDrawer = Record<TDrawerComponentStore, ReactNode>

export type TDrawerStore = {
    isOpen: boolean
    drawerComponent: TDrawerComponentStore
}

export type TDrawerTemplateStyleProps = {
    isOpen: boolean
}
