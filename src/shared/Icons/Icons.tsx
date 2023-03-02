import React from 'react'
import IconArrowDown from '_assets/images/icons/arrowDown.svg'
import IconClose from '_assets/images/icons/close.svg'
import IconMenu from '_assets/images/icons/menu.svg'
import { IIcons, TIconsConfig } from '_/shared/Icons/Icons.types'
import { ICON_NAMES } from '_assets/constants/namesOnConfig'

export const Icons: React.FunctionComponent<IIcons> = ({ name }) => {
    const iconsConfig: TIconsConfig = {
        [ICON_NAMES.ARROW_DOWN]: <IconArrowDown />,
        [ICON_NAMES.CLOSE]: <IconClose />,
        [ICON_NAMES.MENU]: <IconMenu />,
    }

    return <>{iconsConfig[name]}</>
}
