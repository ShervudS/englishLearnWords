import React from 'react'
import { useStore } from 'effector-react'
import { useForm } from 'effector-forms'
import { authForm, loginFx } from '_features/modals/AuthModal/model'
import * as Styled from './AuthModal.styles'

interface IAuthModal {}

export const AuthModal: React.FunctionComponent<IAuthModal> = () => {
    const { fields, submit, eachValid, values } = useForm(authForm)
    const pending = useStore(loginFx.pending)

    const onSubmit = (e: any) => {
        e.preventDefault()
        submit()
        console.log(values)
    }

    return (
        <div>
            модальное окно аутендификации
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={fields.email.value}
                    disabled={pending}
                    onChange={(e) => fields.email.onChange(e.target.value)}
                />
                <div>
                    {fields.email.errorText({
                        email: 'you must enter a valid email address',
                    })}
                </div>
                <input
                    type="password"
                    value={fields.password.value}
                    disabled={pending}
                    onChange={(e) => fields.password.onChange(e.target.value)}
                />
                <div>
                    {fields.password.errorText({
                        required: 'password required',
                    })}
                </div>
                <button disabled={!eachValid || pending} type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}
