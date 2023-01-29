import styled from 'styled-components'
import { ISwitcherLabelStyleProps, ISwitcherViewStyleProps } from '_entities/Switcher/Switcher.types'

export const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const SwitcherLabel = styled.label<ISwitcherLabelStyleProps>`
  font-size: ${props => props.fontSizeLabel || 'inherit'};
`

export const SwitcherView = styled.div<ISwitcherViewStyleProps>`
  position: relative;
  width: 4.5rem;
  height: 2rem;
  border: 1.2rem solid aqua;
  border-radius: 1.2rem;
  background-color: aqua;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateX(${props => props.value ? '-50%' : '50%'}) translateY(-50%);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: red;
    transition: transform .2s ease;
  }
`
