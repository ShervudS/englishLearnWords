import React from 'react'
import { useStore, useEvent } from 'effector-react'
import { $modalStore, onCloseModalEvent } from '_widgets/ModalTemplate/models'
import * as Styled from './ModalTemplate.styles'
import { AuthModal } from '_features/modals/AuthModal/AuthModal'

const ModalTemplate: React.FunctionComponent = () => {
    const { isOpen, modalConfig } = useStore($modalStore)

    const onCloseModal = useEvent(onCloseModalEvent)

    const onClose = (e: any) => {
        console.log(e.target)
        onCloseModal()
    }

    const modalTitle = modalConfig?.title || 'Заголовок модального окна'
    const modalDescription =
        modalConfig?.subtitle || 'Вторичный текст для модального окна'
    const acceptLabel = modalConfig?.acceptLabelAction || 'Отмена'
    const cancelLabel = modalConfig?.cancelLabelAction || 'Принять'

    const configModalBody = {
        default: <>{modalDescription}</>,
        auth: <AuthModal />,
    }

    const configModalFooter = {
        default: <>Modal footer</>,
    }

    return (
        <Styled.ModalTemplateWrapper isOpen={isOpen} onClick={onClose}>
            <Styled.ModalDialogWindow
                onClick={(event) => event.stopPropagation()}
            >
                <Styled.ModalHeader>{modalTitle}</Styled.ModalHeader>
                <Styled.ModalBody>
                    {
                        configModalBody[
                            modalConfig?.modalBodyComponentsName || 'default'
                        ]
                    }
                </Styled.ModalBody>

                <Styled.ModalFooter>
                    <Styled.ModalActionButton onClick={onClose}>
                        {acceptLabel}
                    </Styled.ModalActionButton>
                    <Styled.ModalActionButton>
                        {cancelLabel}
                    </Styled.ModalActionButton>
                </Styled.ModalFooter>
            </Styled.ModalDialogWindow>
        </Styled.ModalTemplateWrapper>
    )
}

export default ModalTemplate
