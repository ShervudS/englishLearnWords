import React, { useState, useEffect } from 'react'
import { SwitcherView, SwitcherWrapper, SwitcherLabel } from '_entities/Switcher/Switcher.styles'
import { ISwitcher } from '_entities/Switcher/Switcher.types'

export const Switcher: React.FunctionComponent<ISwitcher> = (props) => {
    const { startLabel, endLabel, id, sizeMultiplier = 1, fontSizeLabel = '1.6rem', value, onAction } = props
    const [switchState, setSwitchState] = useState<boolean>(value)

    const toggleSwitcher = () => setSwitchState(prev => !prev)

    useEffect(() => {
        onAction(switchState)
    }, [switchState])

    return (
        <SwitcherWrapper>
            <SwitcherLabel fontSizeLabel={fontSizeLabel}>{startLabel}</SwitcherLabel>
            <input id={id} type='checkbox' hidden checked={switchState} />
            <SwitcherView value={switchState} onClick={toggleSwitcher} />
            <SwitcherLabel fontSizeLabel={fontSizeLabel}>{endLabel}</SwitcherLabel>
        </SwitcherWrapper>
    )
}
