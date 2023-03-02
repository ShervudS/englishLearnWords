import React from 'react'
import { FieldAdapter } from '_shared/FieldAdapter/FieldAdapter'
import { TFormConfig } from '../../types'

interface IFormFieldsRender {
    formConfig: TFormConfig
    fields: any
}

export const FormFieldsRender: React.FunctionComponent<IFormFieldsRender> = ({
    formConfig,
    fields,
}) => (
    <div>
        {formConfig.map((field) => (
            <FieldAdapter
                key={field.fieldName}
                filedConfig={field}
                formProps={fields[field.fieldName]}
            />
        ))}
    </div>
)
