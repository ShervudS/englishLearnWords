import { createEvent, createStore } from 'effector'
import { TLernAlphaberStore } from '../types'

const INITIAL_LERN_ALPHABET_STORE: TLernAlphaberStore = {
    step: 'setting',
    lernSettings: {
        nativeLang: 'ru',
        lernLang: 'en',
    },
}

export const changeCurrentStep = createEvent<Pick<TLernAlphaberStore, 'step'>>()

export const $lernAplhaberStore = createStore<TLernAlphaberStore>(
    INITIAL_LERN_ALPHABET_STORE
).on(changeCurrentStep, (state, payload) => ({
    ...state,
    ...payload,
}))
