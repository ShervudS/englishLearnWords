import { createEvent, createStore } from 'effector'
import { TDrawerVisibleStore } from '_widgets/DrawerTemplate/DrawerTemplate.types'

const INITIAL_DRAWER_VISIBLE_STORE = false

export const toggleIsOpenDrawer = createEvent()

export const $drawerVisibleStore = createStore<TDrawerVisibleStore>(
    INITIAL_DRAWER_VISIBLE_STORE
).on(toggleIsOpenDrawer, (prev) => !prev)
