import React from 'react'
import * as Styled from './UserPreview.styles'
import { useEvent } from 'effector-react/effector-react.umd'
// import { openModal } from '_widgets/ModalTemplate/store'
import { Icons } from '_entities/Icons'
import { toggleIsOpenDrawer } from '_widgets/DrawerTemplate/store'

interface IUserPreview {}

export const UserPreview: React.FunctionComponent<IUserPreview> = () => {
    const onOpenUserDrawer = useEvent(toggleIsOpenDrawer)

    const onOpenDrawer = () => {
        onOpenUserDrawer()
    }

    return (
        <Styled.UserPreviewWrapper>
            если пользователь авторизован
            <Styled.UserPhoto>
                <img src="https://via.placeholder.com/30" alt="logo" />
            </Styled.UserPhoto>
            <div>[USER_NAME]</div>
            <Styled.UserIconButton onClick={onOpenDrawer}>
                <Icons name="menu" />
            </Styled.UserIconButton>
        </Styled.UserPreviewWrapper>
    )
}
