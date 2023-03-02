import styled from 'styled-components'
import { TModalTemplateStyleProps } from '_widgets/ModalTemplate/ModalTemplate.types'

export const ModalTemplateWrapper = styled.div<TModalTemplateStyleProps>`
    position: absolute;
    z-index: 2000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    transition: opacity 0.1s ease-in-out 0.07s, visibility 0.1s ease-in 0s;
`

export const ModalDialogWindow = styled.div`
    position: absolute;
    z-index: 2010;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    min-width: 40rem;
    border-radius: 2rem;
    background-color: var(--white-color);
`
export const ModalHeader = styled.div`
    padding: 0.5rem 1rem;
    background-color: var(--dark-color);
    font-size: 2rem;
    color: var(--white-color);
`

export const ModalBody = styled.div`
    padding: 1rem;
`

export const ModalFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border-top: 1px solid var(--dark-color);
`

export const ModalActionButton = styled.button`
    padding: 0.5rem 0.7rem;
    border: 1px solid var(--brand-color);
    border-radius: 1rem;
    background-color: var(--brand-color);
    transition: background-color 0.2s ease-in;

    &:hover {
        background-color: var(--white-color);
    }
`
