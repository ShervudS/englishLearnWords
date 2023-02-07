import React from 'react'
import IconArrowDown from '_assets/images/icons/arrowDown.svg'
import IconClose from '_assets/images/icons/close.svg'
import IconMenu from '_assets/images/icons/menu.svg'
import { IIcons } from '_entities/Icons/Icons.types'

export const Icons: React.FunctionComponent<IIcons> = ({ name }) => {
    const iconList = {
        arrowDown: <IconArrowDown />,
        close: <IconClose />,
        menu: <IconMenu />,
    }

    // @ts-ignore // TODO: Победить типы
    return <>{iconList[name]}</>
}
