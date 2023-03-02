import React, { HTMLInputTypeAttribute } from 'react'
// import { useField } from 'effector-forms/dist-types'
// import * as Styled from './InputAdapter.styles'

interface IInputAdapter {
    label: string
    type: HTMLInputTypeAttribute
    // form: Form
}

// export const InputAdapter: React.FunctionComponent<IInputAdapter> = (props) => {
//     const { label, type } = props
//     return (
//         <Styled.InputAdapterWrapper>
//             <label>{label}</label>
//             <input
//                 type={type}
//                 // value={fields.email.value}
//                 // onChange={(e) => fields.email.onChange(e.target.value)}
//             />
//             <span>[validate message]</span>
//         </Styled.InputAdapterWrapper>
//     )
// }

export const Email = (props: any) => {
    // const { value, onChange } = useField(form.fields.email)

    console.log(props)

    return (
        <input
            type="text"
            // value={value}
            // onChange={(e) => onChange(e.target.value)}
            {...props}
        />
    )
}
