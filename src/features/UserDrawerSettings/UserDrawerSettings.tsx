import React from 'react'
import * as Styled from './UserDrawerSettings.styles'

interface IUserDrawerSettings {}

export const UserDrawerSettings: React.FunctionComponent<
    IUserDrawerSettings
> = () => {
    return (
        <Styled.userDrawerSettingsWrapper>
            Дравер пользователя
        </Styled.userDrawerSettingsWrapper>
    )
}
