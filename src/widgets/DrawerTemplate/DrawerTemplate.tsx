import React from 'react'
import { useStore } from 'effector-react'
import { useEvent } from 'effector-react/effector-react.umd'
import {
    $drawerVisibleStore,
    onClosedDrawer,
} from '_widgets/DrawerTemplate/models'
import { UserDrawerSettings } from '_features/UserDrawerSettings/UserDrawerSettings'
import { DRAWER_ITEMS } from '_assets/constants'
import { TConfigTemplatesDrawer } from '_widgets/DrawerTemplate/DrawerTemplate.types'
import * as Styled from './DrawerTemplate.styles'

const DrawerTemplate: React.FunctionComponent = () => {
    const { isOpen, drawerComponent } = useStore($drawerVisibleStore)

    const onCloseDrawer = useEvent(onClosedDrawer)

    const onBackDropClick = () => {
        onCloseDrawer()
    }

    const configTemplatesDrawer: TConfigTemplatesDrawer = {
        [DRAWER_ITEMS.DEFAULT]: <>Нет данных</>,
        [DRAWER_ITEMS.USER_DRAWER]: <UserDrawerSettings />,
    }

    return (
        <Styled.DrawerTemplateWrapper isOpen={isOpen} onClick={onBackDropClick}>
            this is Drawer
            <Styled.DrawerPanelWrapper isOpen={isOpen}>
                dfasdf
                {configTemplatesDrawer[drawerComponent]}
            </Styled.DrawerPanelWrapper>
        </Styled.DrawerTemplateWrapper>
    )
}
export default DrawerTemplate
