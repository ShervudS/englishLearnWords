import React from 'react'
import { TFormField } from '_entities/FormTemplate/types'
// import * as Styled from './FieldAdapter.styles'

interface IFieldAdapter {
    filedConfig: TFormField
    formProps: any
}

export const FieldAdapter: React.FunctionComponent<IFieldAdapter> = (props) => {
    const { filedConfig, formProps } = props

    const onChangeField = (e: any) => {
        console.log(e.target.value)

        formProps.onChange(e.target.value)
    }

    console.log(formProps)

    // onChange={(e) => fields.email.onChange(e.target.value)}

    return (
        <div>
            <label>{filedConfig.label}</label>
            <input
                type="text"
                name={filedConfig.fieldName}
                // value={formProps.value}
                onChange={onChangeField}
                {...formProps}
            />
            <span>{formProps.errorText}</span>
        </div>
    )
}
