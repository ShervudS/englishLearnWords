import { createForm, useForm } from 'effector-forms'
import React from 'react'
import { FieldAdapter } from '_shared/FieldAdapter/FieldAdapter'
import { Email } from '_shared/FormFields/InputAdapter/InputAdapter'
import { FormFieldsRender } from './features/FormFieldsRender/FormFieldsRender'
import * as Styled from './FormTemplate.styles'
import { TFormConfig } from './types'

interface IFormTemplate {
    formConfig: TFormConfig
}

const formConfig: TFormConfig = [
    {
        type: 'input',
        fieldName: 'email',
        label: 'email',
        message: 'Введите вашу почту',
        propOptions: {
            // validation: ''
        },
        configs: {
            initValue: '',
        },
    },
    {
        type: 'input',
        fieldName: 'password',
        label: 'password',
        message: 'Введите вашу почту',
        propOptions: {
            // validation: ''
        },
        configs: {
            initValue: '',
        },
    },
]

// Это находится в models в определенной форме
export const form = createForm({
    fields: {
        email: {
            init: '',
        },
        password: {
            init: '',
        },
    },
})

export const FormTemplate: React.FunctionComponent<IFormTemplate> = () => {
    const { submit, fields } = useForm(form)

    const onSubmit = (e: any) => {
        e.preventDefault()
        submit()
    }
    return (
        <Styled.FormTemplateWrapper>
            <form onSubmit={onSubmit}>
                <FormFieldsRender formConfig={formConfig} fields={fields} />
            </form>
        </Styled.FormTemplateWrapper>
    )
}
