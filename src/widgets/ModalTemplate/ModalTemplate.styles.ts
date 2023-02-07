import styled from 'styled-components'
import { TModalTemplateStyleProps } from '_widgets/ModalTemplate/ModalTemplate.types'

export const ModalTemplateWrapper = styled.div<TModalTemplateStyleProps>`
  position: absolute;
  z-index: 2000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.1s ease-in-out 0.07s, visibility 0.1s ease-in 0s;
`
