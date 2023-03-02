export type TFormField = {
    type: 'input' | 'date' | 'select'
    fieldName: string
    label: string
    message?: string
    propOptions?: {
        // validation: ''
    }
    configs?: {
        initValue: ''
    }
}

export type TFormConfig = TFormField[]
