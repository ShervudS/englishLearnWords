export type TConfigBodyComponentsName = 'default' | 'auth'

export type TModalConfig = {
    title?: string
    subtitle?: string
    acceptLabelAction?: string
    cancelLabelAction?: string
    modalBodyComponentsName?: TConfigBodyComponentsName
}

export type TModalStore = {
    isOpen: boolean
    modalConfig?: TModalConfig
}

export type TModalTemplateStyleProps = Pick<TModalStore, 'isOpen'>
