import { createEvent, createStore } from 'effector'
import { TModalStore } from '_widgets/ModalTemplate/ModalTemplate.types'

const INITIAL_MODAL_VISIBLE_STORE = false

export const toggleModalVisible = createEvent()

export const $modalVisibleStore = createStore<TModalStore>(
    INITIAL_MODAL_VISIBLE_STORE
).on(toggleModalVisible, (prev) => !prev)
