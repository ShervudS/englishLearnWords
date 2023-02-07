import React from 'react'
import { useStore } from 'effector-react'
import { useEvent } from 'effector-react/effector-react.umd'
import {
    $drawerVisibleStore,
    toggleIsOpenDrawer,
} from '_widgets/DrawerTemplate/store'
import * as Styled from './DrawerTemplate.styles'

const DrawerTemplate: React.FunctionComponent = () => {
    const isOpen = useStore($drawerVisibleStore)
    const onCloseDrawer = useEvent(toggleIsOpenDrawer)

    const onBackDropClick = () => {
        onCloseDrawer()
    }

    return (
        <Styled.DrawerTemplateWrapper isOpen={isOpen} onClick={onBackDropClick}>
            this is Drawer
            <Styled.DrawerPanelWrapper isOpen={isOpen}>
                dfasdf
            </Styled.DrawerPanelWrapper>
        </Styled.DrawerTemplateWrapper>
    )
}
export default DrawerTemplate
