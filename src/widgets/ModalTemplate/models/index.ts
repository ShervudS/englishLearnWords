import { createEvent, createStore } from 'effector'
import { TModalStore } from '_widgets/ModalTemplate/ModalTemplate.types'

const INITIAL_MODAL_VISIBLE_STORE: TModalStore = {
    isOpen: false,
    modalConfig: {},
}

export const onOpenModalEvent = createEvent<TModalStore>()
export const onCloseModalEvent = createEvent()

export const $modalStore = createStore<TModalStore>(
    INITIAL_MODAL_VISIBLE_STORE
)
    .on(onOpenModalEvent, (state, payload) => ({
        ...state,
        ...payload,
    }))
    .on(onCloseModalEvent, (state) => ({
        ...state,
        isOpen: false,
        modalConfig: {},
    }))
