import React, { HTMLInputTypeAttribute } from 'react'
import * as Styled from './InputAdapter.styles'

interface IInputAdapter {
    label: string
    type: HTMLInputTypeAttribute
}

export const InputAdapter: React.FunctionComponent<IInputAdapter> = (props) => {
    const { label, type } = props
    return (
        <Styled.InputAdapterWrapper>
            <label>{label}</label>
            <input type={type} />
        </Styled.InputAdapterWrapper>
    )
}
