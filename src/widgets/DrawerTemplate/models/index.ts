import { createEvent, createStore } from 'effector'
import { TDrawerStore } from '_widgets/DrawerTemplate/DrawerTemplate.types'
import { DRAWER_ITEMS } from '_assets/constants'

const INITIAL_DRAWER_STORE: TDrawerStore = {
    isOpen: false,
    drawerComponent: DRAWER_ITEMS.DEFAULT,
}

export const toggleIsOpenDrawer = createEvent<TDrawerStore>()
export const onClosedDrawer = createEvent()

export const $drawerVisibleStore = createStore<TDrawerStore>(
    INITIAL_DRAWER_STORE
)
    .on(toggleIsOpenDrawer, (state, payload) => ({
        ...state,
        ...payload,
    }))
    .on(onClosedDrawer, (state) => ({ ...state, isOpen: false }))
