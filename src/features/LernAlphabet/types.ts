export type TLernSettings = {
    nativeLang: string
    lernLang: string
}

export type TLernAlphaberStore = {
    step: 'setting' | 'lern' | 'end'
    lernSettings: TLernSettings
}

export type TConfigLernAlphabetStep = Record<
    'setting' | 'lern' | 'end',
    React.ReactNode
>
