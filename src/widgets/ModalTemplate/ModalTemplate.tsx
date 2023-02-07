import React from 'react'
import { useStore } from 'effector-react'
import { useEvent } from 'effector-react/effector-react.umd'
import {
    $modalVisibleStore,
    toggleModalVisible,
} from '_widgets/ModalTemplate/store'
import * as Styled from './ModalTemplate.styles'

const ModalTemplate: React.FunctionComponent = () => {
    const isOpen = useStore($modalVisibleStore)
    const onCloseModal = useEvent(toggleModalVisible)

    const onBackDropClick = () => {
        onCloseModal()
    }

    return (
        <Styled.ModalTemplateWrapper isOpen={isOpen} onClick={onBackDropClick}>
            Это база для модальных окон nk n kjsbdfjkbdsjkf bsjdkb jkdsfb jk
        </Styled.ModalTemplateWrapper>
    )
}

export default ModalTemplate
