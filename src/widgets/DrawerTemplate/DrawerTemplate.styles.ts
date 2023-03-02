import styled from 'styled-components'
import { TDrawerTemplateStyleProps } from '_widgets/DrawerTemplate/DrawerTemplate.types'

export const DrawerTemplateWrapper = styled.div<TDrawerTemplateStyleProps>`
    position: absolute;
    z-index: 4000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    transition: opacity 0.1s ease-in-out 0.07s, visibility 0.1s ease-in-out 0s;
`

export const DrawerPanelWrapper = styled.div<TDrawerTemplateStyleProps>`
    position: absolute;
    z-index: 4001;
    top: 0;
    right: 0;
    bottom: 0;
    transform: translateX(${(props) => (props.isOpen ? 0 : '100%')});
    max-width: 50rem;
    min-width: 20rem;
    height: 100%;
    padding: 2rem;
    background: #fff;
    transition: transform 0.1s ease-in;
`
