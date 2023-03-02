import React from 'react'
import { useEvent } from 'effector-react/effector-react.umd'
import { Icons } from '_shared/Icons'
import { toggleIsOpenDrawer } from '_widgets/DrawerTemplate/models'
import { DRAWER_ITEMS } from '_assets/constants'
import { ICON_NAMES } from '_assets/constants/namesOnConfig'
import * as Styled from './UserPreview.styles'

interface IUserPreview {}

export const UserPreview: React.FunctionComponent<IUserPreview> = () => {
    const onOpenUserDrawer = useEvent(toggleIsOpenDrawer)

    const onOpenDrawer = () => {
        onOpenUserDrawer({
            isOpen: true,
            drawerComponent: DRAWER_ITEMS.USER_DRAWER,
        })
    }

    return (
        <Styled.UserPreviewWrapper>
            <Styled.UserPhoto>
                <img src="https://via.placeholder.com/30" alt="logo" />
            </Styled.UserPhoto>
            <div>[USER_NAME]</div>
            <Styled.UserIconButton onClick={onOpenDrawer}>
                <Icons name={ICON_NAMES.MENU} />
            </Styled.UserIconButton>
        </Styled.UserPreviewWrapper>
    )
}
